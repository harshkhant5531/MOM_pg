import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';
import { user_role } from '@/lib/generated/prisma';

/**
 * PRODUCTION-READY MIDDLEWARE CONFIGURATION
 */

// 1. Environment Configuration
const JWT_SECRET_STR = process.env.JWT_SECRET;
if (!JWT_SECRET_STR) {
    if (process.env.NODE_ENV === 'production') {
        throw new Error('CRITICAL: JWT_SECRET environment variable is missing in production.');
    }
    console.warn('WARNING: JWT_SECRET is not defined. Using insecure fallback for development.');
}
const JWT_SECRET = new TextEncoder().encode(JWT_SECRET_STR || 'your-secret-key');

// 2. Route Definitions
const PUBLIC_ROUTES = new Set(['/', '/login', '/register', '/contact', '/demo']);

const ROLE_DASHBOARDS: Record<user_role, string> = {
    [user_role.ADMIN]: '/admin',
    [user_role.CONVENER]: '/convener',
    [user_role.STAFF]: '/staff',
};

// Route prefixes that require specific roles
const ROLE_ACCESS: Record<user_role, string[]> = {
    [user_role.ADMIN]: ['/admin'],
    [user_role.CONVENER]: ['/convener'],
    [user_role.STAFF]: ['/staff'],
};

/**
 * Types for JWT Payload
 */
interface JWTPayload {
    userId: string;
    email: string;
    role: user_role;
}

/**
 * Helper to verify JWT token in Edge Runtime
 */
async function verifyToken(token: string): Promise<JWTPayload | null> {
    try {
        const { payload } = await jwtVerify(token, JWT_SECRET);
        return payload as unknown as JWTPayload;
    } catch (error) {
        // Log more descriptive error if needed
        return null;
    }
}

/**
 * MAIN MIDDLEWARE LOGIC
 */
export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const token = request.cookies.get('token')?.value;

    // 1. Handle Public Routes
    const isPublicRoute = PUBLIC_ROUTES.has(pathname);

    // 2. Redirect authenticated users away from login/register
    if ((pathname === '/login' || pathname === '/register') && token) {
        const decoded = await verifyToken(token);
        if (decoded?.role && ROLE_DASHBOARDS[decoded.role]) {
            return NextResponse.redirect(new URL(ROLE_DASHBOARDS[decoded.role], request.url));
        }
    }

    if (isPublicRoute) {
        return NextResponse.next();
    }

    // 3. Authentication Check for Protected Routes
    if (!token) {
        const loginUrl = new URL('/login', request.url);
        loginUrl.searchParams.set('redirect', pathname);
        return NextResponse.redirect(loginUrl);
    }

    const decoded = await verifyToken(token);

    // 4. Handle Invalid/Expired Token
    if (!decoded) {
        const response = NextResponse.redirect(new URL('/login', request.url));
        response.cookies.delete('token'); // Clear invalid token
        return response;
    }

    // 5. Role-Based Access Control (RBAC)
    // Find if the current path requires a specific role
    const requiredRole = Object.entries(ROLE_ACCESS).find(([_, prefixes]) => 
        prefixes.some(prefix => pathname.startsWith(prefix))
    )?.[0] as user_role | undefined;

    if (requiredRole && decoded.role !== requiredRole) {
        // Unauthorized access to role-specific route
        console.warn(`Unauthorized access attempt: User ${decoded.email} (${decoded.role}) tried to access ${pathname}`);
        
        // Redirect to user's authorized dashboard
        const authorizedDashboard = ROLE_DASHBOARDS[decoded.role] || '/';
        return NextResponse.redirect(new URL(authorizedDashboard, request.url));
    }

    // 6. Security Headers & Performance
    const response = NextResponse.next();
    
    // Add security headers
    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    
    // Pass user info to downstream components via headers (optional but useful)
    response.headers.set('x-user-id', decoded.userId);
    response.headers.set('x-user-role', decoded.role);

    return response;
}

/**
 * Middleware Matcher Configuration
 */
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public files (manifest.json, images, etc.)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|manifest.json|.*\\..*).*)',
    ],
};

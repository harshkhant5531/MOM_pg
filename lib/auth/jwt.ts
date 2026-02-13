import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";
import { user_role } from "@/lib/generated/prisma";

const JWT_SECRET_STR = process.env.JWT_SECRET || "your-secret-key";
const JWT_SECRET = new TextEncoder().encode(JWT_SECRET_STR);

export type JwtPayload = {
  userId: string;
  email: string;
  role: user_role;
};

export async function getTokenFromRequest(req: NextRequest) {
  const auth = req.headers.get("authorization");
  if (auth?.toLowerCase().startsWith("bearer ")) return auth.slice(7).trim();

  // Fallback to cookie token (matches existing server-action behavior)
  try {
    const cookieStore = await cookies();
    return cookieStore.get("token")?.value ?? null;
  } catch {
    // cookies() might fail in some contexts (like during static generation or certain middleware flows)
    return req.cookies.get("token")?.value ?? null;
  }
}

export async function requireJwt(req: NextRequest): Promise<JwtPayload> {
  const token = await getTokenFromRequest(req);
  if (!token) throw Object.assign(new Error("Unauthorized: No token provided"), { status: 401 });
  
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload as unknown as JwtPayload;
  } catch (error) {
    console.error("JWT Verification failed:", error);
    throw Object.assign(new Error("Unauthorized: Invalid or expired token"), { status: 401 });
  }
}

/**
 * Edge-compatible JWT signing
 */
export async function signJwt(payload: JwtPayload): Promise<string> {
  return new SignJWT(payload as any)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1d")
    .sign(JWT_SECRET);
}



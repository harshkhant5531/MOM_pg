import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";
import { user_role } from "@/lib/generated/prisma";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export type JwtPayload = {
  userId: string;
  email: string;
  role: user_role;
};

export async function getTokenFromRequest(req: NextRequest) {
  const auth = req.headers.get("authorization");
  if (auth?.toLowerCase().startsWith("bearer ")) return auth.slice(7).trim();

  // Fallback to cookie token (matches existing server-action behavior)
  const cookieStore = await cookies();
  return cookieStore.get("token")?.value ?? null;
}

export async function requireJwt(req: NextRequest): Promise<JwtPayload> {
  const token = await getTokenFromRequest(req);
  if (!token) throw Object.assign(new Error("Unauthorized"), { status: 401 });
  try {
    return jwt.verify(token, JWT_SECRET) as JwtPayload;
  } catch {
    throw Object.assign(new Error("Unauthorized"), { status: 401 });
  }
}



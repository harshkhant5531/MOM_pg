import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";
import { created, fail, serverError } from "@/lib/api/response";
import { user_role } from "@/lib/generated/prisma";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const { password, role } = body;
    const email = body.email?.trim().toLowerCase();

    if (!email || !password) return fail("Email and password are required", 400);

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return fail("Invalid credentials", 401);

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return fail("Invalid credentials", 401);

    if (role) {
      const requestedRole = String(role).toUpperCase().trim() as user_role;
      if (!Object.values(user_role).includes(requestedRole)) return fail("Invalid role selected", 400);
      if (!user.role || user.role !== requestedRole) return fail(`Account exists but not as ${requestedRole}`, 403);
    }

    const token = jwt.sign({ userId: user.id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: "1d" });

    const cookieStore = await cookies();
    cookieStore.set({
      name: "token",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24,
      path: "/",
      sameSite: "strict",
    });

    return created(
      {
        token,
        user: { id: user.id, fullName: user.fullName, email: user.email, role: user.role },
      },
      "Login successful"
    );
  } catch (e: any) {
    console.error("API login error:", e);
    return serverError();
  }
}



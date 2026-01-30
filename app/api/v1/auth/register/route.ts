import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { user_role } from "@/lib/generated/prisma";
import { NextRequest } from "next/server";
import { created, fail, serverError } from "@/lib/api/response";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const { fullName, email, phone, organization, password, role } = body;

    if (!fullName || !email || !password || !role) return fail("Missing required fields", 400);

    const normalizedEmail = String(email).trim().toLowerCase();
    const existingUser = await prisma.user.findUnique({ where: { email: normalizedEmail } });
    if (existingUser) return fail("User with this email already exists", 409);

    const roleEnum = String(role).toUpperCase().trim() as user_role;
    if (!Object.values(user_role).includes(roleEnum)) return fail("Invalid role selected", 400);

    const hashedPassword = await bcrypt.hash(String(password), 10);

    const user = await prisma.user.create({
      data: {
        fullName,
        email: normalizedEmail,
        phone: phone ?? null,
        organization: organization ?? null,
        password: hashedPassword,
        role: roleEnum,
      },
      select: { id: true, fullName: true, email: true, role: true, createdAt: true },
    });

    return created(user, "User created successfully");
  } catch (e: any) {
    console.error("API register error:", e);
    // Handle Prisma unique constraint just in case concurrent signup happens.
    if (e?.code === "P2002") return fail("User with this email already exists", 409);
    return serverError();
  }
}



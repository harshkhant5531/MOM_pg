"use server";

import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import prisma from "@/lib/prisma";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "your-secret-key");

export async function getCurrentUser() {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("token")?.value;

        if (!token) return null;

        const { payload } = await jwtVerify(token, JWT_SECRET);
        return payload as { userId: string; email: string; role: string };
    } catch (error) {
        return null;
    }
}

export async function getUserProfile() {
    try {
        const user = await getCurrentUser();
        if (!user) return null;

        const dbUser = await prisma.user.findUnique({
            where: { id: user.userId }
        });

        if (!dbUser) return null;

        return {
            id: dbUser.id,
            fullName: dbUser.fullName,
            email: dbUser.email,
            role: dbUser.role
        };
    } catch (error) {
        return null;
    }
}

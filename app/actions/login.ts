"use server";

import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export async function loginUser(formData: any) {
    try {
        const { password, role } = formData;
        const email = formData.email?.trim().toLowerCase();

        if (!email || !password) {
            return { success: false, message: "Email and password are required" };
        }

        const user = await prisma.user.findUnique({
            where: { email },
        });

        console.log("Login attempt for email:", email);
        console.log("User found:", !!user);

        if (!user) {
            return { success: false, message: "Invalid credentials" };
        }

        console.log("Stored role:", user.role, "Requested role:", role);

        // Verify password
        const isValidPassword = await bcrypt.compare(password, user.password);
        console.log("Password valid:", isValidPassword);

        if (!isValidPassword) {
            return { success: false, message: "Invalid credentials" };
        }

        // Verify role
        // The UI sends 'admin', 'staff' etc. The DB has 'ADMIN', 'STAFF'.
        const requestedRole = role?.toUpperCase().trim();
        console.log("Comparing roles:", user.role, requestedRole);

        if (role && user.role !== requestedRole) {
            return { success: false, message: `Account exists but not as ${role}` };
        }

        // Generate Token
        const token = jwt.sign(
            { userId: user.id, email: user.email, role: user.role },
            JWT_SECRET as string,
            { expiresIn: "1d" }
        );

        // Set Cookie
        const cookieStore = await cookies();
        cookieStore.set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24, // 1 day
            path: "/",
            sameSite: 'strict'
        });

        // Also set a non-httpOnly cookie for client-side checks if needed, or just rely on server actions
        // For now, simple token cookie.

        return {
            success: true,
            message: "Login successful",
            user: {
                id: user.id,
                fullName: user.fullName,
                email: user.email,
                role: user.role
            }
        };

    } catch (error: any) {
        console.error("Login error details:", {
            message: error.message,
            stack: error.stack,
            code: error.code,
            meta: error.meta
        });
        return { success: false, message: "Internal server error" };
    }
}

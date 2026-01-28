"use server";

import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { user_role } from "@/lib/generated/prisma";

export async function registerUser(formData: any) {
    try {
        const { fullName, email, phone, organization, password, role } = formData;

        // input validation
        if (!fullName || !email || !password || !role) {
            return { success: false, message: "Missing required fields" };
        }

        // Check if user exists
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return { success: false, message: "User with this email already exists" };
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Map role string to enum
        const roleEnum = role.toUpperCase() as user_role;

        // Validate role
        if (!Object.values(user_role).includes(roleEnum)) {
            return { success: false, message: "Invalid role selected" };
        }

        // Create user
        await prisma.user.create({
            data: {
                fullName,
                email,
                phone,
                organization,
                password: hashedPassword,
                role: roleEnum,
            },
        });

        return { success: true, message: "User created successfully" };

    } catch (error: any) {
        console.error("Registration error details:", {
            message: error.message,
            stack: error.stack,
            code: error.code,
            meta: error.meta
        });
        return { success: false, message: "Internal server error: " + (error.message || String(error)) };
    }
}

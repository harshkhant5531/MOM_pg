"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getActionItems(staffId?: number) {
    const where: any = {};
    if (staffId) {
        where.StaffID = staffId;
    }

    let items = await prisma.actionitem.findMany({
        where,
        include: {
            staff: true,
            meetings: true
        },
        orderBy: { DueDate: 'asc' }
    });

    // Auto-seed for demonstration if empty
    if (items.length === 0 && !staffId) {
        const staff = await prisma.staff.findMany();
        if (staff.length >= 2) {
            await prisma.actionitem.createMany({
                data: [
                    {
                        Description: "Prepare Q1 budget forecast",
                        Status: "PENDING",
                        StaffID: staff[0].StaffID,
                        DueDate: new Date("2026-02-03")
                    },
                    {
                        Description: "Complete performance reviews",
                        Status: "IN_PROGRESS",
                        StaffID: staff[1].StaffID,
                        DueDate: new Date("2026-02-10")
                    }
                ]
            });
            items = await prisma.actionitem.findMany({
                where,
                include: {
                    staff: true,
                    meetings: true
                },
                orderBy: { DueDate: 'asc' }
            });
        }
    }

    return items;
}

export async function updateActionItemStatus(id: number, status: "PENDING" | "IN_PROGRESS" | "COMPLETED") {
    const item = await prisma.actionitem.update({
        where: { ActionItemID: id },
        data: { Status: status, Modified: new Date() }
    });
    revalidatePath("/convener");
    revalidatePath("/staff");
    return item;
}

export async function createActionItem(data: {
    meetingId?: number,
    staffId?: number,
    description: string,
    dueDate?: Date,
    status?: "PENDING" | "IN_PROGRESS" | "COMPLETED"
}) {
    const item = await prisma.actionitem.create({
        data: {
            MeetingID: data.meetingId,
            StaffID: data.staffId,
            Description: data.description,
            DueDate: data.dueDate,
            Status: data.status || "PENDING"
        }
    });
    revalidatePath("/convener");
    revalidatePath("/staff");
    return item;
}

"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getMeetings() {
    return await prisma.meetings.findMany({
        include: {
            meetingtype: true,
            venue: true,
            meetingmember: {
                include: { staff: true }
            }
        },
        orderBy: { MeetingDate: 'desc' }
    });
}

export async function createMeeting(data: any) {
    const meeting = await prisma.meetings.create({
        data: {
            MeetingDate: new Date(data.date),
            MeetingTypeID: parseInt(data.typeId),
            VenueID: data.venueId ? parseInt(data.venueId) : null,
            MeetingDescription: data.description,
            IsCancelled: false
        }
    });

    if (data.participants && data.participants.length > 0) {
        await prisma.meetingmember.createMany({
            data: data.participants.map((staffId: number) => ({
                MeetingID: meeting.MeetingID,
                StaffID: staffId,
                IsPresent: false
            }))
        });
    }

    revalidatePath("/admin/meetings");
    revalidatePath("/admin/calendar");
    revalidatePath("/admin/attendance");
    return meeting;
}

export async function updateAttendance(meetingId: number, attendanceData: { staffId: number, isPresent: boolean, remarks?: string }[]) {
    for (const item of attendanceData) {
        await prisma.meetingmember.updateMany({
            where: {
                MeetingID: meetingId,
                StaffID: item.staffId
            },
            data: {
                IsPresent: item.isPresent,
                Remarks: item.remarks || ""
            }
        });
    }
    revalidatePath("/admin/attendance");
    revalidatePath("/admin/reports");
}

export async function cancelMeeting(id: number, reason: string) {
    await prisma.meetings.update({
        where: { MeetingID: id },
        data: {
            IsCancelled: true,
            CancellationReason: reason,
            CancellationDateTime: new Date()
        }
    });
    revalidatePath("/admin/meetings");
}

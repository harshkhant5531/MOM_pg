"use server";

import prisma from "@/lib/prisma";

export async function getDashboardStats() {
    const totalMeetings = await prisma.meetings.count();
    const scheduledMeetings = await prisma.meetings.count({
        where: {
            IsCancelled: false,
            MeetingDate: { gte: new Date() }
        }
    });
    const completedMeetings = await prisma.meetings.count({
        where: {
            IsCancelled: false,
            MeetingDate: { lt: new Date() }
        }
    });
    const cancelledMeetings = await prisma.meetings.count({
        where: { IsCancelled: true }
    });

    const upcomingMeetings = await prisma.meetings.findMany({
        where: {
            IsCancelled: false,
            MeetingDate: { gte: new Date() }
        },
        include: {
            meetingtype: true,
            venue: true
        },
        take: 5,
        orderBy: { MeetingDate: 'asc' }
    });

    const recentMoms = await prisma.meetings.findMany({
        where: {
            IsCancelled: false,
            MeetingDate: { lt: new Date() }
        },
        include: {
            meetingtype: true
        },
        take: 5,
        orderBy: { MeetingDate: 'desc' }
    });

    return {
        stats: {
            total: totalMeetings,
            scheduled: scheduledMeetings,
            completed: completedMeetings,
            cancelled: cancelledMeetings
        },
        upcomingMeetings,
        recentMoms
    };
}

"use server";

import prisma from "@/lib/prisma";

export async function getDashboardStats(staffEmail?: string) {
    let staffId: number | null = null;

    if (staffEmail) {
        const staffMember = await prisma.staff.findFirst({
            where: { EmailAddress: staffEmail }
        });
        if (staffMember) {
            staffId = staffMember.StaffID;
        }
    }

    const whereClause: any = {};
    if (staffId) {
        whereClause.meetingmember = {
            some: { StaffID: staffId }
        };
    }

    const totalMeetings = await prisma.meetings.count({ where: whereClause });
    const scheduledMeetings = await prisma.meetings.count({
        where: {
            ...whereClause,
            IsCancelled: false,
            MeetingDate: { gte: new Date() }
        }
    });
    const completedMeetings = await prisma.meetings.count({
        where: {
            ...whereClause,
            IsCancelled: false,
            MeetingDate: { lt: new Date() }
        }
    });
    const cancelledMeetings = await prisma.meetings.count({
        where: { ...whereClause, IsCancelled: true }
    });

    // Calculate Attendance Rate
    let attendanceRate = 0;
    if (completedMeetings > 0) {
        const totalPossibleAttendance = await prisma.meetingmember.count({
            where: {
                meetings: {
                    ...whereClause,
                    IsCancelled: false,
                    MeetingDate: { lt: new Date() }
                }
            }
        });

        const totalActualAttendance = await prisma.meetingmember.count({
            where: {
                IsPresent: true,
                meetings: {
                    ...whereClause,
                    IsCancelled: false,
                    MeetingDate: { lt: new Date() }
                }
            }
        });

        attendanceRate = totalPossibleAttendance > 0 ? (totalActualAttendance / totalPossibleAttendance) * 100 : 0;
    }

    const upcomingMeetings = await prisma.meetings.findMany({
        where: {
            ...whereClause,
            IsCancelled: false,
            MeetingDate: { gte: new Date() }
        },
        include: {
            meetingtype: true,
            venue: true,
            meetingmember: {
                include: { staff: true }
            }
        },
        take: 5,
        orderBy: { MeetingDate: 'asc' }
    });

    const recentMoms = await prisma.meetings.findMany({
        where: {
            ...whereClause,
            IsCancelled: false,
            MeetingDate: { lt: new Date() }
        },
        include: {
            meetingtype: true,
            venue: true
        },
        take: 5,
        orderBy: { MeetingDate: 'desc' }
    });

    return {
        stats: {
            total: totalMeetings,
            scheduled: scheduledMeetings,
            completed: completedMeetings,
            cancelled: cancelledMeetings,
            attendanceRate: Math.round(attendanceRate)
        },
        upcomingMeetings,
        recentMoms
    };
}

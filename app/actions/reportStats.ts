"use server";

import prisma from "@/lib/prisma";

export async function getReportStats(staffEmail?: string) {
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

    // Basic Stats
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

    // Attendance Rate
    let attendanceRate = 0;
    if (completedMeetings > 0) {
        const totalPossibleAttendance = await prisma.meetingmember.count({
            where: {
                StaffID: staffId || undefined,
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
                StaffID: staffId || undefined,
                meetings: {
                    ...whereClause,
                    IsCancelled: false,
                    MeetingDate: { lt: new Date() }
                }
            }
        });

        attendanceRate = totalPossibleAttendance > 0 ? (totalActualAttendance / totalPossibleAttendance) * 100 : 0;
    }

    // Co-Participants (Unique staff members in same meetings)
    let coParticipantsCount = 0;
    if (staffId) {
        const userMeetings = await prisma.meetingmember.findMany({
            where: { StaffID: staffId },
            select: { MeetingID: true }
        });
        const meetingIds = userMeetings.map(m => m.MeetingID);
        
        const otherMembers = await prisma.meetingmember.groupBy({
            by: ['StaffID'],
            where: {
                MeetingID: { in: meetingIds },
                StaffID: { not: staffId }
            }
        });
        coParticipantsCount = otherMembers.length;
    } else {
        coParticipantsCount = await prisma.staff.count();
    }

    // Engagement Trend (Last 12 Months)
    const engagementTrend = [];
    const now = new Date();
    for (let i = 11; i >= 0; i--) {
        const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
        const monthStart = new Date(d.getFullYear(), d.getMonth(), 1);
        const monthEnd = new Date(d.getFullYear(), d.getMonth() + 1, 0, 23, 59, 59);

        const invited = await prisma.meetings.count({
            where: {
                ...whereClause,
                MeetingDate: { gte: monthStart, lte: monthEnd }
            }
        });

        const attended = await prisma.meetingmember.count({
            where: {
                IsPresent: true,
                StaffID: staffId || undefined,
                meetings: {
                    MeetingDate: { gte: monthStart, lte: monthEnd },
                    IsCancelled: false
                }
            }
        });

        engagementTrend.push({
            month: d.toLocaleString('default', { month: 'short' }),
            invited,
            attended
        });
    }

    return {
        stats: {
            total: totalMeetings,
            scheduled: scheduledMeetings,
            completed: completedMeetings,
            cancelled: cancelledMeetings,
            attendanceRate: Math.round(attendanceRate),
            coParticipantsCount
        },
        engagementTrend,
        statusProportions: {
            efficiency: Math.round(attendanceRate),
            upcoming: totalMeetings > 0 ? Math.round((scheduledMeetings / totalMeetings) * 100) : 0,
            archived: totalMeetings > 0 ? Math.round((completedMeetings / totalMeetings) * 100) : 0
        }
    };
}

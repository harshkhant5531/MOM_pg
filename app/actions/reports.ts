"use server";

import prisma from "@/lib/prisma";

export async function getReportStats() {
    const now = new Date();
    const currentYear = now.getFullYear();

    // 1. Monthly Meeting Trends (Last 12 months)
    const monthlyTrends = [];
    for (let i = 11; i >= 0; i--) {
        const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
        const startOfMonth = new Date(d.getFullYear(), d.getMonth(), 1);
        const endOfMonth = new Date(d.getFullYear(), d.getMonth() + 1, 0);

        const count = await prisma.meetings.count({
            where: {
                MeetingDate: {
                    gte: startOfMonth,
                    lte: endOfMonth
                }
            }
        });

        monthlyTrends.push({
            month: d.toLocaleString('default', { month: 'short' }),
            count
        });
    }

    // 2. Status Distribution
    const completed = await prisma.meetings.count({
        where: {
            IsCancelled: false,
            MeetingDate: { lt: now }
        }
    });

    const scheduled = await prisma.meetings.count({
        where: {
            IsCancelled: false,
            MeetingDate: { gte: now }
        }
    });

    const cancelled = await prisma.meetings.count({
        where: { IsCancelled: true }
    });

    const total = completed + scheduled + cancelled;

    const statusDistribution = [
        { label: "Completed", count: completed, percentage: total > 0 ? Math.round((completed / total) * 100) : 0, color: "blue" },
        { label: "Scheduled", count: scheduled, percentage: total > 0 ? Math.round((scheduled / total) * 100) : 0, color: "indigo" },
        { label: "Cancelled", count: cancelled, percentage: total > 0 ? Math.round((cancelled / total) * 100) : 0, color: "red" }
    ];

    return {
        monthlyTrends,
        statusDistribution,
        summary: {
            total,
            completed,
            scheduled,
            cancelled
        }
    };
}

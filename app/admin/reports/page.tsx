"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    FileBox,
    Download,
    ChevronDown,
    Calendar,
    TrendingUp,
    Users,
    CheckCircle2,
    Loader2
} from "lucide-react";
import { getMeetings } from "@/app/actions/meetings";
import { getDashboardStats } from "@/app/actions/dashboard";

export default function ReportsPage() {
    const [data, setData] = useState<any>(null);
    const [meetings, setMeetings] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const stats = await getDashboardStats();
                const meetingList = await getMeetings();
                setData(stats);
                setMeetings(meetingList);
            } catch (err) {
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[600px] text-slate-400 gap-3 font-bold">
                <Loader2 className="animate-spin text-blue-500" size={32} />
                Compiling reports...
            </div>
        );
    }

    const stats = [
        { label: "Total Sessions", value: data?.stats.total || "0", icon: Calendar, color: "blue" },
        { label: "Completion Rate", value: data?.stats.total > 0 ? `${Math.round((data.stats.completed / data.stats.total) * 100)}%` : "0%", icon: TrendingUp, color: "green" },
        { label: "Total Upcoming", value: data?.stats.scheduled || "0", icon: Users, color: "blue" },
        { label: "Avg Attendance", value: "88%", icon: CheckCircle2, color: "cyan" }, // Hardcoded as placeholder for complex calculation
    ];

    return (
        <div className="space-y-8 max-w-[1600px] mx-auto pb-12">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 leading-tight">Reports & Analytics</h1>
                    <p className="text-slate-500 font-medium text-[14px]">View meeting statistics and generate reports</p>
                </div>
                <div className="flex gap-3">
                    <button className="px-4 py-2 rounded-xl border border-slate-100 bg-white text-slate-600 text-[13px] font-bold flex items-center gap-2 hover:bg-slate-50 transition-all active:scale-95 shadow-sm">
                        <FileBox size={16} /> Export Excel
                    </button>
                    <button className="px-4 py-2 rounded-xl border border-slate-100 bg-white text-slate-600 text-[13px] font-bold flex items-center gap-2 hover:bg-slate-50 transition-all active:scale-95 shadow-sm">
                        <Download size={16} /> Export PDF
                    </button>
                </div>
            </div>

            {/* Primary Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {stats.map((stat, idx) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-5 group hover:border-blue-200 transition-colors"
                    >
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${stat.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                                stat.color === 'green' ? 'bg-green-50 text-green-600' :
                                    'bg-cyan-50 text-cyan-600'
                            }`}>
                            <stat.icon size={22} strokeWidth={2.5} />
                        </div>
                        <div>
                            <p className="text-2xl font-black text-slate-900 leading-tight tracking-tight">{stat.value}</p>
                            <p className="text-[12px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Charts Section Mockups (Updated with real Distribution info) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                    <h3 className="font-bold text-slate-900 text-lg mb-10">Monthly Meeting Trend</h3>
                    <div className="h-64 relative flex items-end justify-between px-2">
                        <div className="absolute inset-0 flex items-center justify-center text-slate-300 text-sm italic font-medium">Insufficient data for trend analysis</div>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                    <h3 className="font-bold text-slate-900 text-lg mb-10">Meeting Status Distribution</h3>
                    <div className="flex items-center justify-center h-64 relative">
                        <div className="text-center">
                            <p className="text-4xl font-black text-slate-900">{data?.stats.total}</p>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Total Meetings recorded</p>
                            <div className="mt-6 flex gap-4 text-[11px] font-black uppercase">
                                <span className="text-blue-500">{data?.stats.scheduled} Scheduled</span>
                                <span className="text-green-500">{data?.stats.completed} Completed</span>
                                <span className="text-red-500">{data?.stats.cancelled} Cancelled</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Meeting Details Table */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-50">
                    <h3 className="font-bold text-slate-900 text-lg">Detailed List</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-slate-50/50">
                                <th className="px-8 py-4 text-[12px] font-black text-slate-400 uppercase tracking-widest">Meeting</th>
                                <th className="px-8 py-4 text-[12px] font-black text-slate-400 uppercase tracking-widest">Type</th>
                                <th className="px-8 py-4 text-[12px] font-black text-slate-400 uppercase tracking-widest">Date</th>
                                <th className="px-8 py-4 text-[12px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {meetings.map((meeting, idx) => {
                                const isPast = new Date(meeting.MeetingDate) < new Date();
                                const status = meeting.IsCancelled ? 'cancelled' : isPast ? 'completed' : 'scheduled';
                                return (
                                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                                        <td className="px-8 py-5 text-[14px] font-bold text-slate-700">{meeting.MeetingDescription}</td>
                                        <td className="px-8 py-5 text-[14px] font-medium text-slate-500">{meeting.meetingtype?.MeetingTypeName}</td>
                                        <td className="px-8 py-5 text-[14px] font-medium text-slate-500">{new Date(meeting.MeetingDate).toLocaleDateString()}</td>
                                        <td className="px-8 py-5">
                                            <span className={`px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider border ${status === 'scheduled' ? 'bg-blue-50 text-blue-500 border-blue-100' :
                                                    status === 'completed' ? 'bg-green-50 text-green-500 border-green-100' :
                                                        'bg-red-50 text-red-500 border-red-100'
                                                }`}>
                                                {status}
                                            </span>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

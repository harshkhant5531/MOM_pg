"use client";

import { useEffect, useState } from "react";
import {
    FileText,
    Download,
    TrendingUp,
    Users,
    Calendar,
    CheckCircle2,
    Loader2,
    ArrowUpRight,
    PieChart,
    BarChart3
} from "lucide-react";
import { motion } from "framer-motion";
import { getDashboardStats } from "@/app/actions/dashboard";
import { getMeetings } from "@/app/actions/meetings";
import { getReportStats } from "@/app/actions/reports";

export default function ReportsPage() {
    const [data, setData] = useState<any>(null);
    const [reportData, setReportData] = useState<any>(null);
    const [meetings, setMeetings] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [stats, m, report] = await Promise.all([
                    getDashboardStats(),
                    getMeetings(),
                    getReportStats()
                ]);
                setData(stats);
                setMeetings(m);
                setReportData(report);
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
            <div className="flex flex-col items-center justify-center min-h-[600px] text-slate-400 gap-4">
                <Loader2 size={32} className="animate-spin text-blue-500" />
                <span className="text-lg font-bold uppercase tracking-widest text-[10px]">Generating analytical reports...</span>
            </div>
        );
    }

    const reportCards = [
        { label: "Total Sessions", value: reportData?.summary.total || 0, icon: FileText, color: "blue" },
        { label: "Completion Rate", value: `${Math.round((reportData?.summary.completed / reportData?.summary.total) * 100) || 0}%`, icon: TrendingUp, color: "green" },
        { label: "Total Upcoming", value: reportData?.summary.scheduled || 0, icon: Calendar, color: "indigo" },
        { label: "Avg Attendance", value: `${data?.stats.attendanceRate || 0}%`, icon: Users, color: "orange" },
    ];

    return (
        <div className="p-8 pb-20 max-w-[1400px] mx-auto space-y-10 animate-in fade-in duration-500">
            <header className="flex justify-between items-end">
                <div>
                    <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight uppercase">Analytical results</h1>
                    <p className="text-slate-500 font-medium">Deep insights into organizational meeting performance and logistics</p>
                </div>
                <div className="flex gap-4">
                    <button className="bg-white dark:bg-gray-900 border border-slate-100 dark:border-gray-800 px-6 py-3 rounded-2xl font-bold text-sm flex items-center gap-2 hover:bg-slate-50 transition-all shadow-xl shadow-slate-500/5">
                        <Download size={18} /> Export Excel
                    </button>
                    <button className="bg-slate-900 text-white px-6 py-3 rounded-2xl font-bold text-sm flex items-center gap-2 hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20">
                        <Download size={18} /> Export PDF
                    </button>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {reportCards.map((card, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white dark:bg-gray-900 p-8 rounded-[32px] border border-slate-100 dark:border-gray-800 shadow-xl shadow-blue-500/5 relative overflow-hidden group"
                    >
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${card.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                            card.color === 'green' ? 'bg-green-50 text-green-600' :
                                card.color === 'indigo' ? 'bg-indigo-50 text-indigo-600' :
                                    'bg-orange-50 text-orange-600'
                            }`}>
                            <card.icon size={28} />
                        </div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{card.label}</p>
                        <h3 className="text-3xl font-black text-slate-900 dark:text-white">{card.value}</h3>
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <card.icon size={80} />
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-[40px] border border-slate-100 dark:border-gray-800 shadow-2xl shadow-blue-500/5 p-10">
                    <div className="flex items-center justify-between mb-10">
                        <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Meeting Trend (Monthly)</h3>
                        <BarChart3 className="text-slate-300" size={24} />
                    </div>
                    {/* Dynamic Chart */}
                    <div className="h-64 flex items-end gap-3 px-4">
                        {reportData?.monthlyTrends.map((item: any, i: number) => {
                            const maxCount = Math.max(...reportData.monthlyTrends.map((t: any) => t.count), 1);
                            const heightPercentage = (item.count / maxCount) * 100;
                            return (
                                <div key={i} className="flex-1 bg-slate-100 dark:bg-gray-800 rounded-t-xl group relative cursor-pointer hover:bg-blue-500 transition-all" style={{ height: `${Math.max(heightPercentage, 5)}%` }}>
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                        {item.count} Sessions
                                    </div>
                                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-400 uppercase">
                                        {i % 2 === 0 ? item.month : ''}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-[40px] border border-slate-100 dark:border-gray-800 shadow-2xl shadow-blue-500/5 p-10">
                    <div className="flex items-center justify-between mb-10">
                        <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Status Mix</h3>
                        <PieChart className="text-slate-300" size={24} />
                    </div>
                    <div className="relative h-64 flex items-center justify-center">
                        <div className="w-48 h-48 rounded-full border-[16px] border-slate-100 dark:border-gray-800 relative">
                            {/* Simple dynamic representation of the largest slice */}
                            <div
                                className="absolute inset-0 rounded-full border-[16px] border-blue-500 border-t-transparent border-r-transparent transition-all duration-1000"
                                style={{ transform: `rotate(${(reportData?.statusDistribution[0]?.percentage || 0) * 3.6}deg)` }}
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className="text-3xl font-black text-slate-900 dark:text-white">{reportData?.statusDistribution[0]?.percentage || 0}%</span>
                                <span className="text-[10px] font-black text-slate-400 uppercase">{reportData?.statusDistribution[0]?.label}</span>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4 mt-8">
                        {reportData?.statusDistribution.map((status: any, idx: number) => (
                            <div key={idx} className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className={`w-3 h-3 rounded-full ${status.color === 'blue' ? 'bg-blue-500' : status.color === 'indigo' ? 'bg-indigo-500' : 'bg-red-500'}`} />
                                    <span className="text-xs font-bold text-slate-600 dark:text-gray-400">{status.label}</span>
                                </div>
                                <span className="text-xs font-black text-slate-900 dark:text-white">{status.percentage}%</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-[40px] border border-slate-100 dark:border-gray-800 shadow-2xl shadow-blue-500/5 overflow-hidden">
                <div className="p-10 border-b border-slate-50 dark:border-gray-800 flex justify-between items-center">
                    <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Granular Session Report</h3>
                    <button className="text-blue-600 text-xs font-black uppercase tracking-widest flex items-center gap-2">
                        Audit All <ArrowUpRight size={16} />
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-slate-50/50 dark:bg-gray-800/50">
                                <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Description</th>
                                <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Type</th>
                                <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Date</th>
                                <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-gray-800">
                            {meetings.map((m) => (
                                <tr key={m.MeetingID} className="group hover:bg-slate-50 dark:hover:bg-gray-800/40 transition-colors">
                                    <td className="px-10 py-6 font-bold text-slate-800 dark:text-white capitalize">{m.MeetingDescription}</td>
                                    <td className="px-10 py-6">
                                        <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-black rounded-lg uppercase tracking-wider">
                                            {m.meetingtype?.MeetingTypeName}
                                        </span>
                                    </td>
                                    <td className="px-10 py-6 text-center text-sm font-bold text-slate-500 dark:text-gray-400">
                                        {new Date(m.MeetingDate).toLocaleDateString()}
                                    </td>
                                    <td className="px-10 py-6 text-center">
                                        {m.IsCancelled ? (
                                            <span className="text-red-500 font-black text-[10px] uppercase tracking-widest">Cancelled</span>
                                        ) : new Date(m.MeetingDate) < new Date() ? (
                                            <span className="text-green-500 font-black text-[10px] uppercase tracking-widest">Archived</span>
                                        ) : (
                                            <span className="text-blue-600 font-black text-[10px] uppercase tracking-widest">Live</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

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
    BarChart3,
    Activity,
    FileSpreadsheet
} from "lucide-react";
import { motion } from "framer-motion";
import { getDashboardStats } from "@/app/actions/dashboard";
import { getMeetings } from "@/app/actions/meetings";

export default function ReportsPage() {
    const [data, setData] = useState<any>(null);
    const [meetings, setMeetings] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [stats, m] = await Promise.all([
                    getDashboardStats(),
                    getMeetings()
                ]);
                setData(stats);
                setMeetings(m);
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
                <span className="text-lg font-bold uppercase tracking-widest text-[10px]">Compiling chronological analytics...</span>
            </div>
        );
    }

    const reportCards = [
        { label: "Invited Sessions", value: data?.stats.total || 0, icon: FileText, color: "blue" },
        { label: "Participation Rate", value: "88%", icon: Activity, color: "green" },
        { label: "Imminent Events", value: data?.stats.scheduled || 0, icon: Calendar, color: "indigo" },
        { label: "Co-Participants", value: "42", icon: Users, color: "orange" },
    ];

    return (
        <div className="p-8 pb-20 max-w-[1400px] mx-auto space-y-12 animate-in fade-in duration-500">
            <header className="flex justify-between items-end">
                <div>
                    <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight uppercase">Analytical perspective</h1>
                    <p className="text-slate-500 font-medium">Deep insights into your organizational engagement and meeting performance</p>
                </div>
                <div className="flex gap-4">
                    <button className="bg-white dark:bg-gray-900 border border-slate-100 dark:border-gray-800 px-6 py-4 rounded-3xl font-black text-[10px] uppercase tracking-widest flex items-center gap-2 hover:bg-slate-50 transition-all shadow-xl shadow-slate-500/5">
                        <FileSpreadsheet size={18} className="text-blue-500" /> Export XLS
                    </button>
                    <button className="bg-slate-900 text-white px-6 py-4 rounded-3xl font-black text-[10px] uppercase tracking-widest flex items-center gap-2 hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20">
                        <Download size={18} className="text-blue-400" /> Export PDF
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
                        className="bg-white dark:bg-gray-900 p-8 rounded-[40px] border border-slate-100 dark:border-gray-800 shadow-xl shadow-blue-500/5 relative overflow-hidden group"
                    >
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-inner ${card.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                            card.color === 'green' ? 'bg-green-50 text-green-600' :
                                card.color === 'indigo' ? 'bg-indigo-50 text-indigo-600' :
                                    'bg-orange-50 text-orange-600'
                            }`}>
                            <card.icon size={28} />
                        </div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{card.label}</p>
                        <h3 className="text-4xl font-black text-slate-900 dark:text-white leading-none">{card.value}</h3>
                        <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <card.icon size={120} />
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-[48px] border border-slate-100 dark:border-gray-800 shadow-2xl shadow-blue-500/5 p-12">
                    <div className="flex items-center justify-between mb-12">
                        <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Engagement Trend</h3>
                        <div className="flex gap-4">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-blue-500" />
                                <span className="text-[10px] font-black text-slate-400 uppercase">Invited</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500" />
                                <span className="text-[10px] font-black text-slate-400 uppercase">Attended</span>
                            </div>
                        </div>
                    </div>
                    {/* Mock Chart */}
                    <div className="h-64 flex items-end gap-3 px-4 relative">
                        <div className="absolute inset-x-0 top-0 h-px bg-slate-50 dark:bg-gray-800" />
                        <div className="absolute inset-x-0 top-1/2 h-px bg-slate-50 dark:bg-gray-800" />
                        {[30, 60, 40, 80, 55, 75, 50, 90, 70, 45, 85, 65].map((h, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center justify-end h-full gap-1">
                                <div className="w-full bg-green-500 rounded-lg group relative hover:bg-green-600 transition-all shadow-lg shadow-green-500/10" style={{ height: `${h - 15}%` }} />
                                <div className="w-full bg-blue-100 dark:bg-gray-800 rounded-lg h-3" />
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-8 px-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        <span>Jan</span>
                        <span>May</span>
                        <span>Sep</span>
                        <span>Dec</span>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-[48px] border border-slate-100 dark:border-gray-800 shadow-2xl shadow-blue-500/5 p-12">
                    <div className="flex items-center justify-between mb-12">
                        <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Status Proportions</h3>
                        <PieChart className="text-slate-300" size={24} />
                    </div>
                    <div className="relative h-64 flex items-center justify-center">
                        <div className="w-52 h-52 rounded-full border-[20px] border-slate-50 dark:border-gray-800 relative shadow-inner">
                            <div className="absolute inset-0 rounded-full border-[20px] border-blue-500 border-t-transparent border-r-transparent rotate-45" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className="text-4xl font-black text-slate-900 dark:text-white">72%</span>
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Efficiency</span>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4 mt-10">
                        <div className="flex items-center justify-between p-4 bg-slate-50/50 dark:bg-gray-800/50 rounded-2xl">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50" />
                                <span className="text-xs font-bold text-slate-600 dark:text-gray-300">Upcoming Obligations</span>
                            </div>
                            <span className="text-xs font-black text-slate-900 dark:text-white">28%</span>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-slate-50/50 dark:bg-gray-800/50 rounded-2xl">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50" />
                                <span className="text-xs font-bold text-slate-600 dark:text-gray-300">Finalized Archive</span>
                            </div>
                            <span className="text-xs font-black text-slate-900 dark:text-white">62%</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-[48px] border border-slate-100 dark:border-gray-800 shadow-2xl shadow-blue-500/5 overflow-hidden">
                <div className="p-12 border-b border-slate-50 dark:border-gray-800 flex justify-between items-center">
                    <div>
                        <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Granular Engagement Log</h3>
                        <p className="text-slate-400 text-xs font-medium mt-1">Detailed chronological trace of all session logic</p>
                    </div>
                    <button className="text-blue-600 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                        Deep Audit <ArrowUpRight size={18} />
                    </button>
                </div>
                <div className="overflow-x-auto text-left">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-slate-50/30 dark:bg-gray-800/30">
                                <th className="px-12 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Chronological Agenda</th>
                                <th className="px-12 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Classification</th>
                                <th className="px-12 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Reference Date</th>
                                <th className="px-12 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50 dark:divide-gray-800">
                            {meetings.map((m) => (
                                <tr key={m.MeetingID} className="group hover:bg-slate-50 dark:hover:bg-gray-800/40 transition-colors">
                                    <td className="px-12 py-8 font-black text-slate-800 dark:text-white capitalize text-lg">{m.MeetingDescription}</td>
                                    <td className="px-12 py-8">
                                        <span className="px-4 py-1.5 bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-[10px] font-black rounded-xl uppercase tracking-widest border border-blue-100 dark:border-blue-800">
                                            {m.meetingtype?.MeetingTypeName}
                                        </span>
                                    </td>
                                    <td className="px-12 py-8 text-center text-sm font-bold text-slate-400 uppercase italic">
                                        {new Date(m.MeetingDate).toLocaleDateString()}
                                    </td>
                                    <td className="px-12 py-8 text-center">
                                        {m.IsCancelled ? (
                                            <span className="text-red-500 font-black text-[10px] uppercase tracking-[0.2em] opacity-40">Cancelled</span>
                                        ) : new Date(m.MeetingDate) < new Date() ? (
                                            <span className="text-green-500 font-black text-[10px] uppercase tracking-[0.2em]">Archived</span>
                                        ) : (
                                            <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.2em]">Active</span>
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

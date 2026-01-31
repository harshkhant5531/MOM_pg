"use client";

import { useEffect, useState } from "react";
import {
    ChevronDown,
    Users,
    CheckCircle2,
    XCircle,
    Percent,
    Calendar,
    Clock,
    MapPin,
    Loader2,
    AlertCircle,
    UserCheck,
    BarChart3
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getMeetings } from "@/app/actions/meetings";

export default function AttendancePage() {
    const [meetings, setMeetings] = useState<any[]>([]);
    const [selectedMeetingId, setSelectedMeetingId] = useState<number | null>(null);
    const [selectedMeeting, setSelectedMeeting] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetch = async () => {
            try {
                const data = await getMeetings();
                setMeetings(data);
                if (data.length > 0) {
                    setSelectedMeetingId(data[0].MeetingID);
                    setSelectedMeeting(data[0]);
                }
            } catch (err) {
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };
        fetch();
    }, []);

    const handleMeetingChange = (id: number) => {
        const meeting = meetings.find(m => m.MeetingID === id);
        setSelectedMeetingId(id);
        setSelectedMeeting(meeting);
    };

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[600px] text-slate-400 gap-4">
                <Loader2 size={32} className="animate-spin text-blue-500" />
                <span className="text-lg font-bold uppercase tracking-widest text-[10px]">Syncing participation records...</span>
            </div>
        );
    }

    const participants = selectedMeeting?.meetingmember || [];
    const presentCount = participants.filter((mm: any) => mm.IsPresent).length;
    const absentCount = participants.length - presentCount;
    const attendanceRate = participants.length > 0 ? Math.round((presentCount / participants.length) * 100) : 0;

    return (
        <div className="p-8 pb-20 max-w-[1200px] mx-auto space-y-10 animate-in fade-in duration-500">
            <header>
                <h1 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Participation Audit</h1>
                <p className="text-slate-500 font-medium">Review detailed attendance records and engagement synchronization</p>
            </header>

            {/* Meeting Selector Component */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-[32px] border border-slate-100 dark:border-gray-800 shadow-xl shadow-blue-500/5">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3 block">Chronological Session Audit</label>
                <div className="relative">
                    <select
                        className="w-full appearance-none bg-slate-50 dark:bg-gray-800 border-none rounded-2xl py-4.5 pl-6 pr-12 text-lg font-bold text-slate-800 dark:text-white focus:ring-4 focus:ring-blue-500/10 cursor-pointer transition-all"
                        value={selectedMeetingId || ""}
                        onChange={(e) => handleMeetingChange(Number(e.target.value))}
                    >
                        {meetings.map(m => (
                            <option key={m.MeetingID} value={m.MeetingID}>
                                {m.MeetingDescription} — {new Date(m.MeetingDate).toLocaleDateString()}
                            </option>
                        ))}
                    </select>
                    <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400" size={24} />
                </div>
            </div>

            {selectedMeeting && (
                <>
                    {/* Insights Hub */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { label: "Quorum", value: participants.length, icon: Users, color: "blue" },
                            { label: "Verified", value: presentCount, icon: CheckCircle2, color: "green" },
                            { label: "Missing", value: absentCount, icon: XCircle, color: "red" },
                            { label: "Yield %", value: `${attendanceRate}%`, icon: Percent, color: "indigo" },
                        ].map((stat, idx) => (
                            <div key={idx} className="bg-white dark:bg-gray-900 p-6 rounded-[32px] border border-slate-100 dark:border-gray-800 shadow-lg shadow-blue-500/5 flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${stat.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                                    stat.color === 'green' ? 'bg-green-50 text-green-600' :
                                        stat.color === 'red' ? 'bg-red-50 text-red-600' :
                                            'bg-indigo-50 text-indigo-600'
                                    }`}>
                                    <stat.icon size={24} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
                                    <h3 className="text-2xl font-black text-slate-900 dark:text-white">{stat.value}</h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Active Registry */}
                    <div className="bg-white dark:bg-gray-900 rounded-[40px] border border-slate-100 dark:border-gray-800 shadow-2xl shadow-blue-500/5 overflow-hidden">
                        <div className="p-8 border-b border-slate-50 dark:border-gray-800 flex items-center justify-between">
                            <h3 className="font-black text-slate-900 dark:text-white uppercase tracking-tight">Active Engagement Registry</h3>
                            <BarChart3 className="text-slate-300" size={24} />
                        </div>
                        <div className="overflow-x-auto text-left">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-slate-50/30 dark:bg-gray-800/20">
                                        <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest w-24 text-center">Status</th>
                                        <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Full Identity</th>
                                        <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Digital Address</th>
                                        <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Verification</th>
                                        <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Internal Remarks</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50 dark:divide-gray-800">
                                    {participants.map((mm: any) => (
                                        <tr key={mm.MeetingMemberID} className="group hover:bg-slate-50 dark:hover:bg-gray-800/40 transition-colors">
                                            <td className="px-8 py-6 flex justify-center">
                                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${mm.IsPresent ? 'bg-green-500 text-white shadow-lg shadow-green-500/30' : 'bg-slate-200 dark:bg-gray-700 text-slate-500'}`}>
                                                    {mm.IsPresent ? <UserCheck size={16} /> : <AlertCircle size={16} />}
                                                </div>
                                            </td>
                                            <td className="px-8 py-6 font-bold text-slate-800 dark:text-white">{mm.staff?.StaffName}</td>
                                            <td className="px-8 py-6 text-slate-400 text-sm italic font-medium">{mm.staff?.EmailAddress}</td>
                                            <td className="px-8 py-6">
                                                <div className="flex justify-center">
                                                    <span className={`px-3 py-1 text-[10px] font-black uppercase rounded-lg tracking-widest ${mm.IsPresent ? 'bg-green-50 text-green-600 border border-green-100' : 'bg-red-50 text-red-600 border border-red-100'}`}>
                                                        {mm.IsPresent ? 'Participated' : 'Not Detected'}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-8 py-6">
                                                <p className="text-xs text-slate-500 font-bold truncate max-w-[200px]">
                                                    {mm.Remarks || "No observational data recorded"}
                                                </p>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

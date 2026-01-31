"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    ChevronLeft,
    ChevronRight,
    Calendar as CalendarIcon,
    Clock,
    MapPin,
    Loader2,
    Tag
} from "lucide-react";
import { getMeetings } from "@/app/actions/meetings";

export default function CalendarPage() {
    const [meetings, setMeetings] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const fetch = async () => {
            try {
                const data = await getMeetings();
                setMeetings(data);
            } catch (err) {
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };
        fetch();
    }, []);

    // Filter meetings for the current month
    const currentMonthMeetings = meetings.filter(m => {
        const mDate = new Date(m.MeetingDate);
        return mDate.getMonth() === currentDate.getMonth() && mDate.getFullYear() === currentDate.getFullYear();
    });

    const nextMonth = () => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
    const prevMonth = () => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));

    return (
        <div className="space-y-10 max-w-[1200px] mx-auto pb-20 animate-in fade-in duration-700">
            {/* Perspective Header */}
            <div className="flex justify-between items-center bg-white dark:bg-gray-900 p-10 rounded-[40px] border border-slate-100 dark:border-gray-800 shadow-2xl shadow-blue-500/5">
                <div>
                    <p className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em] mb-2">My Chronology</p>
                    <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-none capitalize">
                        {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                    </h1>
                </div>
                <div className="flex gap-4">
                    <button onClick={prevMonth} className="p-4 bg-slate-50 dark:bg-gray-800 rounded-3xl hover:bg-slate-100 dark:hover:bg-gray-700 text-slate-600 dark:text-gray-300 transition-all active:scale-95 shadow-sm">
                        <ChevronLeft size={28} />
                    </button>
                    <button onClick={nextMonth} className="p-4 bg-slate-50 dark:bg-gray-800 rounded-3xl hover:bg-slate-100 dark:hover:bg-gray-700 text-slate-600 dark:text-gray-300 transition-all active:scale-95 shadow-sm">
                        <ChevronRight size={28} />
                    </button>
                </div>
            </div>

            {isLoading ? (
                <div className="flex items-center justify-center min-h-[400px] text-slate-400 gap-4 font-black uppercase tracking-widest text-xs">
                    <Loader2 className="animate-spin text-blue-500" />
                    Syncing chronological registry...
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {currentMonthMeetings.length === 0 ? (
                        <div className="col-span-full bg-slate-50/50 dark:bg-gray-900/50 py-32 rounded-[40px] border-4 border-dashed border-slate-100 dark:border-gray-800 text-center flex flex-col items-center justify-center text-slate-300">
                            <CalendarIcon size={64} className="mb-6 opacity-20" />
                            <p className="font-black uppercase tracking-[0.2em] text-sm italic">No synchronized events detected for this period</p>
                        </div>
                    ) : (
                        currentMonthMeetings.map((meeting, idx) => (
                            <motion.div
                                key={meeting.MeetingID}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.05 }}
                                className={`bg-white dark:bg-gray-900 rounded-[32px] border border-slate-100 dark:border-gray-800 shadow-xl shadow-blue-500/5 group hover:border-blue-500 transition-all cursor-default relative overflow-hidden ${meeting.IsCancelled ? 'opacity-60 grayscale' : ''}`}
                            >
                                <div className="p-8 h-full flex flex-col">
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-gray-800 text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all flex items-center justify-center shadow-inner">
                                            <CalendarIcon size={28} />
                                        </div>
                                        <div className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest ${meeting.IsCancelled ? 'bg-red-500 text-white' : 'bg-blue-600 text-white'}`}>
                                            Day {new Date(meeting.MeetingDate).getDate()}
                                        </div>
                                    </div>

                                    <div className="space-y-4 mb-10">
                                        <div className="flex items-center gap-2 text-[10px] font-black text-blue-500 uppercase tracking-widest">
                                            <Tag size={12} />
                                            {meeting.meetingtype?.MeetingTypeName}
                                        </div>
                                        <h3 className="text-2xl font-black text-slate-800 dark:text-white leading-tight capitalize group-hover:text-blue-600 transition-colors">
                                            {meeting.MeetingDescription}
                                        </h3>
                                    </div>

                                    <div className="mt-auto space-y-4 pt-8 border-t border-slate-50 dark:border-gray-800">
                                        <div className="flex items-center gap-4 text-sm font-bold text-slate-500 dark:text-gray-400">
                                            <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-gray-800 flex items-center justify-center">
                                                <Clock size={16} className="text-blue-500" />
                                            </div>
                                            {new Date(meeting.MeetingDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </div>
                                        <div className="flex items-center gap-4 text-sm font-bold text-slate-500 dark:text-gray-400">
                                            <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-gray-800 flex items-center justify-center">
                                                <MapPin size={16} className="text-blue-500" />
                                            </div>
                                            {meeting.venue?.VenueName || "Coordinates TBD"}
                                        </div>
                                    </div>

                                    {/* Visual Decoration */}
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors pointer-events-none" />
                                </div>
                            </motion.div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
}

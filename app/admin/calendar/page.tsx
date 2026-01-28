"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    ChevronLeft,
    ChevronRight,
    Calendar as CalendarIcon,
    Clock,
    MapPin,
    Loader2
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
        <div className="space-y-8 max-w-[1200px] mx-auto pb-12">
            {/* Calendar Header */}
            <div className="flex justify-between items-center bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-blue-500/5">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight">
                        {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                    </h1>
                    <p className="text-slate-500 font-medium">Viewing all scheduled activities for this month</p>
                </div>
                <div className="flex gap-4">
                    <button onClick={prevMonth} className="p-3 bg-slate-50 rounded-2xl hover:bg-slate-100 text-slate-600 transition-all active:scale-95">
                        <ChevronLeft size={24} />
                    </button>
                    <button onClick={nextMonth} className="p-3 bg-slate-50 rounded-2xl hover:bg-slate-100 text-slate-600 transition-all active:scale-95">
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>

            {isLoading ? (
                <div className="flex items-center justify-center min-h-[400px] text-slate-400 gap-3 font-bold">
                    <Loader2 className="animate-spin text-blue-500" />
                    Syncing calendar events...
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentMonthMeetings.length === 0 ? (
                        <div className="col-span-full bg-white p-12 rounded-3xl border border-dashed border-slate-200 text-center flex flex-col items-center justify-center text-slate-400">
                            <CalendarIcon size={48} className="mb-4 opacity-10" />
                            <p className="font-bold italic">No meetings scheduled for this month.</p>
                        </div>
                    ) : (
                        currentMonthMeetings.map((meeting, idx) => (
                            <motion.div
                                key={meeting.MeetingID}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.05 }}
                                className={`bg-white p-6 rounded-3xl border border-slate-100 shadow-lg shadow-blue-500/5 group hover:border-blue-400 transition-all cursor-pointer relative overflow-hidden ${meeting.IsCancelled ? 'opacity-60 grayscale' : ''
                                    }`}
                            >
                                {/* Status indicator */}
                                <div className={`absolute top-0 right-0 px-4 py-1.5 rounded-bl-2xl text-[10px] font-black uppercase tracking-widest ${meeting.IsCancelled ? 'bg-red-500 text-white' : 'bg-blue-600 text-white'
                                    }`}>
                                    {meeting.IsCancelled ? 'Cancelled' : 'Scheduled'}
                                </div>

                                <div className="flex flex-col h-full">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                                            <CalendarIcon size={24} />
                                        </div>
                                        <div>
                                            <p className="text-[12px] font-black text-blue-600 uppercase tracking-widest">{new Date(meeting.MeetingDate).toLocaleDateString()}</p>
                                            <h3 className="font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors capitalize">{meeting.MeetingDescription}</h3>
                                        </div>
                                    </div>

                                    <div className="mt-auto space-y-3 pt-6 border-t border-slate-50">
                                        <div className="flex items-center gap-3 text-[13px] font-medium text-slate-500">
                                            <Clock size={16} className="text-slate-400" />
                                            {new Date(meeting.MeetingDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </div>
                                        <div className="flex items-center gap-3 text-[13px] font-medium text-slate-500">
                                            <MapPin size={16} className="text-slate-400" />
                                            {meeting.venue?.VenueName || "Location TBD"}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
}

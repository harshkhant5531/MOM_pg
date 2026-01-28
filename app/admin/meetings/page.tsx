"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    Plus,
    Search,
    Calendar,
    MapPin,
    Clock,
    MoreVertical,
    Filter,
    Eye,
    Edit2,
    Trash2,
    Loader2
} from "lucide-react";
import { getMeetings, cancelMeeting } from "@/app/actions/meetings";

export default function MeetingsPage() {
    const [meetings, setMeetings] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");

    const fetchMeetings = async () => {
        setIsLoading(true);
        try {
            const data = await getMeetings();
            setMeetings(data);
        } catch (error) {
            console.error("Failed to fetch meetings:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchMeetings();
    }, []);

    const handleCancel = async (id: number) => {
        const reason = prompt("Enter reason for cancellation:");
        if (reason) {
            await cancelMeeting(id, reason);
            fetchMeetings();
        }
    };

    const filteredMeetings = meetings.filter(m =>
        m.MeetingDescription?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.meetingtype?.MeetingTypeName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-6 max-w-[1400px] mx-auto">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Meetings</h1>
                    <p className="text-slate-500 text-sm font-medium">Schedule and manage all your meetings</p>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 shadow-lg shadow-blue-500/20 transition-all active:scale-95">
                    <Plus size={18} />
                    Schedule Meeting
                </button>
            </div>

            {/* Filters & Search */}
            <div className="flex flex-wrap gap-4 items-center justify-between">
                <div className="flex gap-4 flex-1 max-w-2xl">
                    <div className="relative flex-1">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search by title or type..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-100 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 shadow-sm transition-all"
                        />
                    </div>
                    <button className="px-4 py-2.5 rounded-xl border border-slate-100 bg-white text-slate-600 font-bold text-sm flex items-center gap-2 hover:bg-slate-50 transition-all shadow-sm">
                        <Filter size={18} />
                        Filters
                    </button>
                </div>
            </div>

            {/* Table Section */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-blue-500/5 overflow-hidden min-h-[400px]">
                {isLoading ? (
                    <div className="flex items-center justify-center h-64 text-slate-400 gap-3 font-bold">
                        <Loader2 size={24} className="animate-spin text-blue-500" />
                        Loading meetings...
                    </div>
                ) : meetings.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-64 text-slate-400 italic">
                        <Calendar size={48} className="mb-4 opacity-20" />
                        <p>No meetings found. Schedule one to get started.</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-slate-50/50 border-b border-slate-100">
                                    <th className="px-8 py-5 text-[12px] font-black text-slate-400 uppercase tracking-widest">Meeting & Status</th>
                                    <th className="px-8 py-5 text-[12px] font-black text-slate-400 uppercase tracking-widest">Type</th>
                                    <th className="px-8 py-5 text-[12px] font-black text-slate-400 uppercase tracking-widest">Date & Venue</th>
                                    <th className="px-8 py-5 text-[12px] font-black text-slate-400 uppercase tracking-widest">Participants</th>
                                    <th className="px-8 py-5 text-[12px] font-black text-slate-400 uppercase tracking-widest text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {filteredMeetings.map((meeting, idx) => {
                                    const isPast = new Date(meeting.MeetingDate) < new Date();
                                    const status = meeting.IsCancelled ? 'cancelled' : isPast ? 'completed' : 'scheduled';

                                    return (
                                        <motion.tr
                                            key={meeting.MeetingID}
                                            initial={{ opacity: 0, y: 5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: idx * 0.05 }}
                                            className="hover:bg-slate-50/80 transition-all group"
                                        >
                                            <td className="px-8 py-6">
                                                <div className="flex flex-col gap-1.5">
                                                    <span className="text-[14px] font-bold text-slate-700">{meeting.MeetingDescription}</span>
                                                    <span className={`w-fit px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider border ${status === 'scheduled' ? 'bg-blue-50 text-blue-500 border-blue-100' :
                                                            status === 'completed' ? 'bg-green-50 text-green-500 border-green-100' :
                                                                'bg-red-50 text-red-500 border-red-100'
                                                        }`}>
                                                        {status}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-8 py-6">
                                                <span className="text-[14px] font-medium text-slate-500">{meeting.meetingtype?.MeetingTypeName}</span>
                                            </td>
                                            <td className="px-8 py-6">
                                                <div className="flex flex-col gap-1">
                                                    <div className="flex items-center gap-2 text-slate-600 font-bold text-[13px]">
                                                        <Calendar size={14} className="text-slate-400" />
                                                        {new Date(meeting.MeetingDate).toLocaleDateString()}
                                                    </div>
                                                    <div className="flex items-center gap-2 text-slate-400 font-medium text-[12px]">
                                                        <MapPin size={14} />
                                                        {meeting.venue?.VenueName || "No venue assigned"}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-8 py-6">
                                                <div className="flex -space-x-2">
                                                    {meeting.meetingmember?.slice(0, 3).map((member: any, i: number) => (
                                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-600" title={member.staff?.StaffName}>
                                                            {member.staff?.StaffName.charAt(0)}
                                                        </div>
                                                    ))}
                                                    {meeting.meetingmember?.length > 3 && (
                                                        <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-50 flex items-center justify-center text-[10px] font-bold text-slate-400">
                                                            +{meeting.meetingmember.length - 3}
                                                        </div>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="px-8 py-6">
                                                <div className="flex items-center justify-end gap-2">
                                                    <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" title="View MOM">
                                                        <Eye size={18} />
                                                    </button>
                                                    <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" title="Edit">
                                                        <Edit2 size={18} />
                                                    </button>
                                                    {!meeting.IsCancelled && (
                                                        <button
                                                            onClick={() => handleCancel(meeting.MeetingID)}
                                                            className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                                                            title="Cancel Meeting"
                                                        >
                                                            <Trash2 size={18} />
                                                        </button>
                                                    )}
                                                </div>
                                            </td>
                                        </motion.tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}

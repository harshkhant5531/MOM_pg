"use client";

import { useEffect, useState } from "react";
import {
    Search,
    Eye,
    ChevronDown,
    Calendar as CalendarIcon,
    Clock,
    MapPin,
    Loader2,
    Filter,
    Tag,
    Plus,
    XCircle,
    CheckCircle2
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getMeetings } from "@/app/actions/meetings";

export default function MeetingsPage() {
    const [meetings, setMeetings] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("All Status");

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

    const filteredMeetings = meetings.filter(m => {
        const matchesSearch = m.MeetingDescription?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            m.meetingtype?.MeetingTypeName.toLowerCase().includes(searchTerm.toLowerCase());

        const status = m.IsCancelled ? "Cancelled" : (new Date(m.MeetingDate) < new Date() ? "Completed" : "Scheduled");
        const matchesStatus = statusFilter === "All Status" || status === statusFilter;

        return matchesSearch && matchesStatus;
    });

    return (
        <div className="p-8 pb-20 max-w-[1400px] mx-auto space-y-10 animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Meeting Register</h1>
                    <p className="text-slate-500 font-medium">Consolidated view of all sessions and coordinated obligations</p>
                </div>
                <button className="bg-slate-900 dark:bg-blue-600 text-white px-6 py-3.5 rounded-2xl font-bold text-sm flex items-center gap-2 hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 dark:shadow-blue-500/20 active:scale-95 uppercase tracking-widest">
                    <Plus size={20} /> New Request
                </button>
            </div>

            {/* Selection & Optimization Filters */}
            <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="relative flex-1 w-full">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={18} />
                    <input
                        type="text"
                        placeholder="Search by agenda topic or classification..."
                        className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-900 border border-slate-100 dark:border-gray-800 rounded-2xl text-sm font-bold shadow-sm focus:ring-4 focus:ring-blue-500/5 transition-all"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex gap-3 w-full md:w-auto">
                    <div className="relative">
                        <select
                            className="appearance-none bg-white dark:bg-gray-900 border border-slate-100 dark:border-gray-800 rounded-2xl py-4 pl-6 pr-12 text-xs font-black uppercase tracking-widest text-slate-500 focus:ring-4 focus:ring-blue-500/5 cursor-pointer shadow-sm min-w-[160px]"
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                        >
                            <option>All Status</option>
                            <option>Scheduled</option>
                            <option>Completed</option>
                            <option>Cancelled</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                    </div>
                </div>
            </div>

            {/* Meetings Register Table */}
            <div className="bg-white dark:bg-gray-900 rounded-[40px] border border-slate-100 dark:border-gray-800 shadow-2xl shadow-blue-500/5 overflow-hidden">
                {isLoading ? (
                    <div className="p-32 flex flex-col items-center justify-center text-slate-400 gap-4">
                        <Loader2 className="animate-spin text-blue-500" size={32} />
                        <span className="font-black uppercase tracking-widest text-[10px]">Retrieving synchronized agenda...</span>
                    </div>
                ) : (
                    <div className="overflow-x-auto text-left">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-slate-50/50 dark:bg-gray-800/50 border-b border-slate-100 dark:border-gray-800 uppercase">
                                    <th className="px-10 py-6 text-[10px] font-black text-slate-400 tracking-[0.2em]">Session Agenda</th>
                                    <th className="px-10 py-6 text-[10px] font-black text-slate-400 tracking-[0.2em]">Chronological Info</th>
                                    <th className="px-10 py-6 text-[10px] font-black text-slate-400 tracking-[0.2em]">Classification</th>
                                    <th className="px-10 py-6 text-[10px] font-black text-slate-400 tracking-[0.2em]">Venue Allocation</th>
                                    <th className="px-10 py-6 text-[10px] font-black text-slate-400 tracking-[0.2em] text-center">Status</th>
                                    <th className="px-10 py-6 text-[10px] font-black text-slate-400 tracking-[0.2em] text-right">Perspective</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50 dark:divide-gray-800">
                                {filteredMeetings.map((m) => (
                                    <tr key={m.MeetingID} className={`group hover:bg-slate-50/50 dark:hover:bg-gray-800/50 transition-colors ${m.IsCancelled ? 'opacity-60 grayscale' : ''}`}>
                                        <td className="px-10 py-8">
                                            <div className="max-w-xs">
                                                <h4 className="font-black text-slate-900 dark:text-white text-lg capitalize mb-1 group-hover:text-blue-600 transition-colors">{m.MeetingDescription}</h4>
                                                <p className="text-slate-400 text-xs font-medium italic">Internal SessionID: MOM-{m.MeetingID}</p>
                                            </div>
                                        </td>
                                        <td className="px-10 py-8">
                                            <div className="flex flex-col gap-1.5 font-black text-sm text-slate-700 dark:text-gray-300">
                                                <span className="flex items-center gap-2"><CalendarIcon size={14} className="text-blue-500" /> {new Date(m.MeetingDate).toLocaleDateString()}</span>
                                                <span className="flex items-center gap-2 text-xs text-slate-400 italic font-medium"><Clock size={14} /> {new Date(m.MeetingDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                            </div>
                                        </td>
                                        <td className="px-10 py-8">
                                            <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-black rounded-lg uppercase tracking-wider">
                                                {m.meetingtype?.MeetingTypeName}
                                            </span>
                                        </td>
                                        <td className="px-10 py-8">
                                            <div className="flex items-center gap-2 text-sm font-bold text-slate-600 dark:text-gray-400">
                                                <MapPin size={16} className="text-blue-500" /> {m.venue?.VenueName || "Coordinates TBD"}
                                            </div>
                                        </td>
                                        <td className="px-10 py-8">
                                            <div className="flex justify-center">
                                                {m.IsCancelled ? (
                                                    <span className="px-3 py-1 bg-red-50 text-red-600 text-[10px] font-black rounded-full border border-red-100 uppercase tracking-widest flex items-center gap-1.5">
                                                        <XCircle size={12} /> Void
                                                    </span>
                                                ) : new Date(m.MeetingDate) < new Date() ? (
                                                    <span className="px-3 py-1 bg-green-50 text-green-600 text-[10px] font-black rounded-full border border-green-100 uppercase tracking-widest flex items-center gap-1.5">
                                                        <CheckCircle2 size={12} /> Finalized
                                                    </span>
                                                ) : (
                                                    <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-black rounded-full border border-indigo-100 uppercase tracking-widest flex items-center gap-1.5">
                                                        <Clock size={12} /> Imminent
                                                    </span>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-10 py-8">
                                            <div className="flex items-center justify-end">
                                                <button className="p-3 bg-slate-50 dark:bg-gray-800 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-2xl transition-all shadow-inner group-hover:scale-110">
                                                    <Eye size={20} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}

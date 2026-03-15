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
    CheckCircle2,
    X,
    Users
} from "lucide-react";
import { motion } from "framer-motion";
import Dialog from "@/components/ui/Dialog";
import { getMeetings } from "@/app/actions/meetings";
import { getCurrentUser } from "@/app/actions/auth";
import toast, { Toaster } from "react-hot-toast";

export default function MeetingsPage() {
    const [meetings, setMeetings] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("All Status");
    const [showModal, setShowModal] = useState(false);
    const [selectedMeeting, setSelectedMeeting] = useState<any>(null);

    useEffect(() => {
        const fetch = async () => {
            try {
                const currentUser = await getCurrentUser();
                const data = await getMeetings();

                if (currentUser?.role === 'STAFF') {
                    const filtered = data.filter((m: any) =>
                        m.meetingmember?.some((mm: any) => mm.staff?.EmailAddress === currentUser.email)
                    );
                    setMeetings(filtered);
                } else {
                    setMeetings(data);
                }
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

    const handleViewMeeting = (meeting: any) => {
        setSelectedMeeting(meeting);
        setShowModal(true);
    };

    return (
        <div className="p-8 pb-20 max-w-[1400px] mx-auto space-y-10 animate-in fade-in duration-500">
            <Toaster position="top-right" />

            {/* Meeting Details Dialog */}
            <Dialog 
                isOpen={showModal} 
                onClose={() => setShowModal(false)}
                maxWidth="max-w-2xl"
            >
                {selectedMeeting && (
                    <div className="space-y-6">
                        <div>
                            <div className="flex items-center gap-2 text-[10px] font-black text-blue-500 uppercase tracking-widest mb-3">
                                <Tag size={14} />
                                {selectedMeeting.meetingtype?.MeetingTypeName}
                            </div>
                            <h2 className="text-3xl font-black text-slate-900 dark:text-white capitalize mb-2">{selectedMeeting.MeetingDescription}</h2>
                            <p className="text-slate-500 text-sm">Session ID: MOM-{selectedMeeting.MeetingID}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-slate-50 dark:bg-gray-800 p-6 rounded-2xl">
                                <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">
                                    <CalendarIcon size={14} />
                                    Date
                                </div>
                                <p className="text-lg font-black text-slate-900 dark:text-white">
                                    {new Date(selectedMeeting.MeetingDate).toLocaleDateString('en-US', {
                                        weekday: 'long',
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </p>
                            </div>

                            <div className="bg-slate-50 dark:bg-gray-800 p-6 rounded-2xl">
                                <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">
                                    <Clock size={14} />
                                    Time
                                </div>
                                <p className="text-lg font-black text-slate-900 dark:text-white">
                                    {new Date(selectedMeeting.MeetingDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </p>
                            </div>

                            <div className="bg-slate-50 dark:bg-gray-800 p-6 rounded-2xl">
                                <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">
                                    <MapPin size={14} />
                                    Venue
                                </div>
                                <p className="text-lg font-black text-slate-900 dark:text-white">
                                    {selectedMeeting.venue?.VenueName || "Coordinates TBD"}
                                </p>
                            </div>

                            <div className="bg-slate-50 dark:bg-gray-800 p-6 rounded-2xl">
                                <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">
                                    <Users size={14} />
                                    Status
                                </div>
                                <p className="text-lg font-black text-blue-600">
                                    {selectedMeeting.IsCancelled ? 'Void' : new Date(selectedMeeting.MeetingDate) >= new Date() ? 'Imminent' : 'Finalized'}
                                </p>
                            </div>
                        </div>

                        <div className="pt-4 flex gap-3">
                            <button
                                onClick={() => setShowModal(false)}
                                className="flex-1 py-4 bg-slate-900 dark:bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-800 dark:hover:bg-blue-700 transition-all cursor-pointer"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </Dialog>
            {/* Header */}
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Meeting Register</h1>
                    <p className="text-slate-500 font-medium">Consolidated view of all sessions and coordinated obligations</p>
                </div>
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
                                                <button onClick={() => handleViewMeeting(m)} className="p-3 bg-slate-50 dark:bg-gray-800 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-2xl transition-all shadow-inner group-hover:scale-110 cursor-pointer">
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

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    MapPin,
    Plus,
    Edit2,
    Trash2,
    Users,
    Loader2
} from "lucide-react";
import { getVenues, deleteVenue } from "@/app/actions/master-config";

export default function VenuesPage() {
    const [venues, setVenues] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchVenues = async () => {
        setIsLoading(true);
        try {
            const data = await getVenues();
            setVenues(data);
        } catch (error) {
            console.error("Failed to fetch venues:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchVenues();
    }, []);

    const handleDelete = async (id: number) => {
        if (confirm("Are you sure you want to delete this venue?")) {
            await deleteVenue(id);
            fetchVenues();
        }
    };

    return (
        <div className="space-y-6 max-w-[1200px] mx-auto">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Venues</h1>
                    <p className="text-slate-500 text-sm font-medium">Manage meeting venues and locations</p>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 shadow-lg shadow-blue-500/20 transition-all active:scale-95">
                    <Plus size={18} />
                    Add Venue
                </button>
            </div>

            {/* Table Container */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-blue-500/5 overflow-hidden min-h-[300px]">
                {isLoading ? (
                    <div className="flex items-center justify-center h-64 text-slate-400 gap-3 text-sm font-bold">
                        <Loader2 size={24} className="animate-spin text-blue-500" />
                        Loading venues...
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-slate-50/50 border-b border-slate-100">
                                    <th className="px-8 py-5 text-[12px] font-black text-slate-400 uppercase tracking-widest">Venue</th>
                                    <th className="px-8 py-5 text-[12px] font-black text-slate-400 uppercase tracking-widest">Location</th>
                                    <th className="px-8 py-5 text-[12px] font-black text-slate-400 uppercase tracking-widest">Capacity</th>
                                    <th className="px-8 py-5 text-[12px] font-black text-slate-400 uppercase tracking-widest text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {venues.map((venue, idx) => (
                                    <motion.tr
                                        key={venue.VenueID}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="hover:bg-slate-50/80 transition-all group"
                                    >
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center border border-blue-100">
                                                    <MapPin size={18} />
                                                </div>
                                                <span className="text-[14px] font-bold text-slate-700">{venue.VenueName}</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <span className="text-[14px] font-medium text-slate-500">{venue.Location || "-"}</span>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-2 text-slate-600 font-bold text-[14px]">
                                                <Users size={16} className="text-slate-400" />
                                                {venue.Capacity || "∞"}
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="flex items-center justify-end gap-2">
                                                <button className="p-2.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all">
                                                    <Edit2 size={18} />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(venue.VenueID)}
                                                    className="p-2.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}

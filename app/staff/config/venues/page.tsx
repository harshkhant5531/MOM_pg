"use client";

import { useEffect, useState } from "react";
import {
    MapPin,
    Search,
    Plus,
    Users,
    ChevronRight,
    Loader2,
    Eye,
    X
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getVenues } from "@/app/actions/master-config";

export default function VenuesPage() {
    const [venues, setVenues] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedVenue, setSelectedVenue] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetch = async () => {
            try {
                const data = await getVenues();
                setVenues(data);
            } catch (err) {
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };
        fetch();
    }, []);

    const filteredVenues = venues.filter(v =>
        v.VenueName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        v.VenueLocation.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-8 pb-20 max-w-[1400px] mx-auto space-y-10 animate-in fade-in duration-500">
            <header className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight leading-none">Venues Matrix</h1>
                    <p className="text-slate-500 font-medium">Registry of authorized session locations and logistics capacity</p>
                </div>
            </header>

            <AnimatePresence>
                {isModalOpen && selectedVenue && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-lg bg-white dark:bg-gray-900 rounded-[48px] shadow-2xl overflow-hidden border border-slate-100 dark:border-gray-800"
                        >
                            <div className="p-10 border-b border-slate-50 dark:border-gray-800 flex items-center justify-between">
                                <div>
                                    <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Spatial Intel</h2>
                                    <p className="text-slate-500 text-sm font-medium">Logistic specs for {selectedVenue.VenueName}</p>
                                </div>
                                <button onClick={() => setIsModalOpen(false)} className="p-3 bg-slate-50 dark:bg-gray-800 rounded-2xl text-slate-400 hover:text-slate-600 transition-colors cursor-pointer">
                                    <X size={20} />
                                </button>
                            </div>
                            <div className="p-10 space-y-8">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-slate-50 dark:bg-gray-800 p-6 rounded-3xl">
                                        <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest block mb-2">Max Personnel</span>
                                        <p className="text-2xl font-black text-slate-900 dark:text-white">{selectedVenue.VenueCapacity || "50"}</p>
                                    </div>
                                    <div className="bg-slate-50 dark:bg-gray-800 p-6 rounded-3xl">
                                        <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest block mb-2">Current Status</span>
                                        <span className="text-xs font-black text-green-600 uppercase">Operational</span>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">Geographic Metadata</span>
                                    <p className="text-sm font-bold text-slate-600 dark:text-slate-400 p-4 bg-slate-50 dark:bg-gray-800 rounded-2xl">{selectedVenue.VenueLocation}</p>
                                </div>
                                <div className="space-y-3">
                                    <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">System Allocation ID</span>
                                    <p className="text-xs font-mono text-slate-400">LOC-MOM-MATRIX-{selectedVenue.VenueID}</p>
                                </div>
                                <button onClick={() => setIsModalOpen(false)} className="w-full py-5 bg-blue-600 text-white rounded-3xl font-black text-xs uppercase tracking-[0.3em] hover:bg-blue-700 transition-all cursor-pointer">
                                    Exit Logistics View
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-[40px] border border-slate-100 dark:border-gray-800 shadow-xl shadow-blue-500/5">
                <div className="relative max-w-xl">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search by venue nomenclature or spatial coordinates..."
                        className="w-full pl-14 pr-6 py-4.5 bg-slate-50 dark:bg-gray-800 border-none rounded-[28px] text-sm font-bold shadow-inner focus:ring-4 focus:ring-blue-500/10 transition-all"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {isLoading ? (
                    <div className="col-span-full py-32 flex flex-col items-center justify-center text-slate-400 gap-4">
                        <Loader2 className="animate-spin text-blue-500" size={40} />
                        <span className="font-black uppercase tracking-[0.3em] text-[10px]">Synchronizing venue topology...</span>
                    </div>
                ) : (
                    filteredVenues.map((v) => (
                        <div key={v.VenueID} className="bg-white dark:bg-gray-900 p-8 rounded-[48px] border border-slate-100 dark:border-gray-800 shadow-2xl shadow-blue-500/5 group hover:border-blue-500/50 transition-all cursor-default">
                            <div className="flex items-center justify-between mb-8">
                                <div className="w-16 h-16 rounded-[28px] bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-inner group-hover:scale-110 transition-transform">
                                    <MapPin size={32} />
                                </div>
                                <div className="flex flex-col items-end">
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Capacity</span>
                                    <span className="text-2xl font-black text-slate-900 dark:text-white">{v.VenueCapacity || "50"}</span>
                                </div>
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white capitalize mb-2">{v.VenueName}</h3>
                            <p className="text-slate-400 text-sm font-bold italic mb-8">{v.VenueLocation}</p>
                            <div className="pt-8 border-t border-slate-50 dark:border-gray-800 flex justify-between items-center">
                                <button
                                    onClick={() => {
                                        setSelectedVenue(v);
                                        setIsModalOpen(true);
                                    }}
                                    className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all cursor-pointer"
                                >
                                    Available
                                </button>
                                <button
                                    onClick={() => {
                                        setSelectedVenue(v);
                                        setIsModalOpen(true);
                                    }}
                                    className="p-3 bg-slate-50 dark:bg-gray-800 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-2xl transition-all shadow-inner cursor-pointer"
                                >
                                    <Eye size={20} />
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

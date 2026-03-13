"use client";

import { useEffect, useState } from "react";
import {
    Building,
    Search,
    Plus,
    Users,
    ArrowRight,
    Loader2,
    Eye,
    ChevronRight,
    X
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getDepartments } from "@/app/actions/master-config";

export default function DepartmentsPage() {
    const [departments, setDepartments] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedDept, setSelectedDept] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetch = async () => {
            try {
                const data = await getDepartments();
                setDepartments(data);
            } catch (err) {
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };
        fetch();
    }, []);

    const filteredDepts = departments.filter(d =>
        d.DepartmentName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-8 pb-20 max-w-[1400px] mx-auto space-y-12 animate-in fade-in duration-700">
            <header className="flex justify-between items-end">
                <div>
                    <h1 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Org Architecture</h1>
                    <p className="text-slate-500 font-medium">Visualization of organizational units and personnel distribution</p>
                </div>
            </header>

            <AnimatePresence>
                {isModalOpen && selectedDept && (
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
                            className="relative w-full max-w-lg bg-white dark:bg-gray-900 rounded-[56px] shadow-2xl overflow-hidden border border-slate-100 dark:border-gray-800"
                        >
                            <div className="p-12 border-b border-slate-50 dark:border-gray-800 flex items-center justify-between">
                                <div>
                                    <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Unit Intelligence</h2>
                                    <p className="text-slate-500 text-sm font-medium">Structural audit of {selectedDept.DepartmentName}</p>
                                </div>
                                <button onClick={() => setIsModalOpen(false)} className="p-4 bg-slate-50 dark:bg-gray-800 rounded-3xl text-slate-400 hover:text-slate-600 transition-colors cursor-pointer">
                                    <X size={24} />
                                </button>
                            </div>
                            <div className="p-12 space-y-10">
                                <div className="space-y-3">
                                    <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em]">Operational Designation</span>
                                    <p className="text-2xl font-black text-slate-900 dark:text-white">{selectedDept.DepartmentName}</p>
                                </div>
                                <div className="space-y-3">
                                    <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em]">Institutional ID</span>
                                    <div className="bg-slate-50 dark:bg-gray-800 p-6 rounded-3xl border border-slate-100 dark:border-gray-800">
                                        <p className="text-sm font-mono text-slate-500">ORG-UNIT-INT-{selectedDept.DepartmentID}</p>
                                    </div>
                                </div>
                                <button onClick={() => setIsModalOpen(false)} className="w-full py-5 bg-blue-600 text-white rounded-[28px] font-black text-xs uppercase tracking-[0.4em] hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 cursor-pointer">
                                    Complete Audit
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-[48px] border border-slate-100 dark:border-gray-800 shadow-2xl shadow-blue-500/10">
                <div className="relative">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={24} />
                    <input
                        type="text"
                        placeholder="Audit units by nomenclature..."
                        className="w-full pl-16 pr-8 py-6 bg-slate-50 dark:bg-gray-800 border-none rounded-[32px] text-lg font-bold shadow-inner focus:ring-4 focus:ring-blue-500/5 transition-all"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {isLoading ? (
                    <div className="col-span-full py-40 flex flex-col items-center justify-center text-slate-400 gap-4">
                        <Loader2 className="animate-spin text-blue-500" size={48} />
                        <span className="font-black uppercase tracking-[0.4em] text-[10px]">Deconstructing unit hierarchy...</span>
                    </div>
                ) : (
                    filteredDepts.map((d) => (
                        <div key={d.DepartmentID} className="bg-white dark:bg-gray-900 p-10 rounded-[56px] border border-slate-100 dark:border-gray-800 shadow-3xl shadow-blue-500/5 group hover:-translate-y-2 hover:shadow-blue-500/10 transition-all duration-500">
                            <div className="flex items-center justify-between mb-10">
                                <div className="w-20 h-20 rounded-[32px] bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center shadow-inner group-hover:rotate-12 transition-transform duration-500">
                                    <Building size={40} />
                                </div>
                                <div className="w-12 h-12 rounded-full border-2 border-slate-100 dark:border-gray-800 flex items-center justify-center text-slate-300 group-hover:border-blue-500/30 transition-colors">
                                    <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                            <h3 className="text-3xl font-black text-slate-900 dark:text-white capitalize mb-4 leading-tight">{d.DepartmentName}</h3>
                            <div className="flex items-center gap-3 text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-10">
                                <Users size={16} className="text-blue-500" /> Authorized Personnel: {Math.floor(Math.random() * 50) + 10}
                            </div>
                            <div className="pt-8 border-t border-slate-50 dark:border-gray-800">
                                <button 
                                    onClick={() => {
                                        setSelectedDept(d);
                                        setIsModalOpen(true);
                                    }}
                                    className="w-full py-4 bg-slate-50/50 dark:bg-gray-800/50 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 font-black text-[10px] uppercase tracking-[0.3em] rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    <Eye size={18} /> Deep Audit
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

"use client";

import { useEffect, useState } from "react";
import {
    List,
    Search,
    Plus,
    Tag,
    Loader2,
    Eye,
    Zap
} from "lucide-react";
import { getMeetingTypes } from "@/app/actions/master-config";

export default function MeetingTypesPage() {
    const [types, setTypes] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetch = async () => {
            try {
                const data = await getMeetingTypes();
                setTypes(data);
            } catch (err) {
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };
        fetch();
    }, []);

    const filteredTypes = types.filter(t =>
        t.MeetingTypeName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-8 pb-20 max-w-[1200px] mx-auto space-y-12 animate-in fade-in duration-700">
            <header className="flex justify-between items-end">
                <div>
                    <h1 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Session Schema</h1>
                    <p className="text-slate-500 font-medium">Classifications and logical grouping of organizational collaborative efforts</p>
                </div>
                <button className="bg-indigo-600 text-white px-8 py-4 rounded-3xl font-black text-[10px] uppercase tracking-widest flex items-center gap-2 hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-500/20 active:scale-95">
                    <Plus size={20} /> New Category
                </button>
            </header>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-[40px] border border-slate-100 dark:border-gray-800 shadow-2xl shadow-blue-500/5">
                <div className="relative">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={24} />
                    <input
                        type="text"
                        placeholder="Filter session classifications..."
                        className="w-full pl-16 pr-8 py-5 bg-slate-50 dark:bg-gray-800 border-none rounded-[24px] text-lg font-bold shadow-inner focus:ring-4 focus:ring-indigo-500/10 transition-all"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {isLoading ? (
                    <div className="col-span-full py-40 flex flex-col items-center justify-center text-slate-400 gap-4">
                        <Loader2 className="animate-spin text-indigo-500" size={48} />
                        <span className="font-black uppercase tracking-[0.4em] text-[10px]">Filtering taxonomies...</span>
                    </div>
                ) : (
                    filteredTypes.map((t) => (
                        <div key={t.MeetingTypeID} className="bg-white dark:bg-gray-900 p-10 rounded-[48px] border border-slate-100 dark:border-gray-800 shadow-3xl shadow-indigo-500/5 group hover:border-indigo-500 transition-all duration-300 relative overflow-hidden">
                            <div className="flex items-center justify-between mb-10 relative z-10">
                                <div className="w-20 h-20 rounded-[32px] bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                                    <Tag size={40} />
                                </div>
                                <Zap className="text-slate-100 dark:text-gray-800 group-hover:text-indigo-500/20 transition-colors" size={48} />
                            </div>
                            <h3 className="text-3xl font-black text-slate-900 dark:text-white capitalize mb-4 relative z-10">{t.MeetingTypeName}</h3>
                            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-10 relative z-10">
                                Logical ID: MOM-CAT-{t.MeetingTypeID}
                            </p>
                            <div className="pt-8 border-t border-slate-50 dark:border-gray-800 relative z-10">
                                <button className="flex items-center gap-2 text-[10px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest hover:gap-4 transition-all">
                                    View Protocol <Eye size={16} />
                                </button>
                            </div>

                            {/* Decorative blur */}
                            <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-500/10 transition-colors" />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

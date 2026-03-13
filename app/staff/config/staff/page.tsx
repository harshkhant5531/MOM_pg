"use client";

import { useEffect, useState } from "react";
import {
    User,
    Search,
    Plus,
    Pencil,
    Trash2,
    Mail,
    Phone,
    Building,
    Loader2
} from "lucide-react";
import { getStaff } from "@/app/actions/master-config";

export default function StaffConfigPage() {
    const [staff, setStaff] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetch = async () => {
            try {
                const data = await getStaff();
                setStaff(data);
            } catch (err) {
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };
        fetch();
    }, []);

    const filteredStaff = staff.filter(s =>
        s.StaffName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.EmailAddress.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.department?.DepartmentName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-8 pb-20 max-w-[1400px] mx-auto space-y-10 animate-in fade-in duration-500">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Staff Registry</h1>
                    <p className="text-slate-500 font-medium">Consolidated directory of all organizational participants</p>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-[32px] border border-slate-100 dark:border-gray-800 shadow-xl shadow-blue-500/5">
                <div className="relative max-w-xl">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text"
                        placeholder="Filter by name, domain identity, or unit allocation..."
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-gray-800 border-none rounded-2xl focus:ring-4 focus:ring-blue-500/5 transition-all text-sm font-bold text-slate-700 dark:text-white"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-[40px] border border-slate-100 dark:border-gray-800 shadow-2xl shadow-blue-500/5 overflow-hidden">
                {isLoading ? (
                    <div className="p-32 flex flex-col items-center justify-center text-slate-400 gap-4">
                        <Loader2 className="animate-spin text-blue-500" size={32} />
                        <span className="font-black uppercase tracking-widest text-[10px]">Retrieving member records...</span>
                    </div>
                ) : (
                    <div className="overflow-x-auto text-left">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-slate-50/50 dark:bg-gray-800/50 border-b border-slate-100 dark:border-gray-800 uppercase">
                                    <th className="px-10 py-6 text-[10px] font-black text-slate-400 tracking-[0.2em]">Validated Profile</th>
                                    <th className="px-10 py-6 text-[10px] font-black text-slate-400 tracking-[0.2em]">Digital Identity</th>
                                    <th className="px-10 py-6 text-[10px] font-black text-slate-400 tracking-[0.2em]">Mobile Comms</th>
                                    <th className="px-10 py-6 text-[10px] font-black text-slate-400 tracking-[0.2em]">Unit Allocation</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50 dark:divide-gray-800">
                                {filteredStaff.map((s) => (
                                    <tr key={s.StaffID} className="group hover:bg-slate-50/50 dark:hover:bg-gray-800/50 transition-colors">
                                        <td className="px-10 py-8">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-inner group-hover:scale-110 transition-transform">
                                                    <User size={24} />
                                                </div>
                                                <span className="font-black text-slate-900 dark:text-white text-lg">{s.StaffName}</span>
                                            </div>
                                        </td>
                                        <td className="px-10 py-8">
                                            <span className="text-sm font-bold text-slate-500 italic">{s.EmailAddress}</span>
                                        </td>
                                        <td className="px-10 py-8 text-sm text-slate-500 font-black">{s.MobileNumber || "N/A"}</td>
                                        <td className="px-10 py-8">
                                            <div className="flex items-center gap-2 text-sm font-bold text-slate-600 dark:text-gray-400">
                                                <Building size={16} className="text-blue-500" /> {s.department?.DepartmentName || "Floating"}
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

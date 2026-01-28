"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Plus,
    Search,
    User,
    Edit2,
    Trash2,
    Loader2,
    X,
    Mail,
    Phone,
    Briefcase
} from "lucide-react";
import { getStaff, deleteStaff, createStaff, getDepartments } from "@/app/actions/master-config";

export default function StaffPage() {
    const [staffList, setStaffList] = useState<any[]>([]);
    const [departments, setDepartments] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [newStaff, setNewStaff] = useState({
        name: "",
        email: "",
        mobile: "",
        departmentId: "",
        remarks: ""
    });

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const [staffData, deptData] = await Promise.all([getStaff(), getDepartments()]);
            setStaffList(staffData);
            setDepartments(deptData);
        } catch (error) {
            console.error("Failed to fetch data:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleDelete = async (id: number) => {
        if (confirm("Are you sure you want to delete this staff member?")) {
            await deleteStaff(id);
            fetchData();
        }
    };

    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await createStaff(newStaff);
            setIsModalOpen(false);
            setNewStaff({ name: "", email: "", mobile: "", departmentId: "", remarks: "" });
            fetchData();
        } catch (error) {
            alert("Failed to create staff member.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const filteredStaff = staffList.filter(staff =>
        staff.StaffName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        staff.EmailAddress?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-6 max-w-[1400px] mx-auto pb-20">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Staff Management</h1>
                    <p className="text-slate-500 text-sm font-medium">Manage staff members who participate in meetings</p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 shadow-lg shadow-blue-500/20 transition-all active:scale-95"
                >
                    <Plus size={18} />
                    Add Staff
                </button>
            </div>

            {/* Search Bar */}
            <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                <div className="relative max-w-md">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search staff by name or email..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-100 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm font-medium"
                    />
                </div>
            </div>

            {/* Table Section */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-blue-500/5 overflow-hidden min-h-[400px]">
                {isLoading ? (
                    <div className="flex items-center justify-center h-64 text-slate-400 gap-3">
                        <Loader2 size={24} className="animate-spin text-blue-500" />
                        <span className="font-bold">Syncing staff records...</span>
                    </div>
                ) : staffList.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-64 text-slate-400 italic">
                        <User size={48} className="mb-4 opacity-20" />
                        <p>No staff members found.</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-slate-50/50 border-b border-slate-100">
                                    <th className="px-8 py-5 text-[12px] font-black text-slate-400 uppercase tracking-widest">Name</th>
                                    <th className="px-8 py-5 text-[12px] font-black text-slate-400 uppercase tracking-widest">Contact Info</th>
                                    <th className="px-8 py-5 text-[12px] font-black text-slate-400 uppercase tracking-widest">Department</th>
                                    <th className="px-8 py-5 text-[12px] font-black text-slate-400 uppercase tracking-widest text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {filteredStaff.map((staff, idx) => (
                                    <motion.tr
                                        key={staff.StaffID}
                                        initial={{ opacity: 0, y: 5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.03 }}
                                        className="hover:bg-slate-50/80 transition-all group"
                                    >
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-4">
                                                <div className="w-9 h-9 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center border border-blue-100 font-bold text-xs uppercase">
                                                    {staff.StaffName.charAt(0)}
                                                </div>
                                                <span className="text-[14px] font-bold text-slate-700">{staff.StaffName}</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="flex flex-col gap-1">
                                                <span className="text-[13px] font-medium text-slate-600 flex items-center gap-2">
                                                    <Mail size={12} className="text-slate-400" /> {staff.EmailAddress || "No email"}
                                                </span>
                                                <span className="text-[12px] font-bold text-slate-400 flex items-center gap-2">
                                                    <Phone size={12} /> {staff.MobileNo || "-"}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <span className="px-3 py-1 bg-slate-100 rounded-lg text-[12px] font-black text-slate-500 uppercase tracking-tighter">
                                                {staff.department?.DepartmentName || "General"}
                                            </span>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="flex items-center justify-end gap-2">
                                                <button className="p-2 text-slate-300 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                                                    <Edit2 size={16} />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(staff.StaffID)}
                                                    className="p-2 text-slate-300 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                                                >
                                                    <Trash2 size={16} />
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

            {/* Add Staff Modal */}
            <AnimatePresence>
                {isModalOpen && (
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
                            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden"
                        >
                            <div className="p-8 border-b border-slate-50 flex items-center justify-between">
                                <div>
                                    <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">Add New Staff</h2>
                                    <p className="text-slate-500 text-sm">Create a new organizational profile</p>
                                </div>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="p-2 hover:bg-slate-50 rounded-xl text-slate-400 transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <form onSubmit={handleCreate} className="p-8 space-y-5">
                                <div className="grid grid-cols-1 gap-5">
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Full name</label>
                                        <div className="relative">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                                            <input
                                                required
                                                type="text"
                                                placeholder="e.g. John Doe"
                                                className="w-full pl-11 pr-4 py-3 bg-slate-50 border-none rounded-2xl text-sm font-bold text-slate-700 focus:ring-2 focus:ring-blue-500/20 transition-all"
                                                value={newStaff.name}
                                                onChange={(e) => setNewStaff({ ...newStaff, name: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Email</label>
                                            <div className="relative">
                                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                                                <input
                                                    type="email"
                                                    placeholder="john@company.com"
                                                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border-none rounded-2xl text-sm font-bold text-slate-700 focus:ring-2 focus:ring-blue-500/20 transition-all"
                                                    value={newStaff.email}
                                                    onChange={(e) => setNewStaff({ ...newStaff, email: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Phone</label>
                                            <div className="relative">
                                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                                                <input
                                                    type="tel"
                                                    placeholder="+1 234 567"
                                                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border-none rounded-2xl text-sm font-bold text-slate-700 focus:ring-2 focus:ring-blue-500/20 transition-all"
                                                    value={newStaff.mobile}
                                                    onChange={(e) => setNewStaff({ ...newStaff, mobile: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Department</label>
                                        <div className="relative">
                                            <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                                            <select
                                                className="w-full pl-11 pr-4 py-3 bg-slate-50 border-none rounded-2xl text-sm font-bold text-slate-700 focus:ring-2 focus:ring-blue-500/20 appearance-none transition-all cursor-pointer"
                                                value={newStaff.departmentId}
                                                onChange={(e) => setNewStaff({ ...newStaff, departmentId: e.target.value })}
                                            >
                                                <option value="">Select Department</option>
                                                {departments.map(d => (
                                                    <option key={d.DepartmentID} value={d.DepartmentID}>{d.DepartmentName}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Remarks</label>
                                        <textarea
                                            rows={3}
                                            placeholder="Additional notes..."
                                            className="w-full px-4 py-3 bg-slate-50 border-none rounded-2xl text-sm font-bold text-slate-700 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                                            value={newStaff.remarks}
                                            onChange={(e) => setNewStaff({ ...newStaff, remarks: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="pt-4 flex gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setIsModalOpen(false)}
                                        className="flex-1 py-3 text-sm font-bold text-slate-500 hover:bg-slate-50 rounded-2xl transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="flex-[2] py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-sm shadow-xl shadow-blue-500/20 transition-all active:scale-95 flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting ? <Loader2 size={18} className="animate-spin" /> : <Plus size={18} />}
                                        Confirm Membership
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}

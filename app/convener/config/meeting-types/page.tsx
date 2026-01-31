"use client";

import { useEffect, useState } from "react";
import { Plus, FileText, Edit2, Trash2, Loader2, X, AlignLeft, Tag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getMeetingTypes, deleteMeetingType, createMeetingType, updateMeetingType } from "@/app/actions/master-config";

export default function MeetingTypesPage() {
    const [types, setTypes] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingType, setEditingType] = useState<any>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        remarks: ""
    });

    const fetchTypes = async () => {
        setIsLoading(true);
        try {
            const data = await getMeetingTypes();
            setTypes(data);
        } catch (error) {
            console.error("Failed to fetch meeting types:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchTypes();
    }, []);

    const handleDelete = async (id: number) => {
        if (confirm("Are you sure you want to delete this meeting type?")) {
            await deleteMeetingType(id);
            fetchTypes();
        }
    };

    const handleOpenModal = (type: any = null) => {
        if (type) {
            setEditingType(type);
            setFormData({
                name: type.MeetingTypeName,
                remarks: type.Remarks || ""
            });
        } else {
            setEditingType(null);
            setFormData({ name: "", remarks: "" });
        }
        setIsModalOpen(true);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            if (editingType) {
                await updateMeetingType(editingType.MeetingTypeID, formData);
            } else {
                await createMeetingType(formData);
            }
            setIsModalOpen(false);
            fetchTypes();
        } catch (error) {
            alert("Failed to save meeting type.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="p-8 pb-20 max-w-[1200px] mx-auto">
            <div className="flex justify-between items-start mb-10">
                <div className="space-y-1">
                    <h1 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Meeting Types</h1>
                    <p className="text-slate-500 font-medium">Categorize your sessions with custom meeting classifications</p>
                </div>
                <button
                    onClick={() => handleOpenModal()}
                    className="bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-bold text-sm flex items-center gap-2 shadow-xl shadow-slate-200 dark:shadow-blue-500/20 transition-all active:scale-95"
                >
                    <Plus size={20} />
                    New Classification
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {isLoading ? (
                    Array(2).fill(0).map((_, i) => (
                        <div key={i} className="h-40 bg-white dark:bg-gray-900 rounded-3xl border border-slate-100 dark:border-gray-800 animate-pulse" />
                    ))
                ) : types.map((type, idx) => (
                    <motion.div
                        key={type.MeetingTypeID}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="bg-white dark:bg-gray-900 p-8 rounded-3xl border border-slate-100 dark:border-gray-800 shadow-xl shadow-slate-500/5 group hover:border-blue-500/50 transition-all flex items-start gap-6 relative"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center shrink-0 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
                            <Tag className="text-slate-400 dark:text-slate-500 group-hover:text-blue-600" size={32} />
                        </div>

                        <div className="flex-1 min-w-0">
                            <h3 className="text-xl font-black text-slate-800 dark:text-white capitalize truncate mb-2">{type.MeetingTypeName}</h3>
                            <p className="text-slate-500 dark:text-gray-400 text-sm font-medium line-clamp-2 italic">
                                {type.Remarks || "No additional description provided for this type."}
                            </p>
                            <div className="mt-6 flex items-center gap-4">
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-50 dark:bg-slate-800 px-3 py-1 rounded-full">
                                    {type._count?.meetings || 0} Sessions linked
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <button
                                onClick={() => handleOpenModal(type)}
                                className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-xl transition-all"
                            >
                                <Edit2 size={16} />
                            </button>
                            <button
                                onClick={() => handleDelete(type.MeetingTypeID)}
                                className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-xl transition-all"
                            >
                                <Trash2 size={16} />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

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
                            className="relative w-full max-w-md bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden"
                        >
                            <div className="p-8 border-b border-slate-50 dark:border-gray-800 flex items-center justify-between">
                                <div>
                                    <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                                        {editingType ? "Edit Category" : "New Category"}
                                    </h2>
                                    <p className="text-slate-500 text-sm">Define meeting classification rules</p>
                                </div>
                                <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-slate-50 dark:hover:bg-gray-800 rounded-xl text-slate-400">
                                    <X size={20} />
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} className="p-8 space-y-6">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Type Name</label>
                                    <div className="relative">
                                        <Tag className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                                        <input
                                            required
                                            type="text"
                                            placeholder="e.g. Strategic Planning"
                                            className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-gray-800 border-none rounded-2xl text-sm font-bold text-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500/20 transition-all font-bold"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Optional Remarks</label>
                                    <div className="relative">
                                        <AlignLeft className="absolute left-4 top-3 text-slate-400" size={16} />
                                        <textarea
                                            rows={3}
                                            placeholder="What kind of sessions fall under this category?"
                                            className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-gray-800 border-none rounded-2xl text-sm font-bold text-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                                            value={formData.remarks}
                                            onChange={(e) => setFormData({ ...formData, remarks: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="pt-4 flex gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setIsModalOpen(false)}
                                        className="flex-1 py-3 text-sm font-bold text-slate-500 hover:bg-slate-100 dark:hover:bg-gray-800 rounded-2xl transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="flex-[2] py-3 bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-700 text-white rounded-2xl font-bold text-sm shadow-xl shadow-slate-200 dark:shadow-blue-500/20 transition-all active:scale-95 flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting ? <Loader2 size={18} className="animate-spin" /> : <Plus size={18} />}
                                        {editingType ? "Update Classification" : "Confirm Category"}
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

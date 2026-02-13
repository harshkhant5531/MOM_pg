"use client";

import { useEffect, useState } from "react";
import { Building2, Plus, Edit2, Trash2, Loader2, X, Hash } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  getDepartments,
  deleteDepartment,
  createDepartment,
  updateDepartment,
} from "@/app/actions/master-config";

export default function DepartmentsPage() {
  const [departments, setDepartments] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingDept, setEditingDept] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    code: "",
  });

  const fetchDepartments = async () => {
    setIsLoading(true);
    try {
      const data = await getDepartments();
      setDepartments(data);
    } catch (error) {
      console.error("Failed to fetch departments:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  const handleDelete = async (id: number) => {
    if (confirm("Are you sure you want to delete this department?")) {
      await deleteDepartment(id);
      fetchDepartments();
    }
  };

  const handleOpenModal = (dept: any = null) => {
    if (dept) {
      setEditingDept(dept);
      setFormData({
        name: dept.DepartmentName,
        code: dept.DepartmentCode || "",
      });
    } else {
      setEditingDept(null);
      setFormData({ name: "", code: "" });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (editingDept) {
        await updateDepartment(editingDept.DepartmentID, formData);
      } else {
        await createDepartment(formData);
      }
      setIsModalOpen(false);
      fetchDepartments();
    } catch (error) {
      alert("Failed to save department.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-8 pb-20 max-w-[1200px] mx-auto">
      <div className="flex justify-between items-start mb-10">
        <div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
            Departments
          </h1>
          <p className="text-slate-500 dark:text-gray-400 font-medium mt-1">
            Manage organizational units and their identification codes
          </p>
        </div>
        <button
          onClick={() => handleOpenModal()}
          className="cursor-pointer bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-bold text-sm flex items-center gap-2 shadow-xl shadow-slate-200 dark:shadow-blue-500/20 transition-all active:scale-95"
        >
          <Plus size={20} />
          Add Department
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading
          ? Array(3)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="h-48 bg-white dark:bg-gray-900 rounded-3xl border border-slate-100 dark:border-gray-800 animate-pulse"
                />
              ))
          : departments.map((dept, idx) => (
              <motion.div
                key={dept.DepartmentID}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-3xl border border-slate-100 dark:border-gray-800 shadow-xl shadow-slate-500/5 group hover:border-blue-500/50 transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                  <button
                    onClick={() => handleOpenModal(dept)}
                    className="cursor-pointer p-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl hover:bg-blue-100 transition-colors"
                  >
                    <Edit2 size={16} />
                  </button>
                  <button
                    onClick={() => handleDelete(dept.DepartmentID)}
                    className="cursor-pointer p-2 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-xl hover:bg-red-100 transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Building2
                    className="text-slate-400 dark:text-slate-500"
                    size={28}
                  />
                </div>

                <h3 className="text-xl font-black text-slate-800 dark:text-white capitalize truncate mb-2">
                  {dept.DepartmentName}
                </h3>
                <div className="flex items-center gap-2 text-slate-400 dark:text-gray-500 font-bold text-xs uppercase tracking-widest">
                  <Hash size={14} />
                  {dept.DepartmentCode || "No Code"}
                </div>

                <div className="mt-8 pt-6 border-t border-slate-50 dark:border-gray-800 flex items-center justify-between">
                  <span className="text-[10px] font-black text-slate-400 dark:text-gray-500 uppercase">
                    System Entity
                  </span>
                  <div className="flex -space-x-2">
                    {dept.staff?.slice(0, 3).map((s: any, i: number) => (
                      <div
                        key={i}
                        className="w-7 h-7 rounded-full border-2 border-white dark:border-gray-900 bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[9px] font-bold text-slate-500 dark:text-gray-400"
                      >
                        {s.StaffName.charAt(0)}
                      </div>
                    ))}
                    {dept._count?.staff > 3 && (
                      <div className="w-7 h-7 rounded-full border-2 border-white dark:border-gray-900 bg-blue-50 dark:bg-blue-900 flex items-center justify-center text-[9px] font-bold text-blue-600 dark:text-blue-400">
                        +{dept._count.staff - 3}
                      </div>
                    )}
                  </div>
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
                    {editingDept ? "Edit Department" : "New Department"}
                  </h2>
                  <p className="text-slate-500 text-sm">
                    Configure organizational unit details
                  </p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-slate-50 dark:hover:bg-gray-800 rounded-xl text-slate-400"
                >
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                <div className="space-y-1.5">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest">
                    Department Name
                  </label>
                  <div className="relative">
                    <Building2
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      size={16}
                    />
                    <input
                      required
                      type="text"
                      placeholder="e.g. Information Technology"
                      className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-gray-800 border-none rounded-2xl text-sm font-bold text-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500/20 transition-all"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest">
                    Department Code
                  </label>
                  <div className="relative">
                    <Hash
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      size={16}
                    />
                    <input
                      required
                      type="text"
                      placeholder="e.g. IT-01"
                      className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-gray-800 border-none rounded-2xl text-sm font-bold text-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500/20 transition-all"
                      value={formData.code}
                      onChange={(e) =>
                        setFormData({ ...formData, code: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="pt-4 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="cursor-pointer flex-1 py-3 text-sm font-bold text-slate-500 hover:bg-slate-100 dark:hover:bg-gray-800 rounded-2xl transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="cursor-pointer flex-[2] py-3 bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-700 text-white rounded-2xl font-bold text-sm shadow-xl shadow-slate-200 dark:shadow-blue-500/20 transition-all active:scale-95 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <Loader2 size={18} className="animate-spin" />
                    ) : (
                      <Plus size={18} />
                    )}
                    {editingDept ? "Update Detail" : "Confirm Addition"}
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

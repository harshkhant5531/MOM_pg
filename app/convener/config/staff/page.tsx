"use client";

import { useEffect, useState } from "react";
import {
  User,
  Plus,
  Edit2,
  Trash2,
  Search,
  Loader2,
  X,
  Mail,
  Phone,
  Briefcase,
  AlignLeft,
} from "lucide-react";
import {
  getStaff,
  getDepartments,
  createStaff,
  updateStaff,
  deleteStaff,
} from "@/app/actions/master-config";
import Dialog from "@/components/ui/Dialog";
import ConfirmDialog from "@/components/ui/ConfirmDialog";

export default function StaffPage() {
  const [staffList, setStaffList] = useState<any[]>([]);
  const [departments, setDepartments] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingStaff, setEditingStaff] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Dialog States
  const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, id: 0 });
  const [alertDialog, setAlertDialog] = useState({ isOpen: false, message: "" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    departmentId: "",
    remarks: "",
  });

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const [s, d] = await Promise.all([getStaff(), getDepartments()]);
      setStaffList(s);
      setDepartments(d);
    } catch (error) {
      console.error("Failed to fetch staff data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDeleteClick = (id: number) => {
    setConfirmDialog({ isOpen: true, id });
  };

  const onConfirmDelete = async () => {
    const id = confirmDialog.id;
    setConfirmDialog({ ...confirmDialog, isOpen: false });
    await deleteStaff(id);
    fetchData();
  };

  const handleOpenModal = (staff: any = null) => {
    if (staff) {
      setEditingStaff(staff);
      setFormData({
        name: staff.StaffName,
        email: staff.EmailAddress || "",
        mobile: staff.MobileNo || "",
        departmentId: staff.DepartmentID?.toString() || "",
        remarks: staff.Remarks || "",
      });
    } else {
      setEditingStaff(null);
      setFormData({
        name: "",
        email: "",
        mobile: "",
        departmentId: "",
        remarks: "",
      });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (editingStaff) {
        await updateStaff(editingStaff.StaffID, formData);
      } else {
        await createStaff(formData);
      }
      setIsModalOpen(false);
      fetchData();
    } catch (error) {
       setAlertDialog({ isOpen: true, message: "Operational failure: Could not commit staff records to the database." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const filteredStaff = staffList.filter(
    (s) =>
      s.StaffName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.EmailAddress?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.department?.DepartmentName.toLowerCase().includes(
        searchTerm.toLowerCase(),
      ),
  );

  return (
    <div className="p-8 pb-20 max-w-[1400px] mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Staff Management
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Manage staff members who participate in meetings
          </p>
        </div>
        <button
          onClick={() => handleOpenModal()}
          className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 shadow-lg shadow-blue-500/20 transition-all active:scale-95"
        >
          <Plus size={18} />
          Add Staff
        </button>
      </div>

      <div className="mb-6 relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search staff by name, email or department..."
          className="w-full md:w-96 pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/10 text-sm shadow-sm transition-all"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
        {isLoading ? (
          <div className="p-20 flex flex-col items-center justify-center text-slate-400 gap-3">
            <Loader2 className="animate-spin text-blue-500" size={24} />
            <span className="font-bold uppercase tracking-widest text-[10px]">
              Syncing staff records...
            </span>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-[11px] text-gray-400 uppercase tracking-widest bg-gray-50/50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-800">
                <tr>
                  <th className="px-8 py-5 font-black">Staff Member</th>
                  <th className="px-8 py-5 font-black">Contact Details</th>
                  <th className="px-8 py-5 font-black">Department</th>
                  <th className="px-8 py-5 font-black text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                {filteredStaff.map((staff) => (
                  <tr
                    key={staff.StaffID}
                    className="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors group"
                  >
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center font-bold">
                          {staff.StaffName.charAt(0)}
                        </div>
                        <span className="font-bold text-gray-900 dark:text-white">
                          {staff.StaffName}
                        </span>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-[13px]">
                          <Mail size={12} className="text-slate-300" />
                          {staff.EmailAddress || "No email"}
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 text-[12px]">
                          <Phone size={12} className="text-slate-300" />
                          {staff.MobileNo || "No mobile"}
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                        {staff.department?.DepartmentName}
                      </span>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleOpenModal(staff)}
                          className=" cursor-pointer p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all"
                        >
                          <Edit2 size={16} />
                        </button>
                        <button
                          onClick={() => handleDeleteClick(staff.StaffID)}
                          className=" cursor-pointer p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all"
                        >
                          <Trash2 size={16} />
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

      {/* Staff Form Dialog */}
      <Dialog
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        maxWidth="max-w-lg"
        title={editingStaff ? "Edit Staff Details" : "Register New Staff"}
        description="Fill in the professional details below to maintain accurate records."
        footer={
          <>
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="cursor-pointer px-6 py-3 text-sm font-bold text-slate-500 hover:bg-slate-100 dark:hover:bg-gray-800 rounded-2xl transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="cursor-pointer flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-sm shadow-xl shadow-blue-500/20 transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <Loader2 size={18} className="animate-spin" />
              ) : (
                <Plus size={18} />
              )}
              {editingStaff ? "Update Staff" : "Add Staff Member"}
            </button>
          </>
        }
      >
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1.5">
            <label className="text-xs font-black text-slate-400 uppercase tracking-widest">
              Full Name
            </label>
            <div className="relative">
              <User
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                size={16}
              />
              <input
                required
                type="text"
                className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-gray-800 border-none rounded-2xl text-sm font-bold text-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500/20 transition-all"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest">
                Email
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  size={16}
                />
                <input
                  type="email"
                  className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-gray-800 border-none rounded-2xl text-sm font-bold text-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500/20 transition-all"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest">
                Mobile
              </label>
              <div className="relative">
                <Phone
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  size={16}
                />
                <input
                  type="text"
                  className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-gray-800 border-none rounded-2xl text-sm font-bold text-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500/20 transition-all"
                  value={formData.mobile}
                  onChange={(e) =>
                    setFormData({ ...formData, mobile: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-black text-slate-400 uppercase tracking-widest">
              Department
            </label>
            <div className="relative">
              <Briefcase
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                size={16}
              />
              <select
                required
                className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-gray-800 border-none rounded-2xl text-sm font-bold text-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500/20 appearance-none cursor-pointer"
                value={formData.departmentId}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    departmentId: e.target.value,
                  })
                }
              >
                <option value="">Select Department</option>
                {departments.map((dept) => (
                  <option
                    key={dept.DepartmentID}
                    value={dept.DepartmentID}
                  >
                    {dept.DepartmentName}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-black text-slate-400 uppercase tracking-widest">
              Remarks
            </label>
            <div className="relative">
              <AlignLeft
                className="absolute left-4 top-3 text-slate-400"
                size={16}
              />
              <textarea
                rows={2}
                className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-gray-800 border-none rounded-2xl text-sm font-bold text-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                value={formData.remarks}
                onChange={(e) =>
                  setFormData({ ...formData, remarks: e.target.value })
                }
              />
            </div>
          </div>
        </form>
      </Dialog>

      <ConfirmDialog
        isOpen={confirmDialog.isOpen}
        onClose={() => setConfirmDialog({ ...confirmDialog, isOpen: false })}
        onConfirm={onConfirmDelete}
        title="Sanitize Record"
        message="Are you sure you want to permanently erase this staff member from the system? This action is irreversible."
        type="danger"
        confirmText="Erase Record"
      />

      <ConfirmDialog
        isOpen={alertDialog.isOpen}
        onClose={() => setAlertDialog({ ...alertDialog, isOpen: false })}
        onConfirm={() => setAlertDialog({ ...alertDialog, isOpen: false })}
        title="System Notice"
        message={alertDialog.message}
        confirmText="Understood"
        type="info"
      />
    </div>
  );
}

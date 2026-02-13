"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  Plus,
  Search,
  Filter,
  Loader2,
  X,
  Users,
  FileText,
  ChevronRight,
  Edit2,
  Trash2,
  CheckCircle2,
} from "lucide-react";
import {
  getMeetings,
  cancelMeeting,
  createMeeting,
  updateMeeting,
} from "@/app/actions/meetings";
import {
  getVenues,
  getMeetingTypes,
  getStaff,
} from "@/app/actions/master-config";

export default function MeetingsPage() {
  const [meetings, setMeetings] = useState<any[]>([]);
  const [venues, setVenues] = useState<any[]>([]);
  const [meetingTypes, setMeetingTypes] = useState<any[]>([]);
  const [staffList, setStaffList] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingMeeting, setEditingMeeting] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [formData, setFormData] = useState({
    description: "",
    date: "",
    typeId: "",
    venueId: "",
    participants: [] as number[],
  });

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const [m, v, t, s] = await Promise.all([
        getMeetings(),
        getVenues(),
        getMeetingTypes(),
        getStaff(),
      ]);
      setMeetings(m);
      setVenues(v);
      setMeetingTypes(t);
      setStaffList(s);
    } catch (error) {
      console.error("Failed to fetch meetings:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCancel = async (id: number) => {
    const reason = prompt("Enter reason for cancellation (optional):");
    if (confirm("Are you sure you want to cancel this meeting?")) {
      await cancelMeeting(id, reason || "Cancelled by admin");
      fetchData();
    }
  };

  const handleOpenModal = (meeting: any = null) => {
    if (meeting) {
      setEditingMeeting(meeting);
      setFormData({
        description: meeting.MeetingDescription || "",
        date: new Date(meeting.MeetingDate).toISOString().slice(0, 16),
        typeId: meeting.MeetingTypeID.toString(),
        venueId: meeting.VenueID?.toString() || "",
        participants: meeting.meetingmember?.map((m: any) => m.StaffID) || [],
      });
    } else {
      setEditingMeeting(null);
      setFormData({
        description: "",
        date: "",
        typeId: "",
        venueId: "",
        participants: [],
      });
    }
    setIsModalOpen(true);
  };

  const toggleParticipant = (staffId: number) => {
    setFormData((prev) => ({
      ...prev,
      participants: prev.participants.includes(staffId)
        ? prev.participants.filter((id) => id !== staffId)
        : [...prev.participants, staffId],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (editingMeeting) {
        await updateMeeting(editingMeeting.MeetingID, formData);
      } else {
        await createMeeting(formData);
      }
      setIsModalOpen(false);
      fetchData();
    } catch (error) {
      alert("Failed to save meeting.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const filteredMeetings = meetings.filter(
    (m) =>
      m.MeetingDescription?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.meetingtype?.MeetingTypeName.toLowerCase().includes(
        searchQuery.toLowerCase(),
      ),
  );

  return (
    <div className="space-y-6 max-w-[1400px] mx-auto pb-20">
      {/* Header section */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            Meeting Schedule
          </h1>
          <p className="text-slate-500 text-sm font-medium">
            Manage and track all organizational meetings
          </p>
        </div>
        <button
          onClick={() => handleOpenModal()}
          className=" cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 shadow-lg shadow-blue-500/20 transition-all active:scale-95"
        >
          <Plus size={18} />
          Schedule Meeting
        </button>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          {
            label: "Upcoming",
            count: meetings.filter(
              (m) => !m.IsCancelled && new Date(m.MeetingDate) > new Date(),
            ).length,
            color: "blue",
          },
          {
            label: "Completed",
            count: meetings.filter(
              (m) => !m.IsCancelled && new Date(m.MeetingDate) <= new Date(),
            ).length,
            color: "emerald",
          },
          {
            label: "Cancelled",
            count: meetings.filter((m) => m.IsCancelled).length,
            color: "slate",
          },
          { label: "Total", count: meetings.length, color: "purple" },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between"
          >
            <div>
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest">
                {stat.label}
              </p>
              <h3 className="text-2xl font-black text-slate-800 mt-1">
                {stat.count}
              </h3>
            </div>
            <div
              className={`p-3 rounded-2xl bg-${stat.color}-50 text-${stat.color}-500`}
            >
              <Calendar size={20} />
            </div>
          </div>
        ))}
      </div>

      {/* Filters & Content */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-blue-500/5 overflow-hidden">
        <div className="p-4 border-b border-slate-50 flex flex-wrap gap-4 items-center justify-between bg-slate-50/30">
          <div className="flex-1 max-w-md relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search by title or type..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2 rounded-xl border border-slate-100 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/10 transition-all text-sm font-medium"
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold text-slate-500 bg-white border border-slate-100 rounded-lg hover:bg-slate-50 transition-colors">
              <Filter size={14} />
              Filter
            </button>
          </div>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-20 text-slate-400 gap-3">
            <Loader2 size={24} className="animate-spin text-blue-500" />
            <span className="font-bold">Syncing meetings...</span>
          </div>
        ) : filteredMeetings.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-slate-400 italic">
            <Calendar size={48} className="mb-4 opacity-20" />
            <p>No meetings found.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-100">
                  <th className="px-8 py-5 text-[12px] font-black text-slate-400 uppercase tracking-widest">
                    Meeting & Status
                  </th>
                  <th className="px-8 py-5 text-[12px] font-black text-slate-400 uppercase tracking-widest">
                    Type
                  </th>
                  <th className="px-8 py-5 text-[12px] font-black text-slate-400 uppercase tracking-widest">
                    Date & Venue
                  </th>
                  <th className="px-8 py-5 text-[12px] font-black text-slate-400 uppercase tracking-widest">
                    Participants
                  </th>
                  <th className="px-8 py-5 text-[12px] font-black text-slate-400 uppercase tracking-widest text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {filteredMeetings.map((meeting, idx) => {
                  const isPast = new Date(meeting.MeetingDate) < new Date();
                  const status = meeting.IsCancelled
                    ? "cancelled"
                    : isPast
                      ? "completed"
                      : "pending";

                  return (
                    <motion.tr
                      key={meeting.MeetingID}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="hover:bg-slate-50/80 transition-all group"
                    >
                      <td className="px-8 py-6">
                        <div className="flex flex-col gap-1.5">
                          <span className="text-[14px] font-bold text-slate-700">
                            {meeting.MeetingDescription}
                          </span>
                          <span
                            className={`w-fit px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider border ${
                              status === "pending"
                                ? "bg-blue-50 text-blue-500 border-blue-100"
                                : status === "completed"
                                  ? "bg-emerald-50 text-emerald-500 border-emerald-100"
                                  : "bg-red-50 text-red-500 border-red-100"
                            }`}
                          >
                            {status}
                          </span>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span className="text-[14px] font-medium text-slate-500">
                          {meeting.meetingtype?.MeetingTypeName}
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2 text-slate-600 font-bold text-[13px]">
                            <Calendar size={14} className="text-slate-400" />
                            {new Date(meeting.MeetingDate).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-2 text-slate-400 font-medium text-[12px]">
                            <MapPin size={14} />
                            {meeting.venue?.VenueName || "No venue"}
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex -space-x-2">
                          {meeting.meetingmember
                            ?.slice(0, 3)
                            .map((member: any, i: number) => (
                              <div
                                key={i}
                                className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-600"
                                title={member.staff?.StaffName}
                              >
                                {member.staff?.StaffName.charAt(0)}
                              </div>
                            ))}
                          {meeting.meetingmember?.length > 3 && (
                            <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-50 flex items-center justify-center text-[10px] font-bold text-slate-400">
                              +{meeting.meetingmember.length - 3}
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center justify-end gap-2">
                          {status === "pending" && (
                            <>
                              <button
                                onClick={() => handleOpenModal(meeting)}
                                className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                                title="Edit"
                              >
                                <Edit2 size={18} />
                              </button>
                              <button
                                onClick={() => handleCancel(meeting.MeetingID)}
                                className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                                title="Cancel Meeting"
                              >
                                <Trash2 size={18} />
                              </button>
                            </>
                          )}
                          <button className="p-2 text-slate-300 hover:bg-slate-100 rounded-xl transition-all">
                            <ChevronRight size={20} />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modal */}
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
              className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="p-8 border-b border-slate-50 flex items-center justify-between shrink-0">
                <div>
                  <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">
                    {editingMeeting
                      ? "Edit Meeting Details"
                      : "Schedule New Meeting"}
                  </h2>
                  <p className="text-slate-500 text-sm">
                    {editingMeeting
                      ? "Update existing meeting schedule"
                      : "Setup a new organizational meeting"}
                  </p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-slate-50 rounded-xl text-slate-400 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <form
                onSubmit={handleSubmit}
                className="flex-1 overflow-y-auto p-8 space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left Column: Core Details */}
                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest">
                        Description
                      </label>
                      <div className="relative">
                        <FileText
                          className="absolute left-4 top-3 text-slate-400"
                          size={16}
                        />
                        <textarea
                          required
                          rows={3}
                          placeholder="What's this meeting about?"
                          className="w-full pl-11 pr-4 py-3 bg-slate-50 border-none rounded-2xl text-sm font-bold text-slate-700 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                          value={formData.description}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              description: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest">
                          Date & Time
                        </label>
                        <div className="relative">
                          <Calendar
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                            size={16}
                          />
                          <input
                            required
                            type="datetime-local"
                            className="w-full pl-11 pr-4 py-3 bg-slate-50 border-none rounded-2xl text-sm font-bold text-slate-700 focus:ring-2 focus:ring-blue-500/20 transition-all"
                            value={formData.date}
                            onChange={(e) =>
                              setFormData({ ...formData, date: e.target.value })
                            }
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest">
                          Meeting Type
                        </label>
                        <div className="relative">
                          <Filter
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                            size={16}
                          />
                          <select
                            required
                            className="w-full pl-11 pr-4 py-3 bg-slate-50 border-none rounded-2xl text-sm font-bold text-slate-700 focus:ring-2 focus:ring-blue-500/20 appearance-none cursor-pointer"
                            value={formData.typeId}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                typeId: e.target.value,
                              })
                            }
                          >
                            <option value="">Select Category</option>
                            {meetingTypes.map((t) => (
                              <option
                                key={t.MeetingTypeID}
                                value={t.MeetingTypeID}
                              >
                                {t.MeetingTypeName}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest">
                          Venue
                        </label>
                        <div className="relative">
                          <MapPin
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                            size={16}
                          />
                          <select
                            required
                            className="w-full pl-11 pr-4 py-3 bg-slate-50 border-none rounded-2xl text-sm font-bold text-slate-700 focus:ring-2 focus:ring-blue-500/20 appearance-none cursor-pointer"
                            value={formData.venueId}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                venueId: e.target.value,
                              })
                            }
                          >
                            <option value="">Select Venue</option>
                            {venues.map((v) => (
                              <option key={v.VenueID} value={v.VenueID}>
                                {v.VenueName} ({v.Location})
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Participants Selection */}
                  <div className="space-y-3 flex flex-col h-full overflow-hidden">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest">
                        Invite Participants
                      </label>
                      <span className="text-[10px] font-black text-blue-500 bg-blue-50 px-2 py-0.5 rounded-full">
                        {formData.participants.length} Selected
                      </span>
                    </div>
                    <div className="bg-slate-50 rounded-2xl p-2 flex-1 overflow-y-auto border border-slate-100 min-h-[300px]">
                      <div className="grid grid-cols-1 gap-1">
                        {staffList.map((staff) => (
                          <button
                            key={staff.StaffID}
                            type="button"
                            onClick={() => toggleParticipant(staff.StaffID)}
                            className={`flex items-center justify-between p-3 rounded-xl transition-all text-left ${
                              formData.participants.includes(staff.StaffID)
                                ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                                : "hover:bg-white text-slate-600"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-[10px] uppercase ${
                                  formData.participants.includes(staff.StaffID)
                                    ? "bg-blue-500"
                                    : "bg-slate-200"
                                }`}
                              >
                                {staff.StaffName.charAt(0)}
                              </div>
                              <div>
                                <p className="text-[13px] font-bold leading-none">
                                  {staff.StaffName}
                                </p>
                                <p
                                  className={`text-[11px] mt-0.5 ${
                                    formData.participants.includes(
                                      staff.StaffID,
                                    )
                                      ? "text-blue-100"
                                      : "text-slate-400"
                                  }`}
                                >
                                  {staff.department?.DepartmentName}
                                </p>
                              </div>
                            </div>
                            {formData.participants.includes(staff.StaffID) && (
                              <CheckCircle2 size={16} />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </form>

              <div className="p-8 border-t border-slate-50 bg-slate-50/50 flex gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-3 text-sm font-bold text-slate-500 hover:bg-slate-100 rounded-2xl transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={
                    isSubmitting ||
                    !formData.description ||
                    !formData.date ||
                    !formData.typeId ||
                    !formData.venueId
                  }
                  className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-2xl font-bold text-sm shadow-xl shadow-blue-500/20 transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <Loader2 size={18} className="animate-spin" />
                  ) : (
                    <Calendar size={18} />
                  )}
                  {editingMeeting ? "Update Schedule" : "Confirm Schedule"}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

"use client";

import { useEffect, useState, useRef } from "react";
import {
  Calendar as CalendarIcon,
  Plus,
  Search,
  Edit2,
  Trash2,
  Clock,
  MapPin,
  Loader2,
  X,
  Filter,
  Users,
  CheckCircle2,
  XCircle,
  Info,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  getMeetings,
  createMeeting,
  updateMeeting,
  cancelMeeting,
} from "@/app/actions/meetings";
import {
  getVenues,
  getMeetingTypes,
  getStaff,
} from "@/app/actions/master-config";

export default function MeetingsPage() {
  const [meetings, setMeetings] = useState<any[]>([]);
  const [venues, setVenues] = useState<any[]>([]);
  const [types, setTypes] = useState<any[]>([]);
  const [staff, setStaff] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  // Close filter dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setIsFilterOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingMeeting, setEditingMeeting] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    date: "",
    time: "",
    typeId: "",
    venueId: "",
    description: "",
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
      setTypes(t);
      setStaff(s);
    } catch (error) {
      console.error("Failed to fetch meetings data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOpenModal = (meeting: any = null) => {
    if (meeting) {
      setEditingMeeting(meeting);
      const mDate = new Date(meeting.MeetingDate);
      setFormData({
        date: mDate.toISOString().split("T")[0],
        time: mDate.toTimeString().slice(0, 5),
        typeId: meeting.MeetingTypeID.toString(),
        venueId: meeting.VenueID?.toString() || "",
        description: meeting.MeetingDescription || "",
        participants: meeting.meetingmember?.map((mm: any) => mm.StaffID) || [],
      });
    } else {
      setEditingMeeting(null);
      setFormData({
        date: new Date().toISOString().split("T")[0],
        time: "10:00",
        typeId: "",
        venueId: "",
        description: "",
        participants: [],
      });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const dateTime = new Date(`${formData.date}T${formData.time}`);
      const data = {
        ...formData,
        date: dateTime,
      };

      if (editingMeeting) {
        await updateMeeting(editingMeeting.MeetingID, data);
      } else {
        await createMeeting(data);
      }
      setIsModalOpen(false);
      fetchData();
    } catch (error) {
      alert("Failed to save meeting.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = async (id: number) => {
    const reason = prompt("Enter cancellation reason:");
    if (reason !== null) {
      await cancelMeeting(id, reason);
      fetchData();
    }
  };

  const toggleParticipant = (staffId: number) => {
    setFormData((prev) => ({
      ...prev,
      participants: prev.participants.includes(staffId)
        ? prev.participants.filter((id) => id !== staffId)
        : [...prev.participants, staffId],
    }));
  };

  const activeFilterCount = (statusFilter !== "all" ? 1 : 0) + (typeFilter !== "all" ? 1 : 0);

  const filteredMeetings = meetings.filter((m) => {
    const matchesSearch =
      m.MeetingDescription?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.meetingtype?.MeetingTypeName.toLowerCase().includes(searchTerm.toLowerCase());

    const isPast = new Date(m.MeetingDate) < new Date();
    const meetingStatus = m.IsCancelled ? "cancelled" : isPast ? "completed" : "upcoming";
    const matchesStatus = statusFilter === "all" || meetingStatus === statusFilter;

    const matchesType = typeFilter === "all" || m.MeetingTypeID?.toString() === typeFilter;

    return matchesSearch && matchesStatus && matchesType;
  });

  return (
    <div className="p-8 pb-20 max-w-[1400px] mx-auto">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            MEETING MANAGEMENT
          </h1>
          <p className="text-slate-500 font-medium">
            Schedule and oversee organizational collaborative sessions
          </p>
        </div>
        <button
          onClick={() => handleOpenModal()}
          className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-bold text-sm flex items-center gap-2 shadow-xl shadow-blue-500/20 transition-all active:scale-95"
        >
          <Plus size={20} />
          Schedule Meeting
        </button>
      </div>

      <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 w-full">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search by topic or type..."
            className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-gray-900 border border-slate-100 dark:border-gray-800 rounded-2xl text-sm font-bold shadow-sm focus:ring-2 focus:ring-blue-500/10 transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="relative" ref={filterRef}>
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className={`cursor-pointer flex items-center gap-2 p-3.5 border rounded-2xl transition-colors shadow-sm ${
              activeFilterCount > 0
                ? "bg-blue-50 text-blue-600 border-blue-200"
                : "bg-white dark:bg-gray-900 border-slate-100 dark:border-gray-800 text-slate-400 hover:text-blue-600"
            }`}
          >
            <Filter size={20} />
            {activeFilterCount > 0 && (
              <span className="px-1.5 py-0.5 bg-blue-600 text-white text-[10px] font-black rounded-full leading-none">
                {activeFilterCount}
              </span>
            )}
            <ChevronDown size={14} className={`transition-transform ${isFilterOpen ? "rotate-180" : ""}`} />
          </button>

          {isFilterOpen && (
            <div className="absolute right-0 top-full mt-2 w-72 bg-white dark:bg-gray-900 border border-slate-100 dark:border-gray-800 rounded-2xl shadow-xl shadow-slate-200/50 z-30 p-4 space-y-4">
              {/* Status Filter */}
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Status</p>
                <div className="flex flex-wrap gap-1.5">
                  {["all", "upcoming", "completed", "cancelled"].map((status) => (
                    <button
                      key={status}
                      onClick={() => setStatusFilter(status)}
                      className={`cursor-pointer px-3 py-1.5 rounded-lg text-[11px] font-bold capitalize transition-all ${
                        statusFilter === status
                          ? status === "upcoming" ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                          : status === "completed" ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/20"
                          : status === "cancelled" ? "bg-red-600 text-white shadow-md shadow-red-500/20"
                          : "bg-slate-900 text-white"
                          : "bg-slate-50 dark:bg-gray-800 text-slate-500 hover:bg-slate-100"
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>

              {/* Meeting Type Filter */}
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Meeting Type</p>
                <select
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-gray-800 border-none rounded-xl text-sm font-bold text-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500/20 appearance-none cursor-pointer"
                >
                  <option value="all">All Types</option>
                  {types.map((t) => (
                    <option key={t.MeetingTypeID} value={t.MeetingTypeID}>
                      {t.MeetingTypeName}
                    </option>
                  ))}
                </select>
              </div>

              {/* Clear Filters */}
              {activeFilterCount > 0 && (
                <button
                  onClick={() => {
                    setStatusFilter("all");
                    setTypeFilter("all");
                  }}
                  className="cursor-pointer w-full py-2 text-[11px] font-bold text-red-500 hover:bg-red-50 rounded-xl transition-colors"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-[32px] border border-slate-100 dark:border-gray-800 shadow-xl shadow-blue-500/5 overflow-hidden">
        {isLoading ? (
          <div className="p-24 flex flex-col items-center justify-center text-slate-400 gap-4">
            <Loader2 className="animate-spin text-blue-500" size={32} />
            <span className="font-black uppercase tracking-widest text-xs">
              Syncing meeting records...
            </span>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50/50 dark:bg-gray-800/50 border-b border-slate-100 dark:border-gray-800">
                  <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                    Session Details
                  </th>
                  <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                    Schedule
                  </th>
                  <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                    Venue
                  </th>
                  <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                    Scale
                  </th>
                  <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                    Status
                  </th>
                  <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 dark:divide-gray-800">
                {filteredMeetings.map((meeting) => (
                  <tr
                    key={meeting.MeetingID}
                    className={`group hover:bg-slate-50/50 dark:hover:bg-gray-800/50 transition-colors ${meeting.IsCancelled ? "opacity-60" : ""}`}
                  >
                    <td className="px-8 py-6">
                      <div className="space-y-1 max-w-xs">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-black rounded-md uppercase">
                            {meeting.meetingtype?.MeetingTypeName}
                          </span>
                        </div>
                        <h4 className="font-bold text-slate-900 dark:text-white capitalize group-hover:text-blue-600 transition-colors">
                          {meeting.MeetingDescription}
                        </h4>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-sm">
                      <div className="font-bold text-slate-700 dark:text-gray-300">
                        {new Date(meeting.MeetingDate).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-400 font-medium text-xs mt-1">
                        <Clock size={12} />
                        {new Date(meeting.MeetingDate).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-2 text-slate-600 dark:text-gray-400 font-bold text-sm">
                        <MapPin size={14} className="text-blue-500" />
                        {meeting.venue?.VenueName || "TBD"}
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-2">
                        <div className="flex -space-x-2">
                          {meeting.meetingmember
                            ?.slice(0, 3)
                            .map((mm: any, i: number) => (
                              <div
                                key={i}
                                className="w-7 h-7 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-500"
                              >
                                {mm.staff?.StaffName.charAt(0)}
                              </div>
                            ))}
                        </div>
                        <span className="text-[11px] font-black text-slate-400">
                          {meeting.meetingmember?.length || 0} Members
                        </span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      {meeting.IsCancelled ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-50 text-red-600 text-[10px] font-black rounded-full border border-red-100 uppercase">
                          <XCircle size={12} /> Cancelled
                        </span>
                      ) : new Date(meeting.MeetingDate) < new Date() ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-600 text-[10px] font-black rounded-full border border-green-100 uppercase">
                          <CheckCircle2 size={12} /> Completed
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-black rounded-full border border-blue-100 uppercase">
                          <Clock size={12} /> Upcoming
                        </span>
                      )}
                    </td>
                    <td className="px-8 py-6 text-right">
                      {!meeting.IsCancelled &&
                        new Date(meeting.MeetingDate) >= new Date() && (
                          <div className="flex gap-2 justify-end">
                            <button
                              onClick={() => handleOpenModal(meeting)}
                              className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
                            >
                              <Edit2 size={18} />
                            </button>
                            <button
                              onClick={() => handleCancel(meeting.MeetingID)}
                              className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        )}
                    </td>
                  </tr>
                ))}
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
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-white dark:bg-gray-900 rounded-[40px] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              <div className="p-10 border-b border-slate-50 dark:border-gray-800 flex items-center justify-between bg-slate-50/50 dark:bg-gray-800/50">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/30">
                    <Plus size={28} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                      {editingMeeting
                        ? "Reconfigure Session"
                        : "Schedule New Session"}
                    </h2>
                    <p className="text-slate-500 font-medium">
                      Coordinate participants, time, and logistics
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-3 hover:bg-white dark:hover:bg-gray-700 rounded-2xl text-slate-400 shadow-sm transition-all"
                >
                  <X size={24} />
                </button>
              </div>

              <form
                onSubmit={handleSubmit}
                className="flex-1 overflow-y-auto p-10 space-y-10 custom-scrollbar"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-8">
                    <div className="space-y-3">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
                        <CalendarIcon size={14} className="text-blue-500" />{" "}
                        Date & Time
                      </label>
                      <div className="flex gap-4">
                        <input
                          required
                          type="date"
                          className="flex-1 px-5 py-4 bg-slate-50 dark:bg-gray-800 border-none rounded-2xl text-sm font-bold text-slate-700 dark:text-white focus:ring-4 focus:ring-blue-500/5 transition-all"
                          value={formData.date}
                          onChange={(e) =>
                            setFormData({ ...formData, date: e.target.value })
                          }
                        />
                        <input
                          required
                          type="time"
                          className="w-32 px-5 py-4 bg-slate-50 dark:bg-gray-800 border-none rounded-2xl text-sm font-bold text-slate-700 dark:text-white focus:ring-4 focus:ring-blue-500/5 transition-all"
                          value={formData.time}
                          onChange={(e) =>
                            setFormData({ ...formData, time: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
                        <Info size={14} className="text-blue-500" /> Category &
                        Venue
                      </label>
                      <div className="grid grid-cols-1 gap-4">
                        <select
                          required
                          className="w-full px-5 py-4 bg-slate-50 dark:bg-gray-800 border-none rounded-2xl text-sm font-bold text-slate-700 dark:text-white focus:ring-4 focus:ring-blue-500/5 transition-all appearance-none"
                          value={formData.typeId}
                          onChange={(e) =>
                            setFormData({ ...formData, typeId: e.target.value })
                          }
                        >
                          <option value="">Select Meeting Type</option>
                          {types.map((t) => (
                            <option
                              key={t.MeetingTypeID}
                              value={t.MeetingTypeID}
                            >
                              {t.MeetingTypeName}
                            </option>
                          ))}
                        </select>
                        <select
                          required
                          className="w-full px-5 py-4 bg-slate-50 dark:bg-gray-800 border-none rounded-2xl text-sm font-bold text-slate-700 dark:text-white focus:ring-4 focus:ring-blue-500/5 transition-all appearance-none"
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
                              {v.VenueName} (Cap: {v.Capacity})
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">
                        Topic/Description
                      </label>
                      <textarea
                        required
                        rows={4}
                        className="w-full px-5 py-4 bg-slate-50 dark:bg-gray-800 border-none rounded-2xl text-sm font-bold text-slate-700 dark:text-white focus:ring-4 focus:ring-blue-500/5 transition-all resize-none"
                        placeholder="What is the objective of this meeting?"
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

                  <div className="space-y-3 flex flex-col h-full">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] flex items-center justify-between">
                      Participants
                      <span className="text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md text-[10px]">
                        {formData.participants.length} selected
                      </span>
                    </label>
                    <div className="flex-1 bg-slate-50 dark:bg-gray-800 rounded-3xl p-6 overflow-y-auto space-y-2 border border-slate-100 dark:border-gray-700">
                      {staff.map((member) => (
                        <button
                          key={member.StaffID}
                          type="button"
                          onClick={() => toggleParticipant(member.StaffID)}
                          className={`w-full flex items-center justify-between p-3.5 rounded-2xl transition-all ${formData.participants.includes(member.StaffID) ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20" : "bg-white dark:bg-gray-900 text-slate-700 dark:text-gray-300 hover:bg-blue-50 group"}`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black ${formData.participants.includes(member.StaffID) ? "bg-blue-500 text-white" : "bg-slate-100 text-slate-400 group-hover:bg-blue-100 group-hover:text-blue-600"}`}
                            >
                              {member.StaffName.charAt(0)}
                            </div>
                            <span className="text-xs font-bold">
                              {member.StaffName}
                            </span>
                          </div>
                          <ChevronRight
                            size={14}
                            className={
                              formData.participants.includes(member.StaffID)
                                ? "opacity-100"
                                : "opacity-0"
                            }
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 flex gap-4">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 py-4 text-sm font-black text-slate-400 hover:text-slate-600 hover:bg-slate-50 dark:hover:bg-gray-800 rounded-2xl transition-all uppercase tracking-widest"
                  >
                    Discard
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-[2] py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-3xl font-black text-sm shadow-2xl shadow-blue-500/40 transition-all active:scale-[0.98] flex items-center justify-center gap-3 uppercase tracking-widest"
                  >
                    {isSubmitting ? (
                      <Loader2 size={20} className="animate-spin" />
                    ) : editingMeeting ? (
                      "Apply Changes"
                    ) : (
                      "Confirm Schedule"
                    )}
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

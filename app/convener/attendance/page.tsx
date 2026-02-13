"use client";

import { useEffect, useState } from "react";
import {
  Calendar,
  Users,
  Save,
  CheckCircle,
  XCircle,
  FileBarChart,
  Loader2,
  ChevronDown,
  Clock,
  MapPin,
  AlertCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getMeetings, updateAttendance } from "@/app/actions/meetings";

export default function AttendancePage() {
  const [meetings, setMeetings] = useState<any[]>([]);
  const [selectedMeetingId, setSelectedMeetingId] = useState<number | null>(
    null,
  );
  const [selectedMeeting, setSelectedMeeting] = useState<any>(null);
  const [attendanceData, setAttendanceData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        const data = await getMeetings();
        setMeetings(data);
        if (data.length > 0) {
          setSelectedMeetingId(data[0].MeetingID);
          setSelectedMeeting(data[0]);
          setAttendanceData(
            data[0].meetingmember.map((mm: any) => ({
              id: mm.MeetingMemberID,
              staffId: mm.StaffID,
              staffName: mm.staff.StaffName,
              email: mm.staff.EmailAddress,
              isPresent: mm.IsPresent || false,
              remarks: mm.Remarks || "",
            })),
          );
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMeetings();
  }, []);

  const handleMeetingChange = (id: number) => {
    const meeting = meetings.find((m) => m.MeetingID === id);
    setSelectedMeetingId(id);
    setSelectedMeeting(meeting);
    setAttendanceData(
      meeting.meetingmember.map((mm: any) => ({
        id: mm.MeetingMemberID,
        staffId: mm.StaffID,
        staffName: mm.staff.StaffName,
        email: mm.staff.EmailAddress,
        isPresent: mm.IsPresent || false,
        remarks: mm.Remarks || "",
      })),
    );
  };

  const togglePresence = (id: number) => {
    setAttendanceData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isPresent: !item.isPresent } : item,
      ),
    );
  };

  const updateRemarks = (id: number, remarks: string) => {
    setAttendanceData((prev) =>
      prev.map((item) => (item.id === id ? { ...item, remarks } : item)),
    );
  };

  const handleSave = async () => {
    if (!selectedMeetingId) return;
    setIsSaving(true);
    try {
      await updateAttendance(selectedMeetingId, attendanceData);
      alert("Attendance updated successfully!");
    } catch (err) {
      alert("Failed to update attendance.");
    } finally {
      setIsSaving(false);
    }
  };

  const presentCount = attendanceData.filter((a) => a.isPresent).length;
  const absentCount = attendanceData.length - presentCount;
  const attendanceRate =
    attendanceData.length > 0
      ? Math.round((presentCount / attendanceData.length) * 100)
      : 0;

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[600px] text-slate-400 gap-4">
        <Loader2 size={32} className="animate-spin text-blue-500" />
        <span className="text-lg font-bold">Syncing attendance rosters...</span>
      </div>
    );
  }

  return (
    <div className="p-8 pb-20 max-w-[1200px] mx-auto space-y-8 animate-in fade-in duration-500">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
            Attendance tracking
          </h1>
          <p className="text-slate-500 font-medium">
            Verify participation and manage member presence records
          </p>
        </div>
        <button
          onClick={handleSave}
          disabled={isSaving || !selectedMeetingId}
          className="cursor-pointer bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-700 text-white px-8 py-3.5 rounded-2xl font-bold text-sm flex items-center gap-3 shadow-xl shadow-slate-200 dark:shadow-blue-500/20 transition-all active:scale-95 disabled:opacity-50"
        >
          {isSaving ? (
            <Loader2 size={20} className="animate-spin" />
          ) : (
            <Save size={20} />
          )}
          {isSaving ? "Saving Changes..." : "Commit Attendance"}
        </button>
      </header>

      {/* Meeting Selector */}
      <div className="bg-white dark:bg-gray-900 p-8 rounded-[32px] border border-slate-100 dark:border-gray-800 shadow-xl shadow-blue-500/5">
        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3 block">
          Perspective Session
        </label>
        <div className="relative group">
          <select
            className="w-full appearance-none bg-slate-50 dark:bg-gray-800 border-none rounded-2xl py-4.5 pl-6 pr-12 text-lg font-bold text-slate-800 dark:text-white focus:ring-4 focus:ring-blue-500/10 cursor-pointer transition-all"
            value={selectedMeetingId || ""}
            onChange={(e) => handleMeetingChange(Number(e.target.value))}
          >
            {meetings.map((m) => (
              <option key={m.MeetingID} value={m.MeetingID}>
                {m.MeetingDescription} —{" "}
                {new Date(m.MeetingDate).toLocaleDateString()}
              </option>
            ))}
          </select>
          <ChevronDown
            className="cursor-pointer absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-blue-500 transition-colors"
            size={24}
          />
        </div>
      </div>

      {selectedMeeting && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl border border-slate-100 dark:border-gray-800 shadow-lg shadow-blue-500/5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center">
              <Users size={24} />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase">
                Invited
              </p>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                {attendanceData.length}
              </h3>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl border border-slate-100 dark:border-gray-800 shadow-lg shadow-blue-500/5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-green-50 dark:bg-green-900/30 text-green-600 flex items-center justify-center">
              <CheckCircle size={24} />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase">
                Present
              </p>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                {presentCount}
              </h3>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl border border-slate-100 dark:border-gray-800 shadow-lg shadow-blue-500/5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-red-50 dark:bg-red-900/30 text-red-600 flex items-center justify-center">
              <XCircle size={24} />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase">
                Absent
              </p>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                {absentCount}
              </h3>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl border border-slate-100 dark:border-gray-800 shadow-lg shadow-blue-500/5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 flex items-center justify-center">
              <FileBarChart size={24} />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase">
                Yield
              </p>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                {attendanceRate}%
              </h3>
            </div>
          </div>
        </div>
      )}

      {/* Attendance Roster */}
      <div className="bg-white dark:bg-gray-900 rounded-[32px] border border-slate-100 dark:border-gray-800 shadow-xl shadow-blue-500/5 overflow-hidden">
        <div className="p-8 border-b border-slate-50 dark:border-gray-800 bg-slate-50/30 dark:bg-gray-800/20">
          <h3 className="font-black text-slate-900 dark:text-white uppercase tracking-tight">
            Active Participation List
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-100 dark:border-gray-800">
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest w-24">
                  Presence
                </th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  Full Name
                </th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  Digital Contact
                </th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">
                  Identity
                </th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  Verification Remarks
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-gray-800">
              {attendanceData.map((item) => (
                <tr
                  key={item.id}
                  className="group hover:bg-slate-50 dark:hover:bg-gray-800/40 transition-colors"
                >
                  <td className="px-8 py-6">
                    <button
                      onClick={() => togglePresence(item.id)}
                      className={`cursor-pointer w-12 h-6 rounded-full relative transition-colors ${item.isPresent ? "bg-green-500" : "bg-slate-300"}`}
                    >
                      <div
                        className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${item.isPresent ? "left-7" : "left-1"}`}
                      />
                    </button>
                  </td>
                  <td className="px-8 py-6 font-bold text-slate-800 dark:text-white">
                    {item.staffName}
                  </td>
                  <td className="px-8 py-6 text-slate-500 text-sm font-medium italic">
                    {item.email}
                  </td>
                  <td className="px-8 py-6 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${item.isPresent ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"}`}
                    >
                      {item.isPresent ? "Verified" : "Unconfirmed"}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="relative">
                      <AlertCircle
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                        size={14}
                      />
                      <input
                        type="text"
                        className="w-full bg-slate-50 dark:bg-gray-800 border-none rounded-xl py-2 pl-9 pr-4 text-xs font-bold text-slate-600 dark:text-gray-300 focus:ring-2 focus:ring-blue-500/10 transition-all"
                        placeholder="Add internal note..."
                        value={item.remarks}
                        onChange={(e) => updateRemarks(item.id, e.target.value)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

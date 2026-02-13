"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Users, Search, Check, X, Calendar, Save, Loader2 } from "lucide-react";
import { getMeetings, updateAttendance } from "@/app/actions/meetings";

export default function AttendancePage() {
  const [meetings, setMeetings] = useState<any[]>([]);
  const [selectedMeeting, setSelectedMeeting] = useState<any>(null);
  const [attendance, setAttendance] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  const fetchMeetings = async () => {
    setIsLoading(true);
    try {
      const data = await getMeetings();
      // Filter for past or today's meetings that are not cancelled
      const activeMeetings = data.filter((m) => !m.IsCancelled);
      setMeetings(activeMeetings);
    } catch (error) {
      console.error("Failed to fetch meetings:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMeetings();
  }, []);

  const selectMeeting = (meeting: any) => {
    setSelectedMeeting(meeting);
    setAttendance(
      meeting.meetingmember.map((m: any) => ({
        staffId: m.StaffID,
        name: m.staff?.StaffName,
        isPresent: m.IsPresent,
        remarks: m.Remarks || "",
      })),
    );
  };

  const toggleAttendance = (staffId: number) => {
    setAttendance((prev) =>
      prev.map((a) =>
        a.staffId === staffId ? { ...a, isPresent: !a.isPresent } : a,
      ),
    );
  };

  const handleSave = async () => {
    if (!selectedMeeting) return;
    setIsSaving(true);
    try {
      await updateAttendance(selectedMeeting.MeetingID, attendance);
      alert("Attendance updated successfully!");
      fetchMeetings();
    } catch (error) {
      alert("Failed to save attendance.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-8 max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Attendance Tracker
          </h1>
          <p className="text-slate-500 text-sm font-medium">
            Mark and manage meeting attendance
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Meeting Selection List */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-blue-500/5 overflow-hidden flex flex-col h-[600px]">
          <div className="p-6 border-b border-slate-50 bg-slate-50/50">
            <h3 className="font-bold text-slate-900 text-sm uppercase tracking-widest">
              Select Meeting
            </h3>
          </div>
          <div className="flex-1 overflow-y-auto">
            {isLoading ? (
              <div className="p-8 text-center text-slate-400">
                <Loader2 className="animate-spin mx-auto mb-2 text-blue-500" />
                Loading meetings...
              </div>
            ) : meetings.length === 0 ? (
              <div className="p-8 text-center text-slate-400 italic">
                No meetings available.
              </div>
            ) : (
              meetings.map((meeting) => (
                <button
                  key={meeting.MeetingID}
                  onClick={() => selectMeeting(meeting)}
                  className={` cursor-pointer w-full p-6 text-left border-b border-slate-50 transition-all hover:bg-slate-50 flex flex-col gap-2 ${
                    selectedMeeting?.MeetingID === meeting.MeetingID
                      ? "bg-blue-50/50 border-l-4 border-l-blue-600"
                      : ""
                  }`}
                >
                  <span className="font-bold text-slate-800 text-[14px] leading-tight capitalize">
                    {meeting.MeetingDescription}
                  </span>
                  <div className="flex items-center gap-3 text-[11px] font-medium text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />{" "}
                      {new Date(meeting.MeetingDate).toLocaleDateString()}
                    </span>
                    <span className="px-2 py-0.5 bg-slate-100 rounded text-slate-500">
                      {meeting.meetingtype?.MeetingTypeName}
                    </span>
                  </div>
                </button>
              ))
            )}
          </div>
        </div>

        {/* Attendance Marker Section */}
        <div className="lg:col-span-2 space-y-6">
          {!selectedMeeting ? (
            <div className="bg-white rounded-3xl border border-dashed border-slate-200 h-[600px] flex flex-col items-center justify-center text-slate-400 p-8 text-center">
              <Users size={64} className="mb-4 opacity-10" />
              <h3 className="text-lg font-bold">No Meeting Selected</h3>
              <p className="max-w-xs text-sm">
                Please select a meeting from the list on the left to start
                marking attendance.
              </p>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-blue-500/5 overflow-hidden flex flex-col h-[600px]"
            >
              {/* Toolbar */}
              <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-white sticky top-0 z-10">
                <div>
                  <h3 className="font-black text-slate-900 text-lg leading-tight uppercase tracking-tight">
                    {selectedMeeting.MeetingDescription}
                  </h3>
                  <p className="text-blue-600 text-[12px] font-bold">
                    {attendance.filter((a) => a.isPresent).length} of{" "}
                    {attendance.length} participants present
                  </p>
                </div>
                <button
                  onClick={handleSave}
                  disabled={isSaving}
                  className="cursor-pointer  bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white px-6 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 shadow-lg shadow-blue-500/20 transition-all active:scale-95"
                >
                  {isSaving ? (
                    <Loader2 className="animate-spin" size={18} />
                  ) : (
                    <Save size={18} />
                  )}
                  Save Changes
                </button>
              </div>

              {/* Attendance List */}
              <div className="flex-1 overflow-y-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-slate-50/50 border-b border-slate-100">
                      <th className="px-8 py-4 text-[11px] font-black text-slate-400 uppercase tracking-widest">
                        Participant
                      </th>
                      <th className="px-8 py-4 text-[11px] font-black text-slate-400 uppercase tracking-widest text-center">
                        Presence Status
                      </th>
                      <th className="px-8 py-4 text-[11px] font-black text-slate-400 uppercase tracking-widest">
                        Remarks
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {attendance.map((member) => (
                      <tr
                        key={member.staffId}
                        className="hover:bg-slate-50/50 transition-all"
                      >
                        <td className="px-8 py-5">
                          <div className="flex items-center gap-4">
                            <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-sm">
                              {member.name.charAt(0)}
                            </div>
                            <span className="text-[14px] font-bold text-slate-700">
                              {member.name}
                            </span>
                          </div>
                        </td>
                        <td className="px-8 py-5">
                          <div className="flex items-center justify-center gap-4">
                            <button
                              onClick={() => toggleAttendance(member.staffId)}
                              className={`w-24 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                                member.isPresent
                                  ? "bg-green-600 text-white shadow-lg shadow-green-500/20"
                                  : "bg-slate-100 text-slate-400 hover:bg-slate-200"
                              }`}
                            >
                              {member.isPresent ? "Present" : "Absent"}
                            </button>
                          </div>
                        </td>
                        <td className="px-8 py-5">
                          <input
                            type="text"
                            placeholder="Add remark..."
                            value={member.remarks}
                            onChange={(e) => {
                              const val = e.target.value;
                              setAttendance((prev) =>
                                prev.map((a) =>
                                  a.staffId === member.staffId
                                    ? { ...a, remarks: val }
                                    : a,
                                ),
                              );
                            }}
                            className="w-full bg-slate-50 border-none rounded-lg px-4 py-2 text-[13px] font-medium focus:ring-2 focus:ring-blue-500/10 transition-all"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

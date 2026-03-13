"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  Users,
  FileText,
  CheckCircle2,
  XCircle,
  Loader2,
  AlertTriangle,
} from "lucide-react";
import { getMeetingById } from "@/app/actions/meetings";

export default function MeetingDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [meeting, setMeeting] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMeeting = async () => {
      try {
        const id = parseInt(params.id as string);
        const data = await getMeetingById(id);
        setMeeting(data);
      } catch (err) {
        console.error("Failed to fetch meeting:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMeeting();
  }, [params.id]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[600px] text-slate-400 gap-3">
        <Loader2 size={32} className="animate-spin text-blue-500" />
        <span className="text-lg font-bold">Loading meeting details...</span>
      </div>
    );
  }

  if (!meeting) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[600px] text-slate-400 gap-4">
        <AlertTriangle size={48} className="text-slate-300" />
        <p className="text-lg font-bold">Meeting not found</p>
        <Link
          href="/admin/meetings"
          className="text-blue-600 text-sm font-bold hover:underline flex items-center gap-1"
        >
          <ArrowLeft size={14} /> Back to meetings
        </Link>
      </div>
    );
  }

  const isPast = new Date(meeting.MeetingDate) < new Date();
  const status = meeting.IsCancelled
    ? "cancelled"
    : isPast
      ? "completed"
      : "upcoming";

  const statusConfig = {
    upcoming: {
      label: "Upcoming",
      bg: "bg-blue-50",
      text: "text-blue-600",
      border: "border-blue-100",
      icon: Clock,
    },
    completed: {
      label: "Completed",
      bg: "bg-emerald-50",
      text: "text-emerald-600",
      border: "border-emerald-100",
      icon: CheckCircle2,
    },
    cancelled: {
      label: "Cancelled",
      bg: "bg-red-50",
      text: "text-red-600",
      border: "border-red-100",
      icon: XCircle,
    },
  };

  const currentStatus = statusConfig[status as keyof typeof statusConfig];
  const StatusIcon = currentStatus.icon;

  const presentCount = meeting.meetingmember?.filter(
    (m: any) => m.IsPresent,
  ).length;
  const totalMembers = meeting.meetingmember?.length || 0;

  return (
    <div className="space-y-8 max-w-[1200px] mx-auto pb-20">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="cursor-pointer flex items-center gap-2 text-slate-500 hover:text-slate-800 text-sm font-bold transition-colors"
      >
        <ArrowLeft size={16} />
        Back to Meetings
      </button>

      {/* Header */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-blue-500/5 p-8">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider border ${currentStatus.bg} ${currentStatus.text} ${currentStatus.border}`}
              >
                <StatusIcon size={12} />
                {currentStatus.label}
              </span>
              <span className="px-3 py-1 bg-slate-50 text-slate-500 rounded-full text-[11px] font-black uppercase border border-slate-100">
                {meeting.meetingtype?.MeetingTypeName}
              </span>
            </div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              {meeting.MeetingDescription}
            </h1>
          </div>
        </div>

        {/* Meeting Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
              <Calendar size={20} />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                Date
              </p>
              <p className="text-sm font-bold text-slate-700">
                {new Date(meeting.MeetingDate).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
              <Clock size={20} />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                Time
              </p>
              <p className="text-sm font-bold text-slate-700">
                {new Date(meeting.MeetingDate).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
              <MapPin size={20} />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                Venue
              </p>
              <p className="text-sm font-bold text-slate-700">
                {meeting.venue?.VenueName || "No venue assigned"}
              </p>
              {meeting.venue?.Location && (
                <p className="text-xs text-slate-400">
                  {meeting.venue.Location}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Cancellation Info */}
        {meeting.IsCancelled && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 bg-red-50 border border-red-100 rounded-2xl"
          >
            <div className="flex items-start gap-3">
              <AlertTriangle
                size={18}
                className="text-red-500 mt-0.5 shrink-0"
              />
              <div>
                <p className="text-sm font-bold text-red-700">
                  This meeting was cancelled
                </p>
                {meeting.CancellationReason && (
                  <p className="text-sm text-red-600 mt-1">
                    Reason: {meeting.CancellationReason}
                  </p>
                )}
                {meeting.CancellationDateTime && (
                  <p className="text-xs text-red-400 mt-1">
                    Cancelled on:{" "}
                    {new Date(
                      meeting.CancellationDateTime,
                    ).toLocaleDateString()}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Participants */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-blue-500/5 overflow-hidden">
        <div className="p-6 border-b border-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
              <Users size={16} />
            </div>
            <h3 className="font-black text-slate-800 text-lg uppercase tracking-tight">
              Participants
            </h3>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <span className="px-3 py-1 bg-slate-50 rounded-full font-bold text-slate-500 border border-slate-100">
              {totalMembers} invited
            </span>
            {isPast && !meeting.IsCancelled && (
              <span className="px-3 py-1 bg-emerald-50 rounded-full font-bold text-emerald-600 border border-emerald-100">
                {presentCount} attended
              </span>
            )}
          </div>
        </div>

        {totalMembers === 0 ? (
          <div className="p-12 text-center text-slate-400 italic">
            No participants added to this meeting.
          </div>
        ) : (
          <div className="divide-y divide-slate-50">
            {meeting.meetingmember?.map((member: any, idx: number) => (
              <motion.div
                key={member.MeetingMemberID || idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="px-8 py-5 flex items-center justify-between hover:bg-slate-50/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-sm font-bold">
                    {member.staff?.StaffName?.charAt(0) || "?"}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-700">
                      {member.staff?.StaffName}
                    </p>
                    <p className="text-xs text-slate-400">
                      {member.staff?.department?.DepartmentName || "No department"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {isPast && !meeting.IsCancelled && (
                    <span
                      className={`px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider border ${
                        member.IsPresent
                          ? "bg-emerald-50 text-emerald-600 border-emerald-100"
                          : "bg-red-50 text-red-500 border-red-100"
                      }`}
                    >
                      {member.IsPresent ? "Present" : "Absent"}
                    </span>
                  )}
                  {member.Remarks && (
                    <span className="text-xs text-slate-400 italic max-w-[200px] truncate">
                      {member.Remarks}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

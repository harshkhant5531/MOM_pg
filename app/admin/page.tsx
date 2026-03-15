"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Users,
  Calendar,
  CheckCircle2,
  XCircle,
  ArrowUpRight,
  Clock,
  AlertCircle,
  Loader2,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";
import { getDashboardStats } from "@/app/actions/dashboard";

export default function AdminDashboard() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const stats = await getDashboardStats();
        setData(stats);
      } catch (err) {
        console.error("Failed to fetch dashboard stats:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[600px] text-slate-400 gap-4">
        <Loader2 size={32} className="animate-spin text-blue-500" />
        <span className="text-lg font-bold">Syncing dashboard data...</span>
      </div>
    );
  }

  const statCards = [
    {
      label: "Total Meetings",
      count: data?.stats.total || 0,
      icon: Calendar,
      color: "blue",
    },
    {
      label: "Scheduled",
      count: data?.stats.scheduled || 0,
      icon: Clock,
      color: "indigo",
    },
    {
      label: "Completed",
      count: data?.stats.completed || 0,
      icon: CheckCircle2,
      color: "green",
    },
    {
      label: "Cancelled",
      count: data?.stats.cancelled || 0,
      icon: XCircle,
      color: "red",
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            System Overview
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium">
            Monitoring and analytics for meet operations
          </p>
        </div>
        <div className="px-4 py-2 bg-white rounded-xl border border-slate-100 shadow-sm flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[12px] font-black uppercase text-slate-400">
            Live Status
          </span>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl shadow-blue-500/5 group hover:border-blue-200 transition-all cursor-default"
          >
            <div
              className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${
                stat.color === "blue"
                  ? "bg-blue-50 text-blue-600"
                  : stat.color === "indigo"
                    ? "bg-indigo-50 text-indigo-600"
                    : stat.color === "green"
                      ? "bg-green-50 text-green-600"
                      : "bg-red-50 text-red-600"
              }`}
            >
              <stat.icon size={24} />
            </div>
            <p className="text-slate-400 text-[12px] font-black uppercase tracking-widest mb-1">
              {stat.label}
            </p>
            <div className="flex items-baseline gap-2">
              <h3 className="text-3xl font-black text-slate-900 dark:text-white">
                {stat.count}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Upcoming Meetings */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-100 shadow-xl shadow-blue-500/5 overflow-hidden">
          <div className="p-6 border-b border-slate-50 flex items-center justify-between">
            <h3 className="font-black text-slate-800 dark:text-white uppercase tracking-tighter text-lg">
              Upcoming Sessions
            </h3>
            <Link href="/admin/meetings" className="text-blue-600 text-[12px] font-black uppercase flex items-center gap-1 hover:gap-2 transition-all">
              View All <ArrowUpRight size={14} />
            </Link>
          </div>
          <div className="divide-y divide-slate-50">
            {data?.upcomingMeetings.length === 0 ? (
              <div className="p-12 text-center text-slate-400 italic">
                No upcoming meetings scheduled.
              </div>
            ) : (
              data?.upcomingMeetings.map((meeting: any) => (
                <div
                  key={meeting.MeetingID}
                  className="p-6 flex items-center justify-between group hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-6">
                    <div className="flex flex-col items-center justify-center w-14 h-14 bg-slate-50 rounded-2xl border border-slate-100 group-hover:bg-white transition-colors">
                      <span className="text-[10px] font-black text-slate-400 uppercase">
                        {new Date(meeting.MeetingDate).toLocaleString(
                          "default",
                          { month: "short" },
                        )}
                      </span>
                      <span className="text-xl font-black text-slate-800">
                        {new Date(meeting.MeetingDate).getDate()}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">
                        {meeting.MeetingDescription}
                      </h4>
                      <div className="flex items-center gap-4 text-[12px] font-medium text-slate-400">
                        <span className="flex items-center gap-1">
                          <Clock size={12} />{" "}
                          {new Date(meeting.MeetingDate).toLocaleTimeString(
                            [],
                            { hour: "2-digit", minute: "2-digit" },
                          )}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={12} />{" "}
                          {meeting.venue?.VenueName || "TBD"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-black rounded-lg border border-blue-100">
                      {meeting.meetingtype?.MeetingTypeName}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Side Panel: Recent MOMs */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-blue-500/5 p-8">
          <h3 className="font-black text-slate-800 uppercase tracking-tighter text-lg mb-8">
            Recent Documents
          </h3>
          <div className="space-y-6">
            {data?.recentMoms.length === 0 ? (
              <div className="text-center text-slate-400 italic">
                No recent documents found.
              </div>
            ) : (
              data?.recentMoms.map((mom: any) => (
                <div
                  key={mom.MeetingID}
                  className="flex gap-4 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-500 transition-all">
                    <AlertCircle size={20} />
                  </div>
                  <div>
                    <h5 className="text-[13px] font-bold text-slate-700 group-hover:text-blue-600 transition-colors uppercase leading-tight mb-1">
                      {mom.MeetingDescription}
                    </h5>
                    <p className="text-[11px] font-medium text-slate-400">
                      {new Date(mom.MeetingDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
          <Link href="/admin/reports" className="cursor-pointer block text-center w-full mt-10 py-3 bg-slate-900 text-white rounded-2xl font-bold text-sm hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200">
            Generate New Report
          </Link>
        </div>
      </div>
    </div>
  );
}

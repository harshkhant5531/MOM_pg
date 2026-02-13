"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Users,
  Plus,
  MapPin,
  Clock,
  CheckCircle,
  FileText,
  ClipboardList,
  Loader2,
} from "lucide-react";
import { getDashboardStats } from "@/app/actions/dashboard";
import { getActionItems } from "@/app/actions/action-items";
import { useRouter } from "next/navigation";

export default function ConvenerDashboard() {
  const router = useRouter();
  const [data, setData] = useState<any>(null);
  const [actionItems, setActionItems] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [stats, actions] = await Promise.all([
          getDashboardStats(),
          getActionItems(),
        ]);
        setData(stats);
        setActionItems(actions);
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

  const pendingCount = actionItems.filter(
    (item) => item.Status !== "COMPLETED",
  ).length;
  const completedActions = actionItems.filter(
    (item) => item.Status === "COMPLETED",
  ).length;
  const totalActions = actionItems.length;
  const actionCompletionRate =
    totalActions > 0 ? Math.round((completedActions / totalActions) * 100) : 0;

  const statCards = [
    {
      label: "My Meetings",
      count: data?.stats.total || 0,
      icon: Calendar,
      color: "blue",
      border: "border-l-blue-500",
      bg: "bg-blue-50",
    },
    {
      label: "This Week",
      count: data?.stats.scheduled || 0,
      icon: Calendar,
      color: "sky",
      border: "border-l-sky-500",
      bg: "bg-sky-50",
    },
    {
      label: "Pending Actions",
      count: pendingCount,
      icon: ClipboardList,
      color: "orange",
      border: "border-l-orange-500",
      bg: "bg-orange-50",
    },
    {
      label: "Completed",
      count: data?.stats.completed || 0,
      icon: CheckCircle,
      color: "green",
      border: "border-l-green-500",
      bg: "bg-green-50",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="p-8 pb-20"
    >
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Convener Dashboard
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Manage your meetings and track action items
          </p>
        </div>
        <button
          onClick={() => router.push("/convener/meetings")}
          className=" cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 shadow-lg shadow-blue-500/20 transition-all active:scale-95"
        >
          <Plus size={18} />
          Schedule Meeting
        </button>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat, i) => (
          <div
            key={i}
            className={`rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950 border-l-4 ${stat.border}`}
          >
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
                  <h3 className="text-3xl font-bold">{stat.count}</h3>
                </div>
                <div className={`p-2 ${stat.bg} rounded-lg`}>
                  <stat.icon className={`h-5 w-5 text-${stat.color}-500`} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-full">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Attendance Rate
                  </h3>
                  <p className="text-sm text-gray-500">
                    Across all your meetings
                  </p>
                </div>
              </div>
              <span className="text-2xl font-bold text-blue-600">
                {data?.stats.attendanceRate || 0}%
              </span>
            </div>
            <div className="relative h-2 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-slate-800">
              <div
                className="h-full bg-blue-600 transition-all duration-1000"
                style={{ width: `${data?.stats.attendanceRate || 0}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-50 rounded-full">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Action Completion
                  </h3>
                  <p className="text-sm text-gray-500">
                    Items completed on time
                  </p>
                </div>
              </div>
              <span className="text-2xl font-bold text-green-600">
                {actionCompletionRate}%
              </span>
            </div>
            <div className="relative h-2 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-slate-800">
              <div
                className="h-full bg-green-600 transition-all duration-1000"
                style={{ width: `${actionCompletionRate}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* My Upcoming Meetings */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">
              My Upcoming Meetings
            </h2>
            <button
              onClick={() => router.push("/convener/meetings")}
              className=" cursor-pointer text-sm text-gray-500 hover:text-gray-900 font-medium"
            >
              View All →
            </button>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950 divide-y divide-gray-100 dark:divide-gray-800">
            {data?.upcomingMeetings.length === 0 ? (
              <div className="p-12 text-center text-slate-400 italic">
                No upcoming meetings.
              </div>
            ) : (
              data?.upcomingMeetings.map((meeting: any) => (
                <div
                  key={meeting.MeetingID}
                  className="p-6 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-blue-50 text-blue-600 rounded-lg p-3 text-center min-w-[60px]">
                      <span className="block text-xs font-medium uppercase">
                        {new Date(meeting.MeetingDate).toLocaleString(
                          "default",
                          { month: "short" },
                        )}
                      </span>
                      <span className="block text-xl font-bold">
                        {new Date(meeting.MeetingDate).getDate()}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-bold text-gray-900 dark:text-white">
                            {meeting.MeetingDescription}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                            <span className="flex items-center gap-1.5">
                              <Clock className="h-3.5 w-3.5" />
                              {new Date(meeting.MeetingDate).toLocaleTimeString(
                                [],
                                { hour: "2-digit", minute: "2-digit" },
                              )}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <MapPin className="h-3.5 w-3.5" />
                              {meeting.venue?.VenueName || "TBD"}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700">
                            {meeting.meetingtype?.MeetingTypeName}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* My Recent MOMs */}
          <div className="pt-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                My Recent MOMs
              </h2>
              <button
                onClick={() => router.push("/convener/reports")}
                className=" cursor-pointer text-sm text-gray-500 hover:text-gray-900 font-medium"
              >
                View Reports →
              </button>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950 divide-y divide-gray-100 dark:divide-gray-800">
              {data?.recentMoms.length === 0 ? (
                <div className="p-12 text-center text-slate-400 italic">
                  No recent documents.
                </div>
              ) : (
                data?.recentMoms.map((mom: any) => (
                  <div
                    key={mom.MeetingID}
                    className="p-6 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-green-50 rounded-lg text-green-600">
                        <FileText className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white">
                          {mom.MeetingDescription}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                          {new Date(mom.MeetingDate).toLocaleDateString()}
                        </p>
                        <div className="mt-2">
                          <div className="inline-flex items-center rounded-full border border-gray-200 px-2.5 py-0.5 text-xs text-gray-600 font-normal">
                            {mom.meetingtype?.MeetingTypeName}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Action Items */}
        <div className="space-y-6">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
            Action Items
          </h2>
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <div className="p-0">
              {actionItems.length === 0 ? (
                <div className="p-12 text-center text-slate-400 italic text-sm">
                  No action items found.
                </div>
              ) : (
                actionItems.map((item, idx) => (
                  <div
                    key={item.ActionItemID}
                    className={`p-4 ${idx !== actionItems.length - 1 ? "border-b border-gray-100 dark:border-gray-800" : ""}`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-sm text-gray-900 dark:text-white">
                        {item.Description}
                      </h4>
                      <div
                        className={`inline-flex items-center rounded-full px-1.5 py-0.5 text-[10px] font-semibold ${
                          item.Status === "PENDING"
                            ? "bg-orange-100 text-orange-700"
                            : item.Status === "IN_PROGRESS"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-green-100 text-green-700"
                        }`}
                      >
                        {item.Status.toLowerCase().replace("_", " ")}
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Users className="h-3 w-3" />{" "}
                        {item.staff?.StaffName || "Unassigned"}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" /> Due:{" "}
                        {item.DueDate
                          ? new Date(item.DueDate).toLocaleDateString()
                          : "TBD"}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

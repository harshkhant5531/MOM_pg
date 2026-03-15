"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  CheckCircle2,
  Users,
  Bell,
  ArrowUpRight,
  ClipboardList,
  CalendarDays,
  ArrowRight,
  Loader2,
  MapPin,
  Tag,
} from "lucide-react";
import Link from "next/link";
import Dialog from "@/components/ui/Dialog";
import ConfirmDialog from "@/components/ui/ConfirmDialog";
import { getDashboardStats } from "@/app/actions/dashboard";
import { getMeetings } from "@/app/actions/meetings";
import { getCurrentUser } from "@/app/actions/auth";
import toast, { Toaster } from "react-hot-toast";

export default function StaffDashboard() {
  const [data, setData] = useState<any>(null);
  const [meetings, setMeetings] = useState<any[]>([]);
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedMeeting, setSelectedMeeting] = useState<any>(null);
  
  // Dialog State for errors
  const [errorDialog, setErrorDialog] = useState({ isOpen: false, message: "" });

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Starting to fetch data...");
        const currentUser = await getCurrentUser();
        console.log("Current user:", currentUser);
        setUser(currentUser);

        const [stats, m] = await Promise.all([
          getDashboardStats(currentUser?.email),
          getMeetings()
        ]);

        console.log("Stats:", stats);
        console.log("Meetings:", m);
        setData(stats);
        // Filter meetings for this staff member if they are not admin
        if (currentUser?.role === 'STAFF') {
          const filteredMeetings = m.filter((meeting: any) =>
            meeting.meetingmember?.some((mm: any) => mm.staff?.EmailAddress === currentUser.email)
          );
          console.log("Filtered meetings:", filteredMeetings);
          setMeetings(filteredMeetings);
        } else {
          setMeetings(m);
        }
      } catch (error: any) {
        console.error("Failed to fetch dashboard data:", error);
        setErrorDialog({ isOpen: true, message: "Critical failure while synchronizing dashboard telemetry: " + error.message });
      } finally {
        console.log("Setting loading to false");
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[600px] text-slate-400 gap-4">
        <Loader2 size={32} className="animate-spin text-blue-500" />
        <span className="text-lg font-bold uppercase tracking-widest text-[10px]">Synchronizing personal dashboard...</span>
      </div>
    );
  }

  const stats = [
    { label: "Invited Meetings", value: data?.stats.total || 0, icon: Calendar, color: "blue" },
    { label: "Upcoming", value: data?.stats.scheduled || 0, icon: CalendarDays, color: "cyan" },
    { label: "Presence Count", value: data?.stats.completed || 0, icon: Users, color: "green" },
    { label: "Cancelled", value: data?.stats.cancelled || 0, icon: ClipboardList, color: "orange" },
  ];

  const upcomingMeetings = meetings.filter(m => !m.IsCancelled && new Date(m.MeetingDate) >= new Date()).slice(0, 3);
  const recentMeetings = meetings.filter(m => !m.IsCancelled && new Date(m.MeetingDate) < new Date()).slice(0, 3);

  const handleViewDetails = () => {
    if (upcomingMeetings.length > 0) {
      setSelectedMeeting(upcomingMeetings[0]);
      setShowModal(true);
    }
  };

  const handleRequestAudit = () => {
    toast.success("Audit request submitted successfully!", {
      duration: 3000,
      icon: "📋",
    });
  };

  const handleNotifications = () => {
    toast.success("All systems clear. No new notifications.", {
      duration: 3000,
      icon: "🔔",
    });
  };

  return (
    <div className="space-y-8 max-w-[1400px] mx-auto animate-in fade-in duration-500 pb-10">
      <Toaster position="top-right" />

      {/* Meeting Details Dialog */}
      <Dialog
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        maxWidth="max-w-2xl"
      >
        {selectedMeeting && (
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-black text-blue-500 uppercase tracking-widest mb-3">
                <Tag size={14} />
                {selectedMeeting.meetingtype?.MeetingTypeName}
              </div>
              <h2 className="text-3xl font-black text-slate-900 dark:text-white capitalize mb-2">{selectedMeeting.MeetingDescription}</h2>
              <p className="text-slate-500 text-sm">Meeting Details & Information</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 dark:bg-gray-800 p-6 rounded-2xl">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">
                  <Calendar size={14} />
                  Date
                </div>
                <p className="text-lg font-black text-slate-900 dark:text-white">
                  {new Date(selectedMeeting.MeetingDate).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-gray-800 p-6 rounded-2xl">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">
                  <Clock size={14} />
                  Time
                </div>
                <p className="text-lg font-black text-slate-900 dark:text-white">
                  {new Date(selectedMeeting.MeetingDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-gray-800 p-6 rounded-2xl">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">
                  <MapPin size={14} />
                  Venue
                </div>
                <p className="text-lg font-black text-slate-900 dark:text-white">
                  {selectedMeeting.venue?.VenueName || "TBD"}
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-gray-800 p-6 rounded-2xl">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">
                  <Users size={14} />
                  Status
                </div>
                <p className="text-lg font-black text-blue-600">
                  {selectedMeeting.IsCancelled ? 'Cancelled' : new Date(selectedMeeting.MeetingDate) >= new Date() ? 'Scheduled' : 'Completed'}
                </p>
              </div>
            </div>

            <div className="pt-4 flex gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 py-4 bg-slate-900 dark:bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-800 dark:hover:bg-blue-700 transition-all cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Dialog>

      <ConfirmDialog
        isOpen={errorDialog.isOpen}
        onClose={() => setErrorDialog({ ...errorDialog, isOpen: false })}
        onConfirm={() => setErrorDialog({ ...errorDialog, isOpen: false })}
        title="Diagnostic Alert"
        message={errorDialog.message}
        type="danger"
        confirmText="Acknowledge"
      />
      {/* Header */}
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight uppercase">My Perspective</h1>
          <p className="text-slate-500 font-medium">Welcome back! Review your curated meeting schedule and obligations.</p>
        </div>
        <button 
          onClick={handleNotifications}
          className="cursor-pointer w-12 h-12 rounded-2xl bg-slate-50 dark:bg-gray-800 flex items-center justify-center text-slate-400 border border-slate-100 dark:border-gray-700 hover:bg-slate-100 dark:hover:bg-gray-700 transition-all active:scale-95"
        >
          <Bell size={24} />
        </button>
      </header>

      {/* Alert Banner / Next Meeting */}
      {upcomingMeetings.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-blue-600 rounded-[32px] p-8 flex flex-col md:flex-row items-center justify-between shadow-2xl shadow-blue-500/30 text-white relative overflow-hidden"
        >
          <div className="flex items-center gap-6 z-10">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/30">
              <Clock size={32} />
            </div>
            <div>
              <h4 className="font-black text-xl uppercase tracking-tight">Your next engagement is approaching</h4>
              <p className="opacity-90 font-bold mt-1">
                {upcomingMeetings[0].MeetingDescription} • {new Date(upcomingMeetings[0].MeetingDate).toLocaleDateString()} at {new Date(upcomingMeetings[0].MeetingDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
          <button onClick={handleViewDetails} className="mt-6 md:mt-0 px-8 py-3.5 bg-white text-blue-600 text-[11px] font-black uppercase rounded-2xl hover:bg-slate-50 transition-all active:scale-95 shadow-xl shadow-blue-900/10 z-10 tracking-widest cursor-pointer">
            View Details
          </button>

          {/* Background decoration */}
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        </motion.div>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white dark:bg-gray-900 p-8 rounded-[32px] border border-slate-100 dark:border-gray-800 shadow-xl shadow-blue-500/5 group hover:border-blue-500/50 transition-all cursor-default"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex flex-col">
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2">{stat.label}</p>
                <h3 className="text-4xl font-black text-slate-900 dark:text-white leading-none">{stat.value}</h3>
              </div>
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110 shadow-lg ${stat.color === 'blue' ? 'bg-blue-50 text-blue-600 shadow-blue-500/10' :
                stat.color === 'cyan' ? 'bg-cyan-50 text-cyan-600 shadow-cyan-500/10' :
                  stat.color === 'orange' ? 'bg-orange-50 text-orange-600 shadow-orange-500/10' :
                    'bg-green-50 text-green-600 shadow-green-500/10'
                }`}>
                <stat.icon size={24} />
              </div>
            </div>
            <div className="h-1.5 w-full bg-slate-50 dark:bg-gray-800 rounded-full overflow-hidden">
              <div className={`h-full rounded-full ${stat.color === 'blue' ? 'bg-blue-500' :
                stat.color === 'cyan' ? 'bg-cyan-500' :
                  stat.color === 'orange' ? 'bg-orange-500' :
                    'bg-green-500'
                }`} style={{ width: '40%' }} />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Upcoming Meetings List */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-[40px] border border-slate-100 dark:border-gray-800 shadow-2xl shadow-blue-500/5 overflow-hidden">
          <div className="p-10 border-b border-slate-50 dark:border-gray-800 flex items-center justify-between">
            <h3 className="font-black text-slate-900 dark:text-white uppercase tracking-tight text-xl">Chronological Agenda</h3>
            <Link href="/staff/calendar" className="text-blue-600 text-[10px] font-black uppercase flex items-center gap-2 hover:gap-3 transition-all tracking-widest">
              Full Calendar <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="p-10 space-y-6">
            {upcomingMeetings.length === 0 ? (
              <div className="py-20 text-center text-slate-400 font-bold uppercase tracking-widest text-xs">No imminent engagements registered</div>
            ) : (
              upcomingMeetings.map((m, idx) => (
                <button 
                  key={m.MeetingID} 
                  onClick={() => {
                    setSelectedMeeting(m);
                    setShowModal(true);
                  }}
                  className="w-full text-left group p-6 rounded-3xl border border-slate-50 dark:border-gray-800 hover:border-blue-500/50 hover:bg-slate-50/50 dark:hover:bg-gray-800/50 transition-all flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center gap-6">
                    <div className="flex flex-col items-center justify-center w-16 h-16 bg-blue-50 dark:bg-blue-900/30 rounded-2xl border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 font-black shadow-inner">
                      <span className="text-[10px] uppercase">{new Date(m.MeetingDate).toLocaleString('default', { month: 'short' })}</span>
                      <span className="text-xl leading-none">{new Date(m.MeetingDate).getDate()}</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-[10px] font-black text-blue-500 uppercase tracking-widest mb-1.5">
                        <Tag size={12} />
                        {m.meetingtype?.MeetingTypeName}
                      </div>
                      <h4 className="font-black text-slate-900 dark:text-white text-lg capitalize">{m.MeetingDescription}</h4>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-tight">
                          <Clock size={12} /> {new Date(m.MeetingDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-tight">
                          <MapPin size={12} /> {m.venue?.VenueName || "TBD"}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs font-bold text-blue-500 uppercase tracking-tight">
                          <Users size={12} /> {m.meetingmember?.length || 0}
                        </span>
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="text-slate-300 group-hover:text-blue-500 group-hover:translate-x-2 transition-all" size={24} />
                </button>
              ))
            )}
          </div>
        </div>

        {/* Logistics Info / Quick Stats */}
        <div className="space-y-8">
          <div className="bg-white dark:bg-gray-900 p-10 rounded-[40px] border border-slate-100 dark:border-gray-800 shadow-2xl shadow-blue-500/5">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-green-50 dark:bg-green-900/30 text-green-600 flex items-center justify-center">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h4 className="font-black text-slate-900 dark:text-white uppercase tracking-tight">Engagement Rate</h4>
                <p className="text-[11px] font-bold text-slate-400">Total participation accuracy</p>
              </div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-4xl font-black text-slate-900 dark:text-white">88%</span>
              <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">+12% vs last month</span>
            </div>
            <div className="h-3 bg-slate-100 dark:bg-gray-800 rounded-full overflow-hidden">
              <motion.div initial={{ width: 0 }} animate={{ width: "88%" }} transition={{ duration: 1.5, ease: "easeOut" }} className="h-full bg-green-500 rounded-full shadow-lg shadow-green-500/20" />
            </div>
          </div>

          <div className="bg-slate-900 dark:bg-blue-600 p-10 rounded-[40px] text-white shadow-2xl shadow-slate-900/20 relative overflow-hidden group">
            <h4 className="font-black text-xl uppercase tracking-tight mb-4 relative z-10">Member Support</h4>
            <p className="opacity-70 text-sm font-medium mb-8 relative z-10 leading-relaxed">Required technical assistance or session coordination help?</p>
            <button onClick={handleRequestAudit} className="w-full py-4 bg-white text-slate-900 dark:text-blue-600 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-slate-50 transition-all active:scale-95 relative z-10 shadow-xl cursor-pointer">
              Request Audit
            </button>
            <Bell className="absolute -right-8 -bottom-8 opacity-10 group-hover:rotate-12 transition-transform" size={160} />
          </div>
        </div>
      </div>

      {/* Historical Snapshot */}
      <div className="bg-white dark:bg-gray-900 rounded-[40px] border border-slate-100 dark:border-gray-800 shadow-2xl shadow-blue-500/5 overflow-hidden">
        <div className="p-10 border-b border-slate-50 dark:border-gray-800 flex items-center justify-between">
          <h3 className="font-black text-slate-900 dark:text-white uppercase tracking-tight text-xl">Historical Snapshot</h3>
          <Link href="/staff/meetings" className="text-slate-400 text-[10px] font-black uppercase flex items-center gap-2 hover:text-blue-600 transition-all tracking-widest">
            View Archive <ArrowRight size={16} />
          </Link>
        </div>
        <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentMeetings.length === 0 ? (
            <div className="col-span-full py-10 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 rounded-[28px] bg-slate-50 dark:bg-gray-800 flex items-center justify-center text-slate-200 dark:text-slate-700 mb-6 transition-transform hover:scale-110 shadow-inner">
                <ClipboardList size={40} />
              </div>
              <p className="text-slate-400 font-black uppercase tracking-[0.3em] text-[10px]">No finalized historical records detected</p>
            </div>
          ) : (
            recentMeetings.map((m) => (
              <button
                key={m.MeetingID}
                onClick={() => {
                  setSelectedMeeting(m);
                  setShowModal(true);
                }}
                className="text-left p-6 rounded-[32px] bg-slate-50/50 dark:bg-gray-800/30 border border-slate-100 dark:border-gray-800 hover:border-blue-500/30 transition-all group relative overflow-hidden cursor-pointer"
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-0.5 bg-white dark:bg-gray-800 text-slate-400 text-[9px] font-black rounded-lg uppercase tracking-wider border border-slate-100 dark:border-gray-700">
                      {m.meetingtype?.MeetingTypeName}
                    </span>
                    {m.meetingmember?.some((mm: any) => mm.staff?.EmailAddress === user?.email && mm.IsPresent) ? (
                      <span className="px-2 py-0.5 bg-green-50 text-green-600 text-[9px] font-black rounded-lg uppercase tracking-wider border border-green-100">
                        Attended
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 bg-red-50 text-red-600 text-[9px] font-black rounded-lg uppercase tracking-wider border border-red-100">
                        Absent
                      </span>
                    )}
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white truncate mb-1">{m.MeetingDescription}</h4>
                  <p className="text-[11px] font-bold text-slate-400">
                    {new Date(m.MeetingDate).toLocaleDateString()}
                  </p>
                </div>
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                  <CheckCircle2 size={48} className="text-slate-900 dark:text-white" />
                </div>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

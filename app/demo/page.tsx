"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Play,
  Clock,
  CheckCircle2,
  Users,
  Zap,
  Calendar,
  FileText,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import SalesDialog from "@/components/ui/SalesDialog";

export default function DemoPage() {
  const router = useRouter();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSalesOpen, setIsSalesOpen] = useState(false);

  const demoFeatures = [
    {
      title: "Smart Scheduling",
      time: "0:45",
      icon: Calendar,
      description: "Automate participant availability and room assignments.",
      color: "blue",
    },
    {
      title: "Dynamic Action Items",
      time: "1:20",
      icon: Zap,
      description:
        "Track tasks directly from the dashboard with real-time updates.",
      color: "orange",
    },
    {
      title: "Collaborative MOMs",
      time: "2:15",
      icon: FileText,
      description: "Generate and securely store meeting minutes in seconds.",
      color: "indigo",
    },
    {
      title: "Role-based Insights",
      time: "3:40",
      icon: Users,
      description: "Custom dashboards for Admins, Conveners, and Staff.",
      color: "purple",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 relative overflow-hidden flex flex-col">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100 rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-100 rounded-full filter blur-[100px]"></div>
      </div>

      {/* Header/Nav */}
      <header className="relative z-20 max-w-7xl mx-auto w-full px-6 py-8 flex justify-between items-center">
        <button
          onClick={() => router.push("/")}
          className="cursor-pointer group flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-medium transition-colors"
        >
          <div className="p-2 bg-white rounded-lg shadow-sm group-hover:bg-indigo-50 transition-colors border border-slate-100">
            <ArrowLeft size={18} />
          </div>
          Back to Home
        </button>
        <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-100">
          <ShieldCheck className="text-indigo-600" size={16} />
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">
            Secure Product Tour
          </span>
        </div>
      </header>

      <main className="relative z-10 flex-1 max-w-7xl mx-auto w-full px-6 py-12 lg:py-20 flex flex-col items-center">
        {/* Title Section */}
        <div className="text-center max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-200 mb-6"
          >
            <div className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-slate-700">
              Experience the difference
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 leading-tight"
          >
            Meeting Management <br />
            <span className="text-indigo-600">Made Simple</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 leading-relaxed"
          >
            Watch how MOM transforms chaotic organizations into efficient,
            documented, and accountable powerhouses.
          </motion.p>
        </div>

        {/* Video Player Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative w-full aspect-video max-w-5xl rounded-[40px] overflow-hidden bg-white border-8 border-white shadow-2xl group shadow-indigo-500/10"
        >
          {!isPlaying ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center">
              <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] group-hover:bg-slate-900/30 transition-all duration-500"></div>
              <button
                onClick={() => setIsPlaying(true)}
                className="relative z-10 w-24 h-24 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group-hover:bg-indigo-700"
              >
                <Play size={40} className="ml-2 fill-current" />
              </button>
              <div className="relative z-10 mt-8 text-center text-white">
                <span className="text-xs font-black uppercase tracking-widest opacity-80 mb-2 block">
                  Play 5 Minute Demo
                </span>
                <p className="text-2xl font-bold">
                  The Modern Meeting Workflow
                </p>
              </div>

              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center">
                <div className="flex items-center gap-3 px-4 py-2 bg-white/20 backdrop-blur-md rounded-xl border border-white/30 text-white">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-[10px] font-black uppercase tracking-wider">
                    v2.4 Live Demo
                  </span>
                </div>
                <div className="text-white/80 text-[10px] font-black uppercase tracking-widest">
                  Press to Play
                </div>
              </div>
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-900">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
                <p className="text-indigo-400 font-black uppercase tracking-widest text-[10px]">
                  Establishing secure connection...
                </p>
                <button
                  onClick={() => setIsPlaying(false)}
                  className="px-6 py-2 bg-slate-800 text-slate-400 hover:text-white rounded-xl text-xs font-bold transition-all border border-slate-700"
                >
                  Cancel & Return
                </button>
              </div>
            </div>
          )}
        </motion.div>

        {/* Feature Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 w-full mt-24">
          {demoFeatures.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              className="p-8 bg-white rounded-[32px] border border-slate-100 hover:border-indigo-200 transition-all group shadow-sm hover:shadow-xl"
            >
              <div className="flex justify-between items-start mb-6">
                <div
                  className={`p-3 bg-${feature.color}-50 rounded-2xl group-hover:scale-110 transition-transform`}
                >
                  <feature.icon
                    className={`text-${feature.color}-600`}
                    size={24}
                    strokeWidth={2.5}
                  />
                </div>
                <div className="flex items-center gap-1.5 text-slate-400 font-bold text-[10px] uppercase tracking-widest">
                  <Clock size={12} />
                  {feature.time}
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {feature.description}
              </p>
              <button className="text-indigo-600 text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn more <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Dynamic CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-32 w-full max-w-5xl bg-white rounded-[40px] p-12 text-center border border-slate-100 shadow-2xl shadow-indigo-500/5 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-40 pointer-events-none">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-50 rounded-full filter blur-[80px]"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-50 rounded-full filter blur-[80px]"></div>
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Start your journey today
            </h2>
            <p className="text-slate-500 mb-10 text-lg">
              Join 10,000+ teams who have transformed their meeting workflow
              with MOM.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push("/login")}
                className=" cursor-pointer px-10 py-5 bg-indigo-600 text-white font-black rounded-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-600/20 uppercase tracking-widest text-xs flex items-center justify-center gap-3"
              >
                Start Free Trial
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => setIsSalesOpen(true)}
                className="cursor-pointer px-10 py-5 bg-white text-slate-700 font-black rounded-2xl border-2 border-slate-200 hover:border-indigo-600 hover:text-indigo-600 transition-all uppercase tracking-widest text-xs"
              >
                Talk to Sales
              </button>
            </div>

            <div className="mt-8 flex items-center justify-center gap-8 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-green-500" /> Free
                14-day trial
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-green-500" /> No credit
                card required
              </div>
            </div>
          </div>
        </motion.div>
      </main>
      <SalesDialog isOpen={isSalesOpen} onClose={() => setIsSalesOpen(false)} />

      <footer className="relative z-10 max-w-7xl mx-auto w-full px-6 py-12 text-center text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] mt-auto">
        © 2026 MOM Management. Optimized for Enterprise Performance.
      </footer>
    </div>
  );
}

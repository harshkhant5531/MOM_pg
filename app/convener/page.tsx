"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Users,
  Plus,
  MapPin,
  Clock,
  CheckCircle,
  FileText,
  ClipboardList
} from "lucide-react";

export default function ConvenerDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="p-8"
    >
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Convener Dashboard</h1>
          <p className="text-gray-500 dark:text-gray-400">Manage your meetings and track action items</p>
        </div>
        <button className="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2">
          <Plus className="mr-2 h-4 w-4" />
          Schedule Meeting
        </button>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950 border-l-4 border-l-blue-500">
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 mb-1">My Meetings</p>
                <h3 className="text-3xl font-bold">3</h3>
              </div>
              <div className="p-2 bg-blue-50 rounded-lg">
                <Calendar className="h-5 w-5 text-blue-500" />
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950 border-l-4 border-l-sky-500">
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 mb-1">This Week</p>
                <h3 className="text-3xl font-bold">2</h3>
              </div>
              <div className="p-2 bg-sky-50 rounded-lg">
                <Calendar className="h-5 w-5 text-sky-500" />
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950 border-l-4 border-l-orange-500">
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 mb-1">Pending Actions</p>
                <h3 className="text-3xl font-bold">2</h3>
              </div>
              <div className="p-2 bg-orange-50 rounded-lg">
                <ClipboardList className="h-5 w-5 text-orange-500" />
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950 border-l-4 border-l-green-500">
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 mb-1">Completed</p>
                <h3 className="text-3xl font-bold">1</h3>
              </div>
              <div className="p-2 bg-green-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-500" />
              </div>
            </div>
          </div>
        </div>
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
                  <h3 className="font-semibold text-gray-900 dark:text-white">Attendance Rate</h3>
                  <p className="text-sm text-gray-500">Across all your meetings</p>
                </div>
              </div>
              <span className="text-2xl font-bold text-blue-600">88%</span>
            </div>
            <div className="relative h-2 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-slate-800">
              <div className="h-full w-full flex-1 bg-blue-600 transition-all" style={{ transform: "translateX(-12%)" }}></div>
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
                  <h3 className="font-semibold text-gray-900 dark:text-white">Action Completion</h3>
                  <p className="text-sm text-gray-500">Items completed on time</p>
                </div>
              </div>
              <span className="text-2xl font-bold text-green-600">33%</span>
            </div>
            <div className="relative h-2 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-slate-800">
              <div className="h-full w-full flex-1 bg-green-600 transition-all" style={{ transform: "translateX(-67%)" }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* My Upcoming Meetings */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">My Upcoming Meetings</h2>
            <button className="text-sm text-gray-500 hover:text-gray-900 font-medium">View All →</button>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <div className="p-0">
              <div className="p-6 border-b border-gray-100 dark:border-gray-800">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-blue-50 text-blue-600 rounded-lg p-3 text-center min-w-[60px]">
                    <span className="block text-xs font-medium uppercase">Jan</span>
                    <span className="block text-xl font-bold">28</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white">Weekly Sprint Planning</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                          <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> 10:00</span>
                          <span>•</span>
                          <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> Conference Room A</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center text-gray-500 text-sm">
                          <Users className="h-4 w-4 mr-1" /> 3
                        </div>
                        <div className="inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 bg-blue-50 text-blue-700 hover:bg-blue-100">Team Meeting</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-blue-50 text-blue-600 rounded-lg p-3 text-center min-w-[60px]">
                    <span className="block text-xs font-medium uppercase">Jan</span>
                    <span className="block text-xl font-bold">29</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white">Project Demo - ABC Corp</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                          <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> 14:00</span>
                          <span>•</span>
                          <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> Board Room</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center text-gray-500 text-sm">
                          <Users className="h-4 w-4 mr-1" /> 2
                        </div>
                        <div className="inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 bg-cyan-50 text-cyan-700 hover:bg-cyan-100">Client Meeting</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* My Recent MOMs */}
          <div className="pt-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">My Recent MOMs</h2>
              <button className="text-sm text-gray-500 hover:text-gray-900 font-medium">View Reports →</button>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-50 rounded-lg text-green-600">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">Q4 Performance Review</h3>
                    <p className="text-sm text-gray-500 mt-1">Jan 25, 2026</p>
                    <div className="mt-2">
                      <div className="inline-flex items-center rounded-full border border-gray-200 px-2.5 py-0.5 text-xs text-gray-600 font-normal transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2">Management Review</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Items */}
        <div className="space-y-6">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">Action Items</h2>
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <div className="p-0">
              <div className="p-4 border-b border-gray-100 dark:border-gray-800">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-sm text-gray-900">Prepare Q1 budget forecast</h4>
                  <div className="inline-flex items-center rounded-full border border-transparent px-1.5 py-0.5 text-[10px] font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 bg-orange-100 text-orange-700">pending</div>
                </div>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span className="flex items-center gap-1"><Users className="h-3 w-3" /> Sneha Gupta</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> Due: Feb 3</span>
                </div>
              </div>

              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-sm text-gray-900">Complete performance reviews</h4>
                  <div className="inline-flex items-center rounded-full border border-transparent px-1.5 py-0.5 text-[10px] font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 bg-blue-100 text-blue-700">in-progress</div>
                </div>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span className="flex items-center gap-1"><Users className="h-3 w-3" /> Amit Patel</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> Due: Feb 10</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
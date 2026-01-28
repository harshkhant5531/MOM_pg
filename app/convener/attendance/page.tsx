"use client";

import { useState } from "react";
import {
    Calendar,
    Users,
    Save,
    UserPlus,
    CheckCircle,
    XCircle,
    FileBarChart
} from "lucide-react";

export default function AttendancePage() {
    const [selectedMeeting, setSelectedMeeting] = useState("Weekly Sprint Planning - Jan 28, 2026");

    return (
        <div className="p-8">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Attendance</h1>
                <p className="text-gray-500 dark:text-gray-400">Manage meeting participants and attendance</p>
            </div>

            {/* Meeting Selector */}
            <div className="mb-6 rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
                <div className="p-6 flex flex-col md:flex-row items-end md:items-center justify-between gap-4">
                    <div className="flex-1 w-full relative">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">Select Meeting</label>
                        <select
                            className="w-full appearance-none bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg py-2.5 pl-4 pr-10 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                            value={selectedMeeting}
                            onChange={(e) => setSelectedMeeting(e.target.value)}
                        >
                            <option>Weekly Sprint Planning - Jan 28, 2026</option>
                            <option>Project Demo - ABC Corp - Jan 29, 2026</option>
                        </select>
                        <div className="pointer-events-none absolute bottom-3 right-0 flex items-center px-2 text-gray-500">
                            <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button className="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-slate-200 bg-white hover:bg-slate-100 h-10 px-4 py-2">
                            <UserPlus className="h-4 w-4 mr-2" />
                            Add Members
                        </button>
                        <button className="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2">
                            <Save className="h-4 w-4 mr-2" />
                            Save Attendance
                        </button>
                    </div>
                </div>
            </div>

            {/* Meeting Details Summary */}
            <div className="mb-6 rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
                <div className="p-6">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Weekly Sprint Planning</h2>
                            <div className="flex items-center gap-3 text-sm text-gray-500 mt-1">
                                <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> Jan 28, 2026</span>
                                <span>•</span>
                                <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> 10:00</span>
                                <span>•</span>
                                <span className="flex items-center gap-1">Conference Room A</span>
                            </div>
                        </div>
                        <div className="inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 bg-blue-50 text-blue-700 hover:bg-blue-100">scheduled</div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100 dark:border-blue-900/30 dark:bg-blue-900/10 flex items-center gap-3">
                            <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg text-blue-600 dark:text-blue-400">
                                <Users className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">3</h3>
                                <p className="text-xs text-gray-500">Total Members</p>
                            </div>
                        </div>
                        <div className="bg-green-50/50 p-4 rounded-xl border border-green-100 dark:border-green-900/30 dark:bg-green-900/10 flex items-center gap-3">
                            <div className="p-2 bg-green-100 dark:bg-green-900/50 rounded-lg text-green-600 dark:text-green-400">
                                <CheckCircle className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">2</h3>
                                <p className="text-xs text-gray-500">Present</p>
                            </div>
                        </div>
                        <div className="bg-red-50/50 p-4 rounded-xl border border-red-100 dark:border-red-900/30 dark:bg-red-900/10 flex items-center gap-3">
                            <div className="p-2 bg-red-100 dark:bg-red-900/50 rounded-lg text-red-600 dark:text-red-400">
                                <XCircle className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">1</h3>
                                <p className="text-xs text-gray-500">Absent</p>
                            </div>
                        </div>
                        <div className="bg-gray-50/50 p-4 rounded-xl border border-gray-100 dark:border-gray-800 flex items-center gap-3">
                            <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-400">
                                <FileBarChart className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">67%</h3>
                                <p className="text-xs text-gray-500">Attendance Rate</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Participants Table */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
                <div className="p-6 border-b border-gray-100 dark:border-gray-800">
                    <h3 className="font-bold text-gray-900 dark:text-white">Meeting Participants</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-500 font-normal border-b border-gray-100 dark:border-gray-800">
                            <tr>
                                <th className="px-6 py-4 font-normal w-16">Present</th>
                                <th className="px-6 py-4 font-normal">Staff Name</th>
                                <th className="px-6 py-4 font-normal">Email</th>
                                <th className="px-6 py-4 font-normal text-center">Status</th>
                                <th className="px-6 py-4 font-normal">Remarks</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                            <tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors">
                                <td className="px-6 py-4">
                                    <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                                </td>
                                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Rajesh Kumar</td>
                                <td className="px-6 py-4 text-gray-500">rajesh.kumar@company.com</td>
                                <td className="px-6 py-4 text-center">
                                    <div className="inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 bg-green-100 text-green-700 hover:bg-green-100">Present</div>
                                </td>
                                <td className="px-6 py-4 text-gray-400">-</td>
                            </tr>
                            <tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors">
                                <td className="px-6 py-4">
                                    <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                                </td>
                                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Priya Sharma</td>
                                <td className="px-6 py-4 text-gray-500">priya.sharma@company.com</td>
                                <td className="px-6 py-4 text-center">
                                    <div className="inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 bg-green-100 text-green-700 hover:bg-green-100">Present</div>
                                </td>
                                <td className="px-6 py-4 text-gray-400">-</td>
                            </tr>
                            <tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors">
                                <td className="px-6 py-4">
                                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                                </td>
                                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Amit Patel</td>
                                <td className="px-6 py-4 text-gray-500">amit.patel@company.com</td>
                                <td className="px-6 py-4 text-center">
                                    <div className="inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 bg-gray-100 text-gray-500 hover:bg-gray-200">Absent</div>
                                </td>
                                <td className="px-6 py-4 text-gray-400">-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

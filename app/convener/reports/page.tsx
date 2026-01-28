"use client";

import { useState } from "react";
import {
    FileText,
    Download,
    Calendar,
    Users,
    Activity,
    CheckCircle,
    FileBarChart
} from "lucide-react";

export default function ReportsPage() {
    const [reportType, setReportType] = useState("Summary Report");
    const [timeRange, setTimeRange] = useState("All Time");

    const meetingsData = [
        {
            id: 1,
            title: "Weekly Sprint Planning",
            type: "Team Meeting",
            date: "Jan 28, 2026",
            venue: "Conference Room A",
            convener: "Rajesh Kumar",
            participants: "2/3 present",
            status: "scheduled"
        },
        {
            id: 2,
            title: "Project Demo - ABC Corp",
            type: "Client Meeting",
            date: "Jan 29, 2026",
            venue: "Board Room",
            convener: "Priya Sharma",
            participants: "2/2 present",
            status: "scheduled"
        },
        {
            id: 3,
            title: "Q4 Performance Review",
            type: "Management Review",
            date: "Jan 25, 2026",
            venue: "Board Room",
            convener: "Rajesh Kumar",
            participants: "3/3 present",
            status: "completed"
        },
        {
            id: 4,
            title: "New CRM Implementation",
            type: "Project Kickoff",
            date: "Feb 1, 2026",
            venue: "Training Hall",
            convener: "Amit Patel",
            participants: "0/0 present",
            status: "scheduled"
        },
        {
            id: 5,
            title: "Monthly Team Sync",
            type: "Team Meeting",
            date: "Jan 22, 2026",
            venue: "Meeting Room B",
            convener: "Sneha Gupta",
            participants: "0/0 present",
            status: "cancelled"
        },
    ];

    const getStatusBadge = (status: string) => {
        switch (status) {
            case "scheduled":
                return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">scheduled</span>;
            case "completed":
                return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700">completed</span>;
            case "cancelled":
                return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-50 text-red-700">cancelled</span>;
            default:
                return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">{status}</span>;
        }
    };

    return (
        <div className="p-8">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Reports & Analytics</h1>
                    <p className="text-gray-500 dark:text-gray-400">View meeting statistics and generate reports</p>
                </div>
                <div className="flex gap-2">
                    <button className="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-slate-200 bg-white hover:bg-slate-100 h-9 px-4 py-2">
                        <FileText className="mr-2 h-4 w-4" />
                        Export Excel
                    </button>
                    <button className="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-slate-200 bg-white hover:bg-slate-100 h-9 px-4 py-2">
                        <Download className="mr-2 h-4 w-4" />
                        Export PDF
                    </button>
                </div>
            </div>

            {/* Filters */}
            <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 mb-6 flex gap-4">
                <select
                    className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm p-2.5 focus:ring-blue-500 focus:border-blue-500"
                    value={reportType}
                    onChange={(e) => setReportType(e.target.value)}
                >
                    <option>Summary Report</option>
                    <option>Detailed Report</option>
                </select>
                <select
                    className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm p-2.5 focus:ring-blue-500 focus:border-blue-500"
                    value={timeRange}
                    onChange={(e) => setTimeRange(e.target.value)}
                >
                    <option>All Time</option>
                    <option>This Month</option>
                    <option>Last Month</option>
                    <option>This Year</option>
                </select>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex items-center gap-4">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                        <Calendar className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">5</h3>
                        <p className="text-sm text-gray-500">Total Meetings</p>
                    </div>
                </div>
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex items-center gap-4">
                    <div className="p-3 bg-green-50 text-green-600 rounded-lg">
                        <Activity className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">20%</h3>
                        <p className="text-sm text-gray-500">Completion Rate</p>
                    </div>
                </div>
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex items-center gap-4">
                    <div className="p-3 bg-cyan-50 text-cyan-600 rounded-lg">
                        <Users className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">8</h3>
                        <p className="text-sm text-gray-500">Total Participants</p>
                    </div>
                </div>
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex items-center gap-4">
                    <div className="p-3 bg-teal-50 text-teal-600 rounded-lg">
                        <FileBarChart className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">88%</h3>
                        <p className="text-sm text-gray-500">Avg Attendance</p>
                    </div>
                </div>
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Monthly Meeting Trend - Line Chart */}
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Monthly Meeting Trend</h3>
                    <div className="h-64 relative">
                        {/* Chart Grid Lines */}
                        <div className="absolute inset-x-0 bottom-0 h-full flex flex-col justify-between text-xs text-gray-400">
                            <div className="border-b border-gray-100 dark:border-gray-800 pb-1 w-full text-right pr-2 relative"><span className="absolute -top-2 left-0">4</span></div>
                            <div className="border-b border-gray-100 dark:border-gray-800 pb-1 w-full text-right pr-2 relative"><span className="absolute -top-2 left-0">3</span></div>
                            <div className="border-b border-gray-100 dark:border-gray-800 pb-1 w-full text-right pr-2 relative"><span className="absolute -top-2 left-0">2</span></div>
                            <div className="border-b border-gray-100 dark:border-gray-800 pb-1 w-full text-right pr-2 relative"><span className="absolute -top-2 left-0">1</span></div>
                            <div className="border-b border-gray-200 dark:border-gray-700 w-full relative"><span className="absolute -top-2 left-0">0</span></div>
                        </div>

                        {/* Line Chart SVG */}
                        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            {/* Blue Line (Total) */}
                            <path
                                d="M0,100 L20,100 L40,100 L60,100 L80,75 L100,0"
                                fill="none"
                                stroke="#3b82f6"
                                strokeWidth="2"
                            />
                            <circle cx="0" cy="100" r="1.5" fill="#fff" stroke="#3b82f6" strokeWidth="2" />
                            <circle cx="20" cy="100" r="1.5" fill="#fff" stroke="#3b82f6" strokeWidth="2" />
                            <circle cx="40" cy="100" r="1.5" fill="#fff" stroke="#3b82f6" strokeWidth="2" />
                            <circle cx="60" cy="100" r="1.5" fill="#fff" stroke="#3b82f6" strokeWidth="2" />
                            <circle cx="80" cy="75" r="1.5" fill="#fff" stroke="#3b82f6" strokeWidth="2" />
                            <circle cx="100" cy="0" r="1.5" fill="#fff" stroke="#3b82f6" strokeWidth="2" />

                            {/* Green Line (Completed) */}
                            <path
                                d="M0,100 L20,100 L40,100 L60,100 L80,100 L100,75"
                                fill="none"
                                stroke="#22c55e"
                                strokeWidth="2"
                            />
                            <circle cx="100" cy="75" r="1.5" fill="#fff" stroke="#22c55e" strokeWidth="2" />
                        </svg>

                        {/* X-axis Labels */}
                        <div className="absolute -bottom-6 w-full flex justify-between text-xs text-gray-500">
                            <span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span><span>Jan</span>
                        </div>
                    </div>
                    <div className="mt-8 flex justify-center gap-6">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-2 h-2 rounded-full bg-blue-500"></div> Total
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div> Completed
                        </div>
                    </div>
                </div>

                {/* Meeting Status Distribution - Donut Chart */}
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Meeting Status Distribution</h3>
                    <div className="flex-1 flex items-center justify-center relative">
                        <svg width="200" height="200" viewBox="0 0 40 40" className="rotate-[-90deg]">
                            {/* Cancelled (Red) - 20% */}
                            <circle cx="20" cy="20" r="15.9155" fill="transparent" stroke="#ef4444" strokeWidth="5" strokeDasharray="20 80" strokeDashoffset="0"></circle>

                            {/* Completed (Green) - 20% */}
                            <circle cx="20" cy="20" r="15.9155" fill="transparent" stroke="#22c55e" strokeWidth="5" strokeDasharray="20 80" strokeDashoffset="-20"></circle>

                            {/* Scheduled (Blue) - 60% */}
                            <circle cx="20" cy="20" r="15.9155" fill="transparent" stroke="#0ea5e9" strokeWidth="5" strokeDasharray="60 80" strokeDashoffset="-40"></circle>
                        </svg>
                        {/* Labels pointing to segments */}
                        <div className="absolute top-[20%] right-[5%] text-xs text-green-600 font-medium">Completed 20%</div>
                        <div className="absolute bottom-[30%] right-[5%] text-xs text-red-600 font-medium">Cancelled 20%</div>
                        <div className="absolute left-[15%] top-1/2 -translate-y-1/2 text-xs text-blue-500 font-medium">Scheduled 60%</div>
                    </div>
                </div>
            </div>

            {/* Meetings by Type - Bar Chart */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 mb-8">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Meetings by Type</h3>
                <div className="relative h-64 border-l border-b border-gray-200 dark:border-gray-700 mx-4 pb-2">
                    {/* Y-axis Ticks */}
                    <div className="absolute -left-6 top-0 w-4.5 text-[10px] text-gray-500 text-right">2</div>
                    <div className="absolute -left-6 top-1/4 w-4.5 text-[10px] text-gray-500 text-right">1.5</div>
                    <div className="absolute -left-6 top-1/2 w-4.5 text-[10px] text-gray-500 text-right">1</div>
                    <div className="absolute -left-6 top-3/4 w-4.5 text-[10px] text-gray-500 text-right">0.5</div>
                    <div className="absolute -left-6 bottom-0 w-4.5 text-[10px] text-gray-500 text-right">0</div>

                    {/* Grid Lines */}
                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                        <div className="border-t border-gray-100 dark:border-gray-800 w-full h-0 border-dashed"></div>
                        <div className="border-t border-gray-100 dark:border-gray-800 w-full h-0 border-dashed"></div>
                        <div className="border-t border-gray-100 dark:border-gray-800 w-full h-0 border-dashed"></div>
                        <div className="border-t border-gray-100 dark:border-gray-800 w-full h-0 border-dashed"></div>
                        <div className="border-t border-gray-100 dark:border-gray-800 w-full h-0 border-dashed"></div>
                    </div>

                    {/* Bars Container */}
                    <div className="absolute inset-0 flex items-end justify-around px-4">
                        <div className="w-full max-w-[100px] h-full flex items-end justify-center group relative">
                            <div className="w-full bg-blue-600 rounded-t hover:bg-blue-500 transition-colors h-full" style={{ height: '100%' }}></div>
                            <div className="absolute bottom-full mb-1 text-xs font-bold text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">2</div>
                        </div>
                        <div className="w-full max-w-[100px] h-full flex items-end justify-center group relative">
                            <div className="w-full bg-blue-600 rounded-t hover:bg-blue-500 transition-colors h-1/2" style={{ height: '50%' }}></div>
                            <div className="absolute bottom-full mb-1 text-xs font-bold text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">1</div>
                        </div>
                        <div className="w-full max-w-[100px] h-full flex items-end justify-center group relative">
                            <div className="w-full bg-blue-600 rounded-t hover:bg-blue-500 transition-colors h-1/2" style={{ height: '50%' }}></div>
                            <div className="absolute bottom-full mb-1 text-xs font-bold text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">1</div>
                        </div>
                        <div className="w-full max-w-[100px] h-full flex items-end justify-center group relative">
                            <div className="w-full bg-blue-600 rounded-t hover:bg-blue-500 transition-colors h-1/2" style={{ height: '50%' }}></div>
                            <div className="absolute bottom-full mb-1 text-xs font-bold text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">1</div>
                        </div>
                        <div className="w-full max-w-[100px] h-full flex items-end justify-center group relative">
                            <div className="w-full bg-blue-600 rounded-t hover:bg-blue-500 transition-colors h-0" style={{ height: '1px' }}></div>
                            <div className="absolute bottom-full mb-1 text-xs font-bold text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">0</div>
                        </div>
                    </div>
                </div>
                {/* X-axis Labels */}
                <div className="flex justify-around px-8 mt-2 text-[10px] text-gray-600 text-center">
                    <span className="w-20">Team Meeting</span>
                    <span className="w-20">Client Meeting</span>
                    <span className="w-20">Management Review</span>
                    <span className="w-20">Project Kickoff</span>
                    <span className="w-20">Training Session</span>
                </div>
            </div>

            {/* Meeting Details Table */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
                <div className="p-6 border-b border-gray-100 dark:border-gray-800">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Meeting Details</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-500 uppercase bg-gray-50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-800">
                            <tr>
                                <th className="px-6 py-4 font-medium">Meeting</th>
                                <th className="px-6 py-4 font-medium">Type</th>
                                <th className="px-6 py-4 font-medium">Date</th>
                                <th className="px-6 py-4 font-medium">Venue</th>
                                <th className="px-6 py-4 font-medium">Convener</th>
                                <th className="px-6 py-4 font-medium">Participants</th>
                                <th className="px-6 py-4 font-medium text-right">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                            {meetingsData.map((meeting) => (
                                <tr key={meeting.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{meeting.title}</td>
                                    <td className="px-6 py-4 text-gray-500">{meeting.type}</td>
                                    <td className="px-6 py-4 text-gray-500">{meeting.date}</td>
                                    <td className="px-6 py-4 text-gray-500">{meeting.venue}</td>
                                    <td className="px-6 py-4 text-gray-500">{meeting.convener}</td>
                                    <td className="px-6 py-4 text-gray-500">{meeting.participants}</td>
                                    <td className="px-6 py-4 text-right">
                                        {getStatusBadge(meeting.status)}
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

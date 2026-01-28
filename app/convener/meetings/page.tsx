"use client";

import { useState } from "react";
import {
    Calendar,
    Plus,
    Search,
    Eye,
    Edit,
    Trash2,
    Clock
} from "lucide-react";

const meetingsData = [
    {
        id: 1,
        title: "Weekly Sprint Planning",
        description: "Discuss sprint goals and task assignments for the upcoming week.",
        date: "Jan 28, 2026",
        time: "10:00",
        type: "Team Meeting",
        venue: "Conference Room A",
        convener: "Rajesh Kumar",
        status: "scheduled",
        attendees: 3,
    },
    {
        id: 2,
        title: "Project Demo - ABC Corp",
        description: "Present the latest project deliverables to ABC Corp stakeholders.",
        date: "Jan 29, 2026",
        time: "14:00",
        type: "Client Meeting",
        venue: "Board Room",
        convener: "Priya Sharma",
        status: "scheduled",
        attendees: 2,
    },
    {
        id: 3,
        title: "Q4 Performance Review",
        description: "Review quarterly performance metrics and set goals for next quarter.",
        date: "Jan 25, 2026",
        time: "11:00",
        type: "Management Review",
        venue: "Board Room",
        convener: "Rajesh Kumar",
        status: "completed",
        attendees: 5,
    },
    {
        id: 4,
        title: "New CRM Implementation",
        description: "Kickoff meeting for the new CRM system implementation project.",
        date: "Feb 1, 2026",
        time: "09:00",
        type: "Project Kickoff",
        venue: "Training Hall",
        convener: "Amit Patel",
        status: "scheduled",
        attendees: 10,
    },
    {
        id: 5,
        title: "Monthly Team Sync",
        description: "Monthly sync to discuss team updates and upcoming initiatives.",
        date: "Jan 22, 2026",
        time: "15:00",
        type: "Team Meeting",
        venue: "Meeting Room B",
        convener: "Sneha Gupta",
        status: "cancelled",
        attendees: 8,
    },
];

export default function MeetingsPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("All Status");
    const [typeFilter, setTypeFilter] = useState("All Types");

    const getStatusBadge = (status: string) => {
        switch (status) {
            case "scheduled":
                return <div className="inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-normal transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 bg-blue-50 text-blue-600">scheduled</div>;
            case "completed":
                return <div className="inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-normal transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 bg-green-50 text-green-600">completed</div>;
            case "cancelled":
                return <div className="inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-normal transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 bg-red-50 text-red-600">cancelled</div>;
            default:
                return <div className="inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 bg-gray-100 text-gray-900">{status}</div>;
        }
    };

    return (
        <div className="p-8">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Meetings</h1>
                    <p className="text-gray-500 dark:text-gray-400">Manage and track all meetings</p>
                </div>
                <button className="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2">
                    <Plus className="mr-2 h-4 w-4" />
                    Create Meeting
                </button>
            </div>

            {/* Filters and Search */}
            <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative flex-1 w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search meetings..."
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex gap-3 w-full md:w-auto">
                    <div className="relative">
                        <select
                            className="appearance-none bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer min-w-[140px]"
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                        >
                            <option>All Status</option>
                            <option>Scheduled</option>
                            <option>Completed</option>
                            <option>Cancelled</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                            <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                        </div>
                    </div>

                    <div className="relative">
                        <select
                            className="appearance-none bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer min-w-[140px]"
                            value={typeFilter}
                            onChange={(e) => setTypeFilter(e.target.value)}
                        >
                            <option>All Types</option>
                            <option>Team Meeting</option>
                            <option>Client Meeting</option>
                            <option>Project Kickoff</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                            <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Meetings List Table */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-500 uppercase bg-gray-50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-800">
                            <tr>
                                <th className="px-6 py-4 font-medium">Meeting</th>
                                <th className="px-6 py-4 font-medium">Date & Time</th>
                                <th className="px-6 py-4 font-medium">Type</th>
                                <th className="px-6 py-4 font-medium">Venue</th>
                                <th className="px-6 py-4 font-medium">Convener</th>
                                <th className="px-6 py-4 font-medium">Status</th>
                                <th className="px-6 py-4 font-medium text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                            {meetingsData.map((meeting) => (
                                <tr key={meeting.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="font-medium text-gray-900 dark:text-white">{meeting.title}</div>
                                        <div className="text-xs text-gray-500 mt-1 max-w-xs">{meeting.description}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                                            <Calendar className="h-3 w-3 text-gray-400" />
                                            {meeting.date}
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-500 mt-1">
                                            <Clock className="h-3 w-3 text-gray-400" />
                                            {meeting.time}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-gray-700 dark:text-gray-300">{meeting.type}</span>
                                    </td>
                                    <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                                        {meeting.venue}
                                    </td>
                                    <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                                        {meeting.convener}
                                    </td>
                                    <td className="px-6 py-4">
                                        {getStatusBadge(meeting.status)}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-slate-100 h-8 w-8 text-gray-500 hover:text-blue-600">
                                                <Eye className="h-4 w-4" />
                                            </button>
                                            {meeting.status !== "completed" && meeting.status !== "cancelled" && (
                                                <>
                                                    <button className="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-slate-100 h-8 w-8 text-gray-500 hover:text-blue-600">
                                                        <Edit className="h-4 w-4" />
                                                    </button>
                                                    <button className="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-slate-100 h-8 w-8 text-gray-500 hover:text-red-600">
                                                        <Trash2 className="h-4 w-4" />
                                                    </button>
                                                </>
                                            )}
                                            {(meeting.status === "completed" || meeting.status === "cancelled") && (
                                                <div className="w-16"></div> /* Spacer to keep alignment */
                                            )}
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

"use client";

import { useState } from "react";
import {
    FileText,
    Plus,
    Edit,
    Trash2
} from "lucide-react";

const meetingTypesData = [
    { id: 1, name: "Team Meeting", remarks: "Regular team sync-ups", created: "Jan 27, 2026", modified: "Jan 27, 2026" },
    { id: 2, name: "Client Meeting", remarks: "External client discussions", created: "Jan 27, 2026", modified: "Jan 27, 2026" },
    { id: 3, name: "Management Review", remarks: "Senior management reviews", created: "Jan 27, 2026", modified: "Jan 27, 2026" },
    { id: 4, name: "Project Kickoff", remarks: "New project initiation", created: "Jan 27, 2026", modified: "Jan 27, 2026" },
    { id: 5, name: "Training Session", remarks: "Staff training and development", created: "Jan 27, 2026", modified: "Jan 27, 2026" },
];

export default function MeetingTypesPage() {
    return (
        <div className="p-8">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Meeting Types</h1>
                    <p className="text-gray-500 dark:text-gray-400">Configure different types of meetings</p>
                </div>
                <button className="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Meeting Type
                </button>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-500 uppercase bg-gray-50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-800">
                            <tr>
                                <th className="px-6 py-4 font-medium">Name</th>
                                <th className="px-6 py-4 font-medium">Remarks</th>
                                <th className="px-6 py-4 font-medium">Created</th>
                                <th className="px-6 py-4 font-medium">Modified</th>
                                <th className="px-6 py-4 font-medium text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                            {meetingTypesData.map((type) => (
                                <tr key={type.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <FileText className="h-4 w-4 text-blue-500" />
                                            <span className="font-medium text-gray-900 dark:text-white">{type.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-gray-500 dark:text-gray-400">{type.remarks}</td>
                                    <td className="px-6 py-4 text-gray-500 dark:text-gray-400">{type.created}</td>
                                    <td className="px-6 py-4 text-gray-500 dark:text-gray-400">{type.modified}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-slate-100 h-8 w-8 text-gray-500 hover:text-blue-600">
                                                <Edit className="h-4 w-4" />
                                            </button>
                                            <button className="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-slate-100 h-8 w-8 text-gray-500 hover:text-red-600">
                                                <Trash2 className="h-4 w-4" />
                                            </button>
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

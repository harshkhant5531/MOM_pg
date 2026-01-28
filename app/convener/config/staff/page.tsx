"use client";

import { useState } from "react";
import {
    User,
    Plus,
    Edit,
    Trash2,
    Search
} from "lucide-react";

const staffData = [
    { id: 1, name: "Rajesh Kumar", email: "rajesh.kumar@company.com", mobile: "+91 98765 43210", department: "Information Technology" },
    { id: 2, name: "Priya Sharma", email: "priya.sharma@company.com", mobile: "+91 98765 43211", department: "Information Technology" },
    { id: 3, name: "Amit Patel", email: "amit.patel@company.com", mobile: "+91 98765 43212", department: "Human Resources" },
    { id: 4, name: "Sneha Gupta", email: "sneha.gupta@company.com", mobile: "+91 98765 43213", department: "Finance" },
    { id: 5, name: "Vikram Singh", email: "vikram.singh@company.com", mobile: "+91 98765 43214", department: "Marketing" },
    { id: 6, name: "Anita Desai", email: "anita.desai@company.com", mobile: "+91 98765 43215", department: "Operations" },
];

export default function StaffPage() {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="p-8">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Staff Management</h1>
                    <p className="text-gray-500 dark:text-gray-400">Manage staff members who participate in meetings</p>
                </div>
                <button className="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Staff
                </button>
            </div>

            <div className="mb-6 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search staff..."
                    className="w-full md:w-96 pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-500 uppercase bg-gray-50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-800">
                            <tr>
                                <th className="px-6 py-4 font-medium">Name</th>
                                <th className="px-6 py-4 font-medium">Email</th>
                                <th className="px-6 py-4 font-medium">Mobile</th>
                                <th className="px-6 py-4 font-medium">Department</th>
                                <th className="px-6 py-4 font-medium text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                            {staffData.map((staff) => (
                                <tr key={staff.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <User className="h-4 w-4 text-blue-500" />
                                            <span className="font-medium text-gray-900 dark:text-white">{staff.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-gray-500 dark:text-gray-400">{staff.email}</td>
                                    <td className="px-6 py-4 text-gray-500 dark:text-gray-400">{staff.mobile}</td>
                                    <td className="px-6 py-4 text-gray-500 dark:text-gray-400">{staff.department}</td>
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

"use client";

import { useState } from "react";
import {
    Building,
    Plus,
    Edit,
    Trash2,
    Search
} from "lucide-react";

const departmentsData = [
    { id: 1, name: "Information Technology", code: "IT", created: "Jan 27, 2026", modified: "Jan 27, 2026" },
    { id: 2, name: "Human Resources", code: "HR", created: "Jan 27, 2026", modified: "Jan 27, 2026" },
    { id: 3, name: "Finance", code: "FIN", created: "Jan 27, 2026", modified: "Jan 27, 2026" },
    { id: 4, name: "Marketing", code: "MKT", created: "Jan 27, 2026", modified: "Jan 27, 2026" },
    { id: 5, name: "Operations", code: "OPS", created: "Jan 27, 2026", modified: "Jan 27, 2026" },
];

export default function DepartmentsPage() {
    return (
        <div className="p-8">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Departments</h1>
                    <p className="text-gray-500 dark:text-gray-400">Manage organizational departments</p>
                </div>
                <button className="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Department
                </button>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-500 uppercase bg-gray-50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-800">
                            <tr>
                                <th className="px-6 py-4 font-medium">Department</th>
                                <th className="px-6 py-4 font-medium">Code</th>
                                <th className="px-6 py-4 font-medium">Created</th>
                                <th className="px-6 py-4 font-medium">Modified</th>
                                <th className="px-6 py-4 font-medium text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                            {departmentsData.map((dept) => (
                                <tr key={dept.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <Building className="h-4 w-4 text-blue-500" />
                                            <span className="font-medium text-gray-900 dark:text-white">{dept.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600">{dept.code}</span>
                                    </td>
                                    <td className="px-6 py-4 text-gray-500 dark:text-gray-400">{dept.created}</td>
                                    <td className="px-6 py-4 text-gray-500 dark:text-gray-400">{dept.modified}</td>
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

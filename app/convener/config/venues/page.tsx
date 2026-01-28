"use client";

import { useState } from "react";
import {
    MapPin,
    Plus,
    Edit,
    Trash2,
    Users
} from "lucide-react";

const venuesData = [
    { id: 1, name: "Conference Room A", location: "Building 1, Floor 2", capacity: 20, created: "Jan 27, 2026" },
    { id: 2, name: "Board Room", location: "Building 1, Floor 5", capacity: 15, created: "Jan 27, 2026" },
    { id: 3, name: "Training Hall", location: "Building 2, Ground Floor", capacity: 50, created: "Jan 27, 2026" },
    { id: 4, name: "Meeting Room B", location: "Building 1, Floor 3", capacity: 10, created: "Jan 27, 2026" },
    { id: 5, name: "Virtual Meeting", location: "Online", capacity: 100, created: "Jan 27, 2026" },
];

export default function VenuesPage() {
    return (
        <div className="p-8">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Venues</h1>
                    <p className="text-gray-500 dark:text-gray-400">Manage meeting venues and locations</p>
                </div>
                <button className="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Venue
                </button>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-500 uppercase bg-gray-50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-800">
                            <tr>
                                <th className="px-6 py-4 font-medium">Venue</th>
                                <th className="px-6 py-4 font-medium">Location</th>
                                <th className="px-6 py-4 font-medium">Capacity</th>
                                <th className="px-6 py-4 font-medium">Created</th>
                                <th className="px-6 py-4 font-medium text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                            {venuesData.map((venue) => (
                                <tr key={venue.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <MapPin className="h-4 w-4 text-blue-500" />
                                            <span className="font-medium text-gray-900 dark:text-white">{venue.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-gray-500 dark:text-gray-400">{venue.location}</td>
                                    <td className="px-6 py-4 text-gray-500 dark:text-gray-400">
                                        <div className="flex items-center gap-1">
                                            <Users className="h-3 w-3" />
                                            {venue.capacity}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-gray-500 dark:text-gray-400">{venue.created}</td>
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

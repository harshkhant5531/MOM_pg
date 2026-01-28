"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Calendar,
    Users,
    Settings,
    FileBarChart,
    FileText,
    ArrowLeft,
    ChevronDown,
    Building,
    MapPin,
    User,
    List
} from "lucide-react";
import { useState } from "react";

export default function ConvenerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [isConfigOpen, setIsConfigOpen] = useState(true);

    const isActive = (path: string) => pathname === path;
    const isConfigActive = pathname.startsWith("/convener/config");

    return (
        <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950">
            {/* Sidebar */}
            <aside className="w-64 bg-slate-900 text-white hidden lg:block fixed h-full z-10 overflow-y-auto">
                <div className="p-6">
                    <div className="flex items-center gap-2 mb-8">
                        <div className="bg-blue-600 p-1.5 rounded-lg">
                            <FileText className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-lg font-bold">MOM System</span>
                    </div>

                    <nav className="space-y-1">
                        <Link
                            href="/convener"
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-colors ${isActive("/convener")
                                    ? "bg-blue-900/50 text-blue-400 border-r-2 border-blue-500"
                                    : "text-gray-400 hover:text-white hover:bg-white/5"
                                }`}
                        >
                            <LayoutDashboard className="h-5 w-5" />
                            Dashboard
                        </Link>

                        <Link
                            href="/convener/meetings"
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-colors ${isActive("/convener/meetings")
                                    ? "bg-blue-900/50 text-blue-400 border-r-2 border-blue-500"
                                    : "text-gray-400 hover:text-white hover:bg-white/5"
                                }`}
                        >
                            <Calendar className="h-5 w-5" />
                            Meetings
                        </Link>

                        <Link
                            href="/convener/calendar"
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-colors ${isActive("/convener/calendar")
                                    ? "bg-blue-900/50 text-blue-400 border-r-2 border-blue-500"
                                    : "text-gray-400 hover:text-white hover:bg-white/5"
                                }`}
                        >
                            <Calendar className="h-5 w-5" />
                            Calendar View
                        </Link>

                        <Link
                            href="/convener/attendance"
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-colors ${isActive("/convener/attendance")
                                    ? "bg-blue-900/50 text-blue-400 border-r-2 border-blue-500"
                                    : "text-gray-400 hover:text-white hover:bg-white/5"
                                }`}
                        >
                            <Users className="h-5 w-5" />
                            Attendance
                        </Link>

                        {/* Master Config Dropdown */}
                        <div>
                            <button
                                onClick={() => setIsConfigOpen(!isConfigOpen)}
                                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm transition-colors ${isConfigActive
                                        ? "text-white"
                                        : "text-gray-400 hover:text-white hover:bg-white/5"
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <Settings className="h-5 w-5" />
                                    Master Config
                                </div>
                                <ChevronDown className={`h-4 w-4 transition-transform ${isConfigOpen ? "rotate-180" : ""}`} />
                            </button>

                            {isConfigOpen && (
                                <div className="pl-12 space-y-1 mt-1">
                                    <Link
                                        href="/convener/config/meeting-types"
                                        className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-colors ${isActive("/convener/config/meeting-types")
                                                ? "text-blue-400"
                                                : "text-gray-400 hover:text-white"
                                            }`}
                                    >
                                        <List className="h-4 w-4" />
                                        Meeting Types
                                    </Link>
                                    <Link
                                        href="/convener/config/staff"
                                        className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-colors ${isActive("/convener/config/staff")
                                                ? "text-blue-400"
                                                : "text-gray-400 hover:text-white"
                                            }`}
                                    >
                                        <User className="h-4 w-4" />
                                        Staff
                                    </Link>
                                    <Link
                                        href="/convener/config/departments"
                                        className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-colors ${isActive("/convener/config/departments")
                                                ? "text-blue-400"
                                                : "text-gray-400 hover:text-white"
                                            }`}
                                    >
                                        <Building className="h-4 w-4" />
                                        Departments
                                    </Link>
                                    <Link
                                        href="/convener/config/venues"
                                        className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-colors ${isActive("/convener/config/venues")
                                                ? "text-blue-400"
                                                : "text-gray-400 hover:text-white"
                                            }`}
                                    >
                                        <MapPin className="h-4 w-4" />
                                        Venues
                                    </Link>
                                </div>
                            )}
                        </div>

                        <Link
                            href="/convener/reports"
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-colors ${isActive("/convener/reports")
                                    ? "bg-blue-900/50 text-blue-400 border-r-2 border-blue-500"
                                    : "text-gray-400 hover:text-white hover:bg-white/5"
                                }`}
                        >
                            <FileBarChart className="h-5 w-5" />
                            Reports
                        </Link>
                    </nav>
                </div>

                <div className="p-6 border-t border-white/10 mt-auto">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium">
                            MC
                        </div>
                        <div>
                            <p className="text-sm font-medium text-white">Meeting Convener</p>
                            <p className="text-xs text-gray-500">Convener</p>
                        </div>
                        <Link href="/" className="ml-auto">
                            <ArrowLeft className="h-5 w-5 text-gray-500 hover:text-white" />
                        </Link>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 lg:ml-64">
                {children}
            </main>
        </div>
    );
}

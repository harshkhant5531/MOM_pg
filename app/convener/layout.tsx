"use client";

import { useState, useEffect } from "react";
import Sidebar, { SidebarItem } from "@/components/layout/Sidebar";
import Loading from "@/components/ui/Loading";
import {
    LayoutDashboard,
    Calendar,
    Users,
    Settings,
    List,
    User,
    Building,
    MapPin,
    FileBarChart
} from "lucide-react";

const convenerItems: SidebarItem[] = [
    { name: "Dashboard", icon: LayoutDashboard, href: "/convener" },
    { name: "Meetings", icon: Calendar, href: "/convener/meetings" },
    { name: "Calendar View", icon: Calendar, href: "/convener/calendar" },
    { name: "Attendance", icon: Users, href: "/convener/attendance" },
    {
        name: "Master Config",
        icon: Settings,
        href: "#",
        subItems: [
            { name: "Meeting Types", icon: List, href: "/convener/config/meeting-types" },
            { name: "Staff", icon: User, href: "/convener/config/staff" },
            { name: "Departments", icon: Building, href: "/convener/config/departments" },
            { name: "Venues", icon: MapPin, href: "/convener/config/venues" },
        ],
    },
    { name: "Reports", icon: FileBarChart, href: "/convener/reports" },
];

export default function ConvenerLayout({ children }: { children: React.ReactNode }) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950">
            <Sidebar
                items={convenerItems}
                user={{ name: "Meeting Convener", role: "Convener", avatarText: "MC" }}
            />
            <main className="flex-1">
                <div className="p-8">
                    {!isMounted ? <Loading /> : children}
                </div>
            </main>
        </div>
    );
}

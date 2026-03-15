"use client";

import { useState, useEffect } from "react";
import Sidebar, { SidebarItem } from "@/components/layout/Sidebar";
import Loading from "@/components/ui/Loading";
import {
    LayoutDashboard,
    Video,
    Calendar,
    Users,
    Settings,
    Building2,
    MapPin,
    User,
    FileText
} from "lucide-react";

const adminItems: SidebarItem[] = [
    { name: "Dashboard", icon: LayoutDashboard, href: "/admin" },
    { name: "Meetings", icon: Video, href: "/admin/meetings" },
    { name: "Calendar View", icon: Calendar, href: "/admin/calendar" },
    { name: "Attendance", icon: Users, href: "/admin/attendance" },
    {
        name: "Master Config",
        icon: Settings,
        href: "#",
        subItems: [
            { name: "Meeting Types", icon: Video, href: "/admin/master-config/meeting-types" },
            { name: "Staff", icon: User, href: "/admin/master-config/staff" },
            { name: "Departments", icon: Building2, href: "/admin/master-config/departments" },
            { name: "Venues", icon: MapPin, href: "/admin/master-config/venues" },
        ],
    },
    { name: "Reports", icon: FileText, href: "/admin/reports" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950">
            <Sidebar
                items={adminItems}
                user={{ name: "Administrator", role: "Admin", avatarText: "AD" }}
            />
            <main className="flex-1">
                <div className="p-8">
                    {!isMounted ? <Loading /> : children}
                </div>
            </main>
        </div>
    );
}

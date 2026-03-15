"use client";

import { useState, useEffect } from "react";
import Sidebar, { SidebarItem } from "@/components/layout/Sidebar";
import Loading from "@/components/ui/Loading";
import {
    LayoutDashboard,
    Calendar,
    CalendarDays,
    Users,
    Settings,
    List,
    User,
    Building,
    MapPin,
    FileBarChart,
} from "lucide-react";
import { getUserProfile } from "@/app/actions/auth";

const staffItems: SidebarItem[] = [
    { name: "Dashboard", icon: LayoutDashboard, href: "/staff" },
    { name: "Meetings", icon: Calendar, href: "/staff/meetings" },
    { name: "Calendar View", icon: CalendarDays, href: "/staff/calendar" },
    { name: "Attendance", icon: Users, href: "/staff/attendance" },
    {
        name: "Master Config",
        icon: Settings,
        href: "#",
        subItems: [
            { name: "Meeting Types", icon: List, href: "/staff/config/meeting-types" },
            { name: "Staff", icon: User, href: "/staff/config/staff" },
            { name: "Departments", icon: Building, href: "/staff/config/departments" },
            { name: "Venues", icon: MapPin, href: "/staff/config/venues" },
        ],
    },
    { name: "Reports", icon: FileBarChart, href: "/staff/reports" },
];

export default function StaffLayout({ children }: { children: React.ReactNode }) {
    const [isMounted, setIsMounted] = useState(false);
    const [user, setUser] = useState<{ name: string; role: string; avatarText: string }>({
        name: "Staff Member",
        role: "Staff",
        avatarText: "SM"
    });

    useEffect(() => {
        setIsMounted(true);
        const fetchUser = async () => {
            const profile = await getUserProfile();
            if (profile) {
                setUser({
                    name: profile.fullName,
                    role: profile.role || "Staff",
                    avatarText: profile.fullName.substring(0, 2).toUpperCase()
                });
            }
        };
        fetchUser();
    }, []);

    return (
        <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950">
            <Sidebar
                items={staffItems}
                user={user}
            />
            <main className="flex-1">
                <div className="p-8">
                    {!isMounted ? <Loading /> : children}
                </div>
            </main>
        </div>
    );
}

"use client";

import { useState, useEffect } from "react";
import Sidebar, { SidebarItem } from "@/components/layout/Sidebar";
import Loading from "@/components/ui/Loading";
import {
    LayoutDashboard,
    Calendar,
    ClipboardList,
    Bell,
} from "lucide-react";

const staffItems: SidebarItem[] = [
    { name: "Dashboard", icon: LayoutDashboard, href: "/staff" },
    { name: "Meetings", icon: Calendar, href: "/staff/meetings" },
    { name: "Tasks", icon: ClipboardList, href: "/staff/tasks" },
    { name: "Notifications", icon: Bell, href: "/staff/notifications" },
];

export default function StaffLayout({ children }: { children: React.ReactNode }) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <div className="flex min-h-screen bg-[#F8FAFC]">
            <Sidebar
                items={staffItems}
                user={{ name: "Staff Member", role: "Staff", avatarText: "SM" }}
            />
            <main className="flex-1">
                <div className="p-8">
                    {!isMounted ? <Loading /> : children}
                </div>
            </main>
        </div>
    );
}

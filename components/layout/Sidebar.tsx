"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    ChevronDown,
    Menu,
    LogOut,
    LucideIcon,
    Video
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface SidebarItem {
    name: string;
    icon: LucideIcon;
    href: string;
    subItems?: { name: string; icon?: LucideIcon; href: string }[];
}

interface SidebarProps {
    items: SidebarItem[];
    user: {
        name: string;
        role: string;
        avatarText: string;
    };
}

export default function Sidebar({ items, user }: SidebarProps) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [openMenus, setOpenMenus] = useState<string[]>([]);
    const pathname = usePathname();

    useEffect(() => {
        // Set initial width
        const root = document.documentElement;
        root.style.setProperty('--sidebar-width', isSidebarOpen ? '16rem' : '5rem');
    }, [isSidebarOpen]);

    const toggleMenu = (name: string) => {
        setOpenMenus(prev =>
            prev.includes(name) ? prev.filter(n => n !== name) : [...prev, name]
        );
    };

    const isItemActive = (item: SidebarItem) => {
        if (pathname === item.href) return true;
        if (item.subItems) {
            return item.subItems.some(sub => pathname === sub.href);
        }
        return false;
    };

    return (
        <aside
            className={`fixed left-0 top-0 z-40 h-screen transition-all duration-300 ease-in-out border-r border-[#E2E8F0] bg-[#0F172A] text-white ${isSidebarOpen ? "w-64" : "w-20"
                }`}
        >
            <div className="flex h-full flex-col">
                {/* Logo Section */}
                <div className="flex h-16 items-center justify-between px-4">
                    {isSidebarOpen ? (
                        <div className="flex items-center gap-2">
                            <img src="/websiteLogo.png" alt="MOM Logo" className="h-8 w-8 object-contain rounded-lg" />
                            <span className="text-lg font-bold tracking-tight">MOM System</span>
                        </div>
                    ) : (
                        <div className="flex h-8 w-8 items-center justify-center mx-auto">
                            <img src="/websiteLogo.png" alt="MOM Logo" className="h-8 w-8 object-contain rounded-lg" />
                        </div>
                    )}
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-800 hover:text-white transition-colors"
                    >
                        <Menu className="h-5 w-5" />
                    </button>
                </div>

                {/* Navigation Items */}
                <nav className="flex-1 space-y-1 px-3 py-4 overflow-y-auto">
                    {items.map((item) => {
                        const active = isItemActive(item);
                        const isMenuOpen = openMenus.includes(item.name);

                        return (
                            <div key={item.name}>
                                {item.subItems ? (
                                    <>
                                        <button
                                            onClick={() => toggleMenu(item.name)}
                                            className={`group flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 ${active
                                                ? "bg-blue-600/10 text-blue-400"
                                                : "text-gray-400 hover:bg-white/5 hover:text-white"
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <item.icon className={`h-5 w-5 transition-colors ${active ? "text-blue-400" : "group-hover:text-white"
                                                    }`} />
                                                {isSidebarOpen && <span>{item.name}</span>}
                                            </div>
                                            {isSidebarOpen && (
                                                <ChevronDown
                                                    className={`h-4 w-4 transition-transform duration-200 ${isMenuOpen ? "rotate-180" : ""
                                                        }`}
                                                />
                                            )}
                                        </button>
                                        <AnimatePresence>
                                            {isMenuOpen && isSidebarOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="mt-1 space-y-1 overflow-hidden pl-11"
                                                >
                                                    {item.subItems.map((subItem) => (
                                                        <Link
                                                            key={subItem.name}
                                                            href={subItem.href}
                                                            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${pathname === subItem.href
                                                                ? "text-blue-400"
                                                                : "text-gray-500 hover:text-white"
                                                                }`}
                                                        >
                                                            {subItem.name}
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 ${pathname === item.href
                                            ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                                            : "text-gray-400 hover:bg-white/5 hover:text-white"
                                            }`}
                                    >
                                        <item.icon className={`h-5 w-5 transition-colors ${pathname === item.href ? "text-white" : "group-hover:text-white"
                                            }`} />
                                        {isSidebarOpen && <span>{item.name}</span>}
                                    </Link>
                                )}
                            </div>
                        );
                    })}
                </nav>

                {/* User Profile Section */}
                <div className="mt-auto border-t border-white/5 p-4">
                    <div className={`flex items-center gap-3 ${!isSidebarOpen && "justify-center"}`}>
                        <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center ring-2 ring-white/10">
                            <span className="text-sm font-bold text-white">{user.avatarText}</span>
                        </div>
                        {isSidebarOpen && (
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-semibold text-white truncate">{user.name}</p>
                                <p className="text-xs text-gray-500 truncate">{user.role}</p>
                            </div>
                        )}
                        {isSidebarOpen && (
                            <Link href="/login" className="text-gray-500 hover:text-white transition-colors">
                                <LogOut className="h-5 w-5" />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </aside>
    );
}

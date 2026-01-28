"use client";

import { useState } from "react";
import {
    ChevronLeft,
    ChevronRight
} from "lucide-react";

export default function CalendarPage() {
    const [currentDate, setCurrentDate] = useState(new Date(2026, 0, 27)); // Jan 27, 2026

    const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

    const days = daysInMonth(currentDate.getFullYear(), currentDate.getMonth());
    const startDay = firstDayOfMonth(currentDate.getFullYear(), currentDate.getMonth());

    const events = [
        { date: 22, title: "Monthly Team Sync", type: "cancelled", time: "10:00 AM" },
        { date: 25, title: "Q4 Performance Review", type: "completed", time: "2:30 PM" },
        { date: 28, title: "Weekly Sprint Planning", type: "scheduled", time: "11:00 AM" },
        { date: 29, title: "Project Demo - ABC Corp", type: "scheduled", time: "3:00 PM" },
    ];

    const renderCalendarDays = () => {
        const calendarDays = [];

        // Empty cells for days before start of month
        for (let i = 0; i < startDay; i++) {
            calendarDays.push(<div key={`empty-${i}`} className="h-32 border border-gray-100 dark:border-gray-800 p-2 bg-gray-50/30 dark:bg-gray-900/30"></div>);
        }

        // Days of the month
        for (let i = 1; i <= days; i++) {
            const isToday = i === currentDate.getDate();
            const dayEvents = events.filter(e => e.date === i);

            calendarDays.push(
                <div key={i} className={`h-32 border border-gray-100 dark:border-gray-800 p-2 relative ${isToday ? 'bg-blue-50/30 dark:bg-blue-900/10' : 'bg-white dark:bg-gray-900'}`}>
                    <div className={`font-medium text-sm mb-1 ${isToday ? 'bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center' : 'text-gray-700 dark:text-gray-300'}`}>
                        {i}
                    </div>
                    {dayEvents.map((event, idx) => {
                        let bgClass = "bg-blue-500";
                        if (event.type === "completed") bgClass = "bg-green-500";
                        if (event.type === "cancelled") bgClass = "bg-red-500";

                        return (
                            <div key={idx} className={`text-[10px] text-white p-1 rounded mb-1 truncate ${bgClass}`}>
                                {event.type !== 'scheduled' && <span className="mr-1">{event.time}</span>}
                                {event.title}
                            </div>
                        );
                    })}
                </div>
            );
        }

        return calendarDays;
    };

    return (
        <div className="p-8">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Calendar View</h1>
                <p className="text-gray-500 dark:text-gray-400">View meetings in calendar format</p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
                <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">January 2026</h2>
                        <div className="flex gap-2">
                            <button className="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-slate-200 bg-white hover:bg-slate-100 h-9 w-9">
                                <ChevronLeft className="h-4 w-4" />
                            </button>
                            <button className="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-slate-200 bg-white hover:bg-slate-100 h-9 px-4 py-2">Today</button>
                            <button className="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-slate-200 bg-white hover:bg-slate-100 h-9 w-9">
                                <ChevronRight className="h-4 w-4" />
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-7 mb-2 text-center text-sm text-gray-500 font-medium">
                        <div>Sun</div>
                        <div>Mon</div>
                        <div>Tue</div>
                        <div>Wed</div>
                        <div>Thu</div>
                        <div>Fri</div>
                        <div>Sat</div>
                    </div>

                    <div className="grid grid-cols-7 bg-gray-200 dark:bg-gray-800 gap-px border border-gray-200 dark:border-gray-800">
                        {renderCalendarDays()}
                    </div>

                    <div className="flex items-center gap-6 mt-6 text-sm">
                        <span className="font-medium text-gray-500">Legend:</span>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded bg-blue-500"></div>
                            <span className="text-gray-600 dark:text-gray-400">Scheduled</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded bg-green-500"></div>
                            <span className="text-gray-600 dark:text-gray-400">Completed</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded bg-red-500"></div>
                            <span className="text-gray-600 dark:text-gray-400">Cancelled</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Calendar,
  Users,
  ClipboardList,
  Bell,
  Clock,
  FileText,
  ArrowLeft,
  LucideIcon,
} from "lucide-react";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface StatItem {
  label: string;
  value: string;
  icon: LucideIcon;
}

interface Meeting {
  title: string;
  time: string;
  date: string;
  attendees: number;
}

interface Task {
  title: string;
  priority: string;
  due: string;
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "icon";
  children: ReactNode;
}

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Button = ({
  variant = "default",
  size = "default",
  className = "",
  children,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    default:
      "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-lg",
    outline:
      "border border-gray-300 bg-transparent hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800",
    ghost: "hover:bg-gray-100 dark:hover:bg-gray-800",
  };

  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-8 px-3 text-sm",
    icon: "h-10 w-10",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Card = ({ children, className = "" }: CardProps) => (
  <div
    className={`rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900 ${className}`}
  >
    {children}
  </div>
);

const CardHeader = ({ children, className = "" }: CardProps) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>{children}</div>
);

const CardTitle = ({ children, className = "" }: CardProps) => (
  <h3
    className={`text-lg font-semibold leading-none tracking-tight ${className}`}
  >
    {children}
  </h3>
);

const CardDescription = ({ children, className = "" }: CardProps) => (
  <p className={`text-sm text-gray-500 dark:text-gray-400 ${className}`}>
    {children}
  </p>
);

const CardContent = ({ children, className = "" }: CardProps) => (
  <div className={`p-6 pt-0 ${className}`}>{children}</div>
);

export default function StaffDashboard() {
  const stats: StatItem[] = [
    { label: "Assigned Meetings", value: "12", icon: Calendar },
    { label: "Pending Tasks", value: "5", icon: ClipboardList },
    { label: "Notifications", value: "3", icon: Bell },
  ];

  const upcomingMeetings: Meeting[] = [
    { title: "Team Standup", time: "09:00 AM", date: "Today", attendees: 8 },
    { title: "Project Review", time: "02:00 PM", date: "Today", attendees: 5 },
    { title: "Client Call", time: "10:30 AM", date: "Tomorrow", attendees: 3 },
  ];

  const tasks: Task[] = [
    { title: "Prepare meeting notes", priority: "High", due: "Today" },
    { title: "Update attendance sheet", priority: "Medium", due: "Tomorrow" },
    { title: "Send follow-up emails", priority: "Low", due: "This Week" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <header className="border-b border-gray-200 bg-white/50 backdrop-blur-sm sticky top-0 z-50 dark:border-gray-800 dark:bg-gray-900/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Staff Dashboard
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Welcome back, Staff Member
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          {stats.map((stat, index) => (
            <Card key={index} className="backdrop-blur-sm">
              <CardContent className="flex items-center gap-4 p-6">
                <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30">
                  <stat.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  Upcoming Meetings
                </CardTitle>
                <CardDescription>Your scheduled meetings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingMeetings.map((meeting, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-xl bg-gray-100/50 hover:bg-gray-100 transition-colors dark:bg-gray-800/50 dark:hover:bg-gray-800"
                  >
                    <div>
                      <p className="font-medium text-gray-900 dark:text-gray-100">
                        {meeting.title}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <Clock className="h-4 w-4" />
                        {meeting.time} • {meeting.date}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                      <Users className="h-4 w-4" />
                      {meeting.attendees}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  My Tasks
                </CardTitle>
                <CardDescription>Tasks assigned to you</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {tasks.map((task, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-xl bg-gray-100/50 hover:bg-gray-100 transition-colors dark:bg-gray-800/50 dark:hover:bg-gray-800"
                  >
                    <div>
                      <p className="font-medium text-gray-900 dark:text-gray-100">
                        {task.title}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Due: {task.due}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        task.priority === "High"
                          ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                          : task.priority === "Medium"
                          ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                          : "bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400"
                      }`}
                    >
                      {task.priority}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

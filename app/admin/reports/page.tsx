"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    FileBox,
    Download,
    ChevronDown,
    Calendar,
    TrendingUp,
    Users,
    CheckCircle2,
    Loader2
} from "lucide-react";
import { getMeetings } from "@/app/actions/meetings";
import { getDashboardStats } from "@/app/actions/dashboard";
import { getReportStats } from "@/app/actions/reports";
import toast, { Toaster } from "react-hot-toast";

export default function ReportsPage() {
    const [data, setData] = useState<any>(null);
    const [reportData, setReportData] = useState<any>(null);
    const [meetings, setMeetings] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [stats, meetingList, report] = await Promise.all([
                    getDashboardStats(),
                    getMeetings(),
                    getReportStats()
                ]);
                setData(stats);
                setMeetings(meetingList);
                setReportData(report);
            } catch (err) {
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[600px] text-slate-400 gap-3 font-bold">
                <Loader2 className="animate-spin text-blue-500" size={32} />
                Compiling reports...
            </div>
        );
    }

    const handleExportExcel = () => {
        try {
            // Convert meetings data to CSV format
            const headers = ['Meeting', 'Type', 'Date', 'Status'];
            const csvRows = [headers.join(',')];

            meetings.forEach((meeting) => {
                const isPast = new Date(meeting.MeetingDate) < new Date();
                const status = meeting.IsCancelled ? 'Cancelled' : isPast ? 'Completed' : 'Scheduled';
                const row = [
                    `"${meeting.MeetingDescription || ''}"`,
                    `"${meeting.meetingtype?.MeetingTypeName || ''}"`,
                    `"${new Date(meeting.MeetingDate).toLocaleDateString()}"`,
                    `"${status}"`
                ];
                csvRows.push(row.join(','));
            });

            const csvContent = csvRows.join('\n');
            const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
            const link = document.createElement('a');
            const url = URL.createObjectURL(blob);
            link.setAttribute('href', url);
            link.setAttribute('download', `meeting-report-${new Date().toISOString().split('T')[0]}.csv`);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            toast.success("Excel report downloaded successfully!", {
                duration: 3000,
                icon: "📊",
            });
        } catch (error) {
            toast.error("Failed to export Excel report", {
                duration: 3000,
            });
        }
    };

    const handleExportPDF = async () => {
        try {
            // Dynamically import jsPDF to avoid SSR issues
            const { default: jsPDF } = await import('jspdf');
            const autoTable = (await import('jspdf-autotable')).default;

            const doc = new jsPDF();

            // Add title
            doc.setFontSize(20);
            doc.setTextColor(30, 58, 138); // Blue color
            doc.text('Meeting Reports & Analytics', 14, 20);

            // Add date
            doc.setFontSize(10);
            doc.setTextColor(100, 100, 100);
            doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 14, 27);

            // Add summary statistics
            doc.setFontSize(12);
            doc.setTextColor(0, 0, 0);
            doc.text('Summary Statistics', 14, 40);

            const summaryData = [
                ['Total Sessions', `${reportData?.summary.total || 0}`],
                ['Completed', `${reportData?.summary.completed || 0}`],
                ['Scheduled', `${reportData?.summary.scheduled || 0}`],
                ['Cancelled', `${reportData?.summary.cancelled || 0}`],
                ['Completion Rate', reportData?.summary.total > 0 ? `${Math.round((reportData.summary.completed / reportData.summary.total) * 100)}%` : '0%']
            ];

            autoTable(doc, {
                startY: 45,
                head: [['Metric', 'Value']],
                body: summaryData,
                theme: 'grid',
                headStyles: { fillColor: [30, 58, 138] },
                margin: { left: 14 }
            });

            // Add meeting details table
            doc.setFontSize(12);
            doc.text('Meeting Details', 14, doc.lastAutoTable.finalY + 15);

            const tableData = meetings.map((meeting) => {
                const isPast = new Date(meeting.MeetingDate) < new Date();
                const status = meeting.IsCancelled ? 'Cancelled' : isPast ? 'Completed' : 'Scheduled';
                return [
                    meeting.MeetingDescription || '',
                    meeting.meetingtype?.MeetingTypeName || '',
                    new Date(meeting.MeetingDate).toLocaleDateString(),
                    status
                ];
            });

            autoTable(doc, {
                startY: doc.lastAutoTable.finalY + 20,
                head: [['Meeting', 'Type', 'Date', 'Status']],
                body: tableData,
                theme: 'striped',
                headStyles: { fillColor: [30, 58, 138] },
                margin: { left: 14 },
                styles: { fontSize: 9 }
            });

            // Save the PDF
            doc.save(`meeting-report-${new Date().toISOString().split('T')[0]}.pdf`);

            toast.success("PDF report downloaded successfully!", {
                duration: 3000,
                icon: "📄",
            });
        } catch (error) {
            console.error('PDF export error:', error);
            toast.error("Failed to export PDF report", {
                duration: 3000,
            });
        }
    };

    const stats = [
        { label: "Total Sessions", value: reportData?.summary.total || "0", icon: Calendar, color: "blue" },
        { label: "Completion Rate", value: reportData?.summary.total > 0 ? `${Math.round((reportData.summary.completed / reportData.summary.total) * 100)}%` : "0%", icon: TrendingUp, color: "green" },
        { label: "Total Upcoming", value: reportData?.summary.scheduled || "0", icon: Users, color: "blue" },
        { label: "Avg Attendance", value: "88%", icon: CheckCircle2, color: "cyan" }, // Hardcoded as placeholder for complex calculation
    ];

    return (
        <div className="space-y-8 max-w-[1600px] mx-auto pb-12">
            <Toaster position="top-right" />
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 leading-tight">Reports & Analytics</h1>
                    <p className="text-slate-500 font-medium text-[14px]">View meeting statistics and generate reports</p>
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={handleExportExcel}
                        className="cursor-pointer px-4 py-2 rounded-xl border border-slate-100 bg-white text-slate-600 text-[13px] font-bold flex items-center gap-2 hover:bg-slate-50 transition-all active:scale-95 shadow-sm"
                    >
                        <FileBox size={16} /> Export Excel
                    </button>
                    <button
                        onClick={handleExportPDF}
                        className=" cursor-pointer px-4 py-2 rounded-xl border border-slate-100 bg-white text-slate-600 text-[13px] font-bold flex items-center gap-2 hover:bg-slate-50 transition-all active:scale-95 shadow-sm"
                    >
                        <Download size={16} /> Export PDF
                    </button>
                </div>
            </div>

            {/* Primary Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {stats.map((stat, idx) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-5 group hover:border-blue-200 transition-colors"
                    >
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${stat.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                            stat.color === 'green' ? 'bg-green-50 text-green-600' :
                                'bg-cyan-50 text-cyan-600'
                            }`}>
                            <stat.icon size={22} strokeWidth={2.5} />
                        </div>
                        <div>
                            <p className="text-2xl font-black text-slate-900 leading-tight tracking-tight">{stat.value}</p>
                            <p className="text-[12px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Charts Section Mockups (Updated with real Distribution info) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                    <h3 className="font-bold text-slate-900 text-lg mb-10">Monthly Meeting Trend</h3>
                    <div className="h-64 flex items-end gap-1 px-2 relative">
                        {reportData?.monthlyTrends && reportData.monthlyTrends.length > 0 ? (
                            reportData.monthlyTrends.map((item: any, i: number) => {
                                const maxCount = Math.max(...reportData.monthlyTrends.map((t: any) => t.count), 1);
                                const heightPercentage = (item.count / maxCount) * 90; // Use 90% max to leave space for tooltips
                                return (
                                    <div key={i} className="flex-1 flex flex-col items-center justify-end h-full">
                                        <div className="w-full flex flex-col items-center justify-end" style={{ height: '100%' }}>
                                            <div
                                                className="w-full bg-blue-500 rounded-t-lg group relative cursor-pointer hover:bg-blue-600 transition-all shadow-sm"
                                                style={{ height: `${Math.max(heightPercentage, 8)}%` }}
                                            >
                                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                                                    {item.count} meeting{item.count !== 1 ? 's' : ''}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-[9px] font-bold text-slate-400 uppercase mt-2 text-center">
                                            {item.month}
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center text-slate-300 text-sm italic font-medium">Insufficient data for trend analysis</div>
                        )}
                    </div>
                </div>

                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                    <h3 className="font-bold text-slate-900 text-lg mb-10">Meeting Status Distribution</h3>
                    <div className="flex items-center justify-center h-64 relative">
                        <div className="text-center">
                            <p className="text-4xl font-black text-slate-900">{reportData?.summary.total || 0}</p>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Total Meetings recorded</p>
                            <div className="mt-6 flex gap-4 text-[11px] font-black uppercase">
                                <span className="text-blue-500">{reportData?.summary.scheduled || 0} Scheduled</span>
                                <span className="text-green-500">{reportData?.summary.completed || 0} Completed</span>
                                <span className="text-red-500">{reportData?.summary.cancelled || 0} Cancelled</span>
                            </div>
                            {reportData?.statusDistribution && reportData.statusDistribution.length > 0 && (
                                <div className="mt-6 space-y-2">
                                    {reportData.statusDistribution.map((status: any, idx: number) => (
                                        <div key={idx} className="flex items-center justify-between text-xs">
                                            <div className="flex items-center gap-2">
                                                <div className={`w-2 h-2 rounded-full ${status.color === 'blue' ? 'bg-blue-500' :
                                                    status.color === 'indigo' ? 'bg-green-500' :
                                                        'bg-red-500'
                                                    }`} />
                                                <span className="text-slate-600 font-medium">{status.label}</span>
                                            </div>
                                            <span className="font-bold text-slate-900">{status.percentage}%</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Meeting Details Table */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-50">
                    <h3 className="font-bold text-slate-900 text-lg">Detailed List</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-slate-50/50">
                                <th className="px-8 py-4 text-[12px] font-black text-slate-400 uppercase tracking-widest">Meeting</th>
                                <th className="px-8 py-4 text-[12px] font-black text-slate-400 uppercase tracking-widest">Type</th>
                                <th className="px-8 py-4 text-[12px] font-black text-slate-400 uppercase tracking-widest">Date</th>
                                <th className="px-8 py-4 text-[12px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {meetings.map((meeting, idx) => {
                                const isPast = new Date(meeting.MeetingDate) < new Date();
                                const status = meeting.IsCancelled ? 'cancelled' : isPast ? 'completed' : 'scheduled';
                                return (
                                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                                        <td className="px-8 py-5 text-[14px] font-bold text-slate-700">{meeting.MeetingDescription}</td>
                                        <td className="px-8 py-5 text-[14px] font-medium text-slate-500">{meeting.meetingtype?.MeetingTypeName}</td>
                                        <td className="px-8 py-5 text-[14px] font-medium text-slate-500">{new Date(meeting.MeetingDate).toLocaleDateString()}</td>
                                        <td className="px-8 py-5">
                                            <span className={`px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider border ${status === 'scheduled' ? 'bg-blue-50 text-blue-500 border-blue-100' :
                                                status === 'completed' ? 'bg-green-50 text-green-500 border-green-100' :
                                                    'bg-red-50 text-red-500 border-red-100'
                                                }`}>
                                                {status}
                                            </span>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

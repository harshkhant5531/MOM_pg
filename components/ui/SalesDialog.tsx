"use client";

import { useState } from "react";
import { Mail, Phone, MessageSquare, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import Dialog from "./Dialog";
import { sendSalesEmail } from "@/app/actions/sendSalesEmail";
import { toast } from "react-hot-toast";

export default function SalesDialog({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        message: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            const result = await sendSalesEmail(formData);
            
            if (result.success) {
                setIsSuccess(true);
                setTimeout(() => {
                    setIsSuccess(false);
                    onClose();
                    setFormData({ name: "", email: "", company: "", message: "" });
                }, 3000);
            } else {
                setError(result.message || "Failed to send email");
                toast.error(result.message || "Failed to send email");
            }
        } catch (err) {
            setError("Something went wrong. Please try again later.");
            toast.error("Something went wrong");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Dialog
            isOpen={isOpen}
            onClose={onClose}
            title="Talk to our Sales Team"
            description="Complete the form below and a representative will contact you within 24 hours."
            maxWidth="max-w-2xl"
        >
            {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                    <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-2">
                        <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Message Sent!</h3>
                    <p className="text-slate-500 max-w-sm">
                        Thank you for reaching out. Our team will get back to you shortly at {formData.email}.
                    </p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                    {error && (
                        <div className="p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-3 text-red-600 text-sm font-medium animate-shake">
                            <AlertCircle size={18} />
                            {error}
                        </div>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Full Name</label>
                            <input
                                required
                                type="text"
                                placeholder="Enter Your Name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-4 py-3 bg-slate-50 border-none rounded-2xl text-sm font-bold text-slate-700 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Work Email</label>
                            <input
                                required
                                type="email"
                                placeholder="you@company.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-4 py-3 bg-slate-50 border-none rounded-2xl text-sm font-bold text-slate-700 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Company Name</label>
                        <input
                            required
                            type="text"
                            placeholder="Enter Your Company Name"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full px-4 py-3 bg-slate-50 border-none rounded-2xl text-sm font-bold text-slate-700 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                        />
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest">How can we help?</label>
                        <textarea
                            required
                            rows={4}
                            placeholder="Tell us about your team's needs..."
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full px-4 py-3 bg-slate-50 border-none rounded-2xl text-sm font-bold text-slate-700 focus:ring-2 focus:ring-indigo-500/20 transition-all resize-none"
                        />
                    </div>

                    <div className="flex flex-wrap gap-y-8 gap-x-12 py-8 border-t border-slate-100 mt-8">
                        <div className="flex items-start gap-4 text-slate-600 min-w-[240px] flex-1">
                            <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center shrink-0 shadow-sm shadow-indigo-500/5">
                                <Mail size={20} className="text-indigo-600" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-2">Email Us</span>
                                <span className="text-sm font-bold text-slate-700 break-all lg:break-normal">mom.management.sales@gmail.com</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 text-slate-600 min-w-[180px]">
                            <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center shrink-0 shadow-sm shadow-indigo-500/5">
                                <Phone size={20} className="text-indigo-600" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-2">Call Us</span>
                                <span className="text-sm font-bold text-slate-700 whitespace-nowrap">8780424597</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 text-slate-600 min-w-[180px]">
                            <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center shrink-0 shadow-sm shadow-indigo-500/5">
                                <MessageSquare size={20} className="text-indigo-600" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-2">Support</span>
                                <span className="text-sm font-bold text-slate-700 whitespace-nowrap">24/7 Live Support</span>
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold text-sm shadow-xl shadow-indigo-500/20 transition-all active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                        {isSubmitting ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                </form>
            )}
        </Dialog>
    );
}

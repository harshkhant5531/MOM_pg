"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
    ArrowLeft,
    Send,
    Mail,
    Phone,
    MapPin,
    CheckCircle2,
    Lock,
    Globe
} from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSuccess(true);
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 relative overflow-hidden flex flex-col">
            {/* Background Decoration */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-100 rounded-full filter blur-3xl"></div>
            </div>

            {/* Header/Nav */}
            <header className="relative z-20 max-w-7xl mx-auto w-full px-6 py-8">
                <button
                    onClick={() => router.push("/")}
                    className="group flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-medium transition-colors"
                >
                    <div className="p-2 bg-white rounded-lg shadow-sm group-hover:bg-indigo-50 transition-colors">
                        <ArrowLeft size={18} />
                    </div>
                    Back to Home
                </button>
            </header>

            <main className="relative z-10 flex-1 max-w-7xl mx-auto w-full px-6 py-12 lg:py-20">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-12"
                    >
                        <div>
                            <div className="inline-block px-4 py-2 bg-indigo-50 rounded-full mb-6">
                                <span className="text-sm font-bold text-indigo-600 uppercase tracking-widest">Talk to Sales</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
                                Scale your team's <span className="text-indigo-600">productivity.</span>
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                                Connect with our product experts to see how MOM can transform your organization's meeting workflow and documentation.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 bg-white rounded-2xl shadow-md border border-slate-100 flex items-center justify-center shrink-0">
                                    <Mail className="text-indigo-600" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Email us</h4>
                                    <p className="text-slate-500">mom.management.sales@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 bg-white rounded-2xl shadow-md border border-slate-100 flex items-center justify-center shrink-0">
                                    <Phone className="text-indigo-600" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Call us</h4>
                                    <p className="text-slate-500">+91 8780424597</p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 bg-white rounded-2xl shadow-md border border-slate-100 flex items-center justify-center shrink-0">
                                    <MapPin className="text-indigo-600" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Visit us</h4>
                                    <p className="text-slate-500">Darshan University<br />Rajkot, Gujarat, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-slate-200">
                            <div className="flex items-center gap-6 text-slate-400">
                                <div className="flex items-center gap-2">
                                    <Lock size={16} />
                                    <span className="text-xs font-bold uppercase tracking-wider">Enterprise-Grade</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Globe size={16} />
                                    <span className="text-xs font-bold uppercase tracking-wider">Global Support</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-[40px] shadow-2xl p-8 md:p-12 border border-slate-100 relative"
                    >
                        {isSuccess ? (
                            <div className="py-20 text-center space-y-6">
                                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                                    <CheckCircle2 size={40} />
                                </div>
                                <h2 className="text-3xl font-bold text-slate-900">Request Received!</h2>
                                <p className="text-slate-500 max-w-sm mx-auto">
                                    Thank you for your interest. One of our experts will contact you within the next 24 business hours.
                                </p>
                                <button
                                    onClick={() => setIsSuccess(false)}
                                    className="px-8 py-4 bg-slate-100 text-slate-600 font-bold rounded-2xl hover:bg-slate-200 transition-all"
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Full Name</label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="Harsh Khant"
                                            className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl text-sm font-bold focus:ring-4 focus:ring-indigo-500/5 transition-all outline-none"
                                            value={formData.name}
                                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Work Email</label>
                                        <input
                                            required
                                            type="email"
                                            placeholder="harsh@gmail.com"
                                            className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl text-sm font-bold focus:ring-4 focus:ring-indigo-500/5 transition-all outline-none"
                                            value={formData.email}
                                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Company Name</label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="Enter your organization"
                                        className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl text-sm font-bold focus:ring-4 focus:ring-indigo-500/5 transition-all outline-none"
                                        value={formData.company}
                                        onChange={e => setFormData({ ...formData, company: e.target.value })}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">How can we help?</label>
                                    <textarea
                                        required
                                        rows={5}
                                        placeholder="Tell us about your team and requirements..."
                                        className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl text-sm font-bold focus:ring-4 focus:ring-indigo-500/5 transition-all resize-none outline-none"
                                        value={formData.message}
                                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                                    />
                                </div>

                                <button
                                    disabled={isSubmitting}
                                    className="w-full py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-[24px] font-black text-sm uppercase tracking-widest shadow-xl shadow-indigo-600/20 transition-all active:scale-[0.98] flex items-center justify-center gap-3"
                                >
                                    {isSubmitting ? (
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            Send Message
                                            <Send size={18} />
                                        </>
                                    )}
                                </button>

                                <p className="text-[10px] text-slate-400 text-center mt-6 uppercase font-bold tracking-widest leading-relaxed">
                                    By clicking "Send Message", you agree to our <br />
                                    <span className="text-indigo-600 cursor-pointer">Privacy Policy</span> and <span className="text-indigo-600 cursor-pointer">Terms of Service</span>.
                                </p>
                            </form>
                        )}
                    </motion.div>
                </div>
            </main>

            <footer className="relative z-10 max-w-7xl mx-auto w-full px-6 py-12 text-center text-slate-400 text-xs font-bold uppercase tracking-widest">
                © 2026 MOM Management. Built for high-performance teams.
            </footer>
        </div>
    );
}

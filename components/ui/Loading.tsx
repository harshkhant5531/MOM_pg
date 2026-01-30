"use client";

import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[400px] text-slate-400 gap-4">
            <Loader2 size={32} className="animate-spin text-blue-500" />
            <span className="text-lg font-bold text-slate-400">Syncing dashboard data...</span>
        </div>
    );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, ReactNode } from "react";

interface DialogProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    description?: string;
    children: ReactNode;
    footer?: ReactNode;
    maxWidth?: string;
}

export default function Dialog({
    isOpen,
    onClose,
    title,
    description,
    children,
    footer,
    maxWidth = "max-w-xl"
}: DialogProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className={`relative w-full ${maxWidth} bg-white dark:bg-gray-900 rounded-[32px] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border border-slate-100 dark:border-gray-800`}
                    >
                        {(title || description) && (
                            <div className="p-8 border-b border-slate-50 dark:border-gray-800 flex items-start justify-between shrink-0">
                                <div>
                                    {title && (
                                        <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                                            {title}
                                        </h2>
                                    )}
                                    {description && (
                                        <p className="text-slate-500 dark:text-gray-400 text-sm mt-1">
                                            {description}
                                        </p>
                                    )}
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-slate-50 dark:hover:bg-gray-800 rounded-xl text-slate-400 transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                        )}
                        
                        {!title && !description && (
                             <button
                                onClick={onClose}
                                className="absolute top-6 right-6 p-2 hover:bg-slate-50 dark:hover:bg-gray-800 rounded-xl text-slate-400 transition-colors z-10"
                            >
                                <X size={20} />
                            </button>
                        )}

                        <div className="flex-1 overflow-y-auto p-8">
                            {children}
                        </div>

                        {footer && (
                            <div className="p-8 border-t border-slate-50 dark:border-gray-800 bg-slate-50/50 dark:bg-gray-800/30 flex justify-end gap-3 shrink-0">
                                {footer}
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

"use client";

import Dialog from "./Dialog";
import { AlertTriangle, CheckCircle2, Info } from "lucide-react";

interface ConfirmDialogProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    message: string;
    type?: "danger" | "warning" | "success" | "info";
    confirmText?: string;
    cancelText?: string;
    isLoading?: boolean;
}

export default function ConfirmDialog({
    isOpen,
    onClose,
    onConfirm,
    title,
    message,
    type = "info",
    confirmText = "Confirm",
    cancelText = "Cancel",
    isLoading = false
}: ConfirmDialogProps) {
    const getIcon = () => {
        switch (type) {
            case "danger":
            case "warning":
                return <AlertTriangle size={32} className={type === "danger" ? "text-red-500" : "text-amber-500"} />;
            case "success":
                return <CheckCircle2 size={32} className="text-green-500" />;
            default:
                return <Info size={32} className="text-blue-500" />;
        }
    };

    const getConfirmButtonStyle = () => {
        switch (type) {
            case "danger":
                return "bg-red-600 hover:bg-red-700 shadow-red-500/20";
            case "warning":
                return "bg-amber-600 hover:bg-amber-700 shadow-amber-500/20";
            case "success":
                return "bg-green-600 hover:bg-green-700 shadow-green-500/20";
            default:
                return "bg-blue-600 hover:bg-blue-700 shadow-blue-500/20";
        }
    };

    return (
        <Dialog
            isOpen={isOpen}
            onClose={onClose}
            maxWidth="max-w-md"
            footer={
                <>
                    <button
                        onClick={onClose}
                        disabled={isLoading}
                        className="px-6 py-3 text-sm font-bold text-slate-500 hover:bg-slate-100 dark:hover:bg-gray-800 rounded-2xl transition-colors disabled:opacity-50"
                    >
                        {cancelText}
                    </button>
                    <button
                        onClick={() => {
                            onConfirm();
                        }}
                        disabled={isLoading}
                        className={`px-6 py-3 text-sm font-bold text-white rounded-2xl shadow-xl transition-all active:scale-95 flex items-center gap-2 disabled:opacity-50 ${getConfirmButtonStyle()}`}
                    >
                        {confirmText}
                    </button>
                </>
            }
        >
            <div className="flex flex-col items-center text-center space-y-4 py-4">
                <div className={`w-16 h-16 rounded-3xl flex items-center justify-center ${
                    type === 'danger' ? 'bg-red-50 dark:bg-red-900/20' :
                    type === 'warning' ? 'bg-amber-50 dark:bg-amber-900/20' :
                    type === 'success' ? 'bg-green-50 dark:bg-green-900/20' :
                    'bg-blue-50 dark:bg-blue-900/20'
                }`}>
                    {getIcon()}
                </div>
                <div className="space-y-2">
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">{title}</h3>
                    <p className="text-slate-500 dark:text-gray-400 font-medium leading-relaxed">{message}</p>
                </div>
            </div>
        </Dialog>
    );
}

"use client";

import { useState, useEffect } from "react";
import Dialog from "./Dialog";

interface PromptDialogProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (value: string) => void;
    title: string;
    message: string;
    placeholder?: string;
    defaultValue?: string;
    confirmText?: string;
    cancelText?: string;
    isLoading?: boolean;
}

export default function PromptDialog({
    isOpen,
    onClose,
    onConfirm,
    title,
    message,
    placeholder = "Enter value...",
    defaultValue = "",
    confirmText = "Submit",
    cancelText = "Cancel",
    isLoading = false
}: PromptDialogProps) {
    const [value, setValue] = useState(defaultValue);

    useEffect(() => {
        if (isOpen) {
            setValue(defaultValue);
        }
    }, [isOpen, defaultValue]);

    return (
        <Dialog
            isOpen={isOpen}
            onClose={onClose}
            maxWidth="max-w-md"
            title={title}
            description={message}
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
                        onClick={() => onConfirm(value)}
                        disabled={isLoading || !value.trim()}
                        className="px-6 py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-2xl shadow-xl shadow-blue-500/20 transition-all active:scale-95 disabled:opacity-50"
                    >
                        {confirmText}
                    </button>
                </>
            }
        >
            <div className="py-2">
                <input
                    autoFocus
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder={placeholder}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-gray-800 border-none rounded-2xl focus:ring-4 focus:ring-blue-500/5 transition-all text-sm font-bold text-slate-700 dark:text-white"
                />
            </div>
        </Dialog>
    );
}


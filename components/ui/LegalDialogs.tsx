"use client";

import { useState } from "react";
import Dialog from "./Dialog";

export default function LegalDialogs() {
    const [privacyOpen, setPrivacyOpen] = useState(false);
    const [termsOpen, setTermsOpen] = useState(false);

    return (
        <>
            <div className="flex justify-center gap-6 mt-6">
                <button 
                    onClick={() => setPrivacyOpen(true)} 
                    className="text-xs text-slate-400 hover:text-indigo-600 transition-colors cursor-pointer"
                >
                    Privacy Policy
                </button>
                <button 
                    onClick={() => setTermsOpen(true)} 
                    className="text-xs text-slate-400 hover:text-indigo-600 transition-colors cursor-pointer"
                >
                    Terms of Service
                </button>
            </div>

            <Dialog 
                isOpen={privacyOpen} 
                onClose={() => setPrivacyOpen(false)} 
                title="Privacy Policy"
                description="Last updated: March 15, 2026"
            >
                <div className="space-y-6 text-slate-600 dark:text-gray-300">
                    <section>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">1. Information We Collect</h3>
                        <p>We collect information you provide directly to us when you create an account, such as your name, email address, and department details. We also collect meeting metadata and minutes you record using our service.</p>
                    </section>
                    <section>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">2. How We Use Information</h3>
                        <p>We use the collected information to:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Provide, maintain, and improve our services.</li>
                            <li>Enable meeting scheduling and management.</li>
                            <li>Send technical notices, updates, and security alerts.</li>
                            <li>Respond to your comments and questions.</li>
                        </ul>
                    </section>
                    <section>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">3. Data Security</h3>
                        <p>We implement enterprise-grade security measures including 256-bit encryption and secure database protocols to protect your data from unauthorized access, alteration, or disclosure.</p>
                    </section>
                    <section>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">4. Your Rights</h3>
                        <p>You have the right to access, update, or delete your personal information at any time through your account settings or by contacting your system administrator.</p>
                    </section>
                </div>
            </Dialog>

            <Dialog 
                isOpen={termsOpen} 
                onClose={() => setTermsOpen(false)} 
                title="Terms of Service"
                description="Last updated: March 15, 2026"
            >
                <div className="space-y-6 text-slate-600 dark:text-gray-300">
                    <section>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">1. Acceptance of Terms</h3>
                        <p>By accessing or using the MOM System, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
                    </section>
                    <section>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">2. User Accounts</h3>
                        <p>You are responsible for safeguarding the password that you use to access the service and for any activities or actions under your account.</p>
                    </section>
                    <section>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">3. Intellectual Property</h3>
                        <p>The MOM System and its original content, features, and functionality are and will remain the exclusive property of MOM Management and its licensors.</p>
                    </section>
                    <section>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">4. Limitation of Liability</h3>
                        <p>In no event shall MOM Management be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service.</p>
                    </section>
                    <section>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">5. Governing Law</h3>
                        <p>These terms shall be governed and construed in accordance with the laws of the jurisdiction in which the company is registered, without regard to its conflict of law provisions.</p>
                    </section>
                </div>
            </Dialog>
        </>
    );
}

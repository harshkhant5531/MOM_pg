"use server";

import nodemailer from "nodemailer";
import dns from "dns";
import net from "net";
import { promisify } from "util";

const resolveMx = promisify(dns.resolveMx);

async function deepVerifyEmail(email: string): Promise<{ valid: boolean; message?: string }> {
    const domain = email.split("@")[1].toLowerCase();
    
    // Only perform deep check for major providers like Gmail to avoid being blacklisted by others
    const isMajorProvider = domain === "gmail.com" || domain === "googlemail.com";
    if (!isMajorProvider) return { valid: true };

    try {
        const mxRecords = await resolveMx(domain);
        if (!mxRecords || mxRecords.length === 0) return { valid: false, message: "Domain has no mail servers" };
        
        // Sort by priority and pick the best one
        const host = mxRecords.sort((a, b) => a.priority - b.priority)[0].exchange;
        
        return new Promise((resolve) => {
            const socket = net.createConnection(25, host);
            let step = 0;
            
            socket.setTimeout(4000); // 4 seconds timeout for verification
            
            const cleanup = () => {
                if (!socket.destroyed) {
                    socket.write(`QUIT\r\n`);
                    socket.destroy();
                }
            };

            socket.on("timeout", () => { cleanup(); resolve({ valid: true }); }); 
            socket.on("error", () => { cleanup(); resolve({ valid: true }); });

            socket.on("data", (data) => {
                const response = data.toString();
                
                // SMTP Workflow
                if (step === 0 && response.startsWith("220")) {
                    socket.write(`HELO mom-management.com\r\n`);
                    step++;
                } else if (step === 1 && response.startsWith("250")) {
                    socket.write(`MAIL FROM:<verify@mom-management.com>\r\n`);
                    step++;
                } else if (step === 2 && response.startsWith("250")) {
                    socket.write(`RCPT TO:<${email}>\r\n`);
                    step++;
                } else if (step === 3) {
                    cleanup();
                    // 250 means user exists, 550 means user definitely doesn't
                    if (response.startsWith("250")) {
                        resolve({ valid: true });
                    } else if (response.includes("550")) {
                         resolve({ valid: false, message: "This email account does not exist on Google." });
                    } else {
                        resolve({ valid: true }); // Ambiguous answer, let it pass
                    }
                }
            });
        });
    } catch (e) {
        return { valid: true }; // Fallback to allow sending if check crashes
    }
}

async function isEmailValid(email: string): Promise<{ valid: boolean; message?: string }> {
    // 1. Basic Regex Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return { valid: false, message: "Invalid email format" };
    }

    // 2. Domain Validation (Check for MX records)
    const domain = email.split("@")[1];
    try {
        const mxRecords = await resolveMx(domain);
        if (!mxRecords || mxRecords.length === 0) {
            return { valid: false, message: "Email domain does not exist or cannot receive mail" };
        }
    } catch (error) {
        return { valid: false, message: "Invalid email domain or no mail server found" };
    }

    // 3. Deep Verification for Gmail
    return deepVerifyEmail(email);
}

export async function sendSalesEmail(formData: {
    name: string;
    email: string;
    company: string;
    message: string;
}) {
    // Validate email first
    const validation = await isEmailValid(formData.email);
    if (!validation.valid) {
        return { success: false, message: validation.message };
    }

    // Configure your SMTP transporter here
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "mom.management.sales@gmail.com",
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    const mailOptions = {
        from: `"${formData.name}" <${formData.email}>`,
        to: "mom.management.sales@gmail.com",
        replyTo: formData.email,
        subject: `New Sales Inquiry from ${formData.company}`,
        text: `
            Name: ${formData.name}
            Email: ${formData.email}
            Company: ${formData.company}
            
            Message:
            ${formData.message}
        `,
        html: `
            <div style="font-family: sans-serif; padding: 20px; color: #333;">
                <h2 style="color: #4f46e5;">New Sales Inquiry</h2>
                <p><strong>Name:</strong> ${formData.name}</p>
                <p><strong>Email:</strong> ${formData.email}</p>
                <p><strong>Company:</strong> ${formData.company}</p>
                <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
                <p><strong>Message:</strong></p>
                <div style="background: #f9fafb; padding: 15px; border-radius: 8px;">
                    ${formData.message.replace(/\n/g, '<br>')}
                </div>
            </div>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return { success: true };
    } catch (error: any) {
        console.error("Error sending email:", error);
        
        // Provide more detailed error message for authentication issues
        if (error.code === 'EAUTH') {
            return { 
                success: false, 
                message: "Authentication failed. Please verify the EMAIL_PASSWORD in .env is a 16-character App Password." 
            };
        }

        return { 
            success: false, 
            message: "Failed to send email. Please try again later." 
        };
    }
}

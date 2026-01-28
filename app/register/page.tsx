"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Mail,
  Lock,
  User,
  ArrowRight,
  Shield,
  Building,
  Phone,
} from "lucide-react";

import { registerUser } from "@/app/actions/register";

// ... (imports remain the same)

export default function RegisterPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    password: "",
    confirmPassword: "",
    role: "staff",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubmit = async () => {
    if (!agreedToTerms) {
      alert("Please agree to the terms and conditions");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setIsLoading(true);

    try {
      // Call Server Action directly
      const result = await registerUser(formData);

      if (!result.success) {
        throw new Error(result.message);
      }

      // Success
      alert("Account created successfully!");
      router.push("/login");
    } catch (error: any) {
      alert(error.message || "Failed to register. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const roleIcons: { [key: string]: any } = {
    admin: Shield,
    convener: User,
    staff: User,
  };

  return (
    <div className="min-h-screen flex bg-slate-50">
      {/* Left Panel - Brand Section */}
      <div className="hidden lg:flex lg:w-1/2 bg-indigo-600 items-center justify-center p-12 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 text-center max-w-lg">
          <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
            <svg
              className="w-12 h-12 text-indigo-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>

          <h1 className="text-5xl font-bold text-white mb-6">
            Join MOM Management
          </h1>
          <p className="text-xl text-indigo-100 leading-relaxed mb-12">
            Start managing your meetings more efficiently. Create your account
            and experience the difference.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <h3 className="text-white font-semibold mb-4">What you'll get:</h3>
            <ul className="space-y-3 text-left">
              {[
                "Unlimited meeting management",
                "Smart action item tracking",
                "Secure document storage",
                "Real-time collaboration",
                "24/7 customer support",
              ].map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-indigo-100"
                >
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Right Panel - Register Form */}
      <div className="flex-1 flex items-center justify-center p-8 overflow-y-auto">
        <div className="w-full max-w-md py-8">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-8">
            <div className="w-16 h-16 bg-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              MOM Management
            </h2>
          </div>

          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">
              Create your account
            </h2>
            <p className="text-slate-600">
              Get started with your free 14-day trial
            </p>
          </div>

          {/* Form */}
          <div className="space-y-5">
            {/* Full Name */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={formData.fullName}
                  onChange={(e) =>
                    handleInputChange("fullName", e.target.value)
                  }
                  required
                  className="w-full h-12 pl-12 pr-4 rounded-lg border-2 border-slate-200 bg-white focus:border-indigo-500 focus:outline-none transition-colors text-slate-900 placeholder-slate-400"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">
                Email address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  className="w-full h-12 pl-12 pr-4 rounded-lg border-2 border-slate-200 bg-white focus:border-indigo-500 focus:outline-none transition-colors text-slate-900 placeholder-slate-400"
                />
              </div>
            </div>

            {/* Phone and Organization */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">
                  Phone
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="tel"
                    placeholder="+1 234 567"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="w-full h-12 pl-12 pr-4 rounded-lg border-2 border-slate-200 bg-white focus:border-indigo-500 focus:outline-none transition-colors text-slate-900 placeholder-slate-400"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">
                  Organization
                </label>
                <div className="relative">
                  <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Company"
                    value={formData.organization}
                    onChange={(e) =>
                      handleInputChange("organization", e.target.value)
                    }
                    className="w-full h-12 pl-12 pr-4 rounded-lg border-2 border-slate-200 bg-white focus:border-indigo-500 focus:outline-none transition-colors text-slate-900 placeholder-slate-400"
                  />
                </div>
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="password"
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                  required
                  className="w-full h-12 pl-12 pr-4 rounded-lg border-2 border-slate-200 bg-white focus:border-indigo-500 focus:outline-none transition-colors text-slate-900 placeholder-slate-400"
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="password"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    handleInputChange("confirmPassword", e.target.value)
                  }
                  required
                  className="w-full h-12 pl-12 pr-4 rounded-lg border-2 border-slate-200 bg-white focus:border-indigo-500 focus:outline-none transition-colors text-slate-900 placeholder-slate-400"
                />
              </div>
            </div>

            {/* Role Selection */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-slate-700">
                Select your role
              </label>
              <div className="grid grid-cols-3 gap-3">
                {["admin", "convener", "staff"].map((r) => {
                  const Icon = roleIcons[r];
                  return (
                    <label
                      key={r}
                      className={`cursor-pointer border-2 rounded-xl p-4 text-center transition-all hover:scale-105 ${formData.role === r
                        ? "border-indigo-500 bg-indigo-50 shadow-md"
                        : "border-slate-200 bg-white hover:border-slate-300"
                        }`}
                    >
                      <input
                        type="radio"
                        name="role"
                        value={r}
                        checked={formData.role === r}
                        onChange={() => handleInputChange("role", r)}
                        className="hidden"
                      />
                      <Icon
                        className={`w-6 h-6 mx-auto mb-2 ${formData.role === r
                          ? "text-indigo-600"
                          : "text-slate-400"
                          }`}
                      />
                      <span
                        className={`text-sm font-semibold capitalize block ${formData.role === r
                          ? "text-indigo-600"
                          : "text-slate-700"
                          }`}
                      >
                        {r}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="terms"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="w-5 h-5 mt-0.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
              />
              <label
                htmlFor="terms"
                className="text-sm text-slate-600 cursor-pointer"
              >
                I agree to the{" "}
                <button className="text-indigo-600 hover:text-indigo-700 font-medium">
                  Terms of Service
                </button>{" "}
                and{" "}
                <button className="text-indigo-600 hover:text-indigo-700 font-medium">
                  Privacy Policy
                </button>
              </label>
            </div>

            <button
              onClick={handleSubmit}
              disabled={isLoading || !agreedToTerms}
              className="group w-full h-12 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span>Creating account...</span>
                </>
              ) : (
                <>
                  <span>Create Account</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-sm text-slate-600">
              Already have an account?{" "}
              <button
                className="text-indigo-600 hover:text-indigo-700 font-semibold cursor-pointer"
                onClick={() => router.push("/login")}
              >
                Sign in
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

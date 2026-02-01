"use client";

import { useRouter } from "next/navigation";

import {
  Calendar,
  CheckSquare,
  FileText,
  ArrowRight,
  Clock,
  TrendingUp,
  Lock,
  Zap,
} from "lucide-react";

export default function GetStartedPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-100 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
              <FileText className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-2xl font-bold text-slate-900">MOM</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.push("/login")}
              className="cursor-pointer border-2 rounded-xl px-5 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
            >
              Sign In
            </button>
            <button
              onClick={() => router.push("/login")}
              className=" cursor-pointer px-5 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-lg hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg"
            >
              Get Started
            </button>
          </div>
        </header>

        <section className="max-w-7xl mx-auto px-6 pt-20 pb-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-200">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-slate-700">
                  Powering 10,000+ productive meetings daily
                </span>
              </div>
            </div>

            <h1 className="text-6xl md:text-7xl font-extrabold text-slate-900 mb-8 leading-tight">
              Meeting Management
              <br />
              <span className="text-indigo-600">Made Simple</span>
            </h1>

            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Streamline your meetings from start to finish. Organize, track,
              and collaborate with a platform built for modern teams.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              <button
                onClick={() => router.push("/login")}

                className=" cursor-pointer group px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => router.push("/demo")}
                className=" cursor-pointer px-8 py-4 bg-white text-slate-700 font-semibold rounded-xl border-2 border-slate-200 hover:border-indigo-300 hover:text-indigo-600 transition-all shadow-sm hover:shadow-md"
              >
                Watch Demo
              </button>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Free 14-day trial</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>No credit card required</span>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-indigo-200">
              <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Calendar className="w-7 h-7 text-indigo-600" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Smart Scheduling
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Create meetings effortlessly with intelligent role assignments
                and automated reminders that keep everyone aligned.
              </p>
              <button className="text-indigo-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-indigo-200">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CheckSquare
                  className="w-7 h-7 text-purple-600"
                  strokeWidth={2}
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Action Tracking
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Monitor tasks and responsibilities with real-time updates. Keep
                your team accountable and projects on track.
              </p>
              <button className="text-purple-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-indigo-200">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FileText className="w-7 h-7 text-blue-600" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Secure Storage
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Store meeting minutes with enterprise-grade security. Access
                your documentation anytime, anywhere, on any device.
              </p>
              <button className="text-blue-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-12">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">
                  60s
                </div>
                <div className="text-slate-600">Average setup time</div>
              </div>
              <div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">
                  10k+
                </div>
                <div className="text-slate-600">Active teams</div>
              </div>
              <div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">
                  99.9%
                </div>
                <div className="text-slate-600">Uptime guarantee</div>
              </div>
              <div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">
                  256-bit
                </div>
                <div className="text-slate-600">Encryption</div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div className="bg-indigo-600 rounded-3xl shadow-2xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Ready to get started?
              </h2>
              <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                Join thousands of teams who've transformed their meeting
                workflow. Start your free trial today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => router.push("/login")}
                  className=" cursor-pointer px-8 py-4 bg-white text-indigo-600 font-bold rounded-xl hover:bg-indigo-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Start Free Trial
                </button>
                <button
                  onClick={() => router.push("/contact")}
                  className="cursor-pointer px-8 py-4 bg-indigo-700 text-white font-semibold rounded-xl hover:bg-indigo-800 transition-all border-2 border-indigo-500"
                >
                  Talk to Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        <footer className="max-w-7xl mx-auto px-6 pb-12 text-center text-slate-500 text-sm">
          <p>© 2026 MOM Management. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

// src/app/admin/dashboard/layout.js
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = 0;

import "../../globals.css";
import Sidebar from "@/components/admin/Sidebar";

export const metadata = {
  title: "Admin Dashboard | Fiable",
  description: "Administrative control center for Fiable Building Solutions.",
};

export default function AdminDashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#F3F1EB] text-[#0F1222] selection:bg-blue-100">
      {/* Background halo */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 -top-40 h-80 blur-3xl z-0"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 30%, rgba(67,118,187,.15), rgba(67,118,187,0) 70%)",
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Persistent Sidebar */}
          <Sidebar />

          {/* Main content Area */}
          <main className="flex-1 min-w-0 py-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}

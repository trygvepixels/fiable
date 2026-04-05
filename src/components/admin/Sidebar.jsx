"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import {
  FiMenu,
  FiX,
  FiMapPin,
  FiStar,
  FiLogOut,
  FiChevronRight,
  FiPhone,
  FiLayout,
  FiBriefcase,
  FiBarChart2,
  FiCpu,
} from "react-icons/fi";
import {
  MdOutlineSpaceDashboard,
  MdOutlineArticle,
  MdWorkOutline,
} from "react-icons/md";
import { HiOutlineClipboardList } from "react-icons/hi";
import { RiServiceLine, RiTeamLine } from "react-icons/ri";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    { href: "/admin/dashboard", icon: <MdOutlineSpaceDashboard />, label: "Overview" },
    { href: "/admin/dashboard/hero", icon: <FiLayout />, label: "Banner / Hero" },
    { href: "/admin/dashboard/blogs", icon: <MdOutlineArticle />, label: "Blogs / Insights" },
    { href: "/admin/dashboard/projects", icon: <HiOutlineClipboardList />, label: "Projects" },
    { href: "/admin/dashboard/feature-projects", icon: <FiStar />, label: "Featured" },
    { href: "/admin/dashboard/services", icon: <RiServiceLine />, label: "Services" },
    { href: "/admin/dashboard/capabilities", icon: <FiCpu />, label: "Capabilities" },
    { href: "/admin/dashboard/testimonials", icon: <BiSolidQuoteAltLeft />, label: "Testimonials" },
    { href: "/admin/dashboard/team", icon: <RiTeamLine />, label: "Team" },
    { href: "/admin/dashboard/jobs", icon: <MdWorkOutline />, label: "Careers / Jobs" },
    { href: "/admin/dashboard/locations", icon: <FiMapPin />, label: "Locations" },
    { href: "/admin/dashboard/stats", icon: <FiBarChart2 />, label: "Stats / Counters" },
    { href: "/admin/dashboard/client-logos", icon: <FiBriefcase />, label: "Client Logos" },
    { href: "/admin/dashboard/phone", icon: <FiPhone />, label: "Contact Phone" },
  ];

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/logout", { method: "POST" });
      if (res.ok) {
        router.push("/admin"); // Redirect to login
        router.refresh();
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const NavContent = () => (
    <nav className="flex flex-col h-full bg-white md:bg-transparent">
      <div className="px-4 py-6 md:pt-8 flex items-center justify-between">
        <span className="text-xl font-bold tracking-tight text-blue-600 md:hidden">fiable admin</span>
        <button 
          onClick={() => setIsOpen(false)}
          className="md:hidden p-2 text-zinc-500 hover:text-zinc-800"
        >
          <FiX className="w-6 h-6" />
        </button>
      </div>

      <div className="px-4 py-3 text-xs uppercase font-semibold tracking-wider text-zinc-400 select-none">
        Manage
      </div>
      
      <ul className="flex-1 px-3 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`group flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md shadow-blue-200/50"
                    : "text-zinc-600 hover:bg-zinc-100/80 hover:text-zinc-900"
                }`}
              >
                <span className={`text-lg shrink-0 ${isActive ? "text-white" : "text-zinc-400 group-hover:text-blue-500"}`}>
                  {item.icon}
                </span>
                <span className="truncate">{item.label}</span>
                {isActive && (
                  <FiChevronRight className="ml-auto w-4 h-4 opacity-50" />
                )}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="p-4 mt-auto border-t border-zinc-100 bg-zinc-50/50">
        <div className="px-3 py-2 text-[10px] uppercase font-bold tracking-[0.1em] text-zinc-400 select-none mb-1">
          Account Control
        </div>
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-between group rounded-2xl px-4 py-3 text-sm font-bold text-red-600 hover:bg-red-50 hover:text-red-700 transition-all duration-300"
        >
          <div className="flex items-center gap-3">
            <FiLogOut className="text-xl transform group-hover:-translate-x-1 transition-transform" />
            <span>Sign Out</span>
          </div>
          <FiChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
      </div>
    </nav>
  );

  return (
    <>
      {/* Mobile Toggle */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="p-3 bg-white rounded-xl shadow-lg shadow-zinc-200/50 border border-zinc-100 text-zinc-700 active:scale-95 transition-transform"
        >
          <FiMenu className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-zinc-900/40 backdrop-blur-sm z-[60] transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed inset-y-0 left-0 z-[70] w-64 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:static md:translate-x-0 md:bg-transparent md:w-[240px] md:pt-16`}
      >
        <div className="h-full md:h-auto md:sticky md:top-20 bg-white md:rounded-3xl md:border md:border-zinc-200/60 md:shadow-sm overflow-hidden flex flex-col max-h-[calc(100vh-100px)]">
          <NavContent />
        </div>
      </aside>
    </>
  );
}

"use client";

import Link from "next/link";
import {
  FiChevronRight,
  FiStar,
  FiMapPin,
  FiBriefcase,
} from "react-icons/fi";
import {
  MdOutlineArticle,
  MdWorkOutline,
} from "react-icons/md";
import { HiOutlineClipboardList } from "react-icons/hi";
import { RiServiceLine, RiTeamLine } from "react-icons/ri";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

export default function AdminDashboard() {
  const quickActions = [
    {
      href: "/admin/dashboard/blogs",
      icon: <MdOutlineArticle />,
      title: "Manage Blogs",
      desc: "Publish updates, case studies & insights.",
      color: "blue",
    },
    {
      href: "/admin/dashboard/jobs",
      icon: <MdWorkOutline />,
      title: "Manage Jobs",
      desc: "Post openings for engineers, site staff & more.",
      color: "emerald",
    },
    {
      href: "/admin/dashboard/feature-projects",
      icon: <FiStar />,
      title: "Feature Projects",
      desc: "Showcase priority builds on the website.",
      color: "amber",
    },
    {
      href: "/admin/dashboard/projects",
      icon: <HiOutlineClipboardList />,
      title: "Projects",
      desc: "Add new projects, images & progress.",
      color: "indigo",
    },
    {
      href: "/admin/dashboard/services",
      icon: <RiServiceLine />,
      title: "Services",
      desc: "Manage service pages & ordering.",
      color: "cyan",
    },
    {
      href: "/admin/dashboard/team",
      icon: <RiTeamLine />,
      title: "Team",
      desc: "Update team structure & bios.",
      color: "rose",
    },
    {
      href: "/admin/dashboard/testimonials",
      icon: <BiSolidQuoteAltLeft />,
      title: "Testimonials",
      desc: "Add client quotes & approvals.",
      color: "violet",
    },
    {
      href: "/admin/dashboard/client-logos",
      icon: <FiBriefcase />,
      title: "Client Logos",
      desc: "Manage brand logos for case studies.",
      color: "slate",
    },
    {
      href: "/admin/dashboard/locations",
      icon: <FiMapPin />,
      title: "Locations",
      desc: "Manage company office locations.",
      color: "orange",
    },
    {
      href: "/admin/dashboard/hero",
      icon: <RiServiceLine />,
      title: "Manage Banner",
      desc: "Customize home hero section.",
      color: "sky",
    },
  ];

  return (
    <div className="space-y-10">
      {/* Welcome Panel */}
      <section className="relative overflow-hidden rounded-[2.5rem] bg-white border border-zinc-200/60 p-8 md:p-12 shadow-sm transition-all hover:shadow-md group">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Control Center</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-zinc-900 mb-4">
            Welcome back, <br className="md:hidden" /> 
            <span className="text-blue-600">fiable Admin 👋</span>
          </h1>
          <p className="text-lg text-zinc-500 max-w-xl leading-relaxed">
            Your contractor-first control center. Manage your digital presence with precision, speed, and engineering clarity.
          </p>
        </div>
        
        {/* Abstract background element */}
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60 transition-all duration-700 group-hover:scale-110 group-hover:bg-blue-100" />
      </section>

      {/* Quick Actions Grid */}
      <section>
        <div className="flex items-end justify-between mb-6 px-2">
          <div>
            <h2 className="text-xl font-bold text-zinc-900">Quick Actions</h2>
            <p className="text-sm text-zinc-500">Fast-track common management tasks</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {quickActions.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative flex items-center gap-4 rounded-3xl p-5 border border-zinc-200/60 bg-white transition-all duration-300 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-zinc-50 text-zinc-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-300 transform group-hover:rotate-6">
                <span className="text-2xl">{item.icon}</span>
              </div>
              
              <div className="flex-1">
                <h3 className="font-bold text-zinc-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-snug">{item.desc}</p>
              </div>
              
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-50 text-zinc-300 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:translate-x-1">
                <FiChevronRight className="w-5 h-5" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

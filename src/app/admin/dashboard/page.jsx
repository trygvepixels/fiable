"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FiMenu,
  FiSearch,
  FiPlus,
  FiUpload,
  FiFileText,
  FiGrid,
  FiLogOut,
  FiSettings,
  FiChevronRight,
  FiStar,
  FiBriefcase,
} from "react-icons/fi";
import {
  MdOutlineSpaceDashboard,
  MdOutlineArticle,
  MdOutlineCollectionsBookmark,
} from "react-icons/md";
import {
    FiUsers,
  FiMapPin,
} from "react-icons/fi";
import {
   MdWorkOutline,
 } from "react-icons/md";
import { HiOutlineClipboardList } from "react-icons/hi";
import { RiServiceLine, RiTeamLine } from "react-icons/ri";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { TbBuildingSkyscraper } from "react-icons/tb";

 
const BRAND = {
  primary: "#4376BB", // blue brand color
  primaryDark: "#2F5685",
  primarySoft: "rgba(67,118,187,0.10)",
  ink: "#0F1222",
};

export default function AdminDashboard() {
  const [open, setOpen] = useState(false);

  // dummy data for visuals — replace with real data when you connect
  const stats = [
    { label: "Total Blogs", value: "128", delta: "+6 this week" },
    { label: "Projects", value: "54", delta: "+2 this week" },
    { label: "Drafts", value: "9", delta: "—" },
    { label: "Pending Reviews", value: "3", delta: "action needed" },
  ];

  const recentBlogs = [
    { title: "Design Systems That Scale", status: "Published", date: "Aug 13" },
    { title: "SEO Basics for 2025", status: "Draft", date: "Aug 11" },
    { title: "Faster Next.js Images", status: "Published", date: "Aug 08" },
  ];

  const recentProjects = [
    { title: "Aurora Homes", status: "Live", date: "Aug 12" },
    { title: "Cafe Botanica", status: "In Review", date: "Aug 10" },
    { title: "Vista Tower", status: "Live", date: "Aug 03" },
  ];

  return (
    <div className="min-h-screen pt- bg-[#F3F1EB] text-[#0F1222]">
      {/* background halo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 h-80 blur-3xl"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 30%, rgba(67,118,187,.20), rgba(67,118,187,0) 70%)",
        }}
      />

      {/* Topbar */}

      <div className="max-w-7xl  mx-auto px-4 sm:px-0">
        {/* Sidebar + content */}
        <div className="md:grid md:grid-cols-[220px_1fr] md:gap-8">
          {/* Sidebar */}
          <aside
            className={`${
              open ? "block" : "hidden"
            } md:block md:sticky md:top-20 self-start mt-6`}
          >
            <nav className="rounded-2xl border border-zinc-100 bg-white shadow-[0_10px_30px_rgba(17,17,26,0.04)]">
              <div className="px-4 py-3 text-xs uppercase tracking-wide text-zinc-500">
                Manage
              </div>
              <ul className="px-2 pb-2">
                <SideItem
                  href="/admin/dashboard/overview"
                  icon={<MdOutlineSpaceDashboard />}
                  label="Overview"
                  active
                />
                <SideItem
                  href="/admin/dashboard/blogs"
                  icon={<MdOutlineArticle />}
                  label="Blogs"
                />
                <SideItem
                  href="/admin/dashboard/projects"
                  icon={<HiOutlineClipboardList />}
                  label="Projects"
                />
                <SideItem
                  href="/admin/dashboard/locations"
                  icon={<FiMapPin />}
                  label="Locations"
                />
                <SideItem
                  href="/admin/dashboard/feature-projects"
                  icon={<FiStar />}
                  label="Featured Projects"
                />
                <SideItem
                  href="/admin/dashboard/jobs"
                  icon={<MdWorkOutline />}
                  label="Jobs"
                />
                <SideItem
                  href="/admin/dashboard/services"
                  icon={<RiServiceLine />}
                  label="Services"
                />
              </ul>

              <div className="px-4 py-3 text-xs uppercase tracking-wide text-zinc-500 border-t border-zinc-100">
                Account
              </div>
              <ul className="px-2 pb-4">
                <SideItem href="#" icon={<FiLogOut />} label="Logout" />
              </ul>
            </nav>
          </aside>

          {/* Main content */}
         <main className="mt-6 md:mt-20 space-y-10">
  {/* Welcome Panel */}
  <section className="relative overflow-hidden rounded-3xl border border-zinc-100 bg-white/70 backdrop-blur-md shadow-sm p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
    <div>
      <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-zinc-800">
        Welcome back, fiable Admin 👋
      </h1>
      <p className="mt-3 text-zinc-600 max-w-xl">
        Your contractor-first control center — manage blogs, projects, services
        and careers with clarity and speed.
      </p>
    </div>
    <div className="hidden md:block w-40 h-40 rounded-full bg-gradient-to-tr from-blue-100 to-blue-100 flex items-center justify-center">
      <span className="text-5xl">⚡</span>
    </div>
  </section>

  {/* Quick Actions Command Palette Style */}
  <section className="rounded-3xl border border-zinc-100 bg-gradient-to-br from-white via-blue-50/40 to-white p-6 md:p-8 shadow-sm">
    <h2 className="text-lg font-semibold text-zinc-800 mb-4">Quick actions</h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {[
        {
          href: "/admin/dashboard/blogs",
          icon: <MdOutlineArticle />,
          title: "Manage Blogs",
          desc: "Publish updates, case studies & insights.",
        },
        {
          href: "/admin/dashboard/jobs",
          icon: <MdWorkOutline />,
          title: "Manage Jobs",
          desc: "Post openings for engineers, site staff & more.",
        },
        {
          href: "/admin/dashboard/feature-projects",
          icon: <FiStar />,
          title: "Feature Projects",
          desc: "Showcase priority builds on the website.",
        },
        {
          href: "/admin/dashboard/projects",
          icon: <HiOutlineClipboardList />,
          title: "Projects",
          desc: "Add new projects, images & progress.",
        },
        {
          href: "/admin/dashboard/services",
          icon: <RiServiceLine />,
          title: "Services",
          desc: "Manage service pages & ordering.",
        },
        {
          href: "/admin/dashboard/team",
          icon: <RiTeamLine />,
          title: "Team",
          desc: "Update team structure & bios.",
        },
        // {
        //   href: "/admin/dashboard/capabilities",
        //   icon: <TbBuildingSkyscraper />,
        //   title: "Capabilities",
        //   desc: "Highlight fast-track, mall coordination & more.",
        // },
        {
          href: "/admin/dashboard/testimonials",
          icon: <BiSolidQuoteAltLeft />,
          title: "Testimonials",
          desc: "Add client quotes & approvals.",
        },
        {
          href: "/admin/dashboard/client-logos",
          icon: <FiBriefcase />,
          title: "Client Logos",
          desc: "Manage brand logos for case studies.",
        },
        {
          href: "/admin/dashboard/locations",
          icon: <FiMapPin />,
          title: "Locations",
          desc: "Manage company office & service center locations.",
        },
      ].map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="group flex items-center gap-4 rounded-xl p-4 border border-zinc-200 bg-white/70 backdrop-blur-sm shadow-sm hover:bg-blue-50 hover:shadow-md transition"
        >
          <div className="w-12 h-12 rounded-lg grid place-items-center text-xl text-blue-600 bg-blue-100 group-hover:bg-blue-600 group-hover:text-white transition">
            {item.icon}
          </div>
          <div className="flex-1">
            <div className="font-semibold text-zinc-800">{item.title}</div>
            <div className="text-sm text-zinc-500">{item.desc}</div>
          </div>
          <div className="text-blue-500 opacity-0 group-hover:opacity-100 transition">
            <FiChevronRight />
          </div>
        </a>
      ))}
    </div>
  </section>
</main>

        </div>
      </div>
    </div>
  );
}

/* ---------------------------- UI Subcomponents --------------------------- */

function SideItem({ href, icon, label, active }) {
  return (
    <li>
      <Link
        href={href}
        className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition ${
          active
            ? " text-[color:#4376BB]"
            : "text-zinc-700 hover:bg-zinc-50"
        }`}
      >
        <span className="text-[18px]">{icon}</span>
        <span>{label}</span>
      </Link>
    </li>
  );
}

function StatCard({ label, value, delta }) {
  return (
    <div className="rounded-2xl border border-zinc-100 bg-white p-4 shadow-[0_10px_30px_rgba(17,17,26,0.04)]">
      <div className="text-xs uppercase tracking-wide text-zinc-500">
        {label}
      </div>
      <div className="mt-1 text-2xl font-semibold">{value}</div>
      <div className="mt-1 text-xs text-zinc-500">{delta}</div>
    </div>
  );
}

function ActionCard({ href, icon, title, desc, primary }) {
  return (
    <Link
      href={href}
      className={`group relative flex flex-col justify-between rounded-3xl border bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
        primary
          ? "border-transparent bg-gradient-to-br from-blue-50 to-white ring-2 ring-blue-300/60"
          : "border-zinc-200/70"
      }`}
    >
      {/* Floating Icon */}
      <div className="mb-4 flex items-center justify-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl shadow-md transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 text-center">
        <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-[#4376BB] transition-colors">
          {title}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
      </div>

      {/* CTA button-like footer */}
      <div className="mt-6 flex justify-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-[#4376BB] transition-all duration-300 group-hover:bg-[#4376BB] group-hover:text-white">
          Explore
          <FiChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}

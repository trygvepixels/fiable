"use client";

import ContactCta from "@/components/ContactCta";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import {
  HardHat,
  Wrench,
  Ruler,
   Clipboard,
  Shield,
  Phone,
  MessageCircle,
  MapPin,
  User,
  ArrowRight,
  CheckCircle,
  Droplets,
  Settings,
  Building,
  Mail,
  Users,
  Target,
  Clock,
  Star,
  Briefcase,
  GraduationCap,
  Award,
  Zap,
  Construction,
  Hammer,
  Layers
} from "lucide-react";
import CurrentOpening from "@/components/CurrentOpening";
export default function FiableCareerPageV3() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [hoveredCard, setHoveredCard] = useState(null);

 useEffect(() => {
  let active = true;

  async function loadJobs() {
    try {
      setLoading(true);
      setError("");

      const res = await fetch("/api/jobs", {
        headers: { "Content-Type": "application/json" },
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error(`Failed to fetch jobs: ${res.status}`);
      }

      const payload = await res.json();
      // ✅ Fix: Support API structure with `items`
      const list = Array.isArray(payload?.items)
        ? payload.items
        : Array.isArray(payload?.jobs)
        ? payload.jobs
        : Array.isArray(payload)
        ? payload
        : [];

      const normalized = list.map((j, idx) => {
        const id = j.id || j._id || `FIABLE-${idx + 1}`;

        const iconByDept = {
          Waterproofing: <Droplets className="w-6 h-6" />,
          Structural: <Building className="w-6 h-6" />,
          Flooring: <Layers className="w-6 h-6" />,
          Grouting: <Settings className="w-6 h-6" />,
          "Site Execution": <HardHat className="w-6 h-6" />,
          "Quality Control": <Shield className="w-6 h-6" />,
          "Project Management": <Diagram className="w-6 h-6" />,
          Sales: <Clipboard className="w-6 h-6" />,
          Engineering: <Ruler className="w-6 h-6" />,
        };

        let bullets = j.bullets;
        if (typeof bullets === "string") {
          const sep = bullets.includes("|")
            ? "|"
            : bullets.includes(";")
            ? ";"
            : ",";
          bullets = bullets.split(sep).map((s) => s.trim()).filter(Boolean);
        }
        if (!Array.isArray(bullets)) bullets = [];

        return {
          id,
          title: j.title || "Construction Specialist",
          dept: j.dept || j.team || "Construction",
          icon: iconByDept[j.dept] || <User className="w-6 h-6" />,
          location: j.location || "Lucknow, UP",
          type: j.type || "Full-time",
          exp: j.exp || "2-5 years",
          summary:
            j.summary ||
            j.blurb ||
            j.description ||
            "Join our expert team in delivering quality construction solutions across India.",
          bullets:
            bullets.length > 0
              ? bullets
              : [
                  "Execute waterproofing & structural projects",
                  "Ensure quality standards & safety compliance",
                  "Work with latest construction technologies",
                ],
        };
      });

      if (active) setJobs(normalized);
    } catch (err) {
      if (active) setError(err.message || "Unable to fetch jobs.");
    } finally {
      if (active) setLoading(false);
    }
  }

  loadJobs();
  return () => {
    active = false;
  };
}, []);

  const [q, setQ] = useState("");
  const [dept, setDept] = useState("All");
  const [loc, setLoc] = useState("All");

  const departments = useMemo(
    () => ["All", ...Array.from(new Set(jobs.map((j) => j.dept)))],
    [jobs]
  );
  const locations = useMemo(
    () => ["All", ...Array.from(new Set(jobs.map((j) => j.location)))],
    [jobs]
  );

  const filtered = jobs.filter((j) => {
    const okDept = dept === "All" || j.dept === dept;
    const okLoc = loc === "All" || j.location === loc;
    const okQ =
      !q ||
      j.title.toLowerCase().includes(q.toLowerCase()) ||
      j.summary.toLowerCase().includes(q.toLowerCase());
    return okDept && okLoc && okQ;
  });

  const mail = "hr@fiabeprojects.com";
  const whatsapp = "918069648411";
  const applyMailTo = (job) =>
    `mailto:${mail}?subject=Application%20for%20${encodeURIComponent(
      job.title
    )}%20(${job.id})&body=Hi%20Fiable%20Team%2C%0A%0AI'm%20interested%20in%20${
      job.title
    }%20position%20(${job.id}).%0A%0AName%3A%20%0APhone%3A%20%0ALocation%3A%20%0AExperience%3A%20${
      job.exp
    }%20in%20construction%0ANotice%20Period%3A%20%0A%0APlease%20find%20my%20CV%20attached.%0A%0ABest%20regards.`;

  const applyWhatsApp = (job) =>
    `https://wa.me/${whatsapp}?text=${encodeURIComponent(
      `Hi Fiable Building Solutions, I'm interested in ${job.title} position (${job.id}).\n\nName:\nExperience in construction:\nLocation:\nNotice Period:`
    )}`;

  return (
    <main className="pt-10 ">
     

      {/* HERO - Minimalistic Knowledge Hub Style */}
      <section className="relative bg-[#f9f8f6] py-24">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="flex items-center justify-center gap-3 text-sm font-medium tracking-wider text-gray-500 uppercase mb-6">
            <span className="w-10 h-px bg-gray-400" />
            Fiable Careers
            <span className="w-10 h-px bg-gray-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-s emibold text-gray-900 mb-6">
            Build Your <span className="text-[#4376BB] italic">Future</span> with Us
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Join Fiable Building Solutions — where structural retrofitting, waterproofing, 
            and engineering excellence meet career growth and innovation.
          </p>
        </div>
      </section>

      {/* CULTURE / PERKS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14">
          <h2 className="text-3xl sm:text-4xl font-semibold">Why Choose Fiable Building Solutions</h2>
          <p className="mt-3 text-gray-600 max-w-3xl">
            "Trust and Honesty is our mantra" - Join a company that values quality, innovation, and long-term career growth in the construction industry.
          </p>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Perk 
              icon={<GraduationCap className="w-6 h-6 text-[#4376BB]" />}
              title="Advanced Training" 
              text="Quarterly training programs at chemical factories and latest construction technology workshops." 
            />
            <Perk 
              icon={<Construction className="w-6 h-6 text-[#4376BB]" />}
              title="Latest Machinery" 
              text="Work with cutting-edge equipment and modern construction technologies for quality solutions." 
            />
            <Perk 
              icon={<Award className="w-6 h-6 text-[#4376BB]" />}
              title="Trusted Chemicals" 
              text="Access to premium materials from reliable suppliers ensuring consistent project quality." 
            />
            <Perk 
              icon={<Zap className="w-6 h-6 text-[#4376BB]" />}
              title="Growth Opportunities" 
              text="Career advancement in a growing company with 500+ successful projects and expanding operations." 
            />
          </div>
        </div>
      </section>

      {/* Rest of sections same as V1... */}
      {/* OPENINGS */}
      <section id="openings" className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">Current Openings</h2>
            <p className="mt-3 text-gray-600 max-w-3xl">
              Join our team of construction professionals in waterproofing, structural retrofitting, and civil construction projects across India.
            </p>
          </div>
          
        </div>

         

       <CurrentOpening />
      </section>

      <ContactCta />
    </main>
  );
}

// Shared helper components (same as V1)
function Perk({ icon, title, text }) {
  return (
    <div className="rounded-2xl bg-white p-6 border border-gray-200">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}

function Filters({ q, setQ, dept, setDept, departments, loc, setLoc, locations }) {
  return (
    <div className="w-full max-w-4xl rounded-xl bg-white p-4 shadow-sm border border-gray-200">
      <div className="grid sm:grid-cols-3 gap-3">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search roles..."
          className="rounded-lg px-3 py-2 border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <select
          value={dept}
          onChange={(e) => setDept(e.target.value)}
          className="rounded-lg px-3 py-2 border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          {departments.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
        <select
          value={loc}
          onChange={(e) => setLoc(e.target.value)}
          className="rounded-lg px-3 py-2 border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          {locations.map((l) => (
            <option key={l} value={l}>
              {l}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

function JobCard({ job, applyMailTo, applyWhatsApp }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start gap-3">
        <span className="text-[#4376BB] flex-shrink-0">{job.icon}</span>
        <div className="flex-1">
          <h3 className="text-xl font-semibold">{job.title}</h3>
          <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-gray-600">
            <span className="inline-flex items-center gap-1">
              <MapPin className="w-4 h-4" /> {job.location}
            </span>
            <span className="inline-flex items-center gap-1">
              <Briefcase className="w-4 h-4" /> {job.dept}
            </span>
            <span>{job.type}</span>
            <span className="font-medium">Experience: {job.exp}</span>
            <span className="rounded bg-blue-100 px-2 py-0.5 text-xs text-blue-700 font-medium">{job.id}</span>
          </div>
        </div>
      </div>

      <p className="mt-4 text-gray-700 leading-relaxed">{job.summary}</p>

      <ul className="mt-4 space-y-2 text-sm">
        {job.bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2 text-gray-700">
            <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" /> 
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <a
          href={applyMailTo}
          className="inline-flex items-center gap-2 rounded-lg bg-[#4376BB] px-4 py-2 text-white hover:bg-blue-700 font-medium transition-colors"
        >
          Apply via Email <ArrowRight className="w-4 h-4" />
        </a>
        <a
          href={applyWhatsApp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700 font-medium transition-colors"
        >
          WhatsApp <MessageCircle className="w-4 h-4" />
        </a>
      </div>
    </article>
  );
}

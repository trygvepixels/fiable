import Link from "next/link";
import {
  FiCheckCircle,
  FiChevronRight,
  FiClipboard,
  FiGlobe,
  FiShield,
  FiUsers,
} from "react-icons/fi";
import Milestones from "@/components/Milestones.jsx";
import TeamSection from "./TeamSection.jsx";
import OfficeMapSection from "@/components/OfficeMapSection";

const stats = [
  { label: "Founded", value: "2019" },
  { label: "Core Focus", value: "Waterproofing & Rehab" },
  { label: "Project Types", value: "Residential to Industrial" },
  { label: "Coverage", value: "Lucknow and Beyond" },
];

const specialties = [
  "Terrace waterproofing",
  "Basement protection",
  "Structural rehabilitation",
  "Injection grouting",
  "Epoxy flooring",
  "PU flooring systems",
  "Machine foundation grouting",
  "Concrete repair",
  "Industrial maintenance works",
  "Civil strengthening packages",
];

const principles = [
  {
    icon: <FiUsers />,
    title: "Engineer-led execution",
    body: "Every scope is approached with technical judgment, clear sequencing, and practical site coordination.",
  },
  {
    icon: <FiShield />,
    title: "Durability over patchwork",
    body: "We focus on systems that solve the root issue instead of cosmetic fixes that fail after one season.",
  },
  {
    icon: <FiClipboard />,
    title: "Transparent planning",
    body: "Clients get realistic scope discussions, accountable execution, and a delivery process that is easy to track.",
  },
];

export default function AboutPage() {
  return (
    <section className="bgWarm text-[#101010]">
      <div className="fixed bottom-5 right-5 z-20">
        <Link href="/contact-us#project-form">
          <button className="group relative flex items-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-[#234D7E] to-[#2c4a7d] px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:from-[#365a99] hover:to-[#1e3d6f]">
            <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-white/0 via-white/20 to-white/0 transition-transform duration-700 ease-in-out group-hover:translate-x-[100%]" />
            <span className="relative z-10">
              Start <span className="font-bold text-[# ]">Project</span>
            </span>
            <svg
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </Link>
      </div>

      <Breadcrumbs />

      <div className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(1200px 600px at 80% -20%, rgba(35,77,126,0.08), transparent 60%), radial-gradient(800px 400px at 10% 110%, rgba(17,17,17,0.05), transparent 60%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-16 md:pb-16 md:pt-24">
          <div className="flex items-center gap-2 text-sm tracking-wide text-neutral-700">
            <FiGlobe className="shrink-0" />
            <span>Waterproofing, structural repair and industrial execution</span>
          </div>

          <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight text-[#111111] md:text-5xl">
            Fiable Building Solutions
          </h1>

          <p className="mt-5 max-w-3xl text-[17px] text-neutral-700 md:text-lg">
            Fiable Building Solutions delivers waterproofing, rehabilitation,
            industrial flooring and repair packages with a practical,
            engineer-first approach. We work across residential, commercial and
            industrial sites where precision, durability and site discipline
            matter more than presentation alone.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="tel:+918069648411"
              className="inline-flex items-center gap-2 rounded-full bg-[#234D7E] px-5 py-3 text-sm text-white transition hover:opacity-90 md:text-[15px]"
            >
              +91 8069648411
            </a>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-full border border-[#101010] px-5 py-3 text-sm transition hover:bg-black hover:text-white md:text-[15px]"
            >
              Contact the team
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl px-5 pb-12">
        <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {stats.map((stat) => (
            <li
              key={stat.label}
              className="rounded-2xl border border-black/10 bg-white p-5"
            >
              <div className="text-xs uppercase tracking-wide text-neutral-500">
                {stat.label}
              </div>
              <div className="mt-1 font-semibold">{stat.value}</div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-6">
        <div className="rounded-2xl border border-black/10 bg-white p-6 md:p-8">
          <div className="flex items-center gap-2">
            <FiCheckCircle />
            <h2 className="text-2xl font-semibold">Expertise & Specialties</h2>
          </div>
          <p className="mt-2 text-neutral-700">
            We take on performance-critical scopes where water ingress,
            deteriorated concrete, failing floors, and long-term maintenance
            issues need structured solutions rather than ad-hoc fixes.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {specialties.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-black/10 bg-[#F4F1EC] px-3 py-1.5 text-sm"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-6">
        <div className="rounded-2xl border border-black/10 bg-white p-6 md:p-8">
          <div className="flex items-center gap-2">
            <FiUsers />
            <h2 className="text-2xl font-semibold">How Fiable Works</h2>
          </div>
          <p className="mt-2 max-w-3xl text-neutral-700">
            Our delivery model is built around technical diagnosis, methodical
            planning, and accountable execution on site. The goal is simple:
            solve the actual problem and leave the asset in a stronger state.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {principles.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-black/10 bg-[#fffdf9] p-5"
              >
                <div className="text-[18px] text-[#234D7E]">{item.icon}</div>
                <h3 className="mt-3 text-lg font-semibold text-[#111111]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Milestones />

      <div className="mx-auto max-w-7xl px-5 pb-6">
        <div className="rounded-2xl border border-black/10 bg-white p-6 md:p-8">
          <div className="flex items-center gap-2">
            <FiUsers />
            <h2 className="text-2xl font-semibold">Leadership & Team</h2>
          </div>
          <p className="mt-2 max-w-3xl text-neutral-700">
            Every Fiable project depends on coordinated execution between site
            teams, engineers, supervisors, and client-side stakeholders. The
            people behind the work are central to the result.
          </p>
        </div>
      </div>

      <TeamSection />

      <OfficeMapSection
        title="Visit Fiable and Discuss Your Project"
        body="If you want to review waterproofing scope, rehabilitation requirements, or flooring specifications in person, you can visit our Lucknow office and speak directly with the Fiable team."
      />
    </section>
  );
}

function Breadcrumbs() {
  return (
    <div className="mx-auto max-w-7xl px-5 pt-8">
      <ol className="flex items-center space-x-2 text-[14px] text-neutral-500">
        <li>
          <Link href="/" className="flex items-center transition-colors hover:text-[#234D7E]">
            Home
          </Link>
        </li>
        <li>
          <FiChevronRight className="text-neutral-300" />
        </li>
        <li>
          <span className="font-semibold text-[#234D7E]">About Us</span>
        </li>
      </ol>
    </div>
  );
}

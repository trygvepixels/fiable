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
import { SITE_URL } from "@/lib/site";

const stats = [
  { label: "Founded", value: "2019" },
  { label: "Core Focus", value: "Waterproofing & Rehab" },
  { label: "Project Types", value: "Residential to Industrial" },
  { label: "Coverage", value: "Lucknow and Beyond" },
];

const specialties = [
  { label: "Terrace waterproofing", href: "/services/waterproofing-services" },
  { label: "Basement protection", href: "/services/waterproofing-services" },
  { label: "Structural rehabilitation", href: "/services/structural-rehabilitation" },
  { label: "Injection grouting", href: "/services/industrial-grouting-services" },
  { label: "Epoxy flooring", href: "/services/industrial-flooring-systems" },
  { label: "PU flooring systems", href: "/services/industrial-flooring-systems" },
  { label: "Machine foundation grouting", href: "/services/industrial-grouting-services" },
  { label: "Concrete repair", href: "/services/structural-rehabilitation" },
  { label: "Industrial maintenance", href: "/services" },
  { label: "Civil strengthening", href: "/services" },
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

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Fiable Building Solutions",
  "url": `${SITE_URL}/about-us`,
  "description": "Fiable Building Solutions is an engineering-led waterproofing, structural rehabilitation, and industrial flooring company based in Lucknow, India.",
  "mainEntity": {
    "@id": `${SITE_URL}#organization`,
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": SITE_URL,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About Us",
        "item": `${SITE_URL}/about-us`,
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <section className="bgWarm text-[#101010] antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      <div className="fixed bottom-5 right-5 z-20">
        <Link href="/contact-us#project-form">
          <button className="group relative flex items-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-[#234D7E] to-[#2c4a7d] px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:from-[#365a99] hover:to-[#1e3d6f]">
            <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-white/0 via-white/20 to-white/0 transition-transform duration-700 ease-in-out group-hover:translate-x-[100%]" />
            <span className="relative z-10">
              Start <span className="font-bold">Project</span>
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
            <FiGlobe className="shrink-0 animate-spin-slow" />
            <span>Certified Waterproofing & Concrete Rehabilitation Company</span>
          </div>

          <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#111111] md:text-5xl max-w-4xl">
            Expert Waterproofing & Structural Repair Company in Lucknow, India
          </h1>
          <p className="mt-1 text-sm font-semibold tracking-[0.12em] text-[#234D7E] uppercase">
            About Fiable Building Solutions
          </p>

          <p className="mt-5 max-w-3xl text-[17px] leading-relaxed text-neutral-700 md:text-lg">
            Fiable Building Solutions delivers professional waterproofing, RCC structural rehabilitation, industrial epoxy flooring, and civil repair packages with a practical, engineer-first approach. We operate across residential, commercial, and industrial sites where engineering precision, site safety, and long-term durability matter more than short-term cosmetic patchworks.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="tel:+918069648411"
              className="inline-flex items-center gap-2 rounded-full bg-[#234D7E] px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90 shadow-sm"
            >
              Call +91 8069648411
            </a>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-full border border-[#101010] bg-white px-6 py-3.5 text-sm font-semibold transition hover:bg-black hover:text-white shadow-sm"
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
              className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm"
            >
              <div className="text-xs uppercase tracking-wide text-neutral-500">
                {stat.label}
              </div>
              <div className="mt-1 font-semibold text-[#111111]">{stat.value}</div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-6">
        <div className="rounded-2xl border border-black/10 bg-white p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-2 text-[#234D7E]">
            <FiCheckCircle className="h-5 w-5" />
            <h2 className="text-2xl font-semibold text-gray-900">Expertise & Specialties</h2>
          </div>
          <p className="mt-2 text-neutral-600">
            We specialize in executing performance-critical packages where water ingress, decayed reinforcement concrete, worn factory flooring, or deep chemical dampness need structured civil engineering methods:
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {specialties.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="inline-block rounded-full border border-black/10 bg-[#F4F1EC] hover:bg-[#234D7E] hover:text-white px-4 py-2 text-sm transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-6">
        <div className="rounded-2xl border border-black/10 bg-white p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-2 text-[#234D7E]">
            <FiUsers className="h-5 w-5" />
            <h2 className="text-2xl font-semibold text-gray-900">How Fiable Works</h2>
          </div>
          <p className="mt-2 max-w-3xl text-neutral-600">
            Our delivery process is built on precise structural diagnostics, transparent planning, and disciplined site application. Every project is engineered to resolve root seepage causes and extend structural lifespan.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {principles.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-black/10 bg-[#fffdf9] p-5 shadow-sm"
              >
                <div className="text-[18px] text-[#234D7E]">{item.icon}</div>
                <h3 className="mt-3 text-lg font-semibold text-[#111111]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-start">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-[#234D7E] font-semibold hover:underline"
            >
              See our completed projects
              <FiChevronRight />
            </Link>
          </div>
        </div>
      </div>

      <Milestones />

      {/* Areas We Serve & Partners Trust Section */}
      <div className="mx-auto max-w-7xl px-5 pb-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-black/10 bg-white p-6 md:p-8 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-gray-900">Areas We Serve</h2>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Fiable&apos;s specialist engineering and application teams are physically based in Lucknow and systematically execute projects across:
            </p>
            <ul className="text-sm text-neutral-700 space-y-1">
              <li>• Lucknow (Hazratganj, Gomti Nagar, Aliganj, Kursi Road)</li>
              <li>• Delhi NCR (Noida, Greater Noida, Gurgaon, Delhi)</li>
              <li>• Uttar Pradesh (Kanpur, Unnao, Varanasi, Prayagraj)</li>
              <li>• Maharashtra (Mumbai, Pune industrial belts)</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-6 md:p-8 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-gray-900">Approved Material Partners</h2>
            <p className="text-sm text-neutral-600 leading-relaxed">
              We coordinate directly with leading chemical product manufacturers in India to specify high-durability systems backed by standard product performance warranties:
            </p>
            <p className="text-xs font-semibold text-[#234D7E] uppercase tracking-wider">
              Sika India • Dr. Fixit (Pidilite) • Fosroc Chemicals • Mapei India • BASF
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-6">
        <div className="rounded-2xl border border-black/10 bg-white p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-2 text-[#234D7E]">
            <FiUsers className="h-5 w-5" />
            <h2 className="text-2xl font-semibold text-gray-900">Leadership & Team</h2>
          </div>
          <p className="mt-2 max-w-3xl text-neutral-600">
            Fiable&apos;s strength lies in our unified field and office leadership. Coordinated by professional civil engineers, project estimators, and experienced site managers, we deliver a disciplined execution structure from start to finish.
          </p>
        </div>
      </div>

      <TeamSection />

      {/* Registered Office Details */}
      <div className="mx-auto max-w-7xl px-5 pb-6">
        <div className="rounded-2xl border border-black/10 bg-white p-6 md:p-8 shadow-sm space-y-3">
          <h2 className="text-lg font-bold text-gray-900">Registered Office</h2>
          <p className="text-sm text-neutral-600 leading-relaxed">
            Fiable Building Solutions Private Limited is registered in Lucknow, Uttar Pradesh:
          </p>
          <p className="text-sm font-medium text-neutral-800">
            728, Phase 2, Khasra No. 21, Eden Enclave, Kursi Road, Gudumba BKT, Lucknow – 226026, Uttar Pradesh, India
          </p>
          <div className="text-xs text-neutral-500 pt-2 border-t border-gray-100 flex gap-4">
            <span>CIN: U45309UP2019PTC118128</span>
            <span>•</span>
            <span>GSTIN Verified</span>
          </div>
        </div>
      </div>

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

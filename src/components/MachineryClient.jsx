"use client";

import React, { useEffect, useState } from "react";
import { FaCheckCircle, FaHardHat, FaHammer, FaTools, FaWarehouse, FaWhatsapp, FaPhoneAlt, FaArrowRight, FaClock } from "react-icons/fa";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";
import Link from "next/link";
import ContactCta from "@/components/ContactCta";
import MilestonesExact from "@/components/Milestones";
import CapabilitiesBlock from "@/components/CapabilitiesBlock.jsx";

export default function MachineryClient({ initialFeaturedWorks }) {
  const [featuredWorks, setFeaturedWorks] = useState(initialFeaturedWorks || []);
  const [current, setCurrent] = useState(0);

  // Auto-rotate Featured Work (5s)
  useEffect(() => {
    if (!featuredWorks.length) return;
    const id = setInterval(
      () => setCurrent((i) => (i + 1) % featuredWorks.length),
      5000
    );
    return () => clearInterval(id);
  }, [featuredWorks.length]);

  // Testimonials rotator
  const testimonials = [
    {
      quote:
        "Fiable's in-house advanced machinery unit gave us unmatched speed and consistency. Handover was exactly on the date promised.",
      name: "Mr. Rajeev Sharma",
      role: "Project Engineer, Lucknow",
    },
    {
      quote:
        "For fast-track hospitality fit-outs, they’re simply reliable. Mall coordination, safety, and QA/QC were all handled end-to-end.",
      name: "Ms. Priya Verma",
      role: "GM Operations, Lemon Tree Hotels",
    },
    {
      quote:
        "Their workforce control and procurement discipline kept our budget tight. Finishes are premium, snag list was minimal.",
      name: "Mr. Nikhil Kapoor",
      role: "Facility Head, Infosys Pune",
    },
  ];
  
  const [tIndex, setTIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTIndex((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(id);
  }, [testimonials.length]);

  return (
    <main className="bg-[#F4F1EC] text-gray-900">
      <div className="fixed bottom-5 z-10 right-5">
        <Link href="/contact-us#project-form">
          <button className="px-4 py-2 bg-black text-white rounded-full shadow-md hover:bg-black transition">
            Start <span className="text-[#234D7E]">Project</span>
          </button>
        </Link>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Background split marquee */}
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
          <MarqueeColumn
            images={[
              "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1400&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1400&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1400&auto=format&fit=crop",
            ]}
            direction="up"
          />
          <MarqueeColumn
            images={[
              "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1400&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1400&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1400&auto=format&fit=crop",
            ]}
            direction="down"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/20" />

        {/* Content */}
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-28 pb-20 sm:pt-36 sm:pb-28">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white backdrop-blur border border-white/20">
            In-House Advanced Machinery · Application Equipment · Diagnostic Tools
          </div>

          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold leading-tight text-white">
            In-House Machinery for <span className="text-white/90">Speed, Precision & Control</span>
          </h1>

          <p className="mt-5 max-w-2xl text-lg sm:text-xl text-white/85">
            We combine multidisciplinary engineers with in-house application facilities to deliver
            waterproofing, structural repair, industrial flooring, and civil construction solutions — faster, cleaner, and strictly to spec.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="https://wa.me/918069648411?text=Hi%20Fiable%2C%20I'd%20like%20to%20discuss%20an%20in-house%20fit-out."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-3 text-white hover:bg-green-700"
            >
              <FaWhatsapp className="h-5 w-5" />
              WhatsApp Now
            </a>
            <a
              href="tel:+918069648411"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-gray-900 hover:bg-gray-100"
            >
              <FaPhoneAlt className="h-5 w-5" />
              Call Now
            </a>
            <a
              href="#capabilities"
              className="group inline-flex items-center gap-2 rounded-lg border border-white/40 bg-white/10 px-5 py-3 text-white hover:bg-white/20"
            >
              Explore Capabilities <FaArrowRight className="h-4 w-4 transition -translate-x-0 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Quick value props */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Badge title="Advanced Application Equipment" />
            <Badge title="Diagnostic Tools" />
            <Badge title="Quality Control Lab" />
            <Badge title="Safety Protocols" />
          </div>
        </div>
      </section>

      {/* WHAT “IN-HOUSE” MEANS */}
      <CapabilitiesBlock slug="slug" />

      {/* CAPABILITIES */}
      <section id="capabilities" className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-20">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">Capabilities</h2>
            <p className="mt-3 text-gray-600 max-w-2xl">
              From BOQ to handover — our in-house stack covers waterproofing, structural rehabilitation and industrial construction
              for residential, retail, office, healthcare, and industrial projects.
            </p>
          </div>
          <a href="#work" className="hidden sm:inline-flex items-center gap-2 text-[#234D7E] hover:text-blue-800">
            See featured work <FaArrowRight />
          </a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Cap icon={<FaHardHat />} title="General Contracting (Turnkey)" points={["Shell & core", "Structural works", "Compliance & safety"]} />
          <Cap icon={<FaHammer />} title="Structural Rehabilitation" points={["Concrete Repairs", "Carbon Fiber Wrapping", "Retrofitting"]} />
          <Cap icon={<FaTools />} title="Waterproofing Systems" points={["Chemical waterproofing", "Membrane applications", "Injection grouting"]} />
          <Cap icon={<FaWarehouse />} title="Glass & UPVC" points={["Partitions & storefronts", "Windows/doors", "Glazing accessories"]} />
          <Cap icon={<MdOutlinePrecisionManufacturing />} title="Metal Works" points={["MS/SS fabrication", "Powder-coat", "Feature elements"]} />
          <Cap icon={<FaClock />} title="Fast-Track Delivery" points={["Sequencing & manpower control", "Night shifts where required", "Zero-surprise handovers"]} />
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-20">
          <h2 className="text-3xl sm:text-4xl font-semibold">From Brief to Handover</h2>
          <div className="mt-10 grid md:grid-cols-4 gap-6">
            <Step n="01" title="Discovery & BOQ" text="Site visit, drawings review, BOQ & value engineering options." />
            <Step n="02" title="Technical Planning" text="Shop drawings, MEP coordination, long-lead procurement plan." />
            <Step n="03" title="In-House Production" text="Specialized chemicals, protective coatings, and advanced materials." />
            <Step n="04" title="Site Execution & QA" text="Sequenced installation, snag control, final QA/QC and handover." />
          </div>
        </div>
      </section>

      {/* FEATURED WORK (Carousel) */}
      {featuredWorks.length > 0 && (
        <section id="work" className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-20">
          <div className="flex items-end justify-between">
            <h2 className="text-3xl sm:text-4xl font-semibold">Featured Work</h2>
            <div className="flex gap-3">
              <button
                onClick={() =>
                  setCurrent((c) =>
                    featuredWorks.length ? (c - 1 + featuredWorks.length) % featuredWorks.length : 0
                  )
                }
                className="rounded-lg bg-white px-3 py-2 border border-gray-200 hover:bg-gray-50"
                aria-label="Previous"
              >
                ‹
              </button>
              <button
                onClick={() =>
                  setCurrent((c) =>
                    featuredWorks.length ? (c + 1) % featuredWorks.length : 0
                  )
                }
                className="rounded-lg bg-white px-3 py-2 border border-gray-200 hover:bg-gray-50"
                aria-label="Next"
              >
                ›
              </button>
            </div>
          </div>

          <div className="relative mt-8 overflow-hidden rounded-2xl">
            {featuredWorks.map((w, i) => (
              <article
                key={`${w.title}-${i}`}
                className={`absolute inset-0 grid md:grid-cols-2 bg-white transition-opacity duration-700 ${
                  i === current ? "opacity-100 z-10" : "opacity-0"
                }`}
              >
                <div className="relative aspect-[4/3] md:aspect-auto">
                  <img src={w.img} alt={w.title} className="h-full w-full object-cover" />
                </div>
                <div className="p-8 sm:p-12 flex flex-col justify-center">
                  {w.tag && (
                    <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-[#234D7E] self-start uppercase tracking-wider">
                      {w.tag}
                    </span>
                  )}
                  <h3 className="mt-4 text-2xl sm:text-3xl font-semibold">{w.title}</h3>

                  {w.blurb && (
                    <p className="mt-3 text-gray-650 leading-relaxed text-sm sm:text-base">{w.blurb}</p>
                  )}

                  <ul className="mt-6 grid grid-cols-2 gap-2 text-xs sm:text-sm">
                    <li className="flex items-center gap-2 text-gray-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#234D7E]" />
                      Advanced Application
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#234D7E]" />
                      Quality Diagnosis
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#234D7E]" />
                      Feature Metal Works
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#234D7E]" />
                      Fast-track schedule
                    </li>
                  </ul>

                  <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-4">
                    <Link
                      href="/projects"
                      className="inline-flex items-center gap-2 text-[#234D7E] font-semibold hover:underline"
                    >
                      View all projects
                      <svg width="16" height="16" viewBox="0 0 24 24" className="-mr-1">
                        <path fill="currentColor" d="M13.172 12L8.222 7.05l1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/>
                      </svg>
                    </Link>

                    {w.slug && (
                      <Link
                        href={`/projects/${encodeURIComponent(w.slug)}`}
                        className="inline-flex items-center gap-2 text-gray-700 font-semibold hover:text-black"
                      >
                        View case study
                        <svg width="16" height="16" viewBox="0 0 24 24" className="-mr-1">
                          <path fill="currentColor" d="M13.172 12L8.222 7.05l1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/>
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
            <div className="relative h-[460px] md:h-[520px]" />
          </div>
        </section>
      )}

      <MilestonesExact />

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-20">
        <h2 className="text-3xl sm:text-4xl font-semibold">What our partners say</h2>
        <div className="relative mt-8 rounded-2xl border border-black/10 bg-white p-8">
          {testimonials.map((t, i) => (
            <blockquote
              key={t.name}
              className={`transition-opacity duration-700 ${i === tIndex ? "opacity-100" : "opacity-0 absolute inset-8"}`}
            >
              <p className="text-xl leading-relaxed">“{t.quote}”</p>
              <footer className="mt-6 text-sm text-gray-600">
                <span className="font-semibold text-gray-900">{t.name}</span> — {t.role}
              </footer>
            </blockquote>
          ))}
          <div className="mt-6 flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setTIndex(i)}
                className={`h-2 w-2 rounded-full ${i === tIndex ? "bg-[#234D7E]" : "bg-gray-300"}`}
                aria-label={`Show testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-20">
          <h2 className="text-3xl sm:text-4xl font-semibold">FAQs</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <FAQ
              q="What makes in-house fit-out faster?"
              a="Aligned teams and facilities under one roof reduce coordination loss, ensure material readiness, and enable parallel manufacturing and site prep."
            />
            <FAQ
              q="Do you handle MEP coordination?"
              a="Yes. We coordinate with consultants, produce shop drawings, and sequence installation to avoid rework."
            />
            <FAQ
              q="Can you work in live sites or malls?"
              a="Absolutely. We manage landlord/mall approvals and plan night shifts where required with strict HSE controls."
            />
            <FAQ
              q="Do you support green building requirements?"
              a="Yes, our team can support GRIHA/LEED documentation and material compliance."
            />
          </div>
        </div>
      </section>

      {/* BIG CTA */}
      <ContactCta />
    </main>
  );
}

/* ------------------------ */
/* Tiny UI helpers          */
/* ------------------------ */

function Badge({ title }) {
  return (
    <div className="rounded-lg bg-white/10 px-3 py-2 text-sm text-white backdrop-blur border border-white/20">
      {title}
    </div>
  );
}

function Cap({ icon, title, points }) {
  return (
    <div className="rounded-xl bg-white p-6 border border-gray-205 shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-3">
        <span className="text-[#234D7E] text-xl">{icon}</span>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <ul className="mt-4 space-y-2 text-gray-600">
        {points.map((p) => (
          <li key={p} className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Step({ n, title, text }) {
  return (
    <div className="rounded-xl bg-gray-50 border border-gray-200 p-6">
      <div className="text-sm font-semibold text-[#234D7E]">Step {n}</div>
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{text}</p>
    </div>
  );
}

function FAQ({ q, a }) {
  return (
    <div className="rounded-xl bg-gray-50 border border-gray-200 p-6 hover:shadow-sm transition">
      <h3 className="text-lg font-semibold">{q}</h3>
      <p className="mt-3 text-gray-600">{a}</p>
    </div>
  );
}

function MarqueeColumn({ images, direction = "up" }) {
  return (
    <div className="relative overflow-hidden h-full">
      <div
        className={`absolute inset-x-0 w-full animate-[marquee_25s_linear_infinite] ${
          direction === "down" ? "animate-[marquee-rev_25s_linear_infinite]" : ""
        }`}
      >
        {[...images, ...images].map((src, i) => (
          <div key={i} className="h-64 md:h-80 w-full">
            <img src={src} alt="" className="h-full w-full object-cover opacity-30" />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee { from { transform: translateY(0); } to { transform: translateY(-50%); } }
        @keyframes marquee-rev { from { transform: translateY(-50%); } to { transform: translateY(0); } }
      `}</style>
    </div>
  );
}

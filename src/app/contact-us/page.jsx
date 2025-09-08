"use client";
import React, { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiGlobe,
  FiClock,
  FiMapPin,
  FiArrowRight,
} from "react-icons/fi";
import { FaInstagram, FaLinkedin, FaBehance, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";

import contactImg from "@/assets/contact.webp";
import { WobbleCardDemo } from "@/components/WobbleCardDemo";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ state: "idle", message: "" });
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setSubmitting(true);
    setStatus(null);

    try {
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);

      // Build payload (normalize fields + extras)
      const payload = {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone || data.whatsapp,
        company: data.company || "",
        location: data.location || data.cityCountry || "",
        projectType: data.projectType,
        budget: data.budget || "",
        timeline: data.timeline || "",
        message: data.message || data.brief || "",

        // meta info
        page: window.location.pathname,
        utm: {
          source:
            new URLSearchParams(window.location.search).get("utm_source") || "",
          medium:
            new URLSearchParams(window.location.search).get("utm_medium") || "",
          campaign:
            new URLSearchParams(window.location.search).get("utm_campaign") ||
            "",
        },
        website: "", // honeypot field (should stay empty)
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      if (!res.ok || !result.ok) {
        throw new Error(result.error || "Failed to submit");
      }

      setSubmitting(false);
      form?.reset();
      setStatus({
        state: "success",
        message: "✅ Thanks! Your enquiry has been saved.",
      });

      // Redirect to thank-you
      try {
        router.replace("/thankyou");
        setTimeout(() => {
          if (window.location.pathname !== "/thankyou") {
            window.location.assign("/thankyou");
          }
        }, 100);
      } catch (_) {
        window.location.assign("/thankyou");
      }
    } catch (err) {
      console.error("Submit error:", err);
      setSubmitting(false);
      setStatus({
        state: "error",
        message: "❌ Something went wrong. Please try again.",
      });
    }
  }
  return (
    <main className="   bg-[#F4F1EC]  pt-20 pb-6 md:pt-40 text-[#101010]">
      <div className="fixed bottom-5 z-10 right-5">
        <Link href="/contact-us#project-form">
          <button className="px-4 py-2 bg-black text-white rounded-full shadow-md hover:bg-black  transition">
            Start <span className="text-[#ff4017]">Project</span>
          </button>
        </Link>
      </div>
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-5 text-center">
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1]">
            <span className="bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">
              Say Hi!
            </span>{" "}
            <span className="text-black">and tell about your </span>
            <span className="bg-blue-600 via -green-500 to-yellow-500 bg-clip-text text-transparent">
              idea
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-5 text-base md:text-lg text-gray-600">
            Have a nice works? Reach out and let&apos;s chat.
          </p>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#project-form"
              className="inline-flex items-center gap-2 rounded-full bg-black text-white px-6 py-3 text-sm md:text-base font-medium hover:opacity-90 transition"
            >
              Start Your Project
            </a>
            <a
              href="https://wa.me/919554440400" // replace with your number
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-black px-6 py-3 text-sm md:text-base font-medium hover:bg-black hover:text-white transition"
            >
              Quick Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* <WobbleCardDemo /> */}

      {/* ===== Contact + Form ===== */}
      <section className="relative mt-20 ">
        <div className="max-w-7xl mx-auto px-5 pb-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[0.9fr_1.1fr]">
            {/* Info panel */}
            <aside className="rounded-2xl border border-black/10 bg-white p-6 md:p-8">
              <h2 className="text-2xl font-semibold">
                Contact StrucAxis (By Trygve Studio Pvt. Ltd)
              </h2>
              <p className="mt-2 text-neutral-700">
                Share a few details. Our team will respond within 24 hours with
                next steps, timelines and an initial consultation.
              </p>

              <div className="mt-6 grid gap-4 text-[15px]">
                <a
                  href="mailto:info@struc-axis.com"
                  className="group flex items-start gap-3"
                >
                  <FiMail className="mt-0.5" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-neutral-700 group-hover:underline">
                      info@struc-axis.com
                    </div>
                  </div>
                </a>

                <a
                  href="tel:+919554440400"
                  className="group flex items-start gap-3"
                >
                  <FiPhone className="mt-0.5" />
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-neutral-700 group-hover:underline">
                      +91 95544 40400
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <FiMapPin className="mt-0.5" />
                  <div>
                    <div className="font-medium">Studios</div>
                    <div className="text-neutral-700">
                      Operating globally — project teams across APAC, EMEA & NA.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FiClock className="mt-0.5" />
                  <div>
                    <div className="font-medium">Response Time</div>
                    <div className="text-neutral-700">
                      Within 24 hours (Mon–Sat)
                    </div>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="mt-7">
                <div className="text-sm font-medium uppercase tracking-wide">
                  Follow
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <a
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 hover:bg-black hover:text-white transition"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 hover:bg-black hover:text-white transition"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://www.behance.net/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 hover:bg-black hover:text-white transition"
                    aria-label="Behance"
                  >
                    <FaBehance />
                  </a>
                </div>
              </div>

              {/* mini testimonials */}
              <div className="mt-8 space-y-4">
                <blockquote className="rounded-xl bg-[#F4F1EC] p-4 text-sm">
                  “Their attention to detail gave our villa a soul.”
                  <span className="block mt-1 text-neutral-600">
                    — Client, Dubai
                  </span>
                </blockquote>
                <blockquote className="rounded-xl bg-[#F4F1EC] p-4 text-sm">
                  “Seamless end-to-end execution across two continents.”
                  <span className="block mt-1 text-neutral-600">
                    — Hospitality Group, London
                  </span>
                </blockquote>
              </div>
            </aside>

            {/* Form */}
            <div id="project-form">
              <ContactForm />
            </div>
          </div>

            <div className="mt-10">
        <div className="space-y-5">
          {/* Address (Brand/Entity) */}
          {/* <div className="rounded-2xl p-[1px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200">
            <div className="rounded-2xl bg-white p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <FiMapPin className="mt-0.5 text-black/70" />
                  <div>
                    <div className="text-sm font-semibold tracking-wide text-black/70 uppercase">
                      Address
                    </div>
                    <div className="mt-1 text-neutral-800">
                      <div className="font-medium">
                        strucAxis (by Trygve Studio Pvt Ltd)
                      </div>
                      <div className="text-neutral-600">
                        TRYGVE STUDIO PRIVATE LIMITED
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* Corporate Meeting Space */}
          <div className="rounded-2xl p-[1px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200">
            <div className="rounded-2xl bg-white p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <FiMapPin className="mt-0.5 text-black/70" />
                  <div>
                    <div className="text-sm font-semibold tracking-wide text-black/70 uppercase">
                      Corporate Meeting Space
                    </div>
                    <div className="mt-1 text-neutral-800">
                      <div>Levana Cyber Heights, 10th Floor – Regus</div>
                      <div>Vibhuti Khand, Gomti Nagar</div>
                      <div>Lucknow, Uttar Pradesh – 226010, India</div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="shrink-0 flex items-center gap-2">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      "Levana Cyber Heights, 10th Floor – Regus, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh – 226010, India"
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-full border border-black/10 hover:bg-black hover:text-white text-sm transition"
                  >
                    Open in Maps
                  </a>
                  <button
                    type="button"
                    onClick={() =>
                      navigator.clipboard.writeText(
                        "Levana Cyber Heights, 10th Floor – Regus, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh – 226010, India"
                      )
                    }
                    className="px-3 py-1.5 rounded-full border border-black/10 hover:bg-black hover:text-white text-sm transition"
                  >
                    Copy
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Branch Offices */}
          <div className="rounded-2xl p-[1px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200">
            <div className="rounded-2xl bg-white p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <FiMapPin className="mt-0.5 text-black/70" />
                  <div>
                    <div className="text-sm font-semibold tracking-wide text-black/70 uppercase">
                      Branch Offices
                    </div>

                    <ol className="mt-3 grid gap-3 sm:grid-cols-2">
                      {/* Branch 1 */}
                      <li className="rounded-xl border border-black/10 p-3">
                        <div className="text-neutral-800">
                          <div className="font-medium">
                            Honey Lite, 1st Floor
                          </div>
                          <div>5/72, Sector 5, Vikas Nagar</div>
                          <div>Lucknow, Uttar Pradesh – 226022</div>
                        </div>
                        <div className="mt-2 flex gap-2">
                          <a
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                              "Honey Lite, 1st Floor, 5/72, Sector 5, Vikas Nagar, Lucknow, Uttar Pradesh – 226022"
                            )}`}
                            target="_blank"
                            rel="noreferrer"
                            className="px-2.5 py-1 rounded-full border border-black/10 hover:bg-black hover:text-white text-xs transition"
                          >
                            Maps
                          </a>
                          <button
                            type="button"
                            onClick={() =>
                              navigator.clipboard.writeText(
                                "Honey Lite, 1st Floor, 5/72, Sector 5, Vikas Nagar, Lucknow, Uttar Pradesh – 226022"
                              )
                            }
                            className="px-2.5 py-1 rounded-full border border-black/10 hover:bg-black hover:text-white text-xs transition"
                          >
                            Copy
                          </button>
                        </div>
                      </li>

                      {/* Branch 2 */}
                      <li className="rounded-xl border border-black/10 p-3">
                        <div className="text-neutral-800">
                          <div className="font-medium">
                            UGF, Rukshan Complex, Gata No. 112, Dasauli, Kursi
                            Road
                          </div>
                          <div>Near Integral University Hospital Gate</div>
                          <div>Lucknow, Uttar Pradesh – 226021</div>
                        </div>
                        <div className="mt-2 flex gap-2">
                          <a
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                              "UGF, Rukshan Complex, Gata No. 112, Dasauli, Kursi Road, Near Integral University Hospital Gate, Lucknow, Uttar Pradesh – 226021"
                            )}`}
                            target="_blank"
                            rel="noreferrer"
                            className="px-2.5 py-1 rounded-full border border-black/10 hover:bg-black hover:text-white text-xs transition"
                          >
                            Maps
                          </a>
                          <button
                            type="button"
                            onClick={() =>
                              navigator.clipboard.writeText(
                                "UGF, Rukshan Complex, Gata No. 112, Dasauli, Kursi Road, Near Integral University Hospital Gate, Lucknow, Uttar Pradesh – 226021"
                              )
                            }
                            className="px-2.5 py-1 rounded-full border border-black/10 hover:bg-black hover:text-white text-xs transition"
                          >
                            Copy
                          </button>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Head Office */}
          <div className="rounded-2xl p-[1px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200">
            <div className="rounded-2xl bg-white p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <FiMapPin className="mt-0.5 text-black/70" />
                  <div>
                    <div className="text-sm font-semibold tracking-wide text-black/70 uppercase">
                      Head Office
                    </div>
                    <div className="mt-1 text-neutral-800">
                      <div>Plot No. 728, Khasra No. 21</div>
                      <div>Eden Enclave, Phase 2, Kursi Road</div>
                      <div>Gudamba, BKT, Lucknow</div>
                      <div>Uttar Pradesh – 226026, India</div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="shrink-0 flex items-center gap-2">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      "Plot No. 728, Khasra No. 21, Eden Enclave, Phase 2, Kursi Road, Gudamba, BKT, Lucknow, Uttar Pradesh – 226026, India"
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-full border border-black/10 hover:bg-black hover:text-white text-sm transition"
                  >
                    Open in Maps
                  </a>
                  <button
                    type="button"
                    onClick={() =>
                      navigator.clipboard.writeText(
                        "Plot No. 728, Khasra No. 21, Eden Enclave, Phase 2, Kursi Road, Gudamba, BKT, Lucknow, Uttar Pradesh – 226026, India"
                      )
                    }
                    className="px-3 py-1.5 rounded-full border border-black/10 hover:bg-black hover:text-white text-sm transition"
                  >
                    Copy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
        
      </section>
    
    </main>
  );
}

/* ---------- small reusable inputs ---------- */
function Field({
  label,
  name,
  type = "text",
  placeholder = "",
  required = false,
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium">
        {label}
        {required && (
          <span aria-hidden className="text-red-600">
            {" "}
            *
          </span>
        )}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none ring-0 focus:border-black/30"
      />
    </label>
  );
}

function Select({ label, name, options = [], required = false }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium">
        {label}
        {required && (
          <span aria-hidden className="text-red-600">
            {" "}
            *
          </span>
        )}
      </span>
      <select
        name={name}
        required={required}
        className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none ring-0 focus:border-black/30"
        defaultValue=""
      >
        <option value="" disabled>
          Choose…
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </label>
  );
}

function Textarea({ label, name, placeholder = "", required = false }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium">
        {label}
        {required && (
          <span aria-hidden className="text-red-600">
            {" "}
            *
          </span>
        )}
      </span>
      <textarea
        name={name}
        required={required}
        placeholder={placeholder}
        rows={6}
        className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none ring-0 focus:border-black/30"
      />
    </label>
  );
}

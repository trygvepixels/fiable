"use client";

import React, { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiClock,
  FiMapPin,
  FiCheckCircle,
  FiUsers,
  FiTool,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useRouter } from "next/navigation";
import ContactForm from "@/components/ContactForm";
import LocationsList from "@/components/LocationsList";
import Link from "next/link";

export default function ContactUsClient() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ state: "idle", message: "" });
  const [startTime] = useState(Date.now());
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setSubmitting(true);
    setStatus(null);

    try {
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);

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
        page: window.location.pathname,
        utm: {
          source: new URLSearchParams(window.location.search).get("utm_source") || "",
          medium: new URLSearchParams(window.location.search).get("utm_medium") || "",
          campaign: new URLSearchParams(window.location.search).get("utm_campaign") || "",
        },
        website: data.website || "",
        _st: startTime,
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
        message: "✅ Thank you! Your project inquiry has been received.",
      });

      try {
        router.replace("/thankyou");
        setTimeout(() => {
          if (window.location.pathname !== "/thankyou") {
            window.location.assign("/thankyou");
          }
        }, 100);
      } catch {
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
    <main className="bg-[#F4F1EC] pt-20 pb-6 md:pt-40 text-[#101010]">
      <section className="relative overflow-hidden ">
        <div className="max-w-5xl mx-auto px-5 text-center">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur rounded-full px-4 py-2 mb-8">
            <FiCheckCircle className="w-4 h-4 text-[#4376BB]" />
            <span className="text-[#4376BB] font-semibold text-sm uppercase tracking-wide">
              Trusted Construction Partner
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl tracking-tight leading-[1.1]">
            <span className="bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent">
              Let&apos;s Build Your
            </span>{" "}
            <br />
            <span className="text-black">Construction </span>
            <span className="bg-gradient-to-r from-[#4376BB] to-blue-700 bg-clip-text text-transparent">
              Vision Together
            </span>
          </h1>

          <p className="mt-5 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Structural retrofitting, waterproofing, and industrial construction solutions.
            Share your project requirements and get expert consultation from India&apos;s trusted construction specialists.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#project-form"
              className="inline-flex items-center gap-2 rounded-full bg-[#4376BB] text-white px-6 py-3 text-sm md:text-base font-medium hover:bg-blue-700 transition"
            >
              <FiTool className="w-4 h-4" />
              Get Project Quote
            </a>
            <a
              href="https://wa.me/918069648411?text=Hi%20Fiable%2C%20I%27d%20like%20to%20discuss%20a%20construction%20project."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-green-600 text-green-600 px-6 py-3 text-sm md:text-base font-medium hover:bg-green-600 hover:text-white transition"
            >
              <FaWhatsapp className="w-4 h-4" />
              WhatsApp: +91 8069648411
            </a>
          </div>
        </div>
      </section>

      <section className="relative mt-20">
        <div className="max-w-7xl mx-auto px-5 pb-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[0.9fr_1.1fr]">
            <aside className="rounded-2xl border border-black/10 bg-white p-6 md:p-8 shadow-lg">
              <div className="flex items-start gap-3 mb-4">
                <FiUsers className="w-6 h-6 text-[#4376BB] mt-1" />
                <div>
                  <h2 className="text-2xl font-semibold">
                    Fiable Building Solutions
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">Execution Arm of Trygve Engineering Pvt. Ltd.</p>
                </div>
              </div>

              <p className="mt-4 text-neutral-700 leading-relaxed">
                "Trust and Honesty is our mantra" - Get expert consultation for waterproofing,
                structural retrofitting, and industrial construction projects. Our team responds within 24 hours.
              </p>

              <div className="mt-6 grid gap-4 text-[15px]">
                <a href="mailto:enquiry@fiableprojects.com" className="group flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition">
                  <FiMail className="mt-0.5 text-[#4376BB]" />
                  <div>
                    <div className="font-medium">Primary Email</div>
                    <div className="text-neutral-700 group-hover:text-[#4376BB] transition">
                      enquiry@fiableprojects.com
                    </div>
                  </div>
                </a>

                <a href="mailto:admin@fiableprojects.com" className="group flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition">
                  <FiMail className="mt-0.5 text-[#4376BB]" />
                  <div>
                    <div className="font-medium">Alternative Email</div>
                    <div className="text-neutral-700 group-hover:text-[#4376BB] transition">
                      admin@fiableprojects.com
                    </div>
                  </div>
                </a>

                <a href="tel:+918069648411" className="group flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition">
                  <FiPhone className="mt-0.5 text-[#4376BB]" />
                  <div>
                    <div className="font-medium">Primary Phone</div>
                    <div className="text-neutral-700 group-hover:text-[#4376BB] transition">
                      +91 8069648411
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-3 p-3">
                  <FiMapPin className="mt-0.5 text-[#4376BB]" />
                  <div>
                    <div className="font-medium">Service Areas</div>
                    <div className="text-neutral-700">
                      Uttar Pradesh, Delhi NCR, Maharashtra & across India
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3">
                  <FiClock className="mt-0.5 text-[#4376BB]" />
                  <div>
                    <div className="font-medium">Response Time</div>
                    <div className="text-neutral-700">
                      Within 24 hours (Monday-Saturday)
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-[#4376BB]/5 rounded-xl">
                <div className="text-sm font-medium text-[#4376BB] mb-3 uppercase tracking-wide">
                  Our Specializations
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {[
                    "Waterproofing Systems",
                    "Structural Retrofitting",
                    "Industrial Flooring",
                    "Grouting Services",
                    "Concrete Cutting",
                    "Civil Construction",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <FiCheckCircle className="w-3 h-3 text-green-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <Link href="/services" className="text-sm font-medium text-[#4376BB] hover:text-[#2c4a7d]">
                  Explore all services
                </Link>
              </div>
            </aside>

            <div id="project-form" className="rounded-2xl border border-black/10 bg-white p-6 md:p-8 shadow-lg">
              <ContactForm
                handleSubmit={handleSubmit}
                submitting={submitting}
                status={status}
              />
            </div>
          </div>

          <div className="mt-12">
            <LocationsList />
          </div>
        </div>
      </section>
    </main>
  );
}

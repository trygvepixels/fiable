"use client";
import React, { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiGlobe,
  FiClock,
  FiMapPin,
  FiArrowRight,
  FiMessageCircle,
  FiCheckCircle,
  FiUsers,
  FiAward,
  FiTool
} from "react-icons/fi";
import { FaWhatsapp, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useRouter } from "next/navigation";
import ContactForm from "@/components/ContactForm";
import LocationsList from "@/components/LocationsList";
import Link from "next/link";

export default function FiableContactPage() {
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
    <main className="bg-[#F4F1EC] pt-20 pb-6 md:pt-40 text-[#101010]">
       

      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden ">
        <div className="max-w-5xl mx-auto px-5 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur rounded-full px-4 py-2 mb-8">
            <FiCheckCircle className="w-4 h-4 text-[#4376BB]" />
            <span className="text-[#4376BB] font-semibold text-sm uppercase tracking-wide">
              Trusted Construction Partner
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-  tracking-tight leading-[1.1]">
            <span className="bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent">
              Let's Build Your
            </span>{" "}
            <br />
            <span className="text-black">Construction </span>
            <span className="bg-gradient-to-r from-[#4376BB] to-blue-700 bg-clip-text text-transparent">
              Vision Together
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-5 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Structural retrofitting, waterproofing, and industrial construction solutions. 
            Share your project requirements and get expert consultation from India's trusted construction specialists.
          </p>

          {/* CTA buttons */}
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

      {/* ===== Contact + Form ===== */}
      <section className="relative mt-20">
        <div className="max-w-7xl mx-auto px-5 pb-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[0.9fr_1.1fr]">
            {/* Info panel */}
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

              {/* Contact Methods */}
              <div className="mt-6 grid gap-4 text-[15px]">
                <a
                  href="mailto:enquiry@fiableprojects.com"
                  className="group flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition"
                >
                  <FiMail className="mt-0.5 text-[#4376BB]" />
                  <div>
                    <div className="font-medium">Primary Email</div>
                    <div className="text-neutral-700 group-hover:text-[#4376BB] transition">
                      enquiry@fiableprojects.com
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:admin@fiableprojects.com"
                  className="group flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition"
                >
                  <FiMail className="mt-0.5 text-[#4376BB]" />
                  <div>
                    <div className="font-medium">Alternative Email</div>
                    <div className="text-neutral-700 group-hover:text-[#4376BB] transition">
                      admin@fiableprojects.com
                    </div>
                  </div>
                </a>

                <a
                  href="tel:+918069648411"
                  className="group flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition"
                >
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
                      Within 24 hours (Monday–Saturday)
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="mt-6 p-4 bg-[#4376BB]/5 rounded-xl">
                <div className="text-sm font-medium text-[#4376BB] mb-3 uppercase tracking-wide">
                  Our Specializations
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-2">
                    <FiCheckCircle className="w-3 h-3 text-green-500" />
                    <span>Waterproofing Systems</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCheckCircle className="w-3 h-3 text-green-500" />
                    <span>Structural Retrofitting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCheckCircle className="w-3 h-3 text-green-500" />
                    <span>Industrial Flooring</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCheckCircle className="w-3 h-3 text-green-500" />
                    <span>Grouting Services</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCheckCircle className="w-3 h-3 text-green-500" />
                    <span>Civil Construction</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCheckCircle className="w-3 h-3 text-green-500" />
                    <span>Anchor Systems</span>
                  </div>
                </div>
              </div>

              {/* Testimonials */}
              
            </aside>

            {/* Form */}
            <div id="project-form" className="rounded-2xl border border-black/10 bg-white p-6 md:p-8 shadow-lg">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-2">Get Your Project Quote</h3>
                <p className="text-gray-600">
                  Share your construction requirements and receive a detailed proposal within 24 hours.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Personal Details */}
                <div className="grid md:grid-cols-2 gap-4">
                  <Field
                    label="Full Name"
                    name="fullName"
                    placeholder="Your full name"
                    required
                  />
                  <Field
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <Field
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    required
                  />
                  <Field
                    label="Company/Organization"
                    name="company"
                    placeholder="Your company name"
                  />
                </div>

                {/* Project Details */}
                <Field
                  label="Project Location"
                  name="location"
                  placeholder="City, State"
                  required
                />

                <Select
                  label="Service Required"
                  name="projectType"
                  required
                  options={[
                    "Waterproofing Systems",
                    "Structural Retrofitting", 
                    "Industrial Flooring",
                    "Grouting Services",
                    "Civil Construction",
                    "Anchor/Rebar Services",
                    "Multiple Services",
                    "Consultation Only"
                  ]}
                />

                <div className="grid md:grid-cols-2 gap-4">
                  <Select
                    label="Project Budget (INR)"
                    name="budget"
                    options={[
                      "Under 5 Lakhs",
                      "5-10 Lakhs",
                      "10-25 Lakhs", 
                      "25-50 Lakhs",
                      "50 Lakhs - 1 Crore",
                      "Above 1 Crore",
                      "Need Assessment"
                    ]}
                  />
                  <Select
                    label="Project Timeline"
                    name="timeline"
                    options={[
                      "Immediate (Within 1 month)",
                      "1-3 months",
                      "3-6 months",
                      "6-12 months",
                      "More than 1 year",
                      "Just exploring options"
                    ]}
                  />
                </div>

                <Textarea
                  label="Project Details"
                  name="message"
                  placeholder="Please describe your construction requirements, project scope, specific challenges, or any technical specifications..."
                  required
                />

                {/* Hidden honeypot field */}
                <input type="text" name="website" style={{ display: 'none' }} />

                {/* Status Message */}
                {status && (
                  <div className={`rounded-xl p-4 text-sm ${
                    status.state === "success" 
                      ? "bg-green-50 text-green-700 border border-green-200" 
                      : "bg-red-50 text-red-700 border border-red-200"
                  }`}>
                    {status.message}
                  </div>
                )}

                {/* BOQ Note */}
                <p className="text-sm text-gray-600 text-center">
                  If you have any BOQ, please share it at enquiry@fiableprojects.com
                </p>
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-xl bg-[#4376BB] text-white px-6 py-4 font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                      Sending Request...
                    </>
                  ) : (
                    <>
                      <FiArrowRight className="w-4 h-4" />
                      Send Project Inquiry
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our terms and privacy policy. 
                  We'll contact you within 24 hours to discuss your project.
                </p>
              </form>
            </div>
          </div>

          {/* Office Locations */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-  mb-4">Our <span className="text-[#4376BB]">Office Locations</span></h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Visit us at our offices or schedule an on-site consultation for your construction project.
              </p>
            </div>

             <LocationsList />
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- Form Components ---------- */
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
        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#4376BB] focus:ring-2 focus:ring-[#4376BB]/20 transition"
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
        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#4376BB] focus:ring-2 focus:ring-[#4376BB]/20 transition"
        defaultValue=""
      >
        <option value="" disabled>
          Choose an option...
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
        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#4376BB] focus:ring-2 focus:ring-[#4376BB]/20 transition resize-vertical"
      />
    </label>
  );
}

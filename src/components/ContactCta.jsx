"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function ContactCta() {
  const [content, setContent] = useState({
    heading: "Facing Leakage or Structural Issues?",
    subheading: "Get expert help today from trusted waterproofing contractors.",
    buttonText: "Book Free Inspection",
    phone: "+91 8069648411",
    email: "enquiry@fiableprojects.com",
  });

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await fetch("/api/homepage-settings");
        if (res.ok) {
          const data = await res.json();
          if (data.ctaSection) {
            setContent(data.ctaSection);
          }
        }
      } catch (err) {
        console.error("Failed to fetch CTA section settings", err);
      }
    };
    fetchSettings();
  }, []);

  return (
    <section className="bgWarm py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#234D7E] px-8 py-14 text-white md:px-12 md:py-16">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-100">
            <div className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-[#234D7E]/20 blur-3xl"></div>
            <div className="absolute -right-10 -top-16 h-48 w-48 rounded-full bg-white/6 blur-3xl"></div>
          </div>

          <div className="relative max-w-4xl">
            {/* Minimal badge */}
            <div className="mb-8 inline-flex items-center gap-3">
              <div className="h-px w-8 bg-white/30"></div>
              <span className="text-xs font-medium uppercase tracking-[0.24em] text-white/60">
                Ready to Start?
              </span>
            </div>

            {/* Clean heading */}
            <h2 className="mb-6 text-4xl font-semibold leading-tight text-white lg:text-5xl">
              {content.heading}
            </h2>

            {/* Modern description */}
            <p className="mb-12 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">
              {content.subheading}
            </p>

            {/* Contact options */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/contact-us#project-form"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#F4F1EC] px-8 py-4 font-semibold text-gray-900 transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-xl"
              >
                <span>{content.buttonText}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a
                href={`tel:${content.phone?.replace(/\\s+/g, '') || "+918069648411"}`}
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10"
              >
                <Phone className="w-5 h-5" />
                <span>{content.phone || "+91 8069648411"}</span>
              </a>
            </div>

            {/* Minimal contact info */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>{content.email || "enquiry@fiableprojects.com"}</span>
              </div>
               
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

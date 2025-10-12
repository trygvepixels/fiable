"use client";

import React from "react";
import { ArrowRight, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function ContactCta() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-[#4376bb] to-blue-200 rounded-3xl px-12 py-16 text-white relative overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-4xl">
            {/* Minimal badge */}
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-white/30"></div>
              <span className="text-sm font-mono uppercase tracking-wider text-white/60">
                Ready to Start?
              </span>
            </div>

            {/* Clean heading */}
            <h2 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
              Have an upcoming
              <br />
              <span className="font-semibold">construction project?</span>
            </h2>

            {/* Modern description */}
            <p className="text-xl text-white/80 leading-relaxed mb-12 max-w-2xl font-light">
              From structural retrofitting to waterproofing solutions, Fiable Building Solutions delivers precision construction services across India. Let's discuss your requirements.
            </p>

            {/* Contact options */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/contact-us#project-form"
                className="group inline-flex items-center justify-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a
                href="tel:+918069648411"
                className="inline-flex items-center justify-center gap-3 border-2 border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:border-white/40 hover:bg-white/10 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                <span>+91 8069648411</span>
              </a>
            </div>

            {/* Minimal contact info */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>sales@fiableprojects.com </span>
              </div>
               
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

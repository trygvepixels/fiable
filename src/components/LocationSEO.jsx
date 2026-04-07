// src/components/LocationSEO.jsx
"use client";

import React, { useEffect, useState } from "react";
import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LocationSEO() {
  const [content, setContent] = useState({
    heading: "Waterproofing Services in Lucknow",
    body: "We provide professional waterproofing and building repair services across Lucknow and nearby areas. From Gomti Nagar to Aliganj, our expert team ensures that your home or office stays protected from water damage and structural issues.",
  });

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await fetch("/api/homepage-settings");
        if (res.ok) {
          const data = await res.json();
          if (data.locationSection) {
            setContent(data.locationSection);
          }
        }
      } catch (err) {
        console.error("Failed to fetch location section settings", err);
      }
    };
    fetchSettings();
  }, []);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative p-12 lg:p-20 rounded-[4rem] bg-zinc-900 text-white overflow-hidden shadow-2xl">
          {/* Background visuals */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/40 via-blue-800/20 to-transparent"></div>
          <div className="absolute top-10 right-10 w-64 h-64 bg-blue-600 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-blue-500 to-yellow-400 opacity-30"></div>

          <div className="relative z-10 grid lg:grid-cols-5 gap-16 items-center">
            <div className="lg:col-span-3 space-y-8">
              <div className="inline-flex items-center gap-3 text-yellow-400 font-mono text-sm tracking-widest uppercase">
                <MapPin className="w-5 h-5" />
                <span>Regional Expertise - Uttar Pradesh</span>
              </div>
              
              <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
                {content.heading}
              </h2>
              
              <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl">
                {content.body}
              </p>

              <div className="flex flex-wrap gap-4 pt-6">
                <Link 
                  href="/contact-us"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-3xl font-bold flex items-center gap-3 transition-all hover:scale-105"
                >
                  Find Us in Lucknow
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a 
                  href="tel:+918069648411"
                  className="border-2 border-zinc-700 hover:border-zinc-500 text-white px-10 py-5 rounded-3xl font-bold flex items-center gap-3 transition-all"
                >
                  Call Now
                </a>
              </div>
            </div>

            <div className="lg:col-span-2 relative">
               {/* Minimal abstract representation of Map/Location */}
               <div className="aspect-square bg-zinc-800 rounded-[3rem] p-8 relative group cursor-crosshair">
                 <div className="absolute inset-8 border border-zinc-700 rounded-[2rem] group-hover:border-blue-500/50 transition-colors duration-500"></div>
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-24 h-24">
                       <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-20"></div>
                       <div className="relative z-10 w-full h-full bg-blue-600 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(37,99,235,0.5)]">
                         <MapPin className="w-10 text-white" />
                       </div>
                    </div>
                 </div>
                 {/* City labels */}
                 <div className="absolute top-1/4 right-1/4 text-xs font-bold text-zinc-500 tracking-widest">LKO</div>
                 <div className="absolute bottom-1/4 left-1/4 text-xs font-bold text-zinc-500 tracking-widest">KNP</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

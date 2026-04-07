// src/components/TrustSection.jsx
"use client";

import React, { useEffect, useState } from "react";
import { ShieldCheck, Award, HeartHandshake } from "lucide-react";

export default function TrustSection() {
  const [content, setContent] = useState({
    heading: "Reliable Building Repair & Waterproofing Experts",
    body: "We specialize in delivering high-quality waterproofing services, structural repair, and concrete rehabilitation solutions. With years of experience and advanced techniques, we ensure long-lasting protection and durability for your structures.",
  });

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await fetch("/api/homepage-settings");
        if (res.ok) {
          const data = await res.json();
          if (data.trustSection) {
            setContent(data.trustSection);
          }
        }
      } catch (err) {
        console.error("Failed to fetch trust section settings", err);
      }
    };
    fetchSettings();
  }, []);

  return (
    <section className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold">
              <ShieldCheck className="w-5 h-5" />
              <span>Trust & Performance</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {content.heading}
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              {content.body}
            </p>

            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Proven Track Record</h4>
                  <p className="text-sm text-gray-500 underline decoration-blue-200">High-quality execution</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-yellow-400 rounded-2xl flex items-center justify-center text-black shadow-lg shadow-yellow-100">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Expert Guidance</h4>
                  <p className="text-sm text-gray-500 underline decoration-yellow-200">Engineer-led solutions</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl skew-y-1 hover:skew-y-0 transition-transform duration-700">
               <img 
                 src="/image.png" 
                 alt="Professional structural repair work" 
                 className="w-full h-full object-cover"
               />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400 rounded-[2rem] -z-10 animate-pulse"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-600 rounded-full blur-3xl opacity-20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

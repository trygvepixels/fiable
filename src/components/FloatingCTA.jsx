"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function FloatingCTA() {
  const [ctaSettings, setCtaSettings] = useState(null);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await fetch("/api/homepage-settings");
        if (res.ok) {
          const data = await res.json();
          if (data.floatingCta) {
            setCtaSettings(data.floatingCta);
          }
        }
      } catch (err) {
        console.error("Failed to fetch floating CTA settings", err);
      }
    };
    fetchSettings();
  }, []);

  if (ctaSettings && !ctaSettings.show) {
    return null;
  }

  const link = ctaSettings?.link || "/contact-us#project-form";
  const text = ctaSettings?.text || "Start Project";
  
  // Split words if possible to reproduce "Start <yellow>Project</yellow>" styling if the text is simply "Start Project"
  let words = text.split(" ");
  let firstPart = text;
  let highlightPart = "";
  if (words.length > 1) {
      highlightPart = words.pop();
      firstPart = words.join(" ") + " ";
  }

  return (
    <div className="fixed bottom-5 z-10 right-5">
      <Link href={link}>
        <button className="group relative overflow-hidden bg-gradient-to-r from-[#4376BB] to-[#2c4a7d] hover:from-[#365a99] hover:to-[#1e3d6f] text-white px-8 py-3.5 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-out font-semibold text-sm flex items-center gap-3">
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
          <span className="relative z-10">
            {firstPart} {highlightPart && <span className="text-[#F4C500] font-bold">{highlightPart}</span>}
          </span>
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </Link>
    </div>
  );
}

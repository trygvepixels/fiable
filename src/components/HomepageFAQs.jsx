"use client";

import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqItems = [
  {
    question: "What is the best waterproofing method for concrete roofs and terraces in India?",
    answer: "The best waterproofing method depends on roof usage and condition. For exposed terraces, multi-layer elastomeric PU (polyurethane) coatings or high-performance APP modified bituminous membrane systems are highly recommended. For tiled roofs or balconies, polyurethane injection grouting or specialized brush-applied acrylic polymer cementitious coatings provide durable, long-term leakage control without demolition.",
  },
  {
    question: "What causes wall seepage and dampness in homes, and how is it repaired?",
    answer: "Wall dampness (seepage) is typically caused by capillary action (ground moisture rising up walls due to missing DPC), external wall cracks, or plumbing leaks. To repair rising dampness, we execute chemical injection grouting to establish a new damp-proof barrier. External wall cracks are sealed with high-elasticity acrylic crack fillers and waterproof paint to prevent rainwater ingress.",
  },
  {
    question: "Why should I choose an engineer-led waterproofing company over a local mason?",
    answer: "Local masons typically use basic cement mixtures for temporary patchwork, which fails within a single monsoon. An engineer-led firm like Fiable performs systematic diagnostics using moisture meters and thermal checks, prepares detailed technical specifications, selects precisely matched chemicals (acrylic, polyurethane, epoxy), and executes with strict QA/QC to deliver warranty-backed results.",
  },
  {
    question: "What is structural rehabilitation, and when does a building need it?",
    answer: "Structural rehabilitation is the process of restoring and strengthening load-bearing RCC (reinforced cement concrete) members that have degraded due to corrosion, weather, or load shifts. A building needs rehabilitation if you observe exposed rusted rebars, deep cracks in columns or beams, concrete spalling (chipping), or sagging slabs. We utilize micro-concrete jacketing, polymer modification, and epoxy crack injection to restore load capacities.",
  },
  {
    question: "Does Fiable offer a warranty on waterproofing and structural repair works?",
    answer: "Yes, all our major waterproofing and structural rehabilitation systems are backed by documented performance warranties. Depending on the material system used (e.g., standard polymer modified cementitious vs. premium PU membranes), warranties range from 5 to 10+ years. We provide clear, written terms in our project handover document.",
  },
];

export default function HomepageFAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <section className="bg-[#f4f1ec68] py-16 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="eyebrow mb-4">FAQ Section</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#111111] md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#5f6570]">
            Get answers to common queries regarding building repair, structural strengthening, waterproofing cost, and execution processes.
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-black/10 bg-white transition-all duration-300 shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between p-6 text-left focus:outline-none focus-visible:bg-zinc-50"
                  aria-expanded={isOpen}
                >
                  <span className="text-base md:text-lg font-semibold text-gray-900 pr-4">
                    {item.question}
                  </span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F4F1EC] text-[#234D7E]">
                    {isOpen ? <FiMinus className="h-4 w-4" /> : <FiPlus className="h-4 w-4" />}
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[300px] border-t border-gray-100 opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <p className="p-6 text-sm md:text-base leading-relaxed text-[#5f6570]">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

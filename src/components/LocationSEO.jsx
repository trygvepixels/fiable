import React from "react";
import { MapPin, ArrowRight, Phone, CheckCircle } from "lucide-react";
import Link from "next/link";

const fallbackContent = {
  heading: "Waterproofing & Structural Repair Services in Lucknow",
  body: "We provide professional waterproofing, RCC structural rehabilitation, and industrial flooring services across Lucknow and nearby cities. From residential apartments in Gomti Nagar and Aliganj to industrial plants in Kanpur and Unnao, our expert engineering team ensures long-term building durability.",
};

export default function LocationSEO({ initialContent = fallbackContent }) {
  const content = initialContent || fallbackContent;

  const hubs = [
    { 
      name: "Lucknow (Head Office)", 
      desc: "Central Engineering & Site Estimations", 
      areas: "Gomti Nagar, Aliganj, Hazratganj, Indiranagar, BKT, Kursi Road" 
    },
    { 
      name: "Delhi NCR Hub", 
      desc: "Commercial Waterproofing & Protection", 
      areas: "Noida, Greater Noida, Gurgaon, Okhla" 
    },
    { 
      name: "Kanpur / Unnao Corridor", 
      desc: "Industrial Flooring & Concrete Repair", 
      areas: "Dada Nagar, Unnao Industrial Area, Fazalganj" 
    },
    { 
      name: "Maharashtra Operations", 
      desc: "Factory Coatings & Polyurethane Seals", 
      areas: "Mumbai industrial zones, Pune manufacturing hubs" 
    }
  ];

  return (
    <section className="bgWarm py-20 border-t border-black/5 text-[#101010] antialiased">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
          
          {/* Left Content Card */}
          <div className="rounded-[2.5rem] border border-black/10 bg-white p-8 md:p-12 shadow-[0_12px_40px_rgba(17,17,17,0.04)] flex flex-col justify-between">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#234D7E]/5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#234D7E]">
                <MapPin className="w-3.5 h-3.5" />
                <span>Regional Operational Coverage</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#111111] leading-tight max-w-2xl">
                {content.heading}
              </h2>
              
              <p className="text-base md:text-lg leading-relaxed text-neutral-650 max-w-3xl">
                {content.body}
              </p>

              {/* Local benefits E-E-A-T */}
              <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Lucknow Field Office</h4>
                    <p className="text-xs text-neutral-500 mt-0.5">On-demand wet area diagnostics & site inspections.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">UP & NCR Mobilization</h4>
                    <p className="text-xs text-neutral-500 mt-0.5">Rapid dispatch of engineering workforce & machinery.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-gray-100">
              <Link 
                href="/contact-us"
                className="group inline-flex items-center gap-2 rounded-full bg-[#234D7E] px-8 py-4 text-sm font-semibold text-white transition hover:scale-105 shadow-md hover:shadow-lg"
              >
                <span>Find Us in Lucknow</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a 
                href="tel:+918069648411"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-8 py-4 text-sm font-semibold text-[#111111] transition hover:bg-neutral-50"
              >
                <Phone className="w-4 h-4 text-[#234D7E]" />
                <span>Call Estimator</span>
              </a>
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="rounded-[2.5rem] border border-black/10 bg-white p-8 shadow-[0_12px_40px_rgba(17,17,17,0.04)] flex flex-col justify-between relative overflow-hidden bg-gradient-to-b from-blue-50/20 to-transparent">
            {/* Background Map Visual */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#101010 1px, transparent 1px)", backgroundSize: "16px 16px" }}></div>
            
            <div className="space-y-4 relative z-10">
              <div className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">Active Serving Nodes</div>
              <h3 className="text-xl font-bold text-gray-900">Regional Serving Hubs</h3>
              <p className="text-xs text-neutral-500 leading-relaxed">We maintain full capability control at our central engineering centers to guarantee uniform project quality across cities.</p>
            </div>

            <div className="mt-6 space-y-4 relative z-10">
              {hubs.map((hub, idx) => (
                <div key={hub.name} className="flex gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#234D7E]/20 transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#234D7E]/10 flex items-center justify-center text-[#234D7E] font-bold text-xs">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm flex items-center gap-1.5">
                      {hub.name}
                      {idx === 0 && <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 animate-ping"></span>}
                    </h4>
                    <p className="text-xs text-[#234D7E] mt-0.5 font-medium">{hub.desc}</p>
                    <p className="text-[11px] text-neutral-500 mt-1 leading-relaxed">{hub.areas}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Accent Footer Decoration */}
            <div className="mt-6 flex items-center justify-between text-[11px] text-neutral-400 font-medium pt-4 border-t border-gray-100">
              <span>EST. 2019</span>
              <span>•</span>
              <span>VERIFIED GSTIN IN UP & MH</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

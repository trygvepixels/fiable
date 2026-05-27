import React from "react";
import { ShieldCheck, Award, HeartHandshake } from "lucide-react";

const fallbackContent = {
  heading: "Reliable Building Repair & Waterproofing Experts",
  body: "We specialize in delivering high-quality waterproofing services, structural repair, and concrete rehabilitation solutions. With years of experience and advanced techniques, we ensure long-lasting protection and durability for your structures.",
};

export default function TrustSection({ initialContent = fallbackContent }) {
  const content = initialContent || fallbackContent;

  return (
    <section className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold">
              <ShieldCheck className="w-5 h-5" />
              <span>Trust & Performance</span>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {content.heading}
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              {content.body}
            </p>

            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#234D7E] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base">Proven Track Record</h3>
                  <p className="text-sm text-gray-500 underline decoration-blue-200">High-quality execution</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#234D7E] rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base">Expert Guidance</h3>
                  <p className="text-sm text-gray-500 underline decoration-yellow-200">Engineer-led solutions</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl skew-y-1 hover:skew-y-0 transition-transform duration-700">
               <img 
                 src="/trust_section.png" 
                 alt="Professional structural repair work by Fiable Building Solutions" 
                 className="w-full h-full object-cover"
               />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#234D7E] rounded-[2rem] -z-10 animate-pulse"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-600 rounded-full blur-3xl opacity-20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

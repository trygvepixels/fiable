"use client";

import React from "react";
import { 
  Users,
  Wrench,
  ShieldCheck,
  Building,
  CheckCircle,
  ArrowUpRight
} from "lucide-react";

export default function WhyChooseUsFiable() {
  const [content, setContent] = React.useState({
    heading: "Why choose",
    highlight: "Fiable Building Solutions?",
  });

  React.useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await fetch("/api/homepage-settings");
        if (res.ok) {
          const data = await res.json();
          if (data.whyChooseUsSection) {
            setContent(data.whyChooseUsSection);
          }
        }
      } catch (err) {
        console.error("Failed to fetch why choose us section settings", err);
      }
    };
    fetchSettings();
  }, []);

  return (
    <section className="py-24 lg:py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
        
          <h2 className="text-4xl lg:text-5xl font-li ght text-gray-900 mb-6">
            {content.heading}
            <span className="font-medium text-[#4376BB] block mt-2">{content.highlight}</span>
          </h2>
          <div className="w-16 h-px bg-gray-900 mx-auto"></div>
        </div>

        {/* Core Features - Clean Grid */}
        <div className="grid gap-16 lg:gap-20 md:grid-cols-2 lg:grid-cols-5">
          
          {/* Experienced Engineers */}
          <div className="group text-center">
            <div className="w-16 h-16 mx-auto mb-8 border border-gray-200 rounded-full flex items-center justify-center group-hover:border-gray-900 transition-colors duration-300">
              <Users className="h-7 w-7 text-gray-600 group-hover:text-gray-900 transition-colors" />
            </div>
            <h3 className="text-lg font-medium text-[#4376BB] mb-4">
               Engineers & Experts
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
               Expert-led analysis and precise execution by certified professionals.
            </p>
          </div>

          {/* High-Quality Materials */}
          <div className="group text-center">
            <div className="w-16 h-16 mx-auto mb-8 border border-gray-200 rounded-full flex items-center justify-center group-hover:border-gray-900 transition-colors duration-300">
              <ShieldCheck className="h-7 w-7 text-gray-600 group-hover:text-gray-900 transition-colors" />
            </div>
            <h3 className="text-lg font-medium text-[#4376BB] mb-4">
               Quality Materials
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
               Premium tested chemicals from trusted global partners for lasting results.
            </p>
          </div>

          {/* Long-Term Durable */}
          <div className="group text-center">
            <div className="w-16 h-16 mx-auto mb-8 border border-gray-200 rounded-full flex items-center justify-center group-hover:border-gray-900 transition-colors duration-300">
              <Building className="h-7 w-7 text-gray-600 group-hover:text-gray-900 transition-colors" />
            </div>
            <h3 className="text-lg font-medium text-[#4376BB] mb-4">
              Durable Solutions
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Engineered solutions that withstand time and environmental stress.
            </p>
          </div>

          {/* Transparent Pricing */}
          <div className="group text-center">
            <div className="w-16 h-16 mx-auto mb-8 border border-gray-200 rounded-full flex items-center justify-center group-hover:border-gray-900 transition-colors duration-300">
              <CheckCircle className="h-7 w-7 text-gray-600 group-hover:text-gray-900 transition-colors" />
            </div>
            <h3 className="text-lg font-medium text-[#4376BB] mb-4">
              Transparent Pricing
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Honest estimation and no hidden costs for complete peace of mind.
            </p>
          </div>

           {/* On-Time Delivery */}
           <div className="group text-center">
            <div className="w-16 h-16 mx-auto mb-8 border border-gray-200 rounded-full flex items-center justify-center group-hover:border-gray-900 transition-colors duration-300">
              <ArrowUpRight className="h-7 w-7 text-gray-600 group-hover:text-gray-900 transition-colors" />
            </div>
            <h3 className="text-lg font-medium text-[#4376BB] mb-4">
              On-Time Delivery
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Efficient project management ensuring stick schedules and zero delays.
            </p>
          </div>

        </div>

       

      

        

      </div>
    </section>
  );
}

"use client";

import ContactCta from "@/components/ContactCta";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  FaCheckCircle, FaArrowRight, FaWhatsapp, FaPhoneAlt
} from "react-icons/fa";
import StepsSection from "@/components/StepsSection";
import { ArrowRight, Phone } from "lucide-react";

export default function ServicesPageV2() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setIsLoaded(true);

    const fetchServices = async () => {
      try {
        const res = await fetch("/api/services?sort=order%20-createdAt&limit=100", { cache: "no-store" });
        const json = await res.json();
        if (!res.ok) throw new Error(json?.error || "Failed to load services");
        setServices(json.items || []);
      } catch (err) {
        console.error("Error fetching services:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <main className="bg-white">
      <div className="fixed bottom-5 z-20 right-5">
        <Link href="/contact-us#project-form">
  <button className="group relative overflow-hidden bg-gradient-to-r from-[#4376BB] to-[#2c4a7d] hover:from-[#365a99] hover:to-[#1e3d6f] text-white px-8 py-3.5 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-out font-semibold text-sm flex items-center gap-3">
    {/* Background animation */}
    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
    
    {/* Icon */}
    
    
    {/* Text */}
    <span className="relative z-10">
      Start <span className="text-[#F4C500] font-bold">Project</span>
    </span>
    
    {/* Arrow */}
    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round"  strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  </button>
</Link>

      </div>

      {/* Minimal Hero */}
      <section className="pt-32 pb-20  bg-[#F4F1EC]">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-gray-900"></div>
              <span className="text-sm font-mono uppercase tracking-wider text-gray-600">
                Fiable Building Solutions
              </span>
              <div className="w-8 h-px bg-gray-900"></div>
            </div>
            
            <h1 className="text-5xl lg:text-5xl font-li ght text-gray-900 mb-8 leading-tight">
              Construction
              <br />
              <span className="text-[#4376BB]">Services</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Structural retrofitting, waterproofing, and industrial construction solutions 
              delivered with precision across India since 2019.
            </p>

            <div className="flex flex-col mx-auto w-full justify-center sm:flex-row gap-4">
              <a
                href="tel:+918069648411"
                className="group inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-400 px-8 py-4 font-bold text-black hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 shadow-2xl hover:shadow-yellow-400/30 hover:-translate-y-1 transform"
              >
                <Phone className="mr-3 h-5 w-5 group-hover:animate-pulse" />
                Call Now: +91 8069648411
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Services Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          {loading ? (
            <p className="text-center text-gray-500">Loading services...</p>
          ) : (
            <div className="grid lg:grid-cols-2 gap-16">
              {services.map((service, index) => (
                <div
                  key={service._id}
                  className={`group transition-all duration-700 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex gap-8">
                    <div className="flex-shrink-0">
                      <div className="text-6xl font-light text-gray-200 group-hover:text-gray-300 transition-colors">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-6">
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{service.summary}</p>
                      </div>
                      
                      <div className="aspect-video rounded-lg overflow-hidden">
                        <img
                          src={service.image?.src}
                          alt={service.image?.alt || service.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>

                      <ul className="space-y-2">
                        {service.points?.map((point, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                            <span className="text-gray-700">{point}</span>
                          </li>
                        ))}
                      </ul>

 
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <StepsSection/>
      <ContactCta/>
    </main>
  );
}

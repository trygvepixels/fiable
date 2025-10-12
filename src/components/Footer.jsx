"use client";

import React from "react";
import { 
  ArrowUpRight, 
  Phone, 
  Mail, 
  Clock, 
  MapPin,
  Send,
  ExternalLink,
  Building,
  Wrench,
  ShieldCheck
} from "lucide-react";
import { 
  FaLinkedin, 
  FaInstagram, 
  FaFacebook, 
  FaXTwitter 
} from "react-icons/fa6";
import logo from "@/assets/logo.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative z-30 overflow-hidden bg-gradient-to-br from-gray-500 via-black to-[#4376BB]">
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

      {/* Main Content */}
      <div className="relative">
        {/* CTA Section */}
       
        {/* Main Footer Content */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid gap-12 lg:gap-16 lg:grid-cols-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-5">
              <div className="mb-8">
                <div className="flex bg-white p-3 rounded-2xl  items-center gap-3 mb-6">
                  <Image src={logo} alt="Fiable Logo" className="h-20 w-auto" />
                  <div>
                    <h3 className="text-2xl font-semibold text-black">Fiable Building Solutions</h3>
                    <p className="text-gray-700 text-xl">Pvt. Ltd.</p>
                  </div>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
                  One Stop Solution for Construction & Industrial Repair
                  <span className="block text-gray-300 text-lg font-normal mt-2">Where Quality Meets Trust</span>
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                  Professional team offering advanced construction solutions with focus on durability, performance, and precision for residential, commercial, and industrial projects.
                </p>
              </div>

              
              {/* Social Links */}
              <div className="flex gap-4">
                {[
                  { icon: FaLinkedin, href: "#", label: "LinkedIn" },
                  { icon: FaInstagram, href: "#", label: "Instagram" },
                  { icon: FaFacebook, href: "#", label: "Facebook" },
                  { icon: FaXTwitter, href: "#", label: "Twitter" }
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="group p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110"
                    aria-label={label}
                  >
                    <Icon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services & Contact */}
            <div className="lg:col-span-7 grid gap-12 sm:gap-8 lg:grid-cols-2">
              
              {/* Our Specialized Services */}
              <div>
                <h4 className="text-white font-semibold mb-6 text-lg flex items-center gap-2">
                  <Wrench className="h-5 w-5 text-blue-400" />
                  Our Specialized Services
                </h4>
                <nav className="space-y-4">
                  {[
                    ["Waterproofing Services", "#waterproofing"],
                    ["Structural Refurbishment", "#structural"],
                    ["Industrial Flooring Systems", "#flooring"],
                    ["Industrial Grouting Services", "#grouting"],
                    ["Concrete Cutting & Demolition", "#cutting"],
                    ["Anchor/Rebar Services", "#anchor"],
                    ["Civil Construction", "#civil"]
                  ].map(([label, href]) => (
                    <p
                      key={label}
                      // href={href}
                      className="group flex items-center text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-blue-400 transition-all duration-200 mr-0 group-hover:mr-3"></span>
                      {label}
                    </p>
                  ))}
                </nav>
 
              </div>

              {/* Contact Information */}
              <div>
                <h4 className="text-white font-semibold mb-6 text-lg flex items-center gap-2">
                  <Building className="h-5 w-5 text-purple-400" />
                  Get in Touch
                </h4>
                <div className="space-y-6">
                  
                  <div className="flex items-start gap-4 group">
                    <div className="p-2 bg-white/5 rounded-lg border border-white/10 group-hover:bg-white/10 transition-all">
                      <Phone className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Technical Expert Hotline</p>
                      <div className="space-y-1">
                        <a href="tel:+918069648411" className="text-white font-medium hover:text-blue-400 transition-colors block">
                          +91 8069648411
                        </a>
                         
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="p-2 bg-white/5 rounded-lg border border-white/10 group-hover:bg-white/10 transition-all">
                      <Mail className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Business Inquiries</p>
                      <div className="space-y-1">
                        <a href="mailto:enquiry@fiableprojects.com" className="text-white font-medium hover:text-green-400 transition-colors block text-sm">
                          enquiry@fiableprojects.com
                        </a>
                        <a href="mailto:admin@fiableprojects.com" className="text-white font-medium hover:text-green-400 transition-colors block text-sm">
                          admin@fiableprojects.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* <div className="flex items-start gap-4 group">
                    <div className="p-2 bg-white/5 rounded-lg border border-white/10 group-hover:bg-white/10 transition-all">
                      <MapPin className="h-5 w-5 text-orange-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Registered Office</p>
                      <p className="text-white font-medium leading-relaxed">
                        728, Phase 2, Khasra No. 21, Eden Enclave, Kursi Road, Gudumba BKT, Lucknow-226026, Uttar Pradesh (INDIA)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="p-2 bg-white/5 rounded-lg border border-white/10 group-hover:bg-white/10 transition-all">
                      <Clock className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Business Hours</p>
                      <p className="text-white font-medium">Mon–Sat, 9:00am–7:00pm IST</p>
                    </div>
                  </div> */}

                </div>

                
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              
              {/* Copyright */}
              <div className="text-center lg:text-left">
                <p className="text-gray-400 text-sm">
                  © {new Date().getFullYear()} Fiable Building Solutions Pvt. Ltd.  
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  GST No: 09AADCF7399H1Z2  
                 </p>
              </div>

              {/* Credits */}
              <div className="flex flex-col sm:flex-row items-center gap-1  text-sm">
                <span className="text-gray-400">Designed & Developed By</span>
                 <a
                  href="https://genforgestudio.com/"
                  className="text-blue-400 hover:text-blue-300 transition-colors font-medium flex items-center gap-1"
                >
                GenForge Studio
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>

            </div>

            
          </div>
        </div>

      </div>

      {/* Background Brand Text */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 pointer-events-none select-none">
        <p className="text-[7vw] font-bold text-white/[0.015] whitespace-nowrap">
          Fiable Building Solutions
        </p>
      </div>

    </footer>
  );
}

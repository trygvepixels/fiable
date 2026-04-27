"use client";

import { usePathname } from "next/navigation";
import { 
  Phone, 
  Mail, 
  ExternalLink,
  Building,
  Wrench,
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
  const pathname = usePathname();

  // Hide footer on admin routes
  if (pathname?.startsWith("/admin")) return null;
  return (
    <footer className="relative z-30 overflow-hidden border-t border-black/10 bg-[#F4F1EC]">
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#234D7E] via-transparent to-transparent"></div>

      {/* Main Content */}
      <div className="relative">
        {/* CTA Section */}
       
        {/* Main Footer Content */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid gap-12 lg:gap-16 lg:grid-cols-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-5">
              <div className="mb-8">
                <div className="mb-6 flex items-center gap-3 rounded-[1.5rem] border border-black/10 bg-white p-3">
                  <Image src={logo} alt="Fiable Logo" className="h-20 w-auto" />
                  <div>
                    <h3 className="text-2xl font-semibold text-black">Fiable Building Solutions</h3>
                    <p className="text-sm uppercase tracking-[0.2em] text-[#5f6570]">Pvt. Ltd.</p>
                  </div>
                </div>
                <h3 className="mb-4 text-2xl font-semibold leading-tight text-[#111111] lg:text-3xl">
                  One Stop Solution for Construction & Industrial Repair
                  <span className="mt-2 block text-lg font-normal text-[#5f6570]">Where quality meets trust</span>
                </h3>
                <p className="max-w-md text-base leading-relaxed text-[#5f6570] md:text-lg">
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
                    className="group rounded-full border border-black/10 bg-white p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#234D7E]/20"
                    aria-label={label}
                  >
                    <Icon className="h-5 w-5 text-[#5f6570] transition-colors group-hover:text-[#234D7E]" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services & Contact */}
            <div className="lg:col-span-7 grid gap-12 sm:gap-8 lg:grid-cols-2">
              
              {/* Our Specialized Services */}
              <div>
                <h4 className="mb-6 flex items-center gap-2 text-lg font-semibold text-[#111111]">
                  <Wrench className="h-5 w-5 text-[#234D7E]" />
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
                    ["Civil Construction", "#civil"],
                  ].map(([label, href]) => (
                    <p
                      key={label}
                      // href={href}
                      className="group flex items-center text-[#5f6570] transition-colors duration-200 hover:text-[#111111]"
                    >
                      <span className="mr-0 h-px w-0 bg-[#234D7E] transition-all duration-200 group-hover:mr-3 group-hover:w-2"></span>
                      {label}
                    </p>
                  ))}
                </nav>
 
              </div>

              {/* Contact Information */}
              <div>
                <h4 className="mb-6 flex items-center gap-2 text-lg font-semibold text-[#111111]">
                  <Building className="h-5 w-5 text-[#234D7E]" />
                  Get in Touch
                </h4>
                <div className="space-y-6">
                  
                  <div className="flex items-start gap-4 group">
                    <div className="rounded-xl border border-black/10 bg-white p-2 transition-all group-hover:border-[#234D7E]/20">
                      <Phone className="h-5 w-5 text-[#234D7E]" />
                    </div>
                    <div>
                      <p className="mb-1 text-sm text-[#5f6570]">Technical Expert Hotline</p>
                      <div className="space-y-1">
                        <a href="tel:+918069648411" className="block font-medium text-[#111111] transition-colors hover:text-[#234D7E]">
                          +91 8069648411
                        </a>
                         
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="rounded-xl border border-black/10 bg-white p-2 transition-all group-hover:border-[#234D7E]/20">
                      <Mail className="h-5 w-5 text-[#234D7E]" />
                    </div>
                    <div>
                      <p className="mb-1 text-sm text-[#5f6570]">Business Inquiries</p>
                      <div className="space-y-1">
                        <a href="mailto:enquiry@fiableprojects.com" className="block text-sm font-medium text-[#111111] transition-colors hover:text-[#234D7E]">
                          enquiry@fiableprojects.com
                        </a>
                        <a href="mailto:admin@fiableprojects.com" className="block text-sm font-medium text-[#111111] transition-colors hover:text-[#234D7E]">
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
        <div className="border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              
              {/* Copyright */}
              <div className="text-center lg:text-left">
                <p className="text-sm text-[#5f6570]">
                  © {new Date().getFullYear()} Fiable Building Solutions   Pvt. Ltd.  
                </p>
                <p className="mt-1 text-xs text-[#5f6570]">
                  GST No: 09AADCF7399H1Z2  
                 </p>
              </div>

              {/* Credits */}
              <div className="flex flex-col sm:flex-row items-center gap-1  text-sm">
                <span className="text-[#5f6570]">Designed & Developed By</span>
                 <a
                  href="https://genforgestudio.com/"
                  className="flex items-center gap-1 font-medium text-[#234D7E] transition-colors hover:text-[#1b3b62]"
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
        <p className="whitespace-nowrap text-[7vw] font-bold text-[#234D7E]/[0.05]">
          Fiable Building Solutions
        </p>
      </div>

    </footer>
  );
}

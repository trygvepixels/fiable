"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";
import logo from "@/assets/logo.png";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Hide header on admin routes
  if (pathname?.startsWith("/admin")) return null;

  const links = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/blogs", label: "Insights" },
    { href: "/career", label: "Careers" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#F4F1EC]/95 backdrop-blur-lg border-b border-black/10 shadow-sm'
          : 'bg-[#F4F1EC]/88 backdrop-blur-md border-b border-black/5'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center gap-3 group"
              aria-label="Fiable Home"
            >
              <div className="w-16 h-16 rounded-2xl bg-white border border-black/10 flex items-center justify-center group-hover:scale-[1.02] transition-transform">
                <Image 
                  src={logo} 
                  alt="Fiable" 
                  className="p-2 w-auto" 
                />
              </div>
              <div className="  sm:block leading-tight">
                <div className="text-[17px] font-semibold tracking-[0.01em] text-[#111111]">
                  Fiable Building Solutions
                </div>
                <div className="text-[12px] uppercase tracking-[0.18em] text-[#5f6570]">
                  Pvt. Ltd.
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-[15px] md:text-[16px] font-medium text-[#111111] underline-offset-4 transition-colors duration-300 hover:text-[#234D7E] hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Section */}
            <div className="flex items-center gap-4">
              <a
                href="tel:+918069648411"
                className="hidden md:flex items-center gap-2 text-sm font-medium text-[#234D7E] transition-colors hover:text-[#1b3b62]"
              >
                <FiPhone className="w-4 h-4" />
                <span className="hidden lg:inline">+91-8069648411</span>
              </a>

              <Link
                href="/contact-us"
                className="hidden sm:inline-flex items-center rounded-full bg-[#234D7E] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1b3b62]"
              >
                Get Quote
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden rounded-full border border-black/10 bg-white p-2 text-[#111111] transition-colors hover:bg-[#fbf8f3]"
                aria-label="Toggle menu"
              >
                {isOpen ? <FiX className="w-5 h-5 text-[#234D7E]" /> : <FiMenu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div 
            className="absolute inset-0 bg-black/25 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-0 right-0 h-full w-full max-w-sm bg-[#F4F1EC] shadow-xl">
            <div className="p-6 pt-24">
              {/* Mobile Navigation */}
              <nav className="space-y-1">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-2xl px-4 py-3 text-[16px] font-medium text-[#111111] transition-colors hover:bg-white hover:text-[#234D7E]"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="mt-8 pt-6 border-t border-gray-200 space-y-4">
                <a
                  href="tel:+918069648411"
                  className="flex items-center gap-3 rounded-2xl px-4 py-3 font-medium text-[#234D7E] transition-colors hover:bg-white"
                  onClick={() => setIsOpen(false)}
                >
                  <FiPhone className="w-5 h-5" />
                  Call +91-8069648411
                </a>
                
                <Link
                  href="/contact-us"
                  className="block w-full rounded-full bg-[#234D7E] px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-[#1b3b62]"
                  onClick={() => setIsOpen(false)}
                >
                  Get Quote
                </Link>
              </div>

              {/* Company Info */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="text-center text-sm text-gray-600">
                  <p className="font-semibold text-gray-800">Fiable Building Solutions</p>
                  <p className="mt-1">Waterproofing and construction repair</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em]">Trust and honesty is our mantra</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

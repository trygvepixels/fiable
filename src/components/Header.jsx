"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";
import logo from "@/assets/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
          ? 'bg-[#F8F6F3] backdrop-blur-lg shadow-sm bord er-b border-gray-100' 
          : 'bg-gradient-to-b from-[#000000c7] via-[#0000007e] to-[#2c4a7d00]'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center gap-3 group"
              aria-label="Fiable Home"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#4376BB] to-[#2c4a7d] flex items-center justify-center group-hover:scale-105 transition-transform">
                <Image 
                  src={logo} 
                  alt="Fiable" 
                  className="p-2 w-auto filter brightness-0 invert" 
                />
              </div>
              
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-medium text-xl transition-colors duration-300 group ${
                    scrolled
                      ? "text-gray-700 hover:text-[#4376BB]"
                      : "text-white hover:text-white"
                  }`}
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#4376BB] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* CTA Section */}
            <div className="flex items-center text-xl gap-4">
              <a
                href="tel:+918069648411"
                className={`hidden md:flex items-center gap-2 font-medium text-sm transition-colors ${
                  scrolled
                    ? "text-[#4376BB] hover:text-[#2c4a7d]"
                    : "text-white hover:text-white"
                }`}
              >
                <FiPhone className="w-4 h-4" />
                <span className="hidden lg:inline text-2xl">+91-8069648411</span>
              </a>

              <Link
                href="/contact-us"
                className={`px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                  scrolled
                    ? "bg-[#FDC800] hover:bg-[#2c4a7d] text-black"
                    : "bg-[#FDC800] hover:bg-[#4376BB] text-black"
                }`}
              >
                Get Quote
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`lg:hidden p-2 rounded-lg transition-colors ${
                  scrolled
                    ? "text-gray-700 hover:bg-gray-100"
                    : "text-white hover:bg-black/20"
                }`}
                aria-label="Toggle menu"
              >
                {isOpen ? <FiX className="w-5 h-5 text-red-500" /> : <FiMenu className="w-5 h-5 text-black" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-0 right-0 w-full max-w-sm h-full bg-[#F8F6F3] shadow-xl">
            <div className="p-6 pt-24">
              {/* Mobile Navigation */}
              <nav className="space-y-1">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-3 text-gray-700 hover:text-[#4376BB] hover:bg-blue-50 rounded-lg font-medium transition-colors"
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
                  className="flex items-center gap-3 px-4 py-3 text-[#4376BB] hover:bg-blue-50 rounded-lg font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <FiPhone className="w-5 h-5" />
                  Call +91-8069648411
                </a>
                
                <Link
                  href="/contact-us"
                  className="block w-full bg-[#4376BB] text-white text-center px-6 py-3 rounded-lg font-medium hover:bg-[#2c4a7d] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Get Quote
                </Link>
              </div>

              {/* Company Info */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="text-center text-sm text-gray-600">
                  <p className="font-semibold text-gray-800">Fiable Building Solutions</p>
                  <p className="mt-1">Waterproofing & Construction Experts</p>
                  <p className="mt-2 text-xs">"Trust and Honesty is our mantra"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

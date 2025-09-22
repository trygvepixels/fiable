"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiAward, FiTrendingUp, FiUsers, FiShield } from "react-icons/fi";

export default function LogoCarousel() {
  const [logos, setLogos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fallback client data based on Fiable's actual partners
  const fallbackClients = [
    { name: "Shalimar", category: "Industrial", logo: "/api/placeholder/120/60" },
    { name: "Tanisha Infra Projects", category: "Construction", logo: "/api/placeholder/120/60" },
    { name: "Biswan Sugar Mill", category: "Industrial", logo: "/api/placeholder/120/60" },
    { name: "Ankur Udhyog", category: "Manufacturing", logo: "/api/placeholder/120/60" },
    { name: "SMVD", category: "Corporate", logo: "/api/placeholder/120/60" },
    { name: "Grotech Pvt.", category: "Technology", logo: "/api/placeholder/120/60" },
    { name: "Yash Papers", category: "Manufacturing", logo: "/api/placeholder/120/60" },
    { name: "Pack It Right", category: "Packaging", logo: "/api/placeholder/120/60" }
  ];

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const res = await fetch(`/api/client-logos`, {
          cache: "no-store",
        });
        if (!res.ok) throw new Error("Failed to fetch logos");
        const data = await res.json();
        setLogos(data.items || fallbackClients);
      } catch (error) {
        console.error("Error fetching client logos:", error);
        setLogos(fallbackClients); // Use fallback data
      } finally {
        setLoading(false);
      }
    };

    fetchLogos();
  }, []);

  const stats = [
    {
      icon: <FiUsers className="w-5 h-5" />,
      value: "50+",
      label: "Trusted Clients"
    },
    {
      icon: <FiAward className="w-5 h-5" />,
      value: "500+",
      label: "Projects Delivered"
    },
    {
      icon: <FiTrendingUp className="w-5 h-5" />,
      value: "6",
      label: "Years Experience"
    },
    {
      icon: <FiShield className="w-5 h-5" />,
      value: "100%",
      label: "Quality Assured"
    }
  ];

  if (loading) {
    return (
      <div className="relative w-full bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-[#4376BB] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading our valued partnerships...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="relative w-full bg-gradient-to-b from-gray-50 to-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${encodeURIComponent('#4376BB').slice(1)}' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header Section */}
        <div className="text-center mb-16">
           
          <h2 className="text-3xl md:text-5xl  -bold text-gray-900 mb-4 leading-tight">
            Proudly Partnering with
            <span className="block text-[#4376BB]">Industry Leaders</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Since 2019, we've built strong partnerships with leading industrial companies, 
            construction firms, and manufacturing units across India through our commitment 
            to quality waterproofing and structural solutions.
          </p>
        </div>

        {/* Stats Row */}
         
        {/* Main Content Area */}
        <div className="relative">
          {logos.length > 0 ? (
            <>
              {/* Logo Carousel */}
              <div className=" ">
                <motion.div
                  className="flex gap-16 items-center"
                  initial={{ x: 0 }}
                  animate={{ x: "-50%" }}
                  transition={{
                    repeat: Infinity,
                    duration: 30,
                    ease: "linear",
                  }}
                >
                  {/* Create seamless loop with multiple repetitions */}
                  {Array(6).fill(logos).flat().map((logo, idx) => (
                    <motion.div
                      key={`${logo._id || logo.name}-${idx}`}
                      className="flex-shrink-0 h-16 w-24 flex items-center justify-center group"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {logo.image?.src ? (
                        <img
                          src={logo.image.src}
                          alt={logo.image.alt || `${logo.name} logo`}
                          className="max-h-16 max-w-full object-contain  "
                        />
                      ) : (
                        <div className="h-12 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg flex items-center justify-center px-6 min-w-[120px]">
                          <span className="text-gray-600 font-semibold text-sm">
                            {logo.name}
                          </span>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </motion.div>

                {/* Enhanced Fade Edges */}
                </div>

              {/* Client Categories */}
            
            </>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-gray-200">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FiUsers className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Building Partnerships
              </h3>
              <p className="text-gray-600">
                We're continuously expanding our network of valued clients and partners.
              </p>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        
      </div>
    </section>
  );
}

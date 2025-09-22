"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlay, FiArrowRight, FiUsers, FiTool, FiShield } from "react-icons/fi";

export default function AboutFiableSection() {
  // Image arrays for rotation
  const backgroundImages = [
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
  ];

  const floatingImages = [
    "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  ];

  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  // Auto-rotate floating images (offset timing)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % floatingImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [floatingImages.length]);

  return (
    <section className="relative  flex items-center justify-center overflow-hidden bg-[#fcfcfb] pt-20">
      {/* Animated Background Images */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBgIndex}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.15, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
             
            <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-gray-50/60 to-gray-100/80"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Content - Minimalist */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
              

            {/* Clean Typography */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl   text-gray-900 leading-[0.9]">
                About{" "}
                <span className="font-semibold text-[#4376BB]">Fiable</span>
                <br />
                with{" "}
                <span className="font-semibold">Precision</span>
                <br />
                and{" "}
                <span className="  font-light text-gray-600">Excellence</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed font-light max-w-lg">
                Fiable Building Solutions delivers specialized structural retrofitting and waterproofing excellence. Our commitment to quality creates lasting partnerships built on trust and precision.
              </p>
            </div>

            {/* Minimal Stats */}
            {/* <div className="flex items-center gap-12 pt-8">
              <div className="text-center">
                <div className="text-3xl font-light text-gray-900">6+</div>
                <div className="text-sm text-gray-500 font-light">Years</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl font-light text-gray-900">500+</div>
                <div className="text-sm text-gray-500 font-light">Projects</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl font-light text-gray-900">98%</div>
                <div className="text-sm text-gray-500 font-light">Success</div>
              </div>
            </div>

             <div className="pt-8">
              <button className="group inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-[#4376BB] transition-all duration-300">
                <FiPlay className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Watch Our Story</span>
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div> */}
          </motion.div>

          {/* Right Content - Minimal Image Layout */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Main Rotating Image */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  <img
                    src={floatingImages[currentImageIndex]}
                    alt="Fiable construction excellence"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Minimal Floating Elements */}
              

               

              
            </div>

              
          </motion.div>
        </div>
      </div>

       

       
    </section>
  );
}

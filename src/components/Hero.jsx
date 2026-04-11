"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  Users,
  Layers,
  Zap,
  Phone
} from "lucide-react";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import Image from "next/image";
import Link from "next/link";

export default function AboutFiable() {
  const [hero, setHero] = useState(null);
  const [currentBg, setCurrentBg] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Fetch hero data from backend
    const loadHero = async () => {
      try {
        const res = await fetch("/api/hero", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch hero");
        const data = await res.json();
        setHero(data);
      } catch (err) {
        console.error(err);
      }
    };
    loadHero();
  }, []);

  // Background rotation
  useEffect(() => {
    if (!hero?.backgroundImages?.length) return;
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % hero.backgroundImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [hero]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-gray-900">
      {!hero ? (
        <div className="flex items-center justify-center h-screen text-gray-400">
          Loading...
        </div>
      ) : (
        <>
          {/* Background Images Carousel */}
          <div className="absolute inset-0 z-0">
            {hero.backgroundImages.map((img, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out ${
                  idx === currentBg
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-105"
                }`}
              >
                <Image
                  src={img}
                  alt={`Fiable Building Solutions - ${hero.rotatingWords?.[idx % hero.rotatingWords.length] || 'Expert Construction Engineering'} - Project ${idx + 1}`}
                  fill
                  className="object-cover w-full h-full"
                  priority={idx === 0}
                  loading={idx === 0 ? "eager" : "lazy"}
                  quality={90}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
              </div>
            ))}
          </div>

          {/* Hero Content */}
          <div className="relative z-10 flex items-center min-h-screen">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 w-full">
              <div className="lg:col-span-7 space-y-8">
                <h1
                  className={`text-5xl sm:text-6xl font-semibold tracking-tight leading-[1.3] text-white drop-shadow-lg transition-all duration-1000 ${
                    isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                >
                  {hero.title || "Waterproofing & Structural Repair Services in Lucknow"}{" "}
                  {hero.rotatingWords?.length > 0 && (
                    <span className="relative inline-block">
                      <ContainerTextFlip
                        className="text-yellow-400 font-bold pl-2"
                        words={hero.rotatingWords}
                      />
                    </span>
                  )}
                </h1>

                {(hero.description || !hero.title) && (
                  <p className="text-lg lg:text-xl text-white/90 max-w-3xl leading-relaxed drop-shadow-sm font-light">
                    {hero.description || "Expert solutions for waterproofing, roof leakage repair, structural rehabilitation, and industrial flooring for residential, commercial, and industrial projects."}
                  </p>
                )}

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={hero.cta1Link || "/contact-us#project-form"}
                    className="group inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-400 px-8 py-4 font-bold text-black hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 shadow-2xl hover:shadow-yellow-400/30 hover:-translate-y-1 transform"
                  >
                    {hero.cta1Text || "Get Free Site Inspection"}
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href={hero.cta2Link || "/contact-us"}
                    className="group inline-flex items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 font-semibold text-white hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 transform"
                  >
                    {hero.cta2Text || "Request a Quote"}
                    <Zap className="ml-3 h-5 w-5 group-hover:animate-pulse" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
}

"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const [hero, setHero] = useState(null);
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
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

  useEffect(() => {
    if (!hero?.backgroundImages?.length) return;
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % hero.backgroundImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [hero]);

  if (!hero) {
    return (
      <section className="bgWarm px-4 pt-28 md:px-6 md:pt-32">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-black/10 bg-white/70 px-6 py-20 text-[#5f6570]">
          Loading...
        </div>
      </section>
    );
  }

  const activeImage = hero.backgroundImages?.[currentBg];
  const heading = hero.title || "Engineering the future of construction";

  return (
    <section className="bgWarm px-4 pt-28 md:px-6 md:pt-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 flex justify-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#234D7E]/15 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.28em] text-[#234D7E] shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#234D7E]" />
            Waterproofing • Repairs • Flooring
          </span>
        </div>

        <div className="max-w-7xl">
          <h1 className="text-left  text-3xl font-semibold leading-tight tracking-tight text-[#111111] md:text-5xl  ">
            {heading}{" "}
            {hero.rotatingWords?.length > 0 && (
              <span className="inline-block rounded-md bg-[#234D7E] px-2 py-1 text-white">
                <ContainerTextFlip
                  className="font-semibold text-white"
                  words={hero.rotatingWords}
                />
              </span>
            )}
          </h1>

          <p className="mt-5 max-w-4xl text-left text-base leading-relaxed text-[#5f6570] md:text-xl">
            {hero.description ||
              "Expert solutions for waterproofing, roof leakage repair, structural rehabilitation, and industrial flooring for residential, commercial, and industrial projects."}
          </p>

          <p className="mt-3 max-w-4xl text-left text-sm leading-relaxed text-[#6b7280] md:text-base">
            Residential, commercial, and industrial execution with technical detailing,
            durable material systems, and cleaner site delivery.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={hero.cta1Link || "/contact-us#project-form"}
              className="inline-flex items-center rounded-full bg-[#234D7E] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1b3b62]"
            >
              {hero.cta1Text || "Get Free Site Inspection"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href={hero.cta2Link || "/contact-us"}
              className="inline-flex items-center rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50"
            >
              Request a Quote
            </Link>
            <a
              href="tel:+918069648411"
              className="inline-flex items-center rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50"
            >
              <Phone className="mr-2 h-4 w-4 text-[#234D7E]" />
              +91 8069648411
            </a>
          </div>
        </div>


        <div className=" mt-6 pb-8 sm:mt-8">
          <div className="relative h-[240px] w-full overflow-hidden rounded-[2rem] border border-black/10 bg-[#e9e3da] sm:h-[360px] md:h-[460px] lg:h-[560px]">
            {activeImage ? (
              <Image
                src={activeImage}
                alt={hero.title || "Fiable Building Solutions project image"}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
                quality={88}
                className="object-cover"
                priority
              />
            ) : (
              <div className="flex h-full items-center justify-center text-[#5f6570]">
                Project image
              </div>
            )}
          </div>
        </div>

      </div>

      
    </section>
  );
}

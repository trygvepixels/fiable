// SSR wrapper for Hero section — Google indexes this immediately on page load.
// The original Hero.jsx (with animations & image cycling) remains for real users.
// This component renders the exact same H1/CTA/description as fallback content
// but without the "use client" directive, so it is server-rendered.

import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const fallbackHero = {
  title: "Waterproofing & Structural Repair Services in Lucknow & India",
  description:
    "Expert waterproofing, structural rehabilitation, industrial flooring & grouting for residential, commercial, and industrial projects across Lucknow, Delhi NCR & India.",
  backgroundImages: ["/image.png"],
  cta1Text: "Get Free Site Inspection",
  cta1Link: "/contact-us#project-form",
  cta2Text: "Request a Quote",
  cta2Link: "/contact-us",
};

export default function HeroSSR({ hero = fallbackHero }) {
  const heading = hero.title || fallbackHero.title;
  const description = hero.description || fallbackHero.description;
  const cta1Link = hero.cta1Link || fallbackHero.cta1Link;
  const cta1Text = hero.cta1Text || fallbackHero.cta1Text;
  const cta2Link = hero.cta2Link || fallbackHero.cta2Link;
  const cta2Text = hero.cta2Text || fallbackHero.cta2Text;
  const activeImage = hero.backgroundImages?.[0] || fallbackHero.backgroundImages[0];

  return (
    <section className="bgWarm px-4 pt-28 md:px-6 md:pt-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 flex justify-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#234D7E]/15 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.28em] text-[#234D7E] shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#234D7E]" />
            Waterproofing • Structural Repair • Flooring
          </span>
        </div>

        <div className="max-w-7xl">
          <h1 className="text-left text-3xl font-semibold leading-tight tracking-tight text-[#111111] md:text-5xl">
            {heading}
          </h1>

          <p className="mt-5 max-w-4xl text-left text-base leading-relaxed text-[#5f6570] md:text-xl">
            {description}
          </p>

          <p className="mt-3 max-w-4xl text-left text-sm leading-relaxed text-[#6b7280] md:text-base">
            Serving Lucknow, Delhi NCR, Uttar Pradesh, Maharashtra & industrial
            sites across India. Free site inspection available.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={cta1Link}
              className="inline-flex items-center rounded-full bg-[#234D7E] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1b3b62]"
            >
              {cta1Text}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href={cta2Link}
              className="inline-flex items-center rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50"
            >
              {cta2Text}
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

        <div className="mt-6 pb-8 sm:mt-8">
          <div className="relative h-[240px] w-full overflow-hidden rounded-[2rem] border border-black/10 bg-[#e9e3da] sm:h-[360px] md:h-[460px] lg:h-[560px]">
            {activeImage ? (
              <Image
                src={activeImage}
                alt="Fiable Building Solutions — Waterproofing & structural repair project in Lucknow"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
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

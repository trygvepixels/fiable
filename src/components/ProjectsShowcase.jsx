"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const fallbackProjects = [
  {
    _id: "fallback-p1",
    slug: "industrial-roof-waterproofing-upgrade",
    title: "Industrial Roof Waterproofing Upgrade",
    client: "Large Manufacturing Facility",
    coverImage: "/image.png",
    coverAlt: "Industrial roof waterproofing project",
  },
  {
    _id: "fallback-p2",
    slug: "structural-repair-and-concrete-rehabilitation",
    title: "Structural Repair and Concrete Rehabilitation",
    client: "Commercial Building Asset Team",
    coverImage: "/image.png",
    coverAlt: "Structural rehabilitation and repair project",
  },
  {
    _id: "fallback-p3",
    slug: "epoxy-flooring-for-production-unit",
    title: "Epoxy Flooring for Production Unit",
    client: "Industrial Production Unit",
    coverImage: "/image.png",
    coverAlt: "Epoxy flooring installation project",
  },
  {
    _id: "fallback-p4",
    slug: "precision-grouting-for-machine-foundation",
    title: "Precision Grouting for Machine Foundation",
    client: "Heavy Equipment Installation Site",
    coverImage: "/image.png",
    coverAlt: "Machine foundation grouting project",
  },
];

/**
 * ProjectsShowcase — premium strip (4 items)
 * - Fetches /api/projects
 * - Elegant header + right-aligned "All projects →"
 * - Vertical separators, hover zoom, soft gradient, title reveal
 */
export default function ProjectsShowcase({ className = "" }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const res = await fetch(`api/feature-projects`, { cache: "no-store" });
        const json = await res.json();
        if (!res.ok) throw new Error(json?.error || "Failed to load projects");
        if (alive) {
          const items = (json.items || []).slice(0, 4);
          setProjects(items.length ? items : fallbackProjects);
        }
      } catch (e) {
        console.error("ProjectsShowcase fetch error:", e);
        if (alive) setProjects(fallbackProjects);
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => { alive = false; };
  }, []);

  return (
    <section className={`relative ${className} bg-[#f4f1ec68] py-10`}>
      <div className="mx-auto max-w-7xl px-5   sm:px-8">
        {/* Header */}
              <div className="mb-12 max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900">
          The <span className="text-[#234D7E]">Impact</span> We Have Created
        </h2>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
          Fiable pioneers the future of{" "}
          <span className="font-medium text-[#2E5DA5]">
            waterproofing, rehabilitation, flooring, grouting, demolition
          </span>{" "}
          and{" "}
          <span className="font-medium text-[#234D7E]">civil works</span> —
          transforming blueprints into solid structural solutions with innovation
          and durability.
        </p>
      </div>

        {/* Strip */}
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="relative overflow-hidden rounded-xl bg-zinc-200">
                <div className="animate-pulse h-80" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-4">
            {projects.map((p, idx) => (
              <Card key={p._id || p.slug} project={p} showDivider={idx < 3} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* --- Single card with Awwwards-style polish --- */
function Card({ project, showDivider }) {
  const { slug, title, client, coverImage, coverAlt } = project || {};
  return (
    <Link
      href={`/projects/${slug}`}
      className="group relative block overflow-hidden rounded-xl bg-white ring-1 ring-zinc-200"
    >
      {/* image */}
      {coverImage ? (
        <img
          src={coverImage}
          alt={coverAlt || title}
          className="h-80 w-full object-cover transition-transform duration-[700ms] ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.04]"
        />
      ) : (
        <div className="h-80 grid place-items-center bg-zinc-100 text-zinc-500 text-xs">No image</div>
      )}

      {/* soft gradient + caption reveal */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3 sm:p-4">
        <div className="translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="line-clamp-1 text-sm font-medium text-white/95">{title}</p>
          {client ? <p className="mt-0.5 text-xs text-white/80">{client}</p> : null}
        </div>
      </div>

      {/* subtle vertical divider to mimic magazine layout */}
      {showDivider && (
        <span className="absolute right-[-6px] top-[6%] hidden h-[88%] w-px bg-zinc-200 md:block" aria-hidden />
      )}
    </Link>
  );
}

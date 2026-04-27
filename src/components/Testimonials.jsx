"use client";

import { useEffect, useMemo, useState } from "react";

const fallbackTestimonials = [
  {
    id: "fallback-1",
    title: "Reliable waterproofing execution with strong technical coordination",
    message:
      "Fiable handled our leakage and terrace waterproofing issue with a practical, engineer-led approach. The team communicated clearly and the execution stayed disciplined throughout.",
    name: "Amit Verma",
    designation: "Project Lead, Commercial Asset Team",
    src: "/image.png",
  },
  {
    id: "fallback-2",
    title: "A dependable team for structural repair and rehabilitation work",
    message:
      "Their diagnosis was detailed, the repair methodology was clearly explained, and the on-site execution stayed aligned with our operational constraints.",
    name: "Rhea Kapoor",
    designation: "Facility Head, Industrial Client",
    src: "/image.png",
  },
  {
    id: "fallback-3",
    title: "Industrial flooring delivered with speed, finish, and durability",
    message:
      "Fiable recommended the right flooring system for our production environment and delivered a finish that improved both performance and maintenance.",
    name: "Daniel Carter",
    designation: "Operations Lead, Manufacturing Unit",
    src: "/image.png",
  },
  {
    id: "fallback-4",
    title: "Clear communication and strong site discipline from start to finish",
    message:
      "The team worked with structure, documented key decisions, and completed the required repairs without disrupting adjacent work areas.",
    name: "Aisha Mehta",
    designation: "Construction Coordinator, Client Team",
    src: "/image.png",
  },
];

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [settings, setSettings] = useState({
    testimonialsSection: { heading: "Our clients love working with us" },
  });

  useEffect(() => {
    let alive = true;

    (async () => {
      try {
        const res = await fetch("/api/testimonials?sort=order", { cache: "no-store" });
        const json = await res.json();
        if (!res.ok) throw new Error(json?.error || "Failed to load testimonials");

        if (alive) {
          const mapped = (json.items || []).map((t, i) => ({
            id: t._id || i,
            title: t.title || "Trusted execution and clean delivery",
            message:
              t.message ||
              "Fiable delivered the work with clear planning, technical confidence, and consistent follow-through on site.",
            name: t.name || "Client",
            designation: t.role || "Verified feedback",
            src: t.image?.src || "/image.png",
          }));
          setTestimonials(mapped.length ? mapped : fallbackTestimonials);
        }
      } catch (err) {
        console.error("Testimonials error:", err);
        if (alive) setTestimonials(fallbackTestimonials);
      } finally {
        if (alive) setLoading(false);
      }
    })();

    (async () => {
      try {
        const res = await fetch("/api/homepage-settings");
        if (!res.ok) return;
        const data = await res.json();
        if (alive && data.testimonialsSection) {
          setSettings(data);
        }
      } catch (err) {
        console.error("Error fetching homepage settings for testimonials:", err);
      }
    })();

    return () => {
      alive = false;
    };
  }, []);

  const items = useMemo(() => {
    if (!testimonials.length) return [];
    return [...testimonials, ...testimonials];
  }, [testimonials]);

  return (
    <section className="bgWarm py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="eyebrow mb-4">Testimonials</p>
          <h2 className="text-4xl font-semibold tracking-tight text-[#111111] md:text-5xl">
            {settings.testimonialsSection.heading}
          </h2>
          {settings.testimonialsSection.subheading ? (
            <p className="mx-auto mt-4 max-w-3xl text-lg text-[#5f6570]">
              {settings.testimonialsSection.subheading}
            </p>
          ) : null}
        </div>

        {loading ? (
          <div className="py-16 text-center text-[#5f6570]">Loading testimonials...</div>
        ) : !testimonials.length ? (
          <div className="py-16 text-center text-[#5f6570]">No testimonials found.</div>
        ) : (
          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-[#F4F1EC] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-[#F4F1EC] to-transparent" />

            <div className="testimonial-marquee flex w-max items-stretch gap-6 py-2">
              {items.map((testimonial, i) => (
                <article
                  key={`${testimonial.id}-${i}`}
                  className="flex min-h-[220px] w-[360px] flex-col rounded-[1.5rem] border border-black/10 bg-white p-6 shadow-[0_8px_24px_rgba(17,17,17,0.06)]"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.src}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <p className=" font-semibold leading-none text-[#111111]">
                        {testimonial.name}
                      </p>
                      <p className="mt-1 text-sm leading-snug text-[#6b7280]">
                        {testimonial.designation}
                      </p>
                    </div>
                  </div>

                  <p className="mt-8  leading-relaxed text-[#2f343b]">
                    “{testimonial.message}”
                  </p>

                  <p className="mt-auto pt-8 text-sm text-[#7b8088]">Verified feedback</p>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .testimonial-marquee {
          animation: testimonial-scroll 34s linear infinite;
        }

        @keyframes testimonial-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .testimonial-marquee {
            animation-duration: 24s;
          }
        }
      `}</style>
    </section>
  );
}

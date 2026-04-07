"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const [settings, setSettings] = useState({
    testimonialsSection: { heading: "Testimonials From Satisfied Clients" }
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
            title: t.title || "Our Exemplary Service and Unwavering Commitment to Client Satisfaction",
            message:
              t.message ||
              "Exploring the Path of Excellence: Unveiling Client Experiences, Insights, and Triumphs Along Their Journey with Us...",
            name: t.name || "Mahmodul Hasan",
            designation: t.role || "Visual Developer",
            src: t.image?.src || "https://via.placeholder.com/300x300?text=Client",
          }));
          setTestimonials(mapped);
        }
      } catch (err) {
        console.error("Testimonials error:", err);
      } finally {
        if (alive) setLoading(false);
      }
    })();

    // Fetch homepage settings
    (async () => {
      try {
        const res = await fetch("/api/homepage-settings");
        if (res.ok) {
          const data = await res.json();
          if (data.testimonialsSection && alive) {
            setSettings(data);
          }
        }
      } catch (err) {
        console.error("Error fetching homepage settings for testimonials:", err);
      }
    })();

    return () => {
      alive = false;
    };
  }, []);

  // Auto rotate every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (testimonials.length ? (i + 1) % testimonials.length : 0));
    }, 2000);
    return () => clearInterval(interval);
  }, [testimonials]);

  const prevTestimonial = () => {
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  };
  const nextTestimonial = () => {
    setIndex((i) => (i + 1) % testimonials.length);
  };

  return (
    <div className="bg-gradient-to-br from-white via-[#f4f1ec68] to-white py-24">
      <section className="mx-auto max-w-7xl px-6 sm:px-12">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font- text-gray-900 tracking-tight">
             {settings.testimonialsSection.heading}
          </h2>
          {settings.testimonialsSection.subheading && (
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed">
              {settings.testimonialsSection.subheading}
            </p>
          )}
        </div>

        {loading ? (
          <div className="py-20 text-center text-gray-500">Loading testimonials…</div>
        ) : !testimonials.length ? (
          <div className="py-20 text-center text-gray-500">No testimonials found.</div>
        ) : (
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
            {/* Testimonial Card */}
            <div className="bg-white bg-opacity-90 rounded-3xl p-10 relative shadow-2xl border border-gray-200 flex-1 max-w-xl hover:shadow-[0_20px_30px_rgba(67,118,187,0.3)] transition-shadow duration-700 cursor-default">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonials[index].id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <h3 className="text-2xl italic font-semibold text-gray-900 mb-6 leading-snug tracking-wide">
                    “{testimonials[index].title}”
                  </h3>
                  <p className="text-gray-700 mb-8 leading-relaxed text-lg">{testimonials[index].message}</p>

                  <div>
                    <p className="font-semibold text-gray-900 text-lg">{testimonials[index].name}</p>
                    <p className="text-sm text-gray-500 uppercase tracking-wider">{testimonials[index].designation}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <div className="absolute bottom-8 right-8 flex space-x-3">
                <button
                  onClick={prevTestimonial}
                  aria-label="Previous testimonial"
                  className="p-3 rounded-full bg-gradient-to-tr from-blue-200 to-indigo-300 hover:from-blue-300 hover:to-indigo-400 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <ChevronLeft className="h-6 w-6 text-blue-800" />
                </button>
                <button
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                  className="p-3 rounded-full bg-gradient-to-tr from-indigo-800 to-blue-900 hover:from-indigo-900 hover:to-blue-950 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <ChevronRight className="h-6 w-6 text-white" />
                </button>
              </div>
            </div>

            {/* Client Image */}
            <div className="w-80 h-80 flex-shrink-0 relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_25px_40px_rgba(67,118,187,0.4)] transition-shadow duration-700 cursor-pointer group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={testimonials[index].src}
                  src={testimonials[index].src}
                  alt={testimonials[index].name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
                <motion.div
                  key={`overlay-${testimonials[index].id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.15 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-indigo-600 pointer-events-none"
                />
              </AnimatePresence>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
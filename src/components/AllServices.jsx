"use client";

import Link from "next/link";
import { ArrowRight, Building, Droplets, ShieldCheck, Wrench } from "lucide-react";
import { useEffect, useState } from "react";

const fallbackServices = [
  {
    _id: "fallback-waterproofing",
    slug: "waterproofing-services",
    title: "Waterproofing Services",
    summary:
      "End-to-end waterproofing systems for terraces, basements, podiums, wet areas, retaining walls, and exposed concrete surfaces.",
    tag: "Leakage Control",
    icon: <Droplets className="h-7 w-7" />,
  },
  {
    _id: "fallback-structural",
    slug: "structural-rehabilitation",
    title: "Structural Rehabilitation",
    summary:
      "Repair and strengthening solutions for deteriorated RCC members, cracked slabs, columns, beams, and aging civil structures.",
    tag: "Repair & Strengthening",
    icon: <Building className="h-7 w-7" />,
  },
  {
    _id: "fallback-flooring",
    slug: "industrial-flooring-systems",
    title: "Industrial Flooring Systems",
    summary:
      "High-performance epoxy, PU, and heavy-duty floor systems built for factories, warehouses, food units, and process plants.",
    tag: "Industrial Finish",
    icon: <ShieldCheck className="h-7 w-7" />,
  },
  {
    _id: "fallback-grouting",
    slug: "industrial-grouting-services",
    title: "Industrial Grouting Services",
    summary:
      "Precision grouting for machine foundations, base plates, structural gaps, anchors, and heavy equipment support zones.",
    tag: "Machine Foundations",
    icon: <Wrench className="h-7 w-7" />,
  },
];

function enrichServices(items) {
  return items.map((service, index) => ({
    ...service,
    tag:
      service.tag ||
      ["Waterproofing", "Structural Repair", "Flooring", "Grouting", "Civil Works"][index % 5],
    icon:
      [
        <Droplets key="droplets" className="h-7 w-7" />,
        <Building key="building" className="h-7 w-7" />,
        <ShieldCheck key="shield" className="h-7 w-7" />,
        <Wrench key="wrench" className="h-7 w-7" />,
      ][index % 4],
  }));
}

export default function AllServices() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [settings, setSettings] = useState({
    servicesSection: { heading: "Our Core Services" },
  });

  useEffect(() => {
    const fetchHomepageSettings = async () => {
      try {
        const res = await fetch("/api/homepage-settings");
        if (!res.ok) return;
        const data = await res.json();
        if (data.servicesSection) setSettings(data);
      } catch (err) {
        console.error("Error fetching homepage settings:", err);
      }
    };

    const fetchServices = async () => {
      try {
        const res = await fetch("/api/services?sort=order%20-createdAt&limit=5", {
          cache: "no-store",
        });
        const json = await res.json();
        if (!res.ok) throw new Error(json?.error || "Failed to load services");
        const items = json.items?.length ? json.items : fallbackServices;
        setServices(enrichServices(items));
      } catch (err) {
        console.error("Error fetching services:", err);
        setServices(enrichServices(fallbackServices));
      } finally {
        setLoading(false);
      }
    };

    fetchHomepageSettings();
    fetchServices();
  }, []);

  return (
    <section className="bgWarm px-5 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="eyebrow mb-4">Specialized Services</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            {settings.servicesSection.heading}
          </h2>
          {settings.servicesSection?.subheading ? (
            <p className="mt-4 max-w-2xl text-lg text-gray-600">
              {settings.servicesSection.subheading}
            </p>
          ) : null}
        </div>

        {loading ? (
          <div className="py-10 text-center text-gray-500">Loading services...</div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service._id || service.slug}
                href={`/services/${service.slug}`}
                className="group block rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-3 text-[#234D7E]">{service.icon}</div>
                <div className="mb-3 inline-block rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#234D7E]">
                  {service.tag}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 transition-colors group-hover:text-[#234D7E]">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {service.summary}
                </p>
                <div className="mt-5 flex items-center gap-2 text-sm font-medium text-gray-900 opacity-60 transition-opacity group-hover:opacity-100">
                  <span>View Details</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

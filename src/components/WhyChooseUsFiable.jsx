"use client";

import React from "react";
import {
  Users,
  ShieldCheck,
  Building,
  CheckCircle,
  ArrowUpRight,
} from "lucide-react";

const cards = [
  {
    title: "Engineers & Experts",
    description:
      "Expert-led analysis and precise execution by certified professionals across waterproofing, repair and rehabilitation scopes.",
    tag: "Engineer-led",
    icon: <Users className="h-7 w-7" />,
  },
  {
    title: "Quality Materials",
    description:
      "Premium tested chemicals and system components from trusted partners selected for long-term site performance.",
    tag: "Trusted Inputs",
    icon: <ShieldCheck className="h-7 w-7" />,
  },
  {
    title: "Durable Solutions",
    description:
      "Engineered repair and protection systems designed to withstand weather, wear, and demanding operational conditions.",
    tag: "Long-life Focus",
    icon: <Building className="h-7 w-7" />,
  },
  {
    title: "Transparent Pricing",
    description:
      "Honest estimation, clear scopes, and straightforward commercial communication with no hidden surprises.",
    tag: "Clear Costing",
    icon: <CheckCircle className="h-7 w-7" />,
  },
  {
    title: "On-Time Delivery",
    description:
      "Efficient planning and site coordination that help projects move on schedule with minimal disruption.",
    tag: "Execution Discipline",
    icon: <ArrowUpRight className="h-7 w-7" />,
  },
];

export default function WhyChooseUsFiable() {
  const [content, setContent] = React.useState({
    heading: "Why choose",
    highlight: "Fiable Building Solutions?",
  });

  React.useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await fetch("/api/homepage-settings");
        if (res.ok) {
          const data = await res.json();
          if (data.whyChooseUsSection) {
            setContent(data.whyChooseUsSection);
          }
        }
      } catch (err) {
        console.error("Failed to fetch why choose us section settings", err);
      }
    };
    fetchSettings();
  }, []);

  return (
    <section className="bgWarm px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            {content.heading}
            <span className="mt-2 block font-semibold text-[#234D7E]">
              {content.highlight}
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {cards.map((item) => (
            <div
              key={item.title}
              className="group block rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-3 text-[#234D7E]">{item.icon}</div>
              <div className="mb-3 inline-block rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#234D7E]">
                {item.tag}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900 transition-colors group-hover:text-[#234D7E]">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

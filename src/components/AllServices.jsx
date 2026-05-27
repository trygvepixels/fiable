import Link from "next/link";
import { ArrowRight, Droplets, Building, ShieldCheck, Wrench, ShieldAlert, Zap, Hammer } from "lucide-react";

const fallbackServices = [
  {
    _id: "fallback-waterproofing",
    slug: "waterproofing-services",
    title: "Waterproofing Services",
    summary: "High-performance waterproofing systems for roofs, terraces, basements, wet areas, sumps, and retaining structures.",
    tag: "Leakage Control",
  },
  {
    _id: "fallback-structural",
    slug: "structural-refurbishment",
    title: "Structural Refurbishment",
    summary: "Restoration, strengthening, and carbon fiber wrapping for deteriorated RCC beams, columns, slabs, and columns.",
    tag: "Repair & Strengthening",
  },
  {
    _id: "fallback-flooring",
    slug: "industrial-flooring-systems",
    title: "Industrial Flooring Systems",
    summary: "Abrasion and chemical-resistant epoxy and PU floors for factories, warehouses, process zones, and clean rooms.",
    tag: "Industrial Floors",
  },
  {
    _id: "fallback-grouting",
    slug: "industrial-grouting-services",
    title: "Industrial Grouting Services",
    summary: "Precision non-shrink cementitious and epoxy grouting for heavy machinery bases, anchor bolts, and pedestals.",
    tag: "Machine Foundations",
  },
  {
    _id: "fallback-concrete-cutting",
    slug: "concrete-cutting-demolition",
    title: "Concrete Cutting & Demolition",
    summary: "Precision diamond core drilling, wire sawing, wall sawing, and controlled demolition for structural alterations.",
    tag: "Controlled Demolition",
  },
  {
    _id: "fallback-anchor-rebar",
    slug: "anchor-rebar-services",
    title: "Anchor/Rebar Services",
    summary: "Post-installed chemical anchoring, rebar fixing, and structural bolts installation using premium adhesive systems.",
    tag: "Chemical Anchoring",
  },
  {
    _id: "fallback-civil-construction",
    slug: "civil-construction",
    title: "Civil Construction",
    summary: "Turnkey commercial civil works, foundation casting, structural additions, and industrial building extensions.",
    tag: "General Contracting",
  },
];

const fallbackSettings = {
  servicesSection: {
    heading: "Our Core Services",
    subheading: "Fiable Building Solutions delivers engineering-driven construction services designed for durability, safety, and long-term performance.",
  },
};

function enrichServices(items) {
  const enrichList = Array.isArray(items) && items.length > 0 ? items : fallbackServices;
  const icons = [
    <Droplets key="droplets" className="h-7 w-7" />,
    <Building key="building" className="h-7 w-7" />,
    <ShieldCheck key="shield" className="h-7 w-7" />,
    <Wrench key="wrench" className="h-7 w-7" />,
    <Hammer key="hammer" className="h-7 w-7" />,
    <Zap key="zap" className="h-7 w-7" />,
    <ShieldAlert key="alert" className="h-7 w-7" />,
  ];

  return enrichList.map((service, index) => ({
    ...service,
    tag: service.tag || ["Waterproofing", "Structural Repair", "Flooring", "Grouting", "Civil Works", "Chemical Anchoring", "Civil Construction"][index % 7],
    icon: icons[index % icons.length],
  }));
}

export default function AllServices({ initialServices = fallbackServices, initialSettings = fallbackSettings }) {
  const services = enrichServices(initialServices);
  const settings = initialSettings?.servicesSection ? initialSettings : fallbackSettings;

  return (
    <section className="bgWarm px-5 py-12 md:py-20 border-t border-black/5">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#234D7E] font-bold mb-3">Specialized Services</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 leading-tight">
            {settings.servicesSection.heading}
          </h2>
          {settings.servicesSection?.subheading ? (
            <p className="mt-3 max-w-2xl mx-auto text-sm text-gray-600 leading-relaxed">
              {settings.servicesSection.subheading}
            </p>
          ) : null}
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service._id || service.slug}
              href={`/services/${service.slug}`}
              className="group block rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-3 text-[#234D7E]">{service.icon}</div>
              <div className="mb-3 inline-block rounded-full border border-blue-100 bg-blue-50 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#234D7E]">
                {service.tag}
              </div>
              <h3 className="mb-1 text-base font-semibold text-gray-900 transition-colors group-hover:text-[#234D7E]">
                {service.title}
              </h3>
              <p className="text-xs leading-relaxed text-gray-500 line-clamp-3">
                {service.summary}
              </p>
              <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-gray-900 opacity-60 transition-opacity group-hover:opacity-100">
                <span>View Details</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

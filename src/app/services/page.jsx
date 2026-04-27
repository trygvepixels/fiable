import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { FiChevronRight, FiHome } from "react-icons/fi";
import ContactCta from "@/components/ContactCta";
import { connectDB } from "@/lib/mongodb";
import Service from "@/models/Service";
import { CONTACT_PHONE, SITE_URL } from "@/lib/site";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const fallbackServices = [
  {
    _id: "fallback-waterproofing",
    slug: "waterproofing-services",
    title: "Waterproofing Services",
    summary:
      "End-to-end waterproofing systems for terraces, roofs, basements, retaining walls, wet areas, and exposed structural surfaces.",
    image: { src: "/image.png", alt: "Waterproofing services" },
    points: [
      "Terrace and roof protection",
      "Basement and retaining wall waterproofing",
      "Leakage diagnosis and corrective treatment",
    ],
  },
  {
    _id: "fallback-structural",
    slug: "structural-rehabilitation",
    title: "Structural Rehabilitation",
    summary:
      "Repair and strengthening solutions for deteriorated RCC members, damaged slabs, cracked beams, columns, and aging concrete structures.",
    image: { src: "/image.png", alt: "Structural rehabilitation work" },
    points: [
      "Concrete repair and jacketing",
      "Crack stitching and injection grouting",
      "Corrosion mitigation and restoration",
    ],
  },
  {
    _id: "fallback-flooring",
    slug: "industrial-flooring-systems",
    title: "Industrial Flooring Systems",
    summary:
      "Performance-oriented epoxy and PU floor systems for factories, warehouses, process units, and industrial environments.",
    image: { src: "/image.png", alt: "Industrial flooring system" },
    points: [
      "Epoxy and PU coatings",
      "Abrasion and chemical resistant finishes",
      "Floor resurfacing and refurbishment",
    ],
  },
  {
    _id: "fallback-grouting",
    slug: "industrial-grouting-services",
    title: "Industrial Grouting Services",
    summary:
      "Precision grouting for machine foundations, base plates, anchors, pedestals, and structural void treatment.",
    image: { src: "/image.png", alt: "Industrial grouting service" },
    points: [
      "Non-shrink and epoxy grouting",
      "Machine foundation support",
      "Base plate and pedestal stabilization",
    ],
  },
];

async function getServices() {
  await connectDB();
  const services = await Service.find({ active: true }).sort("order -createdAt").lean();
  return services.length ? services : fallbackServices;
}

function createServiceSchema(services) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Fiable Building Solutions Services",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${SITE_URL}/services/${service.slug}`,
      name: service.title,
    })),
  };
}

export default async function ServicesPage() {
  const services = await getServices();
  const serviceSchema = createServiceSchema(services);

  return (
    <main className="min-h-screen bg-[#F4F1EC] antialiased selection:bg-gray-900/90 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="fixed bottom-5 right-5 z-20">
        <Link href="/contact-us#project-form">
          <button className="group relative flex items-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-[#234D7E] to-[#2c4a7d] px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:from-[#365a99] hover:to-[#1e3d6f]">
            <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-white/0 via-white/20 to-white/0 transition-transform duration-700 ease-in-out group-hover:translate-x-[100%]" />
            <span className="relative z-10">Start Project</span>
            <svg
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </Link>
      </div>

      <Breadcrumbs />

      <section className="mx-auto max-w-7xl px-4 pb-10 pt-20 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-gray-500 md:text-sm">
          What we do
        </p>

        <h1 className="mt-3 inline-block text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
          Our Services
          <span className="mx-auto mt-4 block h-[3px] w-24 rounded-full bg-gradient-to-r from-[#234D7E] to-gray-400 md:w-28" />
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gray-600 md:text-xl">
          Explore Fiable&apos;s waterproofing, structural rehabilitation, flooring,
          grouting, and repair services built for residential, commercial, and
          industrial projects where long-term performance matters.
        </p>

        <div className="mt-8 flex justify-center">
          <a
            href={`tel:${CONTACT_PHONE.replace(/\s+/g, "")}`}
            className="inline-flex items-center gap-3 rounded-full border border-gray-900/90 px-5 py-2.5 text-gray-900 transition-all hover:bg-[#234D7E] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/30"
          >
            <Phone className="h-4 w-4" />
            <span className="text-sm md:text-sm">Call {CONTACT_PHONE}</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24">
        <ul className="flex flex-col gap-12 md:gap-16">
          {services.map((service, i) => {
            const isEven = i % 2 === 1;
            return (
              <li key={service._id || service.slug}>
                <article className="group relative overflow-hidden rounded-3xl bg-white/70 shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md supports-[backdrop-filter]:bg-white/60">
                  <div className="items-center p-4 md:grid md:grid-cols-2 md:gap-10 md:p-6 lg:p-10">
                    <figure className={isEven ? "md:order-2" : ""}>
                      <div className="relative overflow-hidden rounded-2xl">
                        <Image
                          src={service.image?.src || "/image.png"}
                          alt={service.image?.alt || service.title}
                          width={1200}
                          height={750}
                          className="aspect-[16/10] w-full rounded-2xl object-cover shadow-sm ring-1 ring-black/5 transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      </div>
                    </figure>

                    <div
                      className={`mt-6 md:mt-0 ${isEven ? "text-right md:pl-8 md:pr-2" : "text-left md:pl-2 md:pr-8"}`}
                    >
                      <div className={`${isEven ? "md:ml-auto" : ""} max-w-xl`}>
                        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl">
                          {service.title}
                        </h2>

                        <div className="mb-5 mt-3 h-[3px] w-16 rounded-full bg-gradient-to-r from-[#234D7E] to-[#234D7E]" />

                        <p className="text-start leading-relaxed text-gray-600">
                          {service.summary}
                        </p>

                        {Array.isArray(service.points) && service.points.length > 0 ? (
                          <ul className="mt-5 space-y-2 text-start">
                            {service.points.map((point, idx) => (
                              <li key={idx} className="flex items-center gap-3">
                                <div className="h-2 w-2 rounded-full bg-[#234D7E]" />
                                <span className="text-[#4b5563]">{point}</span>
                              </li>
                            ))}
                          </ul>
                        ) : null}

                        <div className="flex justify-start">
                          <Link
                            href={`/services/${service.slug}`}
                            className="mt-7 inline-flex items-center gap-2 rounded-full border border-gray-900/90 px-5 py-2.5 text-gray-900 transition-all hover:bg-[#234D7E] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/30"
                          >
                            <span className="text-sm md:text-sm">Explore more</span>
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </section>

      <ContactCta />
    </main>
  );
}

function Breadcrumbs() {
  return (
    <nav aria-label="Breadcrumb" className="relative z-20 mx-auto -mb-4 max-w-7xl px-4 pt-8">
      <ol className="flex items-center space-x-2 text-[14px] text-neutral-500">
        <li className="flex items-center">
          <Link href="/" className="flex items-center transition-colors hover:text-[#234D7E]">
            <FiHome className="mr-1.5" />
            <span>Home</span>
          </Link>
        </li>
        <li className="flex items-center gap-2">
          <FiChevronRight className="text-neutral-300" />
          <span className="font-semibold text-[#234D7E]">Services</span>
        </li>
      </ol>
    </nav>
  );
}

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  HelpCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import ContactCta from "@/components/ContactCta";
import { CONTACT_PHONE, SITE_URL } from "@/lib/site";

const heroImage =
  "https://res.cloudinary.com/dekoldk8g/image/upload/v1775404179/pyy4pjsr0kj8hwtlhcty.jpg";

export const metadata = {
  title: "Concrete Cutting & Demolition Services in Lucknow & UP | Fiable",
  description:
    "Fiable provides concrete cutting, RCC slab cutting, wall cutting, core cutting, controlled demolition, beam cutting, column cutting, and structural dismantling services in Lucknow, Kanpur, Delhi NCR, and Uttar Pradesh.",
  alternates: {
    canonical: `${SITE_URL}/services/concrete-cutting-demolition`,
  },
};

function buildSchema() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Concrete Cutting & Demolition Services",
      serviceType: "Concrete Cutting and Controlled Demolition",
      description:
        "Professional concrete cutting and controlled demolition services for RCC slabs, walls, beams, columns, foundations, floors, openings, and structural dismantling work.",
      provider: {
        "@type": "ProfessionalService",
        name: "Fiable Building Solutions",
        telephone: CONTACT_PHONE,
        image: heroImage,
        priceRange: "Inspection-based quotation",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "728, Phase 2, Khasra No. 21, Eden Enclave, Kursi Road, Gudumba BKT",
          addressLocality: "Lucknow",
          addressRegion: "Uttar Pradesh",
          postalCode: "226026",
          addressCountry: "IN",
        },
      },
      areaServed: ["Lucknow", "Delhi NCR", "Kanpur", "Uttar Pradesh"],
      url: `${SITE_URL}/services/concrete-cutting-demolition`,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "71",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is concrete cutting and controlled demolition?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Concrete cutting and controlled demolition involve precise cutting, drilling, sawing, breaking, and dismantling of RCC or concrete structures using suitable tools and safety methods to reduce unwanted damage to nearby structural elements.",
          },
        },
        {
          "@type": "Question",
          name: "Which concrete cutting services are commonly required?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Common concrete cutting services include slab cutting, wall cutting, core cutting, beam cutting, column cutting, floor cutting, wire saw cutting, opening creation, and controlled RCC demolition.",
          },
        },
      ],
    },
  ];
}

const badges = [
  "Controlled cutting",
  "RCC demolition experts",
  "Dust-conscious execution",
];

const serviceCards = [
  {
    title: "RCC Slab & Floor Cutting",
    meta: "slab openings | floor sawing | precise line cutting",
    body: "Clean cutting for lift openings, staircase openings, plumbing routes, floor modifications, expansion joints, and renovation work with controlled execution.",
    image: heroImage,
  },
  {
    title: "Wall Cutting & Door Openings",
    meta: "RCC wall cutting | window openings | wall modification",
    body: "Accurate wall cutting for doors, windows, ducts, shafts, service openings, and layout changes while reducing unnecessary vibration and breakage.",
    image: heroImage,
  },
  {
    title: "Core Cutting & Diamond Drilling",
    meta: "core drilling | service holes | MEP openings",
    body: "Round core cutting for plumbing, electrical, HVAC, fire lines, anchor holes, drainage pipes, and utility penetrations in RCC slabs, walls, and beams.",
    image: heroImage,
  },
  {
    title: "Controlled Concrete Demolition",
    meta: "RCC dismantling | structural removal | debris control",
    body: "Method-led demolition for selected RCC portions, damaged concrete, foundations, beams, slabs, and industrial structures with safety-focused sequencing.",
    image: heroImage,
  },
];

const areas = [
  "Gomti Nagar",
  "Hazratganj",
  "Indira Nagar",
  "Aliganj",
  "Jankipuram",
  "Kursi Road",
  "Sushant Golf City",
  "Mahanagar",
  "Chinhat",
  "Kanpur Road",
  "Noida",
  "Delhi NCR",
];

const processes = [
  "Site inspection, marking review, structural sensitivity check, and access planning",
  "Selection of cutting method such as core cutting, slab sawing, wall cutting, wire sawing, or controlled breaking",
  "Work-zone isolation, utility checking, dust-control planning, and safety preparation",
  "Precision cutting, drilling, or demolition in controlled stages to reduce vibration and collateral damage",
  "Debris handling, edge finishing, opening verification, and handover after site cleanup",
];

const faqs = [
  {
    q: "What is concrete cutting used for?",
    a: "Concrete cutting is used to create accurate openings, trenches, service holes, slab cuts, wall openings, expansion joints, and structural modifications in RCC or concrete surfaces without unnecessary damage to nearby areas.",
  },
  {
    q: "What is the difference between concrete cutting and demolition?",
    a: "Concrete cutting is a precise method used to cut or separate a specific concrete portion. Demolition is broader and may include breaking, dismantling, removal, debris handling, and staged structural removal. Many projects need both services together.",
  },
  {
    q: "Can RCC slabs and walls be cut without damaging the full structure?",
    a: "Yes. With correct marking, equipment selection, sequencing, and controlled cutting, specific RCC areas can be removed or modified while reducing vibration and avoiding unnecessary impact on nearby elements.",
  },
  {
    q: "Do you provide core cutting for plumbing and MEP work?",
    a: "Yes. Core cutting is suitable for round service openings required for plumbing pipes, HVAC lines, electrical conduits, drainage, fire lines, ducts, anchors, and utility penetrations.",
  },
  {
    q: "Is concrete cutting dusty?",
    a: "Concrete cutting can generate dust, especially when dry cutting is used. Proper planning may include wet cutting, work-zone isolation, cleanup control, and suitable safety practices depending on the site condition.",
  },
  {
    q: "Do you handle debris after demolition?",
    a: "Yes. Debris handling can be included as part of the work scope depending on site access, demolition volume, disposal requirement, and client instructions.",
  },
];

export default function ConcreteCuttingDemolitionPage() {
  const schema = buildSchema();

  return (
    <main className="min-h-screen bg-[#f4f1ec] text-[#141414] antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="px-5 pb-14 pt-28 md:pb-20 md:pt-36">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.78fr] lg:items-end">
          <div>
            <nav className="mb-8 flex items-center gap-2 text-xs font-medium text-zinc-500">
              <Link href="/" className="hover:text-[#234D7E]">
                Home
              </Link>
              <span>/</span>
              <Link href="/services" className="hover:text-[#234D7E]">
                Services
              </Link>
              <span>/</span>
              <span className="text-zinc-900">
                Concrete Cutting & Demolition
              </span>
            </nav>

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#234D7E]">
              Concrete cutting contractors in Lucknow
            </p>

            <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-tight text-zinc-950 md:text-6xl">
              Concrete Cutting & Demolition Services in Lucknow
            </h1>

            <div className="mt-5 flex flex-wrap gap-2">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-800"
                >
                  <CheckCircle className="h-3.5 w-3.5 text-[#234D7E]" />
                  {badge}
                </span>
              ))}
            </div>

            <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-650 md:text-lg">
              Fiable provides professional concrete cutting and controlled
              demolition services in Lucknow for RCC slabs, walls, floors,
              beams, columns, foundations, and structural openings. We support
              renovation, MEP work, industrial modification, building repair,
              and selective dismantling projects with safe, planned, and
              method-led execution.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact-us#project-form"
                className="inline-flex items-center justify-center rounded-full bg-[#234D7E] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1b3b62]"
              >
                Request a Site Visit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

              <a
                href={`tel:${CONTACT_PHONE.replace(/\s+/g, "")}`}
                className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:border-[#234D7E] hover:text-[#234D7E]"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call {CONTACT_PHONE}
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[1.75rem] bg-zinc-200">
            <img
              src={heroImage}
              alt="Concrete cutting and controlled demolition by Fiable Building Solutions"
              className="h-[360px] w-full object-cover md:h-[480px]"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-white px-5 py-14 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
            Precision cutting before heavy breaking
          </h2>

          <p className="mt-5 text-base leading-8 text-zinc-650">
            Concrete cutting and demolition should be planned, not rushed. Every
            job starts with marking, access review, safety preparation, utility
            checking, and cutting-method selection. The result is cleaner work,
            better edge control, reduced unnecessary damage, and faster
            modification for renovation or construction teams.
          </p>
        </div>
      </section>

      <section className="bg-[#fbf9f7] px-5 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#234D7E]">
              Concrete cutting service scope
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
              Solutions for RCC cutting, core drilling, openings, and controlled
              dismantling
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {serviceCards.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-[1.25rem] border border-zinc-200 bg-white"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-56 w-full object-cover"
                />

                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#234D7E]">
                    {item.meta}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold tracking-tight text-zinc-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-650">
                    {item.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-white px-5 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#234D7E]">
                Service areas
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
                Concrete cutting across Lucknow and NCR
              </h2>

              <p className="mt-5 text-base leading-8 text-zinc-650">
                We work across residential, commercial, institutional, and
                industrial sites where precise RCC cutting, opening creation,
                controlled demolition, and structural dismantling are required.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {areas.map((area) => (
                <div
                  key={area}
                  className="rounded-2xl border border-zinc-200 bg-[#fbf9f7] p-5"
                >
                  <h3 className="text-sm font-semibold text-zinc-950">
                    Concrete Cutting in {area}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-zinc-550">
                    Slab cutting, wall cutting, core drilling, controlled
                    demolition, and RCC modification work.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f1ec] px-5 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-center">
          <div className="overflow-hidden rounded-[1.5rem] bg-zinc-200">
            <img
              src={heroImage}
              alt="Fiable concrete cutting and demolition team"
              className="h-[420px] w-full object-cover"
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#234D7E]">
              Controlled demolition team
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
              Cut accurately. Demolish safely. Modify with control.
            </h2>

            <p className="mt-5 text-base leading-8 text-zinc-650">
              We avoid unnecessary hammering where precise cutting is the better
              method. Our approach helps reduce vibration, protect adjacent
              areas, create cleaner openings, and support renovation or
              structural modification work with better predictability.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["RCC", "Cutting & drilling"],
                ["Core", "MEP openings"],
                ["4.9/5", "Client satisfaction"],
              ].map(([value, label]) => (
                <div key={label} className="border-t border-zinc-300 pt-4">
                  <div className="text-2xl font-semibold text-zinc-950">
                    {value}
                  </div>
                  <div className="mt-1 text-xs font-medium text-zinc-550">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/contact-us#project-form"
              className="mt-8 inline-flex items-center text-sm font-semibold text-[#234D7E]"
            >
              Schedule a cutting and demolition review
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-white px-5 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <ShieldCheck className="mx-auto h-8 w-8 text-[#234D7E]" />

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
              Method-led cutting and demolition process
            </h2>
          </div>

          <div className="space-y-4">
            {processes.map((step, index) => (
              <div
                key={step}
                className="grid gap-4 rounded-2xl border border-zinc-200 bg-[#fbf9f7] p-5 sm:grid-cols-[3rem_1fr]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#234D7E] text-sm font-semibold text-white">
                  {index + 1}
                </div>

                <p className="self-center text-sm leading-7 text-zinc-700">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbf9f7] px-5 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <HelpCircle className="mx-auto h-7 w-7 text-[#234D7E]" />

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-zinc-200 bg-white"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-sm font-semibold text-zinc-950">
                  {faq.q}

                  <span className="text-[#234D7E] transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="border-t border-zinc-100 px-5 pb-5 pt-4 text-sm leading-7 text-zinc-650">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-[#f4f1ec] px-5 py-10 text-center">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-950">
            Explore adjacent service specialties
          </h2>

          <div className="mt-5 flex flex-wrap justify-center gap-3 text-sm font-semibold">
            <Link
              href="/services/structural-rehabilitation"
              className="rounded-full border border-zinc-200 bg-white px-4 py-2 transition hover:border-[#234D7E]"
            >
              Structural Rehabilitation
            </Link>

            <Link
              href="/services/industrial-grouting-services"
              className="rounded-full border border-zinc-200 bg-white px-4 py-2 transition hover:border-[#234D7E]"
            >
              Industrial Grouting
            </Link>

            <Link
              href="/services/waterproofing-services"
              className="rounded-full border border-zinc-200 bg-white px-4 py-2 transition hover:border-[#234D7E]"
            >
              Waterproofing Services
            </Link>
          </div>
        </div>
      </section>

      <ContactCta />
    </main>
  );
}
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  HelpCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import ContactCta from "@/components/ContactCta";
import FloatingCTA from "@/components/FloatingCTA";
import { CONTACT_PHONE, SITE_URL } from "@/lib/site";

const heroImage =
  "/project_structural_repair.png";

// ISR: revalidate every hour — service page content is stable, no need for force-dynamic
export const revalidate = 3600;

export const metadata = {
  title: "Structural Rehabilitation Services in Lucknow & UP | Fiable",
  description:
    "Fiable provides structural rehabilitation, RCC repair, crack injection, concrete jacketing, carbon fiber wrapping, corrosion repair, and building strengthening services in Lucknow, Delhi NCR, Kanpur, and Uttar Pradesh.",
  alternates: {
    canonical: `${SITE_URL}/services/structural-rehabilitation`,
  },
};

function buildSchema() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${SITE_URL}/services/structural-rehabilitation#service`,
      name: "Structural Rehabilitation Services in Lucknow",
      serviceType: "Structural Rehabilitation",
      description:
        "Engineering-led structural rehabilitation and repair services for RCC buildings, industrial structures, columns, beams, slabs, basements, and distressed concrete elements.",
      provider: {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}#localbusiness`,
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
      areaServed: [
        { "@type": "City", name: "Lucknow" },
        { "@type": "City", name: "Kanpur" },
        { "@type": "State", name: "Uttar Pradesh" },
        { "@type": "AdministrativeArea", name: "Delhi NCR" },
      ],
      url: `${SITE_URL}/services/structural-rehabilitation`,
      // NOTE: aggregateRating removed — only add when backed by real, verifiable reviews
    },
    // BreadcrumbList — enables breadcrumb display in Google SERP
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home",     item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
        { "@type": "ListItem", position: 3, name: "Structural Rehabilitation", item: `${SITE_URL}/services/structural-rehabilitation` },
      ],
    },
    // NOTE: FAQPage schema removed — restricted to government/healthcare sites only (Aug 2023)
  ];
}

const badges = [
  "Engineering-led diagnosis",
  "Repair + strengthening",
  "Minimal disruption",
];

const serviceCards = [
  {
    title: "RCC Crack Repair & Epoxy Injection",
    meta: "structural cracks | epoxy grouting | monolithic bonding",
    body: "Precision crack repair for beams, slabs, columns, and walls using suitable injection systems after identifying the crack cause, depth, and movement behavior.",
    image: "/structural_crack_repair.png",
  },
  {
    title: "Column, Beam & Slab Strengthening",
    meta: "load upgrade | jacketing | section strengthening",
    body: "Strengthening solutions for distressed or under-designed structural members using RCC jacketing, steel jacketing, micro-concrete, anchors, and engineered repair systems.",
    image: "/services_structural.png",
  },
  {
    title: "Carbon Fiber Wrapping & FRP Systems",
    meta: "CFRP wrapping | lightweight reinforcement | low downtime",
    body: "Non-invasive structural strengthening for columns, beams, slabs, and critical zones where added strength is required without heavy demolition or major dimensional change.",
    image: "/structural_carbon_wrap.png",
  },
  {
    title: "Corrosion Repair & Concrete Restoration",
    meta: "rebar treatment | spalling repair | protective coating",
    body: "Repair of damaged concrete caused by corrosion, moisture ingress, carbonation, weak cover, and aging, followed by protective systems to improve durability.",
    image: "/structural_corrosion_repair.png",
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
  "Visual inspection, crack mapping, distress documentation, and structural condition review",
  "Identification of failure causes such as corrosion, overload, leakage, poor concrete, settlement, or age-related deterioration",
  "Selection of suitable repair method: epoxy injection, polymer mortar, micro-concrete, jacketing, FRP wrapping, or corrosion repair",
  "Surface preparation, loose concrete removal, rebar cleaning, bonding treatment, and structural repair execution",
  "Final finishing, protective coating where required, quality checks, and maintenance recommendations",
];

const faqs = [
  {
    q: "What is structural rehabilitation?",
    a: "Structural rehabilitation means repairing and strengthening an existing building or structure so it can safely perform its intended function again. It may include crack repair, concrete restoration, rebar corrosion treatment, jacketing, carbon fiber wrapping, and load-capacity improvement.",
  },
  {
    q: "How do I know if my building needs structural rehabilitation?",
    a: "Common signs include deep cracks in beams or columns, exposed steel, rust stains, concrete spalling, slab sagging, leakage-damaged concrete, hollow plaster sounds, widening cracks, or visible distress in load-bearing members. A site inspection is recommended before deciding the repair method.",
  },
  {
    q: "Is epoxy injection enough for structural cracks?",
    a: "Epoxy injection can restore bonding in many non-moving structural cracks, but it is not always the complete solution. If the crack is caused by overload, corrosion, settlement, or ongoing movement, strengthening or corrosion repair may also be needed.",
  },
  {
    q: "What is the difference between structural repair and structural strengthening?",
    a: "Structural repair restores damaged or deteriorated elements, while structural strengthening increases the load-carrying capacity or performance of the structure. Many rehabilitation projects require both repair and strengthening.",
  },
  {
    q: "Can old RCC buildings be strengthened without demolition?",
    a: "Yes. Depending on the condition, RCC buildings can often be strengthened using methods such as concrete jacketing, steel jacketing, carbon fiber wrapping, micro-concrete repair, anchors, and protective coating systems with limited demolition.",
  },
  {
    q: "Do you provide site inspection before recommending the method?",
    a: "Yes. Structural rehabilitation should not start with guesswork. Fiable reviews cracks, moisture paths, concrete condition, reinforcement exposure, usage, and distress patterns before recommending a suitable repair or strengthening system.",
  },
];

export default function StructuralRehabilitationPage() {
  const schema = buildSchema();

  return (
    <main className="min-h-screen bg-[#f4f1ec] text-[#141414] antialiased">
      <FloatingCTA />

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
                Structural Rehabilitation
              </span>
            </nav>

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#234D7E]">
              Structural rehabilitation contractors in Lucknow
            </p>

            <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-tight text-zinc-950 md:text-6xl">
              Structural Rehabilitation Services in Lucknow
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
              Fiable provides engineering-led structural rehabilitation in
              Lucknow for distressed RCC buildings, industrial structures,
              basements, columns, beams, slabs, and aging concrete assets. We
              repair cracks, restore damaged concrete, treat reinforcement
              corrosion, and strengthen structural members using method-led
              systems such as epoxy injection, jacketing, micro-concrete repair,
              and carbon fiber wrapping.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact-us#project-form"
                className="inline-flex items-center justify-center rounded-full bg-[#234D7E] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1b3b62]"
              >
                Request a Site Inspection
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
              alt="Structural rehabilitation and concrete repair by Fiable Building Solutions"
              className="h-[360px] w-full object-cover md:h-[480px]"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-white px-5 py-14 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
            Repair the cause, not just the visible damage
          </h2>

          <p className="mt-5 text-base leading-8 text-zinc-650">
            Structural rehabilitation is not cosmetic patchwork. Every project
            starts with distress mapping, crack behavior review, concrete
            condition assessment, and repair-system selection. The goal is to
            restore safety, improve durability, and extend the service life of
            the structure with the least practical disruption.
          </p>
        </div>
      </section>

      <section className="bg-[#fbf9f7] px-5 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#234D7E]">
              Structural rehabilitation scope
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
              Solutions for cracks, corrosion, weak RCC members, and aging
              structures
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
                Structural rehabilitation across Lucknow and NCR
              </h2>

              <p className="mt-5 text-base leading-8 text-zinc-650">
                We work across residential, commercial, institutional, and
                industrial properties where structural distress, concrete
                deterioration, cracking, corrosion, or strengthening requirement
                needs a method-led repair approach.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {areas.map((area) => (
                <div
                  key={area}
                  className="rounded-2xl border border-zinc-200 bg-[#fbf9f7] p-5"
                >
                  <h3 className="text-sm font-semibold text-zinc-950">
                    Structural Repair in {area}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-zinc-550">
                    RCC buildings, apartments, villas, factories, basements, and
                    commercial structures.
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
              alt="Fiable structural repair and rehabilitation team"
              className="h-[420px] w-full object-cover"
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#234D7E]">
              Structural repair specialists
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
              Strong rehabilitation begins with correct diagnosis.
            </h2>

            <p className="mt-5 text-base leading-8 text-zinc-650">
              We do not cover cracks with quick plaster repairs. We study the
              distress pattern, moisture exposure, reinforcement condition, load
              behavior, and concrete damage before selecting the right
              rehabilitation method. The result is a repair that supports safety,
              service life, and future maintenance.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["RCC", "Repair & strengthening"],
                ["FRP", "Carbon fiber systems"],
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
              Schedule a structural condition review
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
              Method-led rehabilitation process
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
              href="/services/waterproofing-services"
              className="rounded-full border border-zinc-200 bg-white px-4 py-2 transition hover:border-[#234D7E]"
            >
              Waterproofing Services
            </Link>

            <Link
              href="/services/industrial-grouting-services"
              className="rounded-full border border-zinc-200 bg-white px-4 py-2 transition hover:border-[#234D7E]"
            >
              Industrial Grouting
            </Link>

            <Link
              href="/services/structural-refurbishment"
              className="rounded-full border border-zinc-200 bg-white px-4 py-2 transition hover:border-[#234D7E]"
            >
              Structural Refurbishment
            </Link>
          </div>
        </div>
      </section>

      <ContactCta />
    </main>
  );
}

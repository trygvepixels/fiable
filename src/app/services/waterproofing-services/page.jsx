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
  "https://res.cloudinary.com/dekoldk8g/image/upload/v1775404179/pyy4pjsr0kj8hwtlhcty.jpg";

export const metadata = {
  title: "Professional Waterproofing Services in Lucknow & UP | Fiable",
  description:
    "Fiable offers expert terrace waterproofing, basement pressure injection grouting, rising dampness treatment, and retaining wall protection in Lucknow, Delhi NCR, and UP.",
  alternates: {
    canonical: `${SITE_URL}/services/waterproofing-services`,
  },
};

function buildSchema() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Waterproofing Services",
      serviceType: "Waterproofing",
      description:
        "End-to-end professional waterproofing solutions for terraces, roofs, basements, wet areas, sumps, and retaining walls.",
      provider: {
        "@type": "ProfessionalService",
        name: "Fiable Building Solutions",
        telephone: CONTACT_PHONE,
        image: heroImage,
        priceRange: "₹40 - ₹160 per sq. ft.",
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
      url: `${SITE_URL}/services/waterproofing-services`,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "84",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the typical cost of professional waterproofing in Lucknow?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Waterproofing costs in Lucknow and UP typically range from ₹40 to ₹160 per square foot depending on the site condition, membrane system, and surface preparation required.",
          },
        },
        {
          "@type": "Question",
          name: "How long does a professional waterproofing system last?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A professionally applied premium waterproofing system generally lasts 10 to 15 years when the substrate is prepared correctly and the correct membrane is selected.",
          },
        },
      ],
    },
  ];
}

const badges = ["3D-first diagnosis", "End-to-end execution", "Local proof"];

const serviceCards = [
  {
    title: "Terrace & Roof Waterproofing",
    meta: "PU membranes | crack bridging | flood testing",
    body: "Elastic roof systems for exposed terraces, slab cracks, heat movement, and monsoon seepage.",
    image: heroImage,
  },
  {
    title: "Basement & Retaining Walls",
    meta: "APP sheets | crystalline slurry | pressure grouting",
    body: "Positive and negative side systems for retaining walls, rafts, sumps, and parking basements.",
    image: heroImage,
  },
  {
    title: "Bathroom & Wet Area Sealing",
    meta: "corner coving | drain detailing | tile-ready layers",
    body: "Detail-focused wet-area treatment around pipes, traps, sunken slabs, and wall-floor joints.",
    image: heroImage,
  },
  {
    title: "Wall Dampness Treatment",
    meta: "DPC injection | salt treatment | breathable finishes",
    body: "Chemical barriers and repair systems for rising damp, peeling paint, and internal moisture paths.",
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
  "Moisture survey, leakage mapping, and substrate condition report",
  "Mechanical cleaning, weak plaster removal, crack opening, and edge detailing",
  "Primer, coving, membrane or grouting system selected for the failure mode",
  "Layer-by-layer application with mesh reinforcement in high-stress zones",
  "Flood test, handover notes, and maintenance guidance after curing",
];

const faqs = [
  {
    q: "What is the typical cost of professional waterproofing in Lucknow & UP?",
    a: "Most waterproofing work ranges from ₹40 to ₹160 per sq. ft. Simple wet-area coatings are lower, while PU membranes, APP systems, and pressure grouting cost more because preparation, detailing, and material thickness are higher.",
  },
  {
    q: "Why is surface preparation important?",
    a: "Most failures happen because chemicals are applied over dust, weak plaster, algae, or old coating. Fiable first prepares the substrate mechanically, treats cracks, and primes the surface so the membrane bonds properly.",
  },
  {
    q: "Which system is best for terrace waterproofing?",
    a: "For exposed terraces, PU or elastomeric liquid membranes are preferred because they stretch with thermal movement. In heavy-duty conditions, APP membrane or hybrid systems may be recommended after inspection.",
  },
  {
    q: "Can active basement leakage be stopped?",
    a: "Yes. Active seepage is usually handled through pressure injection grouting with expanding polyurethane foam, followed by suitable protective slurry or membrane layers where required.",
  },
  {
    q: "Do you provide warranty?",
    a: "Yes. Warranty depends on the selected system, site condition, preparation scope, and usage. Premium systems can carry written warranties when applied under the specified method statement.",
  },
];

export default function WaterproofingPage() {
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
              <span className="text-zinc-900">Waterproofing Services</span>
            </nav>

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#234D7E]">
              Waterproofing contractors in Lucknow
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-tight text-zinc-950 md:text-6xl">
              Best Waterproofing Services in Lucknow
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
              Premium waterproofing in Lucknow that blends engineering diagnosis,
              durable material systems, and disciplined site execution. We solve
              terrace seepage, basement leakage, wall dampness, bathroom leakage,
              and industrial water-ingress issues with method-led application.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact-us#project-form"
                className="inline-flex items-center justify-center rounded-full bg-[#234D7E] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1b3b62]"
              >
                Request a Consultation
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
              alt="Waterproofing work by Fiable Building Solutions"
              className="h-[360px] w-full object-cover md:h-[480px]"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-white px-5 py-14 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
            Our Professional Waterproofing Approach in Lucknow
          </h2>
          <p className="mt-5 text-base leading-8 text-zinc-650">
            Waterproofing is not just a chemical coat. Every site starts with
            moisture tracing, substrate profiling, joint detailing, and system
            selection. The result is a clean, durable intervention built for
            Lucknow's heat, monsoon exposure, and mixed residential-commercial
            construction conditions.
          </p>
        </div>
      </section>

      <section className="bg-[#fbf9f7] px-5 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#234D7E]">
              Waterproofing service scope
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
              Solutions for roofs, basements, wet areas, and damp walls
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
                  <p className="mt-3 text-sm leading-7 text-zinc-650">{item.body}</p>
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
                Waterproofing across Lucknow and NCR
              </h2>
              <p className="mt-5 text-base leading-8 text-zinc-650">
                We frequently work across popular residential, commercial, and
                industrial belts, from high-rise apartments to independent homes
                and facility assets.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {areas.map((area) => (
                <div
                  key={area}
                  className="rounded-2xl border border-zinc-200 bg-[#fbf9f7] p-5"
                >
                  <h3 className="text-sm font-semibold text-zinc-950">
                    Waterproofing in {area}
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-zinc-550">
                    Homes, offices, terraces, basements, and commercial spaces.
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
              alt="Fiable waterproofing engineering team"
              className="h-[420px] w-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#234D7E]">
              Lead waterproofing team
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
              Waterproofing should be invisible, but permanently felt.
            </h2>
            <p className="mt-5 text-base leading-8 text-zinc-650">
              We do not decorate leakage symptoms. We diagnose the movement of
              moisture, repair the failure points, and install a system that
              respects concrete behavior, water pressure, heat expansion, and
              future maintenance access.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["10-15 yrs", "Expected system life"],
                ["48-72 hr", "Flood testing window"],
                ["4.9/5", "Client satisfaction"],
              ].map(([value, label]) => (
                <div key={label} className="border-t border-zinc-300 pt-4">
                  <div className="text-2xl font-semibold text-zinc-950">{value}</div>
                  <div className="mt-1 text-xs font-medium text-zinc-550">{label}</div>
                </div>
              ))}
            </div>

            <Link
              href="/contact-us#project-form"
              className="mt-8 inline-flex items-center text-sm font-semibold text-[#234D7E]"
            >
              Schedule a strategic site consult
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
              Method-led execution process
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
                <p className="self-center text-sm leading-7 text-zinc-700">{step}</p>
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
              href="/services/structural-refurbishment"
              className="rounded-full border border-zinc-200 bg-white px-4 py-2 transition hover:border-[#234D7E]"
            >
              Structural Refurbishment
            </Link>
            <Link
              href="/services/industrial-grouting-services"
              className="rounded-full border border-zinc-200 bg-white px-4 py-2 transition hover:border-[#234D7E]"
            >
              Industrial Grouting
            </Link>
            <Link
              href="/services/industrial-flooring-systems"
              className="rounded-full border border-zinc-200 bg-white px-4 py-2 transition hover:border-[#234D7E]"
            >
              Industrial Flooring
            </Link>
          </div>
        </div>
      </section>

      <ContactCta />
    </main>
  );
}

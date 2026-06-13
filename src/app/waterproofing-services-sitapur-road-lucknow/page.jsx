import Link from "next/link";
import { ArrowRight, CheckCircle, Phone, MapPin, Star } from "lucide-react";
import ContactCta from "@/components/ContactCta";
import { CONTACT_PHONE, SITE_URL } from "@/lib/site";

// ISR: revalidate daily — static geo-landing page
export const revalidate = 86400;

const heroImage =
  "https://res.cloudinary.com/dekoldk8g/image/upload/v1775404179/pyy4pjsr0kj8hwtlhcty.jpg";

export const metadata = {
  title: "Waterproofing Services in Sitapur Road Lucknow | Fiable Building Solutions",
  description:
    "Looking for professional waterproofing in Sitapur Road, Lucknow? Fiable Building Solutions provides terrace, basement, bathroom, and wall dampness waterproofing in Sitapur Road area. Free site inspection. Call now.",
  alternates: {
    canonical: `${SITE_URL}/waterproofing-services-sitapur-road-lucknow`,
  },
  openGraph: {
    title: "Waterproofing Services in Sitapur Road Lucknow | Fiable",
    description:
      "Expert waterproofing contractor in Sitapur Road, Lucknow. Terrace, basement, bathroom & wall dampness treatment. Free inspection available.",
    url: `${SITE_URL}/waterproofing-services-sitapur-road-lucknow`,
    images: [{ url: heroImage, alt: "Waterproofing services in Sitapur Road Lucknow" }],
  },
};

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/waterproofing-services-sitapur-road-lucknow#service`,
    name: "Waterproofing Services in Sitapur Road, Lucknow",
    serviceType: "Waterproofing",
    description:
      "Professional waterproofing services in Sitapur Road, Lucknow — terrace waterproofing, basement waterproofing, bathroom sealing, and wall dampness treatment.",
    areaServed: {
      "@type": "Place",
      name: "Sitapur Road, Lucknow, Uttar Pradesh, India",
      geo: {
        "@type": "GeoCoordinates",
        latitude: "26.8794",
        longitude: "80.9677",
      },
    },
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}#localbusiness`,
      name: "Fiable Building Solutions",
      telephone: CONTACT_PHONE,
      address: {
        "@type": "PostalAddress",
        streetAddress: "728, Phase 2, Khasra No. 21, Eden Enclave, Kursi Road, Gudumba BKT",
        addressLocality: "Lucknow",
        addressRegion: "Uttar Pradesh",
        postalCode: "226026",
        addressCountry: "IN",
      },
    },
    url: `${SITE_URL}/waterproofing-services-sitapur-road-lucknow`,
    offers: {
      "@type": "Offer",
      priceRange: "₹40 – ₹160 per sq. ft.",
      priceCurrency: "INR",
      areaServed: "Sitapur Road, Lucknow",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",                 item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Services",             item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: "Waterproofing Services", item: `${SITE_URL}/services/waterproofing-services` },
      { "@type": "ListItem", position: 4, name: "Sitapur Road Lucknow", item: `${SITE_URL}/waterproofing-services-sitapur-road-lucknow` },
    ],
  },
];

const services = [
  {
    title: "Terrace & Roof Waterproofing",
    desc: "PU membrane systems, crack bridging, and flood-tested protection for Sitapur Road terraces exposed to UP monsoon heat cycles.",
  },
  {
    title: "Basement Waterproofing",
    desc: "Crystalline slurry, APP sheets, and pressure-injection grouting for basements and underground areas in Sitapur Road buildings.",
  },
  {
    title: "Bathroom & Wet Area Sealing",
    desc: "Detail-focused bathroom waterproofing around sunken slabs, drain joints, and pipe penetrations for Sitapur Road homes.",
  },
  {
    title: "Wall Dampness & Seepage Treatment",
    desc: "DPC injection, salt neutralisation, and breathable finishes for damp interior walls in residential and commercial properties.",
  },
];

const faqs = [
  {
    q: "Do you provide waterproofing services in Sitapur Road, Lucknow?",
    a: "Yes. Fiable Building Solutions provides terrace, basement, bathroom, and wall waterproofing services in Sitapur Road and surrounding areas including Kursi Road, Jankipuram, and Indiranagar.",
  },
  {
    q: "What is the cost of waterproofing in Sitapur Road, Lucknow?",
    a: "Waterproofing costs in Sitapur Road, Lucknow typically range from ₹40 to ₹160 per square foot, depending on the surface area, type of waterproofing system, and site condition. We provide a free site inspection and detailed quotation.",
  },
  {
    q: "How long does waterproofing last?",
    a: "A professionally applied waterproofing system using quality membranes typically lasts 10 to 15 years when the substrate is correctly prepared and the right product is selected for your site conditions.",
  },
  {
    q: "Do you offer a free site inspection in Sitapur Road?",
    a: "Yes. We offer a free site inspection in Sitapur Road and across Lucknow. Call us to schedule a visit by our waterproofing specialist.",
  },
  {
    q: "Which waterproofing is best for Lucknow terraces?",
    a: "For Lucknow terraces, PU (polyurethane) elastomeric membranes or SBS/APP torch-applied membranes are commonly recommended due to their resistance to the region's heat, UV, and heavy monsoon rains.",
  },
];

export default function WaterproofingSitapurRoadPage() {
  return (
    <main className="min-h-screen bg-[#f4f1ec] text-[#141414] antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── Hero ── */}
      <section className="px-5 pb-14 pt-28 md:pb-20 md:pt-36">
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumb nav */}
          <nav className="mb-8 flex flex-wrap items-center gap-2 text-xs font-medium text-zinc-500">
            <Link href="/" className="hover:text-[#234D7E]">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#234D7E]">Services</Link>
            <span>/</span>
            <Link href="/services/waterproofing-services" className="hover:text-[#234D7E]">Waterproofing Services</Link>
            <span>/</span>
            <span className="text-zinc-900">Sitapur Road, Lucknow</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[1fr_0.78fr] lg:items-end">
            <div>
              <div className="mb-4 flex items-center gap-2 text-xs font-semibold text-[#234D7E]">
                <MapPin className="h-4 w-4" />
                <span className="uppercase tracking-[0.22em]">Sitapur Road, Lucknow</span>
              </div>

              <h1 className="mt-2 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-tight text-zinc-950 md:text-6xl">
                Waterproofing Services in Sitapur Road, Lucknow
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-600 md:text-lg">
                Fiable Building Solutions provides professional terrace, basement, bathroom,
                and wall waterproofing in Sitapur Road, Lucknow. Free site inspection. Backed
                by engineered membrane systems and field-tested execution.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Free Site Inspection", "PU & Membrane Systems", "Lucknow-Based Team", "10–15 Year System Life"].map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-800"
                  >
                    <CheckCircle className="h-3.5 w-3.5 text-[#234D7E]" />
                    {badge}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact-us#project-form"
                  className="inline-flex items-center justify-center rounded-full bg-[#234D7E] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1b3b62]"
                >
                  Book Free Site Inspection
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <a
                  href={`tel:${CONTACT_PHONE.replace(/\s+/g, "")}`}
                  className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:border-[#234D7E] hover:text-[#234D7E]"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call {CONTACT_PHONE}
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[1.75rem] bg-zinc-200">
              <img
                src={heroImage}
                alt="Waterproofing work by Fiable Building Solutions in Sitapur Road Lucknow"
                className="h-[360px] w-full object-cover md:h-[480px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="border-y border-zinc-200 bg-white px-5 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#234D7E]">
              What we cover in Sitapur Road
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
              Complete waterproofing solutions for homes &amp; buildings in Sitapur Road
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-zinc-200 bg-[#fbf9f7] p-6"
              >
                <h3 className="text-lg font-semibold text-zinc-950">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Fiable ── */}
      <section className="bg-[#f4f1ec] px-5 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#234D7E]">
            Why choose Fiable in Sitapur Road
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
            Local team. Engineered systems. Honest quotations.
          </h2>
          <p className="mt-5 text-base leading-8 text-zinc-600">
            Sitapur Road properties face a specific mix of challenges — sandy soil expansion,
            high water table near nallahs, and intense summer heat cycles that stress
            waterproofing membranes. Fiable&#39;s team understands Lucknow&#39;s site conditions and
            selects systems that perform through UP&#39;s monsoon and summer extremes.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
          {[
            ["Free", "Site inspection before quotation"],
            ["₹40–₹160", "Per sq. ft. transparent pricing"],
            ["10–15 yrs", "System design life"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-2xl border border-zinc-200 bg-white p-6 text-center">
              <div className="text-2xl font-semibold text-[#234D7E]">{value}</div>
              <div className="mt-2 text-xs font-medium text-zinc-600">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Nearby Areas ── */}
      <section className="border-y border-zinc-200 bg-white px-5 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#234D7E]">
              Areas we serve near Sitapur Road
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
              Waterproofing across Sitapur Road &amp; surrounding localities
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[
              "Sitapur Road",
              "Kursi Road",
              "Jankipuram",
              "Indiranagar",
              "Faizabad Road",
              "Chinhat",
              "Vijay Nagar",
              "Gomti Nagar",
            ].map((area) => (
              <div
                key={area}
                className="rounded-2xl border border-zinc-200 bg-[#fbf9f7] p-4"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 flex-shrink-0 text-[#234D7E]" />
                  <span className="text-sm font-semibold text-zinc-950">{area}</span>
                </div>
                <p className="mt-1.5 text-xs leading-5 text-zinc-500">
                  Terrace, basement &amp; bathroom waterproofing
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#fbf9f7] px-5 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-sm text-zinc-500">
              About waterproofing services in Sitapur Road, Lucknow
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-zinc-200 bg-white"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-sm font-semibold text-zinc-950">
                  {faq.q}
                  <span className="text-[#234D7E] transition group-open:rotate-45">+</span>
                </summary>
                <p className="border-t border-zinc-100 px-5 pb-5 pt-4 text-sm leading-7 text-zinc-600">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related links ── */}
      <section className="border-t border-zinc-200 bg-[#f4f1ec] px-5 py-10 text-center">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-950">
            Explore other waterproofing &amp; construction services
          </h2>
          <div className="mt-5 flex flex-wrap justify-center gap-3 text-sm font-semibold">
            <Link href="/services/waterproofing-services" className="rounded-full border border-zinc-200 bg-white px-4 py-2 transition hover:border-[#234D7E]">
              All Waterproofing Services
            </Link>
            <Link href="/services/structural-rehabilitation" className="rounded-full border border-zinc-200 bg-white px-4 py-2 transition hover:border-[#234D7E]">
              Structural Rehabilitation
            </Link>
            <Link href="/services/industrial-grouting-services" className="rounded-full border border-zinc-200 bg-white px-4 py-2 transition hover:border-[#234D7E]">
              Industrial Grouting
            </Link>
            <Link href="/blogs" className="rounded-full border border-zinc-200 bg-white px-4 py-2 transition hover:border-[#234D7E]">
              Waterproofing Guides &amp; Tips
            </Link>
          </div>
        </div>
      </section>

      <ContactCta />
    </main>
  );
}

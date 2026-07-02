import Link from "next/link";
import { ArrowRight, CheckCircle, Phone, MapPin, Star, HelpCircle, ShieldCheck } from "lucide-react";
import ContactCta from "@/components/ContactCta";
import { CONTACT_PHONE, SITE_URL } from "@/lib/site";

// ISR: revalidate daily
export const revalidate = 86400;

const heroImage = "/services_cutting.png";

export const metadata = {
  title: "Core Cutting Services in Lucknow | RCC, Concrete & Diamond Core Drilling Experts",
  description:
    "Looking for professional core cutting services in Lucknow? Fiable Building Solutions offers expert RCC, concrete, and diamond core drilling, slab/wall cutting & controlled demolition. Free site inspection. Call now.",
  alternates: {
    canonical: `${SITE_URL}/core-cutting-services-lucknow`,
  },
  openGraph: {
    title: "Core Cutting Services in Lucknow | RCC, Concrete & Diamond Core Drilling Experts",
    description:
      "Expert core cutting & diamond drilling contractors in Lucknow. RCC, concrete & slab cutting. Free site inspection available.",
    url: `${SITE_URL}/core-cutting-services-lucknow`,
    images: [{ url: heroImage, alt: "Core Cutting Services in Lucknow" }],
  },
};

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/core-cutting-services-lucknow#service`,
    name: "Core Cutting Services in Lucknow",
    serviceType: "Concrete Core Drilling and Cutting",
    description:
      "Professional core cutting and diamond core drilling services in Lucknow for RCC slabs, walls, beams, columns, MEP service lines, and utility openings.",
    areaServed: {
      "@type": "Place",
      name: "Lucknow, Uttar Pradesh, India",
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
    url: `${SITE_URL}/core-cutting-services-lucknow`,
    offers: {
      "@type": "Offer",
      priceRange: "₹300 – ₹4500 per hole",
      priceCurrency: "INR",
      areaServed: "Lucknow",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: "Concrete Cutting & Demolition", item: `${SITE_URL}/services/concrete-cutting-demolition` },
      { "@type": "ListItem", position: 4, name: "Core Cutting Lucknow", item: `${SITE_URL}/core-cutting-services-lucknow` },
    ],
  },
];

const services = [
  {
    title: "MEP & Plumbing Core Drilling",
    meta: "plumbing lines | HVAC ducts | fire fighting systems",
    desc: "Clean circular holes from 1 to 14 inches for installing water pipes, drainage lines, electrical conduits, HVAC sleeves, and fire suppression pipes.",
  },
  {
    title: "RCC Slab & Floor Sawing",
    meta: "lift shafts | stairs opening | slab cutting",
    desc: "Controlled horizontal cutting for floor modifications, expansion joints, staircase openings, and structural corrections with minimal vibration.",
  },
  {
    title: "RCC Wall Sawing & Openings",
    meta: "door cuts | windows | ventilation shafts",
    desc: "Track-mounted diamond wall saw cutting to create precise openings in vertical concrete walls for doors, windows, and MEP shafts.",
  },
  {
    title: "Rebar & Anchor Bolt Drilling",
    meta: "chemical anchors | rebar doweling | structural ties",
    desc: "High-accuracy drilling for anchor bolts, epoxy anchors, and post-installed rebars required for building extensions and structural retrofits.",
  },
];

const pricingTable = [
  { size: "1\" to 2\" Diameter", price: "₹300 – ₹450 per hole", details: "For electrical conduits, thin water pipes, and anchor bolts." },
  { size: "3\" to 4\" Diameter", price: "₹450 – ₹750 per hole", details: "Standard plumbing lines, HVAC conduits, and drain outlets." },
  { size: "5\" to 6\" Diameter", price: "₹800 – ₹1,200 per hole", details: "Commercial toilet lines, kitchen exhaust, and MEP pipes." },
  { size: "8\" to 10\" Diameter", price: "₹1,500 – ₹2,500 per hole", details: "Industrial drains, fire piping, and ventilation sleeves." },
  { size: "12\" to 14\" Diameter", price: "₹3,000 – ₹4,500 per hole", details: "Heavy utility lines and specialized concrete penetrations." },
];

const areas = [
  "Gomti Nagar",
  "Hazratganj",
  "Indira Nagar",
  "Aliganj",
  "Jankipuram",
  "Sushant Golf City",
  "Mahanagar",
  "Chinhat",
  "Kanpur Road",
  "Vrindavan Yojna",
  "Ashiyana",
  "Kursi Road",
];

const processes = [
  "Structural layout review and precise marking of cutting/drilling locations",
  "Utility check (rebar scanning, electrical/plumbing line verification) to avoid hazards",
  "Staging setup, barricading, and installation of water containment/slurry collection system",
  "Diamond core drilling or sawing using heavy-duty Hilti and Bosch equipment",
  "Removal of core blocks, cleanup of slurry/debris, and client handover"
];

const faqs = [
  {
    q: "What is concrete core cutting?",
    a: "Core cutting (also known as concrete core drilling) is a dust-less, low-vibration method of drilling clean, perfectly round holes in reinforced cement concrete (RCC), stone, brickwork, or masonry floors and walls using diamond-tipped core bits.",
  },
  {
    q: "What is the average cost of core cutting in Lucknow?",
    a: "For standard holes (3 to 4 inches), the price ranges between ₹450 to ₹750 per hole. However, a minimum site visit mobilization charge of ₹3,500 to ₹5,000 applies to cover transportation, machinery setup, and water/slurry management.",
  },
  {
    q: "Does core cutting create micro-cracks or damage slabs?",
    a: "No. Unlike manual hammers or pneumatic jackhammers, diamond core rigs use rotary motion with no impact. This ensures that the structural integrity of the slab remains 100% intact, preventing micro-cracks or surrounding concrete spalling.",
  },
  {
    q: "Can you drill through heavy steel rebar in RCC?",
    a: "Yes. Our diamond core bits are specially designed to cut directly through heavy structural steel rebar reinforcement bars inside concrete slabs, beams, and columns without causing structural damage.",
  },
  {
    q: "What requirements are needed at the site before drilling starts?",
    a: "We require a continuous water connection (essential for cooling the diamond segment and suppressing dust) and a stable power source (single-phase or three-phase power depending on the drill size).",
  },
  {
    q: "How long does it take to drill a single core?",
    a: "For a standard 4-inch core in a 6-inch thick RCC slab, drilling takes approximately 10 to 15 minutes, depending on the concrete hardness and steel density.",
  },
];

export default function CoreCuttingLucknowPage() {
  return (
    <main className="min-h-screen bg-[#f4f1ec] text-[#141414] antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Section */}
      <section className="px-5 pb-14 pt-28 md:pb-20 md:pt-36">
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumb nav */}
          <nav className="mb-8 flex flex-wrap items-center gap-2 text-xs font-medium text-zinc-500">
            <Link href="/" className="hover:text-[#234D7E]">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#234D7E]">Services</Link>
            <span>/</span>
            <Link href="/services/concrete-cutting-demolition" className="hover:text-[#234D7E]">Concrete Cutting & Demolition</Link>
            <span>/</span>
            <span className="text-zinc-900">Core Cutting Lucknow</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[1fr_0.78fr] lg:items-end">
            <div>
              <div className="mb-4 flex items-center gap-2 text-xs font-semibold text-[#234D7E]">
                <MapPin className="h-4 w-4" />
                <span className="uppercase tracking-[0.22em]">Lucknow Local Service</span>
              </div>

              <h1 className="mt-2 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-tight text-zinc-950 md:text-6xl">
                Concrete Core Cutting & Diamond Drilling Services in Lucknow
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-600 md:text-lg">
                Fiable Building Solutions provides professional RCC concrete core cutting, slab sawing, 
                wall saw cutting, and diamond core drilling in Lucknow. Engineer-supervised execution 
                designed for precise MEP lines, structural openings, and chemical anchoring.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Diamond Core Drilling", "Low Vibration & Impact", "RCC slab & wall cutting", "Free Site Inspection"].map((badge) => (
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
                  Book Free Inspection
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <a
                  href={`tel:${CONTACT_PHONE.replace(/\s+/g, "")}`}
                  className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:border-[#234D7E] hover:text-[#234D7E]"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Expert {CONTACT_PHONE}
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[1.75rem] bg-zinc-200">
              <img
                src={heroImage}
                alt="Professional Diamond Core Drilling in Lucknow"
                className="h-[360px] w-full object-cover md:h-[480px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sub-intro text */}
      <section className="border-y border-zinc-200 bg-white px-5 py-14 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
            Controlled Rotary Drilling Before Structural Modifications
          </h2>
          <p className="mt-5 text-base leading-8 text-zinc-650">
            For modern MEP (Mechanical, Electrical, Plumbing) routing and structural modifications, 
            manual chiseling or heavy impact hammers can be catastrophic. They induce micro-cracks and fracture surrounding concrete. 
            At Fiable, we utilize diamond core drilling rigs which deliver precise circular penetrations without impact, 
            preserving reinforcement structure and preventing water seepage.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-[#fbf9f7] px-5 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#234D7E]">
              Core Cutting Specialties
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
              Concrete &amp; RCC Drilling Services We Offer
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md transition duration-200"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-[#234D7E] block mb-2">{service.meta}</span>
                <h3 className="text-xl font-semibold text-zinc-950">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Table Section */}
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#234D7E]">
            Cost Guideline
          </p>
          <h2 className="text-3xl font-semibold text-gray-900 mt-2 special-font">
            Estimated Core Cutting Price in Lucknow
          </h2>
          <p className="text-gray-600 mt-2 text-sm">
            Below rates are reference estimates. Final quotation depends on slab thickness, rebar density, height level, and site access.
          </p>
        </div>

        <div className="overflow-hidden border border-gray-200 rounded-2xl shadow-sm bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-gray-800 text-sm font-semibold">
                <th className="p-4 pl-6">Core Size (Diameter)</th>
                <th className="p-4">Est. Price Range (Up to 9" Depth)</th>
                <th className="p-4 pr-6">Common Applications</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700 divide-y divide-gray-100">
              {pricingTable.map((row, i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition">
                  <td className="p-4 pl-6 font-semibold text-zinc-900">{row.size}</td>
                  <td className="p-4 font-medium text-blue-800">{row.price}</td>
                  <td className="p-4 pr-6 text-zinc-600">{row.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-zinc-500 mt-4 text-center">
          * Note: Minimum billing of ₹3,500 to ₹5,000 applies per visit for mobilization of machinery, workforce, and setup.
        </p>
      </section>

      {/* Process section */}
      <section className="border-t border-zinc-200 bg-white px-5 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <ShieldCheck className="mx-auto h-8 w-8 text-[#234D7E]" />
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
              Our Professional Core Cutting Process
            </h2>
            <p className="text-sm text-zinc-500 mt-2">
              We execute controlled, structural drilling following step-by-step safety measures.
            </p>
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
                <p className="self-center text-sm leading-7 text-zinc-700 font-medium">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas we serve */}
      <section className="border-y border-zinc-200 bg-[#fbf9f7] px-5 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#234D7E]">
              Coverage Areas
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
              Concrete Drilling Service Locations in Lucknow
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {areas.map((area) => (
              <div
                key={area}
                className="rounded-2xl border border-zinc-200 bg-white p-4"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 flex-shrink-0 text-[#234D7E]" />
                  <span className="text-sm font-semibold text-zinc-950">{area}</span>
                </div>
                <p className="mt-1.5 text-xs leading-5 text-zinc-500">
                  RCC drilling, slab core cutting &amp; anchor holes
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white px-5 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <HelpCircle className="mx-auto h-7 w-7 text-[#234D7E]" />
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-sm text-zinc-500">
              Common queries regarding core cutting and drilling in Lucknow
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-zinc-200 bg-white"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-sm font-semibold text-zinc-950 select-none">
                  {faq.q}
                  <span className="text-[#234D7E] transition group-open:rotate-45 font-bold">+</span>
                </summary>
                <p className="border-t border-zinc-100 px-5 pb-5 pt-4 text-sm leading-7 text-zinc-650">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Explore adjacent services */}
      <section className="border-t border-zinc-200 bg-[#f4f1ec] px-5 py-10 text-center">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-950">
            Explore other Fiable Specialties
          </h2>
          <div className="mt-5 flex flex-wrap justify-center gap-3 text-sm font-semibold">
            <Link href="/services/concrete-cutting-demolition" className="rounded-full border border-zinc-200 bg-white px-4 py-2 transition hover:border-[#234D7E]">
              Concrete Cutting &amp; Demolition
            </Link>
            <Link href="/services/anchor-rebar-services" className="rounded-full border border-zinc-200 bg-white px-4 py-2 transition hover:border-[#234D7E]">
              Anchor &amp; Rebar Services
            </Link>
            <Link href="/services/structural-rehabilitation" className="rounded-full border border-zinc-200 bg-white px-4 py-2 transition hover:border-[#234D7E]">
              Structural Rehabilitation
            </Link>
            <Link href="/services/industrial-grouting-services" className="rounded-full border border-zinc-200 bg-white px-4 py-2 transition hover:border-[#234D7E]">
              Industrial Grouting
            </Link>
          </div>
        </div>
      </section>

      <ContactCta />
    </main>
  );
}

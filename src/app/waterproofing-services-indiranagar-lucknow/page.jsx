import Link from "next/link";
import { ArrowRight, CheckCircle, Phone, MapPin, Star } from "lucide-react";
import ContactCta from "@/components/ContactCta";
import { CONTACT_PHONE, SITE_URL } from "@/lib/site";

// ISR: revalidate daily — static geo-landing page
export const revalidate = 86400;

const heroImage =
  "/hero_waterproofing.png";

export const metadata = {
  title: "Waterproofing Services in Indiranagar Lucknow | Fiable Building Solutions",
  description:
    "Looking for professional waterproofing in Indiranagar, Lucknow? Fiable Building Solutions provides terrace, basement, bathroom, and wall dampness waterproofing in Indiranagar area. Free site inspection. Call now.",
  alternates: {
    canonical: `${SITE_URL}/waterproofing-services-indiranagar-lucknow`,
  },
  openGraph: {
    title: "Waterproofing Services in Indiranagar Lucknow | Fiable",
    description:
      "Expert waterproofing contractor in Indiranagar, Lucknow. Terrace, basement, bathroom & wall dampness treatment. Free inspection available.",
    url: `${SITE_URL}/waterproofing-services-indiranagar-lucknow`,
    images: [{ url: heroImage, alt: "Waterproofing services in Indiranagar Lucknow" }],
  },
};

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/waterproofing-services-indiranagar-lucknow#service`,
    name: "Waterproofing Services in Indiranagar, Lucknow",
    serviceType: "Waterproofing",
    description:
      "Professional waterproofing services in Indiranagar, Lucknow — terrace waterproofing, basement waterproofing, bathroom sealing, and wall dampness treatment.",
    areaServed: {
      "@type": "Place",
      name: "Indiranagar, Lucknow, Uttar Pradesh, India",
      geo: {
        "@type": "GeoCoordinates",
        latitude: "26.8845",
        longitude: "81.0001",
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
    url: `${SITE_URL}/waterproofing-services-indiranagar-lucknow`,
    offers: {
      "@type": "Offer",
      priceRange: "₹40 – ₹160 per sq. ft.",
      priceCurrency: "INR",
      areaServed: "Indiranagar, Lucknow",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",                 item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Services",             item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: "Waterproofing Services", item: `${SITE_URL}/services/waterproofing-services` },
      { "@type": "ListItem", position: 4, name: "Indiranagar Lucknow", item: `${SITE_URL}/waterproofing-services-indiranagar-lucknow` },
    ],
  },
];

const services = [
  {
    title: "Terrace & Roof Waterproofing",
    desc: "PU membrane systems, crack bridging, and flood-tested protection for Indiranagar terraces exposed to UP monsoon heat cycles.",
  },
  {
    title: "Basement Waterproofing",
    desc: "Crystalline slurry, APP sheets, and pressure-injection grouting for basements and underground areas in Indiranagar buildings.",
  },
  {
    title: "Bathroom & Wet Area Sealing",
    desc: "Detail-focused bathroom waterproofing around sunken slabs, drain joints, and pipe penetrations for Indiranagar homes.",
  },
  {
    title: "Wall Dampness & Seepage Treatment",
    desc: "DPC injection, salt neutralisation, and breathable finishes for damp interior walls in residential and commercial properties.",
  },
];

const faqs = [
  {
    q: "Why is waterproofing essential for properties in Indiranagar?",
    a: "Lucknow experience high summer heat followed by intense monsoons. This cycle expansion/contraction cracks concrete, leading to severe seepage. Professional waterproofing prevents structural damage and toxic mold growth.",
  },
  {
    q: "Do you provide a warranty for waterproofing services?",
    a: "Yes, we provide written service warranties ranging from 5 to 10 years depending on the waterproofing system applied (acrylic, PU membrane, or crystalline slurry).",
  },
  {
    q: "How long does a typical terrace waterproofing inspection take?",
    a: "Our diagnostic site inspection in Indiranagar takes about 30 to 45 minutes. We use moisture meters to locate dampness source and suggest exact restoration steps.",
  },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main className="min-h-screen bg-[#F4F1EC] pt-20">
        {/* Hero Banner */}
        <section className="relative h-[65vh] w-full flex items-center justify-center overflow-hidden">
          <img
            src={heroImage}
            alt="Professional Waterproofing Services in Indiranagar Lucknow"
            className="absolute inset-0 w-full h-full object-cover brightness-50"
          />
          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
            <span className="bg-blue-600/80 backdrop-blur text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full">
              Lucknow Local Service Areas
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 leading-tight special-font">
              Waterproofing Services in <br />
              <span className="text-blue-400 font-extrabold">Indiranagar, Lucknow</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mt-6 max-w-3xl mx-auto font-light leading-relaxed">
              Engineer-led terrace, basement, kitchen, and bathroom leakage repair. 100% moisture-targeted solutions with up to 10-year written warranty.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="#quote"
                className="bg-blue-600 text-white font-medium px-8 py-3.5 rounded-xl shadow-lg shadow-blue-900/30 hover:bg-blue-700 transition duration-200"
              >
                Book Free Inspection
              </a>
              <a
                href={`tel:${CONTACT_PHONE}`}
                className="bg-white/10 backdrop-blur text-white border border-white/20 font-medium px-8 py-3.5 rounded-xl hover:bg-white/20 transition duration-200 flex items-center gap-2"
              >
                <Phone className="h-5 w-5" /> Call Expert
              </a>
            </div>
          </div>
        </section>

        {/* Section 1: Intro */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight special-font">
              Why Homeowners & Commercial Managers in <span className="text-blue-700 font-bold">Indiranagar</span> Choose Fiable
            </h2>
            <p className="text-gray-700 mt-6 text-base leading-relaxed md:text-lg">
              Indiranagar houses some of Lucknow's finest residential colonies and commercial setups. However, water leakage from open terraces, expansion joints, or poor foundation construction can destroy interior paint, weaken reinforcement steel, and lead to structural damage.
            </p>
            <p className="text-gray-700 mt-4 text-base leading-relaxed">
              At **Fiable Building Solutions**, we don't apply temporary patchworks. We employ qualified civil engineers who diagnose the source using specialized moisture meters and execute advanced multi-layer waterproofing systems.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-950">Engineer-Led</h4>
                  <p className="text-sm text-gray-600 mt-1">Supervised by qualified civil engineers.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-950">Warranty Backed</h4>
                  <p className="text-sm text-gray-600 mt-1">5 to 10 year written assurance.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 bg-white p-8 rounded-2xl border border-gray-200/60 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-full -mr-8 -mt-8 -z-10" />
            <h3 className="text-xl font-bold text-gray-900 mb-6">Our Local Service Footprint</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-gray-900">Coverage in Indiranagar</h4>
                  <p className="text-sm text-gray-600 mt-1">Full service availability across all sectors and main roads in the Indiranagar area.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Star className="h-6 w-6 text-yellow-500 fill-yellow-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-gray-900">Rated 4.9/5 Stars</h4>
                  <p className="text-sm text-gray-600 mt-1">Highly rated by residential owners and commercial property managers locally.</p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
              <span className="text-sm text-gray-500">Need immediate help?</span>
              <a href={`tel:${CONTACT_PHONE}`} className="text-blue-600 font-semibold text-sm hover:underline flex items-center gap-1">
                Call +91 8069648411 <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Section 2: Services Grid */}
        <section className="bg-white border-y border-gray-200/50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 special-font">
                Waterproofing Services We Offer in <span className="text-blue-700">Indiranagar</span>
              </h2>
              <p className="text-gray-600 mt-4">
                From structural leak prevention to bathroom repair without tile breakage, we deliver comprehensive waterproofing systems.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              {services.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#F4F1EC] p-6 rounded-2xl border border-gray-100 hover:shadow-md transition duration-200"
                >
                  <span className="text-3xl font-extrabold text-blue-900/20">0{index + 1}</span>
                  <h3 className="text-lg font-bold text-gray-950 mt-4">{item.title}</h3>
                  <p className="text-gray-700 text-sm mt-2 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Cost Table */}
        <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <h2 className="text-3xl font-semibold text-center text-gray-900 special-font">
            Estimated Waterproofing Cost per Sq. Ft. in Lucknow
          </h2>
          <p className="text-center text-gray-600 mt-2">
            Standard pricing guideline. Call us for an exact quotation after site audit.
          </p>

          <div className="mt-12 overflow-hidden border border-gray-200 rounded-2xl shadow-sm bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-gray-800 text-sm font-semibold">
                  <th className="p-4 pl-6">Service Type</th>
                  <th className="p-4">Est. Price Range</th>
                  <th className="p-4 pr-6">System Description</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-700 divide-y divide-gray-100">
                <tr>
                  <td className="p-4 pl-6 font-semibold">Terrace / Roof</td>
                  <td className="p-4">₹45 – ₹110 / sq. ft.</td>
                  <td className="p-4 pr-6">Acrylic elastomeric coatings or polyurethane liquid membranes.</td>
                </tr>
                <tr>
                  <td className="p-4 pl-6 font-semibold">Basement Waterproofing</td>
                  <td className="p-4">₹65 – ₹160 / sq. ft.</td>
                  <td className="p-4 pr-6">Crystalline waterproofing slurry & pressure injection grouting.</td>
                </tr>
                <tr>
                  <td className="p-4 pl-6 font-semibold">Bathroom / Sump</td>
                  <td className="p-4">₹50 – ₹95 / sq. ft.</td>
                  <td className="p-4 pr-6">Polymer modified cementitious sealing, drainage trap treatment.</td>
                </tr>
                <tr>
                  <td className="p-4 pl-6 font-semibold">Wall Dampness</td>
                  <td className="p-4">₹40 – ₹85 / sq. ft.</td>
                  <td className="p-4 pr-6">DPC injection barrier and salt-neutralizing plaster treatment.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 4: FAQs */}
        <section className="bg-white border-t border-gray-200/50 py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center text-gray-900 special-font">
              Frequently Asked Questions (FAQs)
            </h2>
            <div className="mt-12 space-y-8">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-100 pb-6">
                  <h3 className="font-semibold text-gray-950 text-lg flex gap-3">
                    <span className="text-blue-600 font-extrabold">Q.</span>
                    {faq.q}
                  </h3>
                  <p className="text-gray-700 text-sm mt-3 pl-6 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lead Form target */}
        <div id="quote" />
        <ContactCta />
      </main>
    </>
  );
}

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
    image: { src: "https://res.cloudinary.com/dekoldk8g/image/upload/v1775404179/pyy4pjsr0kj8hwtlhcty.jpg", alt: "Waterproofing services" },
    points: [
      "Terrace and roof protection",
      "Basement and retaining wall waterproofing",
      "Leakage diagnosis and corrective treatment",
    ],
  },
  {
    _id: "fallback-structural",
    slug: "structural-refurbishment",
    title: "Structural Refurbishment",
    summary:
      "Repair and strengthening solutions for deteriorated RCC members, damaged slabs, columns, beams, and aging concrete structures.",
    image: { src: "https://res.cloudinary.com/dekoldk8g/image/upload/v1775404179/pyy4pjsr0kj8hwtlhcty.jpg", alt: "Structural refurbishment work" },
    points: [
      "Concrete repair and jacketing",
      "Carbon fiber wrap (CFRP) systems",
      "Corrosion mitigation and restoration",
    ],
  },
  {
    _id: "fallback-flooring",
    slug: "industrial-flooring-systems",
    title: "Industrial Flooring Systems",
    summary:
      "Performance-oriented epoxy and PU floor systems for factories, warehouses, process units, and industrial environments.",
    image: { src: "https://res.cloudinary.com/dekoldk8g/image/upload/v1775404179/pyy4pjsr0kj8hwtlhcty.jpg", alt: "Industrial flooring system" },
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
    image: { src: "https://res.cloudinary.com/dekoldk8g/image/upload/v1775404179/pyy4pjsr0kj8hwtlhcty.jpg", alt: "Industrial grouting service" },
    points: [
      "Non-shrink and epoxy grouting",
      "Machine foundation support",
      "Base plate and pedestal stabilization",
    ],
  },
  {
    _id: "fallback-concrete-cutting",
    slug: "concrete-cutting-demolition",
    title: "Concrete Cutting & Demolition",
    summary:
      "Precision diamond core drilling, wire sawing, wall sawing, and controlled demolition for structural alterations.",
    image: { src: "https://res.cloudinary.com/dekoldk8g/image/upload/v1775404179/pyy4pjsr0kj8hwtlhcty.jpg", alt: "Concrete cutting and demolition" },
    points: [
      "Diamond core drilling up to 500mm",
      "Wall sawing for door/window opens",
      "Controlled silent concrete splitting",
    ],
  },
  {
    _id: "fallback-anchor-rebar",
    slug: "anchor-rebar-services",
    title: "Anchor/Rebar Services",
    summary:
      "Post-installed chemical anchoring, rebar fixing, and structural bolts installation using premium adhesive systems.",
    image: { src: "https://res.cloudinary.com/dekoldk8g/image/upload/v1775404179/pyy4pjsr0kj8hwtlhcty.jpg", alt: "Anchor rebar chemical fixing" },
    points: [
      "High-load chemical rebar fixing",
      "Threaded rod adhesive anchoring",
      "Pull-out testing & validation",
    ],
  },
  {
    _id: "fallback-civil-construction",
    slug: "civil-construction",
    title: "Civil Construction",
    summary:
      "Turnkey commercial civil works, foundation casting, structural additions, and industrial building extensions.",
    image: { src: "https://res.cloudinary.com/dekoldk8g/image/upload/v1775404179/pyy4pjsr0kj8hwtlhcty.jpg", alt: "Civil construction contracting" },
    points: [
      "RCC frame & foundation casting",
      "Masonry & industrial partition walling",
      "Structural additions & fabrication",
    ],
  },
];

async function getServices() {
  await connectDB();
  const services = await Service.find({ active: true }).sort("order -createdAt").lean();
  return services.length ? services : fallbackServices;
}

function createServiceSchema(services) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Fiable Building Solutions Services",
      itemListElement: services.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}/services/${service.slug}`,
        name: service.title,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${SITE_URL}/services`,
        },
      ],
    },
  ];
}

export default async function ServicesPage() {
  const services = await getServices();
  const serviceSchema = createServiceSchema(services);

  return (
    <main className="min-h-screen bg-[#F4F1EC] antialiased text-[#101010] selection:bg-gray-900 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="fixed bottom-5 right-5 z-20">
        <Link href="/contact-us#project-form">
          <button className="group relative flex items-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-[#234D7E] to-[#2c4a7d] px-6 py-3 text-xs font-semibold text-white shadow-lg transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl">
            <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-white/0 via-white/20 to-white/0 transition-transform duration-700 ease-in-out group-hover:translate-x-[100%]" />
            <span className="relative z-10">Start Project</span>
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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

      <section className="mx-auto max-w-7xl px-5 pb-6 pt-16 text-center">
        <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-semibold">
          What we do
        </p>

        <h1 className="mt-2 inline-block text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl max-w-4xl leading-tight">
          Waterproofing, Structural Repair & Industrial Flooring in Lucknow & India
          <span className="mx-auto mt-3 block h-[2px] w-16 rounded-full bg-gradient-to-r from-[#234D7E] to-gray-450" />
        </h1>

        <div className="mx-auto mt-4 max-w-3xl text-xs md:text-sm leading-relaxed text-gray-600 space-y-3 text-center md:text-left">
          <p>
            Explore Fiable&apos;s professional waterproofing, building repair, structural rehabilitation, and industrial flooring services. Engineered specifically for residential complexes, commercial developments, and demanding industrial sites, our work guarantees precision, durability, and site discipline where long-term asset protection matters most.
          </p>
          <p>
            With over 100 successful waterproofing and structural rehabilitation projects delivered across Lucknow, Kanpur, Delhi NCR, Uttar Pradesh, Maharashtra, and industrial sectors of India, Fiable Building Solutions brings world-class civil engineering practices straight to your site. Our certified supervisors and experienced applicators systematically diagnose leakages, dampness, structural cracks, and concrete degradation to apply robust, customized treatment plans.
          </p>
          <p>
            From critical terrace waterproofing and complete basement leak injection to high-performance epoxy flooring, PU chemical-resistant coatings, and high-strength non-shrink machine foundation grouting, we partner with industry-leading chemical brands to deliver warranty-backed results. Whether you are dealing with monsoon terrace leakage in Lucknow, concrete damage in a commercial facility in Noida, or require heavy-duty floor restoration in a process plant, Fiable&apos;s team delivers reliable execution on time and within budget.
          </p>
        </div>

        <div className="mt-6 flex justify-center">
          <a
            href={`tel:${CONTACT_PHONE.replace(/\s+/g, "")}`}
            className="inline-flex items-center gap-2 rounded-full border border-gray-900/90 px-4 py-2 text-xs font-semibold text-gray-900 transition hover:bg-[#234D7E] hover:text-white"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>Call {CONTACT_PHONE}</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16">
        <ul className="flex flex-col gap-8">
          {services.map((service, i) => {
            const isEven = i % 2 === 1;
            return (
              <li key={service._id || service.slug}>
                <article className="group relative overflow-hidden rounded-3xl bg-white/70 shadow-sm ring-1 ring-black/5 transition hover:shadow-md supports-[backdrop-filter]:bg-white/60">
                  <div className="items-center p-4 md:grid md:grid-cols-2 md:gap-8 md:p-6 lg:p-8">
                    <figure className={isEven ? "md:order-2" : ""}>
                      <div className="relative overflow-hidden rounded-xl">
                        <Image
                          src={service.image?.src || "/image.png"}
                          alt={service.image?.alt || service.title}
                          width={600}
                          height={375}
                          className="aspect-[16/10] w-full rounded-xl object-cover shadow-sm ring-1 ring-black/5 transition-transform duration-550 group-hover:scale-[1.02]"
                        />
                      </div>
                    </figure>

                    <div
                      className={`mt-4 md:mt-0 ${isEven ? "text-right md:pl-6" : "text-left md:pr-6"}`}
                    >
                      <div className={`${isEven ? "md:ml-auto" : ""} max-w-lg`}>
                        <h2 className="text-lg font-semibold tracking-tight text-gray-900 md:text-xl">
                          {service.title}
                        </h2>

                        <div className="mb-3 mt-1.5 h-[2px] w-12 rounded-full bg-[#234D7E]" />

                        <p className="text-start text-xs md:text-sm leading-relaxed text-gray-650">
                          {service.summary}
                        </p>

                        {Array.isArray(service.points) && service.points.length > 0 ? (
                          <ul className="mt-3.5 space-y-1 text-start">
                            {service.points.map((point, idx) => (
                              <li key={idx} className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-[#234D7E] flex-shrink-0" />
                                <span className="text-xs text-neutral-600 font-medium">{point}</span>
                              </li>
                            ))}
                          </ul>
                        ) : null}

                        <div className="flex justify-start mt-5">
                          <Link
                            href={`/services/${service.slug}`}
                            className="inline-flex items-center gap-1.5 rounded-xl border border-gray-900/90 px-4 py-2 text-xs font-semibold text-gray-900 transition hover:bg-[#234D7E] hover:text-white"
                          >
                            <span>Explore Service</span>
                            <ArrowRight className="h-3.5 w-3.5" />
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

      {/* Areas We Serve Section */}
      <section className="mx-auto max-w-7xl px-5 pb-10">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-lg md:text-xl font-bold tracking-tight text-gray-900 mb-4 uppercase tracking-wide">
            Areas We Serve
          </h2>
          <p className="text-xs text-gray-500 mb-5 leading-relaxed">
            Fiable Building Solutions provides engineer-led waterproofing, concrete repair, epoxy flooring, and civil restoration services across major regional hubs:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-xs leading-relaxed">
            <div>
              <h3 className="font-semibold text-gray-900 mb-1.5">Lucknow (Central Office)</h3>
              <ul className="space-y-0.5 text-neutral-600">
                <li>• Gomti Nagar & Hazratganj</li>
                <li>• Aliganj & Indira Nagar</li>
                <li>• Sushant Golf City & BKT</li>
                <li>• Gudamba & Kursi Road</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1.5">Delhi NCR</h3>
              <ul className="space-y-0.5 text-neutral-600">
                <li>• Noida & Greater Noida</li>
                <li>• Gurgaon (Gurugram)</li>
                <li>• Faridabad & Ghaziabad</li>
                <li>• Okhla & Delhi Industrial</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1.5">Uttar Pradesh</h3>
              <ul className="space-y-0.5 text-neutral-600">
                <li>• Kanpur & Unnao</li>
                <li>• Agra & Mathura</li>
                <li>• Varanasi & Prayagraj</li>
                <li>• Gorakhpur & Bareilly</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1.5">Pan-India Coverage</h3>
              <ul className="space-y-0.5 text-neutral-600">
                <li>• Mumbai, Pune & Maharashtra</li>
                <li>• Industrial Estates & SEZs</li>
                <li>• Commercial Projects</li>
                <li>• Machine Foundations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mx-auto max-w-7xl px-5 pb-10">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-lg md:text-xl font-bold tracking-tight text-gray-900 mb-6 text-center uppercase tracking-wide">
            Frequently Asked Questions (FAQs)
          </h2>
          <div className="space-y-4 max-w-4xl mx-auto text-xs leading-relaxed">
            <div className="border-b border-gray-100 pb-4">
              <h3 className="font-semibold text-gray-900 mb-1">
                How much does professional waterproofing cost in India?
              </h3>
              <p className="text-gray-600">
                Waterproofing services in India generally range from ₹40 to ₹160 per sq. ft. depending on the surface type, application method (such as liquid membrane, polyurethane, or APP sheet membrane), and site conditions. Terrace and balcony systems average ₹50–₹120/sq. ft. Fiable offers free detailed site inspections and transparent itemized bills.
              </p>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <h3 className="font-semibold text-gray-900 mb-1">
                How long does waterproofing treatment typically last?
              </h3>
              <p className="text-gray-600">
                A high-quality, professionally applied waterproofing system will typically last between 10 to 15 years with proper protection and basic maintenance. Fiable only utilizes premium, tested elastomeric coatings and structural chemicals from industry leaders like Dr. Fixit, Sika, and Fosroc.
              </p>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <h3 className="font-semibold text-gray-900 mb-1">
                Does Fiable provide services outside Lucknow?
              </h3>
              <p className="text-gray-600">
                Yes! While our primary office is based in Gudamba, Lucknow, our engineering and specialist application teams regularly execute major projects across Noida, Greater Noida, Gurgaon, Kanpur, and industrial hubs nationwide in Maharashtra and surrounding regions.
              </p>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <h3 className="font-semibold text-gray-900 mb-1">
                What is the difference between epoxy flooring and PU flooring?
              </h3>
              <p className="text-gray-600">
                Epoxy flooring is extremely rigid, offers high compressive strength, and is highly resistant to heavy vehicular traffic and abrasion, making it ideal for standard industrial warehouses. Polyurethane (PU) flooring is more flexible, handles temperature shocks better, and possesses excellent chemical resistance, which is highly preferred for food processing plants and cold store units.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                How long does a structural rehabilitation or concrete repair project take?
              </h3>
              <p className="text-gray-650">
                The timeline is completely dependent on the damage scope. Minor crack injection grouting or patch micro-concrete repairs can be completed in 2–5 days. Comprehensive structural repair programs involving column jacketing and slab re-casting range from 2 to 6 weeks, coordinated to minimize downtime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Linking Boost Section */}
      <section className="mx-auto max-w-7xl px-5 pb-16">
        <div className="rounded-3xl bg-zinc-900 text-white p-6 md:p-10 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px]" />
          <div className="relative z-10 text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-base md:text-lg font-bold tracking-wider uppercase text-white">
              Explore Our Projects & Construction Insights
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm leading-relaxed max-w-xl mx-auto">
              Want to see our team in action or read technical advice? Check out our case studies or visit our blog for deep-dives into waterproofing diagnostics, floor specifications, and structural repair methodologies.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2 text-xs font-semibold">
              <Link
                href="/projects"
                className="bg-white text-zinc-900 hover:bg-zinc-100 px-5 py-2.5 rounded-full shadow transition"
              >
                Completed Case Studies
              </Link>
              <Link
                href="/blogs"
                className="bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700 px-5 py-2.5 rounded-full transition"
              >
                Construction Blog
              </Link>
              <Link
                href="/about-us"
                className="bg-zinc-850 text-white hover:bg-zinc-750 border border-zinc-750 px-5 py-2.5 rounded-full transition"
              >
                Meet Our Engineers
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactCta />
    </main>
  );
}

function Breadcrumbs() {
  return (
    <nav aria-label="Breadcrumb" className="relative z-20 mx-auto -mb-4 max-w-7xl px-5 pt-8">
      <ol className="flex items-center space-x-2 text-[12px] text-neutral-500 font-medium">
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

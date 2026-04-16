import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import ContactCta from "@/components/ContactCta";
import StepsSection from "@/components/StepsSection";
import { connectDB } from "@/lib/mongodb";
import Service from "@/models/Service";
import { CONTACT_PHONE, SITE_URL } from "@/lib/site";

export const dynamic = "force-dynamic";
export const revalidate = 0;

async function getServices() {
  await connectDB();
  return Service.find({ active: true }).sort("order -createdAt").lean();
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
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="fixed bottom-5 z-20 right-5">
        <Link href="/contact-us#project-form">
          <button className="group relative overflow-hidden bg-gradient-to-r from-[#4376BB] to-[#2c4a7d] hover:from-[#365a99] hover:to-[#1e3d6f] text-white px-8 py-3.5 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-out font-semibold text-sm flex items-center gap-3">
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
            <span className="relative z-10">
              Start <span className="text-[#F4C500] font-bold">Project</span>
            </span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </Link>
      </div>

      <section className="pt-32 pb-20 bg-[#F4F1EC]">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-gray-900"></div>
            <span className="text-sm font-mono uppercase tracking-wider text-gray-600">
              Fiable Building Solutions
            </span>
            <div className="w-8 h-px bg-gray-900"></div>
          </div>

          <h1 className="text-5xl lg:text-5xl text-gray-900 mb-8 leading-tight">
            Waterproofing, Structural Repair
            <br />
            <span className="text-[#4376BB]">and Industrial Services</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            Explore Fiable&apos;s core engineering services for waterproofing, structural rehabilitation,
            grouting, flooring, and specialized civil works. Each service page is designed to help
            residential, commercial, and industrial clients evaluate the right solution faster.
          </p>

          <div className="flex flex-col mx-auto w-full justify-center sm:flex-row gap-4">
            <a
              href={`tel:${CONTACT_PHONE.replace(/\s+/g, "")}`}
              className="group inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-400 px-8 py-4 font-bold text-black hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 shadow-2xl hover:shadow-yellow-400/30 hover:-translate-y-1 transform"
            >
              <Phone className="mr-3 h-5 w-5 group-hover:animate-pulse" />
              Call Now: {CONTACT_PHONE}
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-10 border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-6 grid gap-6 md:grid-cols-3">
          <div>
            <h2 className="text-xl font-semibold text-zinc-900">Why these pages matter</h2>
            <p className="mt-2 text-zinc-600">
              Fiable operates in a high-intent local service category, so each core service needs its
              own crawlable landing page with problem-solution-fit content.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-zinc-900">Industries served</h2>
            <p className="mt-2 text-zinc-600">
              Residential, commercial, industrial, factory, and infrastructure projects across Lucknow,
              Uttar Pradesh, Delhi NCR, Maharashtra, and wider India.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-zinc-900">What to do next</h2>
            <p className="mt-2 text-zinc-600">
              Open a service page, review the scope and benefits, then request a project quote with your
              site conditions and expected timeline.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {services.map((service, index) => (
              <article key={service._id} className="group">
                <div className="flex gap-8">
                  <div className="flex-shrink-0">
                    <div className="text-6xl font-light text-gray-200 group-hover:text-gray-300 transition-colors">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  <div className="flex-1 space-y-6">
                    <div>
                      <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                        <Link href={`/services/${service.slug}`} className="hover:text-[#4376BB] transition-colors">
                          {service.title}
                        </Link>
                      </h2>
                      <p className="text-gray-600 leading-relaxed">{service.summary}</p>
                    </div>

                    <Link href={`/services/${service.slug}`} className="block aspect-video rounded-lg overflow-hidden relative">
                      <Image
                        src={service.image?.src}
                        alt={service.image?.alt || service.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </Link>

                    <ul className="space-y-2">
                      {service.points?.map((point, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                          <span className="text-gray-700">{point}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-[#4376BB] font-semibold hover:text-[#2c4a7d]"
                    >
                      View service details
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <StepsSection />
      <ContactCta />
    </main>
  );
}

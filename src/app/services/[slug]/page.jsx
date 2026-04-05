import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Phone } from "lucide-react";
import { connectDB } from "@/lib/mongodb";
import Service from "@/models/Service";
import {
  COMPANY_NAME,
  CONTACT_PHONE,
  PRIMARY_LOCATION,
  SERVICE_AREAS,
  SITE_URL,
} from "@/lib/site";

export const dynamic = "force-dynamic";
export const revalidate = 0;

async function getService(slug) {
  await connectDB();
  return Service.findOne({ slug, active: true }).lean();
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = await getService(slug);

  if (!service) {
    return {
      title: "Service Not Found",
      robots: { index: false, follow: false },
    };
  }

  const title = `${service.title} Services in India | Fiable Building Solutions`;
  const description =
    service.summary ||
    `${service.title} by Fiable Building Solutions for residential, commercial, and industrial sites across India.`;
  const canonical = `${SITE_URL}/services/${service.slug}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      locale: "en_IN",
      images: service.image?.src ? [{ url: service.image.src, alt: service.image.alt || service.title }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: service.image?.src ? [service.image.src] : [],
    },
  };
}

function buildServiceSchema(service) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      serviceType: service.title,
      description: service.summary,
      provider: {
        "@type": "ProfessionalService",
        name: COMPANY_NAME,
        areaServed: SERVICE_AREAS,
      },
      areaServed: SERVICE_AREAS,
      url: `${SITE_URL}/services/${service.slug}`,
      image: service.image?.src,
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
        {
          "@type": "ListItem",
          position: 3,
          name: service.title,
          item: `${SITE_URL}/services/${service.slug}`,
        },
      ],
    },
  ];
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = await getService(slug);

  if (!service) return notFound();

  const schema = buildServiceSchema(service);

  return (
    <main className="bg-[#FBF9F7] min-h-screen pt-28 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="max-w-7xl mx-auto px-6">
        <nav className="text-sm text-zinc-500 mb-8">
          <Link href="/" className="hover:text-[#4376BB]">Home</Link>
          {" / "}
          <Link href="/services" className="hover:text-[#4376BB]">Services</Link>
          {" / "}
          <span className="text-zinc-800">{service.title}</span>
        </nav>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-[#4376BB] font-semibold">
              Specialized Engineering Service
            </p>
            <h1 className="mt-4 text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-900">
              {service.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-600 max-w-3xl">
              {service.summary || `${service.title} executed by ${COMPANY_NAME} for durable site performance.`}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`tel:${CONTACT_PHONE.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-2 rounded-xl bg-[#4376BB] px-6 py-3 font-semibold text-white hover:bg-[#2c4a7d]"
              >
                <Phone className="h-4 w-4" />
                Call {CONTACT_PHONE}
              </a>
              <Link
                href="/contact-us#project-form"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 px-6 py-3 font-semibold text-zinc-900 hover:border-[#4376BB] hover:text-[#4376BB]"
              >
                Request Project Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {service.points?.map((point, index) => (
                <div key={index} className="rounded-2xl border border-zinc-200 bg-white p-5">
                  <div className="text-xs font-semibold tracking-[0.18em] text-zinc-400">
                    BENEFIT {index + 1}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-zinc-700">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl bg-white border border-zinc-200">
            <div className="relative aspect-[4/3]">
              <Image
                src={service.image?.src}
                alt={service.image?.alt || service.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-lg font-semibold text-zinc-900">Service coverage</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                We support projects in {PRIMARY_LOCATION.city}, across {PRIMARY_LOCATION.region},
                Delhi NCR, Maharashtra, and selected industrial sites across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mt-20 grid gap-8 lg:grid-cols-3">
        <article className="lg:col-span-2 rounded-3xl bg-white border border-zinc-200 p-8">
          <h2 className="text-2xl font-semibold text-zinc-900">What this service covers</h2>
          <p className="mt-4 text-zinc-600 leading-8">
            {service.title} projects usually begin with a condition assessment, followed by material selection,
            execution planning, and site-specific application. Fiable focuses on durable performance,
            clear supervision, and solutions that fit residential, commercial, and industrial site constraints.
          </p>
          <p className="mt-4 text-zinc-600 leading-8">
            This page exists to support buyers comparing specialist contractors. It explains the service scope,
            highlights the key outcomes, and gives search engines a dedicated URL for this specific offer instead
            of bundling every engineering capability into one generic services page.
          </p>

          <h2 className="mt-10 text-2xl font-semibold text-zinc-900">Typical fit for this solution</h2>
          <ul className="mt-4 space-y-3 text-zinc-600">
            <li>Residential and commercial structures needing a durable, specialist intervention.</li>
            <li>Factories, mills, infrastructure, or industrial assets where longevity and reliability matter.</li>
            <li>Sites that need structured execution, material compatibility, and controlled workmanship.</li>
          </ul>

          <h2 className="mt-10 text-2xl font-semibold text-zinc-900">Why clients choose Fiable</h2>
          <p className="mt-4 text-zinc-600 leading-8">
            Fiable combines trained supervision, modern materials, and execution-focused project delivery.
            The team works with waterproofing, flooring, rehabilitation, grouting, and civil repair scopes,
            which allows better coordination across adjacent site requirements instead of isolated contractor work.
          </p>
        </article>

        <aside className="rounded-3xl bg-[#F4F1EC] border border-zinc-200 p-8 h-fit">
          <h2 className="text-xl font-semibold text-zinc-900">Related actions</h2>
          <div className="mt-5 space-y-4">
            <Link href="/projects" className="block rounded-2xl bg-white border border-zinc-200 p-4 hover:border-[#4376BB]">
              <div className="font-semibold text-zinc-900">View completed projects</div>
              <p className="mt-1 text-sm text-zinc-600">Review case studies and project execution examples.</p>
            </Link>
            <Link href="/blogs" className="block rounded-2xl bg-white border border-zinc-200 p-4 hover:border-[#4376BB]">
              <div className="font-semibold text-zinc-900">Read insights</div>
              <p className="mt-1 text-sm text-zinc-600">Understand technical concepts and maintenance considerations.</p>
            </Link>
            <Link href="/contact-us#project-form" className="block rounded-2xl bg-[#4376BB] p-4 text-white hover:bg-[#2c4a7d]">
              <div className="font-semibold">Discuss your site requirement</div>
              <p className="mt-1 text-sm text-white/85">Share your scope, budget, and timeline with the Fiable team.</p>
            </Link>
          </div>
        </aside>
      </section>
    </main>
  );
}

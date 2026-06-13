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
import { CONTACT_PHONE } from "@/lib/site";

const defaultRelated = [
  { title: "Waterproofing Services", href: "/services/waterproofing-services" },
  { title: "Structural Rehabilitation", href: "/services/structural-rehabilitation" },
  { title: "Industrial Flooring", href: "/services/industrial-flooring-systems" },
];

export default function ServiceLandingPage({ service }) {
  const related = service.related?.length ? service.related : defaultRelated;

  return (
    <main className="min-h-screen bg-[#f4f1ec] text-[#141414] antialiased">
      <FloatingCTA />

      {service.schema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(service.schema) }}
        />
      ) : null}

      <section className="px-5 pb-14 pt-28 md:pb-20 md:pt-36">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.78fr] lg:items-end">
          <div>
            <nav className="mb-8 flex flex-wrap items-center gap-2 text-xs font-medium text-zinc-500">
              <Link href="/" className="hover:text-[#234D7E]">
                Home
              </Link>
              <span>/</span>
              <Link href="/services" className="hover:text-[#234D7E]">
                Services
              </Link>
              <span>/</span>
              <span className="text-zinc-900">{service.title}</span>
            </nav>

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#234D7E]">
              {service.eyebrow}
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-tight text-zinc-950 md:text-6xl">
              {service.heroTitle}
            </h1>

            <div className="mt-5 flex flex-wrap gap-2">
              {service.badges.map((badge) => (
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
              {service.intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact-us#project-form"
                className="inline-flex items-center justify-center rounded-full bg-[#234D7E] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1b3b62]"
              >
                {service.primaryCta || "Request a Consultation"}
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
              src={service.image}
              alt={service.imageAlt || service.title}
              className="h-[360px] w-full object-cover md:h-[480px]"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-white px-5 py-14 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
            {service.approachTitle}
          </h2>
          <p className="mt-5 text-base leading-8 text-zinc-650">
            {service.approach}
          </p>
        </div>
      </section>

      <section className="bg-[#fbf9f7] px-5 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#234D7E]">
              {service.scopeEyebrow || "Service scope"}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
              {service.scopeTitle}
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {service.cards.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-[1.25rem] border border-zinc-200 bg-white"
              >
                <img
                  src={item.image || service.image}
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
                {service.areaTitle}
              </h2>
              <p className="mt-5 text-base leading-8 text-zinc-650">
                {service.areaIntro}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {service.areas.map((area) => (
                <div
                  key={area}
                  className="rounded-2xl border border-zinc-200 bg-[#fbf9f7] p-5"
                >
                  <h3 className="text-sm font-semibold text-zinc-950">
                    {service.areaPrefix} {area}
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-zinc-550">
                    {service.areaDescription}
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
              src={service.image}
              alt={service.philosophyTitle}
              className="h-[420px] w-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#234D7E]">
              {service.philosophyEyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
              {service.philosophyTitle}
            </h2>
            <p className="mt-5 text-base leading-8 text-zinc-650">
              {service.philosophy}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {service.stats.map(([value, label]) => (
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
              {service.processTitle || "Method-led execution process"}
            </h2>
          </div>

          <div className="space-y-4">
            {service.process.map((step, index) => (
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
            {service.faqs.map((faq) => (
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
            {related.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-zinc-200 bg-white px-4 py-2 transition hover:border-[#234D7E]"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactCta />
    </main>
  );
}

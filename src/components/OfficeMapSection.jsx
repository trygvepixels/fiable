"use client";

import { MapPin, ArrowUpRight, Phone } from "lucide-react";

const MAPS_APP_URL = "https://maps.app.goo.gl/phe1TNGoRWHR2pJZ6";
const EMBED_MAP_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.0867535312573!2d80.96875347522509!3d26.93246407663541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39995786732beb2b%3A0x1c48f9178eff853d!2sFiable%20Building%20Solutions%20Private%20Limited!5e0!3m2!1sen!2sin!4v1777279414042!5m2!1sen!2sin";
const OFFICE_ADDRESS =
  "728, Phase 2, Khasra No. 21, Eden Enclave, Kursi Road, Gudumba BKT, Lucknow 226026, Uttar Pradesh, India";

export default function OfficeMapSection({
  title = "Visit Our Lucknow Office",
  body = "Meet the Fiable team at our Lucknow office to discuss waterproofing, structural rehabilitation, industrial flooring, and repair requirements in person.",
  className = "",
}) {
  return (
    <section className={`bgWarm md:py-20 ${className}`}>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
        <div className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-[0_12px_36px_rgba(17,17,17,0.06)]">
          <p className="eyebrow mb-4">Office Location</p>
          <h2 className="text-3xl font-semibold tracking-tight text-[#111111] md:text-4xl">
            {title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#5f6570]">{body}</p>

          <div className="mt-8 rounded-[1.5rem] bg-[#F4F1EC] p-5">
            <div className="flex items-start gap-3">
              <div className="mt-1 rounded-full bg-[#234D7E] p-2 text-white">
                <MapPin className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5f6570]">
                  Address
                </p>
                <p className="mt-2 text-base leading-relaxed text-[#111111]">
                  {OFFICE_ADDRESS}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={MAPS_APP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-[#234D7E] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1b3b62]"
            >
              Open in Google Maps
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="tel:+918069648411"
              className="inline-flex items-center rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-[#111111] transition-colors hover:bg-[#fbf8f3]"
            >
              <Phone className="mr-2 h-4 w-4 text-[#234D7E]" />
              +91 8069648411
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white p-3 shadow-[0_12px_36px_rgba(17,17,17,0.06)]">
          <div className="overflow-hidden rounded-[1.5rem]">
            <iframe
              title="Fiable office map"
              src={EMBED_MAP_URL}
              className="h-[420px] w-full border-0 md:h-[520px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";

const clientLogoRows = [
  {
    title: "Construction Companies / Contractors",
    folder: "logos",
    files: [
      "image.png",
      "image copy.png",
      "image copy 2.png",
      "image copy 3.png",
      "image copy 4.png",
      "image copy 5.png",
      "image copy 6.png",
      "image copy 7.png",
      "image copy 8.png",
      "image copy 9.png",
      "image copy 10.png",
      "image copy 11.png",
      "image copy 12.png",
    ],
  },
  {
    title: "Government Departments / Projects",
    folder: "logos2",
    files: [
      "image.png",
      "image copy.png",
      "image copy 2.png",
      "image copy 3.png",
      "image copy 4.png",
      "image copy 5.png",
      "image copy 6.png",
      "image copy 7.png",
      "image copy 8.png",
      "image copy 9.png",
    ],
  },
  {
    title: "Commercial / Other Projects",
    folder: "logo3",
    files: [
      "image.png",
      "image copy.png",
      "image copy 2.png",
      "image copy 3.png",
      "image copy 4.png",
      "image copy 5.png",
      "image copy 6.png",
      "image copy 7.png",
      "image copy 8.png",
    ],
  },
  {
    title: "Industries",
    folder: "logo4",
    files: [
      "image.png",
      "image copy.png",
      "image copy 2.png",
      "image copy 3.png",
      "image copy 4.png",
      "image copy 5.png",
      "image copy 6.png",
      "image copy 7.png",
    ],
  },
].map((row) => ({
  ...row,
  logos: row.files.map((file) => `/clients/${row.folder}/${file}`),
}));

export default function ClientsMarquee() {
  return (
    <section className="bg-[#F4F1EC] py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-7 text-center md:mb-9">
          <h2 className="text-2xl font-semibold tracking-tight text-[#111111] md:text-3xl">
            Our Prestigious Clients
          </h2>
        </div>

        <div className="relative space-y-6 overflow-hidden">
          <div className="pointer-events-none h-full absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#F4F1EC] to-transparent md:w-24" />
          <div className="pointer-events-none h-full absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#F4F1EC] to-transparent md:w-24" />

          {clientLogoRows.map((row, rowIndex) => (
            <div key={row.folder}>
              <h3 className="mb-3 text-center text-sm font-bold uppercase tracking-[0.16em] text-[#234D7E] md:text-base">
                {row.title}
              </h3>

              <div
                className="client-marquee-track"
                style={{
                  "--duration": `${34 + rowIndex * 5}s`,
                }}
              >
                {[...row.logos, ...row.logos].map((src, logoIndex) => (
                  <div
                    key={`${row.folder}-${logoIndex}`}
                    className="mx-3 inline-flex h-16 w-32 shrink-0 items-center justify-center rounded-lg border border-black/5 bg-white px-4 py-3 shadow-sm md:mx-4 md:h-20 md:w-44"
                  >
                    <Image
                      src={src}
                      alt={`${row.title} client logo ${logoIndex + 1}`}
                      width={176}
                      height={80}
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes client-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .client-marquee-track {
          display: flex;
          width: max-content;
          animation: client-marquee var(--duration) linear infinite;
          will-change: transform;
        }

        .client-marquee-track:hover {
          animation-play-state: paused;
        }

        @media (max-width: 640px) {
          .client-marquee-track {
            animation-duration: 24s;
          }
        }
      `}</style>
    </section>
  );
}

import {
  COMPANY_NAME,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CORE_SERVICES,
  LINKEDIN_URL,
  PRIMARY_LOCATION,
  SERVICE_AREAS,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

export default function JsonLd() {
  const jsonLd = [
    // ── 1. Organization ──
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${SITE_URL}#organization`,
      name: COMPANY_NAME,
      alternateName: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
        width: 400,
        height: 100,
      },
      email: CONTACT_EMAIL,
      telephone: CONTACT_PHONE,
      sameAs: [LINKEDIN_URL],
      areaServed: SERVICE_AREAS,
      description:
        "Fiable Building Solutions delivers waterproofing, structural rehabilitation, flooring, grouting, and customized civil works for residential, commercial, and industrial clients across India.",
      knowsAbout: CORE_SERVICES,
    },

    // ── 2. LocalBusiness (replaces ProfessionalService — Google-supported type) ──
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}#localbusiness`,
      name: COMPANY_NAME,
      url: SITE_URL,
      image: `${SITE_URL}/og-image.jpg`,
      telephone: CONTACT_PHONE,
      email: CONTACT_EMAIL,
      priceRange: "₹₹",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, Bank Transfer, Cheque",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
          opens: "09:00",
          closes: "19:00",
        },
      ],
      slogan: "Engineered for Durability. Built on Trust.",
      areaServed: SERVICE_AREAS.map((area) => ({ "@type": "City", name: area })),
      address: {
        "@type": "PostalAddress",
        streetAddress: "728, Phase 2, Khasra No. 21, Eden Enclave, Kursi Road, Gudumba BKT",
        addressLocality: PRIMARY_LOCATION.city,
        addressRegion: PRIMARY_LOCATION.region,
        postalCode: "226026",
        addressCountry: PRIMARY_LOCATION.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "26.8170",
        longitude: "81.0550",
      },
      hasMap: "https://maps.google.com/?q=Eden+Enclave+Kursi+Road+Lucknow",
      parentOrganization: {
        "@id": `${SITE_URL}#organization`,
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Waterproofing & Construction Services",
        itemListElement: CORE_SERVICES.map((service) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: service },
        })),
      },
    },

    // ── 3. WebSite ──
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: { "@id": `${SITE_URL}#organization` },
      inLanguage: "en-IN",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/blogs?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
  ];

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

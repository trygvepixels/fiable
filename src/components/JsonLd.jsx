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
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${SITE_URL}#organization`,
      name: COMPANY_NAME,
      alternateName: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      email: CONTACT_EMAIL,
      telephone: CONTACT_PHONE,
      sameAs: [LINKEDIN_URL],
      areaServed: SERVICE_AREAS,
      description:
        "Fiable Building Solutions delivers waterproofing, structural rehabilitation, flooring, grouting, and customized civil works for residential, commercial, and industrial clients across India.",
      knowsAbout: CORE_SERVICES,
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}#localbusiness`,
      name: COMPANY_NAME,
      url: SITE_URL,
      image: `${SITE_URL}/og-image.jpg`,
      telephone: CONTACT_PHONE,
      email: CONTACT_EMAIL,
      priceRange: "₹₹",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, Bank Transfer, Cheque",
      openingHours: "Mo-Sa 09:00-19:00",
      slogan: "Engineered for Durability. Built on Trust.",
      areaServed: SERVICE_AREAS,
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
      serviceType: CORE_SERVICES,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: {
        "@id": `${SITE_URL}#organization`,
      },
      inLanguage: "en-IN",
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

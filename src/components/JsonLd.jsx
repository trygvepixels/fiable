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
      image: `${SITE_URL}/logo2.png`,
      telephone: CONTACT_PHONE,
      email: CONTACT_EMAIL,
      priceRange: "$$",
      slogan: "Trust and Honesty",
      areaServed: SERVICE_AREAS,
      address: {
        "@type": "PostalAddress",
        addressLocality: PRIMARY_LOCATION.city,
        addressRegion: PRIMARY_LOCATION.region,
        addressCountry: PRIMARY_LOCATION.country,
      },
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

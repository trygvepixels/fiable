const BASE_URL = "https://fiablebuilding.com";
const COMPANY_NAME = "Fiable Building Solutions Pvt. Ltd.";
const CONTACT_PHONE = "+91 8069648411";
const CONTACT_EMAIL = "enquiry@fiableprojects.com";
const SERVICE_AREAS = [
  "Lucknow",
  "Uttar Pradesh",
  "Delhi NCR",
  "Maharashtra",
  "India",
];

export default function JsonLd() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${BASE_URL}#organization`,
      name: COMPANY_NAME,
      alternateName: "Fiable Building Solutions",
      url: BASE_URL,
      logo: `${BASE_URL}/logo.png`,
      email: CONTACT_EMAIL,
      telephone: CONTACT_PHONE,
      sameAs: [
        "https://www.linkedin.com/company/fiable-building-solutions-llp",
      ],
      areaServed: SERVICE_AREAS,
      description:
        "Fiable Building Solutions delivers waterproofing, structural rehabilitation, flooring, grouting, and customized civil works for residential, commercial, and industrial clients across India.",
      knowsAbout: [
        "Waterproofing systems",
        "Structural rehabilitation",
        "Industrial flooring",
        "Injection grouting",
        "Concrete cutting",
        "Civil construction",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": `${BASE_URL}#localbusiness`,
      name: COMPANY_NAME,
      url: BASE_URL,
      image: `${BASE_URL}/logo2.png`,
      telephone: CONTACT_PHONE,
      email: CONTACT_EMAIL,
      priceRange: "$$",
      slogan: "Trust and Honesty",
      areaServed: SERVICE_AREAS,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lucknow",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
      parentOrganization: {
        "@id": `${BASE_URL}#organization`,
      },
      serviceType: [
        "Waterproofing",
        "Structural rehabilitation",
        "Industrial flooring",
        "Grouting",
        "Concrete cutting",
        "Civil construction",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${BASE_URL}#website`,
      url: BASE_URL,
      name: "Fiable Building Solutions",
      publisher: {
        "@id": `${BASE_URL}#organization`,
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

import ContactUsClient from "@/components/ContactUsClient";
import {
  COMPANY_NAME,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  PRIMARY_LOCATION,
  SERVICE_AREAS,
  SITE_URL,
} from "@/lib/site";

export const metadata = {
  title: "Contact Fiable Building Solutions | Waterproofing & Structural Repair Lucknow",
  description: "Get a free project quote from India's trusted construction specialists. Contact Fiable Building Solutions for professional waterproofing, structural rehabilitation, and industrial flooring in Lucknow, Delhi NCR, and nationwide.",
  alternates: {
    canonical: `${SITE_URL}/contact-us`,
  },
  openGraph: {
    title: "Contact Fiable Building Solutions | Waterproofing & Structural Repair Lucknow",
    description: "Get a free project quote from India's trusted construction specialists. Contact Fiable Building Solutions for professional waterproofing, structural rehabilitation, and industrial flooring in Lucknow, Delhi NCR, and nationwide.",
    url: `${SITE_URL}/contact-us`,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/logo2.png`,
        width: 800,
        height: 600,
        alt: "Fiable Building Solutions Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Fiable Building Solutions | Waterproofing & Structural Repair Lucknow",
    description: "Get a free project quote from India's trusted construction specialists. Contact Fiable Building Solutions for professional waterproofing, structural rehabilitation, and industrial flooring in Lucknow, Delhi NCR, and nationwide.",
    images: [`${SITE_URL}/logo2.png`],
  },
};

function buildContactSchema() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact Fiable Building Solutions",
      url: `${SITE_URL}/contact-us`,
      mainEntity: {
        "@type": "ProfessionalService",
        name: COMPANY_NAME,
        telephone: CONTACT_PHONE,
        email: CONTACT_EMAIL,
        areaServed: SERVICE_AREAS,
        address: {
          "@type": "PostalAddress",
          streetAddress: "728, Phase 2, Khasra No. 21, Eden Enclave, Kursi Road, Gudumba BKT",
          addressLocality: PRIMARY_LOCATION.city,
          addressRegion: "Uttar Pradesh",
          postalCode: "226026",
          addressCountry: PRIMARY_LOCATION.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 26.9324,
          longitude: 80.9687,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            opens: "09:00",
            closes: "19:00"
          }
        ],
        sameAs: [
          "https://www.facebook.com/fiableprojects",
          "https://www.instagram.com/fiableprojects",
          "https://www.linkedin.com/company/fiableprojects"
        ]
      },
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
          name: "Contact",
          item: `${SITE_URL}/contact-us`,
        },
      ],
    },
  ];
}

export default function ContactPage() {
  const schema = buildContactSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ContactUsClient />
    </>
  );
}

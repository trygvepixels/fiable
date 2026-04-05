import ContactUsClient from "@/components/ContactUsClient";
import {
  COMPANY_NAME,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  PRIMARY_LOCATION,
  SERVICE_AREAS,
  SITE_URL,
} from "@/lib/site";

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
          addressLocality: PRIMARY_LOCATION.city,
          addressRegion: PRIMARY_LOCATION.region,
          addressCountry: PRIMARY_LOCATION.country,
        },
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

import React from "react";

export default function JsonLd() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Fiable Building Solutions",
    "alternateName": "Fiable Projects",
    "url": "https://fiablebuilding.com",
    "logo": "https://fiablebuilding.com/logo.png",
    "sameAs": [
      "https://www.linkedin.com/company/fiable-building-solutions-llp",
      // ... add other social profiles if any
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office 104, Blue Diamond Building, Opp. McDonald's",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411001",
      "addressCountry": "IN"
    },
    "description": "Fiable Building Solutions delivers industrial waterproofing, structural rehabilitation, and durable flooring solutions since 2012 across India.",
    "telephone": "+918048600000", // replace with actual phone from Phone section or contact
    "areaServed": "India",
    "knowsAbout": [
      "Waterproofing",
      "Structural Rehabilitation",
      "Industrial Flooring",
      "Grouting",
      "Construction Engineering"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
    />
  );
}

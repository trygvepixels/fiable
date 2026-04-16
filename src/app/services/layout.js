import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Services — Waterproofing, Structural Rehab, Flooring & More | Fiable",
  description: "Fiable offers specialized services: waterproofing, structural refurbishment, industrial flooring, grouting, concrete cutting & demolition, anchor/rebar and civil construction — engineered for durability and performance.",
  keywords: [
    "waterproofing services",
    "structural refurbishment",
    "industrial flooring",
    "industrial grouting",
    "concrete cutting",
    "anchor rebar",
    "civil construction"
  ],
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    title: "Fiable Services — Waterproofing, Flooring, Structural Rehabilitation",
    description: "A full-suite of engineering-driven construction services including waterproofing, grouting and industrial flooring to extend asset life and performance.",
    url: `${SITE_URL}/services`,
    type: "website",
    locale: "en-IN"
  },
  twitter: {
    card: "summary_large_image",
    title: "Fiable Services",
    description: "Engineering-driven waterproofing, flooring, grouting and structural rehabilitation services across India."
  },
  robots: { index: true, follow: true }
};





export default function RootLayout({ children }) {
  return children;
}

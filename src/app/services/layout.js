import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Waterproofing, Flooring & Structural Repair Services | Fiable",
  description: "Professional waterproofing, structural rehabilitation, industrial flooring & grouting across Lucknow, Delhi NCR & India. Free site inspection available.",
  keywords: [
    "waterproofing services Lucknow",
    "structural rehabilitation India",
    "industrial flooring Lucknow",
    "industrial grouting services India",
    "concrete cutting demolition India",
    "civil construction contractors India"
  ],
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    title: "Construction & Repair Services in Lucknow & India | Fiable",
    description: "Waterproofing, grouting, industrial flooring & structural rehabilitation. Serving Lucknow, Delhi NCR & industrial sites across India.",
    url: `${SITE_URL}/services`,
    type: "website",
    locale: "en_IN"
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Services | Fiable Building Solutions",
    description: "Waterproofing, flooring, grouting & structural rehabilitation across Lucknow & India."
  },
  robots: { index: true, follow: true }
};





export default function RootLayout({ children }) {
  return children;
}

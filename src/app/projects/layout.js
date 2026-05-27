import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Projects & Case Studies | Fiable Building Solutions India",
  description: "Browse Fiable's completed waterproofing, structural rehabilitation & flooring projects. Real case studies with before-after outcomes across Lucknow, Delhi NCR & India.",
  keywords: [
    "waterproofing projects Lucknow",
    "structural rehabilitation case studies India",
    "industrial flooring portfolio",
    "construction project examples India",
    "Fiable completed projects"
  ],
  alternates: { canonical: `${SITE_URL}/projects` },
  openGraph: {
    title: "Construction Project Portfolio | Fiable Building Solutions",
    description: "Explore Fiable's completed waterproofing, flooring & structural repair projects across Lucknow, Delhi NCR & India.",
    url: `${SITE_URL}/projects`,
    type: "website",
    locale: "en_IN"
  },
  twitter: {
    card: "summary_large_image",
    title: "Fiable Building Solutions — Project Portfolio",
    description: "Case studies of waterproofing, rehabilitation, flooring & industrial repair works across India."
  },
  robots: { index: true, follow: true }
};




export default function RootLayout({ children }) {
  return children;
}

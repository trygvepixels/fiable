import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Insights — Technical Articles & Industry Updates | Fiable",
  description: "Insights from Fiable: technical articles, best practices, product updates and industry guidance on waterproofing, structural health, flooring systems and maintenance.",
  keywords: [
    "construction insights",
    "waterproofing blog",
    "structural rehabilitation insights",
    "industrial flooring articles",
    "construction best practices"
  ],
  alternates: { canonical: `${SITE_URL}/blogs` },
  openGraph: {
    title: "Fiable Insights — Articles on Construction & Structural Health",
    description: "Technical guides, case notes and industry news focused on extending asset life and improving construction outcomes.",
    url: `${SITE_URL}/blogs`,
    type: "website",
    locale: "en-IN"
  },
  twitter: {
    card: "summary",
    title: "Fiable Insights",
    description: "Technical content and updates on waterproofing, rehabilitation and construction best practices."
  },
  robots: { index: true, follow: true }
};



export default function RootLayout({ children }) {
  return children;
}

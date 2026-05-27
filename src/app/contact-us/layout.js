import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Contact Fiable Building Solutions | Lucknow, India",
  description: "Get in touch with Fiable for waterproofing, structural repair & industrial flooring in Lucknow & India. Call, email or fill our project form for a free site inspection.",
  keywords: [
    "contact Fiable Building Solutions",
    "waterproofing company contact Lucknow",
    "construction contractor contact India",
    "site inspection request India",
    "waterproofing quote Lucknow"
  ],
  alternates: { canonical: `${SITE_URL}/contact-us` },
  openGraph: {
    title: "Contact Fiable Building Solutions | Get a Free Site Inspection",
    description: "Reach Fiable for waterproofing, rehabilitation, flooring & construction. Call, email or submit a project request. Serving Lucknow & across India.",
    url: `${SITE_URL}/contact-us`,
    type: "website",
    locale: "en_IN"
  },
  twitter: {
    card: "summary",
    title: "Contact Fiable Building Solutions",
    description: "Get in touch for waterproofing, structural repair & flooring services in Lucknow & India. Free project consultation."
  },
  robots: { index: true, follow: true }
};



export default function RootLayout({ children }) {
  return children;
}

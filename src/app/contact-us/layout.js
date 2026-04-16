import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Contact Fiable Building Solutions — Get in Touch Today",
  description: "Reach out to Fiable Building Solutions for waterproofing, structural rehabilitation, flooring and industrial construction services. Connect via phone, email or our office to discuss your project requirements.",
  keywords: [
    "contact fiable",
    "fiable building solutions contact",
    "construction contact India",
    "waterproofing company contact",
    "structural repair contractor contact"
  ],
  alternates: { canonical: `${SITE_URL}/contact-us` },
  openGraph: {
    title: "Contact Fiable Building Solutions",
    description: "Connect with Fiable for waterproofing, rehabilitation, flooring and industrial construction solutions. Phone, email and office support available.",
    url: `${SITE_URL}/contact-us`,
    type: "website",
    locale: "en-IN"
    // images: ["https://fiablebuilding.com/path-to-og-contact.jpg"]
  },
  twitter: {
    card: "summary",
    title: "Contact Fiable Building Solutions",
    description: "Discuss your project with Fiable’s experts. Call, email or visit our office to get started."
  },
  robots: { index: true, follow: true }
};



export default function RootLayout({ children }) {
  return children;
}

import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "About Fiable Building Solutions | Lucknow, India",
  description: "Fiable Building Solutions: engineer-led waterproofing, structural rehabilitation & industrial flooring. Serving Lucknow, UP & India. Meet our team & learn our approach.",
  keywords: [
    "about Fiable Building Solutions",
    "waterproofing company Lucknow",
    "construction company India",
    "engineering services UP",
    "civil engineering firm India",
    "construction partners Lucknow"
  ],
  alternates: { canonical: `${SITE_URL}/about-us` },
  openGraph: {
    title: "About Fiable Building Solutions | Waterproofing & Construction Experts",
    description: "Engineering-first waterproofing, rehabilitation & industrial flooring company based in Lucknow. Trained team, modern equipment, durable results.",
    url: `${SITE_URL}/about-us`,
    type: "website",
    locale: "en_IN"
  },
  twitter: {
    card: "summary",
    title: "About Fiable Building Solutions",
    description: "Engineering-first construction services — waterproofing, structural rehabilitation & flooring. Based in Lucknow, serving pan-India."
  },
  robots: { index: true, follow: true }
};


export default function RootLayout({ children }) {
  return children;
}

export const metadata = {
  title: "Thank You — Fiable Building Solutions",
  description: "We’ve received your message. The Fiable Building Solutions team will get back to you shortly regarding your enquiry or service request.",
  keywords: [
    "thank you fiable",
    "enquiry received",
    "contact confirmation",
    "fiable message submitted"
  ],
  alternates: { canonical: "https://fiablebuilding.com/thankyou" },
  openGraph: {
    title: "Thank You — Fiable Building Solutions",
    description: "Your enquiry has been received. Our team will respond soon.",
    url: "https://fiablebuilding.com/thankyou",
    type: "website",
    locale: "en-US"
    // images: ["https://fiablebuilding.com/path-to-og-thankyou.jpg"]
  },
  twitter: {
    card: "summary",
    title: "Thank You — Fiable Building Solutions",
    description: "We’ve received your enquiry. Our team will respond shortly."
  },
  robots: {
    index: false,   // do not index this page
    follow: false   // don’t pass link juice
  }
};





export default function RootLayout({ children }) {
  return children;
}

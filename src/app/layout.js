import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata = {
  title: "StrucAxis | General Contracting, Interiors & Fit-Out | Trygve Studio Pvt. Ltd.",
  description:
    "StrucAxis, a brand of Trygve Studio Pvt. Ltd., specializes in general contracting, interiors, fit-out, and civil construction. With 12+ years of expertise, in-house machinery, and a multidisciplinary team, we deliver turnkey projects with speed, quality, and reliability.",
  keywords: [
    "StrucAxis",
    "General Contracting",
    "Interior Fit-Out",
    "Civil Construction",
    "Turnkey Projects",
    "Construction Contractors",
    "Lucknow Construction",
  ],
  authors: [{ name: "StrucAxis", url: "https://strucaxis.com" }],
  creator: "StrucAxis",
  publisher: "Trygve Studio Pvt. Ltd.",
  metadataBase: new URL("https://strucaxis.com"),
  openGraph: {
    title: "StrucAxis | General Contracting, Interiors & Fit-Out",
    description:
      "Your trusted partner in construction, interiors, and turnkey contracting with 12+ years of expertise and in-house facilities.",
    url: "https://strucaxis.com",
    siteName: "StrucAxis",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "StrucAxis Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StrucAxis | General Contracting, Interiors & Fit-Out",
    description:
      "Trusted partner for architects, developers & brand owners — StrucAxis delivers construction, interiors & turnkey contracting with speed and quality.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
       >
        <Script id="ld-json" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "StrucAxis",
            url: "https://strucaxis.com",
            logo: "https://strucaxis.com/logo.png",
            description:
              "StrucAxis, a brand of Trygve Studio Pvt. Ltd., offers general contracting, interiors, fit-out, and civil construction with 12+ years of expertise and in-house facilities.",
            email: "info@struc-axis.com",
            telephone: "+91 95544 40400",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "Plot No. 728, Khasra No. 21 Eden Enclave, Phase 2, Kursi Road Gudamba, BKT",
              addressLocality: "Lucknow",
              addressRegion: "Uttar Pradesh",
              postalCode: "226026",
              addressCountry: "India",
            },
            sameAs: [
              "https://www.strucaxis.com",
              "https://www.strucaxis.in",
              "https://www.struc-axis.com",
              "https://www.struc-axis.in",
              "https://www.struc-axis.online",
            ],
          })}
        </Script>
        <Header/>

        {children}
                <Footer/>

      </body>
    </html>
  );
}

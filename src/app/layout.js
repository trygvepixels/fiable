import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
       >
        <Script id="ld-json" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "fiable",
            url: "https://fiable.com",
            logo: "https://fiable.com/logo.png",
            description:
              "fiable, a brand of Trygve Studio Pvt. Ltd., offers general contracting, interiors, fit-out, and civil construction with 12+ years of expertise and in-house facilities.",
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
              "https://www.fiable.com",
              "https://www.fiable.in",
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

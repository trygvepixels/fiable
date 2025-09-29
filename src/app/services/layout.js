import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
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
  alternates: { canonical: "https://fiablebuilding.com/services" },
  openGraph: {
    title: "Fiable Services — Waterproofing, Flooring, Structural Rehabilitation",
    description: "A full-suite of engineering-driven construction services including waterproofing, grouting and industrial flooring to extend asset life and performance.",
    url: "https://fiablebuilding.com/services",
    type: "website",
    locale: "en-US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Fiable Services",
    description: "Engineering-driven waterproofing, flooring, grouting and structural rehabilitation services across India."
  },
  robots: { index: true, follow: true }
};





export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
       >
       
           

        {children}
 
      </body>
    </html>
  );
}

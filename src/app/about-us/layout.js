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
  title: "About Fiable Building Solutions — One-Stop Construction & Repair",
  description: "Learn about Fiable Building Solutions Pvt. Ltd.: our mission, engineering-first approach, partnerships, trained workforce and quality-first processes for long-lasting construction outcomes.",
  keywords: [
    "about fiable",
    "Fiable Building Solutions about",
    "construction company India",
    "engineering excellence",
    "waterproofing company",
    "construction partners"
  ],
  alternates: { canonical: "https://fiablebuilding.com/about-us" },
  openGraph: {
    title: "About Fiable Building Solutions",
    description: "Fiable combines engineering, trained personnel and modern equipment to deliver dependable waterproofing, rehabilitation and industrial construction solutions.",
    url: "https://fiablebuilding.com/about-us",
    type: "website",
    locale: "en-IN"
  },
  twitter: {
    card: "summary",
    title: "About Fiable Building Solutions",
    description: "Engineering-first construction services with a focus on durability, safety and long-term performance."
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

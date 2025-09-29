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
  title: "Insights — Technical Articles & Industry Updates | Fiable",
  description: "Insights from Fiable: technical articles, best practices, product updates and industry guidance on waterproofing, structural health, flooring systems and maintenance.",
  keywords: [
    "construction insights",
    "waterproofing blog",
    "structural rehabilitation insights",
    "industrial flooring articles",
    "construction best practices"
  ],
  alternates: { canonical: "https://fiablebuilding.com/insights" },
  openGraph: {
    title: "Fiable Insights — Articles on Construction & Structural Health",
    description: "Technical guides, case notes and industry news focused on extending asset life and improving construction outcomes.",
    url: "https://fiablebuilding.com/insights",
    type: "website",
    locale: "en-US"
  },
  twitter: {
    card: "summary",
    title: "Fiable Insights",
    description: "Technical content and updates on waterproofing, rehabilitation and construction best practices."
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

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
 
export const metadata = {
  title: "Fiable Building Solutions — Engineering the Future of Construction",
  description: "Fiable Building Solutions delivers reliable waterproofing, structural rehabilitation, industrial flooring and grouting across India. Engineering-led teams, modern equipment and premium materials for durable, high-performance projects.",
  keywords: [
    "Fiable Building Solutions",
    "waterproofing",
    "structural rehabilitation",
    "industrial flooring",
    "grouting",
    "construction services India",
    "civil works",
    "construction contracting"
  ],
  alternates: { canonical: "https://fiablebuilding.com/" },
  openGraph: {
    title: "Fiable Building Solutions — Engineering the Future of Construction",
    description: "Engineering-led waterproofing, structural refurbishment, industrial flooring and grouting solutions across India. Precision, durability and warranty-backed delivery.",
    url: "https://fiablebuilding.com/",
    siteName: "Fiable Building Solutions",
    locale: "en-US",
    type: "website",
    // images: ["https://fiablebuilding.com/path-to-og-home.jpg"] // <-- replace with real OG image if available
  },
  twitter: {
    card: "summary_large_image",
    title: "Fiable Building Solutions — Engineering the Future of Construction",
    description: "Reliable waterproofing, flooring and structural rehabilitation with engineering excellence across India.",
    // image: "https://fiablebuilding.com/path-to-og-home.jpg"
  },
  robots: {
    index: true,
    follow: true,
    nocache: false
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
       >
       
        <Header/>
          

        {children}
                <Footer/>

      </body>
    </html>
  );
}

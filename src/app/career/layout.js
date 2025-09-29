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
  title: "Careers at Fiable — Join Our Engineering & Site Teams",
  description: "Careers at Fiable Building Solutions: roles for engineers, site supervisors, technical staff and project managers. Grow with a company focused on training, modern equipment and engineering excellence.",
  keywords: [
    "fiable careers",
    "construction jobs India",
    "site supervisor jobs",
    "engineer jobs",
    "construction careers"
  ],
  alternates: { canonical: "https://fiablebuilding.com/careers" },
  openGraph: {
    title: "Careers at Fiable Building Solutions",
    description: "Join Fiable — we offer training, field exposure and roles across engineering, supervision and project delivery.",
    url: "https://fiablebuilding.com/careers",
    type: "website",
    locale: "en-US"
  },
  twitter: {
    card: "summary",
    title: "Careers at Fiable",
    description: "Open roles for engineers, supervisors and technical staff — training and growth opportunities across India."
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

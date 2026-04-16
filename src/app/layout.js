import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";

const geistSans = localFont({
  src: [
    {
      path: "../../public/fonts/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Poppins-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = localFont({
  src: [
    {
      path: "../../public/fonts/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-mono",
  display: "swap",
});

// Viewport configuration for mobile responsiveness and theme
export const viewport = {
  themeColor: "#4376BB", // Main Brand Blue
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Fiable Building Solutions — Engineering the Future of Construction",
    template: "%s | Fiable Building Solutions",
  },
  description: "Fiable Building Solutions delivers professional waterproofing, structural rehabilitation, industrial flooring and grouting across India. 10+ years of engineering excellence and warranty-backed delivery.",
  keywords: [
    "Fiable Building Solutions",
    "waterproofing services India",
    "structural rehabilitation",
    "industrial flooring company",
    "civil engineering contractors",
    "grouting and anchoring",
    "construction refurbishing",
    "epoxy flooring Pune",
    "waterproofing consultants"
  ],
  alternates: { 
    canonical: "/" 
  },
  openGraph: {
    title: "Fiable Building Solutions — Specialized Engineering Services",
    description: "Reliable waterproofing, structural refurbishment and industrial flooring. Precision and durability with 10+ years track record in India.",
    url: `${SITE_URL}/`,
    siteName: "Fiable Building Solutions",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo2.png",
        width: 1200,
        height: 630,
        alt: "Fiable Building Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fiable Building Solutions — Engineering & Construction Experts",
    description: "Specialized in professional waterproofing, flooring and structural rehabilitation across India.",
    images: ["/logo2.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/manifest.json"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-white text-zinc-900 min-h-screen">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M8CFKWZT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <JsonLd />
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-M8CFKWZT');`}
        </Script>
        <Header/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}

export const metadata = {
  title: "Projects — Case Studies & Completed Works | Fiable Building Solutions",
  description: "Browse Fiable's portfolio of waterproofing, structural retrofitting, flooring and industrial repair projects. Real-world case studies demonstrating durability, technical rigor and timely delivery.",
  keywords: [
    "fiable projects",
    "case studies",
    "waterproofing projects",
    "structural retrofitting projects",
    "industrial flooring portfolio"
  ],
  alternates: { canonical: "https://fiablebuilding.com/projects" },
  openGraph: {
    title: "Fiable Projects — Case Studies & Portfolio",
    description: "Explore completed projects showcasing Fiable's technical approach to waterproofing, flooring and structural rehabilitation with warranty-backed outcomes.",
    url: "https://fiablebuilding.com/projects",
    type: "website",
    locale: "en-IN"
  },
  twitter: {
    card: "summary",
    title: "Fiable Projects",
    description: "Portfolio and case studies of waterproofing, rehabilitation, flooring and industrial repair works."
  },
  robots: { index: true, follow: true }
};




export default function RootLayout({ children }) {
  return children;
}

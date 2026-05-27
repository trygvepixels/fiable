// app/projects/page.jsx
import ProjectsClient from "@/components/ProjectsClient";
import { connectDB } from "@/lib/mongodb";
import FeatureProject from "@/models/FeatureProject";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Our Projects & Case Studies | Fiable Building Solutions",
  description: "Explore our completed projects in waterproofing, concrete rehabilitation, carbon fiber wrapping, and industrial flooring across Lucknow, Delhi NCR, and India.",
  alternates: {
    canonical: `${SITE_URL}/projects`,
  },
  openGraph: {
    title: "Our Projects & Case Studies | Fiable Building Solutions",
    description: "Explore our completed projects in waterproofing, concrete rehabilitation, carbon fiber wrapping, and industrial flooring across Lucknow, Delhi NCR, and India.",
    url: `${SITE_URL}/projects`,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/logo2.png`,
        width: 800,
        height: 600,
        alt: "Fiable Building Solutions Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Projects & Case Studies | Fiable Building Solutions",
    description: "Explore our completed projects in waterproofing, concrete rehabilitation, carbon fiber wrapping, and industrial flooring across Lucknow, Delhi NCR, and India.",
    images: [`${SITE_URL}/logo2.png`],
  },
};

function buildProjectsSchema() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": SITE_URL
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Projects",
          "item": `${SITE_URL}/projects`
        }
      ]
    }
  ];
}

export default async function Page() {
  await connectDB();
  
  // Fetch all featured and standard projects
  const rawProjects = await FeatureProject.find({}).sort("-createdAt").lean();
  const projects = JSON.parse(JSON.stringify(rawProjects));

  const schema = buildProjectsSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ProjectsClient initialProjects={projects} />
    </>
  );
}
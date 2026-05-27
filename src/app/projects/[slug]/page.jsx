import ProjectDetailClient from "./ProjectDetailClient";
import { SITE_URL } from "@/lib/site";
import { connectDB } from "@/lib/mongodb";
import FeatureProject from "@/models/FeatureProject";

function normalizeOne(p = {}) {
  const isFeature = "coverImage" in p || "galleryImages" in p || "gallery" in p;
  const coverImage = isFeature ? p.coverImage : p.cover;

  let galleryImages = [];
  if (Array.isArray(p.galleryImages)) {
    galleryImages = p.galleryImages;
  } else if (Array.isArray(p.gallery)) {
    galleryImages = p.gallery
      .map((g) => (typeof g === "string" ? g : g?.src))
      .filter(Boolean);
  }

  return {
    ...p,
    slug: String(p.slug || p._id || p.id || "").toLowerCase(),
    title: p.title || "Untitled",
    coverImage: coverImage || "",
    galleryImages,
    description: p.description || p.blurb || "",
    client: p.client || p.location || "",
    year: p.year || p.timeline || "",
    tags: Array.isArray(p.tags) ? p.tags : [],
    stats: Array.isArray(p.stats) ? p.stats : [],
    liveUrl: p.liveUrl || "",
    caseStudyUrl: p.caseStudyUrl || "",
    accentColor: p.accentColor || "#111",
  };
}

async function getProject(slug) {
  try {
    await connectDB();
    const slugLc = String(slug).toLowerCase();
    const doc = await FeatureProject.findOne({ slug: slugLc }).lean();
    if (!doc) return null;
    return normalizeOne(JSON.parse(JSON.stringify(doc)));
  } catch (err) {
    console.error("getProject direct query error:", err.message);
    return null;
  }
}

function buildProjectSchema(project, canonicalUrl) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: canonicalUrl,
    image: project.coverImage ? [project.coverImage] : [],
    creator: {
      "@type": "Organization",
      name: "Fiable Building Solutions",
    },
    about: project.tags,
    datePublished: project.createdAt,
    dateModified: project.updatedAt || project.createdAt,
  };
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    return {
      title: "Project Not Found",
      robots: { index: false, follow: false },
    };
  }

  const canonicalUrl = `${SITE_URL}/projects/${project.slug}`;
  const title = `${project.title} | Fiable Building Solutions`;
  const description =
    project.description ||
    `Explore the ${project.title} case study by Fiable Building Solutions.`;
  const image = project.coverImage || "/logo2.png";

  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "article",
      locale: "en_IN",
      images: [{ url: image, alt: project.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    return <div className="p-12">Project not found</div>;
  }

  const canonicalUrl = `${SITE_URL}/projects/${project.slug}`;
  const projectSchema = buildProjectSchema(project, canonicalUrl);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <ProjectDetailClient project={project} />
    </>
  );
}

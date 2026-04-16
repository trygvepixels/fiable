import { headers } from "next/headers";
import ProjectDetailClient from "./ProjectDetailClient";
import { SITE_URL } from "@/lib/site";

function getBaseUrl() {
  const h = headers();
  const host = h.get("x-forwarded-host") || h.get("host");
  const proto = h.get("x-forwarded-proto") || "http";
  return `${proto}://${host}`;
}

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

async function fetchJson(url, init) {
  const res = await fetch(url, { cache: "no-store", ...init });
  if (!res.ok) return { ok: false, status: res.status, data: null };
  return { ok: true, status: 200, data: await res.json() };
}

async function getProject(slug) {
  const base = getBaseUrl();
  const slugLc = String(slug).toLowerCase();

  const detail = await fetchJson(`${base}/api/feature-projects/${encodeURIComponent(slugLc)}`);
  if (detail.ok && detail.data) {
    return normalizeOne(detail.data);
  }

  const [nonFeatured, other] = await Promise.all([
    fetchJson(`${base}/api/feature-projects`),
    fetchJson(`${base}/api/projects`),
  ]);

  const listA = Array.isArray(nonFeatured.data?.items)
    ? nonFeatured.data.items
    : Array.isArray(nonFeatured.data?.data)
      ? nonFeatured.data.data
      : Array.isArray(nonFeatured.data)
        ? nonFeatured.data
        : [];

  const listB = Array.isArray(other.data?.items)
    ? other.data.items
    : Array.isArray(other.data?.data)
      ? other.data.data
      : Array.isArray(other.data)
        ? other.data
        : [];

  const hit =
    listA.find((p) => String(p.slug || "").toLowerCase() === slugLc) ||
    listB.find((p) => String(p.slug || "").toLowerCase() === slugLc);

  return hit ? normalizeOne(hit) : null;
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
  const title = `${project.title} | Fiable Projects`;
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

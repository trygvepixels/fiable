import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";
import FeatureProject from "@/models/FeatureProject";
import Project from "@/models/Project";
import Service from "@/models/Service";
import { SITE_URL } from "@/lib/site";

export const revalidate = 3600;

function toDate(value) {
  const date = value ? new Date(value) : new Date();
  return Number.isNaN(date.getTime()) ? new Date().toISOString() : date.toISOString();
}

export default async function sitemap() {
  try {
    await connectDB();

    // ── Static routes with real modification dates (not current timestamp) ──
    const staticRoutes = [
      { url: `${SITE_URL}`,              lastModified: "2026-06-01" },
      { url: `${SITE_URL}/about-us`,     lastModified: "2026-05-15" },
      { url: `${SITE_URL}/services`,     lastModified: "2026-05-20" },
      { url: `${SITE_URL}/career`,       lastModified: "2026-04-10" },
      { url: `${SITE_URL}/contact-us`,   lastModified: "2026-04-01" },
      { url: `${SITE_URL}/projects`,     lastModified: "2026-06-01" },
      { url: `${SITE_URL}/blogs`,        lastModified: "2026-06-11" },
      { url: `${SITE_URL}/privacy-policy`, lastModified: "2026-06-13" },
      { url: `${SITE_URL}/terms-of-service`, lastModified: "2026-06-13" },
    ];

    // ── Geo-specific landing pages (new — add future area pages here) ──
    const geoRoutes = [
      {
        url: `${SITE_URL}/waterproofing-services-sitapur-road-lucknow`,
        lastModified: "2026-06-13",
      },
      {
        url: `${SITE_URL}/waterproofing-services-gomti-nagar-lucknow`,
        lastModified: "2026-06-13",
      },
      {
        url: `${SITE_URL}/waterproofing-services-aliganj-lucknow`,
        lastModified: "2026-06-13",
      },
      {
        url: `${SITE_URL}/waterproofing-services-hazratganj-lucknow`,
        lastModified: "2026-06-13",
      },
      {
        url: `${SITE_URL}/waterproofing-services-indiranagar-lucknow`,
        lastModified: "2026-06-13",
      },
    ];

    const [blogs, services, standardProjects, featuredProjects] = await Promise.all([
      Blog.find({ status: "visible" }).select("urlSlug updatedAt lastUpdated").lean(),
      Service.find({ active: true }).select("slug updatedAt createdAt").lean(),
      Project.find().select("slug updatedAt createdAt").lean(),
      FeatureProject.find().select("slug updatedAt createdAt").lean(),
    ]);

    const blogRoutes = blogs
      .filter((blog) => blog?.urlSlug)
      .map((blog) => ({
        url: `${SITE_URL}/blogs/${blog.urlSlug}`,
        lastModified: toDate(blog.lastUpdated || blog.updatedAt),
      }));

    const serviceRoutes = services
      .filter((service) => service?.slug)
      .map((service) => ({
        url: `${SITE_URL}/services/${service.slug}`,
        lastModified: toDate(service.updatedAt || service.createdAt),
      }));

    const projectRoutes = [...standardProjects, ...featuredProjects]
      .filter((project) => project?.slug)
      .map((project) => ({
        url: `${SITE_URL}/projects/${project.slug}`,
        lastModified: toDate(project.updatedAt || project.createdAt),
      }));

    return [...staticRoutes, ...geoRoutes, ...serviceRoutes, ...blogRoutes, ...projectRoutes];
  } catch (error) {
    console.error("Sitemap generation error:", error);

    return [
      { url: SITE_URL, lastModified: new Date().toISOString() },
      { url: `${SITE_URL}/services`, lastModified: new Date().toISOString() },
      { url: `${SITE_URL}/blogs`, lastModified: new Date().toISOString() },
      { url: `${SITE_URL}/projects`, lastModified: new Date().toISOString() },
    ];
  }
}

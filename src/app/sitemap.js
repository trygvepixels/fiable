import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";
import FeatureProject from "@/models/FeatureProject";
import Project from "@/models/Project";
import Service from "@/models/Service";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-dynamic";
export const revalidate = 0;

function toDate(value) {
  const date = value ? new Date(value) : new Date();
  return Number.isNaN(date.getTime()) ? new Date().toISOString() : date.toISOString();
}

export default async function sitemap() {
  try {
    await connectDB();

    const staticRoutes = [
      "",
      "/about-us",
      "/services",
      "/career",
      "/contact-us",
      "/projects",
      "/machinery",
      "/blogs",
    ].map((route) => ({
      url: `${SITE_URL}${route}`,
      lastModified: new Date().toISOString(),
    }));

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

    return [...staticRoutes, ...serviceRoutes, ...blogRoutes, ...projectRoutes];
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

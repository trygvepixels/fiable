import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";
import FeatureProject from "@/models/FeatureProject";
import Project from "@/models/Project";
import Service from "@/models/Service";
import { SITE_URL } from "@/lib/site";

export const revalidate = 3600;

const TODAY = "2026-07-02"; // Set to today's date to signal freshness to Googlebot

function toDate(value) {
  const date = value ? new Date(value) : new Date();
  return Number.isNaN(date.getTime()) ? new Date().toISOString() : date.toISOString();
}

export default async function sitemap() {
  try {
    await connectDB();

    // ── Static routes with real modification dates ──
    const staticRoutes = [
      { url: `${SITE_URL}`,              lastModified: TODAY },
      { url: `${SITE_URL}/about-us`,     lastModified: TODAY },
      { url: `${SITE_URL}/services`,     lastModified: TODAY },
      { url: `${SITE_URL}/price-calculator/waterproofing`, lastModified: TODAY },
      { url: `${SITE_URL}/price-calculator/core-cutting`,   lastModified: TODAY },
      { url: `${SITE_URL}/price-calculator/chemical-anchoring`, lastModified: TODAY },
      { url: `${SITE_URL}/price-calculator/epoxy-flooring`, lastModified: TODAY },
      { url: `${SITE_URL}/price-calculator/grouting`,       lastModified: TODAY },
      { url: `${SITE_URL}/price-calculator/structural-rehab`, lastModified: TODAY },
      { url: `${SITE_URL}/career`,       lastModified: TODAY },
      { url: `${SITE_URL}/contact-us`,   lastModified: TODAY },
      { url: `${SITE_URL}/projects`,     lastModified: TODAY },
      { url: `${SITE_URL}/blogs`,        lastModified: TODAY },
      { url: `${SITE_URL}/privacy-policy`, lastModified: TODAY },
      { url: `${SITE_URL}/terms-of-service`, lastModified: TODAY },
    ];

    // ── Geo-specific landing pages ──
    const geoRoutes = [
      {
        url: `${SITE_URL}/core-cutting-services-lucknow`,
        lastModified: TODAY,
      },
      {
        url: `${SITE_URL}/waterproofing-services-sitapur-road-lucknow`,
        lastModified: TODAY,
      },
      {
        url: `${SITE_URL}/waterproofing-services-gomti-nagar-lucknow`,
        lastModified: TODAY,
      },
      {
        url: `${SITE_URL}/waterproofing-services-aliganj-lucknow`,
        lastModified: TODAY,
      },
      {
        url: `${SITE_URL}/waterproofing-services-hazratganj-lucknow`,
        lastModified: TODAY,
      },
      {
        url: `${SITE_URL}/waterproofing-services-indiranagar-lucknow`,
        lastModified: TODAY,
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

import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";
import Project from "@/models/Project";
import FeatureProject from "@/models/FeatureProject";

const baseUrl = "https://fiablebuilding.com";

export default async function sitemap() {
  try {
    await connectDB();

    // 1. Static Routes
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
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: route === "" ? "daily" : "weekly",
      priority: route === "" ? 1 : 0.8,
    }));

    // 2. Dynamic Blog Routes
    const blogs = await Blog.find({ status: "visible" }).select("urlSlug updatedAt lastUpdated").lean();
    const blogRoutes = blogs.map((blog) => ({
      url: `${baseUrl}/blogs/${blog.urlSlug}`,
      lastModified: (blog.lastUpdated || blog.updatedAt || new Date()).toISOString(),
      changeFrequency: "weekly",
      priority: 0.7,
    }));

    // 3. Dynamic Project Routes (Combined from both models)
    const [standardProjects, featuredProjects] = await Promise.all([
      Project.find().select("slug updatedAt createdAt").lean(),
      FeatureProject.find().select("slug updatedAt createdAt").lean(),
    ]);

    const allProjects = [...standardProjects, ...featuredProjects];
    const projectRoutes = allProjects
      .filter((p) => p.slug)
      .map((project) => ({
        url: `${baseUrl}/projects/${project.slug}`,
        lastModified: (project.updatedAt || project.createdAt || new Date()).toISOString(),
        changeFrequency: "monthly",
        priority: 0.75,
      }));

    return [...staticRoutes, ...blogRoutes, ...projectRoutes];
  } catch (error) {
    console.error("Sitemap generation error:", error);
    // Fallback to static routes if DB fails
    return [
      { url: baseUrl, lastModified: new Date().toISOString() },
    ];
  }
}

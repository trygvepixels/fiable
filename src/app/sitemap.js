export default function sitemap() {
  const baseUrl = "https://fiablebuilding.com";

  // Static routes
  const routes = [
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

  return routes;
}

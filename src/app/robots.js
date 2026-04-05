export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin", 
          "/api/", 
          "/login", 
          "/thankyou"
        ],
      },
    ],
    sitemap: "https://fiablebuilding.com/sitemap.xml",
  };
}

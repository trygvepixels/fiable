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
      // ── AI & Search bots — allow for citation & indexing ──
      { userAgent: "GPTBot",        allow: "/" },
      { userAgent: "ChatGPT-User",  allow: "/" },
      { userAgent: "ClaudeBot",     allow: "/" },
      { userAgent: "anthropic-ai",  allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" }, // Gemini + AI Overviews
      { userAgent: "Bingbot",       allow: "/" },   // Microsoft Copilot
    ],
    host: "https://fiableprojects.com",
    sitemap: "https://fiableprojects.com/sitemap.xml",
  };
}

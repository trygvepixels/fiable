// src/lib/contentSanitizer.js

/**
 * Basic content sanitizer for blog posts.
 * Removes common CMS-injected artifacts and ensures clean formatting.
 * 
 * @param {string} md - The markdown or HTML content to sanitize
 * @returns {string} Sanitized content
 */
export function sanitizeBlogContent(md) {
  if (!md || typeof md !== "string") return md;

  let sanitized = md;

  // 1. Remove common AI/CMS citation patterns if they exist
  // Example: [1], [2], [Source: Google]
  sanitized = sanitized.replace(/\[\d+\]/g, "");
  
  // 2. Normalize whitespace
  sanitized = sanitized.replace(/\n{3,}/g, "\n\n");

  // 3. Trim
  return sanitized.trim();
}

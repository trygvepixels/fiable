/**
 * CMS Receiver Endpoint - FULL CRUD Support
 * Receives blog posts from your CMS Automate system
 * Place this file in your Next.js client at: src/app/api/cms-receiver/route.js
 *
 * Supports:
 * - POST: Create new blog posts
 * - PUT: Update existing blog posts
 * - DELETE: Remove blog posts
 * - OPTIONS: CORS preflight
 */

import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb"; // Corrected import path and function name
import Blog from "@/models/Blog"; // Your Blog model
import { sanitizeBlogContent } from "@/lib/contentSanitizer";
import slugify from "slugify"; // Robust URL slug generation

// CORS headers helper function
function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, X-CMS-AUTH-KEY",
  };
}

/**
 * Enhanced Slug Sanitization
 * Converts any string into a clean, SEO-friendly URL slug
 *
 * Features:
 * - Removes special characters
 * - Converts to lowercase
 * - Replaces spaces and underscores with hyphens
 * - Removes consecutive hyphens
 * - Trims leading/trailing hyphens
 * - Handles unicode characters
 *
 * @param {string} slug - The slug to sanitize
 * @param {string} fallback - Fallback value if slug is empty
 * @returns {string} Clean, valid URL slug
 */
function sanitizeSlug(slug, fallback = "untitled") {
  if (!slug || typeof slug !== "string") {
    return fallback;
  }

  const cleanSlug = slugify(slug, {
    lower: true, // Convert to lowercase
    strict: true, // Strip special characters
    remove: /[*+~.()'"!:@]/g, // Remove specific characters
    replacement: "-", // Replace spaces with hyphens
    trim: true, // Trim leading/trailing replacement chars
  });

  // Return cleaned slug or fallback if empty
  return cleanSlug || fallback;
}

// OPTIONS handler for preflight requests
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200, headers: corsHeaders() });
}

// GET - Info endpoint
export async function GET() {
  return NextResponse.json(
    {
      message: "CMS Receiver Endpoint - Full CRUD Support",
      description:
        "This endpoint accepts POST, PUT, and DELETE requests from your CMS.",
      methods: {
        POST: "Create new blog post",
        PUT: "Update existing blog post (requires external_id)",
        DELETE: "Delete blog post (requires external_id query param)",
      },
      headers: {
        "X-CMS-AUTH-KEY":
          "Required - Your secret key from environment variables",
      },
    },
    { status: 200, headers: corsHeaders() }
  );
}

// POST - Create new blog
export async function POST(request) {
  try {
    const authHeader = request.headers.get("X-CMS-AUTH-KEY");
    const expectedKey = process.env.CMS_AUTH_KEY || "auto-publish-key-2026";

    if (authHeader !== expectedKey) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401, headers: corsHeaders() }
      );
    }

    await connectDB();
    const data = await request.json();

    console.log("[CMS Receiver] Creating blog:", data.title);

    // Check if blog with this external_id already exists
    if (data.external_id) {
      const existing = await Blog.findOne({ external_id: data.external_id });
      if (existing) {
        console.log("[CMS Receiver] Blog already exists, use PUT to update");
        return NextResponse.json(
          {
            success: false,
            error: "Blog already exists. Use PUT to update.",
            existing_id: existing._id,
            existing_slug: existing.urlSlug,
          },
          { status: 409, headers: corsHeaders() }
        );
      }
    }

    // Sanitize content: remove citations, garbled text, and dangerous HTML
    const sanitizedContent = data.content
      ? sanitizeBlogContent(data.content)
      : data.content;

    // Enhanced slug sanitization with fallback to title
    // This prevents malformed URLs like "blog-title-" with trailing hyphens
    const sanitizedSlug = data.urlSlug
      ? sanitizeSlug(data.urlSlug, sanitizeSlug(data.title, "untitled"))
      : sanitizeSlug(data.title, "untitled");

    console.log(
      `[CMS Receiver] Sanitized slug: "${data.urlSlug}" → "${sanitizedSlug}"`
    );

    // Map incoming data to your Schema with all fields
    const newBlog = new Blog({
      title: data.title,
      content: sanitizedContent,
      urlSlug: sanitizedSlug,
      metaTitle: data.metaTitle,
      metaDescription: data.metaDescription,
      focusKeyword: data.focusKeyword,
      faqs: data.faqs,
      schemaMarkup: data.schemaMarkup,
      category: data.category,
      author: data.author || "Fiable Editorial Team", // Updated default author
      // Image fields from external CMS
      image: data.featuredImage || data.imageUrl || data.image,
      featuredImage: data.featuredImage,
      imageUrl: data.imageUrl,
      imageAlt: data.imageAlt,
      imageAttribution: data.imageAttribution,
      imagePhotographer: data.imagePhotographer,
      imagePhotographerUrl: data.imagePhotographerUrl,
      imageSource: data.imageSource,
      // Metadata
      external_id: data.external_id || data._id?.toString(), // Track CMS blog ID
      source: data.source || "external-cms",
      status: "visible",
      lastUpdated: new Date(),
    });

    const saved = await newBlog.save();

    console.log("[CMS Receiver] ✅ Blog created:", saved.urlSlug);

    return NextResponse.json(
      {
        success: true,
        id: saved._id,
        slug: saved.urlSlug,
        url: `https://fiableprojects.com/blogs/${saved.urlSlug}`,
        message: "Blog created successfully",
      },
      { headers: corsHeaders() }
    );
  } catch (error) {
    console.error("[CMS Receiver] Create Error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500, headers: corsHeaders() }
    );
  }
}

// PUT - Update existing blog
export async function PUT(request) {
  try {
    const authHeader = request.headers.get("X-CMS-AUTH-KEY");
    const expectedKey = process.env.CMS_AUTH_KEY || "auto-publish-key-2026";

    if (authHeader !== expectedKey) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401, headers: corsHeaders() }
      );
    }

    await connectDB();
    const data = await request.json();

    console.log(
      "[CMS Receiver] Updating blog with external_id:",
      data.external_id
    );

    if (!data.external_id) {
      return NextResponse.json(
        { success: false, error: "external_id required for updates" },
        { status: 400, headers: corsHeaders() }
      );
    }

    // Find blog by external_id (the CMS blog ID)
    const blog = await Blog.findOne({ external_id: data.external_id });

    if (!blog) {
      console.log("[CMS Receiver] Blog not found, creating new one");
      
      // Create new blog since request body is already consumed
      const sanitizedContent = data.content
        ? sanitizeBlogContent(data.content)
        : data.content;

      const sanitizedSlug = data.urlSlug 
        ? sanitizeSlug(data.urlSlug, sanitizeSlug(data.title, 'untitled'))
        : sanitizeSlug(data.title, 'untitled');

      console.log(`[CMS Receiver] Sanitized slug: "${data.urlSlug}" → "${sanitizedSlug}"`);

      const newBlog = new Blog({
        title: data.title,
        content: sanitizedContent,
        urlSlug: sanitizedSlug,
        metaTitle: data.metaTitle,
        metaDescription: data.metaDescription,
        focusKeyword: data.focusKeyword,
        faqs: data.faqs,
        schemaMarkup: data.schemaMarkup,
        category: data.category,
        author: data.author || "Fiable Editorial Team ",
        image: data.featuredImage || data.imageUrl || data.image,
        featuredImage: data.featuredImage,
        imageUrl: data.imageUrl,
        imageAlt: data.imageAlt,
        imageAttribution: data.imageAttribution,
        imagePhotographer: data.imagePhotographer,
        imagePhotographerUrl: data.imagePhotographerUrl,
        imageSource: data.imageSource,
        external_id: data.external_id || data._id?.toString(),
        source: data.source || "external-cms",
        status: "visible",
        lastUpdated: new Date(),
      });

      const saved = await newBlog.save();

      console.log("[CMS Receiver] ✅ Blog created via PUT:", saved.urlSlug);

      return NextResponse.json(
        {
          success: true,
          id: saved._id,
          slug: saved.urlSlug,
          url: `https://fiableprojects.com/blogs/${saved.urlSlug}`,
          message: "Blog created successfully",
        },
        { headers: corsHeaders() }
      );
    }

    // Update fields
    const sanitizedContent = data.content
      ? sanitizeBlogContent(data.content)
      : blog.content;

    // Enhanced slug sanitization for updates
    // Only update slug if provided, otherwise keep existing
    const sanitizedSlug = data.urlSlug
      ? sanitizeSlug(
          data.urlSlug,
          blog.urlSlug || sanitizeSlug(data.title || blog.title, "untitled")
        )
      : blog.urlSlug;

    if (data.urlSlug && sanitizedSlug !== data.urlSlug) {
      console.log(
        `[CMS Receiver] Sanitized slug on update: "${data.urlSlug}" → "${sanitizedSlug}"`
      );
    }

    blog.title = data.title || blog.title;
    blog.content = sanitizedContent;
    blog.urlSlug = sanitizedSlug;
    blog.metaTitle = data.metaTitle || blog.metaTitle;
    blog.metaDescription = data.metaDescription || blog.metaDescription;
    blog.focusKeyword = data.focusKeyword || blog.focusKeyword;
    blog.faqs = data.faqs || blog.faqs;
    blog.schemaMarkup = data.schemaMarkup || blog.schemaMarkup;
    blog.category = data.category || blog.category;
    blog.author = data.author || blog.author;

    // Update image fields
    if (data.featuredImage !== undefined)
      blog.featuredImage = data.featuredImage;
    if (data.imageUrl !== undefined) blog.imageUrl = data.imageUrl;
    if (data.imageAlt !== undefined) blog.imageAlt = data.imageAlt;
    if (data.imageAttribution !== undefined)
      blog.imageAttribution = data.imageAttribution;
    if (data.imagePhotographer !== undefined)
      blog.imagePhotographer = data.imagePhotographer;
    if (data.imagePhotographerUrl !== undefined)
      blog.imagePhotographerUrl = data.imagePhotographerUrl;
    if (data.imageSource !== undefined) blog.imageSource = data.imageSource;

    blog.lastUpdated = new Date();

    await blog.save();

    console.log("[CMS Receiver] ✅ Blog updated:", blog.urlSlug);

    return NextResponse.json(
      {
        success: true,
        id: blog._id,
        slug: blog.urlSlug,
        url: `https://fiableprojects.com/blogs/${blog.urlSlug}`,
        message: "Blog updated successfully",
      },
      { headers: corsHeaders() }
    );
  } catch (error) {
    console.error("[CMS Receiver] Update Error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500, headers: corsHeaders() }
    );
  }
}

// DELETE - Remove blog
export async function DELETE(request) {
  try {
    const authHeader = request.headers.get("X-CMS-AUTH-KEY");
    const expectedKey = process.env.CMS_AUTH_KEY || "auto-publish-key-2026";

    if (authHeader !== expectedKey) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401, headers: corsHeaders() }
      );
    }

    const { searchParams } = new URL(request.url);
    const external_id = searchParams.get("external_id");

    console.log("[CMS Receiver] Deleting blog with external_id:", external_id);

    if (!external_id) {
      return NextResponse.json(
        { success: false, error: "external_id required in query params" },
        { status: 400, headers: corsHeaders() }
      );
    }

    await connectDB();

    const result = await Blog.deleteOne({ external_id });

    if (result.deletedCount === 0) {
      console.log("[CMS Receiver] Blog not found for deletion");
      return NextResponse.json(
        { success: false, error: "Blog not found" },
        { status: 404, headers: corsHeaders() }
      );
    }

    console.log("[CMS Receiver] ✅ Blog deleted successfully");

    return NextResponse.json(
      {
        success: true,
        message: "Blog deleted successfully",
      },
      { headers: corsHeaders() }
    );
  } catch (error) {
    console.error("[CMS Receiver] Delete Error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500, headers: corsHeaders() }
    );
  }
}

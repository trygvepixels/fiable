import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { sanitizeBlogContent } from "@/lib/contentSanitizer";

/**
 * Re-sanitize all blogs to apply updated sanitization (converts ** to <strong>)
 * GET /api/resanitize-blogs
 */
export async function GET() {
  try {
    await connectDB();
    const blogs = await Blog.find({});

    let updated = 0;
    const results = [];

    for (const blog of blogs) {
      if (blog.content && typeof blog.content === "string") {
        // Check if content has ** markers that need converting
        if (blog.content.includes("**")) {
          const oldContent = blog.content;
          blog.content = sanitizeBlogContent(blog.content);
          await blog.save();

          updated++;
          results.push({
            title: blog.title,
            slug: blog.urlSlug,
            status: "updated",
            hadMarkdown: true,
          });
        } else {
          results.push({
            title: blog.title,
            slug: blog.urlSlug,
            status: "skipped",
            hadMarkdown: false,
          });
        }
      }
    }

    return NextResponse.json({
      success: true,
      message: `Re-sanitized ${updated} out of ${blogs.length} blogs`,
      totalBlogs: blogs.length,
      updatedBlogs: updated,
      results,
    });
  } catch (error) {
    console.error("Re-sanitize error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

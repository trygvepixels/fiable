export const dynamic = 'force-dynamic';
// optionally:
export const revalidate = 0; import { notFound } from "next/navigation";
import BlogsClientUI from "@/components/BlogsClientUI";

const API_BASE = "https://fiablebuilding.com";

// --- data ---
async function getBlog(id) {
  try {
    const res = await fetch(`${API_BASE}/api/blogs/${id}`, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch blog");
    return await res.json();
  } catch (err) {
    console.error("❌ getBlog error:", err.message);
    return null;
  }
}

// --- metadata ---
export async function generateMetadata({ params }) {
  const { id } = params;                 // ✅ use id
  try {
    const res = await fetch(`${API_BASE}/api/blogs/${id}`, { cache: "no-store" });
    if (!res.ok) return {};
    const blog = await res.json();

    return {
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription || "",
      alternates: { canonical: blog.canonicalUrl || "" },
      openGraph: {
        title: blog.metaTitle || blog.title,
        description: blog.metaDescription || "",
        url: blog.canonicalUrl || "",
        images: blog.image ? [{ url: blog.image }] : [],
      },
      twitter: {
        card: "summary_large_image",
        title: blog.metaTitle || blog.title,
        description: blog.metaDescription || "",
        images: blog.image ? [blog.image] : [],
      },
    };
  } catch (err) {
    console.error("❌ generateMetadata error:", err.message);
    return {};
  }
}

// optional: static params stays the same
export async function generateStaticParams() {
  try {
    const res = await fetch(`${API_BASE}/api/blogs`, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch blogs list");
    const blogs = await res.json();
    return Array.isArray(blogs) ? blogs.map((b) => ({ id: b.urlSlug })) : [];
  } catch (err) {
    console.error("❌ generateStaticParams error:", err.message);
    return [];
  }
}

// --- page ---
export default async function BlogDetails({ params }) {
  const { id } = params;                 // ✅ use id
  const blog = await getBlog(id);
  if (!blog) return notFound();

  return (
    <div>
      <BlogsClientUI key={blog._id} blog={blog} />
    </div>
  );
}
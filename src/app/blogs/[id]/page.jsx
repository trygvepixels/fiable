import { notFound } from "next/navigation";
import BlogsClientUI from "@/components/BlogsClientUI";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const API_BASE = SITE_URL;

function getCanonicalUrl(blog, id) {
  if (blog?.canonicalUrl) return blog.canonicalUrl;
  const slug = blog?.urlSlug || id;
  return `${API_BASE}/blogs/${slug}`;
}

function buildBlogSchema(blog, canonicalUrl) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog?.metaTitle || blog?.title,
    description: blog?.metaDescription || "",
    image: blog?.image ? [blog.image] : [],
    author: {
      "@type": "Organization",
      name: blog?.author || "Fiable Building Solutions",
    },
    publisher: {
      "@type": "Organization",
      name: "Fiable Building Solutions",
      logo: {
        "@type": "ImageObject",
        url: `${API_BASE}/logo.png`,
      },
    },
    datePublished: blog?.createdAt,
    dateModified: blog?.lastUpdated || blog?.updatedAt || blog?.createdAt,
    mainEntityOfPage: canonicalUrl,
  };
}

async function getBlog(id) {
  try {
    const res = await fetch(`${API_BASE}/api/blogs/${id}`, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch blog");
    return await res.json();
  } catch (err) {
    console.error("getBlog error:", err.message);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { id } = await params;

  try {
    const blog = await getBlog(id);
    if (!blog) return {};

    const canonicalUrl = getCanonicalUrl(blog, id);
    const title = blog.metaTitle || blog.title;
    const description = blog.metaDescription || blog.excerpt || "";
    const image = blog.image || "/logo2.png";

    return {
      title,
      description,
      alternates: { canonical: canonicalUrl },
      openGraph: {
        title,
        description,
        url: canonicalUrl,
        type: "article",
        locale: "en_IN",
        images: [{ url: image, alt: blog.title }],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [image],
      },
    };
  } catch (err) {
    console.error("generateMetadata error:", err.message);
    return {};
  }
}

export default async function BlogDetails({ params }) {
  const { id } = await params;
  const blog = await getBlog(id);

  if (!blog) return notFound();

  const canonicalUrl = getCanonicalUrl(blog, id);
  const blogSchema = buildBlogSchema(blog, canonicalUrl);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <div>
        <BlogsClientUI key={blog._id} blog={blog} />
      </div>
    </>
  );
}

import { notFound } from "next/navigation";
import BlogsClientUI from "@/components/BlogsClientUI";
import { SITE_URL } from "@/lib/site";
import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";

export const revalidate = 3600;

function getCanonicalUrl(blog, id) {
  if (blog?.canonicalUrl) return blog.canonicalUrl;
  const slug = blog?.urlSlug || id;
  return `${SITE_URL}/blogs/${slug}`;
}

function buildBlogSchema(blog, canonicalUrl) {
  const authorName = typeof blog?.author === "string" && blog.author.trim()
    ? blog.author.trim()
    : "Fiable Building Solutions Editorial Team";

  // Determine if author looks like a person name (contains a space) or an org name
  const isPerson = authorName !== "Fiable Building Solutions Editorial Team" &&
    (authorName.includes(" ") || authorName.split(" ").length > 1);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog?.metaTitle || blog?.title,
    description: blog?.metaDescription || "",
    image: blog?.image ? [blog.image] : [],
    inLanguage: "en-IN",
    author: isPerson
      ? {
          "@type": "Person",
          name: authorName,
          worksFor: {
            "@type": "Organization",
            name: "Fiable Building Solutions",
            url: SITE_URL,
          },
        }
      : {
          "@type": "Organization",
          name: "Fiable Building Solutions",
          url: SITE_URL,
        },
    publisher: {
      "@type": "Organization",
      name: "Fiable Building Solutions",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
        width: 400,
        height: 100,
      },
    },
    datePublished: blog?.createdAt,
    dateModified: blog?.lastUpdated || blog?.updatedAt || blog?.createdAt,
    mainEntityOfPage: canonicalUrl,
  };
}

async function getBlog(id) {
  try {
    await connectDB();
    const blog = await Blog.findOne({ urlSlug: id }).lean();
    if (!blog) {
      // Fallback: If id is a valid hex MongoDB ObjectId, check by ID
      if (id && id.match(/^[0-9a-fA-F]{24}$/)) {
        const byId = await Blog.findById(id).lean();
        if (byId) return JSON.parse(JSON.stringify(byId));
      }
      return null;
    }
    return JSON.parse(JSON.stringify(blog));
  } catch (err) {
    console.error("getBlog direct query error:", err.message);
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

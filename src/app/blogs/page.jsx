// app/blogs/page.jsx
import BlogsListClient from "@/components/BlogsListClient";
import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Waterproofing & Structural Repair Blog | Fiable Insights",
  description: "Expert insights, technical guides, and construction tips on terrace waterproofing, structural retrofitting, epoxy flooring, and concrete repairs from our engineering team in Lucknow.",
  alternates: {
    canonical: `${SITE_URL}/blogs`,
  },
  openGraph: {
    title: "Waterproofing & Structural Repair Blog | Fiable Insights",
    description: "Expert insights, technical guides, and construction tips on terrace waterproofing, structural retrofitting, epoxy flooring, and concrete repairs from our engineering team in Lucknow.",
    url: `${SITE_URL}/blogs`,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/logo2.png`,
        width: 800,
        height: 600,
        alt: "Fiable Building Solutions Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Waterproofing & Structural Repair Blog | Fiable Insights",
    description: "Expert insights, technical guides, and construction tips on terrace waterproofing, structural retrofitting, epoxy flooring, and concrete repairs from our engineering team in Lucknow.",
    images: [`${SITE_URL}/logo2.png`],
  },
};

function buildBlogsSchema() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": SITE_URL
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blogs",
          "item": `${SITE_URL}/blogs`
        }
      ]
    }
  ];
}

export default async function Page() {
  await connectDB();
  
  // Fetch only visible blogs
  const rawBlogs = await Blog.find({ status: "visible" }).sort("-createdAt").lean();
  
  // Format data cleanly to match original format
  const blogs = rawBlogs.map((blog) => ({
    id: String(blog._id),
    image: blog.image || "",
    category: blog.category || "Construction",
    date: new Date(blog.createdAt || blog.createdAt || Date.now()).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }),
    readTime: blog.readTime || "5 min read",
    title: blog.title || "Untitled Insight",
    summary: blog.metaDescription || "",
    authorName: blog.author || "Fiable Team",
    authorImage: "/authors/fiable-team.jpg",
    timestamp: new Date(blog.createdAt || Date.now()).getTime(),
    views: blog.views || 0,
    slug: blog.urlSlug || String(blog._id),
  }));

  const serializedBlogs = JSON.parse(JSON.stringify(blogs));
  const schema = buildBlogsSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <BlogsListClient initialBlogs={serializedBlogs} />
    </>
  );
}

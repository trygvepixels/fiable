"use client";

import { useEffect, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import EditorJsRenderer from "./EditorJsRenderer";
import BlogSidebarContactForm from "./BlogSidebarContactForm";
import { FiHome, FiChevronRight } from "react-icons/fi";
import Link from "next/link";
import { sanitizeBlogContent } from "@/lib/contentSanitizer";
import Script from "next/script";

// Reusable text cleaner
function cleanText(input = "") {
  return String(input || "")
    .replace(/&nbsp;/g, " ")
    .replace(/<br\s*\/?>/gi, "")
    .replace(/\s+/g, " ")
    .trim();
}

// Renders content blocks

function FaqItem({ faq }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-md">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full px-4 py-3 text-left hover:bg-gray-50"
      >
        <span className="font-medium text-gray-800">{faq.question}</span>
        <span className="text-blue-600">{open ? <FaMinus /> : <FaPlus />}</span>
      </button>
      {open && (
        <div className="px-4 pb-4 text-gray-700 text-sm">{faq.answer}</div>
      )}
    </div>
  );
}

// ⬇ MAIN CLIENT COMPONENT ⬇
export default function BlogsClientUI({ blog }) {
  const [mounted, setMounted] = useState(false);

  // Safely parse Editor.js content
  const contentData = (() => {
    const raw = blog?.content;
    try {
      if (!raw) return null;
      if (typeof raw === "string") return JSON.parse(raw);
      if (typeof raw === "object") return raw;
      return null;
    } catch (e) {
      console.warn("EditorJS content parse failed:", e?.message);
      return null;
    }
  })();

  // Calculate read time from content
  const readTime = (() => {
    if (!contentData?.blocks) return 5; // default
    const wordCount = contentData.blocks.reduce((acc, block) => {
      if (block.type === "paragraph" || block.type === "header") {
        const text = block.data?.text || "";
        return acc + text.split(/\s+/).filter(w => w.length > 0).length;
      }
      return acc;
    }, 0);
    return Math.max(1, Math.ceil(wordCount / 200)); // 200 words per minute
  })();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#F4F1EC]">
      {/* Article Schema already added in server component - no duplication needed */}
      <Breadcrumbs title={blog?.title} />
      {/* Hero Section */}
      <section className="relative w-full h-[60vh]  overflow-hidden">
        <img
          src={blog?.featuredImage || blog?.imageUrl || blog?.image || "/placeholder-hero.jpg"}
          alt={blog?.imageAlt || blog?.title || "Blog cover"}
          className="w-full h-full object-cover brightness-50 absolute"
        />
        {/* Image Attribution */}
        {blog?.imageAttribution && (
          <div className="absolute top-4 right-4 z-10">
            <p className="text-xs text-white/70 bg-black/30 backdrop-blur px-2 py-1 rounded">
              {blog.imageAttribution}
            </p>
          </div>
        )}
        <div className="absolute md:px-0 px-4 inset-0 flex flex-col justify-end px-0 md:px-0 pb-10 text-white max-w-7xl mx-auto">
          <span className="bg-white/20 backdrop-blur px-4 py-2 rounded-full text-xs font-medium w-fit mb-3">
            {blog.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold mb-3 special-font ">
            {blog.title}
          </h1>
          <p className="text-sm text-gray-300">
            {"Trygve Studio Team"} •{" "}
            {blog?.createdAt ? new Date(blog.createdAt).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            }) : ""} • {readTime} min read
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl bg-[#F4F1EC] mx-auto md:px-0 px-4 mt-10 flex flex-col lg:flex-row gap-8">
        <div className="w-full">
          {contentData ? (
            <EditorJsRenderer content={contentData} />
          ) : (
            <div className="prose prose-lg max-w-none">
              {/* Fallback: render sanitized HTML or plain text if content isn’t valid Editor.js JSON */}
              {typeof blog?.content === "string" ? (
                <div
                  className="blog-content"
                  dangerouslySetInnerHTML={{ __html: sanitizeBlogContent(blog.content) }}
                />
              ) : (
                <p className="text-slate-600">No content available.</p>
              )}
            </div>
          )}

          {/* About Author Section (EEAT) */}
          <div className="mt-16 p-8 border border-gray-200 rounded-2xl bg-white shadow-sm flex flex-col md:flex-row items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden shrink-0 border-2 border-gray-50">
              <img src="/logo.webp" alt="Trygve Studio Team" className="w-full h-full object-contain p-2" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">About the Author: {"Trygve Studio Team"}</h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                The editorial team at <span className="font-medium text-black">Trygve Studio</span> consists of experienced architects and interior designers dedicated to sharing insights on modern architecture, luxury interiors, and sustainable design practices. With a portfolio spanning global projects, we aim to inspire and educate through expert-backed content.
              </p>
              <div className="mt-4 flex gap-4">
                <Link href="/about-us" className="text-sm font-medium text-blue-600 hover:underline">Learn more about our team →</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
      </div>

      {/* Connected Services */}
      <section className="max-w-7xl mx-auto py-10 md:px-0 px-4">
        <h2 className="text-2xl font-medium mb-4">
          {blog.connectedServices?.length > 0 ? "Connected Services" : "Our Core Services"}
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {blog.connectedServices?.length > 0 ? (
            blog.connectedServices.map((service, index) => (
              <li key={index} className="list-none">
                <Link
                  href={service.link}
                  className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-blue-600 font-medium"
                >
                  {service.name} →
                </Link>
              </li>
            ))
          ) : (
            <>
              <li className="list-none">
                <Link
                  href="/services/architects-in-lucknow"
                  className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-blue-600 font-medium"
                >
                  Architects in Lucknow →
                </Link>
              </li>
              <li className="list-none">
                <Link
                  href="/services/interior-design/lucknow"
                  className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-blue-600 font-medium"
                >
                  Interior Design Lucknow →
                </Link>
              </li>
              <li className="list-none">
                <Link
                  href="/services"
                  className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-blue-600 font-medium"
                >
                  3D Visualization Services →
                </Link>
              </li>
              <li className="list-none">
                <Link
                  href="/projects"
                  className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-blue-600 font-medium"
                >
                  Our Project Gallery →
                </Link>
              </li>
            </>
          )}
        </ul>
      </section>

      {/* FAQs */}
      {blog.faqs?.length > 0 && (
        <section className="max-w-7xl mx-auto py-10 px-4">
          <h2 className="text-2xl font-medium mb-4">FAQs</h2>
          <div className="space-y-4">
            {blog.faqs.map((faq) => (
              <FaqItem key={faq._id} faq={faq} />
            ))}
          </div>
        </section>
      )}

      {/* Related Blogs */}
      {blog.relatedBlog?.length > 0 && (
        <section className="max-w-7xl mx-auto py-10 px-4">
          <h2 className="text-2xl font-medium mb-4">Related Blogs</h2>
          <ul className="list-disc list-inside">
            {blog.relatedBlog.map((slug, index) => (
              <li key={index}>
                <a href={`/blogs/${slug}`} className="text-blue-600 underline">
                  {slug.replace(/-/g, " ")}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Business Info */}
      {/* {blog.businessName && (
        <section className="max-w-7xl mx-auto py-10 px-4">
          <h2 className="text-2xl font-medium mb-4">Business Information</h2>
          <p><strong>Name:</strong> {blog.businessName}</p>
          <p><strong>Address:</strong> {blog.address}</p>
          <p><strong>Phone:</strong> {blog.phone}</p>
        </section>
      )} */}

      {/* Contact Information */}
      <section className="max-w-7xl mx-auto py-10 md:px-0 px-4">
        <div className="border border-gray-300 rounded-lg bg-white/50 backdrop-blur p-6 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-gray-700 font-medium">Email:</span>
            <a
              href="mailto:faisal.saif@trygvestudio.com"
              className="text-blue-600 hover:underline"
            >
              faisal.saif@trygvestudio.com
            </a>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-gray-700 font-medium">Phone:</span>
            <a
              href="tel:+919554440400"
              className="text-blue-600 hover:underline"
            >
              +91 95544 40400
            </a>
          </div>

          <div className="pt-2 border-t border-gray-200">
            <div className="flex flex-wrap gap-4 mt-4">
              <Link
                href="/projects"
                className="text-gray-700 hover:text-black hover:underline font-medium"
              >
                View Our Projects
              </Link>
              <Link
                href="/about-us"
                className="text-gray-700 hover:text-black hover:underline font-medium"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
function Breadcrumbs({ title }) {
  return (
    <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 md:px-0 pt-16 -mb-24 relative z-20">
      <ol className="flex items-center space-x-2 text-[14px] text-gray-300">
        <li className="flex items-center">
          <Link href="/" className="flex items-center hover:text-white transition-colors">
            <FiHome className="mr-1.5" />
            <span>Home</span>
          </Link>
        </li>
        <li className="flex items-center gap-2">
          <FiChevronRight className="text-gray-500" />
          <Link href="/blogs" className="hover:text-white transition-colors">
            Blogs
          </Link>
        </li>
        <li className="flex items-center gap-2">
          <FiChevronRight className="text-gray-500" />
          <span className="font-semibold text-white whitespace-nowrap overflow-hidden text-ellipsis max-w-[200px] md:max-w-none">
            {title}
          </span>
        </li>
      </ol>
    </nav>
  );
}

"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FiSearch, FiFilter, FiGrid, FiList, FiArrowRight, FiCalendar, FiUser, FiClock } from "react-icons/fi";
import BlogCard from "@/components/BlogCard.jsx";
import BlogCardSkeleton from "@/components/BlogCardSkeleton";
import Link from "next/link";

export default function FiableBlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [submittedSearch, setSubmittedSearch] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setIsLoaded(true);
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`/api/blogs`);
        const data = await res.json();
        if (data && data.success) {
          const formatted = data.blogs.map((blog) => ({
            id: blog._id,
            image: blog.image,
            category: blog.category || "Construction",
            date: new Date(blog.createdAt).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            }),
            readTime: blog.readTime || "5 min read",
            title: blog.title,
            summary: blog.metaDescription,
            authorName: blog.author || "Fiable Team",
            authorImage: "/authors/fiable-team.jpg",
            timestamp: new Date(blog.createdAt).getTime(),
            views: blog.views || 0,
            slug: blog.urlSlug,
          }));
          setBlogs(formatted);
        }
      } catch (e) {
        console.error("Failed to fetch blogs", e);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const categories = useMemo(() => {
    const fiableCategories = [
      "All",
      "Waterproofing", 
      "Structural Retrofitting",
      "Industrial Flooring",
      "Construction Tips",
      "Project Updates",
      "Technology"
    ];
    const blogCategories = new Set();
    blogs.forEach((b) => b.category && blogCategories.add(b.category));
    return [...fiableCategories, ...Array.from(blogCategories).filter(cat => !fiableCategories.includes(cat))].slice(0, 8);
  }, [blogs]);

  const filteredPosts = useMemo(() => {
    let filtered = selectedCategory === "All" 
      ? [...blogs] 
      : blogs.filter((p) => p.category === selectedCategory);

    if (submittedSearch.trim()) {
      const t = submittedSearch.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(t) ||
          (p.summary || "").toLowerCase().includes(t) ||
          (p.category || "").toLowerCase().includes(t)
      );
    }

    return filtered.sort((a, b) => b.timestamp - a.timestamp);
  }, [blogs, selectedCategory, submittedSearch]);

  return (
    <main className="min-h-screen bg-[#F8F6F3]">
      {/* Fixed CTA */}
      <div className="fixed bottom-5 z-20 right-5">
        <Link href="/contact-us#project-form">
  <button className="group relative overflow-hidden bg-gradient-to-r from-[#4376BB] to-[#2c4a7d] hover:from-[#365a99] hover:to-[#1e3d6f] text-white px-8 py-3.5 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-out font-semibold text-sm flex items-center gap-3">
    {/* Background animation */}
    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
    
    {/* Icon */}
    
    
    {/* Text */}
    <span className="relative z-10">
      Start <span className="text-[#F4C500] font-bold">Project</span>
    </span>
    
    {/* Arrow */}
    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round"  strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  </button>
</Link>

      </div>

      {/* Minimal Hero */}
      <Hero
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={() => setSubmittedSearch(searchTerm)}
        isLoaded={isLoaded}
      />

      {/* Clean Navigation */}
      <Navigation
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        viewMode={viewMode}
        setViewMode={setViewMode}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={() => setSubmittedSearch(searchTerm)}
      />

      {/* Content Grid */}
      <section className="max-w-7xl  mx-auto px-6 pb-20">
        <div className={`${
          viewMode === 'grid' 
            ? 'grid sm:grid-cols-2 lg:grid-cols-3 gap-8' 
            : 'space-y-6'
        }`}>
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <BlogCardSkeleton key={i} />
              ))
            : filteredPosts.length > 0
            ? filteredPosts.map((post) => (
                <div
                  key={post.id}
                  onClick={() => router.push(`/blogs/${post.slug}`)}
                  className="cursor-pointer group"
                >
                  {viewMode === 'grid' ? (
                    <GridBlogCard {...post} />
                  ) : (
                    <ListBlogCard {...post} />
                  )}
                </div>
              ))
            : (
              <EmptyState
                reset={() => {
                  setSearchTerm("");
                  setSubmittedSearch("");
                  setSelectedCategory("All");
                }}
              />
            )}
        </div>
      </section>
    </main>
  );
}

/* --------------------------------- HERO --------------------------------- */

function Hero({ searchTerm, setSearchTerm, onSearch, isLoaded }) {
  return (
    <section className="pt-32 pb-20 bg-[#F8F6F3]">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-gray-900"></div>
            <span className="text-sm font-mono uppercase tracking-[0.2em] text-gray-600">
              Fiable Insights
            </span>
            <div className="w-8 h-px bg-gray-900"></div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl lg:text-5xl font-li ght text-gray-900 mb-8 leading-tight">
             <span className=" ">Knowledge</span> {" "}
             <span className="font-  text-[#4376BB] italic">Hub</span>
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed fon t-light">
            Expert insights on structural retrofitting, waterproofing solutions, 
            and construction best practices from 6+ years of industry experience
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onSearch();
              }}
              className="relative"
            >
              <div className="relative">
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search construction insights, tips & guides..."
                  className="w-full pl-12 pr-32 py-4 border border-gray-200 rounded-full focus:border-gray-400 focus:ring-2 focus:ring-gray-200 outline-none bg-white text-gray-900 placeholder:text-gray-500"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition-colors"
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- NAVIGATION -------------------------------- */

function Navigation({ 
  categories, 
  selectedCategory, 
  setSelectedCategory, 
  viewMode, 
  setViewMode,
  searchTerm,
  setSearchTerm,
  onSearch 
}) {
  return (
    <div className=" top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 text-sm font-medium transition-all border-b-2 ${
                  selectedCategory === cat
                    ? "text-gray-900 border-gray-900"
                    : "text-gray-600 border-transparent hover:text-gray-900 hover:border-gray-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* View Controls */}
          <div className="flex items-center gap-4">
            {/* Mobile Search */}
            <div className="md:hidden">
              <button
                onClick={() => {
                  const term = prompt("Search articles...");
                  if (term) {
                    setSearchTerm(term);
                    onSearch();
                  }
                }}
                className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <FiSearch className="w-5 h-5" />
              </button>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center border border-gray-200 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-gray-900 text-white' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <FiGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-gray-900 text-white' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <FiList className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------- BLOG CARDS -------------------------------- */

function GridBlogCard(post) {
  return (
    <article className="bg-[white] border border-gray-200 rounded-2xl overflow-hidden group hover:border-gray-300 hover:shadow-lg transition-all duration-300">
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden bg-gray-100">
        {post.image ? (
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <FiGrid className="w-12 h-12 text-gray-400" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-gray-500">
          {/* <span className="bg-gray-100 px-2 py-1 rounded-full font-medium">
            {post.category}
          </span> */}
          <div className="flex items-center gap-1">
            <FiCalendar className="w-3 h-3" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <FiClock className="w-3 h-3" />
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {post.title}
        </h3>

        {/* Summary */}
        {/* <p className="text-gray-600 line-clamp-3 leading-relaxed">
          {post.summary}
        </p> */}

        {/* Author */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <FiUser className="w-4 h-4 text-blue-600" />
            </div>
            <span className="text-sm text-gray-700 font-medium">{post.authorName}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-400 group-hover:text-gray-600 transition-colors font-medium">
            Read More {" "}
                      <FiArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />

          </div>
        </div>
      </div>
    </article>
  );
}

function ListBlogCard(post) {
  return (
    <article className="bg-white border border-gray-200 rounded-2xl p-6 group hover:border-gray-300 hover:shadow-md transition-all duration-300">
      <div className="flex gap-6">
        {/* Image */}
        <div className="flex-shrink-0 w-48 h-32 rounded-xl overflow-hidden bg-gray-100">
          {post.image ? (
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <FiGrid className="w-8 h-8 text-gray-400" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 space-y-3">
          {/* Meta */}
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span className="bg-gray-100 px-2 py-1 rounded-full font-medium">
              {post.category}
            </span>
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
            {post.title}
          </h3>

          {/* Summary */}
          <p className="text-gray-600 line-clamp-2 leading-relaxed">
            {post.summary}
          </p>

          {/* Author & CTA */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                <FiUser className="w-3 h-3 text-blue-600" />
              </div>
              <span className="text-sm text-gray-700">{post.authorName}</span>
            </div>
            <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </article>
  );
}

/* ------------------------------ EMPTY STATE ------------------------------ */

function EmptyState({ reset }) {
  return (
    <div className="col-span-full">
      <div className="text-center py-20">
        <div className="w-24 h-24 mx-auto bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
          <FiSearch className="w-12 h-12 text-gray-400" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-3">No articles found</h3>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          We couldn't find any articles matching your criteria. Try adjusting your search or browse all categories.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
        >
          <span>Reset Search</span>
          <FiArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

/* Custom CSS for hiding scrollbar */
const styles = `
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
`;

// Add styles to head
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

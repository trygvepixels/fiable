"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState, useCallback } from "react";
import ProjectCardSkeleton from "@/components/ProjectCardSkeleton";
import {
  FiSearch,
  FiGrid,
  FiMapPin,
  FiCalendar,
  FiChevronLeft,
  FiChevronRight,
  FiRefreshCw,
  FiArrowRight,
  FiTool,
  FiDroplet,
  FiHome,
} from "react-icons/fi";

/* ------------------------------- helpers ------------------------------- */

function slugify(s = "") {
  return s
    .toString()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function normalizeProjects(raw) {
  const arr = Array.isArray(raw?.items)
    ? raw.items
    : Array.isArray(raw?.data)
    ? raw.data
    : Array.isArray(raw)
    ? raw
    : [];

  return arr.map((p) => {
    const isFeature = "coverImage" in p || "galleryImages" in p;
    const cover = isFeature ? p.coverImage : p.cover;
    const gallery = isFeature ? p.galleryImages || [] : p.gallery || [];
    const title = p.title || "Untitled";
    const slug = p.slug || p._id || p.id || slugify(title);
    const type = p.type || (Array.isArray(p.tags) && p.tags.length ? p.tags[0] : "Project");
    const location = p.location || "";
    const description = p.description || p.blurb || "";
    const timeline = isFeature ? p.year : p.timeline;

    return {
      id: p._id || p.id || slug,
      slug: String(slug),
      title,
      cover,
      gallery,
      type,
      location,
      description,
      tags: p.tags || [],
      timeline: timeline || "",
      featured: Boolean(p.featured),
      createdAt: p.createdAt || p._createdAt || null,
      _raw: p,
    };
  });
}

function useDebouncedValue(value, delay = 300) {
  const [v, setV] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setV(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return v;
}

/* --------------------------------- UI ---------------------------------- */

function FilterTag({ active, children, onClick, count }) {
  return (
    <button
      onClick={onClick}
      className={`group relative px-4 py-1 text-sm font-medium transition-all duration-300 rounded-full border ${
        active
          ? "bg-gray-900 text-white border-gray-900 shadow-lg"
          : "bg-white text-gray-700 border-gray-200 hover:border-gray-400 hover:shadow-md"
      }`}
    >
      {children}
      {count && (
        <span className={`ml-2 text-xs ${active ? "text-gray-300" : "text-gray-500"}`}>
          {count}
        </span>
      )}
    </button>
  );
}

function ProjectCard({ item }) {
  const href = `/projects/${encodeURIComponent(item.slug)}`;
  
  const getServiceIcon = (type) => {
    switch (type?.toLowerCase()) {
      case 'waterproofing':
        return <FiDroplet className="w-4 h-4" />;
      case 'structural':
        return <FiHome className="w-4 h-4" />;
      case 'industrial':
        return <FiTool className="w-4 h-4" />;
      default:
        return <FiGrid className="w-4 h-4" />;
    }
  };

  return (
    <Link
      href={href}
      className="group block bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-gray-100"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        {item.cover ? (
          <img
            src={item.cover}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <FiGrid className="w-12 h-12 text-gray-400" />
          </div>
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Floating Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2">
            {getServiceIcon(item.type)}
            <span className="text-xs font-semibold text-gray-900 uppercase tracking-wide">
              {item.type}
            </span>
          </div>
          {item.featured && (
            <div className="bg-[#234D7E] text-white px-3 py-1.5 rounded-full">
              <span className="text-xs font-semibold uppercase">Featured</span>
            </div>
          )}
        </div>

        {/* View Project Button */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
          <div className="bg-white text-gray-900 px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
            <span className="text-sm font-semibold">View Project</span>
            <FiArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#234D7E] transition-colors">
            {item.title}
          </h3>
          {item.description && (
            <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
              {item.description}
            </p>
          )}
        </div>

        {/* Meta Info */}
        <div className="flex items-center gap-4 text-xs text-gray-500">
          {item.location && (
            <div className="flex items-center gap-1">
              <FiMapPin className="w-3 h-3" />
              <span>{item.location}</span>
            </div>
          )}
          {item.timeline && (
            <div className="flex items-center gap-1">
              <FiCalendar className="w-3 h-3" />
              <span>{item.timeline}</span>
            </div>
          )}
        </div>

        {/* Tags */}
        {item.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {item.tags.slice(0, 3).map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}

/* ------------------------------- page ------------------------------- */

export default function ProjectsClient() {
  const [projects, setProjects] = useState([]);
  const [allTags, setAllTags] = useState([]);
  const [type, setType] = useState("All");
  const [q, setQ] = useState("");
  const [tag, setTag] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const pageSize = 9;
  const qDebounced = useDebouncedValue(q, 300);

  const fetchSafely = useCallback(async (url, signal) => {
    const res = await fetch(url, { cache: "no-store", signal });
    if (!res.ok) throw new Error(`Fetch failed: ${url} -> ${res.status}`);
    return res.json();
  }, []);

  const load = useCallback(async () => {
    setLoading(true);
    setErrorMsg("");
    const ctrl = new AbortController();
    try {
      const [featRes, projRes] = await Promise.allSettled([
        fetchSafely("/api/feature-projects", ctrl.signal),
        fetchSafely("/api/projects", ctrl.signal),
      ]);

      const features = featRes.status === "fulfilled" ? normalizeProjects(featRes.value) : [];
      const standard = projRes.status === "fulfilled" ? normalizeProjects(projRes.value) : [];

      const byKey = new Map();
      const putAll = (list) => {
        for (const item of list) {
          const key = item.slug || item.id;
          if (!key) continue;
          if (!byKey.has(key)) byKey.set(key, item);
          else {
            const existing = byKey.get(key);
            const replace = (item.cover && !existing.cover) || (item.featured && !existing.featured);
            if (replace) byKey.set(key, item);
          }
        }
      };
      putAll(standard);
      putAll(features);

      let merged = Array.from(byKey.values());
      merged.sort((a, b) => {
        if (a.featured !== b.featured) return a.featured ? -1 : 1;
        return String(a.title).localeCompare(String(b.title));
      });

      setProjects(merged);
      const tags = Array.from(new Set(merged.flatMap((p) => (Array.isArray(p.tags) ? p.tags : []))));
      setAllTags(tags);
    } catch (e) {
      if (e.name !== "AbortError") {
        console.error(e);
        setErrorMsg("Unable to load projects. Please try again.");
        setProjects([]);
        setAllTags([]);
      }
    } finally {
      setLoading(false);
    }
    return () => ctrl.abort();
  }, [fetchSafely]);

  useEffect(() => {
    load();
  }, [load]);

  const filtered = useMemo(() => {
    let list = Array.isArray(projects) ? [...projects] : [];
    if (type && type !== "All") list = list.filter((p) => p.type === type);
    if (qDebounced) {
      const s = qDebounced.toLowerCase();
      list = list.filter((p) => {
        const tagsStr = Array.isArray(p.tags) ? p.tags.join(" ") : "";
        return (
          (p.title || "").toLowerCase().includes(s) ||
          (p.location || "").toLowerCase().includes(s) ||
          tagsStr.toLowerCase().includes(s)
        );
      });
    }
    if (tag) list = list.filter((p) => p.tags?.includes(tag));
    return list;
  }, [projects, type, qDebounced, tag]);

  const tagCounts = useMemo(() => {
    const counts = new Map();
    for (const p of filtered) for (const t of p.tags || []) counts.set(t, (counts.get(t) || 0) + 1);
    return Array.from(counts.entries())
      .sort((a, b) => (b[1] === a[1] ? a[0].localeCompare(b[0]) : b[1] - a[1]))
      .map(([name, count]) => ({ name, count }));
  }, [filtered]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  useEffect(() => {
    if (page > pageCount) setPage(pageCount);
  }, [pageCount, page]);

  const visible = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page]);

  const typeTabs = ["All", "Waterproofing", "Structural", "Industrial", "Flooring"];

  return (
    <main className="min-h-screen mt-16 bg-gray-50">
      {/* Fixed CTA */}
      <div className="fixed bottom-5 z-20 right-5">
        <Link href="/contact-us#project-form">
  <button className="group relative overflow-hidden bg-gradient-to-r from-[#234D7E] to-[#2c4a7d] hover:from-[#365a99] hover:to-[#1e3d6f] text-white px-8 py-3.5 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-out font-semibold text-sm flex items-center gap-3">
    {/* Background animation */}
    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
    
    {/* Icon */}
    
    
    {/* Text */}
    <span className="relative z-10">
      Start <span className="text-[# ] font-bold">Project</span>
    </span>
    
    {/* Arrow */}
    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round"  strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  </button>
</Link>

      </div>

      {/* Hero Section */}
      <section className="bg-[#FBF9F7]">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            {/* Badge */}
            <div className="flex items-center justify-center gap-3 text-sm font-medium tracking-wider text-gray-500 uppercase mb-6">
      <span className="w-10 h-px bg-gray-400" />
      Fiable Portfolio
      <span className="w-10 h-px bg-gray-400" />
    </div>
            {/* Title */}
            <h1 className="text-5xl lg:text-5xl fo nt-semibold text-gray-900 leading-tight">
              Our <span className="text-[#234D7E]">Projects</span> 
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Structural retrofitting, waterproofing, and industrial flooring solutions delivered with precision and excellence across India.
            </p>

            {/* Stats */}
              
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-t border-gray-200   top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                placeholder="Search projects..."
                value={q}
                onChange={(e) => {
                  setPage(1);
                  setQ(e.target.value);
                }}
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              />
            </div>

            {/* Service Type Filter */}
 
          </div>

          {/* Tags */}
          {tagCounts.length > 0 && (
            <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
              <FilterTag
                active={!tag}
                onClick={() => {
                  setTag("");
                  setPage(1);
                }}
              >
                All 
              </FilterTag>
              {tagCounts.slice(0, 8).map(({ name, count }) => (
                <FilterTag
                  key={name}
                  active={tag === name}
                  count={count}
                  onClick={() => {
                    setTag(name === tag ? "" : name);
                    setPage(1);
                  }}
                >
                  {name}
                </FilterTag>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        {errorMsg ? (
          <div className="text-center bg-white rounded-2xl p-12 border border-gray-200">
            <p className="text-gray-600 mb-4">{errorMsg}</p>
            <button
              onClick={() => load()}
              className="inline-flex items-center gap-2 bg-[#234D7E] text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
            >
              <FiRefreshCw className="w-4 h-4" />
              Retry
            </button>
          </div>
        ) : loading ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 9 }).map((_, i) => (
              <ProjectCardSkeleton key={i} />
            ))}
          </div>
        ) : visible.length === 0 ? (
          <div className="text-center bg-white rounded-2xl p-12 border border-gray-200">
            <FiGrid className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">No projects found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria.</p>
            <button
              onClick={() => {
                setQ("");
                setTag("");
                setType("All");
                setPage(1);
              }}
              className="bg-[#234D7E] text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((p) => (
                <ProjectCard key={p.id} item={p} />
              ))}
            </div>

            {/* Pagination */}
            {pageCount > 1 && (
              <div className="flex items-center justify-center gap-4 mt-16">
                <button
                  onClick={() => setPage((x) => Math.max(1, x - 1))}
                  disabled={page <= 1}
                  className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <FiChevronLeft className="w-4 h-4" />
                  Previous
                </button>
                
                <div className="flex items-center gap-2">
                  <span className="px-4 py-2 text-gray-600">
                    Page {page} of {pageCount}
                  </span>
                </div>

                <button
                  onClick={() => setPage((x) => Math.min(pageCount, x + 1))}
                  disabled={page >= pageCount}
                  className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  Next
                  <FiChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </>
        )}
      </section>
    </main>
  );
}

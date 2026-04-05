"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiEye } from "react-icons/fi";
import Link from "next/link";

export default function ProjectDetailClient({ project }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const accent = project.accentColor?.split(" ")[0] || "#FF6B35";
  const gallery = Array.isArray(project.gallery)
    ? project.gallery
    : Array.isArray(project.galleryImages)
      ? project.galleryImages.map((src) => ({ src, alt: project.title }))
      : [];

  return (
    <div className="min-h-screen py-20 bg-[#FBF9F7]">
      {/* Magazine Header */}
       

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 space-y-6">
              <h1 className="text-4xl lg:text-4xl font-semibold leading-tight text-gray-900">
                {project.title}
              </h1>
              {project.description && (
                <p className="text-xl text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              )}
            </div>
            <div className="space-y-4">
              <div className="bg-white shadow-xl rounded-2xl p-6">
                <h3 className="font-semibold mb-4">Project Details</h3>
                <div className="space-y-3">
                  {project.client && (
                    <div>
                      <span className="text-sm text-gray-500">Client</span>
                      <p className="font-medium">{project.client}</p>
                    </div>
                  )}
                  {project.year && (
                    <div>
                      <span className="text-sm text-gray-500">Year</span>
                      <p className="font-medium">{project.year}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Featured Image */}
        {project.coverImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={project.coverImage}
                alt={project.coverAlt || project.title}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        )}

        {/* Content Grid */}
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-16">
            {/* Stats Section */}
            {project.stats?.length > 0 && (
              <section>
                <h2 className="text-2xl font-semibold mb-8">Project Highlights</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {project.stats.map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="text-center p-8 rounded-2xl"
                      style={{ backgroundColor: `${accent}10` }}
                    >
                      <div
                        className="text-3xl font-semibold mb-2"
                        style={{ color: accent }}
                      >
                        {stat.value}
                      </div>
                      <p className="text-gray-600 font-medium">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </section>
            )}

            {/* Gallery Grid */}
            {gallery.length > 0 && (
              <section>
                <h2 className="text-2xl font-semibold mb-8">Project Gallery</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {gallery.map((img, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                      onClick={() => setLightboxIndex(i)}
                    >
                      <img
                        src={img.src}
                        alt={img.alt || `${project.title} detail ${i + 1}`}
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <FiEye className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Services */}
            {project.tags?.length > 0 && (
              <div className="bg-white shadow-xl rounded-2xl p-6">
                <h3 className="font-semibold mb-4">Services Provided</h3>
                <div className="space-y-2">
                  {project.tags.map((tag, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#FEC210" }}></div>
                      <span className="text-sm text-gray-700">{tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="space-y-3">
              {project.liveUrl && (
                <button
                  className="w-full py-3 rounded-xl font-semibold text-white transition-all hover:shadow-lg"
                  style={{ backgroundColor: accent }}
                >
                  <FiExternalLink className="inline mr-2" />
                  View Project
                </button>
              )}
              <Link href="/contact-us#project-form" className="w-full py-3 border-2 border-gray-200 rounded-xl font-semibold hover:border-gray-300 transition-colors">
                Request Quote
              </Link>
            </div>
          </aside>
        </div>
      </div>

      {/* Lightbox remains similar */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          <button
            className="absolute top-6 right-6 text-white text-3xl"
            onClick={() => setLightboxIndex(null)}
          >
            ×
          </button>
          <img
            src={gallery[lightboxIndex]?.src}
            alt={gallery[lightboxIndex]?.alt || `Project image ${lightboxIndex + 1}`}
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      )}
    </div>
  );
}

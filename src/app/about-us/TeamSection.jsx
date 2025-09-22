"use client";

import React, { useEffect, useState } from "react";
import { FiAlertCircle, FiFacebook, FiLinkedin, FiTwitter } from "react-icons/fi";

export default function TeamSection() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  const load = async () => {
    setLoading(true);
    setErr("");
    try {
      const res = await fetch("/api/teams?sort=order%20-createdAt", {
        cache: "no-store",
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error || "Failed to fetch team");
      setTeam(Array.isArray(json.items) ? json.items.filter((t) => t.active !== false) : []);
    } catch (e) {
      setErr(e.message || "Failed to load team");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <section className="bg-[#fcfcfb] py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
              Crafting Excellence as a Team
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl">
              Our success is built on the dedication and expertise of our team,
              who work together to bring innovative ideas and exceptional craftsmanship
              to every project. Together, we turn visions into reality.
            </p>
          </div>
          
        </div>

        {/* States */}
        {loading ? (
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-[300px] animate-pulse rounded-xl bg-gray-200" />
            ))}
          </div>
        ) : err ? (
          <div className="flex items-center gap-2 rounded bg-red-50 p-4 text-sm text-red-700">
            <FiAlertCircle /> {err}
            <button onClick={load} className="ml-2 underline text-red-800 hover:text-red-900">
              retry
            </button>
          </div>
        ) : team.length === 0 ? (
          <p className="text-gray-500">No team members yet.</p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member._id || member.slug}
                className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition group relative"
              >
                {/* Image + Overlay */}
                <div className="relative w-full aspect-[4/5]">
                  {member.image?.src ? (
                    <>
                      <img
                        src={member.image.src}
                        alt={member.image.alt || member.name}
                        className="h-full w-full object-cover"
                      />
                      {/* Overlay with social icons */}
                      
                    </>
                  ) : (
                    <div className="h-full w-full bg-gray-200 flex items-center justify-center text-gray-400 text-xs">
                      No image
                    </div>
                  )}
                </div>

                {/* Name + Role */}
                <div className="px-4 py-3">
                  <p className="font-medium text-gray-900">{member.name}</p>
                  {member.position && (
                    <p className="text-gray-500 text-sm">{member.position}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
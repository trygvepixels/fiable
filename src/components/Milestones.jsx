"use client";
import React, { useEffect, useState } from "react";

const FiableHeroSection = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const res = await fetch("/api/stats", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch stats");
        const data = await res.json();
        if (data?.stats) setStats(data.stats);
      } catch (err) {
        console.error("Error loading stats:", err);
      }
    };
    loadStats();
  }, []);

  // Split stats into rows of 4
  const chunkedStats = [];
  for (let i = 0; i < stats.length; i += 4) {
    chunkedStats.push(stats.slice(i, i + 4));
  }

  return (
    <div className="bg-[#f4f1ec68]">
      <div className="max-w-7xl px-6 mx-auto">
        <section className="container mx-auto">
          <div className="grid lg:grid-cols- gap-16 items-start">
            {/* Left Content */}
            <div className="space-y-6">
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-semibold mt-20 text-black leading-tight mb-6">
                  At <span className="text-[#4376BB]">Fiable</span>, we engineer the{" "}
                  <span className="text-zinc-400">future of construction</span>
                </h1>

                <p className="text-lg text-gray-700 leading-relaxed">
                  delivering reliable{" "}
                  <span className="text-[#2E5DA5] text-2xl font-medium">
                    waterproofing, flooring, structural rehabilitation
                  </span>
                  , and industrial solutions. With a skilled team of architects and
                  engineers, backed by advanced technology and trusted chemical
                  partners, we guarantee precision, durability, and long-term value.
                </p>
              </div>

              {/* Stats Rows */}
              <div className="space-y-10 md:mt-16 mt-10 md:mb-0 mb-16">
                {chunkedStats.map((row, rowIndex) => (
                  <div
                    key={rowIndex}
                    className="grid grid-cols-2 sm:grid-cols-4 gap-8"
                  >
                    {row.map((stat, i) => (
                      <div key={i}>
                        <div className="text-3xl md:text-6xl text-center font-semibold text-black mb-1">
                          {stat.value}
                        </div>
                        <div className="text-sm md:text-xl text-center text-gray-600">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content */}
            <div className="hidden lg:block">
              {/* Reserved for visuals or future imagery */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FiableHeroSection;

"use client";
import React, { useEffect, useState } from "react";

const FiableHeroSection = () => {
  const [stats, setStats] = useState([]);
  const [content, setContent] = useState({
    heading: "At Fiable, we engineer the",
    highlight: "future of construction",
    body: "delivering reliable waterproofing, flooring, structural rehabilitation, and industrial solutions. With a skilled team of civil engineers and applicators, backed by advanced technology and trusted chemical partners, we guarantee precision, durability, and long-term value.",
  });

    useEffect(() => {
      const loadStats = async () => {
        try {
          const res = await fetch("/api/stats", { cache: "no-store" });
          if (!res.ok) throw new Error("Failed to fetch stats");
          const data = await res.json();
          const defaultStats = [
            { value: "100+", label: "Projects Completed" },
            { value: "50+", label: "Happy Clients" },
            { value: "5+", label: "Years Experience" },
            { value: "8+", label: "Cities We've Worked In" },
          ];
          setStats(data?.stats?.length > 0 ? data.stats : defaultStats);
        } catch (err) {
          console.error("Error loading stats:", err);
          setStats([
            { value: "100+", label: "Projects Completed" },
            { value: "50+", label: "Happy Clients" },
            { value: "5+", label: "Years Experience" },
          ]);
        }
      };
      
      const loadSettings = async () => {
        try {
          const res = await fetch("/api/homepage-settings");
          if (res.ok) {
            const data = await res.json();
            if (data.milestonesSection) {
              setContent(data.milestonesSection);
            }
          }
        } catch (err) {
          console.error("Error loading milestone settings:", err);
        }
      };

      loadStats();
      loadSettings();
    }, []);

  // Split stats into rows of 4
  const chunkedStats = [];
  for (let i = 0; i < stats.length; i += 4) {
    chunkedStats.push(stats.slice(i, i + 4));
  }

  return (
    <div className="bg-[#f4f1ec68]">
      <div className="max-w-7xl tracking-tight px-6 mx-auto">
        <section className="container mx-auto">
          <div className="grid lg:grid-cols- gap-16 items-start">
            {/* Left Content */}
            <div className="space-y-6">
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-semibold mt-20 text-black leading-tight mb-6">
                  {content.heading}{" "}
                  <span className="text-[#234D7E]">{content.highlight}</span>
                </h1>

                <p className="text-lg text-[#5f6570] leading-relaxed">
                  {content.body}
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
                        <div className="text-2xl md:text-4xl text-center font-semibold text-black mb-1">
                          {stat.value}
                        </div>
                        <div className="text-sm md:text-lg text-center text-gray-600">
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

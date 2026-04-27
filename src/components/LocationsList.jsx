"use client";

import { useEffect, useState } from "react";
import { FiMapPin, FiHome, FiBriefcase, FiUsers, FiTool } from "react-icons/fi";

const typeIcons = {
  "head-office": <FiHome />,
  branch: <FiBriefcase />,
  "meeting-space": <FiUsers />,
  "project-office": <FiBriefcase />,
  "service-center": <FiTool />,
};

export default function LocationsList() {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLocations() {
      try {
        const res = await fetch("/api/locations");
        if (!res.ok) throw new Error("Failed to fetch locations");
        const data = await res.json();
        setLocations(data.items || data); // adapt based on your API response
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchLocations();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <p className="text-gray-500 animate-pulse">Loading locations...</p>
      </div>
    );
  }

  if (!locations.length) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <p className="text-gray-500">No locations found.</p>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4">
       <div className="flex items-ce nter flex-col gap-6 w-full ">
        {locations.map((loc) => (
          <div
            key={loc._id}
            className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#234D7E] text-white flex items-center justify-center text-xl">
                {typeIcons[loc.type] || <FiMapPin />}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {loc.name}
                </h3>
                <p className="text-sm text-gray-500 capitalize">{loc.type.replace("-", " ")}</p>
              </div>
            </div>

            <div className="mt-4 text-sm text-gray-600 leading-relaxed">
              {loc.address?.street && <p>{loc.address.street}</p>}
              <p>
                {[loc.address?.city, loc.address?.state, loc.address?.pincode]
                  .filter(Boolean)
                  .join(", ")}
              </p>
              <p>{loc.address?.country}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

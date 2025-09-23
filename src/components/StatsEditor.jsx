"use client";
import { useEffect, useState } from "react";

export default function StatsEditor() {
  const [stats, setStats] = useState([
    { value: "200+", label: "Projects Complete" },
    { value: "95%", label: "Client Satisfaction" },
    { value: "4+", label: "Years Experience" },
    { value: "50+", label: "Ongoing Projects" }
  ]);
  const [loading, setLoading] = useState(true);

  // Load existing stats from backend
  useEffect(() => {
    const loadStats = async () => {
      try {
        const res = await fetch("/api/stats");
        if (res.ok) {
          const data = await res.json();
          if (data?.stats) setStats(data.stats);
        }
      } catch (err) {
        console.error("Failed to load stats:", err);
      } finally {
        setLoading(false);
      }
    };
    loadStats();
  }, []);

  // Update stat item
  const updateStat = (index, key, value) => {
    const next = [...stats];
    next[index][key] = value;
    setStats(next);
  };

  // Add a new stat row
  const addStat = () => {
    setStats([...stats, { value: "", label: "" }]);
  };

  // Remove a stat row
  const removeStat = (index) => {
    setStats(stats.filter((_, i) => i !== index));
  };

  // Save stats to backend
  const saveStats = async () => {
    try {
      const res = await fetch("/api/stats", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ stats }),
      });
      if (!res.ok) throw new Error("Failed to save stats");
      alert("✅ Stats updated successfully!");
    } catch (err) {
      alert("❌ Error saving stats: " + err.message);
    }
  };

  if (loading) {
    return <div className="p-6 text-gray-500">Loading stats...</div>;
  }

  return (
    <div className="p-6 max-w-7xl mt-32 mx-auto space-y-6">
      <h2 className="text-2xl font-bold">Manage Company Stats</h2>

      {stats.map((stat, i) => (
        <div
          key={i}
          className="flex items-center gap-3 bg-gray-50 p-4 rounded border"
        >
          <input
            type="text"
            value={stat.value}
            onChange={(e) => updateStat(i, "value", e.target.value)}
            placeholder="Value (e.g. 200+)"
            className="border p-2 flex-1 rounded"
          />
          <input
            type="text"
            value={stat.label}
            onChange={(e) => updateStat(i, "label", e.target.value)}
            placeholder="Label (e.g. Projects Complete)"
            className="border p-2 flex-1 rounded"
          />
          <button
            onClick={() => removeStat(i)}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            ✕
          </button>
        </div>
      ))}

      <div className="flex gap-4">
        <button
          onClick={addStat}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          + Add Stat
        </button>
        <button
          onClick={saveStats}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          💾 Save Stats
        </button>
      </div>
    </div>
  );
}

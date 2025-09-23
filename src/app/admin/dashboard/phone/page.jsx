"use client";
import { useEffect, useState } from "react";

export default function PhoneEditor() {
  const [primary, setPrimary] = useState("");
  const [secondary, setSecondary] = useState("");
  const [loading, setLoading] = useState(true);

  // Load phone numbers
  useEffect(() => {
    const loadPhones = async () => {
      try {
        const res = await fetch("/api/phone");
        if (res.ok) {
          const data = await res.json();
          if (data?.primary) setPrimary(data.primary);
          if (data?.secondary) setSecondary(data.secondary);
        }
      } catch (err) {
        console.error("Failed to load phone numbers:", err);
      } finally {
        setLoading(false);
      }
    };
    loadPhones();
  }, []);

  const savePhones = async () => {
    try {
      const res = await fetch("/api/phone", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ primary, secondary }),
      });
      if (!res.ok) throw new Error("Failed to save phone numbers");
      alert("✅ Phone numbers updated successfully!");
    } catch (err) {
      alert("❌ Error saving numbers: " + err.message);
    }
  };

  if (loading) return <div className="p-6 text-gray-500">Loading...</div>;

  return (
    <div className="p-6 max-w-lg mx-auto space-y-6">
      <h2 className="text-2xl font-bold">Manage Phone Numbers</h2>

      <div className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Primary Number</label>
          <input
            type="text"
            value={primary}
            onChange={(e) => setPrimary(e.target.value)}
            placeholder="+91 7233809199"
            className="border p-2 w-full rounded"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Secondary Number</label>
          <input
            type="text"
            value={secondary}
            onChange={(e) => setSecondary(e.target.value)}
            placeholder="+91 9044 072226"
            className="border p-2 w-full rounded"
          />
        </div>
      </div>

      <button
        onClick={savePhones}
        className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Save Numbers
      </button>
    </div>
  );
}

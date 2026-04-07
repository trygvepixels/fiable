// src/components/admin/HomepageSettingsEditor.jsx
"use client";

import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

export default function HomepageSettingsEditor() {
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await fetch("/api/homepage-settings");
        if (res.ok) {
          const data = await res.json();
          setSettings(data);
        }
      } catch (err) {
        console.error("Fetch settings error:", err);
        toast.error("Failed to load settings");
      } finally {
        setLoading(false);
      }
    };
    fetchSettings();
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch("/api/homepage-settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings),
      });
      if (res.ok) {
        toast.success("Settings updated successfully!");
      } else {
        toast.error("Failed to save settings");
      }
    } catch (err) {
      console.error("Save settings error:", err);
      toast.error("Error saving settings");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="p-8">Loading settings...</div>;
  if (!settings) return <div className="p-8">No settings found.</div>;

  return (
    <form onSubmit={handleSave} className="space-y-12">
      {/* Trust Section */}
      <section className="bg-white p-8 rounded-3xl border border-zinc-200">
        <h3 className="text-xl font-bold mb-6 text-blue-600">Trust Section</h3>
        <div className="grid gap-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Heading</label>
            <input
              type="text"
              className="w-full p-4 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-blue-500 outline-none"
              value={settings.trustSection?.heading || ""}
              onChange={(e) => setSettings({ ...settings, trustSection: { ...settings.trustSection, heading: e.target.value } })}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Body Text</label>
            <textarea
              className="w-full p-4 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-blue-500 outline-none h-32"
              value={settings.trustSection?.body || ""}
              onChange={(e) => setSettings({ ...settings, trustSection: { ...settings.trustSection, body: e.target.value } })}
            ></textarea>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="bg-white p-8 rounded-3xl border border-zinc-200">
        <h3 className="text-xl font-bold mb-6 text-emerald-600">Location SEO Section</h3>
        <div className="grid gap-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Heading (e.g. Waterproofing Services in Lucknow)</label>
            <input
              type="text"
              className="w-full p-4 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-emerald-500 outline-none"
              value={settings.locationSection?.heading || ""}
              onChange={(e) => setSettings({ ...settings, locationSection: { ...settings.locationSection, heading: e.target.value } })}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Body Text</label>
            <textarea
              className="w-full p-4 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-emerald-500 outline-none h-32"
              value={settings.locationSection?.body || ""}
              onChange={(e) => setSettings({ ...settings, locationSection: { ...settings.locationSection, body: e.target.value } })}
            ></textarea>
          </div>
        </div>
      </section>

      {/* Other Headings */}
      <div className="grid md:grid-cols-2 gap-8">
        <section className="bg-white p-8 rounded-3xl border border-zinc-200">
          <h3 className="text-xl font-bold mb-6 text-amber-600">Services Heading</h3>
          <div className="grid gap-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Heading</label>
              <input
                type="text"
                className="w-full p-4 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-amber-500 outline-none"
                value={settings.servicesSection?.heading || ""}
                onChange={(e) => setSettings({ ...settings, servicesSection: { ...settings.servicesSection, heading: e.target.value } })}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Subheading</label>
              <textarea
                className="w-full p-4 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-amber-500 outline-none h-32"
                value={settings.servicesSection?.subheading || ""}
                onChange={(e) => setSettings({ ...settings, servicesSection: { ...settings.servicesSection, subheading: e.target.value } })}
              ></textarea>
            </div>
          </div>
        </section>

        <section className="bg-white p-8 rounded-3xl border border-zinc-200">
          <h3 className="text-xl font-bold mb-6 text-indigo-600">Testimonials Section</h3>
          <div className="grid gap-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Heading</label>
              <input
                type="text"
                className="w-full p-4 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-indigo-500 outline-none"
                value={settings.testimonialsSection?.heading || ""}
                onChange={(e) => setSettings({ ...settings, testimonialsSection: { ...settings.testimonialsSection, heading: e.target.value } })}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Subheading</label>
              <textarea
                className="w-full p-4 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-indigo-500 outline-none h-24"
                value={settings.testimonialsSection?.subheading || ""}
                onChange={(e) => setSettings({ ...settings, testimonialsSection: { ...settings.testimonialsSection, subheading: e.target.value } })}
              ></textarea>
            </div>
          </div>
        </section>
      </div>

      {/* Why Choose Us & Milestones Section */}
      <div className="grid md:grid-cols-2 gap-8">
        <section className="bg-white p-8 rounded-3xl border border-zinc-200">
          <h3 className="text-xl font-bold mb-6 text-teal-600">Why Choose Us</h3>
          <div className="grid gap-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Heading</label>
              <input
                type="text"
                className="w-full p-4 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-teal-500 outline-none"
                value={settings.whyChooseUsSection?.heading || ""}
                onChange={(e) => setSettings({ ...settings, whyChooseUsSection: { ...settings.whyChooseUsSection, heading: e.target.value } })}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Highlight (Blue Text)</label>
              <input
                type="text"
                className="w-full p-4 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-teal-500 outline-none"
                value={settings.whyChooseUsSection?.highlight || ""}
                onChange={(e) => setSettings({ ...settings, whyChooseUsSection: { ...settings.whyChooseUsSection, highlight: e.target.value } })}
              />
            </div>
          </div>
        </section>

        <section className="bg-white p-8 rounded-3xl border border-zinc-200">
          <h3 className="text-xl font-bold mb-6 text-purple-600">Milestones Section</h3>
          <div className="grid gap-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Heading</label>
              <input
                type="text"
                className="w-full p-4 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-purple-500 outline-none"
                value={settings.milestonesSection?.heading || ""}
                onChange={(e) => setSettings({ ...settings, milestonesSection: { ...settings.milestonesSection, heading: e.target.value } })}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Highlight</label>
              <input
                type="text"
                className="w-full p-4 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-purple-500 outline-none"
                value={settings.milestonesSection?.highlight || ""}
                onChange={(e) => setSettings({ ...settings, milestonesSection: { ...settings.milestonesSection, highlight: e.target.value } })}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Description</label>
              <textarea
                className="w-full p-4 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-purple-500 outline-none h-32"
                value={settings.milestonesSection?.body || ""}
                onChange={(e) => setSettings({ ...settings, milestonesSection: { ...settings.milestonesSection, body: e.target.value } })}
              ></textarea>
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className="bg-white p-8 rounded-3xl border border-zinc-200">
        <h3 className="text-xl font-bold mb-6 text-rose-600">Bottom CTA Section</h3>
        <div className="grid gap-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Heading</label>
            <input
              type="text"
              className="w-full p-4 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-rose-500 outline-none"
              value={settings.ctaSection?.heading || ""}
              onChange={(e) => setSettings({ ...settings, ctaSection: { ...settings.ctaSection, heading: e.target.value } })}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Subheading</label>
            <input
              type="text"
              className="w-full p-4 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-rose-500 outline-none"
              value={settings.ctaSection?.subheading || ""}
              onChange={(e) => setSettings({ ...settings, ctaSection: { ...settings.ctaSection, subheading: e.target.value } })}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Button Text</label>
            <input
              type="text"
              className="w-full p-4 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-rose-500 outline-none"
              value={settings.ctaSection?.buttonText || ""}
              onChange={(e) => setSettings({ ...settings, ctaSection: { ...settings.ctaSection, buttonText: e.target.value } })}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Phone</label>
            <input
              type="text"
              className="w-full p-4 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-rose-500 outline-none"
              value={settings.ctaSection?.phone || ""}
              onChange={(e) => setSettings({ ...settings, ctaSection: { ...settings.ctaSection, phone: e.target.value } })}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="text"
              className="w-full p-4 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-rose-500 outline-none"
              value={settings.ctaSection?.email || ""}
              onChange={(e) => setSettings({ ...settings, ctaSection: { ...settings.ctaSection, email: e.target.value } })}
            />
          </div>
        </div>
      </section>

      {/* Floating CTA Section */}
      <section className="bg-white p-8 rounded-3xl border border-zinc-200">
        <h3 className="text-xl font-bold mb-6 text-emerald-600">Floating CTA (Bottom Right)</h3>
        <div className="grid gap-6">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="showFloatingCta"
              className="w-5 h-5 accent-emerald-600"
              checked={settings.floatingCta?.show ?? true}
              onChange={(e) => setSettings({ ...settings, floatingCta: { ...settings.floatingCta, show: e.target.checked } })}
            />
            <label htmlFor="showFloatingCta" className="text-sm font-semibold">Enable Floating Button</label>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Button Text</label>
            <input
              type="text"
              className="w-full p-4 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-emerald-500 outline-none"
              value={settings.floatingCta?.text || ""}
              onChange={(e) => setSettings({ ...settings, floatingCta: { ...settings.floatingCta, text: e.target.value } })}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Button Link</label>
            <input
              type="text"
              className="w-full p-4 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-emerald-500 outline-none"
              value={settings.floatingCta?.link || ""}
              onChange={(e) => setSettings({ ...settings, floatingCta: { ...settings.floatingCta, link: e.target.value } })}
            />
          </div>
        </div>
      </section>

      <button
        type="submit"
        disabled={saving}
        className="w-full bg-zinc-900 text-white p-6 rounded-3xl font-bold text-xl hover:bg-zinc-800 transition-all shadow-xl disabled:opacity-50"
      >
        {saving ? "Saving Changes..." : "Update Homepage Content"}
      </button>
    </form>
  );
}

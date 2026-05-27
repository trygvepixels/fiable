"use client";

import { useEffect, useMemo, useState } from "react";
import { X, Phone, User, Briefcase, Send } from "lucide-react";
import { usePathname } from "next/navigation";

const services = [
  "Waterproofing Services",
  "Structural Rehabilitation",
  "Industrial Flooring Systems",
  "Industrial Grouting Services",
  "Concrete Cutting & Demolition",
  "Anchor/Rebar Services",
  "Civil Construction",
  "Other",
];

const serviceByPath = {
  "waterproofing-services": "Waterproofing Services",
  "structural-rehabilitation": "Structural Rehabilitation",
  "industrial-flooring-systems": "Industrial Flooring Systems",
  "industrial-grouting-services": "Industrial Grouting Services",
  "concrete-cutting-demolition": "Concrete Cutting & Demolition",
  "anchor-rebar-services": "Anchor/Rebar Services",
  "civil-construction": "Civil Construction",
};

function inferService(pathname) {
  const match = Object.entries(serviceByPath).find(([slug]) => pathname?.includes(slug));
  return match?.[1] || "";
}

export default function ServiceLeadPopup() {
  const pathname = usePathname();
  const inferredService = useMemo(() => inferService(pathname), [pathname]);
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: inferredService || "Waterproofing Services",
  });

  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      service: inferredService || prev.service || "Waterproofing Services",
    }));
  }, [inferredService]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.sessionStorage.getItem("fiable-service-popup-dismissed") === "1") return;

    const timer = window.setTimeout(() => setOpen(true), 10000);
    return () => window.clearTimeout(timer);
  }, []);

  function closePopup() {
    setOpen(false);
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem("fiable-service-popup-dismissed", "1");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (submitting) return;

    const digits = form.phone.replace(/\D/g, "");
    if (!form.name.trim() || digits.length < 10 || !form.service) {
      setStatus({
        type: "error",
        message: "Please enter your name, valid phone number, and service.",
      });
      return;
    }

    setSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const res = await fetch("/api/submitContact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          phone: form.phone.trim(),
          service: form.service,
          projectType: form.service,
          source: "10-second service popup",
          page: pathname,
          submittedAt: new Date().toISOString(),
        }),
      });

      const result = await res.json().catch(() => ({}));
      if (!res.ok || !result?.success) {
        throw new Error(result?.error || "Failed to submit enquiry");
      }

      setStatus({
        type: "success",
        message: "Thanks. Our team will call you soon.",
      });
      window.sessionStorage.setItem("fiable-service-popup-dismissed", "1");
      window.setTimeout(() => setOpen(false), 1200);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center bg-black/45 px-4 pb-5 backdrop-blur-sm sm:items-center sm:pb-0">
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/20 bg-[#f4f1ec] shadow-2xl">
        <button
          type="button"
          onClick={closePopup}
          aria-label="Close enquiry popup"
          className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white text-zinc-700 transition hover:text-zinc-950"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="border-b border-black/10 bg-white px-6 py-5 pr-16">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#234D7E]">
            Free Site Inspection
          </p>
          <h2 className="mt-2 text-xl font-semibold tracking-tight text-zinc-950">
            Tell us your requirement
          </h2>
          <p className="mt-2 text-sm leading-6 text-zinc-600">
            Share your name, phone, and service. We will contact you with the next step.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 px-6 py-5">
          <label className="block">
            <span className="mb-2 block text-xs font-semibold text-zinc-700">Name</span>
            <div className="flex items-center gap-3 rounded-xl border border-black/10 bg-white px-3">
              <User className="h-4 w-4 text-[#234D7E]" />
              <input
                value={form.name}
                onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                required
                placeholder="Your full name"
                className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-zinc-400"
              />
            </div>
          </label>

          <label className="block">
            <span className="mb-2 block text-xs font-semibold text-zinc-700">Phone</span>
            <div className="flex items-center gap-3 rounded-xl border border-black/10 bg-white px-3">
              <Phone className="h-4 w-4 text-[#234D7E]" />
              <input
                value={form.phone}
                onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
                required
                inputMode="tel"
                placeholder="+91 98765 43210"
                className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-zinc-400"
              />
            </div>
          </label>

          <label className="block">
            <span className="mb-2 block text-xs font-semibold text-zinc-700">Service</span>
            <div className="flex items-center gap-3 rounded-xl border border-black/10 bg-white px-3">
              <Briefcase className="h-4 w-4 text-[#234D7E]" />
              <select
                value={form.service}
                onChange={(e) => setForm((prev) => ({ ...prev, service: e.target.value }))}
                required
                className="h-12 w-full bg-transparent text-sm outline-none"
              >
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
          </label>

          {status.message ? (
            <p
              className={`rounded-xl px-3 py-2 text-xs font-medium ${
                status.type === "success"
                  ? "bg-emerald-50 text-emerald-700"
                  : "bg-red-50 text-red-700"
              }`}
            >
              {status.message}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={submitting}
            className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-[#234D7E] text-sm font-semibold text-white transition hover:bg-[#1b3b62] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? "Submitting..." : "Submit Enquiry"}
            <Send className="ml-2 h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
}

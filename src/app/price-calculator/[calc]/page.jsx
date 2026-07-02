import React from "react";
import CalculatorContent from "./CalculatorContent";
import { SITE_URL } from "@/lib/site";

// Generate paths for all calculators during static build
export async function generateStaticParams() {
  return [
    { calc: "waterproofing" },
    { calc: "core-cutting" },
    { calc: "chemical-anchoring" },
    { calc: "epoxy-flooring" },
    { calc: "grouting" },
    { calc: "structural-rehab" },
  ];
}

const META_MAP = {
  waterproofing: {
    title: "Waterproofing Cost Estimator | Fiable Building Solutions",
    description: "Estimate the waterproofing cost for terraces, basements, bathrooms, and walls in Uttar Pradesh. Get a detailed multi-layer system price breakdown.",
  },
  "core-cutting": {
    title: "Concrete Core Cutting Cost Estimator | Fiable",
    description: "Calculate concrete core cutting and diamond drilling costs in UP based on hole diameter, depth, and structural parameters.",
  },
  "chemical-anchoring": {
    title: "Chemical Anchoring & Rebar Cost Estimator | Fiable",
    description: "Calculate costs and resin consumption volume for post-installed rebars and threaded rods in concrete extensions.",
  },
  "epoxy-flooring": {
    title: "Industrial Epoxy & PU Flooring Cost Estimator | Fiable",
    description: "Calculate estimated cost per square foot for industrial self-leveling epoxy flooring, PU screed, and ESD coatings in UP.",
  },
  grouting: {
    title: "Machine Grouting & GP2 Volume Calculator | Fiable",
    description: "Calculate non-shrink GP2 cementitious grout volume (liters) and total bag counts required for machine base plates.",
  },
  "structural-rehab": {
    title: "Structural Rehabilitation Cost Estimator | Fiable",
    description: "Estimate carbon fiber wrapping (CFRP), concrete jacketing, and epoxy crack injection repair costs in Uttar Pradesh.",
  }
};

export async function generateMetadata({ params }) {
  const { calc } = await params;
  const meta = META_MAP[calc] || META_MAP.waterproofing;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `${SITE_URL}/price-calculator/${calc}`,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${SITE_URL}/price-calculator/${calc}`,
      images: [{ url: "/services_cutting.png", alt: meta.title }],
    },
  };
}

export default async function Page({ params }) {
  const { calc } = await params;
  
  // Guard clause for invalid params to prevent crashes
  const resolvedCalc = META_MAP[calc] ? calc : "waterproofing";

  return <CalculatorContent calc={resolvedCalc} />;
}

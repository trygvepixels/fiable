import React from "react";
import Hero from "@/components/Hero";
import AllServices from "@/components/AllServices";
import Milestones from "@/components/Milestones";
import ContactCta from "@/components/ContactCta";
import Testimonials from "@/components/Testimonials";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import WhyChooseUsFiable from "@/components/WhyChooseUsFiable";
import LocationSEO from "@/components/LocationSEO";
import FloatingCTA from "@/components/FloatingCTA";
import ClientsMarquee from "@/components/ClientsMarquee";
import OfficeMapSection from "@/components/OfficeMapSection";
import StepsSection from "@/components/StepsSection";
import HomepageFAQs from "@/components/HomepageFAQs";
import EEATTrustBar from "@/components/EEATTrustBar";
import PainPointsGrid from "@/components/PainPointsGrid";
import ChemicalAlliances from "@/components/ChemicalAlliances";
import TrustSection from "@/components/TrustSection";

import { connectDB } from "@/lib/mongodb";
import HeroModel from "@/models/Hero";
import ServiceModel from "@/models/Service";
import StatsModel from "@/models/Stats";
import TestimonialModel from "@/models/Testimonial";
import HomepageSettingsModel from "@/models/HomepageSettings";

// Dynamic routing settings
export const dynamic = "force-dynamic";
export const revalidate = 0;

const fallbackHero = {
  title: "Waterproofing & Structural Repair Services in Lucknow & India",
  rotatingWords: ["waterproofing", "repair", "flooring", "rehabilitation"],
  backgroundImages: ["/hero_waterproofing.png"],
  description:
    "Expert waterproofing, structural rehabilitation, industrial flooring & grouting for residential, commercial, and industrial projects across Lucknow, Delhi NCR & India.",
  cta1Text: "Get Free Site Inspection",
  cta1Link: "/contact-us#project-form",
  cta2Text: "Request a Quote",
  cta2Link: "/contact-us",
};

const fallbackServices = [
  {
    _id: "fallback-waterproofing",
    slug: "waterproofing-services",
    title: "Waterproofing Services",
    summary:
      "End-to-end waterproofing systems for terraces, basements, podiums, wet areas, retaining walls, and exposed concrete surfaces.",
    tag: "Leakage Control",
  },
  {
    _id: "fallback-structural",
    slug: "structural-rehabilitation",
    title: "Structural Rehabilitation",
    summary:
      "Repair and strengthening solutions for deteriorated RCC members, cracked slabs, columns, beams, and aging civil structures.",
    tag: "Repair & Strengthening",
  },
  {
    _id: "fallback-flooring",
    slug: "industrial-flooring-systems",
    title: "Industrial Flooring Systems",
    summary:
      "High-performance epoxy, PU, and heavy-duty floor systems built for factories, warehouses, food units, and process plants.",
    tag: "Industrial Finish",
  },
  {
    _id: "fallback-grouting",
    slug: "industrial-grouting-services",
    title: "Industrial Grouting Services",
    summary:
      "Precision grouting for machine foundations, base plates, structural gaps, anchors, and heavy equipment support zones.",
    tag: "Machine Foundations",
  },
];

const fallbackStats = [
  { value: "100+", label: "Projects Completed" },
  { value: "50+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "8+", label: "Cities We've Worked In" },
];

const fallbackHomepageSettings = {
  trustSection: {
    heading: "Reliable Building Repair & Waterproofing Experts",
    body: "We specialize in delivering high-quality waterproofing services, structural repair, and concrete rehabilitation solutions. With years of experience and advanced techniques, we ensure long-lasting protection and durability for your structures.",
  },
  locationSection: {
    heading: "Waterproofing Services in Lucknow",
    body: "We provide professional waterproofing and building repair services across Lucknow and nearby areas. Whether it's residential leakage issues or large-scale industrial flooring, our team ensures reliable and effective solutions.",
  },
  servicesSection: {
    heading: "Our Core Services",
  },
  testimonialsSection: {
    heading: "What Our Clients Say",
  },
  whyChooseUsSection: {
    heading: "Why choose",
    highlight: "Fiable Building Solutions?",
  },
  milestonesSection: {
    heading: "At Fiable, we engineer the",
    highlight: "future of construction",
    body: "delivering reliable waterproofing, flooring, structural rehabilitation, and industrial solutions. With a skilled team of civil engineers and applicators, backed by advanced technology and trusted chemical partners, we guarantee precision, durability, and long-term value.",
  },
  ctaSection: {
    heading: "Facing Leakage or Structural Issues?",
    subheading: "Get expert help today from trusted waterproofing contractors.",
    buttonText: "Book Free Inspection",
  },
  floatingCta: {
    text: "Start Project",
    link: "/contact-us#project-form",
    show: true,
  },
};

const fallbackTestimonials = [
  {
    id: "fallback-1",
    title: "Reliable waterproofing execution with strong technical coordination",
    message:
      "Fiable handled our leakage and terrace waterproofing issue with a practical, engineer-led approach. The team communicated clearly and the execution stayed disciplined throughout.",
    name: "Amit Verma",
    designation: "Project Lead, Commercial Asset Team",
    src: "https://api.dicebear.com/7.x/initials/svg?seed=Amit%20Verma&backgroundType=gradientLinear&backgroundColor=234d7e,2e5da5",
  },
  {
    id: "fallback-2",
    title: "A dependable team for structural repair and rehabilitation work",
    message:
      "Their diagnosis was detailed, the repair methodology was clearly explained, and the on-site execution stayed aligned with our operational constraints.",
    name: "Rhea Kapoor",
    designation: "Facility Head, Industrial Client",
    src: "https://api.dicebear.com/7.x/initials/svg?seed=Rhea%20Kapoor&backgroundType=gradientLinear&backgroundColor=234d7e,2e5da5",
  },
  {
    id: "fallback-3",
    title: "Industrial flooring delivered with speed, finish, and durability",
    message:
      "Fiable recommended the right flooring system for our production environment and delivered a finish that improved both performance and maintenance.",
    name: "Daniel Carter",
    designation: "Operations Lead, Manufacturing Unit",
    src: "https://api.dicebear.com/7.x/initials/svg?seed=Daniel%20Carter&backgroundType=gradientLinear&backgroundColor=234d7e,2e5da5",
  },
  {
    id: "fallback-4",
    title: "Clear communication and strong site discipline from start to finish",
    message:
      "The team worked with structure, documented key decisions, and completed the required repairs without disrupting adjacent work areas.",
    name: "Aisha Mehta",
    designation: "Construction Coordinator, Client Team",
    src: "https://api.dicebear.com/7.x/initials/svg?seed=Aisha%20Mehta&backgroundType=gradientLinear&backgroundColor=234d7e,2e5da5",
  },
];

export default async function HomePage() {
  let heroData = fallbackHero;
  let services = fallbackServices;
  let stats = fallbackStats;
  let homepageSettings = fallbackHomepageSettings;
  let testimonials = fallbackTestimonials;

  try {
    // Establish DB Connection
    await connectDB();

    // Perform queries concurrently
    const [rawHero, rawServices, rawStats, rawSettings, rawTestimonials] = await Promise.all([
      HeroModel.findOne().lean(),
      ServiceModel.find({ active: true }).sort("order -createdAt").limit(5).lean(),
      StatsModel.findOne().lean(),
      HomepageSettingsModel.findOne().lean(),
      TestimonialModel.find({ active: true }).sort("order").lean(),
    ]);

    // Deep serialize into plain objects to prevent Mongoose schema toJSON serialization warnings
    const dbHero = rawHero ? JSON.parse(JSON.stringify(rawHero)) : null;
    const dbServices = rawServices ? JSON.parse(JSON.stringify(rawServices)) : null;
    const dbStats = rawStats ? JSON.parse(JSON.stringify(rawStats)) : null;
    const dbSettings = rawSettings ? JSON.parse(JSON.stringify(rawSettings)) : null;
    const dbTestimonials = rawTestimonials ? JSON.parse(JSON.stringify(rawTestimonials)) : null;

    if (dbHero) {
      heroData = { ...fallbackHero, ...dbHero };
    }
    if (dbServices && dbServices.length > 0) {
      services = dbServices;
    }
    if (dbStats && dbStats.stats && dbStats.stats.length > 0) {
      stats = dbStats.stats;
    }
    if (dbSettings) {
      homepageSettings = { ...fallbackHomepageSettings, ...dbSettings };
    }
    if (dbTestimonials && dbTestimonials.length > 0) {
      testimonials = dbTestimonials.map((t, idx) => ({
        id: t._id ? String(t._id) : `db-${idx}`,
        title: t.title || "Trusted execution and clean delivery",
        message: t.message,
        name: t.name,
        designation: t.role || "Verified feedback",
        src: t.image?.src || `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(t.name || 'Client')}&backgroundType=gradientLinear&backgroundColor=234d7e,2e5da5`,
      }));
    }
  } catch (error) {
    console.error("Error fetching server-side homepage data:", error);
  }

  return (
    <div>
      <FloatingCTA initialSettings={homepageSettings.floatingCta} />

      <Hero initialHero={heroData} />
      <EEATTrustBar />
      <ClientsMarquee />
      <Milestones
        initialStats={stats}
        initialContent={homepageSettings.milestonesSection}
      />

      <div className="">
        <AllServices
          initialServices={services}
          initialSettings={homepageSettings}
        />
      </div>
      <PainPointsGrid />
      <ProjectsShowcase />
      <StepsSection />

      <WhyChooseUsFiable initialContent={homepageSettings.whyChooseUsSection} />
      <ChemicalAlliances />
      <OfficeMapSection />
      
      <TrustSection initialContent={homepageSettings.trustSection} />
      {/* Enable and convert LocationSEO to a pure Server Component */}
      <LocationSEO initialContent={homepageSettings.locationSection} />

      <HomepageFAQs />

      <Testimonials
        initialTestimonials={testimonials}
        initialSettings={homepageSettings}
      />
      <ContactCta />
    </div>
  );
}

import ContactCta from "@/components/ContactCta";
import Link from "next/link";
import React from "react";
import {
  HardHat,
  Ruler,
  Clipboard,
  Shield,
  Droplets,
  Settings,
  Building,
  User,
  GraduationCap,
  Award,
  Zap,
  Construction,
  Layers
} from "lucide-react";
import CurrentOpening from "@/components/CurrentOpening";
import { connectDB } from "@/lib/mongodb";
import Job from "@/models/Job";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Careers at Fiable | Join Our Team of Construction Specialists",
  description: "Join Fiable Building Solutions. Explore open positions in engineering, quality control, waterproofing site execution, and structural retrofitting in Lucknow & India.",
  alternates: {
    canonical: `${SITE_URL}/career`,
  },
  openGraph: {
    title: "Careers at Fiable | Join Our Team of Construction Specialists",
    description: "Join Fiable Building Solutions. Explore open positions in engineering, quality control, waterproofing site execution, and structural retrofitting in Lucknow & India.",
    url: `${SITE_URL}/career`,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/logo2.png`,
        width: 800,
        height: 600,
        alt: "Fiable Building Solutions Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Fiable | Join Our Team of Construction Specialists",
    description: "Join Fiable Building Solutions. Explore open positions in engineering, quality control, waterproofing site execution, and structural retrofitting in Lucknow & India.",
    images: [`${SITE_URL}/logo2.png`],
  },
};

function buildJobsSchema(jobs) {
  return jobs.map((job) => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description || job.blurb || "Join our team of construction specialists",
    datePosted: job.createdAt || new Date().toISOString(),
    validThrough: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(),
    employmentType: job.type === "Part-time" ? "PART_TIME" : "FULL_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: "Fiable Building Solutions",
      sameAs: SITE_URL,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: job.location || "Lucknow",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
    },
  }));
}

export default async function FiableCareerPage() {
  let jobs = [];
  try {
    await connectDB();
    const rawJobs = await Job.find({ active: true }).sort("-createdAt").lean();
    jobs = JSON.parse(JSON.stringify(rawJobs));
  } catch (err) {
    console.error("Failed to fetch jobs in FiableCareerPage:", err.message);
  }
  
  const schema = buildJobsSchema(jobs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      
      <main className="pt-10">
        {/* HERO - Minimalistic Knowledge Hub Style */}
        <section className="relative bg-[#f9f8f6] py-24">
          <div className="max-w-4xl mx-auto text-center px-6">
            <div className="flex items-center justify-center gap-3 text-sm font-medium tracking-wider text-gray-500 uppercase mb-6">
              <span className="w-10 h-px bg-gray-400" />
              Fiable Careers
              <span className="w-10 h-px bg-gray-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
              Build Your <span className="text-[#234D7E] italic">Future</span> with Us
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Join Fiable Building Solutions — where structural retrofitting, waterproofing, 
              and engineering excellence meet career growth and innovation.
            </p>
          </div>
        </section>

        {/* CULTURE / PERKS */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14">
            <h2 className="text-3xl sm:text-4xl font-semibold">Why Choose Fiable Building Solutions</h2>
            <p className="mt-3 text-gray-600 max-w-3xl">
              "Trust and Honesty is our mantra" - Join a company that values quality, innovation, and long-term career growth in the construction industry.
            </p>
            <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Perk 
                icon={<GraduationCap className="w-6 h-6 text-[#234D7E]" />}
                title="Advanced Training" 
                text="Quarterly training programs at chemical factories and latest construction technology workshops." 
              />
              <Perk 
                icon={<Construction className="w-6 h-6 text-[#234D7E]" />}
                title="Latest Machinery" 
                text="Work with cutting-edge equipment and modern construction technologies for quality solutions." 
              />
              <Perk 
                icon={<Award className="w-6 h-6 text-[#234D7E]" />}
                title="Trusted Chemicals" 
                text="Access to premium materials from reliable suppliers ensuring consistent project quality." 
              />
              <Perk 
                icon={<Zap className="w-6 h-6 text-[#234D7E]" />}
                title="Growth Opportunities" 
                text="Career advancement in a growing company with 500+ successful projects and expanding operations." 
              />
            </div>
          </div>
        </section>

        {/* OPENINGS */}
        <section id="openings" className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold">Current Openings</h2>
              <p className="mt-3 text-gray-600 max-w-3xl">
                Join our team of construction professionals in waterproofing, structural retrofitting, and civil construction projects across India.
              </p>
            </div>
          </div>

          <CurrentOpening initialJobs={jobs} />
        </section>
      </main>
    </>
  );
}

// Shared helper component
function Perk({ icon, title, text }) {
  return (
    <div className="rounded-2xl bg-white p-6 border border-gray-200">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}

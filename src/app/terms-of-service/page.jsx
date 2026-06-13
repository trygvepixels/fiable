import Link from "next/link";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Terms of Service | Fiable Building Solutions",
  description: "Read the Terms of Service for Fiable Building Solutions. Understand guidelines for site inspections, service warranties, and project execution contracts.",
  alternates: {
    canonical: `${SITE_URL}/terms-of-service`,
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[#F4F1EC] pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6 py-12 bg-white rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-4xl font-semibold text-gray-900 mb-6 special-font">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-8">Last Updated: June 13, 2026</p>

        <div className="prose prose-slate max-w-none text-gray-700 space-y-6 leading-relaxed">
          <p>
            Welcome to <strong>Fiable Building Solutions</strong>. These Terms of Service outline the rules and regulations for the use of our website and the provision of our engineering, waterproofing, and construction services.
          </p>

          <p>
            By accessing this website, we assume you accept these terms and conditions. Do not continue to use Fiable Building Solutions if you do not agree to accept all of the terms and conditions stated on this page.
          </p>

          <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">1. Scope of Services</h2>
          <p>
            Fiable Building Solutions provides specialized engineering services, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Residential, commercial, and industrial waterproofing systems.</li>
            <li>RCC structural repair, reinforcement, and carbon fiber wrapping.</li>
            <li>Industrial flooring (Epoxy, PU screeds) and precision grouting.</li>
          </ul>
          <p>
            Inspection reports, proposals, and estimations provided through our website or site visits are subject to site-specific conditions and manual civil engineering audits.
          </p>

          <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">2. Site Inspections and Estimates</h2>
          <p>
            Free site inspections are offered within Lucknow and select areas based on feasibility. Fiable reserves the right to decline inspection requests or charge a diagnostic fee for locations outside standard regional coverage, which will be communicated in advance.
          </p>

          <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">3. Execution and Warranties</h2>
          <p>
            All physical works executed on-site are governed by a separate, signed contract specifying technical methodologies, payment milestones, and warranty terms. Warranty coverage is contingent upon adherence to proper site conditions and chemical application guidelines as specified in individual contract agreements.
          </p>

          <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">4. Intellectual Property</h2>
          <p>
            Unless otherwise stated, Fiable Building Solutions and/or its licensors own the intellectual property rights for all material, text, case studies, images, and technical content on this website. All intellectual property rights are reserved.
          </p>

          <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">5. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, Fiable Building Solutions shall not be liable for any indirect, consequential, or incidental damages arising out of the use of this website, or reliance on informational blogs and checklists.
          </p>

          <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">6. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of Uttar Pradesh, India, and you irrevocably submit to the exclusive jurisdiction of the courts in Lucknow.
          </p>

          <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">7. Contact Information</h2>
          <p>
            If you have any queries regarding any of our terms, please contact us at <strong>admin@fiableprojects.com</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Privacy Policy | Fiable Building Solutions",
  description: "Read the privacy policy of Fiable Building Solutions. Understand how we collect, use, and protect your information when requesting waterproofing and construction site inspections.",
  alternates: {
    canonical: `${SITE_URL}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#F4F1EC] pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6 py-12 bg-white rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-4xl font-semibold text-gray-900 mb-6 special-font">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Last Updated: June 13, 2026</p>

        <div className="prose prose-slate max-w-none text-gray-700 space-y-6 leading-relaxed">
          <p>
            At <strong>Fiable Building Solutions</strong>, accessible from <Link href="/" className="text-blue-600 hover:underline">{SITE_URL}</Link>, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Fiable Building Solutions and how we use it.
          </p>

          <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
          <p>
            We collect personal information that you voluntarily provide to us when you request a free site inspection, contact us via email or phone, or submit forms on our website. This information may include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name and contact details (email address, phone number).</li>
            <li>Site address where waterproofing or structural services are required.</li>
            <li>Details about your building structure, leaks, or construction requirements.</li>
          </ul>

          <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
          <p>
            We use the information we collect in various ways to support your building service needs, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Scheduling and executing site inspections for waterproofing, structural repairs, or flooring.</li>
            <li>Providing accurate project quotes and service estimations.</li>
            <li>Communicating with you regarding project updates and customer support.</li>
            <li>Improving our website services and technical user experience.</li>
          </ul>

          <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">3. Log Files and Web Analytics</h2>
          <p>
            Fiable Building Solutions follows a standard procedure of using log files and web analytics tools (like Google Analytics and Google Tag Manager). These files log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
          </p>

          <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">4. Third-Party Services</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to outside parties. This does not include trusted third parties who assist us in operating our website or conducting our business (e.g., email notification services, database hosting), so long as those parties agree to keep this information confidential.
          </p>

          <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">5. Security of Your Data</h2>
          <p>
            We implement standard security measures, including HTTPS encryption, to maintain the safety of your personal information when you enter, submit, or access your personal information.
          </p>

          <h2 className="text-2xl font-medium text-gray-900 mt-8 mb-4">6. Contact Us</h2>
          <p>
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at <strong>sales@fiablebuildingsolutions.com</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}

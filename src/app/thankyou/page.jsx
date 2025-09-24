import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

export default function FiableThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center   px-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl border border-gray-100 p-10 flex flex-col items-center">
        <div className="mb-6">
          <FaCheckCircle className="text-emerald-500 text-6xl drop-shadow-lg" />
        </div>
        <h1 className="font-extrabold text-2xl md:text-3xl text-gray-900 mb-2 tracking-tight text-center">
          Thank you for choosing Fiable!
        </h1>
        <p className="text-gray-600 text-lg mb-6 text-center">
          Your request has been received successfully.<br />
          Our team will reach out to you shortly.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#355A94] from-violet-600 to-emerald-500 hover:from-violet-700 hover:to-emerald-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition"
        >
          Back to Home
        </Link>
        <div className="mt-8 text-xs text-gray-400 text-center">
          &copy; {new Date().getFullYear()} Fiable. All rights reserved.
        </div>
      </div>
    </div>
  );
}

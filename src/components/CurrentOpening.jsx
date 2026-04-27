"use client";

import { useEffect, useState } from "react";
import {
  FiUsers,
  FiClock,
  FiMapPin,
  FiX,
  FiMail,
  FiBriefcase,
} from "react-icons/fi";

function JobDescription({ description }) {
  if (!description) {
    return (
      <p>
        No detailed description available. Please contact us for more information about this position.
      </p>
    );
  }

  const lines = description.split('\n').filter(line => line.trim() !== '');
  const elements = [];
  let listItems = [];
  let inList = false;

  lines.forEach((line, index) => {
    const trimmedLine = line.trim();
    const numberedListMatch = trimmedLine.match(/^(\d+)[.)]\s+(.*)/);

    if (numberedListMatch) {
      // It's a numbered list item
      if (!inList) {
        inList = true;
        listItems = [];
      }
      listItems.push(numberedListMatch[2]);
    } else {
      // Not a numbered list item
      if (inList) {
        // Close previous list
        elements.push(
          <ol key={`list-${index}`} className="list-decimal list-inside mb-4">
            {listItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ol>
        );
        inList = false;
        listItems = [];
      }
      elements.push(<p key={`p-${index}`} className="mb-4">{trimmedLine}</p>);
    }
  });

  // If ended inside a list, close it
  if (inList) {
    elements.push(
      <ol key="list-end" className="list-decimal list-inside mb-4">
        {listItems.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ol>
    );
  }

  return <div>{elements}</div>;
}

export default function JobsList() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const res = await fetch("/api/jobs");
        if (!res.ok) throw new Error("Failed to fetch jobs");
        const data = await res.json();
        setJobs(data.items || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-[#234D7E] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading opportunities...</p>
        </div>
      </div>
    );
  }

  if (!jobs.length) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="text-center">
          <FiBriefcase className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-600 text-lg font-medium">No open positions at the moment</p>
          <p className="text-gray-500 text-sm mt-2">Check back soon for new opportunities</p>
        </div>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto py-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <button
            key={job._id}
            onClick={() => setSelectedJob(job)}
            className="group text-left rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-[#234D7E] flex items-center justify-center">
                <FiBriefcase className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs font-semibold text-[#234D7E] bg-blue-100 px-2 py-1 rounded-full">
                OPEN
              </span>
            </div>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#234D7E] transition-colors">
              {job.title}
            </h3>
            <p className="text-sm text-gray-600 mb-4 line-clamp-3">
              {job.description
                ? job.description.slice(0, 120) + (job.description.length > 120 ? "..." : "")
                : "No description provided."}
            </p>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <FiUsers className="w-4 h-4 text-blue-500" /> 
                <span>{job.team || "General"}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <FiClock className="w-4 h-4 text-green-500" /> 
                <span>{job.type || "Full-time"}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <FiMapPin className="w-4 h-4 text-orange-500" /> 
                <span>{job.location || "Lucknow, UP"}</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100">
              <span className="text-sm font-medium text-[#234D7E] group-hover:text-[#234D7E]">
                View Details →
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Enhanced Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="relative max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full p-2 transition-all"
            >
              <FiX size={20} />
            </button>

            {/* Header */}
            <div className="mb-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-[#234D7E] flex items-center justify-center flex-shrink-0">
                  <FiBriefcase className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {selectedJob.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="flex items-center gap-2 text-gray-600">
                      <FiUsers className="w-4 h-4 text-blue-500" />
                      {selectedJob.team || "General"}
                    </span>
                    <span className="flex items-center gap-2 text-gray-600">
                      <FiClock className="w-4 h-4 text-green-500" />
                      {selectedJob.type || "Full-time"}
                    </span>
                    <span className="flex items-center gap-2 text-gray-600">
                      <FiMapPin className="w-4 h-4 text-orange-500" />
                      {selectedJob.location || "Lucknow, UP"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Job Description */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Job Description</h4>
              <div className="prose prose-sm text-gray-700 leading-relaxed">
                <JobDescription description={selectedJob.description} />
              </div>
            </div>

            {/* Company Info */}
            <div className="bg-blue-50 rounded-2xl p-6 mb-6">
              <h4 className="font-semibold text-blue-900 mb-2">About Fiable Building Solutions</h4>
              <p className="text-sm text-blue-800 mb-3">
                Established in 2019, we specialize in waterproofing, structural retrofitting, and industrial flooring solutions. 
                Join our team of skilled engineers and construction professionals.
              </p>
              <p className="text-xs text-[#234D7E] italic">
                "Trust and Honesty is our mantra"
              </p>
            </div>

            {/* Apply Section */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:enquiry@fiableprojects.com?subject=Application for {selectedJob.title}&body=Dear Fiable Building Solutions Team,%0D%0A%0D%0AI am interested in applying for the {selectedJob.title} position. Please find my resume attached.%0D%0A%0D%0ABest regards"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#234D7E] to-[#234D7E] text-white rounded-xl font-semibold hover:from-[#234D7E] hover:to-blue-800 transition-all shadow-lg hover:shadow-xl"
              >
                <FiMail className="w-5 h-5" />
                Apply Now
              </a>
               
            </div>

            {/* Contact Info */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="text-center text-sm text-gray-500">
                <p className="mb-1">Questions? Contact us directly:</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a 
                    href="mailto:enquiry@fiableprojects.com" 
                    className="text-[#234D7E] hover:text-[#234D7E]"
                  >
                    enquiry@fiableprojects.com
                  </a>
                  <span className="hidden sm:inline text-gray-300">|</span>
                  <a 
                    href="tel:+918069648411" 
                    className="text-[#234D7E] hover:text-[#234D7E]"
                  >
                    +91-8069648411
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

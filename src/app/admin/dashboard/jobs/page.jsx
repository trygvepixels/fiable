"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { 
  FiSearch, 
  FiPlus, 
  FiTrash2, 
  FiEdit2, 
  FiPower, 
  FiMapPin, 
  FiClock,
  FiBriefcase,
  FiUsers,
  FiAlertCircle,
  FiCheckCircle,
  FiX
} from "react-icons/fi";

export default function AdminJobsPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState("");
  const [error, setError] = useState(null);
  const [statusMessage, setStatusMessage] = useState(null); // { type: 'success' | 'error', text: string }

  const fetchJobs = async () => {
    try {
      setLoading(true);
      setError(null);
      const url = q ? `/api/jobs?search=${encodeURIComponent(q)}&limit=50` : "/api/jobs?limit=50";
      const res = await fetch(url, { cache: "no-store" });
      if (!res.ok) throw new Error("Failed to load jobs");
      const data = await res.json();
      setJobs(Array.isArray(data.items) ? data.items : []);
    } catch (e) {
      setError(e.message || "Failed to load jobs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const showStatus = (type, text) => {
    setStatusMessage({ type, text });
    setTimeout(() => setStatusMessage(null), 3000);
  };

  const toggleActive = async (id, next) => {
    const originalJobs = [...jobs];
    setJobs(jobs.map(j => j._id === id ? { ...j, active: next } : j));
    
    try {
      const res = await fetch(`/api/jobs/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ active: next })
      });
      if (!res.ok) throw new Error("Failed to update status");
      showStatus("success", `Job ${next ? 'reopened' : 'closed'} successfully`);
    } catch (err) {
      setJobs(originalJobs);
      showStatus("error", "Failed to update job status");
    }
  };

  const remove = async (id) => {
    // Custom non-blocking confirm would be better, but for now we'll stick to a safer flow
    if (!window.confirm("Are you sure you want to delete this job listing?")) return;
    
    const originalJobs = [...jobs];
    setJobs(jobs.filter(j => j._id !== id));
    
    try {
      const res = await fetch(`/api/jobs/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete job");
      showStatus("success", "Job deleted successfully");
    } catch (err) {
      setJobs(originalJobs);
      showStatus("error", "Failed to delete job");
    }
  };

  const onSearch = (e) => {
    e.preventDefault();
    fetchJobs();
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header & Status */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-200/50">
            <FiBriefcase className="text-white text-xl" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-zinc-900 tracking-tight">Job Listings</h1>
            <p className="text-zinc-500 text-sm">Manage career opportunities at Fiable</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {statusMessage && (
            <div className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium animate-in fade-in zoom-in duration-300 ${
              statusMessage.type === 'success' ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'
            }`}>
              {statusMessage.type === 'success' ? <FiCheckCircle /> : <FiAlertCircle />}
              {statusMessage.text}
            </div>
          )}
          <Link
            href="/admin/dashboard/jobs/new"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-2xl font-bold hover:bg-zinc-800 transition-all active:scale-95 shadow-lg shadow-zinc-200/50"
          >
            <FiPlus className="text-lg" />
            <span>New Job Listing</span>
          </Link>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-[2rem] p-4 border border-zinc-200/60 shadow-sm">
        <form onSubmit={onSearch} className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 text-lg" />
            <input
              type="text"
              value={q}
              onChange={e => setQ(e.target.value)}
              placeholder="Search by title, team, location, or keywords..."
              className="w-full pl-12 pr-4 py-3.5 bg-zinc-50 border-2 border-transparent rounded-2xl focus:border-emerald-100 focus:bg-white focus:ring-4 focus:ring-emerald-500/5 transition-all outline-none text-zinc-900 font-medium"
            />
          </div>
          <button 
            type="submit"
            className="px-8 py-3.5 bg-emerald-600 text-white rounded-2xl font-bold hover:bg-emerald-700 transition-all"
          >
            Search
          </button>
          <button
            type="button"
            onClick={() => { setQ(""); setJobs([]); fetchJobs(); }}
            className="px-6 py-3.5 bg-zinc-100 text-zinc-600 rounded-2xl font-bold hover:bg-zinc-200 transition-all"
          >
            Reset
          </button>
        </form>
      </div>

      {/* Content Area */}
      {error && (
        <div className="bg-red-50 border border-red-100 rounded-3xl p-6 flex items-center gap-4 text-red-700">
          <FiAlertCircle className="text-2xl shrink-0" />
          <p className="font-medium">{error}</p>
        </div>
      )}

      <div className="grid gap-4">
        {loading ? (
          Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-32 bg-white rounded-[2rem] border border-zinc-200/60 animate-pulse" />
          ))
        ) : jobs.length > 0 ? (
          jobs.map(job => (
            <div key={job._id} className="group bg-white rounded-[2rem] border border-zinc-200/60 p-6 md:p-8 shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 hover:border-emerald-100 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-4 flex-1">
                  <div className="flex items-center flex-wrap gap-3">
                    <h3 className="text-xl font-bold text-zinc-900 group-hover:text-emerald-600 transition-colors">
                      {job.title}
                    </h3>
                    <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                      job.active 
                        ? "bg-emerald-50 text-emerald-600" 
                        : "bg-zinc-100 text-zinc-400"
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${job.active ? "bg-emerald-500 animate-pulse" : "bg-zinc-400"}`} />
                      {job.active ? "Accepting Applications" : "Archive / Closed"}
                    </div>
                  </div>

                  <p className="text-zinc-500 max-w-2xl leading-relaxed">
                    {job.blurb}
                  </p>

                  <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm font-medium text-zinc-400">
                    <div className="flex items-center gap-2">
                       <FiUsers className="text-emerald-500" />
                       <span>{job.team}</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <FiClock className="text-blue-500" />
                       <span>{job.type}</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <FiMapPin className="text-rose-500" />
                       <span>{job.location}</span>
                    </div>
                    {job.tags?.slice(0, 3).map(tag => (
                      <span key={tag} className="bg-zinc-50 text-zinc-500 px-2.5 py-1 rounded-lg text-[10px] uppercase tracking-widest font-black border border-zinc-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
                  <Link
                    href={`/admin/dashboard/jobs/${job._id}`}
                    className="p-3 bg-zinc-50 text-zinc-600 rounded-xl hover:bg-emerald-50 hover:text-emerald-600 transition-all border border-zinc-100"
                    title="Edit Listing"
                  >
                    <FiEdit2 className="text-lg" />
                  </Link>
                  <button
                    onClick={() => toggleActive(job._id, !job.active)}
                    className={`p-3 rounded-xl transition-all border ${
                      job.active 
                        ? "bg-amber-50 text-amber-600 border-amber-100 hover:bg-amber-100" 
                        : "bg-emerald-50 text-emerald-600 border-emerald-100 hover:bg-emerald-100"
                    }`}
                    title={job.active ? "Close Listing" : "Reopen Listing"}
                  >
                    <FiPower className="text-lg" />
                  </button>
                  <button
                    onClick={() => remove(job._id)}
                    className="p-3 bg-red-50 text-red-600 rounded-xl hover:bg-red-600 hover:text-white transition-all border border-red-100"
                    title="Delete Permanent"
                  >
                    <FiTrash2 className="text-lg" />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-white rounded-[2rem] border border-zinc-200/60 p-12 text-center flex flex-col items-center justify-center space-y-4">
             <div className="w-16 h-16 bg-zinc-50 rounded-full flex items-center justify-center text-zinc-300">
               <FiBriefcase className="text-3xl" />
             </div>
             <div>
               <h3 className="text-lg font-bold text-zinc-900">No Job Listings Found</h3>
               <p className="text-zinc-500 max-w-xs mx-auto">Either you haven't posted any jobs yet, or your search criteria didn't match any results.</p>
             </div>
             <button
               onClick={() => { setQ(""); fetchJobs(); }}
               className="text-emerald-600 font-bold hover:underline"
             >
               Clear all filters
             </button>
          </div>
        )}
      </div>
    </div>
  );
}
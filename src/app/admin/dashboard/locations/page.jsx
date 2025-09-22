"use client";

import { useEffect, useMemo, useState } from "react";
import {
  FiPlus,
  FiEdit2,
  FiTrash2,
  FiMapPin,
  FiSearch,
  FiX,
  FiCheck,
  FiFilter,
  FiCalendar,
 } from "react-icons/fi";

const LOCATION_TYPES = [
  { key: "all", label: "All Locations", icon: "🏢" },
  { key: "head-office", label: "Head Office", icon: "🏛️" },
  { key: "branch", label: "Branch", icon: "🌐" },
  { key: "meeting-space", label: "Meeting Space", icon: "🤝" },
  { key: "project-office", label: "Project Office", icon: "🚧" },
  { key: "service-center", label: "Service Center", icon: "⚡" },
];

export default function LocationsPage() {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // UI state
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [page, setPage] = useState(1);
  const PER_PAGE = 10;

  // form fields (flattened for simplicity)
  const emptyForm = {
    name: "",
    type: "head-office",
    street: "",
    city: "",
    state: "",
    country: "India",
    pincode: "",
  };
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchLocations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchLocations() {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch("/api/locations");
      if (!res.ok) throw new Error("Failed to fetch locations");
      const data = await res.json();
      
      // Handle different API response structures
      let locationData = [];
      if (data.success && data.data && data.data.locations) {
        locationData = data.data.locations;
      } else if (data.locations) {
        locationData = data.locations;
      } else if (Array.isArray(data)) {
        locationData = data;
      }

      setLocations(
        locationData.map((d) => ({
          ...d,
          address: d.address || {},
        }))
      );
    } catch (err) {
      setError(err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  }

  const countsByType = useMemo(() => {
    const map = {};
    LOCATION_TYPES.forEach((t) => (map[t.key] = 0));
    locations.forEach((l) => {
      map["all"] = (map["all"] || 0) + 1;
      const key = l.type || "other";
      map[key] = (map[key] || 0) + 1;
    });
    return map;
  }, [locations]);

  const filtered = useMemo(() => {
    let list = [...locations];
    if (filterType !== "all") {
      list = list.filter((l) => l.type === filterType);
    }
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter(
        (l) =>
          (l.name || "").toLowerCase().includes(q) ||
          (l.address?.city || "").toLowerCase().includes(q) ||
          (l.address?.country || "").toLowerCase().includes(q)
      );
    }
    if (sortBy === "newest") {
      list.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
    } else if (sortBy === "oldest") {
      list.sort((a, b) => new Date(a.createdAt || 0) - new Date(b.createdAt || 0));
    } else if (sortBy === "name") {
      list.sort((a, b) => (a.name || "").localeCompare(b.name || ""));
    }
    return list;
  }, [locations, filterType, search, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const visible = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  function openAddModal() {
    setEditingId(null);
    setForm(emptyForm);
    setShowModal(true);
  }

  function openEditModal(loc) {
    setEditingId(loc._id || null);
    setForm({
      name: loc.name || "",
      type: loc.type || "head-office",
      street: loc.address?.street || "",
      city: loc.address?.city || "",
      state: loc.address?.state || "",
      country: loc.address?.country || "India",
      pincode: loc.address?.pincode || "",
    });
    setShowModal(true);
  }

  function resetAndClose() {
    setForm(emptyForm);
    setShowModal(false);
    setEditingId(null);
  }

  async function handleSave(e) {
    e.preventDefault();
    // basic validation
    if (!form.name.trim()) return alert("Name is required");
    setSaving(true);
    const body = {
      name: form.name.trim(),
      type: form.type,
      address: {
        street: form.street.trim(),
        city: form.city.trim(),
        state: form.state.trim(),
        country: form.country.trim(),
        pincode: form.pincode.trim(),
      },
    };
    try {
      if (editingId) {
        const res = await fetch(`/api/locations/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        if (!res.ok) throw new Error("Failed to update");
      } else {
        const res = await fetch("/api/locations", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        if (!res.ok) throw new Error("Failed to create");
      }
      await fetchLocations();
      resetAndClose();
    } catch (err) {
      alert(err.message || "Save failed");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(loc) {
    const ok = confirm(`Delete "${loc.name}"? This cannot be undone.`);
    if (!ok) return;
    try {
      const res = await fetch(`/api/locations/${loc._id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Delete failed");
      await fetchLocations();
    } catch (err) {
      alert(err.message || "Delete failed");
    }
  }

  function mapQuery(loc) {
    const parts = [
      loc.address?.street,
      loc.address?.city,
      loc.address?.state,
      loc.address?.country,
    ]
      .filter(Boolean)
      .join(", ");
    return encodeURIComponent(parts || loc.name || "");
  }

  const getTypeInfo = (typeKey) => {
    return LOCATION_TYPES.find(t => t.key === typeKey) || LOCATION_TYPES[0];
  };

  if (error) {
    return (
      <div className="p-6 lg:p-10">
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
          <div className="text-red-600 text-lg font-semibold mb-2">Error Loading Locations</div>
          <div className="text-red-500 text-sm mb-4">{error}</div>
          <button
            onClick={fetchLocations}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen max-w-7xl mx-auto  bg-gradient- to-br from-blue-50 via-indigo-50 to-purple-50 p-6 lg:p-10">
      {/* Header */}
      <div className="flex flex-col pt-20 lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
        <div>
          <h1 className="text-5xl font -bold text-gray-900 tracking-tight flex items-center gap-3">
             Fiable Locations
          </h1>
          <p className="text-gray-600 mt-2 max-w-2xl">
            Manage your company locations — add, edit, or remove branches and offices across different cities and regions.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-3 shadow-sm">
            <FiSearch className="text-gray-400" />
            <input
              className="outline-none w-64 text-sm bg-transparent placeholder-gray-400"
              placeholder="Search locations..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
            />
          </div>

          <button
            onClick={openAddModal}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <FiPlus className="w-5 h-5" />
            Add Location
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      {/* <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {LOCATION_TYPES.map((t) => {
          const count = countsByType[t.key] || 0;
          return (
            <div
              key={t.key}
              className={`bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer ${
                filterType === t.key ? 'ring-2 ring-blue-500 bg-blue-50/80' : 'hover:scale-105'
              }`}
              onClick={() => {
                setFilterType(t.key);
                setPage(1);
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">{t.icon}</span>
                <div className="text-3xl font-bold text-gray-800">{count}</div>
              </div>
              <div className="text-sm font-medium text-gray-600">{t.label}</div>
              <div className="text-xs text-gray-400 mt-1">
                {t.key === "all" ? "Total locations" : `Active ${t.label.toLowerCase()}s`}
              </div>
            </div>
          );
        })}
      </div> */}

      {/* Controls */}
      {/* <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-gray-200 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <FiFilter className="text-gray-400" />
              <select
                value={filterType}
                onChange={(e) => {
                  setFilterType(e.target.value);
                  setPage(1);
                }}
                className="p-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                {LOCATION_TYPES.map((t) => (
                  <option value={t.key} key={t.key}>
                    {t.icon} {t.label}
                  </option>
                ))}
              </select>
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="p-3 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            >
              <option value="newest">🆕 Newest First</option>
              <option value="oldest">📅 Oldest First</option>
              <option value="name">🔤 Name (A–Z)</option>
            </select>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>{filtered.length} locations found</span>
            </div>
            <div className="flex items-center gap-2">
              <FiCalendar className="w-4 h-4" />
              <span>Page {page} of {totalPages}</span>
            </div>
          </div>
        </div>
      </div> */}

      {/* Table / Cards */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="hidden md:block">
          <table className="min-w-full">
            <thead className="bg-gray-50/80">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Location</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Type</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">City & State</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Country</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Created</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {loading ? (
                <tr>
                  <td colSpan="6" className="px-6 py-12 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-gray-500">Loading locations...</span>
                    </div>
                  </td>
                </tr>
              ) : visible.length === 0 ? (
                <tr>
                  <td colSpan="6" className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center space-y-3">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                        <FiMapPin className="w-8 h-8 text-gray-400" />
                      </div>
                      <div className="text-gray-500">No locations found</div>
                      <button
                        onClick={openAddModal}
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                      >
                        Add your first location
                      </button>
                    </div>
                  </td>
                </tr>
              ) : (
                visible.map((loc) => {
                  const typeInfo = getTypeInfo(loc.type);
                  return (
                    <tr key={loc._id} className="hover:bg-blue-50/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                            <span className="text-lg">{typeInfo.icon}</span>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">{loc.name}</div>
                            <div className="text-sm text-gray-500">{loc.address?.street || "No address"}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                          {typeInfo.label}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {[loc.address?.city, loc.address?.state].filter(Boolean).join(", ") || "-"}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">{loc.address?.country || "-"}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {loc.createdAt ? new Date(loc.createdAt).toLocaleDateString() : "-"}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="inline-flex items-center gap-2">
                          {loc.address && (loc.address.city || loc.address.country) ? (
                            <a
                              href={`https://www.google.com/maps/search/?api=1&query=${mapQuery(loc)}`}
                              target="_blank"
                              rel="noreferrer"
                              className="p-2 rounded-xl hover:bg-blue-100 text-blue-600 transition-colors"
                              title="View on Maps"
                            >
                              <FiMapPin className="w-4 h-4" />
                            </a>
                          ) : null}
                          <button
                            onClick={() => openEditModal(loc)}
                            className="p-2 rounded-xl hover:bg-gray-100 text-gray-600 transition-colors"
                            title="Edit Location"
                          >
                            <FiEdit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(loc)}
                            className="p-2 rounded-xl hover:bg-red-100 text-red-600 transition-colors"
                            title="Delete Location"
                          >
                            <FiTrash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile card view */}
        <div className="md:hidden p-6 space-y-4">
          {loading ? (
            <div className="flex items-center justify-center space-x-2 py-8">
              <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              <span className="text-gray-500">Loading locations...</span>
            </div>
          ) : visible.length === 0 ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiMapPin className="w-8 h-8 text-gray-400" />
              </div>
              <div className="text-gray-500 mb-4">No locations found</div>
              <button
                onClick={openAddModal}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Add your first location
              </button>
            </div>
          ) : (
            visible.map((loc) => {
              const typeInfo = getTypeInfo(loc.type);
              return (
                <div key={loc._id} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3 flex-1">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">{typeInfo.icon}</span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-semibold text-gray-900 truncate">{loc.name}</div>
                        <div className="text-sm text-blue-600 mt-1">{typeInfo.label}</div>
                        <div className="text-sm text-gray-500 mt-2">
                          {[loc.address?.city, loc.address?.state].filter(Boolean).join(", ") || "No location set"}
                        </div>
                        <div className="text-xs text-gray-400 mt-1">{loc.address?.street || ""}</div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 items-end ml-4">
                      {loc.address && (loc.address.city || loc.address.country) && (
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${mapQuery(loc)}`}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                          title="View on Maps"
                        >
                          <FiMapPin className="w-4 h-4" />
                        </a>
                      )}
                      <div className="flex gap-2">
                        <button 
                          onClick={() => openEditModal(loc)} 
                          className="p-2 rounded-xl bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors"
                        >
                          <FiEdit2 className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleDelete(loc)} 
                          className="p-2 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
                        >
                          <FiTrash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-6 bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-gray-200">
          <div className="text-sm text-gray-600">
            Showing {(page - 1) * PER_PAGE + 1}–{Math.min(page * PER_PAGE, filtered.length)} of {filtered.length} locations
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-4 py-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>
            <div className="flex items-center gap-2">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const pageNum = i + 1;
                return (
                  <button
                    key={pageNum}
                    onClick={() => setPage(pageNum)}
                    className={`px-3 py-2 rounded-xl transition-colors ${
                      page === pageNum
                        ? "bg-blue-600 text-white"
                        : "bg-white hover:bg-gray-50 text-gray-700"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="px-4 py-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div
            className="absolute inset-0"
            onClick={() => { if (!saving) resetAndClose(); }}
          />
          <form
            onSubmit={handleSave}
            className="relative bg-white w-full max-w-3xl rounded-3xl shadow-2xl p-8 z-10 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {editingId ? "Edit Location" : "Add New Location"}
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  {editingId ? "Update location details" : "Create a new Fiable location"}
                </p>
              </div>
              <div className="flex items-center gap-3">
                {saving && (
                  <div className="flex items-center gap-2 text-blue-600">
                    <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-sm">Saving...</span>
                  </div>
                )}
                <button
                  type="button"
                  onClick={() => resetAndClose()}
                  disabled={saving}
                  className="p-2 rounded-xl hover:bg-gray-100 transition-colors disabled:opacity-50"
                  aria-label="Close"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location Name *
                </label>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="e.g., Fiable Head Office"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location Type
                </label>
                <select
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                >
                  {LOCATION_TYPES.filter(t => t.key !== "all").map((t) => (
                    <option key={t.key} value={t.key}>{t.icon} {t.label}</option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Street Address
                </label>
                <input
                  value={form.street}
                  onChange={(e) => setForm({ ...form, street: e.target.value })}
                  className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Building number, street name, area..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City
                </label>
                <input
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="City name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  State / Province
                </label>
                <input
                  value={form.state}
                  onChange={(e) => setForm({ ...form, state: e.target.value })}
                  className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="State or province"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Country
                </label>
                <input
                  value={form.country}
                  onChange={(e) => setForm({ ...form, country: e.target.value })}
                  className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Country"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  PIN / Postal Code
                </label>
                <input
                  value={form.pincode}
                  onChange={(e) => setForm({ ...form, pincode: e.target.value })}
                  className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Postal code"
                />
              </div>
            </div>

            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-4">
                {(form.city || form.country) && (
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      `${form.street} ${form.city} ${form.state} ${form.country}`
                    )}`}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    <FiMapPin className="w-4 h-4" />
                    Preview on Maps
                  </a>
                )}
              </div>
              
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => resetAndClose()}
                  disabled={saving}
                  className="px-6 py-3 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
                >
                  <FiCheck className="w-5 h-5" />
                  {editingId ? "Update Location" : "Create Location"}
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

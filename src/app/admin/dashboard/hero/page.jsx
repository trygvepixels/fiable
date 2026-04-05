"use client";

import { useState, useEffect } from "react";
import CloudinaryUploader from "@/components/CloudinaryUploader";
import { 
  FiType, 
  FiRefreshCw, 
  FiImage, 
  FiPhone, 
  FiMessageCircle,
  FiSave,
  FiSettings,
  FiEdit3,
  FiCheckCircle,
  FiAlertCircle
} from "react-icons/fi";

export default function HeroAdmin() {
  const [title, setTitle] = useState("");
  const [rotatingWords, setRotatingWords] = useState(["demolition"]);
  const [backgroundImages, setBackgroundImages] = useState([]);
  const [ctaPhone, setCtaPhone] = useState("+91 8069648411");
  const [ctaWhatsapp, setCtaWhatsapp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [saveStatus, setSaveStatus] = useState(null); // 'success' | 'error' | null

  // Fetch current hero data on load
  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const res = await fetch("/api/hero");
        if (res.ok) {
          const data = await res.json();
          if (data && Object.keys(data).length > 0) {
            setTitle(data.title || "");
            setRotatingWords(data.rotatingWords || ["demolition"]);
            setBackgroundImages(data.backgroundImages || []);
            setCtaPhone(data.ctaPhone || "");
            setCtaWhatsapp(data.ctaWhatsapp || "");
          }
        }
      } catch (error) {
        console.error("Failed to load hero data:", error);
      } finally {
        setIsFetching(false);
      }
    };
    fetchHeroData();
  }, []);

  const saveHero = async () => {
    setIsLoading(true);
    setSaveStatus(null);
    try {
      const res = await fetch("/api/hero", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, rotatingWords, backgroundImages, ctaPhone, ctaWhatsapp }),
      });
      
      if (res.ok) {
        setSaveStatus("success");
      } else {
        setSaveStatus("error");
      }
      
      setTimeout(() => setSaveStatus(null), 3000);
    } catch (error) {
      console.error("Save failed:", error);
      setSaveStatus("error");
      setTimeout(() => setSaveStatus(null), 3000);
    } finally {
      setIsLoading(false);
    }
  };

  if (isFetching) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-12 h-12 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin mb-4" />
        <p className="text-zinc-500 font-medium">Loading hero settings...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200/50">
            <FiSettings className="text-white text-xl" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-zinc-900 tracking-tight">Hero Configuration</h1>
            <p className="text-zinc-500 text-sm">Customize the main landing section of your homepage</p>
          </div>
        </div>
        
        <button
          onClick={saveHero}
          disabled={isLoading}
          className={`flex items-center justify-center space-x-3 px-8 py-3.5 rounded-2xl font-bold transition-all duration-300 transform ${
            saveStatus === 'success' 
              ? "bg-green-500 text-white !scale-100" 
              : saveStatus === 'error'
              ? "bg-red-500 text-white"
              : "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/20 active:scale-95"
          } disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : saveStatus === 'success' ? (
            <FiCheckCircle className="text-xl" />
          ) : saveStatus === 'error' ? (
            <FiAlertCircle className="text-xl" />
          ) : (
            <FiSave className="text-xl" />
          )}
          <span>
            {isLoading ? "Saving Changes..." : saveStatus === 'success' ? "Saved!" : saveStatus === 'error' ? "Error!" : "Save Configuration"}
          </span>
        </button>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          
          {/* Hero Title Card */}
          <div className="bg-white rounded-3xl p-6 border border-zinc-200/60 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                <FiType className="text-blue-600 text-lg" />
              </div>
              <h3 className="font-bold text-zinc-900">Heading Title</h3>
            </div>
            <div className="relative">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Ex: Built to last, engineered for"
                className="w-full px-5 py-4 bg-zinc-50 border-2 border-transparent rounded-2xl focus:border-blue-100 focus:bg-white focus:ring-4 focus:ring-blue-500/5 transition-all outline-none text-zinc-900 font-medium"
              />
              <FiEdit3 className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-300" />
            </div>
          </div>

          {/* Rotating Words Card */}
          <div className="bg-white rounded-3xl p-6 border border-zinc-200/60 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center">
                <FiRefreshCw className="text-purple-600 text-lg" />
              </div>
              <h3 className="font-bold text-zinc-900">Dynamic Text Rotation</h3>
            </div>
            <div className="relative">
              <input
                type="text"
                value={rotatingWords.join(",")}
                onChange={(e) => setRotatingWords(e.target.value.split(",").map(w => w.trim()))}
                placeholder="Ex: tomorrow, growth, excellence..."
                className="w-full px-5 py-4 bg-zinc-50 border-2 border-transparent rounded-2xl focus:border-purple-100 focus:bg-white focus:ring-4 focus:ring-purple-500/5 transition-all outline-none text-zinc-900 font-medium"
              />
            </div>
            <p className="text-xs text-zinc-400 mt-3 flex items-center gap-1">
              <FiAlertCircle /> Separate words with commas to create the rotating text effect
            </p>
          </div>

          {/* Background Images Card */}
          <div className="bg-white rounded-3xl p-6 border border-zinc-200/60 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center">
                <FiImage className="text-emerald-600 text-lg" />
              </div>
              <h3 className="font-bold text-zinc-900">Background Slideshow</h3>
            </div>
            <div className="p-2 bg-zinc-50 rounded-2xl border-2 border-dashed border-zinc-200 hover:border-emerald-200 hover:bg-emerald-50/10 transition-colors">
              <CloudinaryUploader
                label="Manage backgrounds"
                multiple={true}
                value={backgroundImages}
                onChange={setBackgroundImages}
              />
            </div>
          </div>

          {/* Contact Information Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl p-6 border border-zinc-200/60 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center">
                  <FiPhone className="text-orange-600 text-lg" />
                </div>
                <h3 className="font-bold text-zinc-900">Call to Action (Phone)</h3>
              </div>
              <input
                type="tel"
                value={ctaPhone}
                onChange={(e) => setCtaPhone(e.target.value)}
                placeholder="+91 XXXXXXXXXX"
                className="w-full px-5 py-4 bg-zinc-50 border-2 border-transparent rounded-2xl focus:border-orange-100 focus:bg-white focus:ring-4 focus:ring-orange-500/5 transition-all outline-none text-zinc-900 font-medium"
              />
            </div>

            <div className="bg-white rounded-3xl p-6 border border-zinc-200/60 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                  <FiMessageCircle className="text-green-600 text-lg" />
                </div>
                <h3 className="font-bold text-zinc-900">Call to Action (WhatsApp)</h3>
              </div>
              <input
                type="text"
                value={ctaWhatsapp}
                onChange={(e) => setCtaWhatsapp(e.target.value)}
                placeholder="WhatsApp URL or Number"
                className="w-full px-5 py-4 bg-zinc-50 border-2 border-transparent rounded-2xl focus:border-green-100 focus:bg-white focus:ring-4 focus:ring-green-500/5 transition-all outline-none text-zinc-900 font-medium"
              />
            </div>
          </div>
        </div>

        {/* Info Column */}
        <div className="space-y-6">
          <div className="bg-blue-600 rounded-[2rem] p-8 text-white shadow-xl shadow-blue-200/50">
            <h3 className="text-xl font-bold mb-4">Quick Tips</h3>
            <ul className="space-y-4 text-blue-50 text-sm">
              <li className="flex gap-3">
                <FiCheckCircle className="shrink-0 mt-1" />
                <span>Keep titles short and punchy for maximum impact on mobile screens.</span>
              </li>
              <li className="flex gap-3">
                <FiCheckCircle className="shrink-0 mt-1" />
                <span>Use landing-page keywords to create a sense of trust and authority.</span>
              </li>
              <li className="flex gap-3">
                <FiCheckCircle className="shrink-0 mt-1" />
                <span>Optimize background images for web to ensure fast page load speeds.</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-3xl p-6 border border-zinc-200/60 shadow-sm">
             <div className="flex items-center gap-2 mb-4">
              <span className="flex h-2 w-2 rounded-full bg-blue-500" />
              <span className="text-xs font-bold uppercase text-zinc-400">Live Preview</span>
             </div>
             <p className="text-xs text-zinc-400">Preview functionality coming in next update. Current settings will affect the home page instantly after save.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

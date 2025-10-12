"use client";
import { useState } from "react";
import CloudinaryUploader from "@/components/CloudinaryUploader";
import { 
  FiType, 
  FiRefreshCw, 
  FiImage, 
  FiPhone, 
  FiMessageCircle,
  FiSave,
  FiSettings,
  FiEye,
  FiEdit3
} from "react-icons/fi";

export default function HeroAdmin() {
  const [title, setTitle] = useState("");
  const [rotatingWords, setRotatingWords] = useState(["demolition"]);
  const [backgroundImages, setBackgroundImages] = useState([]);
  const [ctaPhone, setCtaPhone] = useState("+91 8069648411");
  const [ctaWhatsapp, setCtaWhatsapp] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const saveHero = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/hero", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, rotatingWords, backgroundImages, ctaPhone, ctaWhatsapp }),
      });
      await res.json();
      // Success animation/notification
      const button = document.querySelector('.save-btn');
      button.classList.add('success-animation');
      setTimeout(() => button.classList.remove('success-animation'), 2000);
    } catch (error) {
      console.error("Save failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen mt-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 p-6">
      {/* Header Section with modern card design */}
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <FiSettings className="text-white text-xl" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Hero Configuration
              </h1>
              <p className="text-gray-500 text-sm">Customize your homepage hero section</p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Form Fields */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Hero Title Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <FiType className="text-blue-600 text-lg" />
                </div>
                <h3 className="font-semibold text-gray-900">Hero Title</h3>
              </div>
              <div className="relative">
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter your compelling hero title..."
                  className="w-full px-4 py-3 bg-gray-50 border-0 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200 text-gray-900 placeholder-gray-400"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <FiEdit3 className="text-gray-400 text-sm" />
                </div>
              </div>
            </div>

            {/* Rotating Words Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                  <FiRefreshCw className="text-purple-600 text-lg" />
                </div>
                <h3 className="font-semibold text-gray-900">Dynamic Keywords</h3>
              </div>
              <div className="relative">
                <input
                  type="text"
                  value={rotatingWords.join(",")}
                  onChange={(e) => setRotatingWords(e.target.value.split(","))}
                  placeholder="renovation, construction, remodeling..."
                  className="w-full px-4 py-3 bg-gray-50 border-0 rounded-xl focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all duration-200 text-gray-900 placeholder-gray-400"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 space-x-2">
                  <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-md">CSV</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2">Separate keywords with commas for rotation effect</p>
            </div>

            {/* Background Images Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <FiImage className="text-green-600 text-lg" />
                </div>
                <h3 className="font-semibold text-gray-900">Background Gallery</h3>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <CloudinaryUploader
                  label="Upload Hero Backgrounds"
                  multiple={true}
                  value={backgroundImages}
                  onChange={setBackgroundImages}
                />
              </div>
            </div>

            {/* Contact Information Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Phone Card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                    <FiPhone className="text-orange-600 text-lg" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                </div>
                <input
                  type="text"
                  value={ctaPhone}
                  onChange={(e) => setCtaPhone(e.target.value)}
                  placeholder="+91 XXXXXXXXXX"
                  className="w-full px-4 py-3 bg-gray-50 border-0 rounded-xl focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all duration-200 text-gray-900 placeholder-gray-400"
                />
              </div>

              {/* WhatsApp Card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                    <FiMessageCircle className="text-emerald-600 text-lg" />
                  </div>
                  <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                </div>
                <input
                  type="text"
                  value={ctaWhatsapp}
                  onChange={(e) => setCtaWhatsapp(e.target.value)}
                  placeholder="https://wa.me/91XXXXXXXXXX"
                  className="w-full px-4 py-3 bg-gray-50 border-0 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all duration-200 text-gray-900 placeholder-gray-400"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Preview & Actions */}
          <div className="space-y-6">
            {/* Preview Card */}
           

            {/* Action Buttons */}
            <div className="space-y-4">
              {/* Primary Save Button */}
              <button
                onClick={saveHero}
                disabled={isLoading}
                className="save-btn w-full group relative px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none overflow-hidden"
              >
                <div className="flex items-center justify-center space-x-3">
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <FiSave className="text-lg" />
                  )}
                  <span>{isLoading ? "Saving Changes..." : "Save Hero Configuration"}</span>
                </div>
                
                {/* Success overlay */}
                <div className="absolute inset-0 bg-green-500 transform scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 flex items-center justify-center rounded-xl">
                  <span className="text-white font-semibold">✓ Saved Successfully!</span>
                </div>
              </button>

              {/* Secondary Actions */}
            
            </div>

            {/* Status Indicator */}
             
          </div>
        </div>
      </div>

      <style jsx>{`
        .success-animation {
          animation: successPulse 2s ease-in-out;
        }
        
        @keyframes successPulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); background: linear-gradient(to right, #10b981, #059669); }
          100% { transform: scale(1); }
        }
        
        .save-btn:hover .absolute {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}

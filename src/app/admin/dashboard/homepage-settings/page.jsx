// src/app/admin/dashboard/homepage-settings/page.jsx
import HomepageSettingsEditor from "@/components/admin/HomepageSettingsEditor";
import { FiHome } from "react-icons/fi";

export default function HomepageSettingsPage() {
  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden rounded-[2.5rem] bg-white border border-zinc-200/60 p-8 md:p-12 shadow-sm">
        <div className="relative z-10 flex items-center gap-6">
          <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-3xl">
            <FiHome />
          </div>
          <div>
            <h1 className="text-3xl font-black tracking-tight text-zinc-900">Manage Homepage Text</h1>
            <p className="text-zinc-500">Update hero subheaders, trust sections, and local SEO content.</p>
          </div>
        </div>
      </section>

      <HomepageSettingsEditor />
    </div>
  );
}

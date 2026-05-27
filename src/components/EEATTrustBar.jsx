import React from "react";
import { Award, ShieldCheck, Search, Settings } from "lucide-react";

export default function EEATTrustBar() {
  const trusts = [
    {
      icon: <Award className="h-5 w-5 text-blue-600" />,
      title: "Civil Engineers Only",
      desc: "Methodical diagnostic inspection & certified site supervision.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-blue-600" />,
      title: "5 to 10+ Year Warranty",
      desc: "Documented product and system application guarantees.",
    },
    {
      icon: <Search className="h-5 w-5 text-blue-600" />,
      title: "Free Site Inspection",
      desc: "Detailed moisture readings & crack evaluations.",
    },
    {
      icon: <Settings className="h-5 w-5 text-blue-600" />,
      title: "Premium Material Systems",
      desc: "Strictly applying global standard chemical configurations.",
    },
  ];

  return (
    <section className="bg-white border-y border-gray-150 py-8 relative z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trusts.map((t, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-3 rounded-2xl transition-all duration-300 hover:bg-[#F4F1EC]/40"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                {t.icon}
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-gray-900 leading-none">
                  {t.title}
                </h3>
                <p className="text-xs text-gray-500 leading-normal">
                  {t.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

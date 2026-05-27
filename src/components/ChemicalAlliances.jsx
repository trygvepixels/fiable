import React from "react";

export default function ChemicalAlliances() {
  const partners = [
    {
      name: "Dr. Fixit (Pidilite)",
      scope: "Elastomeric Waterproofing Membranes & Polyurethane Sealants",
    },
    {
      name: "Sika India",
      scope: "Structural Concrete Repair, Epoxy Flooring & Carbon Fiber Strengthening",
    },
    {
      name: "Fosroc Chemicals",
      scope: "Non-shrink Grouting, Crystalline Admixtures & Anchoring Systems",
    },
    {
      name: "Mapei India",
      scope: "Specialized Wall Renderings, Acrylic Coatings & PU Injections",
    },
    {
      name: "BASF (Master Builders)",
      scope: "Heavy Industrial Flooring Systems & Expansion Joint Treatments",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-[#F4F1EC] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="eyebrow mb-4">Certified Product Alliances</p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900">
            Material Systems We Trust & Apply
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            Fiable coordinates directly with leading chemical product manufacturers in India. We do not use cheap, unbranded cement modifiers. Every material configuration used on our sites is selected from global leader product lists based on technical data sheets.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {partners.map((p, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-bold text-gray-900 text-sm tracking-wide uppercase">
                {p.name}
              </h3>
              <p className="mt-4 text-xs text-gray-500 leading-relaxed border-t border-gray-150 pt-3">
                {p.scope}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { Droplet, Home, ArrowUpCircle, FlameKindling } from "lucide-react";

export default function PainPointsGrid() {
  const painPoints = [
    {
      icon: <Droplet className="h-6 w-6 text-[#234D7E]" />,
      title: "Terrace & Roof Leakages",
      problem: "Rainwater ponding causes ceilings to damp, leading to interior plaster spalling and ceiling paint failure.",
      solution: "Elastomeric PU (polyurethane) coatings or high-performance APP modified bituminous membranes.",
    },
    {
      icon: <Home className="h-6 w-6 text-[#234D7E]" />,
      title: "Rising Dampness & Wall Seepage",
      problem: "Capillary suction draws ground moisture up through walls, causing paint peeling, white salt patch deposits, and fungal growth.",
      solution: "Chemical injection grouting to create an impermeable damp-proof barrier (DPC) inside masonry walls.",
    },
    {
      icon: <ArrowUpCircle className="h-6 w-6 text-[#234D7E]" />,
      title: "Basement & Sump Moisture",
      problem: "Heavy hydrostatic water pressure leaks through floor joints, retaining walls, and sumps, threatening dry storage zones.",
      solution: "High-performance crystalline waterproofing systems combined with specialized polyurethane grout injection.",
    },
    {
      icon: <FlameKindling className="h-6 w-6 text-[#234D7E]" />,
      title: "RCC Spalling & Structural Cracks",
      problem: "Corroded rebar expands, cracking columns, beam sections, and slabs, causing concrete chunks to fall off.",
      solution: "Rust converter priming, polymer modified mortar plastering, micro-concrete jacketing, and structural epoxy injection.",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="eyebrow mb-4">Targeted Engineering Solutions</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            Seepage & Structural Problems We Resolve
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600 max-w-3xl mx-auto">
            Standard masons apply cosmetic plaster patchwork that fails within a season. Fiable diagnoses structural seepage at the root using engineering principles and long-lasting chemical systems.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {painPoints.map((p, idx) => (
            <div
              key={idx}
              className="group block rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#234D7E] transition-all group-hover:bg-[#234D7E] group-hover:text-white">
                {p.icon}
              </div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900 transition-colors group-hover:text-[#234D7E]">
                {p.title}
              </h3>
              <div className="space-y-4 text-sm leading-relaxed text-gray-600">
                <p>
                  <strong className="text-gray-900">The Issue:</strong> {p.problem}
                </p>
                <p className="border-t border-gray-100 pt-3">
                  <strong className="text-gray-900 text-[#234D7E]">Engineering Fix:</strong> {p.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

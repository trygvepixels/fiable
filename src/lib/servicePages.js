import { CONTACT_PHONE, SITE_URL } from "@/lib/site";

const image =
  "https://res.cloudinary.com/dekoldk8g/image/upload/v1775404179/pyy4pjsr0kj8hwtlhcty.jpg";

const areas = [
  "Lucknow",
  "Gomti Nagar",
  "Hazratganj",
  "Indira Nagar",
  "Kanpur",
  "Noida",
  "Delhi NCR",
  "Unnao",
  "Greater Noida",
  "Gurugram",
  "Maharashtra",
  "Industrial Zones",
];

const related = [
  { title: "Waterproofing Services", href: "/services/waterproofing-services" },
  { title: "Structural Refurbishment", href: "/services/structural-refurbishment" },
  { title: "Industrial Flooring", href: "/services/industrial-flooring-systems" },
  { title: "Industrial Grouting", href: "/services/industrial-grouting-services" },
  { title: "Concrete Cutting", href: "/services/concrete-cutting-demolition" },
  { title: "Anchor/Rebar Services", href: "/services/anchor-rebar-services" },
];

function serviceSchema({ title, slug, description, serviceType }) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${SITE_URL}/services/${slug}#service`,
      name: `${title} in Lucknow`,
      serviceType,
      description,
      provider: {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}#localbusiness`,
        name: "Fiable Building Solutions",
        telephone: CONTACT_PHONE,
        image,
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "728, Phase 2, Khasra No. 21, Eden Enclave, Kursi Road, Gudumba BKT",
          addressLocality: "Lucknow",
          addressRegion: "Uttar Pradesh",
          postalCode: "226026",
          addressCountry: "IN",
        },
      },
      areaServed: [
        { "@type": "City",                name: "Lucknow" },
        { "@type": "City",                name: "Kanpur" },
        { "@type": "State",               name: "Uttar Pradesh" },
        { "@type": "AdministrativeArea",  name: "Delhi NCR" },
        { "@type": "Country",             name: "India" },
      ],
      url: `${SITE_URL}/services/${slug}`,
      // NOTE: aggregateRating intentionally omitted — add when real review data is available
    },
    // BreadcrumbList — enables breadcrumb in Google SERP result
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home",     item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
        { "@type": "ListItem", position: 3, name: title,      item: `${SITE_URL}/services/${slug}` },
      ],
    },
  ];
}

function withDefaults(slug, data) {
  return {
    slug,
    image,
    related,
    areas,
    areaPrefix: `${data.title} in`,
    areaDescription:
      "Residential, commercial, and industrial site execution with trained supervision.",
    primaryCta: "Request a Consultation",
    schema: serviceSchema({ slug, ...data }),
    ...data,
  };
}

export const servicePages = {
  "structural-refurbishment": withDefaults("structural-refurbishment", {
    title: "Structural Refurbishment",
    serviceType: "Concrete Rehabilitation",
    description:
      "Structural refurbishment, concrete repair, column jacketing, CFRP wrapping, corrosion treatment, and RCC rehabilitation.",
    eyebrow: "Concrete repair and strengthening",
    heroTitle: "Structural Refurbishment & Concrete Repair Services",
    imageAlt: "Structural refurbishment and concrete repair work",
    badges: ["NDT-led diagnosis", "RCC repair", "CFRP and jacketing"],
    intro:
      "Fiable restores distressed RCC structures with engineered repair methods for columns, beams, slabs, balconies, basements, and industrial assets. We diagnose cracks, corrosion, spalling, honeycombing, and load-performance issues before selecting the right strengthening system.",
    approachTitle: "A repair method based on structural behavior, not patchwork",
    approach:
      "Structural refurbishment starts with condition mapping, carbonation or corrosion checks, concrete soundness review, and repair objective definition. Our team then specifies polymer repair mortars, micro-concrete, epoxy injection, steel jacketing, or CFRP wrapping based on the actual failure mode.",
    scopeEyebrow: "Structural repair scope",
    scopeTitle: "Repair, restore, and strengthen aging concrete assets",
    cards: [
      {
        title: "Column & Beam Jacketing",
        meta: "RCC enlargement | steel cage | micro-concrete",
        body: "Capacity enhancement and rehabilitation for cracked, under-designed, or corroded columns and beams.",
      },
      {
        title: "CFRP Wrapping Systems",
        meta: "carbon fiber | epoxy resin | low dead load",
        body: "High-strength composite wrapping for seismic strengthening, flexural upgrades, and shear improvement.",
      },
      {
        title: "Spalling & Corrosion Repair",
        meta: "rebar treatment | repair mortar | protective coating",
        body: "Concrete breakout, steel cleaning, anti-corrosion primer, and profile rebuilding with structural mortars.",
      },
      {
        title: "Epoxy Crack Injection",
        meta: "low-viscosity resin | crack bonding | monolithic repair",
        body: "Resin injection for dormant structural cracks in slabs, beams, walls, and concrete members.",
      },
    ],
    areaTitle: "Structural repair teams for Lucknow, NCR, and industrial sites",
    areaIntro:
      "We support residential societies, commercial buildings, factories, warehouses, parking basements, and legacy structures requiring supervised concrete rehabilitation.",
    philosophyEyebrow: "Repair philosophy",
    philosophyTitle: "The goal is not to hide damage. The goal is to restore performance.",
    philosophy:
      "Every visible crack or spall has a cause. We identify moisture paths, steel corrosion, poor compaction, overload, impact, or movement before repair. This reduces repeated failures and gives owners a clearer technical basis for maintenance.",
    stats: [
      ["RCC", "Column, beam, slab repair"],
      ["CFRP", "Lightweight strengthening"],
      ["NDT", "Condition-led planning"],
    ],
    processTitle: "Structural refurbishment sequence",
    process: [
      "Inspect cracks, exposed steel, dampness, deflection, spalling, and concrete soundness.",
      "Mark repair zones, remove weak concrete, clean reinforcement, and prepare sound edges.",
      "Treat steel with anti-corrosion systems and rebuild profiles with repair mortar or micro-concrete.",
      "Install jacketing, CFRP, epoxy injection, or protective coating as per site requirement.",
      "Document repaired zones and share curing, loading, and maintenance guidance.",
    ],
    faqs: [
      {
        q: "When does a building need structural refurbishment?",
        a: "Warning signs include exposed rusted reinforcement, falling concrete, diagonal cracks, sagging slabs, repeated leakage at RCC members, and concrete that sounds hollow during tapping.",
      },
      {
        q: "Is CFRP better than steel jacketing?",
        a: "CFRP is lightweight and corrosion-resistant, while steel or RCC jacketing can be better for heavy capacity enhancement. The right method depends on the member condition, load demand, access, and consultant recommendation.",
      },
      {
        q: "Can spalled concrete be repaired permanently?",
        a: "Yes, if weak concrete is removed, reinforcement is properly cleaned and treated, and the repair mortar or micro-concrete is compatible with the original member.",
      },
    ],
  }),

  "industrial-flooring-systems": withDefaults("industrial-flooring-systems", {
    title: "Industrial Flooring Systems",
    serviceType: "Industrial Flooring",
    description:
      "Epoxy, PU, ESD, self-leveling, anti-skid, and heavy-duty industrial flooring systems for factories, warehouses, and process plants.",
    eyebrow: "Factory and warehouse floors",
    heroTitle: "Industrial Flooring Systems for High-Performance Sites",
    imageAlt: "Industrial epoxy and PU flooring system",
    badges: ["Epoxy and PU", "Chemical resistance", "Fast shutdown planning"],
    intro:
      "Fiable installs industrial floor systems that improve durability, hygiene, safety, and maintenance in production units, warehouses, food processing areas, parking decks, and logistics facilities.",
    approachTitle: "A floor system should match traffic, chemicals, cleaning, and downtime",
    approach:
      "We evaluate existing slab strength, moisture, surface contamination, traffic loads, forklift movement, chemical exposure, and required finish before selecting epoxy, PU, ESD, screed, or anti-skid systems.",
    scopeEyebrow: "Flooring service scope",
    scopeTitle: "Durable floors for factories, warehouses, and commercial assets",
    cards: [
      {
        title: "Epoxy Floor Coatings",
        meta: "dust-proof | glossy | abrasion resistant",
        body: "Protective epoxy coating systems for warehouses, workshops, parking decks, and utility areas.",
      },
      {
        title: "PU Concrete Flooring",
        meta: "thermal shock | food-grade | heavy duty",
        body: "High-performance PU floors for wet processing, food units, commercial kitchens, and chemical cleaning areas.",
      },
      {
        title: "Self-Leveling Floors",
        meta: "smooth finish | easy cleaning | premium surface",
        body: "Seamless self-leveling systems for production, pharma, labs, and clean industrial environments.",
      },
      {
        title: "Floor Repair & Resurfacing",
        meta: "crack repair | grinding | topping",
        body: "Surface preparation, crack correction, joint treatment, and renewed protective flooring layers.",
      },
    ],
    areaTitle: "Industrial flooring contractors across Lucknow, NCR, and production belts",
    areaIntro:
      "We work with manufacturing units, warehouses, commercial kitchens, pharma-support spaces, parking facilities, and high-traffic commercial surfaces.",
    philosophyEyebrow: "Flooring philosophy",
    philosophyTitle: "A good industrial floor is quiet, safe, clean, and predictable.",
    philosophy:
      "Industrial flooring is not just a finish. It affects forklift movement, cleaning time, dust control, worker safety, and chemical resistance. We design floors around operations so the final surface supports daily work.",
    stats: [
      ["Epoxy", "Dust-proof coating"],
      ["PU", "Thermal and chemical resistance"],
      ["ESD", "Static control options"],
    ],
    processTitle: "Industrial flooring execution sequence",
    process: [
      "Inspect slab level, cracks, moisture, contamination, traffic type, and shutdown window.",
      "Grind or shot-blast the surface and repair cracks, joints, and weak patches.",
      "Apply compatible primer and repair layers to build adhesion and surface integrity.",
      "Install epoxy, PU, screed, anti-skid, or self-leveling system to specified thickness.",
      "Allow curing, inspect finish, and hand over cleaning and traffic-use instructions.",
    ],
    faqs: [
      {
        q: "Which is better: epoxy or PU flooring?",
        a: "Epoxy works well for dry warehouses and general industrial use. PU is better for wet areas, thermal shock, food processing, and aggressive cleaning environments.",
      },
      {
        q: "Can flooring be done without stopping the whole plant?",
        a: "Often yes. We can divide work into zones and plan night or weekend execution, depending on curing requirements and operational safety.",
      },
      {
        q: "Why does old epoxy peel?",
        a: "Common causes are poor grinding, moisture vapor, oil contamination, wrong primer, or applying coating over weak concrete.",
      },
    ],
  }),

  "industrial-grouting-services": withDefaults("industrial-grouting-services", {
    title: "Industrial Grouting Services",
    serviceType: "Industrial Grouting",
    description:
      "Non-shrink grouting, epoxy grouting, machine foundation grouting, base plate grouting, anchor grouting, and void filling.",
    eyebrow: "Machine and foundation stability",
    heroTitle: "Industrial Grouting Services for Machines & Structures",
    imageAlt: "Industrial machine foundation grouting",
    badges: ["Non-shrink grout", "Epoxy grout", "Machine alignment support"],
    intro:
      "Fiable delivers precision grouting for machine foundations, base plates, turbine supports, pumps, pedestals, anchors, and structural voids where load transfer and vibration control matter.",
    approachTitle: "Grouting is a load-transfer detail, not a gap-filling shortcut",
    approach:
      "We check base plate geometry, grout thickness, surface roughness, anchor position, flow path, shuttering leakage, and equipment tolerance before selecting cementitious or epoxy grout.",
    scopeEyebrow: "Grouting service scope",
    scopeTitle: "Precision support for machines, anchors, and base plates",
    cards: [
      {
        title: "Machine Foundation Grouting",
        meta: "vibration control | load transfer | alignment",
        body: "Grout placement below machines, compressors, pumps, and production equipment base frames.",
      },
      {
        title: "Base Plate Grouting",
        meta: "non-shrink | flowable | high strength",
        body: "Structural grouting below steel base plates, columns, rail supports, and industrial frames.",
      },
      {
        title: "Epoxy Grouting",
        meta: "chemical resistance | precision equipment | impact",
        body: "Epoxy grout systems for dynamic loads, chemical exposure, and critical machinery bases.",
      },
      {
        title: "Void Filling & Anchors",
        meta: "pockets | sleeves | structural gaps",
        body: "Controlled filling around anchors, pockets, sleeves, pedestals, and inaccessible cavities.",
      },
    ],
    areaTitle: "Grouting teams for plants, factories, and infrastructure assets",
    areaIntro:
      "We support equipment installation teams, plant maintenance teams, EPC contractors, and facility owners with planned grouting execution.",
    philosophyEyebrow: "Grouting philosophy",
    philosophyTitle: "The machine is only as stable as the support beneath it.",
    philosophy:
      "Poor grouting can create vibration, misalignment, cracked bases, and early equipment issues. We focus on flow, bond, formwork tightness, curing, and load-transfer continuity.",
    stats: [
      ["80 MPa+", "High-strength grout options"],
      ["Epoxy", "Dynamic load support"],
      ["24/7", "Shutdown-sensitive planning"],
    ],
    processTitle: "Industrial grouting execution sequence",
    process: [
      "Inspect foundation, plate geometry, anchor locations, grout gap, and access conditions.",
      "Clean, roughen, saturate, or prime surfaces according to grout type and specification.",
      "Seal formwork tightly and plan pour direction, venting, and overflow control.",
      "Mix and place grout continuously to avoid voids, segregation, or cold joints.",
      "Cure, de-shutter, inspect bearing, and support equipment handover requirements.",
    ],
    faqs: [
      {
        q: "When should epoxy grout be used?",
        a: "Epoxy grout is preferred for precision machines, chemical exposure, dynamic loading, and areas where high early strength and low shrinkage are critical.",
      },
      {
        q: "What causes grout failure?",
        a: "Common causes include poor surface preparation, leaking formwork, excessive water, wrong grout gap, poor curing, or interrupted pouring.",
      },
      {
        q: "Can grouting be done during plant shutdown?",
        a: "Yes. Shutdown grouting is common, but it needs clear sequencing, material readiness, curing allowance, and coordination with alignment teams.",
      },
    ],
  }),

  "concrete-cutting-demolition": withDefaults("concrete-cutting-demolition", {
    title: "Concrete Cutting & Demolition",
    serviceType: "Concrete Cutting and Controlled Demolition",
    description:
      "Diamond core cutting, wall sawing, slab cutting, wire sawing, concrete breaking, and controlled demolition services.",
    eyebrow: "Controlled cutting and removal",
    heroTitle: "Concrete Cutting & Controlled Demolition Services",
    imageAlt: "Concrete cutting and controlled demolition work",
    badges: ["Diamond tools", "Controlled demolition", "Low vibration planning"],
    intro:
      "Fiable performs precise concrete cutting and controlled demolition for openings, retrofits, service ducts, anchor holes, slab modifications, structural alterations, and industrial removal work.",
    approachTitle: "Cut only what is required, protect everything around it",
    approach:
      "Before cutting, we review structural risk, reinforcement zones, access, dust and slurry control, vibration sensitivity, disposal route, and safety barricading. The goal is accurate removal with minimal disruption.",
    scopeEyebrow: "Cutting and demolition scope",
    scopeTitle: "Precision removal for retrofits, openings, and site modifications",
    cards: [
      {
        title: "Core Cutting",
        meta: "MEP holes | sleeves | anchor openings",
        body: "Diamond core drilling for pipes, ducts, sleeves, drains, anchors, and service penetrations.",
      },
      {
        title: "Wall & Slab Sawing",
        meta: "straight openings | door cuts | slab trimming",
        body: "Controlled saw cutting for new openings, expansion work, and concrete modification.",
      },
      {
        title: "Wire Sawing",
        meta: "large sections | thick concrete | low vibration",
        body: "Specialized cutting for heavy concrete members, foundations, and hard-to-access elements.",
      },
      {
        title: "Controlled Demolition",
        meta: "breaking | splitting | debris handling",
        body: "Planned removal of concrete elements with safety, sequence, and disposal coordination.",
      },
    ],
    areaTitle: "Concrete cutting teams for buildings, plants, and retrofit projects",
    areaIntro:
      "We serve renovation sites, commercial buildings, factories, basements, industrial plants, and infrastructure-related modifications.",
    philosophyEyebrow: "Cutting philosophy",
    philosophyTitle: "Precision demolition is construction work in reverse.",
    philosophy:
      "Good demolition protects the remaining structure. We focus on sequence, vibration control, edge finish, reinforcement awareness, and safe removal instead of uncontrolled breaking.",
    stats: [
      ["Core", "Clean circular openings"],
      ["Saw", "Accurate straight cuts"],
      ["Safe", "Barricaded execution"],
    ],
    processTitle: "Concrete cutting execution sequence",
    process: [
      "Mark cut lines, openings, drilling points, and nearby structural or MEP risks.",
      "Protect surrounding surfaces and arrange water, slurry, dust, and debris control.",
      "Set machines, anchors, tracks, or rigs according to access and cut depth.",
      "Cut or drill in sequence while monitoring vibration, edge condition, and safety zone.",
      "Remove sections, clean debris, and hand over openings ready for next trade.",
    ],
    faqs: [
      {
        q: "Is diamond cutting better than manual breaking?",
        a: "Diamond cutting is more precise, cleaner, and lower vibration. Manual breaking is useful for rough removal but can damage surrounding concrete if not controlled.",
      },
      {
        q: "Can you cut RCC walls and slabs?",
        a: "Yes. RCC can be cut with diamond saws, core drilling, or wire saws depending on thickness, reinforcement, access, and required finish.",
      },
      {
        q: "How do you manage dust and slurry?",
        a: "We plan water control, slurry collection, surface protection, and debris movement before work starts.",
      },
    ],
  }),

  "anchor-rebar-services": withDefaults("anchor-rebar-services", {
    title: "Anchor/Rebar Services",
    serviceType: "Chemical Anchoring and Post-installed Rebar",
    description:
      "Chemical anchoring, post-installed rebar fixing, threaded rod installation, epoxy anchoring, and pull-out testing.",
    eyebrow: "Post-installed structural fixing",
    heroTitle: "Anchor/Rebar Services for Structural Connections",
    imageAlt: "Chemical anchor and post-installed rebar fixing",
    badges: ["Chemical anchoring", "Rebar doweling", "Pull-out validation"],
    intro:
      "Fiable installs post-installed rebars, threaded rods, and chemical anchors for slab extensions, column additions, base plates, brackets, railings, equipment supports, and structural retrofits.",
    approachTitle: "Anchors are only reliable when drilling, cleaning, resin, and embedment are controlled",
    approach:
      "We verify hole diameter, depth, edge distance, dust removal, resin type, curing time, steel grade, and installation sequence so the connection can safely transfer design loads.",
    scopeEyebrow: "Anchor and rebar scope",
    scopeTitle: "Reliable connections for retrofits and structural additions",
    cards: [
      {
        title: "Post-installed Rebar",
        meta: "slab extension | beam connection | doweling",
        body: "Chemical rebar fixing for structural continuation, extensions, and RCC modification work.",
      },
      {
        title: "Threaded Rod Anchoring",
        meta: "base plates | brackets | supports",
        body: "High-load threaded rod installation for steel frames, equipment bases, and support systems.",
      },
      {
        title: "Epoxy Chemical Anchors",
        meta: "high bond | deeper embedment | structural loads",
        body: "Epoxy and hybrid resin systems for cracked or non-cracked concrete applications.",
      },
      {
        title: "Pull-out Testing",
        meta: "proof load | documentation | QC",
        body: "On-site load verification for critical anchors and post-installed rebar works.",
      },
    ],
    areaTitle: "Anchor and rebar teams for retrofit, MEP, and industrial projects",
    areaIntro:
      "We support contractors, consultants, plant teams, and builders who need controlled fixing for structural or heavy-duty applications.",
    philosophyEyebrow: "Fixing philosophy",
    philosophyTitle: "The hidden hole cleaning step decides anchor performance.",
    philosophy:
      "Many anchor failures happen because holes are dusty, wet, shallow, oversized, or loaded before curing. We follow disciplined drilling, brushing, blowing, injection, insertion, and curing practices.",
    stats: [
      ["Rebar", "Post-installed dowels"],
      ["M12-M30", "Threaded rods"],
      ["QC", "Pull-out testing"],
    ],
    processTitle: "Anchor/rebar installation sequence",
    process: [
      "Mark anchor or rebar points and verify edge distance, spacing, and embedment depth.",
      "Drill holes with correct diameter and depth using controlled equipment.",
      "Clean holes with blow-brush-blow sequence until dust is removed.",
      "Inject approved chemical resin and insert rebar or threaded rod with rotation.",
      "Allow curing, protect installed anchors, and perform testing where required.",
    ],
    faqs: [
      {
        q: "Why is hole cleaning so important?",
        a: "Dust blocks resin bond with concrete. Even premium chemical anchors can fail if drilling dust is not removed properly.",
      },
      {
        q: "Can chemical anchors be used near edges?",
        a: "Yes, but edge distance, load direction, concrete quality, and resin type must be checked before installation.",
      },
      {
        q: "Do you provide pull-out testing?",
        a: "Yes. We can arrange pull-out testing for selected anchors or rebars where consultant or QC validation is needed.",
      },
    ],
  }),

  "civil-construction": withDefaults("civil-construction", {
    title: "Civil Construction",
    serviceType: "Civil Construction Contracting",
    description:
      "Civil construction, RCC works, masonry, foundations, structural additions, industrial sheds, repair works, and finishing coordination.",
    eyebrow: "Turnkey civil execution",
    heroTitle: "Civil Construction Services for Buildings & Industrial Sites",
    imageAlt: "Civil construction and RCC site execution",
    badges: ["RCC works", "Masonry and plaster", "Site coordination"],
    intro:
      "Fiable undertakes civil construction works for residential, commercial, and industrial clients, including RCC foundations, structural additions, masonry, plastering, repair scopes, and allied site development.",
    approachTitle: "Civil work succeeds when drawings, sequencing, materials, and supervision align",
    approach:
      "We approach civil construction with clear scope definition, quantity planning, site measurements, material control, skilled manpower, and stage-wise supervision so work progresses with fewer surprises.",
    scopeEyebrow: "Civil work scope",
    scopeTitle: "Construction support from RCC to finishing-ready surfaces",
    cards: [
      {
        title: "RCC & Foundation Work",
        meta: "footings | pedestals | slabs | beams",
        body: "Reinforcement, shuttering, concrete placement, curing, and structural civil execution.",
      },
      {
        title: "Masonry & Plaster",
        meta: "blockwork | brickwork | internal surfaces",
        body: "Wall construction, plastering, surface correction, and finishing-ready civil work.",
      },
      {
        title: "Industrial Civil Works",
        meta: "machine bases | trenches | platforms",
        body: "Civil support for plant modifications, foundations, floor repairs, drains, and utility areas.",
      },
      {
        title: "Renovation & Additions",
        meta: "alterations | extensions | repair coordination",
        body: "Civil alterations, extensions, repair scopes, and coordination with adjacent service teams.",
      },
    ],
    areaTitle: "Civil construction teams for residential, commercial, and industrial projects",
    areaIntro:
      "We support homeowners, developers, factories, institutions, warehouses, and facility teams requiring disciplined civil execution.",
    philosophyEyebrow: "Construction philosophy",
    philosophyTitle: "Good civil work is measured twice: once on site, once in service life.",
    philosophy:
      "We focus on practical detailing, correct material use, curing discipline, line-level quality, and coordination between trades so the work remains strong after handover.",
    stats: [
      ["RCC", "Structural civil work"],
      ["Site", "Supervised execution"],
      ["Turnkey", "Multi-scope coordination"],
    ],
    processTitle: "Civil construction execution sequence",
    process: [
      "Review drawings, site dimensions, scope boundaries, access, and work sequence.",
      "Plan materials, manpower, shuttering, equipment, and safety requirements.",
      "Execute excavation, PCC, reinforcement, shuttering, concreting, masonry, or plaster as required.",
      "Check line, level, curing, surface finish, and trade readiness at each stage.",
      "Handover completed areas with punch-list closure and maintenance notes.",
    ],
    faqs: [
      {
        q: "Do you take small civil repair projects?",
        a: "Yes. We handle both focused repair scopes and larger civil packages depending on access, timeline, and scope clarity.",
      },
      {
        q: "Can you coordinate civil work with waterproofing or flooring?",
        a: "Yes. This is a common requirement, especially when slab repair, slope correction, waterproofing, and final flooring need to work together.",
      },
      {
        q: "Do you provide material with labor?",
        a: "Both labor-only and material-plus-labor models can be discussed after site review and scope definition.",
      },
    ],
  }),
};

export function getServicePageData(slug) {
  return servicePages[slug];
}

export function getServiceMetadata(slug) {
  const service = getServicePageData(slug);

  return {
    title: `${service.title} | Fiable Building Solutions`,
    description: service.description,
    alternates: {
      canonical: `${SITE_URL}/services/${slug}`,
    },
    openGraph: {
      title: service.heroTitle,
      description: service.description,
      url: `${SITE_URL}/services/${slug}`,
      images: [{ url: service.image, alt: service.imageAlt || service.title }],
    },
  };
}

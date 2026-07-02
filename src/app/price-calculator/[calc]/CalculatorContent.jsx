"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Phone,
  MapPin,
  Lock,
  Unlock,
  Download,
  RefreshCw,
  AlertCircle,
  Check,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { jsPDF } from "jspdf";
import { CONTACT_PHONE, SITE_URL } from "@/lib/site";

// Calculator Configurations
const CALCULATORS = {
  waterproofing: {
    title: "Waterproofing",
    icon: "💧",
    desc: "Calculate cost for roofs, terraces, basements, and wet area leakage waterproofing.",
    steps: [
      {
        id: "areaType",
        label: "Select Area Type",
        description: "Choose the area of your property that requires waterproofing.",
        type: "select",
        options: [
          { label: "Terrace / Roof Waterproofing", value: "terrace", rate: 75 },
          { label: "Basement Waterproofing", value: "basement", rate: 110 },
          { label: "Bathroom & Wet Area Sealing", value: "bathroom", rate: 70 },
          { label: "Internal & External Wall Dampness Treatment", value: "dampness", rate: 65 },
        ]
      },
      {
        id: "condition",
        label: "Current Leakage / Damage Condition",
        description: "Select the level of active leakage or dampness at the site.",
        type: "select",
        options: [
          { label: "Minor Dampness / Peeling Paint", value: "minor", multiplier: 1.0 },
          { label: "Active Leakage / Continuous Dripping", value: "active", multiplier: 1.25 },
          { label: "Visible Cracks & Structural Seepage", value: "cracked", multiplier: 1.4 },
        ]
      },
      {
        id: "areaSize",
        label: "Total Area (in Square Feet)",
        description: "Enter the approximate surface area that needs treatment.",
        type: "number",
        placeholder: "e.g., 500",
        min: 50,
        max: 50000,
        defaultValue: 500
      },
      {
        id: "city",
        label: "Your City in Uttar Pradesh",
        description: "We provide services all across UP. Select your location.",
        type: "select",
        options: [
          { label: "Lucknow", value: "lucknow" },
          { label: "Noida / Greater Noida", value: "noida" },
          { label: "Kanpur", value: "kanpur" },
          { label: "Ghaziabad", value: "ghaziabad" },
          { label: "Varanasi", value: "varanasi" },
          { label: "Prayagraj", value: "prayagraj" },
          { label: "Agra", value: "agra" },
          { label: "Gorakhpur", value: "gorakhpur" },
          { label: "Meerut", value: "meerut" },
          { label: "Aligarh", value: "aligarh" },
        ]
      }
    ],
    calculate: (inputs) => {
      const areaType = CALCULATORS.waterproofing.steps[0].options.find(o => o.value === inputs.areaType);
      const condition = CALCULATORS.waterproofing.steps[1].options.find(o => o.value === inputs.condition);
      const size = Number(inputs.areaSize || 500);

      const baseRate = areaType ? areaType.rate : 75;
      const mult = condition ? condition.multiplier : 1.0;
      
      const totalCost = baseRate * mult * size;
      const materialCost = totalCost * 0.5;
      const basePrep = totalCost * 0.15;
      const labourCost = totalCost * 0.2;
      const setupTax = totalCost * 0.15;

      return {
        total: totalCost,
        breakdown: [
          { item: "Material Cost (Specialist Membranes/Slurry)", cost: materialCost, visible: true },
          { item: "Surface Preparation & Crack Repair", cost: basePrep, visible: true },
          { item: "Labor & Specialized Application Charges", cost: labourCost, visible: false },
          { item: "Site Setup, Mobilization & Local Taxes", cost: setupTax, visible: false },
        ]
      };
    }
  },
  "core-cutting": {
    title: "Core Cutting",
    icon: "⚙️",
    desc: "Calculate RCC slab, wall cutting, and diamond core drilling costs.",
    steps: [
      {
        id: "diameter",
        label: "Hole Diameter (Size)",
        description: "Select the required diameter of the core drilling hole.",
        type: "select",
        options: [
          { label: "2 inch Diameter", value: "2in", rate: 350 },
          { label: "3 inch Diameter", value: "3in", rate: 500 },
          { label: "4 inch Diameter", value: "4in", rate: 650 },
          { label: "6 inch Diameter", value: "6in", rate: 1000 },
          { label: "8 inch Diameter", value: "8in", rate: 2000 },
          { label: "10 inch Diameter", value: "10in", rate: 3000 },
          { label: "12 inch Diameter", value: "12in", rate: 4000 },
        ]
      },
      {
        id: "depth",
        label: "Drilling Depth / Thickness",
        description: "Specify the depth of the slab or wall to be drilled.",
        type: "select",
        options: [
          { label: "Up to 6 inches Depth", value: "6in", multiplier: 1.0 },
          { label: "6 to 12 inches Depth", value: "12in", multiplier: 1.35 },
          { label: "12 to 18 inches Depth", value: "18in", multiplier: 1.75 },
        ]
      },
      {
        id: "holesCount",
        label: "Total Number of Holes",
        description: "Enter the number of core holes needed at the site.",
        type: "number",
        placeholder: "e.g., 5",
        min: 1,
        max: 1000,
        defaultValue: 5
      },
      {
        id: "city",
        label: "Your City in Uttar Pradesh",
        description: "Select your location for core drilling services.",
        type: "select",
        options: [
          { label: "Lucknow", value: "lucknow" },
          { label: "Noida / Greater Noida", value: "noida" },
          { label: "Kanpur", value: "kanpur" },
          { label: "Ghaziabad", value: "ghaziabad" },
          { label: "Varanasi", value: "varanasi" },
          { label: "Prayagraj", value: "prayagraj" },
          { label: "Agra", value: "agra" },
          { label: "Gorakhpur", value: "gorakhpur" },
          { label: "Meerut", value: "meerut" },
          { label: "Aligarh", value: "aligarh" },
        ]
      }
    ],
    calculate: (inputs) => {
      const diameter = CALCULATORS["core-cutting"].steps[0].options.find(o => o.value === inputs.diameter);
      const depth = CALCULATORS["core-cutting"].steps[1].options.find(o => o.value === inputs.depth);
      const count = Number(inputs.holesCount || 5);

      const baseRate = diameter ? diameter.rate : 500;
      const mult = depth ? depth.multiplier : 1.0;
      
      const subtotal = baseRate * mult * count;
      const mobilizationFee = Math.max(3500, subtotal * 0.15);
      const totalCost = Math.max(3500, subtotal + mobilizationFee);

      const machineUse = totalCost * 0.4;
      const consumables = totalCost * 0.25;
      const labor = totalCost * 0.2;
      const mobilization = totalCost * 0.15;

      return {
        total: totalCost,
        breakdown: [
          { item: "Heavy Core Rig Machine Operations", cost: machineUse, visible: true },
          { item: "Diamond Core Bit Wear & Water Slurry Prep", cost: consumables, visible: true },
          { item: "Qualified Operators & Safety Setup", cost: labor, visible: false },
          { item: "Equipment Mobilization to Site Location", cost: mobilization, visible: false },
        ]
      };
    }
  },
  "chemical-anchoring": {
    title: "Chemical Anchoring",
    icon: "🔗",
    desc: "Calculate anchor rod and structural rebar doweling costs.",
    steps: [
      {
        id: "anchorType",
        label: "Select Anchor Element Type",
        description: "Choose whether you are installing threaded rods or reinforcement rebar dowels.",
        type: "select",
        options: [
          { label: "Threaded Rod / Stud Installation", value: "rod", rate: 180 },
          { label: "Rebar Doweling (Slab/Beam extensions)", value: "rebar", rate: 250 },
        ]
      },
      {
        id: "diameter",
        label: "Anchor/Rebar Size (Diameter)",
        description: "Select the diameter of the steel element to be anchored.",
        type: "select",
        options: [
          { label: "12mm (M12) Size", value: "12mm", multiplier: 1.0 },
          { label: "16mm (M16) Size", value: "16mm", multiplier: 1.35 },
          { label: "20mm (M20) Size", value: "20mm", multiplier: 1.8 },
          { label: "25mm (M24) Size", value: "25mm", multiplier: 2.3 },
        ]
      },
      {
        id: "anchorsCount",
        label: "Total Number of Anchors",
        description: "Enter the total quantity of chemical anchors required.",
        type: "number",
        placeholder: "e.g., 50",
        min: 5,
        max: 5000,
        defaultValue: 50
      },
      {
        id: "city",
        label: "Your City in Uttar Pradesh",
        description: "Select your location to get anchoring estimates.",
        type: "select",
        options: [
          { label: "Lucknow", value: "lucknow" },
          { label: "Noida / Greater Noida", value: "noida" },
          { label: "Kanpur", value: "kanpur" },
          { label: "Ghaziabad", value: "ghaziabad" },
          { label: "Varanasi", value: "varanasi" },
          { label: "Prayagraj", value: "prayagraj" },
          { label: "Agra", value: "agra" },
          { label: "Gorakhpur", value: "gorakhpur" },
          { label: "Meerut", value: "meerut" },
          { label: "Aligarh", value: "aligarh" },
        ]
      }
    ],
    calculate: (inputs) => {
      const type = CALCULATORS["chemical-anchoring"].steps[0].options.find(o => o.value === inputs.anchorType);
      const diameter = CALCULATORS["chemical-anchoring"].steps[1].options.find(o => o.value === inputs.diameter);
      const count = Number(inputs.anchorsCount || 50);

      const baseRate = type ? type.rate : 200;
      const mult = diameter ? diameter.multiplier : 1.0;
      
      const totalCost = baseRate * mult * count;
      const chemicalCost = totalCost * 0.45;
      const drillingCost = totalCost * 0.2;
      const cleaningLabor = totalCost * 0.2;
      const setupTax = totalCost * 0.15;

      return {
        total: totalCost,
        breakdown: [
          { item: "Chemical Injection Resin (Epoxy/Hybrid)", cost: chemicalCost, visible: true },
          { item: "Drilling Holes using Rotary Hammer", cost: drillingCost, visible: true },
          { item: "Blow-Brush-Blow Cleaning & Insertion Labor", cost: cleaningLabor, visible: false },
          { item: "Consumables, Tension Testing & Local Taxes", cost: setupTax, visible: false },
        ]
      };
    }
  },
  "epoxy-flooring": {
    title: "Epoxy Flooring",
    icon: "🧱",
    desc: "Calculate material and installation costs for industrial epoxy and PU flooring.",
    steps: [
      {
        id: "systemType",
        label: "Select Flooring System",
        description: "Choose the flooring system based on thickness and performance needs.",
        type: "select",
        options: [
          { label: "Epoxy Protective Coating (1mm)", value: "coating", rate: 45 },
          { label: "Self-Leveling Epoxy Floor (2mm to 3mm)", value: "sl", rate: 85 },
          { label: "Heavy Duty PU Concrete Screed (4mm - 5mm)", value: "pu", rate: 140 },
          { label: "ESD Static Control Flooring (Electronics/Pharma)", value: "esd", rate: 180 },
        ]
      },
      {
        id: "baseCondition",
        label: "Concrete Base Condition",
        description: "Select the current condition of the concrete floor slab.",
        type: "select",
        options: [
          { label: "New & Smooth Concrete (Needs light grinding)", value: "new", multiplier: 1.0 },
          { label: "Old, Undulated or Cracked Concrete (Needs repairs)", value: "old", multiplier: 1.25 },
        ]
      },
      {
        id: "floorArea",
        label: "Total Area (in Square Feet)",
        description: "Enter the total floor area that needs coating.",
        type: "number",
        placeholder: "e.g., 2000",
        min: 200,
        max: 200000,
        defaultValue: 2000
      },
      {
        id: "city",
        label: "Your City in Uttar Pradesh",
        description: "Select your project location in UP.",
        type: "select",
        options: [
          { label: "Lucknow", value: "lucknow" },
          { label: "Noida / Greater Noida", value: "noida" },
          { label: "Kanpur", value: "kanpur" },
          { label: "Ghaziabad", value: "ghaziabad" },
          { label: "Varanasi", value: "varanasi" },
          { label: "Prayagraj", value: "prayagraj" },
          { label: "Agra", value: "agra" },
          { label: "Gorakhpur", value: "gorakhpur" },
          { label: "Meerut", value: "meerut" },
          { label: "Aligarh", value: "aligarh" },
        ]
      }
    ],
    calculate: (inputs) => {
      const type = CALCULATORS["epoxy-flooring"].steps[0].options.find(o => o.value === inputs.systemType);
      const condition = CALCULATORS["epoxy-flooring"].steps[1].options.find(o => o.value === inputs.baseCondition);
      const size = Number(inputs.floorArea || 2000);

      const baseRate = type ? type.rate : 85;
      const mult = condition ? condition.multiplier : 1.0;
      
      const totalCost = baseRate * mult * size;
      const resinCost = totalCost * 0.55;
      const grindingCost = totalCost * 0.15;
      const laborCost = totalCost * 0.18;
      const setupTax = totalCost * 0.12;

      return {
        total: totalCost,
        breakdown: [
          { item: "Specialist Resin & Curing Agents", cost: resinCost, visible: true },
          { item: "Floor Grinding & Surface Primer Coat", cost: grindingCost, visible: true },
          { item: "Trained Laying Crews & Joint Cut sealing", cost: laborCost, visible: false },
          { item: "Site Mobilization, Safety Gears & Local Taxes", cost: setupTax, visible: false },
        ]
      };
    }
  },
  grouting: {
    title: "Grouting",
    icon: "🏗️",
    desc: "Calculate grout bags and volume required for machinery base plates.",
    steps: [
      {
        id: "groutType",
        label: "Select Grout Type",
        description: "Choose cementitious non-shrink grout or high-impact epoxy grout.",
        type: "select",
        options: [
          { label: "Non-Shrink Cementitious Grout (GP2)", value: "gp2", rate: 50 },
          { label: "High-Strength Epoxy Grout (Heavy Vibration)", value: "epoxy", rate: 185 },
        ]
      },
      {
        id: "thickness",
        label: "Grout Gap Thickness (in mm)",
        description: "Specify the height/thickness of the gap under the base plate.",
        type: "number",
        placeholder: "e.g., 50",
        min: 10,
        max: 200,
        defaultValue: 50
      },
      {
        id: "plateArea",
        label: "Total Base Plate Area (in Square Feet)",
        description: "Enter the combined area of all base plates to be grouted.",
        type: "number",
        placeholder: "e.g., 10",
        min: 1,
        max: 5000,
        defaultValue: 10
      },
      {
        id: "city",
        label: "Your City in Uttar Pradesh",
        description: "Select your project location in UP.",
        type: "select",
        options: [
          { label: "Lucknow", value: "lucknow" },
          { label: "Noida / Greater Noida", value: "noida" },
          { label: "Kanpur", value: "kanpur" },
          { label: "Ghaziabad", value: "ghaziabad" },
          { label: "Varanasi", value: "varanasi" },
          { label: "Prayagraj", value: "prayagraj" },
          { label: "Agra", value: "agra" },
          { label: "Gorakhpur", value: "gorakhpur" },
          { label: "Meerut", value: "meerut" },
          { label: "Aligarh", value: "aligarh" },
        ]
      }
    ],
    calculate: (inputs) => {
      const type = CALCULATORS.grouting.steps[0].options.find(o => o.value === inputs.groutType);
      const thickness = Number(inputs.thickness || 50);
      const area = Number(inputs.plateArea || 10);

      const baseRate = type ? type.rate : 50;
      
      const volumeLiters = Math.ceil(0.0929 * area * thickness);
      const subtotal = volumeLiters * baseRate;
      const totalCost = Math.max(4000, subtotal); 

      const bagsNeeded = Math.ceil(volumeLiters / 13);

      const materialCost = totalCost * 0.6;
      const formwork = totalCost * 0.15;
      const pouringLabor = totalCost * 0.15;
      const mobilization = totalCost * 0.1;

      return {
        total: totalCost,
        bags: bagsNeeded,
        volume: volumeLiters,
        breakdown: [
          { item: `Grout Bags Material (Approx ${bagsNeeded} bags of 25kg)`, cost: materialCost, visible: true },
          { item: "Leak-proof Formwork & Shuttering Prep", cost: formwork, visible: true },
          { item: "Mixing & Continuous Pouring Labor", cost: pouringLabor, visible: false },
          { item: "Equipment Transport & Site Mobilization", cost: mobilization, visible: false },
        ]
      };
    }
  },
  "structural-rehab": {
    title: "Structural Rehab",
    icon: "🏛️",
    desc: "Calculate cost for concrete jacketing, CFRP carbon wrap, and epoxy injection.",
    steps: [
      {
        id: "method",
        label: "Rehabilitation Method",
        description: "Select the engineering method required to strengthen the structure.",
        type: "select",
        options: [
          { label: "CFRP (Carbon Fiber Reinforcement Polymer) Wrap", value: "cfrp", rate: 1600 },
          { label: "RCC Column & Beam Jacketing / enlargement", value: "jacketing", rate: 4500 },
          { label: "Epoxy Injection Crack Grouting", value: "injection", rate: 380 },
        ]
      },
      {
        id: "rehabQuantity",
        label: "Total Quantity (in Sq.Meters or Running Meters)",
        description: "Enter the quantity of columns/beams/cracks requiring treatment.",
        type: "number",
        placeholder: "e.g., 20",
        min: 2,
        max: 5000,
        defaultValue: 20
      },
      {
        id: "structureType",
        label: "Structure Category",
        description: "Specify the structure type to determine height/safety standards.",
        type: "select",
        options: [
          { label: "Residential / Office Building", value: "residential", multiplier: 1.0 },
          { label: "Heavy Industrial Factory / Bridge", value: "industrial", multiplier: 1.25 },
        ]
      },
      {
        id: "city",
        label: "Your City in Uttar Pradesh",
        description: "Select your project location in UP.",
        type: "select",
        options: [
          { label: "Lucknow", value: "lucknow" },
          { label: "Noida / Greater Noida", value: "noida" },
          { label: "Kanpur", value: "kanpur" },
          { label: "Ghaziabad", value: "ghaziabad" },
          { label: "Varanasi", value: "varanasi" },
          { label: "Prayagraj", value: "prayagraj" },
          { label: "Agra", value: "agra" },
          { label: "Gorakhpur", value: "gorakhpur" },
          { label: "Meerut", value: "meerut" },
          { label: "Aligarh", value: "aligarh" },
        ]
      }
    ],
    calculate: (inputs) => {
      const method = CALCULATORS["structural-rehab"].steps[0].options.find(o => o.value === inputs.method);
      const structure = CALCULATORS["structural-rehab"].steps[2].options.find(o => o.value === inputs.structureType);
      const quantity = Number(inputs.rehabQuantity || 20);

      const baseRate = method ? method.rate : 1500;
      const mult = structure ? structure.multiplier : 1.0;
      
      const totalCost = baseRate * mult * quantity;
      const fibersConcrete = totalCost * 0.5;
      const scaffolding = totalCost * 0.15;
      const structuralLabour = totalCost * 0.2;
      const setupTax = totalCost * 0.15;

      return {
        total: totalCost,
        breakdown: [
          { item: "Specialist Structural Reinforcement Materials", cost: fibersConcrete, visible: true },
          { item: "Scaffolding, Support Prop Setup & Sand Blasting", cost: scaffolding, visible: true },
          { item: "Qualified Structural Engineer & Repair Labor", cost: structuralLabour, visible: false },
          { item: "Quality Check Pull-Out Validation & Taxes", cost: setupTax, visible: false },
        ]
      };
    }
  }
};

export default function CalculatorContent({ calc }) {
  const router = useRouter();

  const [activeCalc, setActiveCalc] = useState(calc);
  const [currentStep, setCurrentStep] = useState(0);
  const [inputs, setInputs] = useState({});
  const [results, setResults] = useState(null);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [leadForm, setLeadForm] = useState({ name: "", phone: "", email: "", timeline: "Immediate" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [startTime, setStartTime] = useState(0);

  // Sync state if prop changes
  useEffect(() => {
    setActiveCalc(calc);
    setCurrentStep(0);
    setInputs({});
    setResults(null);
    setIsUnlocked(false);
  }, [calc]);

  // Set start time on mount for speed-submission check
  useEffect(() => {
    setStartTime(Date.now());
  }, []);

  const calculator = CALCULATORS[activeCalc];
  const steps = calculator.steps;
  const currentQuestion = steps[currentStep];

  // Initialize input defaults
  useEffect(() => {
    const defaults = {};
    steps.forEach((step) => {
      if (step.defaultValue !== undefined) {
        defaults[step.id] = step.defaultValue;
      } else if (step.options && step.options.length > 0) {
        defaults[step.id] = step.options[0].value;
      }
    });
    setInputs(defaults);
  }, [activeCalc]);

  const handleSelectOption = (value) => {
    const updatedInputs = { ...inputs, [currentQuestion.id]: value };
    setInputs(updatedInputs);
    
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      const calculated = calculator.calculate(updatedInputs);
      setResults(calculated);
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      const calculated = calculator.calculate(inputs);
      setResults(calculated);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setResults(null);
    setIsUnlocked(false);
    setShowPopup(false);
    const defaults = {};
    steps.forEach((step) => {
      if (step.defaultValue !== undefined) {
        defaults[step.id] = step.defaultValue;
      } else if (step.options && step.options.length > 0) {
        defaults[step.id] = step.options[0].value;
      }
    });
    setInputs(defaults);
  };

  const changeCalculator = (key) => {
    router.push(`/price-calculator/${key}`);
  };

  const handleLeadSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    if (!leadForm.name || !leadForm.phone || !leadForm.email) {
      setSubmitError("Please fill in all required fields.");
      setIsSubmitting(false);
      return;
    }

    const phoneDigits = leadForm.phone.replace(/\D/g, "");
    if (phoneDigits.length < 10) {
      setSubmitError("Please enter a valid 10-digit phone number.");
      setIsSubmitting(false);
      return;
    }

    const minCost = Math.round(results.total * 0.9);
    const maxCost = Math.round(results.total * 1.1);

    const payload = {
      fullName: leadForm.name,
      email: leadForm.email,
      phone: leadForm.phone,
      location: inputs.city ? inputs.city.toUpperCase() : "Uttar Pradesh",
      projectType: `Calculator Estimate: ${calculator.title}`,
      timeline: leadForm.timeline,
      message: `User calculated estimate: INR ${minCost.toLocaleString("en-IN")} - INR ${maxCost.toLocaleString("en-IN")}. Chosen inputs: ${JSON.stringify(inputs)}`,
      consent: "Yes",
      page: `/price-calculator/${activeCalc}`,
      _st: startTime, 
      website: "" 
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to submit lead.");
      }

      setIsUnlocked(true);
      setShowPopup(false);
      downloadPdfReport();

    } catch (err) {
      setSubmitError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const downloadPdfReport = () => {
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4"
    });

    const primaryBlue = [35, 77, 126];
    
    doc.setFillColor(...primaryBlue);
    doc.rect(0, 0, 210, 45, "F");
    
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text("FIABLE BUILDING SOLUTIONS", 15, 18);
    
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text("Pvt. Ltd. | Trust and Honesty is our Mantra", 15, 25);
    doc.text("Core Cutting, Waterproofing, Flooring & Structural Rehab Experts", 15, 30);
    doc.text(`Contact: ${CONTACT_PHONE} | enquiry@fiableprojects.com`, 15, 35);
    
    doc.setTextColor(20, 20, 20);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("ESTIMATED COST BREAKDOWN SHEET", 15, 58);
    
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 15, 65);
    doc.text(`Service Category: ${calculator.title}`, 15, 71);
    doc.text(`Site Location: ${inputs.city ? inputs.city.toUpperCase() : "UP Area"}`, 15, 77);

    doc.setDrawColor(220, 220, 220);
    doc.line(15, 83, 195, 83);
    
    doc.setFont("helvetica", "bold");
    doc.text("Input Parameters Chosen", 15, 93);
    doc.text("Values Chosen", 120, 93);
    doc.line(15, 96, 195, 96);
    
    doc.setFont("helvetica", "normal");
    let y = 104;
    steps.forEach((step) => {
      doc.text(step.label, 15, y);
      
      let displayVal = inputs[step.id];
      if (step.type === "select") {
        const opt = step.options.find(o => o.value === displayVal);
        if (opt) displayVal = opt.label;
      }
      doc.text(String(displayVal), 120, y);
      y += 8;
    });
    
    doc.line(15, y, 195, y);
    y += 12;
    
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text("Detailed Cost Itemization", 15, y);
    doc.text("Estimated Cost (INR)", 145, y);
    doc.line(15, y + 3, 195, y + 3);
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    y += 11;
    
    results.breakdown.forEach((item) => {
      doc.text(item.item, 15, y);
      doc.text(`INR ${Math.round(item.cost).toLocaleString("en-IN")}/-`, 145, y);
      y += 8;
    });
    
    doc.line(15, y, 195, y);
    y += 9;
    
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text("TOTAL ESTIMATED BUDGET RANGE", 15, y);
    const minCost = Math.round(results.total * 0.9);
    const maxCost = Math.round(results.total * 1.1);
    doc.text(`INR ${minCost.toLocaleString("en-IN")} - INR ${maxCost.toLocaleString("en-IN")} /-`, 125, y);
    
    y += 18;
    doc.setFillColor(244, 247, 252);
    doc.rect(15, y, 180, 24, "F");
    doc.setFont("helvetica", "italic");
    doc.setFontSize(8.5);
    doc.setTextColor(80, 80, 80);
    doc.text("* This is an automated engineering estimate. The actual quote may vary based on concrete density,", 18, y + 6);
    doc.text("  reinforcement layout, height levels, access to electricity/water, and detailed NDT testing results.", 18, y + 11);
    doc.text("  Please contact Fiable Building Solutions to schedule a free physical inspection by our civil engineers.", 18, y + 16);
    
    doc.save(`Fiable_Estimate_${activeCalc}.pdf`);
  };

  return (
    <div className="min-h-screen bg-[#F4F1EC] pb-16 pt-24">
      {/* Dynamic Tab Bar */}
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-6">
          <span className="bg-blue-600/10 text-blue-800 text-[10px] md:text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full">
            Uttar Pradesh Price Estimator
          </span>
          <h1 className="text-2xl md:text-4xl font-bold text-zinc-950 mt-3 leading-tight special-font">
            {activeCalc === "waterproofing" && "Waterproofing Cost Estimator & Price Calculator"}
            {activeCalc === "core-cutting" && "Concrete Core Cutting & Drilling Cost Calculator"}
            {activeCalc === "chemical-anchoring" && "Chemical Anchoring & Rebar Doweling Cost Calculator"}
            {activeCalc === "epoxy-flooring" && "Industrial Epoxy & PU Flooring Cost Calculator"}
            {activeCalc === "grouting" && "Machine Grouting & GP2 Volume Calculator"}
            {activeCalc === "structural-rehab" && "Structural Rehabilitation & Strengthening Cost Estimator"}
          </h1>
          <p className="text-zinc-500 mt-2 text-xs md:text-sm max-w-xl mx-auto">
            Get instant estimates for concrete cutting, waterproofing, repairs, and flooring across UP.
          </p>
        </div>

 

        {/* Dynamic Multi-Step Form */}
        <div className="max-w-xl mx-auto bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden p-5 sm:p-8 relative">
          <AnimatePresence mode="wait">
            {!results ? (
              <motion.div
                key={`${activeCalc}-step-${currentStep}`}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.2 }}
              >
                {/* Progress Indicators */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-blue-700">
                    Step {currentStep + 1} of {steps.length}
                  </span>
                  <div className="flex gap-1">
                    {steps.map((_, idx) => (
                      <div
                        key={idx}
                        className={`h-1 w-6 md:w-8 rounded-full transition-colors duration-300 ${
                          idx <= currentStep ? "bg-[#234D7E]" : "bg-zinc-200"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Question Details */}
                <h2 className="text-base md:text-lg font-bold text-zinc-950 leading-tight">
                  {currentQuestion.label}
                </h2>
                <p className="text-zinc-500 mt-1 text-[11px] md:text-xs">
                  {currentQuestion.description}
                </p>

                {/* Input Fields */}
                <div className="mt-6 mb-8">
                  {currentQuestion.type === "select" ? (
                    <div className="space-y-2">
                      {currentQuestion.options.map((opt) => {
                        const isSelected = inputs[currentQuestion.id] === opt.value;
                        return (
                          <button
                            key={opt.value}
                            onClick={() => handleSelectOption(opt.value)}
                            className={`w-full text-left p-3 md:p-3.5 rounded-xl border transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                              isSelected
                                ? "border-[#234D7E] bg-[#f4f7fc]"
                                : "border-zinc-200 hover:border-[#234D7E] bg-white"
                            }`}
                          >
                            <span className={`font-medium text-xs md:text-sm ${isSelected ? "text-blue-900" : "text-zinc-700"}`}>
                              {opt.label}
                            </span>
                            <div className={`h-4 w-4 md:h-4.5 md:w-4.5 rounded-full border flex items-center justify-center transition-colors ${
                              isSelected ? "border-[#234D7E] bg-[#234D7E]" : "border-zinc-300"
                            }`}>
                              {isSelected && <Check className="h-2.5 w-2.5 text-white" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="space-y-1.5">
                      <input
                        type="number"
                        min={currentQuestion.min}
                        max={currentQuestion.max}
                        value={inputs[currentQuestion.id] || ""}
                        onChange={(e) => setInputs({ ...inputs, [currentQuestion.id]: e.target.value })}
                        placeholder={currentQuestion.placeholder}
                        className="w-full p-2.5 md:p-3 rounded-lg border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-[#234D7E] text-zinc-900 font-medium text-xs md:text-sm"
                      />
                      <div className="flex justify-between text-[10px] md:text-xs text-zinc-400 mt-1">
                        <span>Min: {currentQuestion.min}</span>
                        <span>Max: {currentQuestion.max}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Back / Next Navigation */}
                <div className="flex justify-between items-center pt-4 border-t border-zinc-100">
                  <button
                    onClick={handleBack}
                    disabled={currentStep === 0}
                    className={`inline-flex items-center gap-1 text-xs font-semibold transition ${
                      currentStep === 0
                        ? "text-zinc-300 cursor-not-allowed"
                        : "text-zinc-500 hover:text-zinc-900 cursor-pointer"
                    }`}
                  >
                    <ArrowLeft className="h-3.5 w-3.5" /> Back
                  </button>

                  {currentQuestion.type !== "select" && (
                    <button
                      onClick={handleNext}
                      disabled={!inputs[currentQuestion.id]}
                      className="bg-[#234D7E] text-white font-semibold text-xs md:text-sm px-5 py-2.5 rounded-lg hover:bg-[#1b3b62] transition shadow-sm flex items-center gap-1 cursor-pointer disabled:opacity-50"
                    >
                      {currentStep === steps.length - 1 ? "Calculate Price" : "Continue"}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  )}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="results-page"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
              >
                {/* Result screen */}
                <div className="text-center mb-6">
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-blue-700">Cost Evaluation Complete</span>
                  <h2 className="text-xl md:text-2xl font-extrabold text-zinc-950 mt-0.5">Estimated Cost Range</h2>
                </div>

                {/* Estimate Cost Card */}
                <div className="bg-gradient-to-br from-[#234D7E] to-[#122842] rounded-2xl p-5 md:p-6 text-white shadow-md text-center relative overflow-hidden mb-6">
                  <div className="absolute -right-16 -top-16 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
                  <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/70">Estimated Budget Range</span>
                  <div className="text-xl md:text-2xl font-black mt-1 tracking-tight">
                    INR {Math.round(results.total * 0.9).toLocaleString("en-IN")} - INR {Math.round(results.total * 1.1).toLocaleString("en-IN")}
                  </div>
                  <p className="text-[11px] text-white/80 mt-2 max-w-md mx-auto leading-relaxed">
                    Estimate for {inputs.city ? inputs.city.toUpperCase() : "UP Area"} including standard site parameters.
                  </p>
                </div>

                {/* Detailed cost itemization */}
                <div className="space-y-3">
                  <h3 className="text-xs md:text-sm font-bold text-zinc-900 border-b border-zinc-100 pb-2">Cost Itemization</h3>
                  
                  {results.breakdown.map((item, idx) => (
                    <div
                      key={idx}
                      className={`flex justify-between items-center py-2.5 border-b border-zinc-100 ${
                        !item.visible && !isUnlocked ? "relative" : ""
                      }`}
                    >
                      <span className={`text-xs md:text-sm font-semibold text-zinc-650 ${
                        !item.visible && !isUnlocked ? "filter blur-[4px] select-none opacity-30" : ""
                      }`}>
                        {item.item}
                      </span>
                      <span className={`text-xs md:text-sm font-bold text-zinc-950 ${
                        !item.visible && !isUnlocked ? "filter blur-[4px] select-none opacity-30" : ""
                      }`}>
                        INR {Math.round(item.cost).toLocaleString("en-IN")}
                      </span>

                      {/* Locked Overlay for 20% cost breakdown */}
                      {!item.visible && !isUnlocked && idx === 2 && (
                        <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] flex items-center justify-center rounded-lg">
                          <span className="text-[10px] font-bold text-zinc-800 bg-white/95 border border-zinc-200 shadow-sm px-3 py-1 rounded-full flex items-center gap-1">
                            <Lock className="h-2.5 w-2.5 text-amber-600" />
                            Breakdown Locked
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Final Actions */}
                <div className="mt-8 flex flex-col sm:flex-row gap-2.5 pt-4 border-t border-zinc-100">
                  <button
                    onClick={handleReset}
                    className="flex-1 border border-zinc-200 hover:border-zinc-400 bg-white p-3 rounded-xl text-xs font-bold text-zinc-650 transition flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <RefreshCw className="h-3.5 w-3.5" /> Recalculate
                  </button>

                  {isUnlocked ? (
                    <button
                      onClick={downloadPdfReport}
                      className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold p-3 rounded-xl text-xs transition flex items-center justify-center gap-1 cursor-pointer shadow-sm"
                    >
                      <Download className="h-3.5 w-3.5" /> Download PDF
                    </button>
                  ) : (
                    <button
                      onClick={() => setShowPopup(true)}
                      className="flex-1 bg-[#234D7E] hover:bg-[#1b3b62] text-white font-bold p-3 rounded-xl text-xs transition flex items-center justify-center gap-1 cursor-pointer shadow-sm"
                    >
                      <Unlock className="h-3.5 w-3.5" /> Unlock Cost &amp; PDF
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Lead Form Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowPopup(false)}
          />
          <div className="relative bg-white rounded-2xl border border-zinc-200 w-full max-w-sm p-6 shadow-2xl z-10 overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-full -mr-6 -mt-6 -z-10" />

            <h3 className="text-base md:text-lg font-bold text-zinc-950 mb-1">Unlock Cost Breakdown</h3>
            <p className="text-zinc-500 text-[11px] leading-relaxed mb-4">
              Enter your details to reveal the remaining breakdown and instantly download the official PDF quotation report.
            </p>

            <form onSubmit={handleLeadSubmit} className="space-y-3">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-0.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={leadForm.name}
                  onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                  placeholder="e.g., Rajesh Kumar"
                  className="w-full p-2.5 text-xs rounded-lg border border-zinc-200 focus:outline-none focus:border-[#234D7E] text-zinc-800 font-medium"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-0.5">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={leadForm.phone}
                  onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                  placeholder="e.g., +91 9876543210"
                  className="w-full p-2.5 text-xs rounded-lg border border-zinc-200 focus:outline-none focus:border-[#234D7E] text-zinc-800 font-medium"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-0.5">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={leadForm.email}
                  onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                  placeholder="e.g., rajesh@gmail.com"
                  className="w-full p-2.5 text-xs rounded-lg border border-zinc-200 focus:outline-none focus:border-[#234D7E] text-zinc-800 font-medium"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-0.5">
                  Project Timeline
                </label>
                <select
                  value={leadForm.timeline}
                  onChange={(e) => setLeadForm({ ...leadForm, timeline: e.target.value })}
                  className="w-full p-2.5 text-xs rounded-lg border border-zinc-200 focus:outline-none focus:border-[#234D7E] bg-white text-zinc-800 font-medium"
                >
                  <option value="Immediate">Immediate Work</option>
                  <option value="Within 1 Month">Within 1 Month</option>
                  <option value="Planning Stage">Planning Stage</option>
                </select>
              </div>

              {submitError && (
                <div className="flex gap-1.5 items-center bg-red-50 text-red-700 text-[10px] p-2.5 rounded-lg border border-red-100 mt-1">
                  <AlertCircle className="h-3.5 w-3.5 flex-shrink-0" />
                  <span>{submitError}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-4 bg-[#234D7E] hover:bg-[#1b3b62] text-white font-bold p-3 rounded-lg text-xs transition flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-70 shadow-sm"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-1.5 h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Generating PDF...
                  </>
                ) : (
                  <>
                    <Unlock className="h-3.5 w-3.5" /> Unlock Cost &amp; Download PDF
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => setShowPopup(false)}
                className="w-full text-center text-[10px] font-semibold text-zinc-400 hover:text-zinc-650 transition mt-2.5"
              >
                Cancel &amp; Go Back
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

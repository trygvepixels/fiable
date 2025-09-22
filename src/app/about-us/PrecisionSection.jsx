"use client";

import { useState } from "react";
import {
  FiUsers,
  FiTool,
  FiCheckCircle,
  FiFileText,
  FiStar,
  FiTrendingUp,
} from "react-icons/fi";

export default function PrecisionSection() {
  const [activeCard, setActiveCard] = useState(0);
  
  const features = [
    {
      icon: <FiUsers className="w-12 h-12" />,
      title: "Multidisciplinary Team",
      description: "Architects, Civil/MEP engineers, QS/Procurement, Safety & QA/QC specialists working in perfect harmony.",
      details: "Our integrated team approach ensures seamless collaboration across all construction phases.",
      metric: "15+ Specialists",
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-100",
      iconColor: "text-[#4376BB]",
      borderColor: "border-blue-200"
    },
    {
      icon: <FiTool className="w-12 h-12" />,
      title: "In-house Facilities",
      description: "State-of-the-art machinery, precision carpentry, glass & UPVC facilities for uncompromised quality.",
      details: "Advanced equipment and dedicated workshops ensure quality control at every step.",
      metric: "5 Facilities",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-100",
      iconColor: "text-green-600", 
      borderColor: "border-green-200"
    },
    {
      icon: <FiCheckCircle className="w-12 h-12" />,
      title: "Assured Delivery",
      description: "Rigorous labor control, comprehensive checklists, safety protocols, and detailed documentation.",
      details: "Our systematic approach guarantees on-time delivery with zero compromise on quality.",
      metric: "98% On-time",
      bgColor: "bg-gradient-to-br from-purple-50 to-violet-100",
      iconColor: "text-purple-600",
      borderColor: "border-purple-200"
    },
    {
      icon: <FiFileText className="w-12 h-12" />,
      title: "Transparent BOQs",
      description: "Precise costing methodologies, strategic value engineering, and meticulous procurement control.",
      details: "Complete transparency in billing with detailed breakdowns and value optimization.",
      metric: "100% Transparent",
      bgColor: "bg-gradient-to-br from-orange-50 to-amber-100",
      iconColor: "text-orange-600",
      borderColor: "border-orange-200"
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 text-sm font-medium text-gray-600 mb-6">
            <FiStar className="w-4 h-4" />
            12+ Years of Excellence
          </div>
          <h2 className="text-4xl sm:text-5xl font- semibold text-gray-900 mb-6">
            Built on <span className="text-[#4376BB]">precision</span>,<br />
            powered by <span className="text-[#4376BB]">people</span>.
          </h2>
          <p className="text-md text-gray-600 max-w-3xl mx-auto">
            We solve the hard parts — manpower management, procurement, QA/QC, coordination — so you can focus on what matters most.
          </p>
        </div>

        {/* Interactive Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative cursor-pointer transition-all duration-500 ${
                activeCard === index ? 'scale-105 z-10' : 'hover:scale-102'
              }`}
              onMouseEnter={() => setActiveCard(index)}
            >
              <div className={`
                h-full rounded-3xl p-8 border-2 transition-all duration-500
                ${activeCard === index 
                  ? `${feature.bgColor} ${feature.borderColor} shadow-2xl` 
                  : 'bg-gray-50 border-gray-200 hover:bg-white hover:shadow-lg'
                }
              `}>
                {/* Icon and Metric */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`
                    ${activeCard === index ? feature.iconColor : 'text-gray-600'}
                    transition-colors duration-500
                  `}>
                    {feature.icon}
                  </div>
                  <div className={`
                    text-right text-sm font-bold
                    ${activeCard === index ? feature.iconColor : 'text-gray-400'}
                    transition-colors duration-500
                  `}>
                    {feature.metric}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className={`
                    text-sm leading-relaxed transition-all duration-500
                    ${activeCard === index ? 'text-gray-700' : 'text-gray-600'}
                  `}>
                    {activeCard === index ? feature.details : feature.description}
                  </p>
                </div>

                {/* Progress Indicator */}
                <div className="mt-6">
                  <div className={`
                    h-1 rounded-full transition-all duration-700
                    ${activeCard === index ? feature.iconColor.replace('text', 'bg') : 'bg-gray-200'}
                  `} style={{
                    width: activeCard === index ? '100%' : '30%'
                  }}></div>
                </div>

                {/* Expand Indicator */}
                <div className={`
                  absolute top-4 right-4 w-3 h-3 rounded-full transition-all duration-500
                  ${activeCard === index ? `${feature.iconColor.replace('text', 'bg')} scale-100` : 'bg-gray-300 scale-0'}
                `}></div>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
}

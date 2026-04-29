"use client";

import React, { useState, useEffect } from "react";
import {
  FiMessageCircle,
  FiFileText,
  FiTool,
  FiCheckCircle,
  FiArrowRight,
  FiPhone,
  FiUsers,
  FiShield,
  FiClock
} from "react-icons/fi";

export default function FiableProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const processSteps = [
    {
      id: "01",
      title: "Site Assessment & Requirements",
      subtitle: "Technical Evaluation",
      description: "Our team conducts thorough site inspection, structural analysis, and requirement gathering. We assess waterproofing needs, structural integrity, and prepare detailed technical specifications.",
      icon: <FiMessageCircle className="w-7 h-7" />,
      details: ["Site survey & condition assessment", "Technical requirement analysis", "Material testing & evaluation", "Initial cost estimation"],
      duration: "2-3 Days",
      deliverable: "Technical Assessment Report",
      color: "from-blue-300 to-blue-400",
      bgColor: "bg-blue-50"
    },
    {
      id: "02", 
      title: "Proposal & Value Engineering",
      subtitle: "Optimized Solutions",
      description: "We develop comprehensive BOQ, material specifications, and value-engineered solutions. Our proposals include detailed methodology, timeline, and cost breakdown for transparency.",
      icon: <FiFileText className="w-7 h-7" />,
      details: ["Detailed BOQ preparation", "Material specification", "Value engineering analysis", "Project timeline development"],
      duration: "3-5 Days",
      deliverable: "Comprehensive Proposal",
      color: "from-yellow-300 to-yellow-500",
      bgColor: "bg-yellow-50"
    },
    {
      id: "03",
      title: "Execution & Quality Control",
      subtitle: "Precision Implementation",
      description: "Systematic execution with trained workforce, latest machinery, and rigorous quality checks. We ensure adherence to specifications, safety protocols, and milestone tracking.",
      icon: <FiTool className="w-7 h-7" />,
      details: ["Site mobilization & setup", "Systematic execution process", "Daily quality inspections", "Progress monitoring & reporting"],
      duration: "Project Dependent",
      deliverable: "Quality Execution",
      color: "from-blue-300 to-blue-400",
      bgColor: "bg-blue-50"
    },
    {
      id: "04",
      title: "Completion & Handover",
      subtitle: "Guaranteed Results",
      description: "Final quality checks, documentation, and clean handover with warranty. We provide technical training, maintenance guidelines, and post-project support for sustained performance.",
      icon: <FiCheckCircle className="w-7 h-7" />,
      details: ["Final quality verification", "Complete documentation", "Client training & handover", "Warranty & support setup"],
      duration: "1-2 Days",
      deliverable: "Project Handover",
      color: "from-yellow-300 to-yellow-500",
      bgColor: "bg-yellow-50"
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-50 to-[#F4F1EC] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          
          <h2 className="text-3xl lg:text-5xl font-b old text-gray-900 mb-6 leading-tight">
            From <span className="text-[#234D7E]">Assessment</span> to{" "}
            <span className="text-[#234D7E]">Delivery</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our systematic approach ensures precision, quality, and timely delivery for every structural retrofitting and waterproofing project across India.
          </p>

          {/* Stats */}
           
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 hidden lg:block"></div>
          
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                className={`relative transition-all duration-1000 delay-${index * 200} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col gap-8 lg:gap-16`}>
                  
                  {/* Content Card */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'}`}>
                    <div className={`relative p-8 rounded-3xl border border-gray-200 bg-white shadow-xl hover:shadow-2xl transition-all duration-500 group ${
                      activeStep === index ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
                    }`}>
                      {/* Background Gradient */}
                      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                      
                      <div className="relative space-y-6">
                        {/* Header */}
                        <div className={`flex items-center gap-4 ${index % 2 === 0 ? 'lg:flex-row-reverse lg:justify-end' : 'lg:flex-row lg:justify-start'} flex-row justify-start`}>
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            {step.icon}
                          </div>
                          <div>
                            <div className="text-sm font- text-gray-500 uppercase tracking-wide mb-1">
                              {step.subtitle}
                            </div>
                            <h3 className="text-2xl font- text-gray-900">
                              {step.title}
                            </h3>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed text-lg">
                          {step.description}
                        </p>

                        {/* Details */}
                        <div className="grid sm:grid-cols-2 gap-4">
                          {step.details.map((detail, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color}`}></div>
                              <span className="text-sm text-gray-600">{detail}</span>
                            </div>
                          ))}
                        </div>

                        {/* Meta Info */}
                        <div className="flex items-center gap-6 pt-4 border-t border-gray-100">
                          <div className="flex items-center gap-2">
                            <FiClock className="w-4 h-4 text-gray-400" />
                            <span className="text-sm font-medium text-gray-600">{step.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FiFileText className="w-4 h-4 text-gray-400" />
                            <span className="text-sm font-medium text-gray-600">{step.deliverable}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="relative flex-shrink-0 hidden lg:block">
                    <div className={`w-16 h-16 rounded-full border-4 border-white shadow-lg bg-gradient-to-br ${step.color} flex items-center justify-center text-white font- text-lg transition-all duration-500 ${
                      activeStep === index ? 'scale-125 shadow-2xl' : ''
                    }`}>
                      {step.id}
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-1 h-16 bg-gray-200"></div>
                    )}
                  </div>

                  {/* Visual Element */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:pl-8' : 'lg:pr-8'}`}>
                    <div className={`relative ${step.bgColor} rounded-3xl p-8 border border-gray-200`}>
                      <div className="text-center space-y-4">
                        <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${step.color} text-white flex items-center justify-center text-2xl shadow-lg`}>
                          {step.icon}
                        </div>
                        <div className="text-6xl font- text-gray-900">
                          {step.id}
                        </div>
                        <div className="text-lg font- text-gray-700">
                          {step.subtitle}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

       
      </div>
    </section>
  );
}

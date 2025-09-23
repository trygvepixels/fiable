"use client";

import React from "react";
import { 
  Users,
  Wrench,
  ShieldCheck,
  Building,
  CheckCircle,
  ArrowUpRight
} from "lucide-react";

export default function WhyChooseUsFiable() {
  return (
    <section className="py-24 lg:py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
        
          <h2 className="text-4xl lg:text-5xl font-li ght text-gray-900 mb-6">
            Why choose
            <span className="font-medium text-[#4376BB] block mt-2">Fiable Building Solutions?</span>
          </h2>
          <div className="w-16 h-px bg-gray-900 mx-auto"></div>
        </div>

        {/* Core Features - Clean Grid */}
        <div className="grid gap-16 lg:gap-20 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Trained Staff */}
          <div className="group text-center">
            <div className="w-16 h-16 mx-auto mb-8 border border-gray-200 rounded-full flex items-center justify-center group-hover:border-gray-900 transition-colors duration-300">
              <Users className="h-7 w-7 text-gray-600 group-hover:text-gray-900 transition-colors" />
            </div>
            <h3 className="text-lg font-medium text-[#4376BB] mb-4">
              Trained Staff
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Quarterly training at chemical factories keeps our supervisors updated with latest industry techniques.
            </p>
          </div>

          {/* Latest Machinery */}
          <div className="group text-center">
            <div className="w-16 h-16 mx-auto mb-8 border border-gray-200 rounded-full flex items-center justify-center group-hover:border-gray-900 transition-colors duration-300">
              <Wrench className="h-7 w-7 text-gray-600 group-hover:text-gray-900 transition-colors" />
            </div>
            <h3 className="text-lg font-medium text-[#4376BB] mb-4">
              Modern Equipment
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Cutting-edge machinery ensures precision and efficiency in every construction project.
            </p>
          </div>

          {/* Trusted Materials */}
          <div className="group text-center">
            <div className="w-16 h-16 mx-auto mb-8 border border-gray-200 rounded-full flex items-center justify-center group-hover:border-gray-900 transition-colors duration-300">
              <ShieldCheck className="h-7 w-7 text-gray-600 group-hover:text-gray-900 transition-colors" />
            </div>
            <h3 className="text-lg font-medium text-[#4376BB] mb-4">
              Quality Materials
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Premium tested chemicals from trusted suppliers ensure lasting durability.
            </p>
          </div>

          {/* Engineering Backing */}
          <div className="group text-center">
            <div className="w-16 h-16 mx-auto mb-8 border border-gray-200 rounded-full flex items-center justify-center group-hover:border-gray-900 transition-colors duration-300">
              <Building className="h-7 w-7 text-gray-600 group-hover:text-gray-900 transition-colors" />
            </div>
            <h3 className="text-lg font-medium text-[#4376BB] mb-4">
              Engineering Excellence
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              In house analysis software,
RIB Candy Estimation software,
Thermal imaging, and various other tools for analysis.
            </p>
          </div>

        </div>

       

      

        

      </div>
    </section>
  );
}

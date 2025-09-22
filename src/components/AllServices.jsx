"use client";

import { motion } from "framer-motion";
import {
  IconDroplet,
  IconTools,
  IconLayersSubtract,
  IconBuildingFactory,
  IconHammer,
  IconBarrierBlock,
} from "@tabler/icons-react";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { useEffect, useState } from "react";

export default function FeaturesSectionDemo() {

   const [isLoaded, setIsLoaded] = useState(false);
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      setIsLoaded(true);
  
      const fetchServices = async () => {
        try {
          const res = await fetch("/api/services?sort=order%20-createdAt&limit=100", { cache: "no-store" });
          const json = await res.json();
          if (!res.ok) throw new Error(json?.error || "Failed to load services");
          setServices(json.items || []);
        } catch (err) {
          console.error("Error fetching services:", err);
        } finally {
          setLoading(false);
        }
      };
  
      fetchServices();
    }, []);
   

  return (
   <div className="bg">
     <section className="relative  pt-20 pb-10 bg-gradient-to-b  ">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl flex justify-center gap-3 lg:text-5xl font-bld tracking-tight text-gray-900">
            Our{" "}
            <PointerHighlight>
              <span className="bg-gradient-to-r from-blue-600 via-yellow-400 to-blue-700 text-transparent bg-clip-text">
                {" "}
                Specialized Services
              </span>{" "}
            </PointerHighlight>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Fiable Building Solutions delivers engineering-driven construction
            services designed for durability, safety, and long-term performance.
          </p>
        </motion.div>

        {/* Grid */}

              {/* Minimal Services Grid */}
      <section className="py-0">
        <div className="mx-auto max-w-7xl px-6">
          {loading ? (
            <p className="text-center text-gray-500">Loading services...</p>
          ) : (
            <div className="grid lg:grid-cols-2 gap-16">
              {services.map((service, index) => (
                <div
                  key={service._id}
                  className={`group transition-all duration-700 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex gap-8">
                    <div className="flex-shrink-0">
                      <div className="text-6xl font-light text-gray-200 group-hover:text-gray-300 transition-colors">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-6">
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{service.summary}</p>
                      </div>
                      
                      <div className="aspect-video rounded-lg overflow-hidden">
                        <img
                          src={service.image?.src}
                          alt={service.image?.alt || service.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>

                      <ul className="space-y-2">
                        {service.points?.map((point, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                            <span className="text-gray-700">{point}</span>
                          </li>
                        ))}
                      </ul>

 
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
       
      </div>
    </section>
   </div>
  );
}

function FeatureCard({ title, description, image, icon }) {
  return (
    <div>
      <motion.div
        className="group relative rounded-2xl overflow-hidden bg-black shadow-md hover:shadow-2xl transition-all duration-500"
        whileHover={{ scale: 1.04 }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Image */}
        <div className="h-80 overflow-hidden relative">
          <img
            src={image}
            alt={title}
            className=" w-full object-cover group-hover:scale-110  transition-transform duration-700"
          />

          {/* Gradient overlay at bottom */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

          {/* Text over image */}
        </div>
      </motion.div>
      <div className="mt-2 text-black">
        <h3 className="text-xl uppercase font-semibold flex items-center">
          {icon} {title}
        </h3>
        <p className="mt-1 text-sm text-gray-500 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

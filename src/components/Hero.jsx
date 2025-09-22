// "use client";

// import { ArrowRight, ShieldCheck, Clock, Users, Layers } from "lucide-react";
// import { ContainerTextFlip } from "@/components/ui/container-text-flip";
// import herogif from '@/assets/hero.gif'
// import Image from "next/image";
// export default function AboutFiable() {
//   return (
//     <section className="relative bg-white overflow-hidden">
//       <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
//         <div className="lg:grid lg:grid-cols-12 lg:gap-8">
//           {/* Text Section */}
//           <div className="sm:text-center md:mx-auto lg:col-span-6 lg:flex lg:items-center lg:text-left">
//             <div>
//           <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl leading-tight">
//   From concept to completion, <span className="text-[#4376BB]">Fiable</span>  excels in{" "}
//   <span className="relative inline-block bg-gradient-to-r from-[#2E5DA5] to-[#FEC20F] text-transparent bg-clip-text">
//     <ContainerTextFlip
//     className="text-white font-semibold pl-3 "
//       words={["waterproofing", "rehabilitation", "flooring", "grouting", "demolition", "civil works"]}
//     />
//   </span>{" "} <br />
//   with precision and care.
// </h1>
//               {/* <p className="mt-6 text-lg leading-8 text-gray-600 max-w-xl">
//                 Fiable Building Solutions Pvt. Ltd. delivers waterproofing,
//                 structural rehabilitation, flooring, grouting, and civil
//                 construction services — bridging innovation and trust in every
//                 project.
//               </p> */}
//               <div className="mt-8 flex gap-4 sm:justify-center lg:justify-start">
//                 <a
//                   href="https://wa.me/917233809199"
//                   className="inline-flex items-center rounded-lg bg-[#FEC20F] px-5 py-2 text-[#000000]  hover:bg-[#e6ad00] transition"
//                 >
//                   Get Started
//                   <ArrowRight className="ml-2 h-5 w-5 text-[#000000]" />
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Decorative Abstract Background */}
//           <div className="relative mt-12 lg:mt-0 lg:col-span-6 flex justify-center">
//             <div className="absolute inset-0 -z-10 flex items-center justify-center">
//               <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#2E5DA5] via-[#FEC20F] to-[#2E5DA5] opacity-20 blur-3xl" />
//             </div>
//             <div className="">
//               {/* <div className="w-20 h-20 bg-[#2E5DA5] rounded-xl opacity-80" />
//               <div className="w-20 h-20 bg-[#FEC20F] rounded-xl opacity-80" />
//               <div className="w-20 h-20 bg-gray-200 rounded-xl" />
//               <div className="w-20 h-20 bg-[#2E5DA5]/80 rounded-xl" />
//               <div className="w-20 h-20 bg-[#FEC20F]/90 rounded-xl" />
//               <div className="w-20 h-20 bg-gray-300 rounded-xl" /> */}
//             </div>
//               <Image src={herogif} alt="" className="h-full w-full" />
//           </div>
//         </div>

//         {/* Feature Cards */}
//         <div className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
//           <Feature
//             icon={<Layers className="h-7 w-7 text-[#2E5DA5]" />}
//             title="A World of Possibilities"
//             desc="Explore advanced waterproofing, flooring & repair technologies built for durability."
//           />
//           <Feature
//             icon={<ShieldCheck className="h-7 w-7 text-[#2E5DA5]" />}
//             title="Quality You Can Trust"
//             desc="Premium materials, trained staff & rigorous QC ensure strength and reliability."
//           />
//           <Feature
//             icon={<Clock className="h-7 w-7 text-[#2E5DA5]" />}
//             title="Timely Execution"
//             desc="Efficient planning and modern machinery deliver projects on schedule."
//           />
//           <Feature
//             icon={<Users className="h-7 w-7 text-[#2E5DA5]" />}
//             title="Trusted Partnerships"
//             desc="Chosen by Shalimar, Tanisha Infra, Biswan Sugar Mill & many more."
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// function Feature({ icon, title, desc }) {
//   return (
//     <div className="relative rounded-2xl bg-white/90 backdrop-blur-lg border border-gray-200 p-6 shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#FEC20F]/60">
//       <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-[#FEC20F]/30 mb-4">
//         {icon}
//       </div>
//       <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
//       <p className="mt-2 text-sm text-gray-600 leading-relaxed">{desc}</p>
//     </div>
//   );
// }




"use client";

import { ArrowRight, ShieldCheck, Clock, Users, Layers, Star, Award, Target, Zap, Building, Droplets, Settings, Home, Phone, Mail, MapPin } from "lucide-react";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import Image from "next/image";
import { useEffect, useState } from "react";

const backgroundImages = [
  {
    url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    alt: "Construction site with modern equipment"
  },
  {
    url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    alt: "Team meeting planning construction project"
  },
  {
    url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    alt: "Modern building construction progress"
  },
  {
    url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    alt: "High-rise building under construction"
  },
  {
    url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    alt: "Industrial construction and infrastructure"
  }
];

const services = [
  { name: "waterproofing", icon: <Droplets className="w-4 h-4" /> },
  { name: "structural retrofitting", icon: <Building className="w-4 h-4" /> },
  { name: "industrial flooring", icon: <Layers className="w-4 h-4" /> },
  { name: "epoxy grouting", icon: <Settings className="w-4 h-4" /> },
  { name: "civil construction", icon: <Home className="w-4 h-4" /> },
  { name: "quality assurance", icon: <ShieldCheck className="w-4 h-4" /> }
];

const clients = ["Shalimar", "Biswan Sugar Mill", "Ankur Udhyog", "Grotech Pvt.", "Tanisha Infra"];

const stats = [
  { value: "500+", label: "Projects Completed", icon: <Target className="w-5 h-5" /> },
  { value: "6+", label: "Years Experience", icon: <Clock className="w-5 h-5" /> },
  { value: "98%", label: "Client Satisfaction", icon: <Star className="w-5 h-5" /> },
  { value: "50+", label: "Expert Team", icon: <Users className="w-5 h-5" /> }
];

export default function AboutFiable() {
  const [currentBg, setCurrentBg] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-gray-900">
      {/* Advanced Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out ${
              idx === currentBg 
                ? "translate-x-0 opacity-100 scale-100" 
                : idx === (currentBg - 1 + backgroundImages.length) % backgroundImages.length
                ? "-translate-x-full opacity-0 scale-110" 
                : "translate-x-full opacity-0 scale-95"
            }`}
          >
            <Image
              src={img.url}
              alt={img.alt}
              fill
              className="object-cover"
              priority={idx === 0}
            />
            {/* Dynamic overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black-900/40 to-black/80" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Parallax effect */}
            <div 
              className="absolute inset-0 bg-gradient-radial from-blue-500/10 to-transparent"
              style={{
                transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
              }}
            />
          </div>
        ))}
        
        {/* Animated particles/dots */}
        

        {/* Geometric shapes */}
      </div>

        

        

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="flex-1 flex items-center">
          <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 w-full">
            <div className="l ">
              
              {/* Text Section */}
              <div className="lg:col-span-7 space-y-8">
                <div className={`transform transition-all duration-1000 delay-300 ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                   

                  <h1 className="text-5xl sm:text-5xl    font-semibold tracking-tight leading-[1.3] text-white drop-shadow-lg">
                    From{" "}
                    <span className="text-yellow-400 relative">
                      concept
                    </span>
                    {" "}to completion,{" "} <br />
                    <span className="bg-blue-40 0 px- font font-semibold">Fiable</span>
                    {" "}excels in{" "} <br />
                    <span className="relative inline-block">
                      <ContainerTextFlip
    className="text-white font-semibold pl-3 "
      words={["waterproofing", "rehabilitation", "flooring", "grouting", "demolition", "civil works"]}
    />
                    </span>
                  </h1>

                  <p className="text-lg my-5 lg:text-xl text-white/90 max-w-3xl leading-relaxed drop-shadow-sm font-light">
                    Fiable Building Solutions Pvt. Ltd. delivers comprehensive structural retrofitting, waterproofing, and industrial construction services — bridging innovation and trust in every project across India.
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="tel:+917233809199"
                      className="group inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-400 px-8 py-4 font-bold text-black hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 shadow-2xl hover:shadow-yellow-400/30 hover:-translate-y-1 transform"
                    >
                      <Phone className="mr-3 h-5 w-5 group-hover:animate-pulse" />
                      Call Now: +91 7233809199
                      <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    
                    <a
                      href="https://wa.me/917233809199"
                      className="group inline-flex items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 font-semibold text-white hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 transform"
                    >
                      WhatsApp Chat
                      <Zap className="ml-3 h-5 w-5 group-hover:animate-pulse" />
                    </a>
                  </div>

                   
                </div>
              </div>

              {/* Visual Section */}
              
            </div>
          </div>
        </div>

        {/* Stats Section */}
         
        {/* Feature Cards */}
        

        {/* Contact Strip */}
       
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite;
          animation-delay: 1s;
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </main>
  );
}

function StatCard({ stat, index }) {
  return (
    <div className={`group relative rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl`}>
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0 p-3 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-xl">
          {stat.icon}
        </div>
        <div>
          <div className="text-2xl lg:text-3xl font-bold text-white group-hover:text-yellow-400 transition-colors">
            {stat.value}
          </div>
          <div className="text-white/80 text-sm font-medium">
            {stat.label}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/5 to-orange-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}

function FeatureCard({ icon, title, desc, gradient }) {
  return (
    <div className={`group relative rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl`}>
      <div className={`flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br ${gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-white/80 leading-relaxed group-hover:text-white/90 transition-colors">
        {desc}
      </p>
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
    </div>
  );
}

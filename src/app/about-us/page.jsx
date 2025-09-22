import React from 'react'
import AllServices from '@/components/AllServices'
import Hero from './Hero.jsx'
import Milestones from '@/components/Milestones.jsx'
import TeamSection from './TeamSection.jsx'
import PrecisionSection from './PrecisionSection.jsx'
import Link from 'next/link.js'
const page = () => {
  return (
    <div>
     <div className="fixed bottom-5 z-20 right-5">
        <Link href="/contact-us#project-form">
  <button className="group relative overflow-hidden bg-gradient-to-r from-[#4376BB] to-[#2c4a7d] hover:from-[#365a99] hover:to-[#1e3d6f] text-white px-8 py-3.5 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-out font-semibold text-sm flex items-center gap-3">
    {/* Background animation */}
    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
    
    {/* Icon */}
    
    
    {/* Text */}
    <span className="relative z-10">
      Start <span className="text-[#F4C500] font-bold">Project</span>
    </span>
    
    {/* Arrow */}
    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round"  strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  </button>
</Link>

      </div>
      <Hero />
      <PrecisionSection />
            <Milestones/>
      <AllServices />


      <TeamSection />

    </div>
  )
}

export default page
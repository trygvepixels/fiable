import React from 'react'
import Hero from "@/components/Hero"
import AboutSection from '@/components/AboutSection'
import AllServices from '@/components/AllServices'
import Milestones from '@/components/Milestones'
import ContactCta from '@/components/ContactCta'
import Testimonials from "@/components/Testimonials"
import CardCaroursalDemo from "@/components/CardCaroursalDemo"
import FeaturedServices from "@/components/FeaturedServices"
import ProjectsShowcase from "@/components/ProjectsShowcase"
import StepsSection from "@/components/StepsSection"
import TeamSection from "@/components/TeamSection"
import LogoCarouselDemo from "@/components/LogoCarouselDemo"
import {AppleCardsCarouselDemo} from "@/components/AppleCardsCarouselDemo"
import Link from 'next/link'
import AnimatedBeamDemo from '@/components/AnimatedBeamDemo'
import WhyChooseUsFiable from '@/components/WhyChooseUsFiable'
import { SVGMaskEffectDemo } from '@/components/SVGMaskEffectDemo'
 const page = () => {
  return (
    <div>
      <div className="fixed bottom-5 z-10 right-5">
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

      
      <Hero/>

      <Milestones/>
            <LogoCarouselDemo/>


      <div className=''>
        <AllServices />
      </div>
      {/* <AnimatedBeamDemo /> */}


       {/* <CardCaroursalDemo/> */}
      {/* <AppleCardsCarouselDemo/> */}
      
      <WhyChooseUsFiable />
      <ProjectsShowcase/>
{/* <TeamSection/> */}
<StepsSection/>

      <Testimonials/>

 


      <ContactCta/>


    </div>
  )
}

export default page
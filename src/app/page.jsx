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
import TrustSection from '@/components/TrustSection'
import LocationSEO from '@/components/LocationSEO'
import FloatingCTA from '@/components/FloatingCTA'

 const page = () => {
  return (
    <div>
      <FloatingCTA />

      <Hero />
      <TrustSection />
      
      <div className=''>
        <AllServices />
      </div>
      
      <WhyChooseUsFiable />
      <LocationSEO />
      
      <Milestones />
      <LogoCarouselDemo />
      
      <ProjectsShowcase />
      <StepsSection />
      <Testimonials />
      <ContactCta />
    </div>
  )
}

export default page
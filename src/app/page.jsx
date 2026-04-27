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
import {AppleCardsCarouselDemo} from "@/components/AppleCardsCarouselDemo"
import Link from 'next/link'
import AnimatedBeamDemo from '@/components/AnimatedBeamDemo'
import WhyChooseUsFiable from '@/components/WhyChooseUsFiable'
import { SVGMaskEffectDemo } from '@/components/SVGMaskEffectDemo'
import TrustSection from '@/components/TrustSection'
import LocationSEO from '@/components/LocationSEO'
import FloatingCTA from '@/components/FloatingCTA'
import ClientsMarquee from '@/components/ClientsMarquee'
import OfficeMapSection from '@/components/OfficeMapSection'

 const page = () => {
  return (
    <div>
      <FloatingCTA />

      <Hero />
      <ClientsMarquee />
            <Milestones />

      <div className=''>
        <AllServices />
      </div>
            <ProjectsShowcase />


      {/* <TrustSection /> */}
      
      
      
      <WhyChooseUsFiable />
      <OfficeMapSection />
      {/* <LocationSEO /> */}
      
      
      {/* <StepsSection /> */}
      <Testimonials />
      <ContactCta />
    </div>
  )
}

export default page

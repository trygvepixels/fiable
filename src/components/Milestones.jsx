import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const FiableHeroSection = () => {
  return (
    <div className='bg-[#f4f1ec68]'>
       <div className=" max-w-7xl px-6 mx-auto ">
      <section className="container mx-auto ">
        <div className="grid lg:grid-cols- gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Stats Row */}
            

            
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-  mt-20 text-black leading-tight mb-6">
                At <span className='text-[#4376BB]'>Fiable</span>, we engineer the <span className='text-zinc-400'>future of construction</span>
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed">
                delivering reliable <span className="text-[#2E5DA5] text-2xl font-medium">waterproofing, flooring, structural rehabilitation</span>, and
                industrial solutions. With a skilled team of architects and engineers, backed by
                advanced technology and trusted chemical partners, we guarantee precision,
                durability, and long-term value.
              </p>
            </div>



            <div className="grid grid-cols-4 gap-8 md:mt-16 mt-10 md:mb-0 mb-16">
              <div>
                <div className="text-3xl md:text-6xl text-center font-semibold text-black mb-1">200+</div>
                <div className="text-sm md:text-xl text-center text-gray-600"> Projects Complete</div>
              </div>
              <div>
                <div className="text-3xl md:text-6xl text-center font-semibold text-black mb-1">95%</div>
                <div className="text-sm md:text-xl text-center text-gray-600">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl md:text-6xl text-center font-semibold text-black mb-1">4+</div>
                <div className="text-sm md:text-xl text-center text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl md:text-6xl text-center font-semibold text-black mb-1">50+</div>
                <div className="text-sm md:text-xl text-center text-gray-600">Expert Engineers</div>
              </div>
            </div>

            
          </div>

          {/* Right Content */}
          <div className="hidden lg:block">
            {/* Reserved for visuals or future imagery */}
          </div>
        </div>
      </section>
    </div>
    </div>
   
  );
};

export default FiableHeroSection;
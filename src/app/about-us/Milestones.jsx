import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const FiableHeroSection = () => {
  return (
    <div className="bg-[#fcfcfb] max-w-7xl px-6 mx-auto ">
      <section className="container mx-auto ">
        <div className="grid lg:grid-cols- gap-16 items-start">
            <div className='mt-20'>
                      <p className="text-lg sm:text-xl text-center text-gray-500 leading-relaxed mb-12">
        At <span className="font-semibold text-gray-900">Fiable</span> we are committed
        to revolutionizing the construction industry with innovative, sustainable,
        and cost-effective solutions. With a proven track record of delivering
        exceptional projects, we combine{" "}
        <span className="text-gray-900 font-medium">state-of-the-art technology</span>,{" "}
        <span className="text-gray-600 italic">skilled expertise</span>, and{" "}
        <span className="text-gray-500">customer-centric approaches</span> to bring
        visions to life.
      </p>

            </div>
          {/* Left Content */}
          <div className="space-y-6">
            {/* Stats Row */}
            <div className="grid grid-cols-4 gap-8 mb-8">
              <div>
                <div className="text-6xl text-center font-semibold text-black mb-1">200+</div>
                <div className="text-xl text-center text-gray-600">Projects</div>
              </div>
              <div>
                <div className="text-6xl text-center font-semibold text-black mb-1">95%</div>
                <div className="text-xl text-center text-gray-600">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-6xl text-center font-semibold text-black mb-1">4+</div>
                <div className="text-xl text-center text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-6xl text-center font-semibold text-black mb-1">50+</div>
                <div className="text-xl text-center text-gray-600">Expert Engineers</div>
              </div>
            </div>

            
            

            {/* CTA Button */}
            <div className="pt-6 mx-auto text-center">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-8 py-3 rounded-full inline-flex items-center group transition-all duration-300">
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="hidden lg:block">
            {/* Reserved for visuals or future imagery */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FiableHeroSection;
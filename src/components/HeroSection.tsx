
import React from 'react';
import { Button } from "@/components/ui/button";
import { Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative py-20 px-4 md:px-20 lg:px-24 mx-4 my-6 rounded-3xl bg-[#004c4c] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
          alt="Tax professionals working together"
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="border border-white/20 rounded-full inline-flex px-6 py-2 mb-6">
          <p className="text-sm text-white tracking-wide uppercase">YOUR SUCCESS, OUR PRIORITY</p>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Stress-Free Tax<br />Services
        </h1>
        
        <p className="text-white/80 mb-8 max-w-md text-base">
          Our tax advisor is dedicated to navigating complex tax laws, ensuring
          clarity and financial health for our clients amidst their obligations.
        </p>
        
        <div className="flex items-center space-x-6 mb-[70px]">
          <Button className="bg-[#FF9245] hover:bg-[#FF9245]/90 border-0 text-white rounded-full px-8 py-6 font-medium">
            Make Appointment
          </Button>
          
          <button className="flex items-center space-x-3 text-white">
            <div className="bg-white/20 rounded-full p-3 backdrop-blur-sm">
              <Play className="h-4 w-4 text-white" fill="white" />
            </div>
            <span>Play Video</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


import React from 'react';
import { Button } from "@/components/ui/button";
import { Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-[#004c4c] overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 z-10">
            <div className="inline-block bg-black/30 text-white text-sm px-4 py-1 rounded-full mb-6">
              YOUR SUCCESS, OUR PRIORITY
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Stress-Free Tax<br />Services
            </h1>
            <p className="text-white/80 mb-8 max-w-md">
              Our tax advice is dedicated to navigating complex tax laws, ensuring
              clarity and financial health for our clients amidst their obligations.
            </p>
            <div className="flex items-center space-x-6">
              <Button className="bg-softorange hover:bg-softorange/90 text-white rounded-full px-8 py-6">
                Make Appointment
              </Button>
              <button className="flex items-center space-x-2 text-white">
                <div className="bg-white/20 rounded-full p-2 backdrop-blur-sm">
                  <Play className="h-5 w-5 text-white" fill="white" />
                </div>
                <span>Play Video</span>
              </button>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              alt="Tax professionals working together"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

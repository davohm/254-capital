
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServiceHighlights from '@/components/ServiceHighlights';
import FeaturedLogos from '@/components/FeaturedLogos';
import ServicesGrid from '@/components/ServicesGrid';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="relative">
        <HeroSection />
        <ServiceHighlights />
      </div>
      <FeaturedLogos />
      <ServicesGrid />
    </div>
  );
};

export default Index;

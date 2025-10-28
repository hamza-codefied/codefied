import Counters from '@/components/AboutUs/Counters';
import HeroSection from '@/components/AboutUs/HeroSection';
import MapSection from '@/components/AboutUs/MapSection';
import Team from '@/components/AboutUs/Team';
import TestimonialsSection from '@/components/AboutUs/TestimoniolSection';
import Timeline from '@/components/AboutUs/Timeline';
import Vision from '@/components/AboutUs/Vision';
import WhyChooseUs from '@/components/AboutUs/WhyChooseUs';
import React from 'react';

export const About = () => {
  return (
    <div className='min-h-screen'>
      <HeroSection />
      <Team />
      <Vision />
      <Timeline />
      <WhyChooseUs />
      <Counters />
      <MapSection />
      <TestimonialsSection />
    </div>
  );
};

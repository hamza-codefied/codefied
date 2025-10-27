import HeroSection from '@/components/AboutUs/HeroSection';
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
      <TestimonialsSection />
    </div>
  );
};

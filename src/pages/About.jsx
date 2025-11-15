import Counters from '@/components/AboutUs/Counters';
import HeroSection from '@/components/global/HeroBanner';
import MapSection from '@/components/AboutUs/MapSection';
import Team from '@/components/AboutUs/Team';
import TestimonialsSection from '@/components/global/TestimoniolSection';
import Timeline from '@/components/AboutUs/Timeline';
import Vision from '@/components/AboutUs/Vision';
import WhyChooseUs from '@/components/AboutUs/WhyChooseUs';
import React from 'react';

export const About = () => {
  return (
    <div className='min-h-screen'>
      <HeroSection
        classNames={'h-[350px]'}
        BannerText={'About Us'}
        TopText={
          <h2 className='text-xl font-semibold mb-2 text-center relative inline-block'>
            <span className='relative inline-block'>
              Codefied
              {/* Curved underline SVG */}
              <svg
                className='absolute left-0 bottom-0 w-full h-3 md:h-4'
                viewBox='0 0 200 10'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M2 8 Q50 3 100 8 T198 8'
                  stroke='#d4575b'
                  strokeWidth='3'
                  fill='transparent'
                  strokeLinecap='round'
                />
              </svg>
            </span>{' '}
            is a trusted
          </h2>
        }
        MainText={
          <h1 className='text-2xl md:text-4xl lg:text-6xl font-bold text-gray-900'>
            Software Development
            <br /> Company
          </h1>
        }
        bannerTextAdjust={{fontSize: 'clamp(40px, 20vw, 600px)', // responsive font size
            lineHeight: 1,
            transform: 'translateY(30%)', // cut half of the text
}}
      />
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

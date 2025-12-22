import Counters from '@/components/AboutUs/Counters';
import HeroSection from '@/components/global/HeroBanner';
import MapSection from '@/components/AboutUs/MapSection';
import Team from '@/components/AboutUs/Team';
import TestimonialsSection from '@/components/global/TestimoniolSection';
import Timeline from '@/components/AboutUs/Timeline';
import Vision from '@/components/AboutUs/Vision';
import WhyChooseUs from '@/components/AboutUs/WhyChooseUs';
import React from 'react';
import underlineImg from '@/images/underlineImg.svg';
import herobg from '@/images/hero.png';

export const About = () => {
  return (
    <div className='min-h-screen'>
      <HeroSection
        classNames={'h-[200px] md:h-[320px] lg:h-[380px]'}
        BannerText={'About Us'}
        TopText={
          <h2 className='text-[24px] font-semibold mb-6 text-center relative inline-block lg:left-24'>
            <span className='relative inline-block'>
              Codefied
              <img
                src={underlineImg}
                alt=''
                className='absolute left-0 bottom-0 w-full h-3 md:h-4'
              />
            </span>{' '}
            is a trusted
          </h2>
        }
        MainText={
          <h4 className='text-2xl md:text-4xl lg:text-[54px] font-bold text-[#000] lg:leading-[1.2] relative lg:left-24'>
            Software Development
            <br /> Company
          </h4>
        }
        bannerTextAdjust={{
          fontSize: 'clamp(40px, 20vw, 350px)', // responsive font size
          lineHeight: 1,
          transform: 'translateY(25%)', // cut half of the text
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

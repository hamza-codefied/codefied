import { Button } from 'antd';
import React from 'react';
import Section from '@layouts/Section';

export default function HeroSection() {
  return (
    <>
      <Section
        classNames='relative bg-cover bg-center bg-no-repeat py-10 sm:py-[120px]'
        style={{ backgroundImage: "url('/src/images/hero_bg.png')" }}
      >
        {/* subtle overlay */}
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
              Code. Create. Conquer.
            </h1>
            <p className='text-lg text-gray-600 mb-4 max-w-xl mx-auto'>
              At codefied, we’re not just building software; we’re shaping the
              future with cutting-edge technology and unparalleled quality
            </p>
            <div>
              <button className='bg-[#d4575b] bg-opacity-70 border-none text-white py-2 rounded-md px-6'>
                Get A Free Consultation
              </button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

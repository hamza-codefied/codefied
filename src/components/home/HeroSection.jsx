import { Button } from 'antd';
import React from 'react';
import Section from '@layouts/Section';
import { TypeAnimation } from 'react-type-animation';

export default function HeroSection() {
  return (
    <Section
      classNames='relative bg-cover bg-center bg-no-repeat py-10 sm:py-[120px]'
      style={{ backgroundImage: "url('/src/images/hero_bg.png')" }}
    >
      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
            <TypeAnimation
              sequence={[
                'Code.',
                1000,
                'Code. Create.',
                1000,
                'Code. Create. Conquer.',
              ]}
              wrapper='span'
              speed={50}
              cursor={false} // hide blinking cursor after typing
              repeat={0} // play only once
            />
          </h1>

          <p className='text-lg text-gray-600 mb-4 max-w-xl mx-auto'>
            At codefied, we’re not just building software; we’re shaping the
            future with cutting-edge technology and unparalleled quality.
          </p>

          <div>
            <button className='bg-[#d4575b] bg-opacity-70 border-none text-white py-2 rounded-md px-6 hover:bg-[#d4575b] transition'>
              Get A Free Consultation
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}

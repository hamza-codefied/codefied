import { Button } from 'antd';
import React from 'react';
import Section from '@layouts/Section';
import { TypeAnimation } from 'react-type-animation';
import herobg from '@/images/hero.png';
import ClientSection from '../global/ClientSection';

export default function HeroSection() {
  return (
    <div>
      <Section
        classNames='relative bg-cover bg-center bg-no-repeat py-10 sm:py-[120px] h-[calc(100vh_-_25vh)] !mb-0 flex justify-center items-center'
        style={{ backgroundImage: `url(${herobg})` }}
      >
        <div className='container m-auto'>
          <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center flex space-y-[18px] flex-col'>
              <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900'>
                <TypeAnimation
                  sequence={[
                    'Code.',
                    10,
                    'Code. Create.',
                    0,
                    'Code. Create. Conquer.',
                  ]}
                  wrapper='span'
                  speed={1}
                  cursor={false} // hide blinking cursor after typing
                  repeat={0} // play only once
                />
              </h1>

              <p className='text-sm md:text-base lg:text-1xl text-gray-600 w-full lg:w-[50%] mx-auto'>
                At codefied, we’re not just building software; we’re shaping the
                future with cutting-edge technology and unparalleled quality.
              </p>

              <div>
                <button className='hover:bg-[#cf3136] text-sm lg:text-base border-none text-white py-3 rounded-md px-6 bg-[#d4575b] transition'>
                  Get A Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <ClientSection />
    </div>
  );
}

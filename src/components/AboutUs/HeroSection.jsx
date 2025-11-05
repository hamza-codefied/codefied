import { Button } from 'antd';
import React from 'react';
import Section from '@layouts/Section';
import aboutbg from '@/images/about_bg.png';

export default function HeroSection() {
  return (
    <>
      <Section
        classNames='relative bg-cover bg-center bg-no-repeat py-24'
        style={{ backgroundImage: `url(${aboutbg})` }}
      >
        {/* subtle overlay */}
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-start'>
            <h2 className='text-lg font-semibold mb-2 text-center relative inline-block'>
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
            <h1 className='text-2xl font-bold text-gray-900'>
              Software Development
              <br /> Company
            </h1>
          </div>
        </div>
      </Section>
    </>
  );
}

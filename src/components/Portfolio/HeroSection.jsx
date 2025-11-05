import { Button } from 'antd';
import React from 'react';
import Section from '@layouts/Section';
import portfoliobg from '@/images/portfolio_bg.png';

export default function HeroSection() {
  return (
    <>
      <Section
        classNames='relative bg-cover bg-center bg-no-repeat py-24 2xl:py-60'
        style={{ backgroundImage: `url(${portfoliobg})` }}
      >
        {/* subtle overlay */}
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-start'>
            <h1 className='text-4xl capitalize font-bold mb-2 '>
              Some of our favourite <br /> projects
            </h1>
            <h2 className='text-lg font-medium text-gray-900'>
              For fortune 500’s, enterprises & startups
            </h2>
          </div>
        </div>
      </Section>
    </>
  );
}

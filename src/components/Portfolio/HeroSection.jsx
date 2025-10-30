import { Button } from 'antd';
import React from 'react';
import Section from '@layouts/Section';

export default function HeroSection() {
  return (
    <>
      <Section
        classNames='relative bg-cover bg-center bg-no-repeat py-24'
        style={{ backgroundImage: "url('/src/images/portfolio_bg.png')" }}
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

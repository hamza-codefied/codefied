import { Button } from 'antd';
import React from 'react';
import Section from '@layouts/Section';

export default function HeroSection() {
  return (
    <>
      <Section
        classNames='relative bg-cover bg-center bg-no-repeat py-24'
        style={{ backgroundImage: "url('/src/images/bloghero_bg.png')" }}
      >
        {/* subtle overlay */}
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'></div>
      </Section>
    </>
  );
}

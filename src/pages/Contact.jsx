import ClientSection from '@/components/Contact/ClientSection';
import GetInTouchSection from '@/components/Contact/GetInTouchSection';
import HeroSection from '@/components/Contact/HeroSection';
import MapSection from '@/components/Contact/MapSection';
import React from 'react';

export const Contact = () => {
  return (
    <div className='min-h-screen'>
      <HeroSection />
      <GetInTouchSection />
      <ClientSection />
      <MapSection />
    </div>
  );
};

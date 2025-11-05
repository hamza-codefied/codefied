import React from 'react';
import map from '@/images/map2.png';

const MapSection = () => {
  return (
    <section className='relative mt-20'>
      {/* Map Image */}
      <div className='max-w-6xl flex items-center justify-center mx-auto'>
        <img
          src={map}
          alt='Global Office Map'
          className='w-auto h-auto object-cover'
        />
      </div>
    </section>
  );
};

export default MapSection;

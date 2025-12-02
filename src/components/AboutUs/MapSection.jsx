import React from 'react';
import map from '@/images/map2.png';

const MapSection = () => {
  return (
    <section className='relative pt-[60px] md:pt-[100px] lg:pt-[180px] '>
      {/* Map Image */}
      <div className='max-w-7xl flex items-center justify-center mx-auto px-4'>
        <img
          src={map}
          alt='Global Office Map'
          className='w-full max-w-[1222px] h-auto object-contain'
          style={{
            aspectRatio: '1222 / 636',
            maxHeight: '636px',
          }}
        />
      </div>
    </section>
  );
};

export default MapSection;

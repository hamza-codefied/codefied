import React from 'react';

const MapSection = () => {
  return (
    <section className='relative mt-20'>
      {/* Map Image */}
      <div className='max-w-6xl flex items-center justify-center mx-auto'>
        <img
          src='src/images/map2.png'
          alt='Global Office Map'
          className='w-auto h-auto object-cover'
        />
      </div>
    </section>
  );
};

export default MapSection;

'use client';
import React from 'react';

const timelineData = [
  {
    year: '2015',
    title: 'Agency Founded',
    description:
      'At Codeified Software Development Company, we are passionate about leveraging technology to create innovative and impactful solutions. At Codeified Software Development Company, we are passionate about leveraging technology to create innovative and impactful solutions.',
  },
  {
    year: '2016',
    title: 'First Major Milestone',
    description:
      'We achieved our first major milestone by delivering enterprise-grade solutions that transformed client operations and user experiences.',
  },
  {
    year: '2018',
    title: 'Global Expansion',
    description:
      'Expanding globally, we built cross-functional teams that combined creativity and technology to serve clients around the world.',
  },
  {
    year: '2020',
    title: 'Innovation Recognition',
    description:
      'Our innovative approach earned industry recognition, positioning us as one of the most promising digital solution providers.',
  },
];

const Timeline = () => {
  return (
    <section
      className='relative bg-cover bg-center bg-no-repeat py-20 px-4 md:px-10 lg:px-20'
      style={{ backgroundImage: "url('/src/images/hero_bg.png')" }}
    >
      <div className='max-w-6xl mx-auto text-center'>
        {/* Tag */}
        <span className='uppercase tracking-widest text-[#d4575b] text-sm font-semibold'>
          Timeline
        </span>

        {/* Heading */}
        <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-black mt-2'>
          Our Journey Through <br /> Years
        </h2>
      </div>

      {/* Timeline Container */}
      <div className='relative mt-16 max-w-6xl mx-auto'>
        {/* Center Line */}
        <div className='absolute left-1/2 transform -translate-x-1/2 h-full w-[3px] bg-[#3f3f3f]' />

        <div className='flex flex-col space-y-16'>
          {timelineData.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${
                  isLeft ? 'md:justify-start' : 'md:justify-end'
                }`}
              >
                {/* Connector Dot */}
                <div className='absolute left-1/2 transform -translate-x-1/2 bg-black w-7 h-7 rounded-full border-8 border-[#d4575b] z-10 shadow-md' />

                {/* Year Label (centered near dot) */}
                <span
                  className={`absolute text-black font-semibold text-sm md:text-base ${
                    isLeft
                      ? 'md:right-[52%] md:-translate-y-8'
                      : 'md:left-[52%] md:-translate-y-8'
                  }`}
                >
                  {item.year}
                </span>

                {/* Card */}
                <div
                  className={`relative mt-10 md:mt-0 w-full md:w-[45%] bg-white shadow-lg rounded-2xl p-6 border border-gray-100 ${
                    isLeft
                      ? 'md:mr-auto md:text-right md:rounded-tr-none md:rounded-bl-none'
                      : 'md:ml-auto md:text-left md:rounded-tl-none md:rounded-br-none'
                  }`}
                >
                  <h3 className='text-lg font-semibold text-gray-800 mb-2'>
                    {item.title}
                  </h3>
                  <p className='text-gray-600 text-sm leading-relaxed'>
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;

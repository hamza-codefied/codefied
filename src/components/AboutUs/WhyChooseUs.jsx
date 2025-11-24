import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const WhyChooseUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      title: 'Unmatched Expertise',
      description:
        'Harnessing knowledge and delivering excellence — our team comprises experienced professionals with diverse skills, ensuring top-notch solutions tailored to your needs.',
    },
    {
      title: 'Pioneering Innovations',
      description:
        'We constantly embrace innovation, adopting the latest technologies to create solutions that drive progress and help you stay ahead in the digital era.',
    },
    {
      title: 'Commitment to Quality',
      description:
        'Quality is at the heart of everything we do. Our processes are designed to meet the highest standards, ensuring outstanding results every time.',
    },
    {
      title: 'Exceptional Customer Service',
      description:
        'We value our clients and prioritize their satisfaction. Our support team ensures smooth communication and prompt resolution to every query.',
    },
    {
      title: 'Results-Driven Approach',
      description:
        'Your success is our mission. We focus on measurable outcomes that translate into real growth and long-term impact for your business.',
    },
  ];

  return (
    <section id='why-choose-us' className='bg-[#0c0c0c]/90 text-white py-20 px-4 md:px-12 lg:px-20'>
      <div className='container m-auto px-8'>
        <div className=''>
        {/* Tag */}
        <p className='text-sm text-[#d4575b] tracking-widest mb-2'>
          WHY CHOOSE US
        </p>

        {/* Heading */}
        <h2 className='text-3xl md:text-4xl font-semibold mb-4'>
          Why <span className='text-[#d4575b]'>Codefied?</span>{' '}
          <span className='italic font-normal'>Your Success</span>
        </h2>

        {/* Paragraph */}
        <p className='text-white mb-12 max-w-2xl'>
          Partner with Codefied and experience a world where innovation meets
          excellence, and your success is our mission.
        </p>

        {/* 2-Column Layout */}
        <div className='grid md:grid-cols-2 gap-8'>
          {/* Left Column */}
          <div className='space-y-4'>
            {items.map((item, index) => (
              <div
                key={index}
                className={`flex justify-between items-center border-b pb-2 cursor-pointer transition-all duration-300 ${
                  activeIndex === index
                    ? 'border-[#d4575b]'
                    : 'text-gray-300 border-white hover:text-white'
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <h3 className='font-medium text-lg'>{item.title}</h3>
                <ArrowRight
                  className={`w-5 h-5 transition-transform ${
                    activeIndex === index ? 'translate-x-1 text-[#d4575b]' : ''
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className='flex items-center justify-start w-full mx-auto '>
            <p className='text-gray-300 text-lg leading-relaxed'>
              {items[activeIndex].description}
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

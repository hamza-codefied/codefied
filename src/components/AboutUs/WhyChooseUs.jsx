import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { formatText } from '@/utils/textFormatter';

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
    <section id='why-choose-us' className='bg-[#0C0C0C] text-white px-4 md:px-12 lg:px-20 pb-[80px] md:pb-[167px]'>
      <div className='container m-auto px-4 md:px-8'>
        <div className='w-[90%] mx-auto pt-[40px] md:pt-[84px]'>
          {/* Tag */}
          <p className='text-[#d4575b] tracking-widest text-[14px] md:text-[16px] font-[400] mb-[20px] md:mb-[28px]'>
            WHY CHOOSE US
          </p>

          {/* Heading and Description Container */}
          <div className='inline-block mb-[60px] md:mb-[100px]'>
            {/* Heading */}
            <h2 className='text-[32px] md:text-[54px] font-[600] mb-[8px] md:mb-[10px]'>
              Why <span className='text-[#d4575b]'>Codefied?</span>{' '}
              <span className='italic font-normal'>Your Success</span>
            </h2>

            {/* Paragraph - aligns with heading width */}
            <p className='text-white text-[18px] md:text-[24px] font-[400]'>
              {formatText("Partner with Codefied and experience a world where innovation meets excellence, and your success is our mission.")}
            </p>
          </div>

          {/* 2-Column Layout */}
          <div className='flex flex-col md:flex-row gap-[40px] md:gap-[74px]'>
            {/* Left Column */}
            <div className='space-y-4 w-full md:w-[530px]'>
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex justify-between items-center border-b pb-2 cursor-pointer transition-all duration-300 ${activeIndex === index
                    ? 'border-[#D4575B]'
                    : 'text-gray-400 border-white hover:text-white hover:border-transparent group'
                    }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <h3 className={`text-[20px] md:text-[32px] ${activeIndex === index ? 'font-[600]' : 'font-[500]'}`}>
                    {formatText(item.title)}
                  </h3>
                  <ArrowRight
                    className={`w-[20px] h-[20px] md:w-[25px] md:h-[25px] transition-transform ${activeIndex === index ? 'translate-x-1 text-[#D4575B]' : ''
                      }`}
                  />
                  {activeIndex !== index && (
                    <span className='absolute bottom-0 left-0 w-0 h-[2px] bg-[#D4575B] transition-all duration-300 group-hover:w-full z-10' style={{ backgroundColor: '#D4575B' }}></span>
                  )}
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className='flex items-center justify-start flex-1'>
              <p className='text-gray-300 text-[16px] md:text-[24px] font-[500] leading-relaxed'>
                {formatText(items[activeIndex].description)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

import { Button } from 'antd';
import React from 'react';
import Section from '@layouts/Section';
import { TypeAnimation } from 'react-type-animation';
import herobg from '@/images/hero.png';

import { formatText } from '@/utils/textFormatter';

export default function HeroSection() {
  return (
    <div className='min-h-[50vh] lg:min-h-[100vh] flex flex-col'>
      <style>{`
        @keyframes bounce-hover {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        @keyframes font-pulse {
          0%, 100% {
            letter-spacing: normal;
          }
          50% {
            letter-spacing: 1px;
          }
        }
        .btn-hover-bounce {
          font-weight: 400;
        }
        .btn-hover-bounce:hover {
          animation: bounce-hover 0.6s ease-in-out, font-pulse 0.6s ease-in-out;
          font-weight: 600;
        }
      `}</style>
      <Section
        classNames='relative bg-cover bg-center bg-no-repeat py-10 sm:py-16 md:py-20 lg:py-24 !mb-0 flex justify-center items-center flex-1'
        style={{ backgroundImage: `url(${herobg})` }}
      >
        <div className='container xl-custom:px-0 m-auto'>
          <div className=''>
            <div className='text-center flex space-y-[18px] flex-col'>
              <h1 className='text-3xl md:text-4xl lg:text-6xl xl:text-[90px] font-bold text-[#000]'>
                <TypeAnimation
                  sequence={[
                    'Code.',
                    10,
                    'Code. Create.',
                    0,
                    'Code. Create. Conquer.',
                  ]}
                  wrapper='span'
                  speed={1}
                  cursor={false} // hide blinking cursor after typing
                  repeat={0} // play only once
                />
              </h1>

              <p className='text-sm md:text-base lg:text-[24px] text-[#2e2e2e] w-full lg:w-[70%] mx-auto lg:leading-[1.1]'>
                {formatText(
                  "At codefied, we're not just building software; we're shaping the future with cutting-edge technology and unparalleled quality."
                )}
              </p>

              <div className='flex justify-center items-center pt-[20px]'>
                <button
                  className='btn-hover-bounce border border-transparent text-sm lg:text-[24px] font-medium text-white w-[200px] h-[50px] lg:w-[370px] lg:h-[81px] gap-[10px] flex items-center justify-center rounded-[10px] p-[10px] bg-[#d4575b] transition-all duration-300 hover:bg-transparent hover:text-[#d4575b] hover:border-[#d4575b] hover:shadow-[0_15px_40px_rgba(212,87,91,0.5)] active:translate-y-0'
                  style={{ fontWeight: 500 }}
                >
                  Get A Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    
    </div>
  );
}

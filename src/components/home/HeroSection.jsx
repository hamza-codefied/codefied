import { Button } from 'antd';
import React from 'react';
import Section from '@layouts/Section';
import { TypeAnimation } from 'react-type-animation';
import herobg from '@/images/hero.png';
import ClientSection from '../global/ClientSection';
import { formatText } from '@/utils/textFormatter';

export default function HeroSection() {
  return (
    <div>
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
        classNames='relative bg-cover bg-center bg-no-repeat py-10 sm:py-[120px] h-[calc(100vh_-_25vh)] !mb-0 flex justify-center items-center'
        style={{ backgroundImage: `url(${herobg})` }}
      >
        <div className='container m-auto'>
          <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center flex space-y-[18px] flex-col'>
              <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900'>
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

              <p className='text-sm md:text-base lg:text-1xl text-gray-600 w-full lg:w-[50%] mx-auto'>
                {formatText("At codefied, we're not just building software; we're shaping the future with cutting-edge technology and unparalleled quality.")}
              </p>

              <div>
                <button
                  className='btn-hover-bounce border border-transparent text-sm lg:text-base text-white rounded-md py-3 px-6 bg-[#d4575b] transition-all duration-300 hover:bg-transparent hover:text-[#d4575b] hover:border-[#d4575b] hover:shadow-[0_15px_40px_rgba(212,87,91,0.5)] active:translate-y-0'
                  style={{ fontWeight: 400 }}
                >
                  Get A Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <ClientSection />
    </div>
  );
}

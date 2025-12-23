import React from 'react';
import { Button } from '@components/ui/Button';
import aboutbg from '@/images/about_bg_2.png';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { GoArrowUpRight } from 'react-icons/go';
import { formatText } from '@/utils/textFormatter';

const Team = () => {
  return (
    <>
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
      <section
        className='relative bg-cover bg-center bg-no-repeat text-white xl:h-[660px] py-5 xl:py-0 flex items-center'
        style={{ backgroundImage: `url(${aboutbg})` }}
      >
        <div className='container m-auto xl-custom:px-0 w-full'>
          <div className=' grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full'>
            {/* LEFT COLUMN */}
            <div className='flex flex-col justify-center text-center md:text-left'>
              <h2 className='text-[24px] lg::text-[30px] font-bold leading-normal text-white max-w-[575px]'>
                We Work As One <br className='hidden lg:block' />
                Innovation Is Our Core, Creativity Is In Our DNA, And Launching
                And Growing Brands Is Our Passion.
              </h2>

              <p className='text-[16px] font-normal leading-relaxed max-w-lg mx-auto md:mx-0 text-[#FFF] mt-[20px] md:mt-[42px]'>
                {formatText(
                  'Transform your ideas into powerful mobile applications with our expert development team. We create high-quality, user-friendly apps for both iOS and Android platforms, ensuring a seamless experience for your users.'
                )}
              </p>

              <div className='flex justify-center md:justify-start'>
                <button
                  className='w-[240px] h-[50px] lg:w-[341px] lg:h-[67px] p-[8px] lg:p-[10px] gap-[6px] lg:gap-[10px] rounded-[10px] btn-hover-bounce border border-transparent text-[16px] lg:text-[20px] text-white bg-[#d4575b] transition-all duration-300 hover:bg-transparent hover:text-[#d4575b] hover:border-[#d4575b] hover:shadow-[0_15px_40px_rgba(212,87,91,0.5)] active:translate-y-0 flex items-center justify-center mt-[20px] md:mt-[42px] group'
                  style={{ fontWeight: 400 }}
                >
                  Get A Free Consultation
                  <GoArrowUpRight
                    className='text-white group-hover:text-[#d4575b] transition-colors duration-300'
                    style={{ fontSize: '20px' }}
                  />
                </button>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className='flex justify-center relative  h-[576px]'>
              <ul className='space-y-8 md:space-y-10 relative z-10 -ml-2.5 md:-ml-2'>
                {/* Vertical Line - from center of first circle to center of last circle */}
                <div
                  className='absolute left-[6px] w-[2px] bg-white/80 z-0'
                  style={{
                    top: '40px', // Center of first circle (w-4 h-4 = 16px, so center is 8px)
                    height: 'calc(6 * 4.8rem)', // 6 gaps × 2rem (space-y-8) = distance from first to last circle center
                  }}
                ></div>
                {[
                  '',
                  'Developers',
                  'Designers',
                  'QAs',
                  'Project Managers',
                  'Customer Support',
                  'Back Office',
                ].map((role, idx) => (
                  <li
                    key={idx}
                    className='flex items-center space-x-4 relative z-10'
                  >
                    {/* Bullet */}
                    <div
                      className={`w-4 h-4 rounded-full relative z-20 ${
                        idx === 0 ? 'bg-white ' : 'bg-[#d4575b]'
                      }`}
                    ></div>
                    {/* Label */}
                    <span className='text-white text-[16px] lg:text-[24px] font-[400]'>
                      {role}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;

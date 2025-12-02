import React from 'react';
import { Button } from '@components/ui/Button';
import aboutbg from '@/images/about_bg_2.png';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { GoArrowUpRight } from 'react-icons/go';

const Team = () => {
  return (
    <section
      className='relative bg-cover bg-center bg-no-repeat text-white h-[660px] flex items-center'
      style={{ backgroundImage: `url(${aboutbg})` }}
    >
      <div className='container m-auto px-8 w-full'>
        <div className=' grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full'>
          {/* LEFT COLUMN */}
          <div className='flex flex-col justify-center text-center md:text-left'>
            <h2 className='text-[30px] font-[700] leading-snug text-white max-w-[575px]' style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
              We Work As One! <br />
              <span className='text-white'>
                Innovation Is Our Core, Creativity Is In Our DNA,
              </span>{' '}
              And Launching And Growing Brands Is Our Passion.
            </h2>

            <p className='text-[16px] font-[400] leading-relaxed max-w-lg mx-auto md:mx-0 text-gray-300 mt-[42px]'>
              Transform your ideas into powerful mobile applications with our
              expert development team. We create high-quality, user-friendly apps
              for both iOS and Android platforms, ensuring a seamless experience
              for your users.
            </p>

            <button className='bg-[#d4575b] hover:bg-[#ff6666] text-white font-[500] rounded-lg transition duration-300 flex items-center justify-center gap-[10px] mt-[42px]' style={{ width: '341px', height: '67px', fontSize: '20px' }}>
              Get A Free Consultation
              <GoArrowUpRight className='text-white' style={{ fontSize: '30px' }} />
            </button>
          </div>

          {/* RIGHT COLUMN */}
          <div className='flex justify-center relative h-[576px]'>
            <ul className='space-y-8 md:space-y-10 relative z-10 -ml-2.5 md:-ml-2'>
              {/* Vertical Line - from center of first circle to center of last circle */}
              <div
                className='absolute left-[6px] w-[2px] bg-white/80 z-0'
                style={{
                  top: '40px', // Center of first circle (w-4 h-4 = 16px, so center is 8px)
                  height: 'calc(6 * 4.8rem)' // 6 gaps × 2rem (space-y-8) = distance from first to last circle center
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
                <li key={idx} className='flex items-center space-x-4 relative z-10'>
                  {/* Bullet */}
                  <div
                    className={`w-4 h-4 rounded-full relative z-20 ${idx === 0 ? 'bg-white ' : 'bg-[#d4575b]'
                      }`}
                  ></div>
                  {/* Label */}
                  <span className='text-white text-[24px] font-[400]'>
                    {role}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Team;

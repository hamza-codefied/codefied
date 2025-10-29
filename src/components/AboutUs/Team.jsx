import React from 'react';
import { Button } from '@components/ui/Button';
import aboutbg from '@/images/about_bg_2.png';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { GoArrowUpRight } from 'react-icons/go';

const Team = () => {
  return (
    <section
      className='relative mt-[-40px] bg-cover bg-center bg-no-repeat text-white py-20 px-4 md:px-10 lg:px-20'
      style={{ backgroundImage: `url(${aboutbg})` }}
    >
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
        {/* LEFT COLUMN */}
        <div className='space-y-6 text-center md:text-left'>
          <h2 className='text-2xl font-bold leading-snug'>
            We Work As One! <br />
            <span className='text-[#d4575b]'>
              Innovation Is Our Core, Creativity Is In Our DNA,
            </span>{' '}
            And Launching And Growing Brands Is Our Passion.
          </h2>

          <p className='text-gray-300 text-sm md:text-base leading-relaxed max-w-lg mx-auto md:mx-0'>
            Transform your ideas into powerful mobile applications with our
            expert development team. We create high-quality, user-friendly apps
            for both iOS and Android platforms, ensuring a seamless experience
            for your users.
          </p>

          <button className='bg-[#d4575b] hover:bg-[#ff6666] text-white font-semibold px-6 py-3 rounded-lg transition duration-300 flex items-center justify-center gap-2'>
            Get A Free Consultation
            <GoArrowUpRight className='text-white w-5 h-5 mt-[2px]' />
          </button>
        </div>

        {/* RIGHT COLUMN */}
        <div className='flex justify-center relative'>
          {/* Vertical Line */}
          <div className='hidden xl:block absolute left-1/2 md:left-[185px] 2xl:left-[227px] top-0 bottom-0 w-[2px] bg-white/80 transform -translate-x-1/2 md:translate-x-0'></div>

          <ul className='space-y-8 md:space-y-10 relative z-10'>
            {[
              '',
              'Developers',
              'Designers',
              'QAs',
              'Project Managers',
              'Customer Support',
              'Back Office',
            ].map((role, idx) => (
              <li key={idx} className='flex items-center space-x-4'>
                {/* Bullet */}
                <div
                  className={`w-4 h-4 rounded-full relative z-20 ${
                    idx === 0 ? 'bg-white hidden xl:block' : 'bg-[#d4575b]'
                  }`}
                ></div>
                {/* Label */}
                <span className='text-white text-sm md:text-base font-medium'>
                  {role}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Team;

import React, { useRef } from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import { motion, useInView } from 'framer-motion';
import backoffice from '@/images/backoffice.png';
import { formatText } from '@/utils/textFormatter';

const SmartBackOffice = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const cards = [
    {
      id: 1,
      title: 'Automated Operations',
      description: 'Streamline workflows and eliminate manual tasks.',
      image: backoffice,
      position: 'top-left',
    },
    {
      id: 2,
      title: 'Integrated Customer Support',
      description: 'Connect your platforms with responsive support systems.',
      image: backoffice,
      position: 'top-right',
    },
    {
      id: 3,
      title: 'Data Analytics',
      description: 'Turn raw information into actionable insights.',
      image: backoffice,
      position: 'bottom-left',
    },
    {
      id: 4,
      title: 'Scalable Infrastructure',
      description: 'Ensure your systems grow with your business.',
      image: backoffice,
      position: 'bottom-right',
    },
  ];

  return (
    /* Container */
    <div className='container xl-custom:px-0 m-auto '>
      <section
        ref={sectionRef}
        className='relative flex flex-col lg:flex-row lg:items-center lg:justify-center py-2 lg:py-64 px-4 overflow-hidden mt-10 xl:mt-[200px] min-h-0 lg:min-h-[800px]'
      >
        {/* Animated Dotted Border Circle - Only show on large screens */}
        <div className='hidden lg:flex absolute inset-0 w-full h-full items-center justify-center pointer-events-none'>
          <svg
            width='726'
            height='726'
            viewBox='0 0 726 726'
            className='w-[726px] h-[726px]'
            style={{ opacity: 0.6 }}
          >
            <defs>
              <style>{`
                @keyframes rotate {
                  from {
                    transform: rotate(0deg);
                  }
                  to {
                    transform: rotate(360deg);
                  }
                }
                .dot-group {
                  animation: rotate 20s linear infinite;
                  transform-origin: 363px 363px;
                }
                .dot-group-2 {
                  animation: rotate 25s linear infinite reverse;
                  transform-origin: 363px 363px;
                }
                .dot-group-3 {
                  animation: rotate 30s linear infinite;
                  transform-origin: 363px 363px;
                }
              `}</style>
            </defs>
            <g className='dot-group'>
              {Array.from({ length: 60 }).map((_, i) => {
                const angle = (i * 360) / 60;
                const radius = 339;
                const x = 363 + radius * Math.cos((angle * Math.PI) / 180);
                const y = 363 + radius * Math.sin((angle * Math.PI) / 180);
                const dotSize =
                  i % 4 === 0 ? 4 : i % 3 === 0 ? 3 : i % 2 === 0 ? 2.5 : 1.5;
                return (
                  <circle
                    key={`dot-1-${i}`}
                    cx={x}
                    cy={y}
                    r={dotSize}
                    fill='#d4575b'
                    opacity={0.7}
                  />
                );
              })}
            </g>
            <g className='dot-group-2'>
              {Array.from({ length: 80 }).map((_, i) => {
                const angle = (i * 360) / 80;
                const radius = 303;
                const x = 363 + radius * Math.cos((angle * Math.PI) / 180);
                const y = 363 + radius * Math.sin((angle * Math.PI) / 180);
                const dotSize =
                  i % 5 === 0 ? 4 : i % 4 === 0 ? 3 : i % 2 === 0 ? 2.5 : 1.5;
                return (
                  <circle
                    key={`dot-2-${i}`}
                    cx={x}
                    cy={y}
                    r={dotSize}
                    fill='#d4575b'
                    opacity={0.5}
                  />
                );
              })}
            </g>
            <g className='dot-group-3'>
              {Array.from({ length: 100 }).map((_, i) => {
                const angle = (i * 360) / 100;
                const radius = 266;
                const x = 363 + radius * Math.cos((angle * Math.PI) / 180);
                const y = 363 + radius * Math.sin((angle * Math.PI) / 180);
                const dotSize =
                  i % 6 === 0 ? 4 : i % 4 === 0 ? 3 : i % 3 === 0 ? 2.5 : 1.5;
                return (
                  <circle
                    key={`dot-3-${i}`}
                    cx={x}
                    cy={y}
                    r={dotSize}
                    fill='#d4575b'
                    opacity={0.4}
                  />
                );
              })}
            </g>
          </svg>
        </div>

        {/* Center Content */}
        <div className='relative z-10 text-center max-w-2xl mx-auto mb-12 lg:mb-0'>
          <h2 className='text-3xl lg:text-4xl font-bold mb-4 leading-snug text-center relative inline-block'>
            Behind Every Great Product <br className='hidden md:block' />
            Is a Smarter{' '}
            <span className='relative inline-block'>
              Back Office
              {/* Curved underline SVG */}
              <svg
                className='absolute left-0 bottom-0 w-full h-3 md:h-4'
                viewBox='0 0 200 10'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M2 8 Q50 3 100 8 T198 8'
                  stroke='#d4575b'
                  strokeWidth='3'
                  fill='transparent'
                  strokeLinecap='round'
                />
              </svg>
            </span>
          </h2>

          <p className='text-[#000] mb-2 text-sm md:text-base max-w-lg mx-auto'>
            {formatText(
              "Codefied's back-office solutions keep your business running smoothly from data and operations to support and analytics so you can focus on growth."
            )}
          </p>
          <a
            href='#'
            className='text-[#d4575b] font-semibold hover:underline transition flex items-center justify-center gap-1'
          >
            <span>Get Free Consultation</span>
            <GoArrowUpRight className='text-black mt-[2px]' />
          </a>
        </div>

        {/* Cards Grid for Mobile/Tablet */}
        <div className='lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full max-w-5xl mx-auto relative z-10'>
          {cards.map((card, index) => {
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -4, scale: 1.01 }}
                className='bg-[#121212]/90 text-white rounded-xl shadow-lg backdrop-blur-md border border-white/10 flex flex-col w-full'
                style={{
                  padding: 'clamp(20px, 4vw, 32px)',
                }}
              >
                <div className='flex items-center justify-start mb-3 sm:mb-4'>
                  <img
                    src={card.image}
                    alt={card.title}
                    className='w-[53px] h-[53px] object-contain'
                  />
                </div>
                <h3 className='text-[#FFF] text-lg sm:text-[24px] font-[700] mb-2'>
                  {card.title}
                </h3>
                <p className='text-sm sm:text-[16px] font-[400] text-[#FFF]'>
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Floating Cards for Large Screens */}
        {cards.map((card, index) => {
          // Determine initial animation direction based on card position
          // Left cards come from left, right cards come from right
          const getInitialPosition = () => {
            if (
              card.position === 'top-left' ||
              card.position === 'bottom-left'
            ) {
              return { x: -300, y: 0, opacity: 0 };
            } else {
              return { x: 300, y: 0, opacity: 0 };
            }
          };

          return (
            <motion.div
              key={card.id}
              initial={getInitialPosition()}
              animate={
                isInView ? { x: 0, y: 0, opacity: 1 } : getInitialPosition()
              }
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`hidden lg:flex absolute bg-[#121212]/90 text-white rounded-xl shadow-lg backdrop-blur-md border border-white/10 flex-col min-h-[210px] ${
                card.position === 'top-left'
                  ? 'top-10 left-16 xl:left-16 shadow-lg shadow-green-100'
                  : card.position === 'top-right'
                    ? 'top-2 right-16 xl:right-16 shadow-lg shadow-red-100'
                    : card.position === 'bottom-left'
                      ? 'bottom-10 left-20 xl:left-42 shadow-lg shadow-yellow-100'
                      : 'bottom-16 right-20 xl:right-16 shadow-lg shadow-blue-100'
              }`}
              style={{
                padding: 'clamp(20px, 3vw, 28px)',
                width: 'clamp(280px, 30vw, 430px)',
                maxWidth: '90vw',
              }}
            >
              <div className='flex items-center justify-start mb-3 sm:mb-4 md:mb-6'>
                <img
                  src={card.image}
                  alt={card.title}
                  className='w-[53px] h-[53px] object-contain'
                />
              </div>
              <h3 className='text-base sm:text-lg md:text-xl lg:text-[24px] font-[700] mb-2 sm:mb-2 md:mb-3'>
                {card.title}
              </h3>
              <p className='text-xs sm:text-sm md:text-base lg:text-[16px] font-normal text-[#FFF]'>
                {card.description}
              </p>
            </motion.div>
          );
        })}
      </section>
    </div>
  );
};

export default SmartBackOffice;

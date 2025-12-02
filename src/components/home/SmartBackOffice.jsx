import React, { useRef } from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import { motion, useInView } from 'framer-motion';
import backoffice from '@/images/backoffice.png';
import circle from '@/images/circle.png';

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
    <div className='container m-auto '>
      <section ref={sectionRef} className='relative flex items-center justify-center py-32 sm:py-48 md:py-64 px-4 overflow-hidden mt-10 sm:mt-[200px] min-h-[600px] sm:min-h-[700px] md:min-h-[800px]'>
        {/* Background Image */}
        <img
          src={circle}
          alt='background circle'
          className='absolute inset-0 w-full h-full object-contain opacity-90 pointer-events-none'
        />

        {/* Center Content */}
        <div className='relative z-10 text-center max-w-2xl mx-auto'>
          <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-snug text-center relative inline-block'>
            Behind Every Great Product <br />
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

          <p className='text-gray-600 mb-2 text-sm md:text-base max-w-lg mx-auto'>
            Codefied’s back-office solutions keep your business running smoothly
            from data and operations to support and analytics so you can focus on
            growth.
          </p>
          <a
            href='#'
            className='text-[#d4575b] font-semibold hover:underline transition flex items-center justify-center gap-1'
          >
            <span>Get Free Consultation</span>
            <GoArrowUpRight className='text-black mt-[2px]' />
          </a>
        </div>

        {/* Floating Cards */}
        {cards.map((card, index) => {
          // Determine initial animation direction based on card position
          // Left cards come from left, right cards come from right
          const getInitialPosition = () => {
            if (card.position === 'top-left' || card.position === 'bottom-left') {
              return { x: -300, y: 0, opacity: 0 };
            } else {
              return { x: 300, y: 0, opacity: 0 };
            }
          };

          return (
            <motion.div
              key={card.id}
              initial={getInitialPosition()}
              animate={isInView ? { x: 0, y: 0, opacity: 1 } : getInitialPosition()}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`absolute bg-[#121212]/90 text-white rounded-xl shadow-lg backdrop-blur-md border border-white/10 flex flex-col ${card.position === 'top-left'
                ? 'top-4 left-2 sm:top-8 sm:left-4 md:top-12 md:left-8 lg:top-20 lg:left-16 xl:left-36 shadow-lg shadow-green-100'
                : card.position === 'top-right'
                  ? 'top-4 right-2 sm:top-8 sm:right-4 md:top-12 md:right-8 lg:top-8 lg:right-16 xl:right-56 shadow-lg shadow-red-100'
                  : card.position === 'bottom-left'
                    ? 'bottom-4 left-2 sm:bottom-8 sm:left-4 md:bottom-12 md:left-8 lg:bottom-16 lg:left-20 xl:left-48 shadow-lg shadow-yellow-100'
                    : 'bottom-4 right-2 sm:bottom-8 sm:right-4 md:bottom-12 md:right-8 lg:bottom-20 lg:right-20 xl:right-52 shadow-lg shadow-blue-100'
                }`}
              style={{
                padding: 'clamp(12px, 2vw, 20px)',
                width: 'clamp(280px, 30vw, 430px)',
                height: 'clamp(160px, 18vw, 210px)',
                maxWidth: '90vw'
              }}
            >
              <div className='flex items-center justify-start mb-3 sm:mb-4 md:mb-6'>
                <img
                  src={card.image}
                  alt={card.title}
                  className='w-[53px] h-[53px] object-contain'
                />
              </div>
              <h3 className='text-base sm:text-lg md:text-xl lg:text-[24px] font-[700] mb-2 sm:mb-2 md:mb-3'>{card.title}</h3>
              <p className='text-xs sm:text-sm md:text-base lg:text-[16px] font-[400] text-gray-300'>{card.description}</p>
            </motion.div>
          );
        })}
      </section>
    </div>

  );
};

export default SmartBackOffice;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoArrowUpRight } from 'react-icons/go';
import { formatText } from '@/utils/textFormatter';
import hero_bg from '@/images/hero.png';

const Vision = () => {
  const [activeTab, setActiveTab] = useState('vision');

  return (
    <div className='w-full mt-10 lg:mt-[185px] container m-auto xl-custom:px-0 relative'>
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

      {/* Background Image with Gradient Overlay - Full Width */}
      {/* <div
        className='absolute bottom-0 left-0 right-0 h-[250px] bg-cover bg-center bg-no-repeat pointer-events-none'
        style={{
          backgroundImage: `url(${hero_bg})`,
          backgroundPosition: 'center bottom',
        }}
      >
       
        <div
          className='absolute top-0 left-0 right-0 h-[80px] pointer-events-none'
          style={{
            background:
              'linear-gradient(to bottom, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 30%, rgba(255,255,255,0.3) 60%, transparent 100%)',
          }}
        />
 
        <div
          className='absolute bottom-0 left-0 right-0 h-[80px] pointer-events-none'
          style={{
            background:
              'linear-gradient(to top, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 30%, rgba(255,255,255,0.3) 60%, transparent 100%)',
          }}
        />
      </div> */}

      <div className=''>
        <section id='vision-mission' className='w-full text-black relative'>
          <div className='text-start'>
            {/* Heading */}
            <h2
              style={{ letterSpacing: '-0.246px' }}
              className='text-[20px] sm:text-[24px] md:text-[30px] lg:text-[44px] leading-normal font-bold'
            >
              Innovating Solutions , <br className='hidden lg:block' />
              Empowering your success
            </h2>

            {/* Paragraph */}
            <p
              className='text-[14px] sm:text-[16px] lg:text-[20px] font-normal leading-normal mt-[18px]'
              style={{ color: '#828282', letterSpacing: '-0.12px' }}
            >
              {formatText(
                'At Codefied Software Development Company, we are passionate about leveraging technology to create innovative and impactful solutions.At Codefied Software Development Company, we are passionate about leveraging technology to create innovative and impactful solutions.'
              )}
            </p>

            {/* Tabs */}
            <div className='flex justify-start items-center flex-wrap gap-4 mt-[44px]'>
              {['vision', 'mission'].map(tab => (
                <motion.button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-[10px] rounded-[10px] text-[16px] lg:text-[20px] font-normal transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-[#d4575b] text-white'
                      : 'bg-transparent text-[#000] hover:text-[#d4575b] hover:underline'
                  }`}
                >
                  {tab === 'vision' ? 'Our Vision' : 'Our Mission'}
                </motion.button>
              ))}
            </div>

            {/* Tab Content */}
            <div className='w-full mt-8 relative'>
              <AnimatePresence mode='wait'>
                {activeTab === 'vision' ? (
                  <motion.div
                    key='vision'
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className='border-l-2 border-[#d4575b] pl-6 py-4 relative z-10'
                  >
                    <p
                      style={{ letterSpacing: '-0.12px', lineHeight: '29px' }}
                      className='text-black text-[14px] sm:text-[16px] lg:text-[20px] font-normal'
                    >
                      {formatText(
                        'At Codefied Software Development Company, we are passionate about leveraging technology to create innovative and impactful solutions. Our team of dedicated professionals specializes in developing cutting-edge mobile apps, web apps, and immersive AR/VR experiences. As a product and service-based company, we pride ourselves on delivering exceptional quality and value to our clients.At Codefied Software Development Company, we are passionate about leveraging technology to create innovative and impactful solutions. Our team of dedicated professionals specializes in developing cutting-edge mobile apps, web apps, and immersive AR/VR experiences. As a product and service-based company, we pride ourselves on delivering exceptional quality and value to our clients.'
                      )}
                    </p>
                    <button
                      className='btn-hover-bounce border border-transparent text-sm lg:text-base text-white rounded-md py-3 px-6 bg-[#d4575b] transition-all duration-300 hover:bg-transparent hover:text-[#d4575b] hover:border-[#d4575b] hover:shadow-[0_15px_40px_rgba(212,87,91,0.5)] active:translate-y-0 flex items-center justify-center gap-[6px] mt-[30px] group relative z-10'
                      style={{ fontWeight: 400 }}
                    >
                      Get Free Consultation
                      <GoArrowUpRight className='text-white group-hover:text-[#d4575b] w-[20px] h-[20px] md:w-[30px] md:h-[30px] transition-colors duration-300' />
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key='mission'
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className='border-l-2 border-[#d4575b] pl-6 py-4 relative z-10'
                  >
                    <p
                      style={{ letterSpacing: '-0.12px', lineHeight: '29px' }}
                      className='text-black text-[14px] sm:text-[16px] lg:text-[20px] font-normal'
                    >
                      {formatText(
                        'At Codefied Software Development Company, we are passionate about leveraging technology to create innovative and impactful solutions. Our team of dedicated professionals specializes in developing cutting-edge mobile apps, web apps, and immersive AR/VR experiences. As a product and service-based company, we pride ourselves on delivering exceptional quality and value to our clients.At Codefied Software Development Company, we are passionate about leveraging technology to create innovative and impactful solutions.'
                      )}
                    </p>
                    <button
                      className='btn-hover-bounce border border-transparent text-sm lg:text-base text-white rounded-md py-3 px-6 bg-[#d4575b] transition-all duration-300 hover:bg-transparent hover:text-[#d4575b] hover:border-[#d4575b] hover:shadow-[0_15px_40px_rgba(212,87,91,0.5)] active:translate-y-0 flex items-center justify-center gap-[6px] mt-[30px] group relative z-10'
                      style={{ fontWeight: 400 }}
                    >
                      Get Free Consultation
                      <GoArrowUpRight className='text-white group-hover:text-[#d4575b] w-[20px] h-[20px] md:w-[30px] md:h-[30px] transition-colors duration-300' />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Vision;

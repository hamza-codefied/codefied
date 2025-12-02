import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoArrowUpRight } from 'react-icons/go';

const Vision = () => {
  const [activeTab, setActiveTab] = useState('vision');

  return (
    <div className='container m-auto px-8 mt-[185px]'>
      <section id='vision-mission' className='w-full bg-white text-black '>
        <div className='text-start'>
          {/* Heading */}
          <h2 className='text-[44px] font-[700]'>
            Innovating Solutions , <br />
            Empowering your success
          </h2>

          {/* Paragraph */}
          <p className='text-[20px] font-[400] leading-relaxed mt-[18px]' style={{ color: '#828282' }}>
            At Codefied Software Development Company, we are passionate about
            leveraging technology to create innovative and impactful solutions.At
            Codefied Software Development Company, we are passionate about
            leveraging technology to create innovative and impactful solutions.
          </p>

          {/* Tabs */}
          <div className='flex justify-start items-center flex-wrap gap-4 mt-[44px]'>
            {['vision', 'mission'].map(tab => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-[10px] rounded-[10px] text-[20px] font-[400] transition-all duration-300 ${activeTab === tab
                  ? 'bg-[#d4575b] text-white'
                  : 'bg-transparent text-gray-500 hover:text-[#d4575b] hover:underline'
                  }`}
              >
                {tab === 'vision' ? 'Our Vision' : 'Our Mission'}
              </motion.button>
            ))}
          </div>

          {/* Tab Content */}
          <div className='mt-8 relative min-h-[200px]'>
            <AnimatePresence mode='wait'>
              {activeTab === 'vision' ? (
                <motion.div
                  key='vision'
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className='border-l-2 border-[#d4575b] pl-6 py-4'
                >
                  <p className='text-black text-[20px] font-[400] leading-relaxed'>
                    At Codefied Software Development Company, we are passionate
                    about leveraging technology to create innovative and impactful
                    solutions. Our team of dedicated professionals specializes in
                    developing cutting-edge mobile apps, web apps, and immersive
                    AR/VR experiences. As a product and service-based company, we
                    pride ourselves on delivering exceptional quality and value to
                    our clients.At Codefied Software Development Company, we are
                    passionate about leveraging technology to create innovative and
                    impactful solutions. Our team of dedicated professionals
                    specializes in developing cutting-edge mobile apps, web apps,
                    and immersive AR/VR experiences. As a product and service-based
                    company, we pride ourselves on delivering exceptional quality
                    and value to our clients.
                  </p>
                  <button className='bg-[#d4575b] hover:bg-[#ff6666] text-white text-[24px] font-[400] px-[34px] py-[24px] rounded-lg transition duration-300 flex items-center justify-center gap-[6px] mt-[30px]'>
                    Get Free Consultation
                    <GoArrowUpRight className='text-white w-[30px] h-[30px]' />
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key='mission'
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className='border-l-2 border-[#d4575b] pl-6 py-4'
                >
                  <p className='text-black text-[20px] font-[400] leading-relaxed'>
                    At Codefied Software Development Company, we are passionate
                    about leveraging technology to create innovative and impactful
                    solutions. Our team of dedicated professionals specializes in
                    developing cutting-edge mobile apps, web apps, and immersive
                    AR/VR experiences. As a product and service-based company, we
                    pride ourselves on delivering exceptional quality and value to
                    our clients.At Codefied Software Development Company, we are
                    passionate about leveraging technology to create innovative and
                    impactful solutions.
                  </p>
                  <button className='bg-[#d4575b] hover:bg-[#ff6666] text-white text-[24px] font-[400] px-[34px] py-[24px] rounded-lg transition duration-300 flex items-center justify-center gap-[6px] mt-[30px]'>
                    Get Free Consultation
                    <GoArrowUpRight className='text-white w-[30px] h-[30px]' />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vision;

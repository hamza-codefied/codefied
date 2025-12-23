'use client';
import React from 'react';
import { motion } from 'framer-motion';
import blogImage from '@/images/blog-image.png'; // replace with your actual image path

const textVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: 'easeOut' } },
};

const imageVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: 'easeOut' } },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3, delayChildren: 0.3 },
  },
};

const FeaturedSection = () => {
  return (
    <div className='container xl-custom:px-0 m-auto'>
      <section className='relative mt-0 lg:mt-[-70px] h-auto xl:h-[447px] bg-[#0c0c0c] rounded-[24px] text-white overflow-hidden p-[20px] lg:p-[50px]'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          className='relative z-10 grid grid-cols-1 md:grid-cols-2 h-full gap-[38px]'
        >
          {/* Left Column (Text) */}
          <motion.div
            variants={textVariants}
            className='text-center md:text-left'
          >
            <motion.span
              className='text-[#d4575b] block'
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              style={{
                fontSize: 'clamp(18px, 2.5vw, 24px)',
                fontWeight: 700,
                // marginBottom: 'clamp(15px, 2vw, 22px)',
              }}
            >
              Trending Post
            </motion.span>

            <motion.h2
              className='font-bold text-[30px] lg:text-[44px] lg:leading-[1.2] mt-5'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
            >
              New invoicing features to help you get paid faster
            </motion.h2>

            <motion.p
              className='max-w-xl mx-auto md:mx-0 mt-5 mb-[41px] text-[16px] font-normal text-[#828282]'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
            >
              Over the past few months, we've added several new features to SaaS
              Invoicing to help any business get paid faster and streamline
              their collection workflows.
            </motion.p>

            <motion.p
              className='max-w-xl mx-auto md:mx-0'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
              style={{
                fontSize: 'clamp(14px, 1.8vw, 16px)',
                fontWeight: 500,
              }}
            >
              Rohail Naveed | November 8, 2021
            </motion.p>
          </motion.div>

          {/* Right Column (Image) */}
          <motion.div
            variants={imageVariants}
            className='flex justify-center md:justify-end relative w-full 2xl:w-[552px] h-[319px]'
            style={
              {
                // width: '100%',
                // maxWidth: 'clamp(100%, 50vw, 552px)'
              }
            }
          >
            <motion.img
              src={blogImage}
              alt='Legal tech illustration'
              className='w-full rounded-2xl shadow-2xl object-cover relative z-10'
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: 'spring', stiffness: 120, damping: 10 }}
            />
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default FeaturedSection;

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
    <section className='relative top-[-20px] max-w-6xl mx-auto rounded-3xl bg-black/90 text-white overflow-hidden py-10 px-6 md:px-12'>
      {/* Subtle gradient glow background */}
      <div className='absolute inset-0 bg-gradient-to-tr from-purple-900/20 via-transparent to-blue-900/20 blur-3xl' />

      <motion.div
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
        className='relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12'
      >
        {/* Left Column (Text) */}
        <motion.div
          variants={textVariants}
          className='space-y-3 text-center md:text-left'
        >
          <motion.span
            className='text-lg font-semibold text-[#d4575b]'
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            Trending Post
          </motion.span>

          <motion.h2
            className='text-3xl font-bold'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
          >
            New invoicing features to help you get paid faster
          </motion.h2>

          <motion.p
            className='text-gray-300 text-base max-w-xl mx-auto md:mx-0'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
          >
            Over the past few months, we’ve added several new features to SaaS
            Invoicing to help any business get paid faster and streamline their
            collection workflows.
          </motion.p>

          <motion.p
            className='text-gray-300 text-base max-w-xl mx-auto md:mx-0'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
          >
            Rohail Naveed | November 8, 2021
          </motion.p>
        </motion.div>

        {/* Right Column (Image) */}
        <motion.div
          variants={imageVariants}
          className='flex justify-center md:justify-end relative'
        >
          <motion.div
            className='absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent rounded-2xl blur-2xl'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          />
          <motion.img
            src={blogImage}
            alt='Legal tech illustration'
            className='w-full max-w-md rounded-2xl shadow-2xl object-cover relative z-10'
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: 'spring', stiffness: 120, damping: 10 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FeaturedSection;

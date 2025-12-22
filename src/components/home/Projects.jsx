import React, { useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import project from '@/images/project.png';
import { formatText } from '@/utils/textFormatter';

const ProjectsSection = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragStart, setDragStart] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const projects = [
    {
      id: 1,
      image: project,
      title: 'Grocery Comparison',
      link: 'www.grocerycompare.com',
    },
    {
      id: 2,
      image: project,
      title: 'E-Commerce Platform',
      link: 'www.ecommerceplatform.com',
    },
    {
      id: 3,
      image: project,
      title: 'Digital Marketing Hub',
      link: 'www.digitalmarketinghub.com',
    },
  ];

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + projects.length) % projects.length);
  };

  const handleDragStart = (event, info) => {
    setDragStart(info.point.x);
    setIsDragging(true);
  };

  const handleDragEnd = (event, info) => {
    setIsDragging(false);
    const dragDistance = info.point.x - dragStart;
    const threshold = 50; // Minimum drag distance to trigger slide change

    if (Math.abs(dragDistance) > threshold) {
      if (dragDistance > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
  };

  const getCardStyle = index => {
    const diff = index - currentIndex;
    const zIndex = 3 - Math.abs(diff);

    if (diff === 0) {
      // Front card
      return {
        zIndex,
        x: 0,
        scale: 1,
        opacity: 1,
        rotateY: 0,
      };
    } else if (diff === 1) {
      // Next card (slightly behind) - responsive offsets handled via CSS
      return {
        zIndex,
        x: 40, // Smaller offset for mobile, will be overridden by media queries if needed
        scale: 0.92,
        opacity: 0.6,
        rotateY: -8,
      };
    } else if (diff === -1) {
      // Previous card (going to back)
      return {
        zIndex,
        x: -40,
        scale: 0.92,
        opacity: 0.4,
        rotateY: 8,
      };
    } else {
      // Far cards
      return {
        zIndex: 0,
        x: diff > 0 ? 60 : -60,
        scale: 0.85,
        opacity: 0,
        rotateY: diff > 0 ? -12 : 12,
      };
    }
  };

  return (
    <div className='container xl:px-0 m-auto'>
      <section
        id='projects'
        className='mt-10 pt-5 sm:pt-[200px] bg-white'
        style={{ overflowX: 'hidden' }}
      >
        {/* Tag */}
        <div className='text-center sm:text-start mb-4 sm:mb-0'>
          <span className='text-sm sm:text-base font-normal text-[#D4575B] uppercase tracking-wider'>
            Projects
          </span>
        </div>

        {/* Heading + Paragraph Row */}
        <div className='flex flex-col md:flex-row items-start justify-between gap-6 sm:gap-8 mt-4 sm:mt-5 mb-8 sm:mb-16 md:mb-[108px]'>
          {/* Left Side */}
          <div className='w-full md:w-2/3'>
            <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 relative inline-block'>
              Make creativity your <br className='hidden md:block' /> competitive edge
              <span className='block md:w-[200px] h-[1px] bg-gray-500 mt-2 sm:mt-3 md:mt-5 rounded-full'></span>
            </h2>
          </div>

          {/* Right Side */}
          <div className='w-full md:w-[350px]'>
            <p className='text-black text-xs sm:text-sm md:text-base mb-4 sm:mb-[21px] leading-relaxed font-normal'>
              {formatText(
                'We are web designers, developers, project managers, and digital solutions using the latest trends and technologies.'
              )}
            </p>
            <div className='flex items-center justify-start md:justify-end pr-0 md:pr-5 font-semibold'>
              <button
                onClick={() => navigate('/portfolio')}
                className='text-sm sm:text-base md:text-[19px] text-[#d4575b] hover:underline transition font-semibold'
              >
                View All
              </button>
              <FaArrowRightLong
                className='ml-2 sm:ml-[14px] text-[#d4575b]'
                size={18}
                style={{ fontSize: 'clamp(16px, 4vw, 20px)' }}
              />
            </div>
          </div>
        </div>

        {/* 3D Card Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-150px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className='flex items-center justify-center mb-8 sm:mb-10 md:mb-20 px-4 sm:px-6 md:px-0'
        >
          <motion.div
            className='relative w-full max-w-full sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1006px] cursor-grab active:cursor-grabbing p-4 sm:p-6 md:p-0'
            style={{ perspective: '2000px', aspectRatio: '1006/569' }}
            drag='x'
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            whileDrag={{ cursor: 'grabbing' }}
          >
            <AnimatePresence mode='sync'>
              {projects.map((projectItem, index) => {
                const style = getCardStyle(index);
                return (
                  <motion.div
                    key={projectItem.id}
                    className='absolute inset-0'
                    initial={{
                      rotateY: 90,
                      opacity: 0,
                      scale: 0.8,
                    }}
                    animate={{
                      x: style.x,
                      scale: style.scale,
                      opacity: style.opacity,
                      rotateY: style.rotateY,
                      zIndex: style.zIndex,
                    }}
                    exit={{
                      rotateY: -90,
                      opacity: 0,
                      scale: 0.8,
                    }}
                    transition={{
                      duration: isDragging ? 0 : 0.45,
                      ease: [0.43, 0.13, 0.23, 0.96],
                    }}
                    style={{
                      transformStyle: 'preserve-3d',
                      backfaceVisibility: 'hidden',
                    }}
                  >
                    <img
                      alt={projectItem.title}
                      className='w-full h-full object-cover rounded-lg md:rounded-2xl'
                      src={projectItem.image}
                      style={{
                        boxShadow:
                          index === currentIndex
                            ? '0 15px 30px -8px rgba(212, 87, 91, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)'
                            : '0 8px 20px -8px rgba(0, 0, 0, 0.2)',
                      }}
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Navigation Controls */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 mb-6 sm:mb-8 md:mb-12 mx-auto w-full max-w-full sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1006px] px-4 sm:px-6 md:px-0'
        >
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className='flex-1'
          >
            <motion.p
              className='text-lg sm:text-xl md:text-2xl lg:text-[24px] font-semibold text-black mb-1 sm:mb-2'
              layoutId='title'
            >
              {projects[currentIndex].title}
            </motion.p>
            <motion.p
              className='text-xs sm:text-sm md:text-base lg:text-[24px] font-light text-[#000] break-all sm:break-normal'
              layoutId='link'
            >
              {projects[currentIndex].link}
            </motion.p>
          </motion.div>

          <div className='flex gap-2 sm:gap-3 md:gap-4'>
            <motion.button
              whileHover={{
                scale: 1.1,
                rotate: -5,
                backgroundColor: '#D4575B',
                borderColor: 'transparent',
              }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className='bg-white border-2 border-black rounded-full transition-all duration-300 shadow-lg hover:shadow-xl group w-[48px] h-[48px] sm:w-[52px] sm:h-[52px] md:w-[60px] md:h-[60px] lg:w-[68px] lg:h-[64px] flex items-center justify-center p-2 sm:p-3 md:p-4 lg:p-5'
            >
              <svg
                className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-all group-hover:stroke-white group-hover:-translate-x-1'
                fill='none'
                viewBox='0 0 24 24'
                stroke='black'
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 19l-7-7 7-7'
                />
              </svg>
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.1,
                rotate: 5,
                backgroundColor: '#D4575B',
                borderColor: 'transparent',
              }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className='bg-white border-2 border-black rounded-full transition-all duration-300 shadow-lg hover:shadow-xl group w-[48px] h-[48px] sm:w-[52px] sm:h-[52px] md:w-[60px] md:h-[60px] lg:w-[68px] lg:h-[64px] flex items-center justify-center p-2 sm:p-3 md:p-4 lg:p-5'
            >
              <svg
                className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-all group-hover:stroke-white group-hover:translate-x-1'
                fill='none'
                viewBox='0 0 24 24'
                stroke='black'
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ProjectsSection;

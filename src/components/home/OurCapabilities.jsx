import { useState, useEffect } from 'react';
import { FiLoader } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { formatText } from '@/utils/textFormatter';

export const OurCapabilities = () => {
  const allCapabilities = [
    'Web App Development',
    'Mobile App Design',
    'UI/UX Research',
    'Backend Integration',
    'API Development',
    'Performance Optimization',
    'SEO and Marketing',
    'Cloud Deployment',
    'Database Management',
    'E-Commerce Platforms',
    'Testing & QA',
    'AI/ML Integration',
    'Product Consulting',
    'Maintenance & Support',
    'Custom Dashboards',
    'Analytics Integration',
    'Payment Gateway Setup',
    'User Authentication Systems',
  ];

  const initialCount = 13;
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleToggle = () => {
    setLoading(true);
    setTimeout(() => {
      if (visibleCount < allCapabilities.length) {
        setVisibleCount(allCapabilities.length);
      } else {
        setVisibleCount(initialCount);
      }
      setLoading(false);
    }, 800);
  };

  const isExpanded = visibleCount >= allCapabilities.length;

  // Split capabilities into 2 rows for mobile
  const midPoint = Math.ceil(allCapabilities.length / 2);
  const firstRow = allCapabilities.slice(0, midPoint);
  const secondRow = allCapabilities.slice(midPoint);

  return (
    // <section className='bg-white text-center py-6 px-6 overflow-hidden'>
    <section
      className='container text-center xl-custom:px-0 overflow-hidden pt-[50px] md:pt-[134px] pb-[50px] md:pb-[80px] lg:pb-[150px]'
    >
      {/* 🔴 Tag */}
      <div className='inline-block uppercase text-[#D4575B] text-[14px] font-normal mb-1'>
        Our Capabilities
      </div>

      {/* 🏷️ Heading */}
      <h2 className='pt-[16px] mb-[20px] md:mb-[53px] text-[24px] sm:text-[30px] lg:text-[54px] font-semibold text-black'>
        We can help you with...
      </h2>

      {/* 🟨 Capability Boxes with Animation */}
      {/* Mobile: 2 rows with horizontal scroll, Large: Normal flex-wrap */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
      `}</style>
      
      {/* Mobile: 2 rows layout */}
      <div className='md:hidden space-y-2'>
        {/* First Row */}
        <div 
          className='overflow-x-auto -mx-4 px-4 scrollbar-hide'
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <motion.div
            layout
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className='flex flex-nowrap justify-start gap-2 min-w-max'
          >
            <AnimatePresence>
              {firstRow.map((capability, index) => (
                <motion.div
                  key={capability}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className='bg-[#D4575B] text-white rounded-[8px] hover:scale-105 transition-transform duration-300 px-3 py-2 text-[12px] tracking-wide flex-shrink-0'
                >
                  {formatText(capability)}
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Second Row */}
        <div 
          className='overflow-x-auto -mx-4 px-4 scrollbar-hide'
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <motion.div
            layout
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className='flex flex-nowrap justify-start gap-2 min-w-max'
          >
            <AnimatePresence>
              {secondRow.map((capability, index) => (
                <motion.div
                  key={capability}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className='bg-[#D4575B] text-white rounded-[8px] hover:scale-105 transition-transform duration-300 px-3 py-2 text-[12px] tracking-wide flex-shrink-0'
                >
                  {formatText(capability)}
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Large screens: Original layout */}
      <div className='hidden md:block'>
        <motion.div
          layout
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className='flex flex-wrap justify-center gap-2 sm:gap-2.5 lg:gap-3'
        >
          <AnimatePresence>
            {allCapabilities.slice(0, visibleCount).map((capability, index) => (
              <motion.div
                key={capability}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className='bg-[#D4575B] text-white rounded-[8px] hover:scale-105 transition-transform duration-300 px-3 py-2 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[17px] tracking-wide lg:tracking-[1.5px] lg:px-[35.085px] lg:py-[11px] lg:pb-[12.19px]'
              >
                {formatText(capability)}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <div className='pt-[30px] md:pt-[53px] hidden md:flex justify-center'>
        <button
          onClick={handleToggle}
          disabled={loading}
          className='flex items-center justify-center gap-4 cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 bg-transparent border-none outline-none'
        >
          {/* Loader – always visible, size 25×25, spins only when loading */}
          <div className='w-[25px] h-[25px] flex items-center justify-center pointer-events-none'>
            <FiLoader
              className='w-[25px] h-[25px] text-[#D4575B] transition-all duration-300'
              style={{
                animation: loading ? 'spin 1s linear infinite' : 'none',
                opacity: loading ? 1 : 0.5, // subtle when idle
              }}
            />
          </div>

          {/* Button Text – font size 18px, weight 300 */}
          <span className='text-black text-[18px] font-light hover:scale-105 active:scale-100 transition-transform duration-300 pointer-events-none'>
            {isExpanded ? 'Load Less' : 'Load More'}
          </span>
        </button>
      </div>
    </section>
  );
};

export default OurCapabilities;

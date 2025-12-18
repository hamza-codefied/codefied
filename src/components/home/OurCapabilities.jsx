import { useState } from 'react';
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

  return (
    // <section className='bg-white text-center py-6 px-6 overflow-hidden'>
    <section
      className='container text-center xl:px-0 overflow-hidden'
      style={{ paddingTop: '134px', paddingBottom: '150px' }}
    >
      {/* 🔴 Tag */}
      <div className='inline-block uppercase text-[#D4575B] text-[14px] font-normal mb-1'>
        Our Capabilities
      </div>

      {/* 🏷️ Heading */}
      <h2 className='pt-[16px] mb-[53px] text-[54px] font-semibold text-black'>
        We can help you with...
      </h2>

      {/* 🟨 Capability Boxes with Animation */}
      <motion.div
        layout
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className='flex flex-wrap justify-center gap-3 max-w-[1600px] mx-auto '
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
              style={{
                letterSpacing: '1.5px',
                padding: '11px 27.885px 12.19px 35.085px',
              }}
              className='bg-[#D4575B] text-white text-[17px] rounded-[8px] hover:scale-105 transition-transform duration-300'
            >
              {formatText(capability)}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <div className='pt-[53px] flex justify-center'>
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

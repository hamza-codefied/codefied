import { useState } from 'react';
import { FiLoader } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

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
    <section className='bg-white text-center py-16 px-6 overflow-hidden'>
      {/* 🔴 Tag */}
      <div className='inline-block uppercase text-[#d4575b] text-xs font-semibold mb-1'>
        Our Capabilities
      </div>

      {/* 🏷️ Heading */}
      <h2 className='text-3xl md:text-4xl font-bold text-black mb-10'>
        We can help you with...
      </h2>

      {/* 🟨 Capability Boxes with Animation */}
      <motion.div
        layout
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className='flex flex-wrap justify-center gap-2 max-w-6xl mx-auto'
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
              className='bg-[#d4575b] bg-opacity-80 text-black font-medium text-xs px-3 py-2 rounded-lg hover:scale-105 transition-transform duration-300'
            >
              {capability}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* ⚙️ Load More / Load Less */}
      <div className='mt-8 flex items-center justify-center gap-3'>
        {loading && <FiLoader className='animate-spin text-[#d4575b]' />}
        <button
          onClick={handleToggle}
          disabled={loading}
          className='text-black text-base font-normal hover:scale-105 transition-transform duration-300'
        >
          {isExpanded ? 'Load Less' : 'Load More'}
        </button>
      </div>
    </section>
  );
};

export default OurCapabilities;

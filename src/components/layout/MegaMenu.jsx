import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { MdArrowCircleRight } from 'react-icons/md';

const categories = [
  {
    title: 'Business Solutions',
    items: [
      'Nicheflow | SAAS Solutions',
      'ERP & CRM Solutions',
      'Metaverse Solutions',
      'Fire Brigade Floor Plan',
      'AI Chat Bot for Front Sales',
    ],
  },
  {
    title: 'Developer/IT',
    items: [
      'Mobile App Development',
      'Web App Development',
      'Augmented Reality (AR)',
      'Virtual Reality (VR)',
      'Mixed Reality (MR)',
      'Game Development',
      'App Store Optimization (ASO) & Marketing',
    ],
  },
  {
    title: 'Back Office',
    items: [
      'End-to-End Production',
      'Project Management',
      'Technology Officer Services',
      'Consultation Services',
      'Client Dealing',
      'BIRD & TRD',
    ],
  },
  {
    title: 'Community Management',
    items: [
      'Engagement and Interaction',
      'Moderation and Support',
      'Growth and Retention',
      'Brand Advocacy',
      'Community Insights and Analytics',
    ],
  },
  {
    title: 'Strategic Partnership',
    items: [
      'Collaborative Innovation',
      'Market Expansion',
      'Resource Optimization',
      'Technology Integration',
      'Strategic Investment',
      'Risk Management',
    ],
  },
];

export const MegaMenu = ({ isOpen, onClose }) => {
  const ref = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose();
      }
    };
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Background overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='fixed inset-0 bg-black/30 z-10'
            onClick={onClose}
          />

          {/* Mega menu content */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className='fixed inset-0 flex items-start top-[60px] justify-center z-30'
            ref={ref}
          >
            <div className='w-full bg-white shadow-2xl border overflow-hidden'>
              {/* Flex layout instead of grid for exact width control */}
              <div className='flex flex-col md:flex-row w-full h-full'>
                {/* Left column (25%) */}
                <div
                  style={{
                    backgroundImage: "url('/src/images/partner_bg.png')",
                  }}
                  className='md:w-1/4 w-full flex flex-col justify-center items-center p-8 bg-cover bg-center bg-no-repeat relative'
                >
                  <div className='relative flex flex-col items-center text-center space-y-2'>
                    <img
                      src='src/images/partner.png'
                      alt='Partner with Codefied'
                      className='w-[300px] h-auto'
                    />
                    <Button className='w-full bg-[#d4575b]/80 hover:bg-[#d4575b] text-black rounded-md font-medium transition'>
                      Discover Now{' '}
                      <MdArrowCircleRight className='text-lg ml-2' />
                    </Button>
                  </div>
                </div>

                {/* Right column (75%) */}
                <div className='md:w-3/4 w-full bg-white p-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 overflow-y-auto'>
                  {categories.map((category, index) => (
                    <div key={index}>
                      <h4 className='font-semibold text-gray-900 w-fit text-[20px] mb-3 border-b-2 border-[#d4575b] pb-1'>
                        {category.title}
                      </h4>
                      <ul className='space-y-1'>
                        {category.items.map((item, idx) => (
                          <li
                            key={idx}
                            className='text-gray-400 text-[13px] hover:text-[#d4575b] cursor-pointer transition-colors'
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MegaMenu;

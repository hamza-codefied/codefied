import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { MdArrowCircleRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import partnerImg from '@/images/partner.png';
import partnerBg from '@/images/partner_bg.png';
import { formatText } from '@/utils/textFormatter';

const categories = [
  {
    title: 'Business Solutions',
    slug: 'business-solutions',
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
    slug: 'developer-it',
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
    slug: 'back-office',
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
    slug: 'community-management',
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
    slug: 'strategic-partnership',
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

export const MegaMenu = ({ isOpen, onClose, onMouseEnter, onMouseLeave }) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = e => {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    };
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className='fixed left-0 right-0 bottom-0 top-[80px] z-20'
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {/* Background overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='fixed left-0 right-0 bottom-0 top-[80px] bg-black/30 z-10'
            onClick={onClose}
          />

          {/* Mega menu */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className='fixed left-0 right-0 flex items-start justify-center z-30'
            style={{ top: '80px', maxHeight: 'calc(100vh - 80px)' }}
            ref={ref}
          >
            <div className='w-full max-w-full bg-white shadow-2xl border overflow-hidden max-h-[calc(100vh-80px)]'>
              <div className='flex flex-col md:flex-row w-full h-full'>
                {/* Left column */}
                <div
                  style={{
                    backgroundImage: `url(${partnerBg})`,
                  }}
                  className='md:w-1/4 w-full flex flex-col justify-center items-center p-4 md:p-8 bg-cover bg-center bg-no-repeat relative'
                >
                  <div className='relative flex flex-col items-center text-center space-y-2 w-full max-w-full px-4'>
                    <img
                      src={partnerImg}
                      alt='Partner with Codefied'
                      className='object-contain w-full max-w-[340px] h-auto'
                      style={{ maxHeight: '300px' }}
                    />
                    <Button
                      className='bg-[#d4575b]/80 hover:bg-[#d4575b] text-black rounded-md transition flex items-center justify-center gap-[5px] w-full max-w-[340px]'
                      style={{ height: '50px', fontSize: '14px', fontWeight: 500 }}
                    >
                      Discover Now
                      <MdArrowCircleRight style={{ fontSize: '14px' }} />
                    </Button>
                  </div>
                </div>

                {/* Right column */}
                <div className='md:w-3/4 w-full bg-white px-4 sm:px-6 md:px-[42px] py-8 md:py-[65px] grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 overflow-y-auto'>
                  {categories.map((category, index) => (
                    <div key={index}>
                      {/* Category Title (Main Route) */}
                      <Link
                        to={`/services/${category.slug}`}
                        onClick={onClose}
                        className='text-gray-900 w-fit mb-3 border-b-2 border-[#d4575b] pb-1 hover:text-[#d4575b] transition-colors block'
                        style={{ fontSize: '24px', fontWeight: 700 }}
                      >
                        {formatText(category.title)}
                      </Link>

                      {/* Sub Items */}
                      <ul className='space-y-[13px]'>
                        {category.items.map((item, idx) => (
                          <li key={idx}>
                            <Link
                              to={`/services/${category.slug}#${item
                                .toLowerCase()
                                .replace(/\s+/g, '-')
                                .replace(/[^\w-]/g, '')}`}
                              onClick={onClose}
                              className='text-[16px] hover:text-[#d4575b] cursor-pointer transition-all duration-300 inline-block relative group'
                              style={{ fontWeight: 400, color: '#828282' }}
                            >
                              {formatText(item)}
                              <span className='absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full'></span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MegaMenu;

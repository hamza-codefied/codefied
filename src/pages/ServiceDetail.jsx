import React, { useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { servicesData } from '@/data/servicesData';
import Section from '@/layouts/Section';
import { GoArrowUpRight } from 'react-icons/go';
import { FaArrowRightLong } from 'react-icons/fa6';
import servicebg from '@/images/service_bg.png';

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const location = useLocation();
  const service = servicesData[serviceId];

  useEffect(() => {
    // prevent unwanted scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const handleScroll = () => {
      // only scroll if URL actually has a hash
      if (location.hash) {
        const el = document.querySelector(location.hash);
        if (el) {
          const yOffset = -100; // adjust for navbar height if needed
          const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      } else {
        // make sure to stay at top only once after mount
        window.scrollTo({ top: 0 });
      }
    };

    // wait until all images and layout are fully rendered
    const onLoad = () => {
      requestAnimationFrame(() => {
        setTimeout(handleScroll, 100);
      });
    };

    // execute after page load and React paint
    if (document.readyState === 'complete') {
      onLoad();
    } else {
      window.addEventListener('load', onLoad);
    }

    return () => {
      window.removeEventListener('load', onLoad);
    };
  }, [location.hash]);

  if (!service)
    return (
      <div className='min-h-screen flex flex-col items-center justify-center text-gray-500'>
        <h2 className='text-2xl font-semibold'>Service Not Found</h2>
        <Link
          to='/'
          className='mt-4 px-4 py-2 bg-[#d4575b] text-white rounded-md'
        >
          Back to Home
        </Link>
      </div>
    );

  // Animation presets
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <div className='min-h-screen bg-gradient-to-b from-white to-gray-50 overflow-hidden'>
      {/* HERO SECTION */}
      <Section
        classNames='relative bg-cover bg-no-repeat py-24 2xl:py-60'
        style={{ backgroundImage: `url(${servicebg})` }}
      >
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-start'>
          <motion.h1
            variants={fadeUp}
            initial='hidden'
            animate='visible'
            className='text-4xl sm:text-5xl md:text-6xl font-bold mb-2 capitalize tracking-tight'
          >
            {service.title}
          </motion.h1>

          {/* Breadcrumbs */}
          <motion.div
            variants={fadeUp}
            initial='hidden'
            animate='visible'
            transition={{ delay: 0.3 }}
            className='text-xs sm:text-sm mb-2 flex flex-wrap items-center gap-1'
          >
            {service.breadcrumbs.map((crumb, index) => (
              <span key={index}>
                <span className='text-black'>{crumb}</span>
                {index < service.breadcrumbs.length - 1 && (
                  <span className='text-[#d4575b] mx-1'>&gt;&gt;</span>
                )}
              </span>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* INTRO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className='max-w-6xl mx-auto px-6 text-center mt-10 sm:mt-20'
      >
        <h2 className='text-2xl sm:text-3xl font-bold text-[#d4575b]'>
          {service.title}
        </h2>
        <h3 className='text-lg sm:text-2xl text-black font-medium mt-2'>
          {service.subtitle}
        </h3>
        <p className='max-w-4xl mx-auto text-gray-600 mt-4 text-sm sm:text-base leading-relaxed'>
          {service.description}
        </p>
      </motion.div>

      {/* SECTIONS */}
      <div className='max-w-6xl mx-auto mt-16 space-y-32 px-4 sm:px-6'>
        {service.sections.map((sec, idx) => (
          <motion.div
            key={sec.id}
            variants={fadeUp}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            custom={idx}
            className='mb-12'
          >
            <section
              id={sec.id}
              className={`flex flex-col md:flex-row ${
                idx % 2 === 0 ? '' : 'md:flex-row-reverse'
              } items-center gap-10`}
            >
              {/* LEFT TEXT AREA */}
              <div className='flex-1 text-center md:text-left'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-900 mb-3'>
                  {sec.title}
                </h3>
                <p className='text-gray-600 mb-4 text-sm sm:text-base'>
                  {sec.description}
                </p>

                {sec.badge && (
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className='flex items-center justify-center md:justify-start gap-2 w-fit mx-auto md:mx-0 bg-[#d4575b]/90 text-white px-5 py-2 rounded-md text-sm font-medium shadow-md cursor-pointer transition-all duration-300'
                  >
                    {sec.badge}{' '}
                    <GoArrowUpRight className='text-white h-5 w-5 mt-[2px]' />
                  </motion.span>
                )}
              </div>

              {/* IMAGE */}
              <motion.div
                className='flex-1'
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={sec.image}
                  alt={sec.title}
                  className='rounded-lg shadow-xl w-full object-cover hover:shadow-2xl transition-all duration-500'
                />
              </motion.div>
            </section>

            {/* FEATURE GRID */}
            <motion.div
              variants={fadeUp}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.3 }}
              className='mt-10 grid sm:grid-cols-2 gap-x-12 gap-y-8'
            >
              {sec.features.map((f, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  className='flex flex-col items-start'
                >
                  <div className='flex items-center gap-3 mb-1'>
                    <span className='text-[#d4575b] text-lg'>
                      <FaArrowRightLong />
                    </span>
                    <h4 className='font-semibold text-base sm:text-lg text-gray-900'>
                      {f.title}
                    </h4>
                  </div>
                  <p className='text-gray-600 text-sm sm:text-base leading-relaxed'>
                    {f.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

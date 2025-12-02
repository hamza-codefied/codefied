import React, { useEffect, useRef } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { servicesData } from '@/data/servicesData';
import Section from '@/layouts/Section';
import { GoArrowUpRight } from 'react-icons/go';
import { FaArrowRightLong } from 'react-icons/fa6';
import servicebg from '@/images/service_bg.png';
import HeroSection from '@/components/global/HeroBanner';
import { formatText } from '@/utils/textFormatter';

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

  // Slide animations for sections - more dramatic
  const slideFromLeft = {
    hidden: { opacity: 0, x: -300 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const slideFromRight = {
    hidden: { opacity: 0, x: 300 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <div className='min-h-screen bg-white overflow-hidden'>
      {/* HERO SECTION */}
      <HeroSection
        classNames={'h-[500px]'}
        BannerText={'Services'}
        BottomText={
          <motion.div
            variants={fadeUp}
            initial='hidden'
            animate='visible'
            transition={{ delay: 0.3 }}
            className='flex flex-wrap items-center gap-1 mb-[10px]'
            style={{ fontSize: '24px', fontWeight: 400 }}
          >
            {service.breadcrumbs.map((crumb, index) => (
              <span key={index}>
                <span className='text-black'>{formatText(crumb)}</span>
                {index < service.breadcrumbs.length - 1 && (
                  <span className='text-[#d4575b] mx-1'>
                    <span style={{ fontFamily: 'Arial, sans-serif' }}>
                      &gt;&gt;
                    </span>
                  </span>
                )}
              </span>
            ))}
          </motion.div>
        }
        MainText={
          <motion.h1
            variants={fadeUp}
            initial='hidden'
            animate='visible'
            className='capitalize tracking-tight'
            style={{ fontSize: '54px', fontWeight: 700, paddingTop: '0px' }}
          >
            {formatText(service.title)}
          </motion.h1>
        }
        bannerTextAdjust={{
          fontSize: 'clamp(40px, 20vw, 600px)', // responsive font size
          lineHeight: 1,
          transform: 'translateY(30%)', // cut half of the text
        }}
      />

      <div className='container m-auto px-8'>
        {/* INTRO SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className='max-w-6xl mx-auto px-6 text-center mt-10 sm:mt-20'
        >
          <h2
            className='bg-gradient-to-r from-[#d4575b] to-[#ff6b6b] bg-clip-text text-transparent'
            style={{ fontSize: '45px', fontWeight: 600 }}
          >
            {formatText(service.title)}
          </h2>
          <h3
            className='text-black '
            style={{ fontSize: '44px', fontWeight: 500 }}
          >
            {formatText(service.subtitle)}
          </h3>
        </motion.div>
      </div>
      {/* Description - Full Width */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        className='w-full text-center'
      >
        <p
          className='text-gray-600 leading-relaxed'
          style={{ fontSize: '24px', fontWeight: 400, marginTop: '32px', paddingLeft: '210px', paddingRight: '210px' }}
        >
          {formatText(service.description)}
        </p>
      </motion.div>

      <div className='container m-auto px-8'>

        {/* SECTIONS */}
        <div className='mt-[122px] space-y-32'>
          {service.sections.map((sec, idx) => {
            const sectionRef = useRef(null);
            const { scrollYProgress } = useScroll({
              target: sectionRef,
              offset: ["start 0.9", "end 0.1"]
            });

            // For even sections: text left, image right
            // For odd sections: text right, image left (reversed layout)
            const textX = useTransform(
              scrollYProgress,
              [0, 0.3, 0.5, 1],
              idx % 2 === 0
                ? [-400, 0, 0, -400]  // left section: in from left, stay centered, out to left
                : [400, 0, 0, 400]    // right section: in from right, stay centered, out to right
            );
            const textOpacity = useTransform(
              scrollYProgress,
              [0, 0.2, 0.5, 0.8, 1],
              [0, 1, 1, 0.5, 0]
            );

            const imageX = useTransform(
              scrollYProgress,
              [0, 0.3, 0.5, 1],
              idx % 2 === 0
                ? [400, 0, 0, 400]    // right section: in from right, stay centered, out to right
                : [-400, 0, 0, -400]  // left section: in from left, stay centered, out to left
            );
            const imageOpacity = useTransform(
              scrollYProgress,
              [0, 0.2, 0.5, 0.8, 1],
              [0, 1, 1, 0.5, 0]
            );

            return (
              <motion.div
                key={sec.id}
                ref={sectionRef}
                className='mb-[250px]'
              >
                <section
                  id={sec.id}
                  className={`flex flex-col md:flex-row ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'
                    } items-center`}
                  style={{ gap: '110px' }}
                >
                  {/* LEFT TEXT AREA */}
                  <motion.div
                    className='flex-1 text-center md:text-left'
                    style={{ x: textX, opacity: textOpacity }}
                  >
                    <h3
                      className='text-gray-900 mb-3'
                      style={{ fontSize: '34px', fontWeight: 600 }}
                    >
                      {formatText(sec.title)}
                    </h3>
                    <p
                      className='text-gray-600 mb-4'
                      style={{ fontSize: '24px', fontWeight: 400 }}
                    >
                      {formatText(sec.description)}
                    </p>

                    {sec.badge && (
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        className='flex items-center justify-center bg-[#d4575b]/90 text-white rounded-md shadow-md cursor-pointer transition-all duration-300'
                        style={{ width: '340px', height: '67px', gap: '10px', fontSize: '20px', fontWeight: 500 }}
                      >
                        {sec.badge}
                        <GoArrowUpRight className='text-white' size={20} />
                      </motion.span>
                    )}
                  </motion.div>

                  {/* IMAGE */}
                  <motion.div
                    className='flex-1'
                    style={{ x: imageX, opacity: imageOpacity, marginLeft: '-28px' }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <img
                      src={sec.image}
                      alt={sec.title}
                      className='rounded-lg shadow-xl w-full object-cover hover:shadow-2xl transition-all duration-500'
                    />
                  </motion.div>
                </section>

                {/* FEATURE GRID */}
                <div className='mt-10 grid sm:grid-cols-2 gap-x-12 gap-y-8' style={{ paddingLeft: '28px' }}>
                  {sec.features.map((f, i) => {
                    // For even sections: left column (i%2===0) uses textX, right column uses imageX
                    // For odd sections (reversed): left column (i%2===0) uses imageX, right column uses textX
                    const isLeftColumn = i % 2 === 0;
                    const isEvenSection = idx % 2 === 0;
                    const shouldUseTextX = (isEvenSection && isLeftColumn) || (!isEvenSection && !isLeftColumn);

                    return (
                      <motion.div
                        key={i}
                        className='flex flex-col items-start'
                        style={{
                          opacity: textOpacity,
                          x: shouldUseTextX ? textX : imageX
                        }}
                      >
                        <div className='flex items-start gap-3'>
                          <span className='text-[#d4575b] text-lg flex-shrink-0 mt-1'>
                            <FaArrowRightLong />
                          </span>
                          <div className='flex-1'>
                            <h4
                              className='text-gray-900'
                              style={{ fontSize: '24px', fontWeight: 500 }}
                            >
                              {formatText(f.title)}
                            </h4>
                            <p
                              className='text-gray-600 leading-relaxed'
                              style={{ fontSize: '16px', fontWeight: 400, marginTop: '6px' }}
                            >
                              {formatText(f.description)}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
        {/* Extra spacing before footer */}
        <div className='h-[500px]'></div>
      </div>
    </div>
  );
}

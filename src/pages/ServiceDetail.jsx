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
        classNames={'h-[450px]'}
        BannerText={'Services'}
        BottomText={
          <motion.div
            variants={fadeUp}
            initial='hidden'
            animate='visible'
            transition={{ delay: 0.3 }}
            className='flex flex-wrap items-center gap-1 mb-[10px]'
            style={{ fontSize: 'clamp(14px, 2.5vw, 24px)', fontWeight: 400 }}
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
            style={{
              fontSize: 'clamp(28px, 5vw, 54px)',
              fontWeight: 700,
              paddingTop: '0px',
            }}
          >
            {formatText(service.title)}
          </motion.h1>
        }
        bannerTextAdjust={{
          fontSize: 'clamp(40px, 22vw, 600px)', // responsive font size
          lineHeight: 1,
          transform: 'translateY(30%)', // cut half of the text
        }}
      />

      <div className='container m-auto xl:px-0'>
        {/* INTRO SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className='text-center mt-10 sm:mt-20'
        >
          <h2
            className='text-black font-medium'
            style={{ fontSize: 'clamp(24px, 4.5vw, 44px)', fontWeight: 500 }}
          >
            {formatText(service.title)}
          </h2>
          <h3
            className='text-black font-medium'
            style={{ fontSize: 'clamp(22px, 4.5vw, 44px)', fontWeight: 500 }}
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
        className='container m-auto xl:px-0 text-center'
      >
        <p
          className='text-black font-normal leading-normal'
          style={{
            fontSize: 'clamp(16px, 2vw, 24px)',
            fontWeight: 400,
            marginTop: 'clamp(20px, 3vw, 32px)',
            
          }}
        >
          {formatText(service.description)}
        </p>
      </motion.div>

      <div className='container m-auto xl:px-0'>
        {/* SECTIONS */}
        <div className='mt-[clamp(40px,10vw,122px)] space-y-[clamp(40px,15vw,128px)]'>
          {service.sections.map((sec, idx) => {
            const sectionRef = useRef(null);
            const { scrollYProgress } = useScroll({
              target: sectionRef,
              offset: ['start 0.85', 'end 0.15'], // Smoother, more gradual scroll range
            });

            // Reduced animation distance for smoother, less jarring movement
            const getAnimationDistance = () => {
              if (typeof window !== 'undefined') {
                const width = window.innerWidth;
                if (width < 640) return 50; // Mobile: smaller distance
                if (width < 768) return 80; // Small tablet
                if (width < 1024) return 120; // Tablet
                if (width < 1280) return 150; // Small desktop
                return 180; // Large desktop
              }
              return 180;
            };
            const animDistance = getAnimationDistance();

            // Image: Smooth fade in/out with gradual transitions
            const imageOpacity = useTransform(
              scrollYProgress,
              [0, 0.2, 0.3, 0.7, 0.8, 1],
              [0, 0.3, 1, 1, 0.3, 0] // Gradual fade in, stay visible longer, gradual fade out
            );

            // Text: Smooth slide with gradual easing
            const textX = useTransform(
              scrollYProgress,
              [0, 0.2, 0.4, 0.6, 0.8, 1],
              idx % 2 === 0
                ? [
                    -animDistance * 0.5,
                    -animDistance * 0.3,
                    0,
                    0,
                    animDistance * 0.3,
                    animDistance * 0.5,
                  ] // Smooth gradual slide
                : [
                    animDistance * 0.5,
                    animDistance * 0.3,
                    0,
                    0,
                    -animDistance * 0.3,
                    -animDistance * 0.5,
                  ] // Smooth gradual slide
            );
            const textOpacity = useTransform(
              scrollYProgress,
              [0, 0.15, 0.25, 0.75, 0.85, 1],
              [0, 0.2, 1, 1, 0.2, 0] // Gradual fade in/out
            );

            // Features: Smooth slide with slight delay for staggered effect
            const featuresX = useTransform(
              scrollYProgress,
              [0, 0.25, 0.45, 0.65, 0.85, 1],
              idx % 2 === 0
                ? [
                    -animDistance * 0.4,
                    -animDistance * 0.2,
                    0,
                    0,
                    animDistance * 0.2,
                    animDistance * 0.4,
                  ] // Slightly delayed, smoother
                : [
                    animDistance * 0.4,
                    animDistance * 0.2,
                    0,
                    0,
                    -animDistance * 0.2,
                    -animDistance * 0.4,
                  ] // Slightly delayed, smoother
            );
            const featuresOpacity = useTransform(
              scrollYProgress,
              [0, 0.2, 0.3, 0.7, 0.8, 1],
              [0, 0.3, 1, 1, 0.3, 0] // Gradual fade matching image
            );

            return (
              <motion.div
                key={sec.id}
                ref={sectionRef}
                className='mb-[clamp(60px,15vw,250px)]'
              >
                <section
                  id={sec.id}
                  className={`flex flex-col md:flex-row ${
                    idx % 2 === 0 ? '' : 'md:flex-row-reverse'
                  } items-center`}
                  style={{ gap: 'clamp(30px, 8vw, 110px)' }}
                >
                  {/* LEFT TEXT AREA */}
                  <motion.div
                    className='flex-1 text-center md:text-left w-full'
                    style={{
                      x: textX,
                      opacity: textOpacity,
                      transition:
                        'transform 0.3s ease-out, opacity 0.3s ease-out',
                    }}
                  >
                    <h3
                      className='text-black font-semibold mb-3 leading-normal'
                      style={{
                        fontSize: 'clamp(20px, 3.5vw, 34px)',
                        fontWeight: 600,
                      }}
                    >
                      {formatText(sec.title)}
                    </h3>
                    <p
                      className='text-black font-normal mb-4 leading-normal'
                      style={{
                        fontSize: 'clamp(16px, 2.5vw, 24px)',
                        fontWeight: 400,
                      }}
                    >
                      {formatText(sec.description)}
                    </p>

                    {sec.badge && (
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        className='flex items-center justify-center bg-[#d4575b]/90 text-white rounded-md shadow-md cursor-pointer transition-all duration-300 w-full sm:w-auto'
                        style={{
                          width: 'clamp(280px, 30vw, 340px)',
                          height: 'clamp(50px, 6vw, 67px)',
                          gap: '10px',
                          fontSize: 'clamp(16px, 2vw, 20px)',
                          fontWeight: 500,
                        }}
                      >
                        {sec.badge}
                        <GoArrowUpRight className='text-white' size={20} />
                      </motion.span>
                    )}
                  </motion.div>

                  {/* IMAGE - Smooth fade in/out */}
                  <motion.div
                    className='flex-1 w-full'
                    style={{
                      x: 0, // No movement
                      opacity: imageOpacity,
                      marginLeft: 'clamp(0px, -2vw, -28px)',
                      transition: 'opacity 0.4s ease-out',
                    }}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    <img
                      src={sec.image}
                      alt={sec.title}
                      className='rounded-lg shadow-xl w-full object-cover hover:shadow-2xl transition-all duration-500'
                    />
                  </motion.div>
                </section>

                {/* FEATURE GRID - Slides after image fully shows */}
                <div
                  className='mt-10 grid sm:grid-cols-2 gap-x-8 sm:gap-x-14 gap-y-6 sm:gap-y-8'
                  style={{ paddingLeft: 'clamp(0px, 2vw, 2px)' }}
                >
                  {sec.features.map((f, i) => {
                    return (
                      <motion.div
                        key={i}
                        className='flex flex-col items-start'
                        style={{
                          opacity: featuresOpacity,
                          x: featuresX,
                          transition:
                            'transform 0.3s ease-out, opacity 0.3s ease-out',
                        }}
                      >
                        <div className='flex items-start gap-3'>
                          <span className='text-[#d4575b] text-lg flex-shrink-0 mt-1'>
                            <FaArrowRightLong size={25} />
                          </span>
                          <h4
                            className='text-black font-medium'
                            style={{
                              fontSize: 'clamp(18px, 2.5vw, 24px)',
                              fontWeight: 500,
                            }}
                          >
                            {formatText(f.title)}
                          </h4>
                        </div>
                        <div className='flex-1'>
                          <p
                            className='text-black font-normal leading-relaxed'
                            style={{
                              fontSize: 'clamp(14px, 2vw, 16px)',
                              fontWeight: 400,
                              marginTop: '6px',
                            }}
                          >
                            {formatText(f.description)}
                          </p>
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
        <div className='h-[60px] sm:h-[150px]'></div>
      </div>
    </div>
  );
}

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import hero_bg from '@/images/hero.png';
import { formatText } from '@/utils/textFormatter';

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    year: '2015',
    title: 'Agency Founded',
    description:
      'At Codeified Software Development Company, we are passionate about leveraging technology to create innovative and impactful solutions. At Codeified Software Development Company, we are passionate about leveraging technology to create innovative and impactful solutions.',
  },
  {
    year: '2016',
    title: 'First Major Milestone',
    description:
      'At Codeified Software Development Company, we are passionate about leveraging technology to create innovative and impactful solutions. At Codeified Software Development Company, we are passionate about leveraging technology to create innovative and impactful solutions.',
  },
  {
    year: '2018',
    title: 'Global Expansion',
    description:
      'At Codeified Software Development Company, we are passionate about leveraging technology to create innovative and impactful solutions. At Codeified Software Development Company, we are passionate about leveraging technology to create innovative and impactful solutions.',
  },
  {
    year: '2020',
    title: 'Innovation Recognition',
    description:
      'At Codeified Software Development Company, we are passionate about leveraging technology to create innovative and impactful solutions. At Codeified Software Development Company, we are passionate about leveraging technology to create innovative and impactful solutions.',
  },
];

const Timeline = () => {
  const timelineRef = useRef(null);
  const sectionRef = useRef(null);
  const stickyContainerRef = useRef(null);
  const verticalLineRef = useRef(null);
  const headingRef = useRef(null);
  const itemRefs = useRef([]);
  const cardRefs = useRef([]);
  const dotRefs = useRef([]);
  const yearRefs = useRef([]);
  const mobileYearRefs = useRef([]);
  const lineRefs = useRef([]);

  useEffect(() => {
    if (!timelineRef.current || !sectionRef.current) return;

    const items = itemRefs.current.filter(Boolean);
    const cards = cardRefs.current.filter(Boolean);
    const dots = dotRefs.current.filter(Boolean);
    const years = yearRefs.current.filter(Boolean);
    const mobileYears = mobileYearRefs.current.filter(Boolean);
    const lines = lineRefs.current.filter(Boolean);

    // Make heading and vertical line sticky together at top
    if (
      stickyContainerRef.current &&
      sectionRef.current &&
      timelineRef.current
    ) {
      // Set vertical line to extend through the timeline
      const timelineHeight = timelineRef.current.offsetHeight;
      const headingHeight = headingRef.current
        ? headingRef.current.offsetHeight
        : 0;

      if (verticalLineRef.current) {
        // Line should extend from below heading through the timeline
        verticalLineRef.current.style.height = `${timelineHeight + headingHeight}px`;
      }

      // Pin the container that includes heading and vertical line
      // Start pinning when heading reaches top of viewport
      // This prevents blank space with just heading and line showing
      ScrollTrigger.create({
        trigger: headingRef.current || sectionRef.current,
        start: 'top top', // Start pinning when heading reaches top
        end: () => {
          // End when section bottom reaches viewport bottom
          return `bottom bottom`;
        },
        pin: stickyContainerRef.current,
        pinSpacing: true,
      });
    }

    // Animate each timeline item (dots, years, cards)
    items.forEach((item, index) => {
      const isLeft = index % 2 !== 0;
      const card = cards[index];
      const dot = dots[index];
      const year = years[index];
      const line = lines[index];

      if (!card || !dot) return;

      // Set initial position - card comes from side, dot and year from bottom
      const mobileYear = mobileYears[index];
      gsap.set([card, mobileYear].filter(Boolean), {
        x: isLeft ? -300 : 300,
        y: 150,
        opacity: 0,
        scale: 0.8,
      });

      // Dot and year start from bottom (no horizontal movement, they stay on vertical line)
      gsap.set([dot, year], {
        y: 150,
        opacity: 0,
        scale: 0.8,
        x: 0, // Stay centered on vertical line
      });

      // Set horizontal line to be hidden initially
      if (line) {
        gsap.set(line, {
          opacity: 0,
        });
      }

      // Create scroll-triggered animation timeline
      // Adjust timing so when one section is hiding, next one shows
      // End point is later to allow overlap with next section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          end: 'top 10%', // Extended end point for better overlap
          scrub: 1,
        },
      });

      // Step 1: Animate card in from side, dot and year from bottom (faster)
      tl.to([card, mobileYear].filter(Boolean), {
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: 'power2.out',
      })
        .to(
          [dot, year],
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: 'power2.out',
          },
          '-=0.4'
        ) // Start at same time as card
        // Step 2: When card reaches position, fade in horizontal line
        .to(
          line,
          {
            opacity: 1,
            duration: 0.2,
            ease: 'power2.out',
          },
          '-=0.1'
        ) // Start slightly before animations complete
        // Step 3: Hold at center (shorter hold)
        .to([card, dot, year, mobileYear, line].filter(Boolean), {
          duration: 0.1,
        })
        // Step 4: Move up and fade out when reaching top (all move together)
        // This happens earlier so next section can start showing
        .to([card, dot, year, mobileYear, line].filter(Boolean), {
          y: -100,
          opacity: 0,
          scale: 0.9,
          duration: 0.3,
          ease: 'power2.in',
        });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (
          items.includes(trigger.vars?.trigger) ||
          trigger.vars?.trigger === timelineRef.current ||
          trigger.vars?.trigger === sectionRef.current
        ) {
          trigger.kill();
        }
      });
    };
  }, []);

  const addToRefs = el => {
    if (el && !itemRefs.current.includes(el)) {
      itemRefs.current.push(el);
    }
  };

  const addCardToRefs = el => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  const addDotToRefs = el => {
    if (el && !dotRefs.current.includes(el)) {
      dotRefs.current.push(el);
    }
  };

  const addYearToRefs = el => {
    if (el && !yearRefs.current.includes(el)) {
      yearRefs.current.push(el);
    }
  };

  const addMobileYearToRefs = el => {
    if (el && !mobileYearRefs.current.includes(el)) {
      mobileYearRefs.current.push(el);
    }
  };

  const addLineToRefs = el => {
    if (el && !lineRefs.current.includes(el)) {
      lineRefs.current.push(el);
    }
  };

  return (
    <section
      ref={sectionRef}
      id='our-journey'
      className='relative bg-cover bg-center bg-no-repeat py-32 px-4 md:px-10 lg:px-20 min-h-screen overflow-hidden'
      style={{ backgroundImage: `url(${hero_bg})` }}
    >
      {/* Top fade overlay */}
      <div
        className='absolute top-0 left-0 right-0 h-16 pointer-events-none z-0'
        style={{
          background: 'linear-gradient(to bottom, white, transparent)',
        }}
      />

      <div className='container m-auto px-0'>
        {/* Sticky Container - Heading and Vertical Line */}
        <div ref={stickyContainerRef} className='relative mx-auto'>
          {/* Heading */}
          <div
            ref={headingRef}
            className='text-center z-20 bg-transparent py-4'
          >
            {/* Tag */}
            <span className='uppercase tracking-widest text-[#d4575b] text-[16px] font-normal'>
              Timeline
            </span>

            {/* Heading */}
            <h2 className='text-xl md:text-3xl lg:text-[54px] font-semibold text-black mt-2 lg:leading-[58px] tracking-[-0.81px]'>
              Our Journey Through <br /> Years
            </h2>
          </div>

          {/* Vertical Line - starts below heading */}
          <div
            ref={verticalLineRef}
            className='absolute left-1/2 transform -translate-x-1/2 w-[3px] bg-[#3f3f3f] top-full'
          />
        </div>

        {/* Timeline Container */}
        <div
          ref={timelineRef}
          className='relative mt-20 md:mt-32 max-w-6xl mx-auto pb-64 md:pb-96'
        >
          <div className='flex flex-col space-y-56 md:space-y-80'>
            {timelineData.map((item, index) => {
              const isLeft = index % 2 !== 0;
              const cardStyles = [
                { borderColor: '#5AB1E8', borderWidth: '0px' },
                { borderColor: '#FEC84B', borderWidth: '0px' },
                { borderColor: '#D4575B', borderWidth: '0px' },
                { borderColor: '#34C759', borderWidth: '0px' },
              ];
              const currentStyle = cardStyles[index] || cardStyles[0];
              return (
                <div
                  key={index}
                  ref={addToRefs}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isLeft ? 'md:justify-center' : 'md:justify-center'
                  }`}
                >
                  {/* Connector Dot - moves with section */}
                  <div
                    ref={addDotToRefs}
                    className='absolute left-1/2 transform -translate-x-1/2 bg-black w-7 h-7 rounded-full border-8 border-[#d4575b] z-10 shadow-md'
                  />

                  {/* Horizontal Dotted Line */}
                  <div
                    ref={addLineToRefs}
                    className={`hidden xl:block absolute top-3.5 w-[564px] border-t-4 border-dotted border-black ${
                      isLeft
                        ? 'right-1/2 -translate-x-[8px]'
                        : 'left-1/2 translate-x-[8px]'
                    } z-0`}
                  />

                  <div>
                    {/* Year Label - Desktop: above dotted line, Mobile: below card */}
                    {/* Desktop version - above dotted line */}
                    <span
                      ref={addYearToRefs}
                      className={`hidden xl:block absolute text-black font-semibold text-sm md:text-base ${
                        isLeft ? 'md:right-[41%]' : 'md:left-[41%]'
                      }`}
                      style={{
                        fontSize: '34px',
                        fontWeight: 700,
                        top: '4px',
                        transform: 'translateY(-60px)', // Move up by gap (26px) + year height (~34px) = ~60px to create same gap as dotted line to card
                      }}
                    >
                      {item.year}
                    </span>

                    {/* Card */}
                    <div
                      ref={addCardToRefs}
                      className={`relative mt-10 w-full md:w-[400px] lg:w-[564px] lg:h-[267px] rounded-[20px] p-[20px] ${
                        isLeft
                          ? 'xl:right-[53%] xl:text-right'
                          : 'xl:left-[53%] xl:text-left'
                      }`}
                      style={{
                        border: `${currentStyle.borderWidth} solid ${currentStyle.borderColor}`,
                        boxShadow: `0 0 20px ${currentStyle.borderColor}`,
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(14px)',
                        WebkitBackdropFilter: 'blur(14px)',
                      }}
                    >
                      <h3 className='text-[#000] tracking-[-0.132px] mb-2 text-[18px] sm:text-[20px] font-medium'>
                        {formatText(item.title)}
                      </h3>
                      <p className='text-[#3f3f3f] tracking-[-0.12px] leading-relaxed text-[14px] sm:text-[16px] lg:text-[20px] font-normal'>
                        {formatText(item.description)}
                      </p>
                    </div>

                    {/* Year Label - Mobile: below card */}
                    {/* <span
                      ref={addMobileYearToRefs}
                      className={`xl:hidden block text-center mt-4 text-[24px] lg:text-[34px] font-bold text-black ${isLeft ? '' : ''}`}
                    >
                      {item.year}
                    </span> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;

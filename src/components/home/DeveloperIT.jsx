import { GoArrowUpRight } from 'react-icons/go';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { formatText } from '@/utils/textFormatter';

gsap.registerPlugin(ScrollTrigger);

export const Developerit = () => {
  const features = [
    {
      title: 'Mobile App Development',
      desc: 'Transform your ideas into powerful mobile applications with our expert development team. We create high quality, user friendly apps for both iOS and Android platforms, ensuring a seamless experience for your users.',
    },
    {
      title: 'Web App Development',
      desc: 'Our web app development services are designed to provide robust, scalable, and secure applications that drive business growth. From simple websites to complex web based applications, we deliver solutions that meet your unique requirements.',
    },
    {
      title: 'Augmented Reality',
      desc: 'Enhance the real world with our Augmented Reality solutions. AR overlays digital content onto the physical environment, providing interactive and immersive experiences that captivate users.',
    },
    {
      title: 'Mobile App Development',
      desc: 'Transform your ideas into powerful mobile applications with our expert development team. We create high quality, user friendly apps for both iOS and Android platforms, ensuring a seamless experience for your users.',
    },
    {
      title: 'Web App Development',
      desc: 'Our web app development services are designed to provide robust, scalable, and secure applications that drive business growth. From simple websites to complex web based applications, we deliver solutions that meet your unique requirements.',
    },
    {
      title: 'Augmented Reality',
      desc: 'Enhance the real world with our Augmented Reality solutions. AR overlays digital content onto the physical environment, providing interactive and immersive experiences that captivate users.',
    },
    {
      title: 'Mobile App Development',
      desc: 'Transform your ideas into powerful mobile applications with our expert development team. We create high quality, user friendly apps for both iOS and Android platforms, ensuring a seamless experience for your users.',
    },
  ];

  const textChangingContainer = useRef(null);
  const texts = ['spectrum', 'diapason', 'extent'];

  const text = useRef(null);

  const revealRefs = useRef([]);
  revealRefs.current = [];

  const addToRefs = el => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useEffect(() => {
    // Check if screen is xl or larger (1280px+)
    const isXLScreen = () => window.innerWidth >= 1280;

    // If not xl screen, don't run animations
    if (!isXLScreen()) {
      return;
    }

    if (!text.current) return;

    const section1Element = document.getElementById('section1');
    const heroSubTextElement = document.querySelector('.heroSubText');
    const headingContainer = document.querySelector('.heading-container');

    if (!section1Element || !heroSubTextElement || !headingContainer) return;

    let masterTL = null;
    let timeoutId = null;

    // Calculate positions for center to left animation
    timeoutId = setTimeout(() => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // Get heading's default position
      const headingRect = headingContainer.getBoundingClientRect();
      const sectionRect = section1Element.getBoundingClientRect();

      // Calculate center of viewport
      const viewportCenterX = viewportWidth / 2;

      // Calculate heading's center position
      const headingCenterX = headingRect.left + headingRect.width / 2;

      // Calculate offset to center the heading horizontally
      const offsetToCenter = viewportCenterX - headingCenterX;

      // Initial Y position (from top)
      const initialY = -(viewportHeight * 0.4);

      // Set initial state - heading centered horizontally, positioned at top
      gsap.set(headingContainer, {
        x: offsetToCenter,
        y: initialY,
        scale: 1.2,
        width: 'fit-content',
      });

      // Set initial text-align to center and width to fit-content
      gsap.set(text.current, {
        textAlign: 'center',
        width: 'fit-content',
        display: 'inline-block',
      });

      // HeroSubText starts hidden
      gsap.set('.heroSubText', {
        opacity: 0,
        y: 50,
      });

      // Set right content items to hidden initially
      revealRefs.current.forEach(el => {
        if (el) {
          gsap.set(el, {
            autoAlpha: 0,
            y: 50,
            opacity: 0,
          });
        }
      });

      // Create reversible timeline with scrub - slower and smoother
      masterTL = gsap.timeline({
        scrollTrigger: {
          trigger: section1Element,
          start: 'top 90%',
          end: 'top 10%',
          scrub: 2, // Higher value = smoother animation
          markers: false,
          invalidateOnRefresh: true,
        },
      });

      // Animate: heading moves from center to left and from top to default position - SLOWLY
      const headingDuration = 3; // Increased duration for slower, smoother movement
      masterTL.to(
        headingContainer,
        {
          x: 0, // Move to default left position
          y: 0, // Move to default vertical position
          scale: 1,
          duration: headingDuration,
          ease: 'power1.inOut', // Softer easing for smoother movement
        },
        0
      );

      // Animate: text-align from center to left - SLOWLY
      masterTL.to(
        text.current,
        {
          textAlign: 'left',
          duration: headingDuration,
          ease: 'power1.inOut', // Softer easing for smoother movement
        },
        0
      );

      // Animate: heroSubText fades in and moves up
      masterTL.to(
        '.heroSubText',
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
        },
        headingDuration - 0.5 // Start near the end of heading animation
      );

      ScrollTrigger.refresh();
    }, 100);

    // Animate right content items with individual ScrollTriggers
    // Each feature appears one by one as you scroll, ONLY AFTER heading reaches its position
    // Heading animation ends at 'top 10%', so features start after that
    setTimeout(() => {
      if (!section1Element) return;

      revealRefs.current.forEach((el, index) => {
        if (!el) return;

        // Only first feature starts from center (50% of viewport)
        // Rest of the features start from their natural position (85%)
        const startPercent = index === 0 ? 50 : 85 - (index * 5); // First at 50% (center), rest at 85%, 80%, 75%, etc.

        gsap.fromTo(
          el,
          {
            autoAlpha: 0,
            opacity: 0,
            y: 50, // Start from bottom
          },
          {
            autoAlpha: 1,
            opacity: 1,
            y: 0, // Animate to top
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el, // Each feature is its own trigger
              start: `top ${startPercent}%`, // First feature at center (50%), rest at natural position
              end: `top ${startPercent - 20}%`, // Animation range
              toggleActions: 'play none none reverse',
              // Only animate after section has scrolled past heading animation area
              // Heading animation ends when section top reaches 10% of viewport
              // So features will naturally trigger after that as user scrolls
              invalidateOnRefresh: true,
            },
          }
        );
      });
    }, 200);

    // Handle window resize
    const handleResize = () => {
      if (!isXLScreen()) {
        // Kill all animations if screen becomes smaller
        if (masterTL) masterTL.kill();
        ScrollTrigger.getAll().forEach(trigger => {
          if (
            trigger.vars?.trigger === section1Element ||
            revealRefs.current.includes(trigger.vars?.trigger)
          ) {
            trigger.kill();
          }
        });
        // Reset all elements to default state
        gsap.set(headingContainer, {
          y: 0,
          x: 0,
          scale: 1,
          width: 'fit-content',
        });
        gsap.set(text.current, {
          textAlign: 'left',
          width: 'fit-content',
          display: 'inline-block',
        });
        gsap.set('.heroSubText', { opacity: 1, y: 0 });
        // Reset right content items
        revealRefs.current.forEach(el => {
          if (el) {
            gsap.set(el, {
              autoAlpha: 1,
              opacity: 1,
              y: 0,
            });
          }
        });
      } else {
        ScrollTrigger.refresh();
      }
    };

    window.addEventListener('resize', handleResize);
    ScrollTrigger.refresh();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
      if (masterTL) masterTL.kill();
      ScrollTrigger.getAll().forEach(trigger => {
        if (
          trigger.vars?.trigger === section1Element ||
          revealRefs.current.includes(trigger.vars?.trigger)
        ) {
          trigger.kill();
        }
      });
    };
  }, []);

  useEffect(() => {
    // Check if screen is xl or larger (1280px+)
    const isXLScreen = () => window.innerWidth >= 1280;

    if (!textChangingContainer.current) return;

    let currentIndex = 0;
    let animationTimeline = null;

    const createTextElements = () => {
      if (!textChangingContainer.current) return;
      textChangingContainer.current.innerHTML = '';
      const letters = texts[currentIndex].split('');

      letters.forEach((letter, i) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.display = 'inline-block';
        span.style.opacity = '0';
        span.style.transform = 'translateY(20px) rotateY(90deg)';
        textChangingContainer.current.appendChild(span);
      });
    };

    const animateText = () => {
      if (!textChangingContainer.current || !isXLScreen()) return;

      createTextElements();
      const letters = textChangingContainer.current.children;
      if (letters.length === 0) return;

      animationTimeline = gsap.to(letters, {
        duration: 0.6,
        opacity: 1,
        y: 0,
        rotationY: 0,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        onComplete: () => {
          setTimeout(() => {
            gsap.to(letters, {
              duration: 0.4,
              opacity: 0,
              y: -50,
              rotationY: 90,
              stagger: 0.05,
              ease: 'back.in(1.7)',
              onComplete: () => {
                currentIndex = (currentIndex + 1) % texts.length;
                animateText();
              },
            });
          }, 1500);
        },
      });
    };

    // Only start animation on xl screens
    if (isXLScreen()) {
      animateText();
    } else {
      // On smaller screens, just show the first text
      if (textChangingContainer.current) {
        textChangingContainer.current.textContent = texts[0];
      }
    }

    // Handle resize
    const handleResize = () => {
      if (isXLScreen() && !animationTimeline) {
        animateText();
      } else if (!isXLScreen()) {
        if (animationTimeline) {
          animationTimeline.kill();
          animationTimeline = null;
        }
        if (textChangingContainer.current) {
          textChangingContainer.current.textContent = texts[0];
        }
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationTimeline) {
        animationTimeline.kill();
      }
    };
  }, []);

  return (
    <div
      id='developer-it'
      className='container xl-custom:px-0 pb-10 md:pb-20 lg:pb-20 relative w-full'
    >
      {/* Spacer to push content down initially on xl screens */}
      <div className='h-[40vh] xl:block hidden'></div>

      <div
        id='section1'
        className={
          'flex flex-col xl:flex-row justify-between gap-2 sm:gap-4 md:gap-8 xl:gap-0 min-h-screen xl:min-h-fit'
        }
      >
        {/* Left side - Heading and heroSubText */}
        <div
          className={
            'flex flex-col w-full xl:w-[45%] gap-2 sm:gap-4 md:gap-8 xl:sticky xl:top-[25%] xl:h-fit'
          }
        >
          {/* Heading container - will animate from top to here */}
          <div className='heading-container' style={{ width: 'fit-content' }}>
            <h1
              ref={text}
              className='text-[24px] sm:text-[30px] lg:text-5xl xl:text-6xl font-semibold'
              style={{ width: 'fit-content', display: 'inline-block' }}
            >
              Developer
              <span style={{ fontFamily: 'Arial' }}>/</span>
              IT
            </h1>
          </div>

          {/* Hero Sub Text */}
          <div
            className={
              'heroSubText flex gap-y-3 text-[14px] sm:text-base lg:text-2xl flex-col'
            }
          >
            <div>
              {formatText(
                'From concept to launch, we cover the entire spectrum of digital innovation.'
              )}
            </div>
          </div>
          <a
            href='#'
            className='font-semibold text-[#d4575b] flex items-center justify-start gap-2 cursor-pointer'
          >
            <p className='text-base lg:text-2xl'>Get Free Consultation</p>
            <GoArrowUpRight className='text-black mt-[2px] lg:w-[30px] lg:h-[30px]' />
          </a>
        </div>

        {/* Right side - Features */}
        <div
          className={
            'flex flex-col p-0 gap-y-4 sm:gap-y-8 md:gap-y-12 xl:items-end w-full xl:w-[50%]'
          }
        >
          {features.map(({ title, desc }, index) => (
            <div
              ref={addToRefs}
              className='p-0 w-full'
              key={`${title}-${index}`}
            >
              <h2
                className={
                  'text-[18px] sm:text-xl md:text-2xl text-[#000] font-medium mb-2'
                }
              >
                {formatText(title)}
              </h2>
              <p
                className={
                  'mb-4 text-[14px] sm:text-sm md:text-base text-[#000] font-normal'
                }
              >
                {formatText(desc)}
              </p>
              <a
                className={
                  'text-sm font-semibold text-[#d4575b] underline underline-offset-[6px] cursor-pointer flex items-center justify-start gap-2'
                }
              >
                Learn More
                <IoIosArrowDroprightCircle className='text-black' />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Developerit;

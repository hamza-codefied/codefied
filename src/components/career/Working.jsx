import { GoArrowUpRight } from 'react-icons/go';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Working = () => {
  const features = [
    {
      title: 'Working at codefied',
      desc: 'Transform your ideas into powerful mobile applications with our expert development team. We create high quality, user friendly apps for both iOS and Android platforms, ensuring a seamless experience for your users.',
    },
    {
      title: 'Trainees',
      desc: 'Our web app development services are designed to provide robust, scalable, and secure applications that drive business growth. From simple websites to complex web based applications, we deliver solutions that meet your unique requirements.',
    },
    {
      title: 'Diversity And Inclusion',
      desc: 'Enhance the real world with our Augmented Reality solutions. AR overlays digital content onto the physical environment, providing interactive and immersive experiences that captivate users.',
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

      // Create reversible timeline with scrub
      masterTL = gsap.timeline({
        scrollTrigger: {
          trigger: section1Element,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1,
          markers: false,
          invalidateOnRefresh: true,
        },
      });

      // Animate: heading moves from center to left and from top to default position
      masterTL.to(
        headingContainer,
        {
          x: 0, // Move to default left position
          y: 0, // Move to default vertical position
          scale: 1,
          duration: 1.5,
          ease: 'power2.inOut',
        },
        0
      );

      // Animate: text-align from center to left
      masterTL.to(
        text.current,
        {
          textAlign: 'left',
          duration: 1.5,
          ease: 'power2.inOut',
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
        '-=0.8'
      );

      ScrollTrigger.refresh();
    }, 100);

    // Animate right content items
    revealRefs.current.forEach((el, index) => {
      if (!el) return;

      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
          y: 50,
          opacity: 0,
        },
        {
          duration: 0.8,
          autoAlpha: 1,
          opacity: 1,
          y: 0,
          ease: 'power2.out',
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
            invalidateOnRefresh: true,
          },
        }
      );
    });

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
    <div className='container m-auto px-8 pb-20 relative w-full'>
      {/* Spacer to push content down initially on xl screens */}
      <div className='h-[50vh] xl:block hidden'></div>

      <div
        id='section1'
        className={
          'flex flex-col xl:flex-row xl:justify-between gap-8 xl:gap-0 min-h-screen xl:min-h-0'
        }
      >
        {/* Left side - Heading and heroSubText */}
        <div className={'flex flex-col w-full xl:w-[45%] gap-8'}>
          {/* Heading container - will animate from top to here */}
          <div className='heading-container' style={{ width: 'fit-content' }}>
            <h1
              ref={text}
              className='text-4xl md:text-5xl font-semibold'
              style={{ width: 'fit-content', display: 'inline-block' }}
            >
              <span style={{ color: '#000000' }}>Working</span>{' '}
              <span style={{ color: '#d4575b' }}>At</span>{' '}
              <span
                style={{
                  background:
                    'linear-gradient(to right, #1a1a1a 0%, #d4575b 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Codefied
              </span>
            </h1>
          </div>

          {/* Hero Sub Text */}
          <div
            className={'heroSubText flex gap-y-3 text-lg sm:text-2xl flex-col'}
          >
            <div>
              From concept to launch, we cover the entire spectrum of digital
              innovation.
            </div>
          </div>
        </div>

        {/* Right side - Features */}
        <div
          className={'flex flex-col gap-y-12 xl:items-end w-full xl:w-[50%]'}
        >
          {features.map(({ title, desc }) => (
            <div ref={addToRefs} className='w-full' key={title}>
              <h2 className={'text-xl md:text-2xl mb-2'}>{title}</h2>
              <p className={'mb-4 text-sm md:text-base'}>{desc}</p>
              <a
                className={
                  'text-sm font-semibold text-[#d4575b] underline cursor-pointer flex items-center justify-start gap-2'
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

export default Working;

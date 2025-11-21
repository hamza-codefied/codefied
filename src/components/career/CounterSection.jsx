import { useEffect, useRef, useState } from 'react';
import counterBg from '@/images/news/1.png';

const CounterSection = () => {
  const [counters, setCounters] = useState({
    years: 0,
    clients: 0,
    projects: 0,
    satisfaction: 0,
  });

  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const targetValues = {
    years: 10,
    clients: 200,
    projects: 100,
    satisfaction: 98,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 3000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const animate = (key, target) => {
      let current = 0;
      const increment = target / steps;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(current),
        }));
      }, stepDuration);
    };

    // Animate all counters
    animate('years', targetValues.years);
    animate('clients', targetValues.clients);
    animate('projects', targetValues.projects);
    animate('satisfaction', targetValues.satisfaction);
  };

  const stats = [
    {
      value: (
        <>
          <span style={{ fontFamily: 'Arial, sans-serif' }}>{counters.years}</span>
          <span style={{ fontFamily: 'Arial, sans-serif' }}>+</span>
        </>
      ),
      label: 'Years Of Experience',
    },
    {
      value: (
        <>
          <span style={{ fontFamily: 'Arial, sans-serif' }}>{counters.clients}</span>
          <span style={{ fontFamily: 'Arial, sans-serif' }}>+</span>
        </>
      ),
      label: 'Happy Clients',
    },
    {
      value: (
        <>
          <span style={{ fontFamily: 'Arial, sans-serif' }}>{counters.projects}</span>
          <span style={{ fontFamily: 'Arial, sans-serif' }}>+</span>
        </>
      ),
      label: 'Projects Delivered',
    },
    {
      value: (
        <>
          <span style={{ fontFamily: 'Arial, sans-serif' }}>{counters.satisfaction}</span>
          <span style={{ fontFamily: 'Arial, sans-serif' }}>%</span>
        </>
      ),
      label: 'Client Satisfaction Rate',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className='relative w-full py-16 md:py-24 lg:py-32 xl:py-40 2xl:py-56 overflow-hidden'
      style={{
        backgroundImage: `url(${counterBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='container m-auto px-8'>
        {/* Dark Overlay */}
        <div className='absolute inset-0 bg-black/50'></div>

        {/* Content */}
        <div className='relative z-10'>
          {/* Main Heading */}
          <h2 className='text-3xl sm:text-4xl md:text-5xl text-white text-center mb-8 md:mb-12 lg:mb-16'>
            Our People, Our Success
          </h2>

          {/* Counters Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12'>
            {stats.map((stat, index) => (
              <div
                key={index}
                className='text-center flex flex-col items-center justify-center'
              >
                <div
                  className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2 md:mb-4'
                  style={{ fontFamily: 'Arial, sans-serif' }}
                >
                  {stat.value}
                </div>
                <div className='text-sm sm:text-base md:text-lg text-white/90 font-medium'>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;

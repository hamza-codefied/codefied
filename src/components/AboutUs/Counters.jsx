import React, { useRef } from 'react';
import CountUp from 'react-countup';
import { motion, useInView } from 'framer-motion';

const counters = [
  {
    id: 1,
    label: 'Years of Experience',
    value: 10,
    suffix: '+',
    color: 'text-black',
  },
  {
    id: 2,
    label: 'Happy Clients',
    value: 200,
    suffix: '+',
    color: 'text-black',
  },
  {
    id: 3,
    label: 'Projects Delivered',
    value: 100,
    suffix: '+',
    color: 'text-black',
  },
  {
    id: 4,
    label: 'Client Satisfaction Rate',
    value: 98,
    suffix: '%',
    color: 'text-black',
  },
];

const Counters = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      className='container relative bg-white pt-10 md:pt-20 lg:pt-[108px] xl:px-0 pb-0 overflow-hidden'
    >
      <div className='grid grid-cols-2 md:grid-cols-4 gap-[14px] md:gap-8 text-center relative z-10'>
        {counters.map((item, index) => {
          const counterRef = useRef(null);
          const counterInView = useInView(counterRef, {
            once: true,
            amount: 0.1,
          });

          return (
            <motion.div
              key={item.id}
              ref={counterRef}
              initial={{ opacity: 0, y: 30 }}
              animate={
                counterInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }
              }
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`bg-transparent ${
                index === 0 || index === 2
                  ? 'border-r-[2px] border-gray-300'
                  : index === 1
                    ? 'md:border-r-[2px] border-r-0 border-gray-300'
                    : ''
              }`}
            >
              <h3
                className={`font-medium ${item.color}`}
                style={{
                  // fontFamily: 'Arial, sans-serif',
                  marginBottom: '4px',
                  fontSize: 'clamp(40px, 8vw, 86px)',
                  lineHeight: '1',
                  maxHeight: '133px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {counterInView ? (
                  <CountUp
                    start={0}
                    end={item.value}
                    duration={2.5}
                    delay={index * 0.2}
                  />
                ) : (
                  <span style={{ fontFamily: 'Arial, sans-serif' }}>0</span>
                )}
                <span style={{ fontFamily: 'Arial, sans-serif' }}>
                  {item.suffix}
                </span>
              </h3>
              <p
                className='text-[#000] font-medium'
                style={{ fontSize: 'clamp(12px, 2vw, 16px)' }}
              >
                {item.label}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Counters;

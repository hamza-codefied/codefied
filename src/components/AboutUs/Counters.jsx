'use client';
import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

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
  return (
    <section className='relative bg-white py-16 px-4 sm:px-8 text-white overflow-hidden'>
      <div className='max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10'>
        {counters.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`bg-transparent p-6 ${
              index !== counters.length - 1
                ? 'border-r-[2px] border-gray-300'
                : ''
            }`}
          >
            <h3 className={`text-4xl font-bold mb-2 ${item.color}`}>
              <CountUp
                start={0}
                end={item.value}
                duration={2.5}
                enableScrollSpy
              />
              {item.suffix}
            </h3>
            <p className='text-gray-700 text-xs'>{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Counters;

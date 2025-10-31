'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { link } from 'framer-motion/client';
import { GoArrowUpRight } from 'react-icons/go';

const categories = [
  { id: 'saas', label: 'SaaS' },
  { id: 'webdev', label: 'Web Dev' },
  { id: 'appdev', label: 'App Dev' },
  { id: 'arvr', label: 'AR / VR' },
  { id: 'uiux', label: 'UI / UX' },
  { id: 'gamedev', label: 'Game Dev' },
];

// Mock data for each category
const projectData = {
  saas: [
    {
      id: 1,
      image: 'src/images/portfolio1.png',
      title: 'Building Scalable SaaS Products',
      link: 'www.grocerycomparison.com',
    },
    {
      id: 2,
      image: 'src/images/blog2.png',
      title: 'Top SaaS Growth Strategies for Startups',
      link: 'www.grocerycomparison.com',
    },
    {
      id: 3,
      image: 'src/images/blog3.png',
      title: 'How to Price Your SaaS Product Smartly',
      link: 'www.grocerycomparison.com',
    },
    {
      id: 4,
      image: 'src/images/blog1.png',
      title: 'Building Scalable SaaS Products',
      link: 'www.grocerycomparison.com',
    },
    {
      id: 5,
      image: 'src/images/blog2.png',
      title: 'Top SaaS Growth Strategies for Startups',
      link: 'www.grocerycomparison.com',
    },
    {
      id: 6,
      image: 'src/images/blog3.png',
      title: 'How to Price Your SaaS Product Smartly',
      link: 'www.grocerycomparison.com',
    },
    {
      id: 7,
      image: 'src/images/blog1.png',
      title: 'Building Scalable SaaS Products',
      link: 'www.grocerycomparison.com',
    },
    {
      id: 8,
      image: 'src/images/blog2.png',
      title: 'Top SaaS Growth Strategies for Startups',
      link: 'www.grocerycomparison.com',
    },
  ],
  webdev: [
    {
      id: 1,
      image: 'src/images/blog4.png',
      title: 'Modern Web Development Trends 2025',
      link: 'www.grocerycomparison.com',
    },
    {
      id: 2,
      image: 'src/images/blog5.png',
      title: 'How to Optimize Next.js for Performance',
      link: 'www.grocerycomparison.com',
    },
    {
      id: 3,
      image: 'src/images/blog6.png',
      title: 'Top 10 React UI Libraries in 2025',
      link: 'www.grocerycomparison.com',
    },
    {
      id: 4,
      image: 'src/images/blog4.png',
      title: 'Modern Web Development Trends 2025',
      link: 'www.grocerycomparison.com',
    },
    {
      id: 5,
      image: 'src/images/blog5.png',
      title: 'How to Optimize Next.js for Performance',
      link: 'www.grocerycomparison.com',
    },
    {
      id: 6,
      image: 'src/images/blog6.png',
      title: 'Top 10 React UI Libraries in 2025',
      link: 'www.grocerycomparison.com',
    },
    {
      id: 7,
      image: 'src/images/blog4.png',
      title: 'Modern Web Development Trends 2025',
      link: 'www.grocerycomparison.com',
    },
    {
      id: 8,
      image: 'src/images/blog5.png',
      title: 'How to Optimize Next.js for Performance',
      link: 'www.grocerycomparison.com',
    },
  ],
  appdev: [
    {
      id: 1,
      image: 'src/images/blog7.png',
      title: 'Mastering Cross-Platform App Dev',
      link: 'www.grocerycomparison.com',
    },
    {
      id: 2,
      image: 'src/images/blog7.png',
      title: 'Mobile UI Best Practices',
      link: 'www.grocerycomparison.com',
    },
    {
      id: 3,
      image: 'src/images/blog7.png',
      title: 'Integrating AI in Mobile Apps',
      link: 'www.grocerycomparison.com',
    },
    {
      id: 4,
      image: 'src/images/blog7.png',
      title: 'Mastering Cross-Platform App Dev',
      link: 'www.grocerycomparison.com',
    },
    {
      id: 5,
      image: 'src/images/blog7.png',
      title: 'Mobile UI Best Practices',
      link: 'www.grocerycomparison.com',
    },
    {
      id: 6,
      image: 'src/images/blog7.png',
      title: 'Integrating AI in Mobile Apps',
      link: 'www.grocerycomparison.com',
    },
    {
      id: 7,
      image: 'src/images/blog7.png',
      title: 'Mastering Cross-Platform App Dev',
      link: 'www.grocerycomparison.com',
    },
    {
      id: 8,
      image: 'src/images/blog7.png',
      title: 'Mobile UI Best Practices',
      link: 'www.grocerycomparison.com',
    },
  ],
  arvr: [
    {
      id: 1,
      image: 'src/images/blog8.png',
      title: 'AR/VR in Education — The Future is Here',
      link: 'www.grocerycomparison.com',
    },
    {
      id: 2,
      image: 'src/images/blog8.png',
      title: 'Top 5 AR Frameworks for Developers',
      link: 'www.grocerycomparison.com',
    },
    {
      id: 3,
      image: 'src/images/blog8.png',
      title: 'VR Gaming Evolution in 2025',
      link: 'www.grocerycomparison.com',
    },
    {
      id: 4,
      image: 'src/images/blog8.png',
      title: 'AR/VR in Education — The Future is Here',
      link: 'www.grocerycomparison.com',
    },
    {
      id: 5,
      image: 'src/images/blog8.png',
      title: 'Top 5 AR Frameworks for Developers',
      link: 'www.grocerycomparison.com',
    },
    {
      id: 6,
      image: 'src/images/blog8.png',
      title: 'VR Gaming Evolution in 2025',
      link: 'www.grocerycomparison.com',
    },
    {
      id: 7,
      image: 'src/images/blog8.png',
      title: 'AR/VR in Education — The Future is Here',
      link: 'www.grocerycomparison.com',
    },
    {
      id: 8,
      image: 'src/images/blog8.png',
      title: 'Top 5 AR Frameworks for Developers',
      link: 'www.grocerycomparison.com',
    },
  ],
  uiux: [
    {
      id: 1,
      image: 'src/images/blog9.png',
      title: 'UI/UX Trends Dominating 2025',
      link: 'www.grocerycomparison.com',
    },
    {
      id: 2,
      image: 'src/images/blog9.png',
      title: 'Creating Emotionally Engaging Interfaces',
      link: 'www.grocerycomparison.com',
    },
    {
      id: 3,
      image: 'src/images/blog9.png',
      title: 'Color Psychology in UI Design',
      link: 'www.grocerycomparison.com',
    },
    {
      id: 4,
      image: 'src/images/blog9.png',
      title: 'UI/UX Trends Dominating 2025',
      link: 'www.grocerycomparison.com',
    },
    {
      id: 5,
      image: 'src/images/blog9.png',
      title: 'Creating Emotionally Engaging Interfaces',
      link: 'www.grocerycomparison.com',
    },
    {
      id: 6,
      image: 'src/images/blog9.png',
      title: 'Color Psychology in UI Design',
      link: 'www.grocerycomparison.com',
    },
    {
      id: 7,
      image: 'src/images/blog9.png',
      title: 'UI/UX Trends Dominating 2025',
      link: 'www.grocerycomparison.com',
    },
    {
      id: 8,
      image: 'src/images/blog9.png',
      title: 'Creating Emotionally Engaging Interfaces',
      link: 'www.grocerycomparison.com',
    },
  ],
  gamedev: [
    {
      id: 1,
      image: 'src/images/blog2.png',
      title: 'Unreal vs Unity — 2025 Comparison',
      link: 'www.grocerycomparison.com',
    },
    {
      id: 2,
      image: 'src/images/blog2.png',
      title: 'Game Monetization Models That Work',
      link: 'www.grocerycomparison.com',
    },
    {
      id: 3,
      image: 'src/images/blog2.png',
      title: 'AI in Game Design — Smarter Worlds',
      link: 'www.grocerycomparison.com',
    },
    {
      id: 4,
      image: 'src/images/blog2.png',
      title: 'Unreal vs Unity — 2025 Comparison',
      link: 'www.grocerycomparison.com',
    },
    {
      id: 5,
      image: 'src/images/blog2.png',
      title: 'Game Monetization Models That Work',
      link: 'www.grocerycomparison.com',
    },
    {
      id: 6,
      image: 'src/images/blog2.png',
      title: 'AI in Game Design — Smarter Worlds',
      link: 'www.grocerycomparison.com',
    },
    {
      id: 7,
      image: 'src/images/blog2.png',
      title: 'Unreal vs Unity — 2025 Comparison',
      link: 'www.grocerycomparison.com',
    },
    {
      id: 8,
      image: 'src/images/blog2.png',
      title: 'Game Monetization Models That Work',
      link: 'www.grocerycomparison.com',
    },
  ],
};

export default function AllProjectsSection() {
  const [activeTab, setActiveTab] = useState('saas');

  return (
    <section className='text-white py-5 px-4 sm:px-6 lg:px-16'>
      <div className='text-center mb-12'>
        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className='flex flex-wrap justify-center gap-3 w-fit px-5 py-2 rounded-full border-2'
        >
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                activeTab === cat.id
                  ? 'bg-black text-white shadow-lg scale-105'
                  : 'bg-white hover:bg-gray-100 text-black'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Cards */}
      <AnimatePresence mode='wait'>
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6 }}
          className='grid sm:grid-cols-2 2xl:grid-cols-3 gap-20'
        >
          {projectData[activeTab].map(blog => (
            <motion.div
              key={blog.id}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className='rounded-2xl overflow-hidden hover:shadow-purple-500/20 transition-all'
            >
              <div className='h-96 w-full overflow-hidden'>
                <img
                  src={blog.image}
                  alt={blog.title}
                  className='h-full w-full object-cover'
                />
              </div>
              <div className='flex items-center justify-between'>
                <div className='py-5 text-black space-y-1'>
                  <h3 className='text-md font-semibold'>{blog.title}</h3>
                  <p className='text-sm bg-black w-fit px-3 py-1 rounded-md text-gray-400'>
                    {blog.link}
                  </p>
                </div>
                <div className='bg-black rounded-full p-2'>
                  <GoArrowUpRight className='text-[#d4575b] text-5xl mt-[2px]' />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

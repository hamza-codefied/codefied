'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  { id: 'saas', label: 'SaaS' },
  { id: 'webdev', label: 'Web Dev' },
  { id: 'appdev', label: 'App Dev' },
  { id: 'arvr', label: 'AR / VR' },
  { id: 'uiux', label: 'UI / UX' },
  { id: 'gamedev', label: 'Game Dev' },
];

// Mock data for each category
const blogData = {
  saas: [
    {
      id: 1,
      image: 'src/images/blog1.png',
      title: 'Building Scalable SaaS Products',
      desc: 'Learn the core principles of scaling your SaaS efficiently.',
      author: 'Alex Morgan',
      date: 'Oct 10, 2025',
    },
    {
      id: 2,
      image: 'src/images/blog2.png',
      title: 'Top SaaS Growth Strategies for Startups',
      desc: 'Discover proven methods to grow your SaaS startup in 2025.',
      author: 'Emily Carter',
      date: 'Oct 14, 2025',
    },
    {
      id: 3,
      image: 'src/images/blog3.png',
      title: 'How to Price Your SaaS Product Smartly',
      desc: 'A detailed guide to SaaS pricing strategies that convert.',
      author: 'James Kim',
      date: 'Oct 21, 2025',
    },
    {
      id: 4,
      image: 'src/images/blog1.png',
      title: 'Building Scalable SaaS Products',
      desc: 'Learn the core principles of scaling your SaaS efficiently.',
      author: 'Alex Morgan',
      date: 'Oct 10, 2025',
    },
    {
      id: 5,
      image: 'src/images/blog2.png',
      title: 'Top SaaS Growth Strategies for Startups',
      desc: 'Discover proven methods to grow your SaaS startup in 2025.',
      author: 'Emily Carter',
      date: 'Oct 14, 2025',
    },
    {
      id: 6,
      image: 'src/images/blog3.png',
      title: 'How to Price Your SaaS Product Smartly',
      desc: 'A detailed guide to SaaS pricing strategies that convert.',
      author: 'James Kim',
      date: 'Oct 21, 2025',
    },
    {
      id: 7,
      image: 'src/images/blog1.png',
      title: 'Building Scalable SaaS Products',
      desc: 'Learn the core principles of scaling your SaaS efficiently.',
      author: 'Alex Morgan',
      date: 'Oct 10, 2025',
    },
    {
      id: 8,
      image: 'src/images/blog2.png',
      title: 'Top SaaS Growth Strategies for Startups',
      desc: 'Discover proven methods to grow your SaaS startup in 2025.',
      author: 'Emily Carter',
      date: 'Oct 14, 2025',
    },
    {
      id: 9,
      image: 'src/images/blog3.png',
      title: 'How to Price Your SaaS Product Smartly',
      desc: 'A detailed guide to SaaS pricing strategies that convert.',
      author: 'James Kim',
      date: 'Oct 21, 2025',
    },
  ],
  webdev: [
    {
      id: 1,
      image: 'src/images/blog4.png',
      title: 'Modern Web Development Trends 2025',
      desc: 'Explore the latest tools and frameworks in web dev.',
      author: 'Sarah Lee',
      date: 'Oct 18, 2025',
    },
    {
      id: 2,
      image: 'src/images/blog5.png',
      title: 'How to Optimize Next.js for Performance',
      desc: 'Boost speed and SEO for your Next.js projects.',
      author: 'Michael Adams',
      date: 'Oct 22, 2025',
    },
    {
      id: 3,
      image: 'src/images/blog6.png',
      title: 'Top 10 React UI Libraries in 2025',
      desc: 'Build faster with these UI component libraries.',
      author: 'Rachel Green',
      date: 'Oct 25, 2025',
    },
    {
      id: 4,
      image: 'src/images/blog4.png',
      title: 'Modern Web Development Trends 2025',
      desc: 'Explore the latest tools and frameworks in web dev.',
      author: 'Sarah Lee',
      date: 'Oct 18, 2025',
    },
    {
      id: 5,
      image: 'src/images/blog5.png',
      title: 'How to Optimize Next.js for Performance',
      desc: 'Boost speed and SEO for your Next.js projects.',
      author: 'Michael Adams',
      date: 'Oct 22, 2025',
    },
    {
      id: 6,
      image: 'src/images/blog6.png',
      title: 'Top 10 React UI Libraries in 2025',
      desc: 'Build faster with these UI component libraries.',
      author: 'Rachel Green',
      date: 'Oct 25, 2025',
    },
    {
      id: 7,
      image: 'src/images/blog4.png',
      title: 'Modern Web Development Trends 2025',
      desc: 'Explore the latest tools and frameworks in web dev.',
      author: 'Sarah Lee',
      date: 'Oct 18, 2025',
    },
    {
      id: 8,
      image: 'src/images/blog5.png',
      title: 'How to Optimize Next.js for Performance',
      desc: 'Boost speed and SEO for your Next.js projects.',
      author: 'Michael Adams',
      date: 'Oct 22, 2025',
    },
    {
      id: 9,
      image: 'src/images/blog6.png',
      title: 'Top 10 React UI Libraries in 2025',
      desc: 'Build faster with these UI component libraries.',
      author: 'Rachel Green',
      date: 'Oct 25, 2025',
    },
  ],
  appdev: [
    {
      id: 1,
      image: 'src/images/blog7.png',
      title: 'Mastering Cross-Platform App Dev',
      desc: 'Flutter vs React Native — which to choose in 2025?',
      author: 'David Chen',
      date: 'Oct 12, 2025',
    },
    {
      id: 2,
      image: 'src/images/blog7.png',
      title: 'Mobile UI Best Practices',
      desc: 'Designing for both Android and iOS without compromise.',
      author: 'Lara Johnson',
      date: 'Oct 23, 2025',
    },
    {
      id: 3,
      image: 'src/images/blog7.png',
      title: 'Integrating AI in Mobile Apps',
      desc: 'Enhance user experience through smart AI features.',
      author: 'Henry Park',
      date: 'Oct 27, 2025',
    },
    {
      id: 4,
      image: 'src/images/blog7.png',
      title: 'Mastering Cross-Platform App Dev',
      desc: 'Flutter vs React Native — which to choose in 2025?',
      author: 'David Chen',
      date: 'Oct 12, 2025',
    },
    {
      id: 5,
      image: 'src/images/blog7.png',
      title: 'Mobile UI Best Practices',
      desc: 'Designing for both Android and iOS without compromise.',
      author: 'Lara Johnson',
      date: 'Oct 23, 2025',
    },
    {
      id: 6,
      image: 'src/images/blog7.png',
      title: 'Integrating AI in Mobile Apps',
      desc: 'Enhance user experience through smart AI features.',
      author: 'Henry Park',
      date: 'Oct 27, 2025',
    },
    {
      id: 7,
      image: 'src/images/blog7.png',
      title: 'Mastering Cross-Platform App Dev',
      desc: 'Flutter vs React Native — which to choose in 2025?',
      author: 'David Chen',
      date: 'Oct 12, 2025',
    },
    {
      id: 8,
      image: 'src/images/blog7.png',
      title: 'Mobile UI Best Practices',
      desc: 'Designing for both Android and iOS without compromise.',
      author: 'Lara Johnson',
      date: 'Oct 23, 2025',
    },
    {
      id: 9,
      image: 'src/images/blog7.png',
      title: 'Integrating AI in Mobile Apps',
      desc: 'Enhance user experience through smart AI features.',
      author: 'Henry Park',
      date: 'Oct 27, 2025',
    },
  ],
  arvr: [
    {
      id: 1,
      image: 'src/images/blog8.png',
      title: 'AR/VR in Education — The Future is Here',
      desc: 'How immersive tech is revolutionizing classrooms.',
      author: 'Sophia Patel',
      date: 'Oct 11, 2025',
    },
    {
      id: 2,
      image: 'src/images/blog8.png',
      title: 'Top 5 AR Frameworks for Developers',
      desc: 'Start building your next AR experience today.',
      author: 'Chris Brown',
      date: 'Oct 16, 2025',
    },
    {
      id: 3,
      image: 'src/images/blog8.png',
      title: 'VR Gaming Evolution in 2025',
      desc: 'What’s next in immersive gaming worlds.',
      author: 'Olivia Zhang',
      date: 'Oct 19, 2025',
    },
    {
      id: 4,
      image: 'src/images/blog8.png',
      title: 'AR/VR in Education — The Future is Here',
      desc: 'How immersive tech is revolutionizing classrooms.',
      author: 'Sophia Patel',
      date: 'Oct 11, 2025',
    },
    {
      id: 5,
      image: 'src/images/blog8.png',
      title: 'Top 5 AR Frameworks for Developers',
      desc: 'Start building your next AR experience today.',
      author: 'Chris Brown',
      date: 'Oct 16, 2025',
    },
    {
      id: 6,
      image: 'src/images/blog8.png',
      title: 'VR Gaming Evolution in 2025',
      desc: 'What’s next in immersive gaming worlds.',
      author: 'Olivia Zhang',
      date: 'Oct 19, 2025',
    },
    {
      id: 7,
      image: 'src/images/blog8.png',
      title: 'AR/VR in Education — The Future is Here',
      desc: 'How immersive tech is revolutionizing classrooms.',
      author: 'Sophia Patel',
      date: 'Oct 11, 2025',
    },
    {
      id: 8,
      image: 'src/images/blog8.png',
      title: 'Top 5 AR Frameworks for Developers',
      desc: 'Start building your next AR experience today.',
      author: 'Chris Brown',
      date: 'Oct 16, 2025',
    },
    {
      id: 9,
      image: 'src/images/blog8.png',
      title: 'VR Gaming Evolution in 2025',
      desc: 'What’s next in immersive gaming worlds.',
      author: 'Olivia Zhang',
      date: 'Oct 19, 2025',
    },
  ],
  uiux: [
    {
      id: 1,
      image: 'src/images/blog9.png',
      title: 'UI/UX Trends Dominating 2025',
      desc: 'From glassmorphism to neobrutalism — what’s hot?',
      author: 'Hannah Lee',
      date: 'Oct 13, 2025',
    },
    {
      id: 2,
      image: 'src/images/blog9.png',
      title: 'Creating Emotionally Engaging Interfaces',
      desc: 'Design with empathy for a better experience.',
      author: 'Ethan Moore',
      date: 'Oct 17, 2025',
    },
    {
      id: 3,
      image: 'src/images/blog9.png',
      title: 'Color Psychology in UI Design',
      desc: 'Leverage colors to drive user actions.',
      author: 'Grace Kim',
      date: 'Oct 24, 2025',
    },
    {
      id: 4,
      image: 'src/images/blog9.png',
      title: 'UI/UX Trends Dominating 2025',
      desc: 'From glassmorphism to neobrutalism — what’s hot?',
      author: 'Hannah Lee',
      date: 'Oct 13, 2025',
    },
    {
      id: 5,
      image: 'src/images/blog9.png',
      title: 'Creating Emotionally Engaging Interfaces',
      desc: 'Design with empathy for a better experience.',
      author: 'Ethan Moore',
      date: 'Oct 17, 2025',
    },
    {
      id: 6,
      image: 'src/images/blog9.png',
      title: 'Color Psychology in UI Design',
      desc: 'Leverage colors to drive user actions.',
      author: 'Grace Kim',
      date: 'Oct 24, 2025',
    },
    {
      id: 7,
      image: 'src/images/blog9.png',
      title: 'UI/UX Trends Dominating 2025',
      desc: 'From glassmorphism to neobrutalism — what’s hot?',
      author: 'Hannah Lee',
      date: 'Oct 13, 2025',
    },
    {
      id: 8,
      image: 'src/images/blog9.png',
      title: 'Creating Emotionally Engaging Interfaces',
      desc: 'Design with empathy for a better experience.',
      author: 'Ethan Moore',
      date: 'Oct 17, 2025',
    },
    {
      id: 9,
      image: 'src/images/blog9.png',
      title: 'Color Psychology in UI Design',
      desc: 'Leverage colors to drive user actions.',
      author: 'Grace Kim',
      date: 'Oct 24, 2025',
    },
  ],
  gamedev: [
    {
      id: 1,
      image: 'src/images/blog2.png',
      title: 'Unreal vs Unity — 2025 Comparison',
      desc: 'Choosing the right engine for your game studio.',
      author: 'Nick Carter',
      date: 'Oct 20, 2025',
    },
    {
      id: 2,
      image: 'src/images/blog2.png',
      title: 'Game Monetization Models That Work',
      desc: 'Best ways to make your game profitable in 2025.',
      author: 'Bella Tran',
      date: 'Oct 26, 2025',
    },
    {
      id: 3,
      image: 'src/images/blog2.png',
      title: 'AI in Game Design — Smarter Worlds',
      desc: 'Creating adaptive, intelligent gameplay experiences.',
      author: 'Tom Richards',
      date: 'Oct 28, 2025',
    },
    {
      id: 4,
      image: 'src/images/blog2.png',
      title: 'Unreal vs Unity — 2025 Comparison',
      desc: 'Choosing the right engine for your game studio.',
      author: 'Nick Carter',
      date: 'Oct 20, 2025',
    },
    {
      id: 5,
      image: 'src/images/blog2.png',
      title: 'Game Monetization Models That Work',
      desc: 'Best ways to make your game profitable in 2025.',
      author: 'Bella Tran',
      date: 'Oct 26, 2025',
    },
    {
      id: 6,
      image: 'src/images/blog2.png',
      title: 'AI in Game Design — Smarter Worlds',
      desc: 'Creating adaptive, intelligent gameplay experiences.',
      author: 'Tom Richards',
      date: 'Oct 28, 2025',
    },
    {
      id: 7,
      image: 'src/images/blog2.png',
      title: 'Unreal vs Unity — 2025 Comparison',
      desc: 'Choosing the right engine for your game studio.',
      author: 'Nick Carter',
      date: 'Oct 20, 2025',
    },
    {
      id: 8,
      image: 'src/images/blog2.png',
      title: 'Game Monetization Models That Work',
      desc: 'Best ways to make your game profitable in 2025.',
      author: 'Bella Tran',
      date: 'Oct 26, 2025',
    },
    {
      id: 9,
      image: 'src/images/blog2.png',
      title: 'AI in Game Design — Smarter Worlds',
      desc: 'Creating adaptive, intelligent gameplay experiences.',
      author: 'Tom Richards',
      date: 'Oct 28, 2025',
    },
  ],
};

export default function AllBlogsSection() {
  const [activeTab, setActiveTab] = useState('saas');

  return (
    <section className='text-white py-20 px-4 sm:px-6 lg:px-16'>
      <div className='text-center mb-12'>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-4xl font-bold mb-6 text-black'
        >
          All Blogs
        </motion.h2>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className='flex flex-wrap justify-center gap-3 w-fit mx-auto px-5 py-2 rounded-full border-2'
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
          className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'
        >
          {blogData[activeTab].map(blog => (
            <motion.div
              key={blog.id}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className='rounded-2xl overflow-hidden hover:shadow-purple-500/20 transition-all'
            >
              <div className='h-56 w-full overflow-hidden'>
                <img
                  src={blog.image}
                  alt={blog.title}
                  className='h-full w-full object-cover hover:scale-110 transition-transform duration-700'
                />
              </div>
              <div className='py-5 text-black space-y-3'>
                <h3 className='text-md font-semibold'>{blog.title}</h3>
                <p className='text-sm text-gray-400 line-clamp-1'>
                  {blog.desc}
                </p>
                <p className='text-sm text-gray-400'>
                  {blog.author} | {blog.date}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

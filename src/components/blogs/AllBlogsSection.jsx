'use client';
import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { getAllBlogs } from '@/data/blogData';
import { formatText } from '@/utils/textFormatter';

const categories = [
  { id: 'saas', label: 'SaaS' },
  { id: 'webdev', label: 'Web Dev' },
  { id: 'appdev', label: 'App Dev' },
  { id: 'arvr', label: 'AR／VR' },
  { id: 'uiux', label: 'UI／UX' },
  { id: 'gamedev', label: 'Game Dev' },
];

export default function AllBlogsSection() {
  const [activeTab, setActiveTab] = useState('saas');
  const navigate = useNavigate();

  // Get blogs by category
  const blogData = useMemo(() => {
    const allBlogs = getAllBlogs();
    const categorized = {
      saas: allBlogs.filter(blog => blog.category === 'saas'),
      webdev: allBlogs.filter(blog => blog.category === 'webdev'),
      appdev: allBlogs.filter(blog => blog.category === 'appdev'),
      arvr: allBlogs.filter(blog => blog.category === 'arvr'),
      uiux: allBlogs.filter(blog => blog.category === 'uiux'),
      gamedev: allBlogs.filter(blog => blog.category === 'gamedev'),
    };
    return categorized;
  }, []);

  return (
    <div className='container xl-custom:px-0 m-auto'>
      <section className='text-white mt-[136px]'>
        <div className='text-center' style={{ marginBottom: '64px' }}>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='font-bold text-black mb-0'
            style={{
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: 700,
              marginBottom: '30px',
            }}
          >
            All Blogs
          </motion.h2>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className='flex flex-col md:flex-row justify-between mx-auto md:rounded-[48px] md:border-2 w-fit xl:h-[59px] px-[6px] py-[4px] md:px-[8px] md:py-[6px] gap-[5px] md:gap-[10px]'
          >
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center justify-center rounded-[40px] transition-all duration-300 text-[16px] lg:text-[18px] leading-normal font-medium px-[16px] py-[8px] md:px-[22px] md:py-[12px] ${
                  activeTab === cat.id
                    ? 'bg-black text-white shadow-lg scale-105'
                    : 'bg-white text-black hover:bg-gray-100 hover:scale-105'
                }`}
              >
                {formatText(cat.label)}
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
            className='grid sm:grid-cols-2 lg:grid-cols-3 gap-[32px]'
          >
            {blogData[activeTab]?.map(blog => (
              <motion.div
                key={blog.id}
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 200 }}
                onClick={() => navigate(`/blogs/${blog.slug}`)}
                className='hover:shadow-purple-500/20 transition-all cursor-pointer'
              >
                <div className='h-[256px] rounded-[16px]'>
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className='h-full w-full object-cover hover:scale-110 transition-transform duration-700 rounded-[16px]'
                  />
                </div>
                <div className='py-5 text-black space-y-3'>
                  <h4
                    className='font-bold'
                    style={{
                      fontSize: 'clamp(18px, 2.5vw, 24px)',
                      fontWeight: 700,
                      lineHeight: '33.6px',
                    }}
                  >
                    {formatText(blog.title)}
                  </h4>
                  <p
                    className='text-[#000] line-clamp-1'
                    style={{
                      fontSize: 'clamp(14px, 1.8vw, 16px)',
                      fontWeight: 400,
                    }}
                  >
                    {formatText(blog.description)}
                  </p>
                  <p
                    className='text-[#000]'
                    style={{
                      fontSize: 'clamp(14px, 1.8vw, 16px)',
                      fontWeight: 400,
                    }}
                  >
                    {blog.author} <span style={{ fontFamily: 'Arial' }}>|</span>{' '}
                    {blog.date}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  );
}

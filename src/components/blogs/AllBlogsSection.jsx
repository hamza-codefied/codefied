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
  { id: 'arvr', label: 'AR ／ VR' },
  { id: 'uiux', label: 'UI ／ UX' },
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
    <div className='container m-auto px-8'>
      <section className='text-white py-20'>
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
            className='flex flex-col md:flex-row flex-wrap justify-center gap-3 w-fit mx-auto px-5 py-2 rounded-2xl md:rounded-full border-2'
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
            className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'
          >
            {blogData[activeTab]?.map(blog => (
              <motion.div
                key={blog.id}
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 200 }}
                onClick={() => navigate(`/blogs/${blog.slug}`)}
                className='rounded-2xl overflow-hidden hover:shadow-purple-500/20 transition-all cursor-pointer'
              >
                <div className='h-56 w-full overflow-hidden'>
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className='h-full w-full object-cover hover:scale-110 transition-transform duration-700'
                  />
                </div>
                <div className='py-5 text-black space-y-3'>
                  <h3 className='text-md font-semibold'>
                    {formatText(blog.title)}
                  </h3>
                  <p className='text-sm text-gray-400 line-clamp-1'>
                    {formatText(blog.description)}
                  </p>
                  <p className='text-sm text-gray-400'>
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

import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GoArrowUpRight } from 'react-icons/go';
import products, { getProductBySlug } from '@/data/productData';

export default function ProductDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = getProductBySlug(slug);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!product) {
    return (
      <div className='min-h-screen flex items-center justify-center p-6'>
        <div className='max-w-2xl text-center'>
          <h2 className='text-2xl font-bold mb-4'>Product not found</h2>
          <p className='text-gray-600 mb-6'>
            We couldn&apos;t find the product you&apos;re looking for.
          </p>
          <button
            onClick={() => navigate(-1)}
            className='inline-flex items-center gap-2 px-4 py-2 bg-[#d4575b] text-white rounded-md shadow'
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className='min-h-screen bg-white'
    >
      {/* ✅ Hero Section */}
      <section className='relative w-full h-[80vh] flex items-center justify-start overflow-hidden'>
        <img
          src={product.thumnailImage}
          alt={product.title}
          className='absolute inset-0 w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent' />
        <div className='relative z-10 max-w-2xl pl-10 text-left text-white'>
          <h1 className='text-3xl sm:text-5xl font-extrabold mb-4 drop-shadow-lg'>
            {product.title}
          </h1>
          <p className='text-base sm:text-lg leading-relaxed drop-shadow-md'>
            {product.description}
          </p>
        </div>
      </section>

      {/* ✅ Features Section */}
      <section className='w-full py-16 px-5 sm:px-10 lg:px-20 bg-gray-50'>
        <div className='max-w-7xl mx-auto space-y-28'>
          {product.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
              className={`flex flex-col-reverse md:flex-row items-center gap-10 ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className='w-full md:w-1/2'>
                <motion.img
                  src={feature.image}
                  alt={feature.title}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className='w-full h-72 sm:h-96 object-cover rounded-2xl shadow-lg'
                />
              </div>

              {/* Content */}
              <div className='w-full md:w-1/2 text-center md:text-left'>
                <h3 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-4'>
                  {feature.title}
                </h3>
                <p className='text-gray-600 text-base sm:text-lg leading-relaxed mb-6'>
                  {feature.description}
                </p>
                <Link
                  to={feature.button.href}
                  className='inline-flex items-center gap-2 px-5 py-2.5 bg-[#d4575b] text-white rounded-lg font-medium hover:bg-[#b43e45] transition-all duration-300 shadow-md'
                >
                  {feature.button.label}
                  <GoArrowUpRight className='text-white text-lg mt-[2px]' />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}

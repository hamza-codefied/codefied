'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { GoArrowUpRight } from 'react-icons/go';
import product1 from '@/images/product1.jpg';
import product2 from '@/images/product2.jpg';
import product3 from '@/images/product3.jpg';
import products from '@/data/productData';

export const ProductMegaMenu = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className='fixed left-0 top-[60px] w-full bg-gradient-to-r from-[#f8fafc] via-[#fdf2f2] to-[#fff7f7]  border-t border-gray-200 shadow-lg z-10'
          onClick={onClose}
        >
          <div className='max-w-full mx-auto p-6'>
            {/* Header Section */}
            <div className='flex justify-between items-center mb-10'>
              <div>
                <h2 className='text-2xl font-bold text-gray-900'>
                  Our Products
                </h2>
                <p className='text-gray-600'>
                  From concept to launch, we cover the entire spectrum of
                  digital innovation.
                </p>
              </div>
              <Link
                to=''
                className='text-[#d4575b] hover:underline font-medium flex items-center justify-start gap-2'
              >
                View All Products{' '}
                <GoArrowUpRight className='text-black mt-[2px]' />
              </Link>
            </div>

            {/* Product Cards */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
              {products.map(product => (
                <motion.div
                  key={product.id}
                  whileHover={{
                    y: -10,
                    boxShadow: '0px 8px 25px rgba(212, 87, 91, 0.3)',
                    transition: { duration: 0.3 },
                  }}
                  className='bg-[#0f0f0f] hover:bg-white text-white hover:text-[#0f0f0f] rounded-xl overflow-hidden shadow-lg cursor-pointer'
                >
                  <img
                    src={product.thumnailImage}
                    alt={product.title}
                    className='w-full h-40 object-cover'
                  />
                  <div className='p-5'>
                    <h2 className='text-xl font-semibold'>{product.title}</h2>
                    <h3 className='text-sm uppercase tracking-wide mt-1'>
                      {product.subtitle}
                    </h3>

                    <p className='text-sm mt-2 leading-relaxed line-clamp-3'>
                      {product.description}
                    </p>
                    <Link
                      to={`/products/${product.slug}`}
                      onClick={onClose}
                      className='mt-4 text-[#d4575b] font-medium hover:underline flex items-center justify-start gap-2'
                    >
                      View Product
                      <GoArrowUpRight className='text-[#d4575b] mt-[2px]' />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

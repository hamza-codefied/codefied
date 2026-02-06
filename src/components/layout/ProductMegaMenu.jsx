'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { GoArrowUpRight } from 'react-icons/go';
import product1 from '@/images/product1.jpg';
import product2 from '@/images/product2.jpg';
import product3 from '@/images/product3.jpg';
import products from '@/data/productData';

export const ProductMegaMenu = ({ isOpen, onClose, onMouseEnter, onMouseLeave }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className='fixed left-0 right-0 top-[80px] w-full bg-gradient-to-r from-[#f8fafc] via-[#fdf2f2] to-[#fff7f7] border-t border-gray-200 shadow-lg z-10 max-h-[calc(100vh-80px)] overflow-hidden flex flex-col'
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <div className='max-w-full mx-auto px-[56px] py-6 overflow-y-auto overflow-x-hidden max-h-[calc(100vh-80px)] md:max-h-none' onClick={(e) => e.stopPropagation()}>
            {/* Header Section */}
            <div className='flex justify-between items-start mb-10 pt-[70px]'>
              <div className='flex-1'>
                <h2
                  className='text-gray-900'
                  style={{ fontSize: '42px', fontWeight: 700 }}
                >
                  Our Products
                </h2>
                <div className='flex items-center justify-between mt-[5px]'>
                  <p
                    className='text-black'
                    style={{ fontSize: '24px', lineHeight: '24px', fontWeight: 400 }}
                  >
                    From concept to launch, we cover the entire spectrum of
                    digital innovation.
                  </p>
                  <Link
                    to='/portfolio'
                    className='text-[#d4575b] hover:underline flex items-center justify-start ml-4'
                    style={{ fontSize: '24px', fontWeight: 600, gap: '8px' }}
                  >
                    View All Products
                    <GoArrowUpRight style={{ fontSize: '25px', color: '#000000' }} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Product Cards */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
              {products.map(product => (
                <Link
                  key={product.id}
                  to={`/products/${product.slug}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onClose();
                  }}
                  className='block'
                >
                  <motion.div
                    whileHover={{
                      y: -10,
                      boxShadow: '0px 8px 25px rgba(212, 87, 91, 0.3)',
                      transition: { duration: 0.3 },
                    }}
                    className='relative bg-[#0f0f0f] hover:bg-white text-white hover:text-[#0f0f0f] rounded-xl overflow-hidden shadow-lg cursor-pointer'
                    style={{ padding: '30px', paddingTop: '0px' }}
                  >
                    <img
                      src={product.thumnailImage}
                      alt={product.title}
                      className='absolute inset-0 w-full h-full object-cover'
                      style={{ borderRadius: '5px' }}
                    />
                    {/* Black glassy effect overlay */}
                    <div
                      className='absolute inset-0 bg-black/40 backdrop-blur-sm'
                      style={{ borderRadius: '5px' }}
                    />
                    <div className='relative z-10 p-5 flex flex-col justify-end h-[388px]'>
                      <div className='flex flex-col w-full'>
                        <h2
                          className='text-white'
                          style={{ fontSize: '24px', fontWeight: 700, paddingBottom: '7px' }}
                        >
                          {product.title}
                        </h2>
                        <h3 className='text-white text-sm uppercase tracking-wide' style={{ fontWeight: 400, marginBottom: '4px' }}>
                          {product.subtitle}
                        </h3>
                        <p
                          className='text-white leading-relaxed line-clamp-3 mb-[15px]'
                          style={{ fontSize: '16px', fontWeight: 300 }}
                        >
                          {product.description}
                        </p>
                        <div
                          className='text-white hover:underline flex items-center justify-start gap-2 w-fit'
                          style={{ fontSize: '16px', fontWeight: 700 }}
                        >
                          View Product
                          <GoArrowUpRight className='text-white' size={14} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

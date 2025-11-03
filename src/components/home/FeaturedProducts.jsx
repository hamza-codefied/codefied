import React from 'react';
import { Button } from '@components/ui/Button';
import featurebg from '@/images/feature_bg.png';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import featured from '@/images/featured.png';

const products = [
  {
    id: 1,
    title: 'Build My Plan',
    description:
      'Create, edit, and download multi-floor plans with smart tools and stunning visuals no CAD skills needed.',
    image: featured,
  },
  {
    id: 1,
    title: 'Build My Plan',
    description:
      'Create, edit, and download multi-floor plans with smart tools and stunning visuals no CAD skills needed.',
    image: featured,
  },
  {
    id: 1,
    title: 'Build My Plan',
    description:
      'Create, edit, and download multi-floor plans with smart tools and stunning visuals no CAD skills needed.',
    image: featured,
  },
];

const FeaturedProducts = () => {
  return (
    <div className='max-w-5xl mx-auto'>
      <section
        className='relative mt-10 bg-cover bg-center bg-no-repeat text-black py-10 px-4 md:px-10 lg:px-20 rounded-3xl'
        style={{ backgroundImage: `url(${featurebg})` }}
      >
        <div className='relative z-10 text-center max-w-4xl mx-auto'>
          <h2 className='text-3xl font-bold mb-2'>Featured Products</h2>
          <p className='text-base md:text-lg mb-12 text-black'>
            From concept to launch, we cover the entire spectrum of digital
            innovation.
          </p>

          {/* Product Cards */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {products.map(product => (
              <div
                key={product.id}
                className='bg-transparent border border-white/20 rounded-2xl p-3 flex flex-col items-start justify-start border-white hover:bg-white/20 transition-all duration-300'
              >
                <h3 className='text-sm font-semibold mb-2 text-black'>
                  {product.title}
                </h3>
                <p className='text-xs text-start text-black mb-2'>
                  {product.description}
                </p>
                <a
                  href='#'
                  className='text-black text-xs mb-6 flex items-center gap-1 underline font-medium'
                >
                  Learn More
                  <IoIosArrowDroprightCircle className='text-black' />
                </a>
                <img
                  src={product.image}
                  alt={product.title}
                  className=' object-contain mb-4'
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedProducts;

import React from 'react';
import { Button } from '@components/ui/Button';
import featurebg from '@/images/feature_bg.png';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import product1 from '@/images/product1.jpg';
import product2 from '@/images/product2.jpg';
import product3 from '@/images/product3.jpg';
import products from '@/data/productData';

import arrow from '@/images/arrow.png';
import { Link } from 'react-router-dom';
import { formatText } from '@/utils/textFormatter';

// const products = [
//   {
//     id: 1,
//     title: 'Build My Plan',
//     description:
//       'Create, edit, and download multi-floor plans with smart tools and stunning visuals no CAD skills needed.',
//     image: product2,
//   },
//   {
//     id: 1,
//     title: 'Build My Plan',
//     description:
//       'Create, edit, and download multi-floor plans with smart tools and stunning visuals no CAD skills needed.',
//     image: product2,
//   },
//   {
//     id: 1,
//     title: 'Build My Plan',
//     description:
//       'Create, edit, and download multi-floor plans with smart tools and stunning visuals no CAD skills needed.',
//     image: product2,
//   },
// ];

const FeaturedProducts = () => {
  return (
    <div className='container m-auto'>
      <section
        id='products'
        className='relative bg-cover bg-center bg-no-repeat text-black 
             py-10 px-10                
             rounded-3xl'
        style={{ backgroundImage: `url(${featurebg})` }}
      >
        <div className='relative z-10 text-center '>
          <h2 className='text-[42px] font-bold mb-2'>Featured Products</h2>
          <p className='text-[24px] font-normal mb-20 text-black'>
            From concept to launch, we cover the entire spectrum of digital
            innovation.
          </p>

          {/* Product Cards */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  '>
            {products.map(product => (
              <div
                key={product.id}
                className=' border bg-white/20 border-white/80 rounded-2xl px-5 py-5 flex flex-col items-start justify-between border-white hover:bg-white/20 transition-all duration-300 h-full'
              >
                <div className='flex flex-col items-start w-full'>
                  <h3 className='text-[24px] font-bold mb-2 text-black'>
                    {formatText(product.title)}
                  </h3>
                  <p className='text-[16px] font-normal text-black text-start mb-2'>
                    {formatText(product.description)}
                  </p>
                  <a
                    href='#'
                    className='text-black text-[16px] font-medium mb-6 flex items-center gap-[7px] underline underline-offset-[6px]'
                  >
                    View Product
                    <IoIosArrowDroprightCircle
                      className='text-black'
                      size={18}
                    />
                  </a>
                </div>

                <div className='relative w-full overflow-hidden rounded-xl mt-auto'>
                  <img
                    src={product.thumnailImage}
                    alt={product.title}
                    className='w-full object-cover inverted-radius h-[290px]'
                  />

                  <Link to={`/products/${product.slug}`}>
                    <div className='absolute right-0 bottom-0 w-[90px] h-[90px] flex items-center justify-center z-20'>
                      <img src={arrow} alt='arrow icon' />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedProducts;

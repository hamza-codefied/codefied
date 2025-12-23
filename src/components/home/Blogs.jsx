import React, { useRef } from 'react';
import { Button } from '@components/ui/Button';
import blogbg from '@/images/blog_bg.png';
// import news from '@/images/news.png';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { FaUser } from 'react-icons/fa6';
import { TbMessageCircleFilled } from 'react-icons/tb';
import { GoArrowUpRight } from 'react-icons/go';
import blog from '@/images/blog.png';
import Marquee from 'react-fast-marquee';
import image1 from '@/images/news/1.png';
import image2 from '@/images/news/2.png';
import image3 from '@/images/news/3.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { formatText } from '@/utils/textFormatter';

const Blog = [
  {
    id: 1,
    by: 'Rohail Naveed',
    comments: 83,
    title: 'Speaking remotely at Word Camp US.',
    date: '2 March',
    image: blog,
  },
  {
    id: 2,
    by: 'Rohail Naveed',
    comments: 83,
    title: 'Speaking remotely at Word Camp US.',
    date: '2 March',
    image: blog,
  },
  {
    id: 3,
    by: 'Rohail Naveed',
    comments: 83,
    title: 'Speaking remotely at Word Camp US.',
    date: '2 March',
    image: blog,
  },
  {
    id: 4,
    by: 'Rohail Naveed',
    comments: 83,
    title: 'Speaking remotely at Word Camp US.',
    date: '24 March',
    image: blog,
  },
  {
    id: 5,
    by: 'Rohail Naveed',
    comments: 83,
    title: 'Speaking remotely at Word Camp US.',
    date: '24 March',
    image: blog,
  },
  {
    id: 6,
    by: 'Rohail Naveed',
    comments: 83,
    title: 'Speaking remotely at Word Camp US.',
    date: '24 March',
    image: blog,
  },
];

const news = [image1, image2, image3];
const seamlessNews = [...news, ...news];

const Blogs = () => {
  const swiperRef = useRef(null);

  return (
    <div className='w-full'>
      <section
        id='blogs'
        className='relative mt-10 bg-cover bg-center bg-no-repeat text-black py-10 md:py-20'
        style={{ backgroundImage: `url(${blogbg})` }}
      >
        <div className='container m-auto xl-custom:px-0'>
          <div className='relative z-10 text-center'>
            {/* Tag */}
            <div className='sm:text-start mb-2'>
              <span className='text-base font-normal text-[#d4575b] uppercase tracking-wider'>
                Blog And News
              </span>
            </div>

            {/* Heading + Paragraph Row */}
            <div className='flex flex-col md:flex-row items-start justify-between gap-8 mb-14'>
              {/* Left Side */}
              <div className='md:w-2/3 flex items-center'>
                <h4 className='text-[24px] sm:text-[30px] lg:text-[48px] font-bold mb-2 md:mb-4 relative inline-block text-start'>
                  Read Our Latest News <span>{formatText('&')}</span>{' '}
                  <br className='hidden lg:block' /> Blogs Get Every Updates
                  <span className='block w-40 h-[1px] bg-gray-500 mt-3 rounded-full'></span>
                </h4>
              </div>

              {/* Right Side */}
              <div className='md:w-1/3'>
                <p className='text-black text-start text-sm md:text-[16px] mb-2 leading-relaxed'>
                  {formatText(
                    'We are web designers, developers, project managers, and digital solutions using the latest trends and technologies.'
                  )}
                </p>

                {/* Arrows */}
                <div className='flex items-center justify-end gap-4'>
                  <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className='w-[32px] h-[32px] md:w-[48px] md:h-[48px] lg:w-[68px] lg:h-[64px] flex items-center justify-center border border-gray-300 rounded-full hover:bg-[#d4575b] hover:text-white transition-all duration-300'
                  >
                    <ArrowLeftOutlined />
                  </button>
                  <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className='w-[32px] h-[32px] md:w-[48px] md:h-[48px] lg:w-[68px] lg:h-[64px] flex items-center justify-center border border-gray-300 rounded-full hover:bg-[#d4575b] hover:text-white transition-all duration-300'
                  >
                    <ArrowRightOutlined />
                  </button>
                </div>
              </div>
            </div>

            {/* Product Cards Slider */}
            <div className='blog-slider'>
              <Swiper
                onSwiper={swiper => {
                  swiperRef.current = swiper;
                }}
                modules={[Navigation]}
                spaceBetween={24}
                slidesPerView={1}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                  },
                }}
                loop={true}
                speed={500}
                className='w-full'
              >
                {Blog.map((product, index) => (
                  <SwiperSlide key={`${product.id}-${index}`}>
                    <div className='flex justify-center items-center w-full'>
                      <div className='bg-transparent border border-white/20 rounded-2xl p-3 sm:p-4 md:p-5 flex flex-col items-start justify-start border-white h-[518px] w-[370px]'>
                        <img
                          src={product.image}
                          alt={product.title}
                          className='object-contain mb-3 sm:mb-[32px] w-full h-[252px]'
                        />
                        <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-2 sm:gap-0 mb-4 sm:mb-[32px]'>
                          <p className='text-xs flex items-center gap-2 text-black'>
                            <FaUser className='text-[#d4575b] flex-shrink-0' />
                            <span className='truncate'>By: {product.by}</span>
                          </p>
                          <p className='text-xs flex items-center gap-2 text-black'>
                            <TbMessageCircleFilled className='text-[#d4575b] flex-shrink-0' />
                            <span>{product.comments} Comments</span>
                          </p>
                        </div>
                        <h3
                          style={{ lineHeight: '31.2px' }}
                          className='text-base sm:text-[24px] text-start font-semibold mb-[32px] text-[#000]'
                        >
                          {formatText(product.title)}
                        </h3>

                        <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-2 sm:gap-0'>
                          <a
                            href='#'
                            className='text-[#d4575b] text-xs flex items-center gap-1 font-medium hover:underline'
                          >
                            Read More
                            <GoArrowUpRight className='mt-[2px]' />
                          </a>
                          <p className='text-xs text-gray-500'>
                            {product.date}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <Marquee
        gradient={true}
        gradientWidth={60}
        gradientColor={[36, 36, 36]}
        speed={30}
        pauseOnHover={true}
        loop={0}
        className='flex items-center '
        // style={{display:"flex", gap:'32px'}}
      >
        {seamlessNews.map((src, i) => (
          <div key={i} className='flex justify-center items-center'>
            <img
              src={src}
              alt={`Client ${i + 1}`}
              className='object-contain w-[400px] h-[400px] lg:w-full lg:h-full'
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Blogs;

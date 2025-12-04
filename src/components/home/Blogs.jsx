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
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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
  const sliderRef = useRef(null);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Below lg screens (medium/tablet screens)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // Below sm screens (mobile screens)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='w-full'>
      <section
        id='blogs'
        className='relative mt-10 bg-cover bg-center bg-no-repeat text-black py-20'
        style={{ backgroundImage: `url(${blogbg})` }}
      >
        <div className='container m-auto px-8'>
          <div className='relative z-10 text-center'>
            {/* Tag */}
            <div className='sm:text-start mb-2'>
              <span className='text-sm font-semibold text-[#d4575b] uppercase tracking-wider'>
                Blog And News
              </span>
            </div>

            {/* Heading + Paragraph Row */}
            <div className='flex flex-col md:flex-row items-start justify-between gap-8 mb-4'>
              {/* Left Side */}
              <div className='md:w-2/3 flex items-center'>
                <h2 className='text-3xl font-bold mb-4 relative inline-block text-start'>
                  Read Our Latest Blogs
                  <br /> Get Every Updates
                  <span className='block lg:w-40 h-[1px] bg-gray-500 mt-3 rounded-full'></span>
                </h2>
              </div>

              {/* Right Side */}
              <div className='md:w-1/3'>
                <p className='text-black text-xs mb-2 leading-relaxed'>
                  {formatText("We are web designers, developers, project managers, and digital solutions using the latest trends and technologies.")}
                </p>

                {/* Arrows */}
                <div className='flex items-center justify-end gap-4'>
                  <button
                    onClick={() => sliderRef.current?.slickPrev()}
                    className='w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-[#d4575b] hover:text-white transition-all duration-300'
                  >
                    <ArrowLeftOutlined />
                  </button>
                  <button
                    onClick={() => sliderRef.current?.slickNext()}
                    className='w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-[#d4575b] hover:text-white transition-all duration-300'
                  >
                    <ArrowRightOutlined />
                  </button>
                </div>
              </div>
            </div>

            {/* Product Cards Slider */}
            <div className='blog-slider'>
              <Slider ref={sliderRef} {...sliderSettings}>
                {Blog.map((product, index) => (
                  <div key={`${product.id}-${index}`} className='px-2 sm:px-4'>
                    <div className='bg-transparent border border-white/20 rounded-2xl p-3 sm:p-4 md:p-3 flex flex-col items-start justify-start border-white hover:bg-white/80 transition-all duration-300 h-full'>
                      <img
                        src={product.image}
                        alt={product.title}
                        className='object-contain mb-3 sm:mb-4 w-full h-auto'
                      />
                      <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-2 sm:gap-0 mb-4 sm:mb-5'>
                        <p className='text-xs flex items-center gap-2 text-black'>
                          <FaUser className='text-[#d4575b] flex-shrink-0' />
                          <span className='truncate'>By: {product.by}</span>
                        </p>
                        <p className='text-xs flex items-center gap-2 text-black'>
                          <TbMessageCircleFilled className='text-[#d4575b] flex-shrink-0' />
                          <span>{product.comments} Comments</span>
                        </p>
                      </div>
                      <h3 className='text-base sm:text-lg text-start font-semibold mb-2 text-black line-clamp-2'>
                        {formatText(product.title)}
                      </h3>
                      <p className='text-xs text-start text-black mb-2 line-clamp-2 sm:line-clamp-3'>
                        {product.description && formatText(product.description)}
                      </p>
                      <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-2 sm:gap-0 mt-auto'>
                        <a
                          href='#'
                          className='text-[#d4575b] text-xs flex items-center gap-1 font-medium hover:underline'
                        >
                          Read More
                          <GoArrowUpRight className='mt-[2px]' />
                        </a>
                        <p className='text-xs text-gray-500'>{product.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
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
            <img src={src} alt={`Client ${i + 1}`} className='object-contain' />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Blogs;

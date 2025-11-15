import React, { useRef } from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { GoArrowUpRight } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';
import project from '@/images/project.png';
import Slider from 'react-slick';

const ProjectsSection = () => {
  const navigate = useNavigate();

  const sliderRef = useRef(null);

  return (
    <div className='container m-auto px-8'>
      <section className='mt-0 sm:mt-10 py-5 sm:py-20 bg-white'>
        {/* Tag */}
        <div className='text-center sm:text-start mb-2'>
          <span className='text-sm font-semibold text-[#d4575b] uppercase tracking-wider'>
            Projects
          </span>
        </div>

        {/* Heading + Paragraph Row */}
        <div className='flex flex-col md:flex-row items-start justify-between gap-8 mb-16'>
          {/* Left Side */}
          <div className='md:w-2/3'>
            <h2 className='text-3xl font-bold mb-4 relative inline-block'>
              Make creativity your <br /> competitive edge
              <span className='block lg:w-40 h-[1px] bg-gray-500 mt-3 rounded-full'></span>
            </h2>
          </div>

          {/* Right Side */}
          <div className='md:w-1/3'>
            <p className='text-black text-xs mb-2 leading-relaxed'>
              We are web designers, developers, project managers, and digital
              solutions using the latest trends and technologies.
            </p>
            <div className='flex items-center justify-end pr-3 font-semibold'>
              <button
                onClick={() => navigate('/portfolio')}
                className='text-[14px] text-[#d4575b] hover:underline transition'
              >
                View All
              </button>
              <GoArrowUpRight className='text-[#d4575b] mt-[2px]' />
            </div>
          </div>
        </div>

        {/* Center Image */}
        <div className='md:px-24 relative'>
          <Slider
            ref={sliderRef}
            {...{
              dots: false,
              infinite: true,
              speed: 500,
              arrows: true,
              slidesToShow: 1,
              slidesToScroll: 1,
            }}
          >
            {/* 1 */}
            <div className=''>
              <img
                src={project}
                alt='Projects showcase'
                className='w-full object-contain mb-8'
              />
              <div>
                <p className='text-sm font-semibold'>Grocery Comparision</p>
                <p className='text-xs text-gray-400 underline'>
                  www.grocerycompare.com
                </p>
              </div>
            </div>
            {/* 2 */}
            <div>
              <img
                src={project}
                alt='Projects showcase'
                className='w-full object-contain mb-8'
              />
              <div>
                <p className='text-sm font-semibold'>Grocery Comparision</p>
                <p className='text-xs text-gray-400 underline'>
                  www.grocerycompare.com
                </p>
              </div>
            </div>
            {/* 3 */}
            <div>
              <img
                src={project}
                alt='Projects showcase'
                className='w-full object-contain mb-8'
              />
              <div>
                <p className='text-sm font-semibold'>Grocery Comparision</p>
                <p className='text-xs text-gray-400 underline'>
                  www.grocerycompare.com
                </p>
              </div>
            </div>
          </Slider>

          <div className='absolute bottom-0 right-0  md:right-24 flex items-center justify-between  mx-auto mt-2'>
            {/* Arrows */}
            <div className='flex items-center justify-end gap-4'>
              <button
                className='w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-[#d4575b] hover:text-white transition-all duration-300'
                onClick={() => sliderRef.current.slickPrev()}
              >
                <ArrowLeftOutlined />
              </button>

              <button
                className='w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-[#d4575b] hover:text-white transition-all duration-300'
                onClick={() => sliderRef.current.slickNext()}
              >
                <ArrowRightOutlined />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsSection;

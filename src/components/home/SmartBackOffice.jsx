import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';

const SmartBackOffice = () => {
  const cards = [
    {
      id: 1,
      title: 'Automated Operations',
      description: 'Streamline workflows and eliminate manual tasks.',
      image: 'src/images/backoffice.png',
      position: 'top-left',
    },
    {
      id: 2,
      title: 'Integrated Customer Support',
      description: 'Connect your platforms with responsive support systems.',
      image: 'src/images/backoffice.png',
      position: 'top-right',
    },
    {
      id: 3,
      title: 'Data & Analytics',
      description: 'Turn raw information into actionable insights.',
      image: 'src/images/backoffice.png',
      position: 'bottom-left',
    },
    {
      id: 4,
      title: 'Scalable Infrastructure',
      description: 'Ensure your systems grow with your business.',
      image: 'src/images/backoffice.png',
      position: 'bottom-right',
    },
  ];

  return (
    <section className='relative max-w-6xl mx-auto flex items-center justify-center py-64 px-4 overflow-hidden mt-10 sm:mt-32'>
      {/* Background Image */}
      <img
        src='src/images/circle.png'
        alt='background circle'
        className='absolute inset-0 w-full h-full object-contain opacity-90 pointer-events-none'
      />

      {/* Center Content */}
      <div className='relative z-10 text-center max-w-2xl mx-auto'>
        <h2 className='text-3xl font-bold mb-4 leading-snug text-center relative inline-block'>
          Behind Every Great Product <br />
          Is a Smarter{' '}
          <span className='relative inline-block'>
            Back Office
            {/* Curved underline SVG */}
            <svg
              className='absolute left-0 bottom-0 w-full h-3 md:h-4'
              viewBox='0 0 200 10'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M2 8 Q50 3 100 8 T198 8'
                stroke='#d4575b'
                strokeWidth='3'
                fill='transparent'
                strokeLinecap='round'
              />
            </svg>
          </span>
        </h2>

        <p className='text-gray-600 mb-2 text-sm md:text-base max-w-lg mx-auto'>
          Codefied’s back-office solutions keep your business running smoothly
          from data and operations to support and analytics so you can focus on
          growth.
        </p>
        <a
          href='#'
          className='text-[#d4575b] font-semibold hover:underline transition flex items-center justify-center gap-1'
        >
          <span>Get Free Consultation</span>
          <GoArrowUpRight className='text-black mt-[2px]' />
        </a>
      </div>

      {/* Floating Cards */}
      {cards.map(card => (
        <div
          key={card.id}
          className={`absolute bg-[#121212]/90 text-white rounded-xl shadow-lg p-5 w-[250px] md:w-[300px] backdrop-blur-md border border-white/10 transition-transform hover:-translate-y-2 duration-300 ${
            card.position === 'top-left'
              ? 'top-20 left-5 lg:left-36 shadow-lg shadow-green-100'
              : card.position === 'top-right'
                ? 'hidden sm:block top-8 right-5 lg:right-56 shadow-lg shadow-red-100'
                : card.position === 'bottom-left'
                  ? 'bottom-16 left-5 lg:left-48 shadow-lg shadow-yellow-100'
                  : 'hidden sm:block bottom-20 right-5 lg:right-52 shadow-lg shadow-blue-100'
          }`}
        >
          <div className='flex items-center justify-start mb-3'>
            <img
              src={card.image}
              alt={card.title}
              className='w-8 h-8 object-contain'
            />
          </div>
          <h3 className='text-sm font-semibold mb-1'>{card.title}</h3>
          <p className='text-gray-300 text-xs'>{card.description}</p>
        </div>
      ))}
    </section>
  );
};

export default SmartBackOffice;

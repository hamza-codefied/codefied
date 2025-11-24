
import React, { useState } from 'react';
import { GoArrowUpRight } from 'react-icons/go';

const Vision = () => {
  const [activeTab, setActiveTab] = useState('vision');

  return (
    <div className='container m-auto px-8'>
      <section id='vision-mission' className='w-full bg-white text-black py-20 '>
      <div className='text-start space-y-6'>
        {/* Heading */}
        <h2 className='text-2xl md:text-3xl font-bold'>
          Innovating Solutions , <br />
          Empowering your success
        </h2>

        {/* Paragraph */}
        <p className='text-gray-500 text-sm leading-relaxed'>
          At Codefied Software Development Company, we are passionate about
          leveraging technology to create innovative and impactful solutions.At
          Codefied Software Development Company, we are passionate about
          leveraging technology to create innovative and impactful solutions.
        </p>

        {/* Tabs */}
        <div className='flex justify-start items-center flex-wrap gap-4 pt-6'>
          {['vision', 'mission'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-xl font-medium transition duration-300 ${
                activeTab === tab
                  ? 'bg-[#d4575b] text-white'
                  : 'bg-transparent text-gray-500'
              }`}
            >
              {tab === 'vision' ? 'Our Vision' : 'Our Mission'}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className='mt-8'>
          {activeTab === 'vision' ? (
            <div className='space-y-4 border-l-2 border-[#d4575b] pl-6 py-4'>
              <p className='text-black text-sm leading-relaxed'>
                At Codefied Software Development Company, we are passionate
                about leveraging technology to create innovative and impactful
                solutions. Our team of dedicated professionals specializes in
                developing cutting-edge mobile apps, web apps, and immersive
                AR/VR experiences. As a product and service-based company, we
                pride ourselves on delivering exceptional quality and value to
                our clients.At Codefied Software Development Company, we are
                passionate about leveraging technology to create innovative and
                impactful solutions. Our team of dedicated professionals
                specializes in developing cutting-edge mobile apps, web apps,
                and immersive AR/VR experiences. As a product and service-based
                company, we pride ourselves on delivering exceptional quality
                and value to our clients.
              </p>
              <button className='bg-[#d4575b] hover:bg-[#ff6666] text-white font-semibold px-6 py-3 rounded-lg transition duration-300 flex items-center justify-center gap-2'>
                Get Free Consultation
                <GoArrowUpRight className='text-white w-5 h-5 mt-[2px]' />
              </button>
            </div>
          ) : (
            <div className='space-y-4 border-l-2 border-[#d4575b] pl-6 py-4'>
              <p className='text-black text-sm leading-relaxed max-w-3xl'>
                At Codefied Software Development Company, we are passionate
                about leveraging technology to create innovative and impactful
                solutions. Our team of dedicated professionals specializes in
                developing cutting-edge mobile apps, web apps, and immersive
                AR/VR experiences. As a product and service-based company, we
                pride ourselves on delivering exceptional quality and value to
                our clients.At Codefied Software Development Company, we are
                passionate about leveraging technology to create innovative and
                impactful solutions.
              </p>
              <button className='bg-[#d4575b] hover:bg-[#ff6666] text-white font-semibold px-6 py-3 rounded-lg transition duration-300 flex items-center justify-center gap-2'>
                Get Free Consultation
                <GoArrowUpRight className='text-white w-5 h-5 mt-[2px]' />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
    </div>
  );
};

export default Vision;

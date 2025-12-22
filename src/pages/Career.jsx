import { useState } from 'react';
import AllBlogsSection from '@/components/blogs/AllBlogsSection';
import HeroSection from '@/components/global/HeroBanner';
import TestimonialsSection from '@/components/global/TestimoniolSection';
import CareerSearchFilter from '@/components/career/CareerSearchFilter';
import AvailableJobs from '@/components/career/AvailableJobs';
import Developerit from '@/components/home/DeveloperIT';
import Working from '@/components/career/Working';
import CounterSection from '@/components/career/CounterSection';
import herobg from '@/images/hero.png';

export const Career = () => {
  const [filters, setFilters] = useState({
    searchQuery: '',
    location: 'Location',
    jobLevel: 'Job Level',
    department: 'Department',
  });

  return (
    <div className='min-h-screen'>
      <HeroSection
        classNames={
          'h-[100px] sm:h-[150px] md:h-[200px] lg:h-[250px] xl:h-[350px]'
        }
        BannerText={'Careers'}
        bannerTextAdjust={{
          fontSize: 'clamp(40px, 22vw, 350px)', // responsive font size
          lineHeight: 1,
          transform: 'translateY(15%)', // cut half of the text
        }}
      />

      {/* Search and Filter Component */}
      <div className='mt-0 lg:-mt-8 relative z-10'>
        <CareerSearchFilter filters={filters} setFilters={setFilters} />
      </div>

      {/* Available Jobs Section */}
      <div className='mt-8 md:mt-12'>
        <AvailableJobs filters={filters} />
      </div>

      <Working />
      <CounterSection />
      <div
        style={{
          backgroundImage: `url(${herobg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className='w-full relative'
      >
        {/* Top fade overlay */}
        <div
          className='absolute top-0 left-0 right-0 h-12 pointer-events-none z-0'
          style={{
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.95) 0%, transparent 100%, transparent 100%, transparent 100%)',
          }}
        />
        {/* Bottom fade overlay */}
        <div
          className='absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-0'
          style={{
            background: 'linear-gradient(to top, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 30%, transparent 100%, transparent 100%)',
          }}
        />
        <div className='relative z-10'>
          <TestimonialsSection />
        </div>
      </div>
    </div>
  );
};

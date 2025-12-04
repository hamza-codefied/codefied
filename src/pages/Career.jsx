import { useState } from 'react';
import AllBlogsSection from '@/components/blogs/AllBlogsSection';
import HeroSection from '@/components/global/HeroBanner';
import TestimonialsSection from '@/components/global/TestimoniolSection';
import CareerSearchFilter from '@/components/career/CareerSearchFilter';
import AvailableJobs from '@/components/career/AvailableJobs';
import Developerit from '@/components/home/DeveloperIT';
import Working from '@/components/career/Working';
import CounterSection from '@/components/career/CounterSection';

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
      <div className='lg:-mt-8 relative z-10'>
        <CareerSearchFilter filters={filters} setFilters={setFilters} />
      </div>

      {/* Available Jobs Section */}
      <div className='mt-8 md:mt-12'>
        <AvailableJobs filters={filters} />
      </div>

      <Working />
      <CounterSection />
      <TestimonialsSection />
    </div>
  );
};

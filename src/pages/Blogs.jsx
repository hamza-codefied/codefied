import AllBlogsSection from '@/components/blogs/AllBlogsSection';
import HeroSection from '@/components/blogs/HeroSection';
import MapSection from '@/components/blogs/MapSection';
import TestimonialsSection from '@/components/blogs/TestimoniolSection';
import FeaturedSection from '@/components/blogs/Trending';

export const Blogs = () => {
  return (
    <div className='min-h-screen'>
      <HeroSection />
      <FeaturedSection />
      <AllBlogsSection />
      <MapSection />
      <TestimonialsSection />
    </div>
  );
};

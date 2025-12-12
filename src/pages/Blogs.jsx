import AllBlogsSection from '@/components/blogs/AllBlogsSection';
import HeroSection from '@/components/global/HeroBanner';
import MapSection from '@/components/blogs/MapSection';
import TestimonialsSection from '@/components/global/TestimoniolSection';
import FeaturedSection from '@/components/blogs/Trending';

export const Blogs = () => {
  return (
    <div className='min-h-screen'>
      <HeroSection
        classNames={'h-[100px] md:h-[200px] lg:h-[450px]'}
        BannerText={'Blogs'}
        bannerTextAdjust={{
          fontSize: 'clamp(40px, 22vw, 600px)', // responsive font size
          lineHeight: 1,
          // transform: 'translateY(%)', // cut half of the text
        }}
      />
      <FeaturedSection />
      <AllBlogsSection />
      <MapSection />
      <TestimonialsSection />
    </div>
  );
};

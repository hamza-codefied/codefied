import AllBlogsSection from '@/components/blogs/AllBlogsSection';
import HeroSection from '@/components/global/HeroBanner';
import MapSection from '@/components/blogs/MapSection';
import TestimonialsSection from '@/components/global/TestimoniolSection';
import FeaturedSection from '@/components/blogs/Trending';

export const Blogs = () => {
  return (
    <div className='min-h-screen'>
       <HeroSection
        classNames={'h-[350px]'}
        BannerText={'Blogs'}
        bannerTextAdjust={{
          fontSize: 'clamp(40px, 20vw, 600px)', // responsive font size
            lineHeight: 1,
            transform: 'translateY(15%)', // cut half of the text
        }}
       
      />
      <FeaturedSection />
      <AllBlogsSection />
      <MapSection />
      <TestimonialsSection />
    </div>
  );
};

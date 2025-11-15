import AllProjectsSection from '@/components/Portfolio/AllProjectsSection';
import HeroSection from '@/components/global/HeroBanner';
import TestimonialsSection from '@/components/global/TestimoniolSection';

export const Portfolio = () => {
  return (
    <>
      <div className='min-h-screen'>
        <HeroSection
        classNames={'h-[440px]'}
        BannerText={'Portfolio'}
        BottomText={
          <h2 className='text-xl font-semibold mb-2 text-center relative inline-block'>
            <span className='relative inline-block'>
             For Fourtune 500's, Enterprises & Startups
            </span>
          </h2>
        }
        MainText={
          <h1 className='text-2xl md:text-4xl lg:text-6xl font-bold text-gray-900'>
            Some Of Our Favourite
            <br /> Projects
          </h1>
        }
        bannerTextAdjust={{
          fontSize: 'clamp(40px, 20vw, 600px)', // responsive font size
            lineHeight: 1,
            transform: 'translateY(30%)', // cut half of the text
        }}
      />
        <AllProjectsSection />
        <TestimonialsSection />
      </div>
    </>
  );
};

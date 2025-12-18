import AllProjectsSection from '@/components/Portfolio/AllProjectsSection';
import HeroSection from '@/components/global/HeroBanner';
import TestimonialsSection from '@/components/global/TestimoniolSection';

export const Portfolio = () => {
  return (
    <>
      <div className='min-h-screen'>
        <HeroSection
          classNames={'h-[530px]'}
          BannerText={'Portfolio'}
          BottomText={
            <h2 className='text-[34px] font-normal text-black mb-2 text-center relative inline-block'>
              <span className='relative inline-block'>
                For Fourtune 500
                <span style={{ fontFamily: 'Arial, sans-serif' }}>'</span>s,
                Enterprises{' '}
                <span style={{ fontFamily: 'Arial, sans-serif' }}>&</span>{' '}
                Startups
              </span>
            </h2>
          }
          MainText={
            <h1 style={{ lineHeight: '1.2' }} className='text-2xl md:text-4xl lg:text-[54px] font-bold text-black'>
              Some Of Our Favourite
              <br /> Projects
            </h1>
          }
          bannerTextAdjust={{
            fontSize: 'clamp(40px, 22vw, 600px)', // responsive font size
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

import AllProjectsSection from '@/components/Portfolio/AllProjectsSection';
import HeroSection from '@/components/Portfolio/HeroSection';
import TestimonialsSection from '@/components/Portfolio/TestimoniolSection';

export const Portfolio = () => {
  return (
    <>
      <div className='min-h-screen'>
        <HeroSection />
        <AllProjectsSection />
        <TestimonialsSection />
      </div>
    </>
  );
};

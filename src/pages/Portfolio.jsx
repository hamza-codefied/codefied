import AllProjectsSection from '@/components/Portfolio/AllProjectsSection';
import HeroSection from '@/components/Portfolio/HeroSection';

export const Portfolio = () => {
  return (
    <>
      <div className='min-h-screen'>
        <HeroSection />
        <AllProjectsSection />
      </div>
    </>
  );
};

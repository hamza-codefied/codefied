import { Button } from '@components/ui/Button';
import { SEOHead } from '@components/seo/SEOHead';
import { StructuredData } from '@components/seo/StructuredData';
import {
  generateWebsiteStructuredData,
  generateOrganizationStructuredData,
} from '@utils/seo';
import HeroSection from '@/components/home/HeroSection';

import OurCapabilities from '@/components/home/OurCapabilities';
import Developerit from '@/components/home/DeveloperIT';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import SmartBackOffice from '@/components/home/SmartBackOffice';
import ProjectsSection from '@/components/home/Projects';
import Blogs from '@/components/home/Blogs';
import FAQSection from '@/components/home/Faq';
import ClientSection2 from '@/components/home/ClientSection2';
import TestimonialsSection from '@/components/global/TestimoniolSection';
import ClientSection from '@/components/global/ClientSection';

export const Home = () => {
  const structuredData = [
    generateWebsiteStructuredData(),
    generateOrganizationStructuredData(),
  ];

  return (
    <>
      <SEOHead
        title='Codefied | Software Development Company'
        description='Codefied is a software development company delivering custom web, mobile, and cloud solutions to help businesses scale faster.'
        keywords='software development company, custom software development, web development services, mobile app development, cloud solutions, UI UX design'
        url='/'
      />
      <StructuredData structuredData={structuredData} />

      <div className='min-h-screen'>
        <HeroSection />
        <ClientSection />
        <OurCapabilities />
        <Developerit />
        <FeaturedProducts />
        <SmartBackOffice />
        <ProjectsSection />
        <Blogs />
        <FAQSection />
        <ClientSection2 />
        <TestimonialsSection />
      </div>
    </>
  );
};

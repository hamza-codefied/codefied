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

export const Home = () => {
  const structuredData = [
    generateWebsiteStructuredData(),
    generateOrganizationStructuredData(),
  ];

  return (
    <>
      <SEOHead
        title='Codefied - Professional React Application'
        description='A modern, professional React application built with Vite, Tailwind CSS, and best practices for scalable development. Get started with our optimized template today.'
        keywords='React, Vite, Tailwind CSS, PWA, SEO, Performance, Modern Web Development, JavaScript, Frontend Development'
        url='/'
      />
      <StructuredData structuredData={structuredData} />

      <div className='min-h-screen'>
        <HeroSection />
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

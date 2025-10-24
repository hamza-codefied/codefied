import { Button } from '@components/ui/Button';
import { SEOHead } from '@components/seo/SEOHead';
import { StructuredData } from '@components/seo/StructuredData';
import {
  generateWebsiteStructuredData,
  generateOrganizationStructuredData,
} from '@utils/seo';

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

      <div className='min-h-screen'>services</div>
    </>
  );
};

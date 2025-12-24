// import ClientSection from '@/components/global/ClientSection';
import GetInTouchSection from '@/components/Contact/GetInTouchSection';
import HeroSection from '@/components/global/HeroBanner';
import MapSection from '@/components/Contact/MapSection';
import ClientSection from '@/components/global/ClientSection';
import React from 'react';
import Marquee from 'react-fast-marquee';
import image1 from '@/images/news/1.png';
import image2 from '@/images/news/2.png';
import image3 from '@/images/news/3.png';

export const Contact = () => {

  const news = [image1, image2, image3];
  const seamlessNews = [...news, ...news];

  return (
    <div className='min-h-screen'>
      <HeroSection
        classNames={'h-[130px] md:h-[200px] lg:h-[350px]'}
        BannerText='Contact US'
        bannerTextAdjust={{
          fontSize: 'clamp(40px, 16vw, 300px)', // responsive font size
          lineHeight: 1,
          transform: 'translateY(30%)', // cut half of the text
        }}
      />
      <GetInTouchSection />
      <ClientSection />

      <Marquee
        gradient={true}
        gradientWidth={60}
        gradientColor={[36, 36, 36]}
        speed={30}
        pauseOnHover={true}
        loop={0}
        className='flex items-center '
      // style={{display:"flex", gap:'32px'}}
      >
        {seamlessNews.map((src, i) => (
          <div key={i} className='flex justify-center items-center'>
            <img
              src={src}
              alt={`Client ${i + 1}`}
              className='object-contain w-[400px] lg:w-full lg:h-full'
            />
          </div>
        ))}
      </Marquee>
      <MapSection />
    </div>
  );
};

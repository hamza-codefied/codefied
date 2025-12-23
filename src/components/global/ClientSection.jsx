import Marquee from 'react-fast-marquee';
import zapier from '@/images/zapier.png';
import amazon from '@/images/amazon.png';
import adobe from '@/images/adobe.png';
import slack from '@/images/slack.png';
import spotify from '@/images/spotify.png';
import zoom from '@/images/zoom.png';
import news from '@/images/news.png';
import Slider from 'react-slick';
import { a } from 'framer-motion/client';

export const ClientSection = () => {
  const clients = [zapier, amazon, adobe, slack, spotify, zoom];
  const seamlessClients = [...clients, ...clients];

  var clientSlider = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 4000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToShow: 6,
    slidesToScroll: 1,
    pauseOnHover: false,
    pauseOnFocus: false,

    responsive: [
      {
        breakpoint: 1024, // md screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // small tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className='bg-[#242424] h-[75px] md:h-[90px] lg:h-[125px]'>
        <div className='relative flex justify-center items-center'>
          <div
            className='bg-black text-white text-xs w-fit mx-auto px-[15px] py-[10px] lg:px-[25px] lg:py-[15px] rounded-full absolute z-10 -top-[22px] h-[36px] lg:h-[46px]'
            style={{ fontFamily: 'Arial, sans-serif' }}
          >
            Trusted By{' '}
            <span style={{ fontFamily: 'Arial, sans-serif' }}>250+</span>{' '}
            Companies
          </div>
        </div>
        <div className='h-full flex items-center'>
          <section className='w-full'>
            <Marquee
              gradient={true}
              gradientWidth={60}
              gradientColor={[36, 36, 36]}
              speed={30}
              pauseOnHover={true}
              loop={0}
              className='flex items-center gap-[32px]'
              // style={{ display: 'flex', gap: '32px', backgroundColor: 'red' }}
            >
              {seamlessClients.map((src, i) => (
                <div
                  key={i}
                  className='flex justify-center items-center mx-16'
                >
                  <img
                    src={src}
                    alt={`Client ${i + 1}`}
                    className=''
                  />
                </div>
              ))}
            </Marquee>
          </section>
        </div>
      </div>
    </>
  );
};

export default ClientSection;

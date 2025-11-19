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
  cssEase: "linear",
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
      <div className='h-[15vh] bg-[#242424]/90 '>
        <div className='relative flex justify-center items-center'>
          <div className='bg-black text-white text-xs w-fit mx-auto px-4 py-2 rounded-full absolute z-10 -top-[15px] h-[30px]'>
            Trusted By 250+ Companies
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
          className='flex items-center '
          style={{display:"flex", gap:'32px'}}
        >
          {seamlessClients.map((src, i) => (
            <div key={i} className='flex justify-center items-center mx-10 gap-[32px]'>
              <img
                src={src}
                alt={`Client ${i + 1}`}
                className='w-[100px] object-contain'
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

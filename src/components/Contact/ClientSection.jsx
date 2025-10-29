import Marquee from 'react-fast-marquee';
import zapier from '@/images/zapier.png';
import amazon from '@/images/amazon.png';
import adobe from '@/images/adobe.png';
import slack from '@/images/slack.png';
import spotify from '@/images/spotify.png';
import zoom from '@/images/zoom.png';
import news from '@/images/news.png';

export const ClientSection = () => {
  const clients = [zapier, amazon, adobe, slack, spotify, zoom];
  const seamlessClients = [...clients, ...clients];

  return (
    <>
      <div className='bg-black text-white text-xs w-fit mx-auto px-4 py-2 rounded-full relative z-50 top-[15px]'>
        Trusted By 250+ Companies
      </div>
      <section className='relative bg-[#242424]/90 py-8 overflow-hidden'>
        <div className='w-full mx-auto text-center'>
          <Marquee
            gradient={true}
            gradientWidth={60}
            gradientColor={[36, 36, 36]}
            speed={30}
            pauseOnHover={true}
            loop={0}
            className='flex items-center'
          >
            {seamlessClients.map((src, i) => (
              <div
                key={i}
                className='flex justify-center items-center mx-10 grayscale hover:grayscale-0 transition duration-300'
              >
                <img
                  src={src}
                  alt={`Client ${i + 1}`}
                  className='h-10 w-auto object-contain'
                />
              </div>
            ))}
          </Marquee>
        </div>
      </section>
      <div
        className='w-full h-[400px] bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: `url(${news})` }}
      ></div>
    </>
  );
};

export default ClientSection;

import Marquee from 'react-fast-marquee';
import zapier from '@/images/zapier.png';
import amazon from '@/images/amazon.png';
import adobe from '@/images/adobe.png';
import slack from '@/images/slack.png';
import spotify from '@/images/spotify.png';
import zoom from '@/images/zoom.png';

export const ClientSection = () => {
  const clients = [zapier, amazon, adobe, slack, spotify, zoom];
  const seamlessClients = [...clients, ...clients];

  return (
    <section className='relative bg-[#242424]/90 py-6 mt-[-20px] overflow-hidden'>
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
  );
};

export default ClientSection;

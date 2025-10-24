import Marquee from 'react-fast-marquee';
import client1 from '@/images/client1.png';
import client2 from '@/images/client2.png';
import client3 from '@/images/client3.png';
import client4 from '@/images/client4.png';
import client5 from '@/images/client5.png';

export const ClientSection2 = () => {
  const clients = [client1, client2, client3, client4, client5];
  const seamlessClients = [...clients, ...clients];

  return (
    <section className='relative mt-2 overflow-hidden'>
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
            <div key={i} className='flex justify-center items-center mx-10'>
              <img
                src={src}
                alt={`Client ${i + 1}`}
                className='h-20 w-auto object-contain'
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default ClientSection2;

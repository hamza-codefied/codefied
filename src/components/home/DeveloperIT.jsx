import { GoArrowUpRight } from 'react-icons/go';
import { IoIosArrowDroprightCircle } from 'react-icons/io';

export const Developerit = () => {
  const features = [
    {
      title: 'Mobile App Development',
      desc: 'Transform your ideas into powerful mobile applications with our expert development team. We create high-quality, user-friendly apps for both iOS and Android platforms, ensuring a seamless experience for your users.',
    },
    {
      title: 'Web App Development',
      desc: 'Our web app development services are designed to provide robust, scalable, and secure applications that drive business growth. From simple websites to complex web-based applications, we deliver solutions that meet your unique requirements.',
    },
    {
      title: 'Augmented Reality (AR)',
      desc: 'Enhance the real world with our Augmented Reality solutions. AR overlays digital content onto the physical environment, providing interactive and immersive experiences that captivate users.',
    },
  ];

  return (
    <section className='py-10 px-10 xl:px-0 max-w-5xl mx-auto'>
      <div className='grid md:grid-cols-2 gap-12 items-start'>
        {/* 🧭 Left Column */}
        <div className='space-y-5'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
            Developer/IT
          </h2>
          <p className='text-black w-full sm:w-[400px]'>
            From concept to launch, we cover the entire spectrum of digital
            innovation.
          </p>
          <a
            href='#'
            className='text-[#d4575b] font-semibold hover:underline transition flex items-center justify-start gap-2'
          >
            <span>Get Free Consultation</span>
            <GoArrowUpRight className='text-black mt-[2px]' />
          </a>
        </div>

        {/* ⚙️ Right Column */}
        <div className='space-y-8'>
          {features.map((item, index) => (
            <div key={index} className='bg-white '>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                {item.title}
              </h3>
              <p className='text-gray-600 mb-3'>{item.desc}</p>
              <a
                href='#'
                className='text-[#d4575b] flex items-center gap-1 underline font-medium'
              >
                Learn More
                <IoIosArrowDroprightCircle className='text-black' />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Developerit;

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@components/ui/Button';
import quote_icon from '@/images/quote_icon.png';
import avatar from '@/images/avatar.png';
import coins from '@/images/coins.png';
import { formatText } from '@/utils/textFormatter';

export default function TestimonialsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <>
      <section
        ref={ref}
        className='container m-auto xl-custom:px-0 flex flex-col lg:flex-row items-stretch justify-between pt-[30px] md:pt-[70px] lg:pt-[120px] mt-10 gap-5 xl:gap-0'
      >
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className='w-full lg:w-1/2 max-w-[466px]'
        >
          <h2 className='font-semibold text-[30px] md:text-[40px] lg:text-[50px] leading-normal text-[#000] mb-[12px]'>
            People are Saying <br className='hidden lg:block' /> About{' '}
            <span className='text-[#d4575b]'>Codefied</span>
          </h2>
          <p
            className='text-black w-full leading-relaxed text-[14px] md:text-[18px] font-medium mb-[20px] md:mb-[42px]'
            style={{
              lineHeight: '30px',
            }}
          >
            {formatText(
              'Everything you need to accept payments and grow your money or manage it anywhere on the planet.'
            )}
          </p>

          <img
            className='mb-[20px] md:mb-[40px]'
            src={quote_icon}
            alt='testimoniol'
            style={{
              width: 'clamp(35px, 4vw, 45px)',
              height: 'clamp(30px, 3.5vw, 38px)',
              objectFit: 'contain',
            }}
          />

          <blockquote
            className='text-black w-full mb-[12px] text-[14px] md:text-[18px] font-medium'
            style={{
              lineHeight: '30px',
            }}
          >
            {formatText(
              "I am very helped by this e-wallet application. My days are very easy to use this app and it's very helpful in my life — even I can pay in a short time."
            )}
          </blockquote>
          <p className='mb-[20px] md:mb-[40px]'>😍</p>

          <p
            className='text-[#D4575B] mb-[20px] md:mb-[40px] text-[14px] md:text-[18px] font-medium'
            style={{
              fontSize: 'clamp(14px, 2vw, 18px)',
              fontWeight: 500,
            }}
          >
            Aria Zhenario
          </p>

          {/* Avatars */}
          <div className='flex items-center space-x-4 flex-wrap'>
            <img
              src='https://i.pravatar.cc/40?img=1'
              alt='user'
              className='rounded-full border-2 border-white shadow'
              style={{
                width: 'clamp(50px, 6vw, 66px)',
                height: 'clamp(50px, 6vw, 66px)',
                objectFit: 'cover',
              }}
            />
            <img
              src='https://i.pravatar.cc/40?img=2'
              alt='user'
              className='rounded-full border-2 border-white shadow'
              style={{
                width: 'clamp(50px, 6vw, 66px)',
                height: 'clamp(50px, 6vw, 66px)',
                objectFit: 'cover',
              }}
            />
            <img
              src='https://i.pravatar.cc/40?img=3'
              alt='user'
              className='rounded-full border-2 border-white shadow'
              style={{
                width: 'clamp(50px, 6vw, 66px)',
                height: 'clamp(50px, 6vw, 66px)',
                objectFit: 'cover',
              }}
            />
            <img
              src='https://i.pravatar.cc/40?img=4'
              alt='user'
              className='rounded-full border-2 border-white shadow'
              style={{
                width: 'clamp(50px, 6vw, 66px)',
                height: 'clamp(50px, 6vw, 66px)',
                objectFit: 'cover',
              }}
            />
            <img
              src={avatar}
              alt='user'
              className='rounded-full border-2 border-white shadow'
              style={{
                width: 'clamp(50px, 6vw, 66px)',
                height: 'clamp(50px, 6vw, 66px)',
                objectFit: 'cover',
              }}
            />
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='w-full lg:w-1/2 flex items-stretch'
        >
          <div
            className='bg-[#121212] text-white rounded-2xl shadow-lg px-8 lg:px-18 w-full pb-8 lg:h-[588px]'
            style={{
              maxWidth: 'clamp(100%, 50vw, 612px)',
              width: '100%',
            }}
          >
            <div
              className='text-center'
              style={{
                paddingTop: 'clamp(20px, 3vw, 40px)',
                paddingBottom: 'clamp(5px, 1vw, 10px)',
              }}
            >
              <img
                src={coins}
                alt='Get Started Icon'
                className='mx-auto'
                style={{
                  width: 'clamp(50px, 6vw, 72px)',
                  height: 'clamp(60px, 7vw, 86px)',
                  objectFit: 'contain',
                  marginBottom: 'clamp(5px, 1vw, 10px)',
                }}
              />
              <h3
                className='font-medium'
                style={{
                  fontSize: 'clamp(20px, 3vw, 30px)',
                  fontWeight: 500,
                  marginBottom: 'clamp(5px, 1vw, 10px)',
                }}
              >
                Get Started
              </h3>
            </div>

            <form className='space-y-4'>
              <div>
                <label className='block text-sm mb-1 text-gray-300'>
                  Email
                </label>
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='w-full p-3 rounded-lg text-gray-900 focus:outline-none h-[50px]'
                />
              </div>

              <div>
                <label className='block text-sm mb-1 text-gray-300'>
                  Message
                </label>
                <textarea
                  placeholder='What are you say?'
                  className='w-full p-3 rounded-lg text-gray-900 focus:outline-none min-h-[80px]'
                  rows={3}
                />
              </div>

              <Button
                className='w-full bg-[#d4575b] text-white rounded-lg transition-all h-[60px]'
                style={{
                  fontSize: 'clamp(14px, 1.5vw, 16px)',
                  fontWeight: 600,
                  paddingTop: 'clamp(16px, 2vw, 22px)',
                  paddingBottom: 'clamp(16px, 2vw, 22px)',
                  marginBottom: 'clamp(5px, 1vw, 10px)',
                }}
              >
                Request Demo
              </Button>

              <p
                className='text-end text-gray-400'
                style={{
                  fontSize: 'clamp(12px, 1.5vw, 14px)',
                  fontWeight: 500,
                }}
              >
                or{' '}
                <span className='text-white font-medium'>Start Free Trial</span>
              </p>
            </form>
          </div>
        </motion.div>
      </section>
      <div className='h-[60px] md:h-[100px] lg:h-[250px]'></div>
    </>
  );
}

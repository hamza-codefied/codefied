
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@components/ui/Button';

export default function TestimonialsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      ref={ref}
      className='w-full bg-white py-16 px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-start justify-between gap-10 mt-5 sm:mt-10 max-w-6xl mx-auto'
    >
      {/* Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className='w-full md:w-1/2'
      >
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-gray-900'>
          People are Saying <br /> About{' '}
          <span className='text-[#d4575b]'>Codefied</span>
        </h2>
        <p className='text-black text-sm w-full lg:w-[400px] mb-8 leading-relaxed'>
          Everything you need to accept payments and grow your money or manage
          it anywhere on the planet.
        </p>

        <img className='mb-8' src='src/images/quote.png' alt='testimoniol' />

        <blockquote className='text-black text-sm w-full lg:w-[400px]'>
          I am very helped by this e-wallet application. My days are very easy
          to use this app and it’s very helpful in my life — even I can pay in a
          short time.
        </blockquote>
        <p className='mb-6'>😍</p>

        <p className='font-semibold text-[#d4575b]'>_ Aria Zhenario</p>

        {/* Avatars */}
        <div className='flex items-center mt-8 space-x-4'>
          <img
            src='https://i.pravatar.cc/40?img=1'
            alt='user'
            className='w-10 h-10 rounded-full border-2 border-white shadow'
          />
          <img
            src='https://i.pravatar.cc/40?img=2'
            alt='user'
            className='w-10 h-10 rounded-full border-2 border-white shadow'
          />
          <img
            src='https://i.pravatar.cc/40?img=3'
            alt='user'
            className='w-10 h-10 rounded-full border-2 border-white shadow'
          />
          <img
            src='https://i.pravatar.cc/40?img=4'
            alt='user'
            className='w-10 h-10 rounded-full border-2 border-white shadow'
          />
          <img
            src='src/images/avatar.png'
            alt='user'
            className='w-10 h-10 rounded-full border-2 border-white shadow'
          />
        </div>
      </motion.div>

      {/* Right Side */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className='w-full md:w-1/2'
      >
        <div className='bg-[#121212]/90 text-white rounded-2xl shadow-lg p-8 w-full max-w-md mx-auto'>
          <div className='text-center mb-6'>
            <img
              src='src/images/coins.png'
              alt='Get Started Icon'
              className='mx-auto mb-2'
            />
            <h3 className='text-2xl font-semibold'>Get Started</h3>
          </div>

          <form className='space-y-4'>
            <div>
              <label className='block text-sm mb-1 text-gray-300'>Email</label>
              <input
                type='email'
                placeholder='Enter your email'
                className='w-full p-3 rounded-lg text-gray-900 focus:outline-none'
              />
            </div>

            <div>
              <label className='block text-sm mb-1 text-gray-300'>
                Message
              </label>
              <textarea
                placeholder='What are you say?'
                className='w-full p-3 rounded-lg text-gray-900 focus:outline-none'
                rows={3}
              />
            </div>

            <Button className='w-full bg-[#d4575b]/80 hover:bg-[#d4575b] text-white rounded-lg py-4 transition-all'>
              Request Demo
            </Button>

            <p className='text-end text-gray-400 text-xs'>
              or{' '}
              <span className='text-white font-medium'>Start Free Trial</span>
            </p>
          </form>
        </div>
      </motion.div>
    </section>
  );
}

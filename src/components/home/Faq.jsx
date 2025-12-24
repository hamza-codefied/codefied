import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMinus, FiPlus, FiSearch } from 'react-icons/fi';
import { formatText } from '@/utils/textFormatter';

const faqs = [
  {
    question: 'How long does it take to complete a web development project?',
    answer:
      "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.",
  },
  {
    question:
      'Can you create a responsive website design that looks great on all devices?',
    answer:
      'Yes! We design all our websites with responsiveness in mind, ensuring they look and perform beautifully across all devices — desktops, tablets, and mobiles.',
  },
  {
    question: 'Can you handle large-scale mobile app development projects?',
    answer:
      'Absolutely! Our experienced developers specialize in scalable mobile solutions using modern frameworks and robust architectures.',
  },
  {
    question:
      'What digital marketing strategies do you employ to drive website traffic?',
    answer:
      'We use SEO, PPC, social media marketing, and content marketing strategies to drive quality traffic and enhance brand visibility.',
  },
  {
    question:
      'Do you offer maintenance services for websites and apps developed by other companies?',
    answer:
      'Yes, we provide ongoing support and maintenance services, even for products not originally built by our team.',
  },
  {
    question: 'Can you integrate third-party APIs into our mobile app?',
    answer:
      'Yes, our team has extensive experience integrating a wide variety of third-party APIs, including payment gateways, analytics, and CRMs.',
  },
  {
    question:
      'How do you ensure the security of user data in your web applications?',
    answer:
      'We follow strict security best practices, including data encryption, secure authentication, and regular vulnerability assessments.',
  },
  {
    question: 'How do you ensure cross-platform compatibility for mobile apps?',
    answer:
      'We use advanced frameworks like React Native and Flutter to ensure seamless performance across iOS and Android platforms.',
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFAQ = index => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const oddFaqs = filteredFaqs
    .map((faq, originalIndex) => ({ faq, originalIndex }))
    .filter((_, i) => i % 2 === 0); // odd positions: 0,2,4...

  const evenFaqs = filteredFaqs
    .map((faq, originalIndex) => ({ faq, originalIndex }))
    .filter((_, i) => i % 2 === 1); // even positions: 1,3,5...

  return (
    <div className='container m-auto xl-custom:px-0'>
      <section id='faqs' className='w-full bg-white mt-5 sm:mt-[60px] md:mt-[100px] xl:mt-[150px] mb-10 md:mb-[140px]'>
        <div className=''>
          {/* Heading */}
          <div className='text-center '>
            <h2 class='text-[24px] sm:text-[30px] lg:text-[48px] font-semibold'>
              <span class='text-[#d4575b]'>Frequently</span> Asked Questions
            </h2>
            <p class='text-[#808080] mt-2 md:mt-[20px] mb-[20px] text-sm lg:text-[18px] font-normal max-w-4xl mx-auto'>
              {formatText(
                "Got questions? We've got answers. Check out our frequently asked questions section to find valuable insights into our processes, pricing, and more. Transparency is at the core of our client interactions."
              )}
            </p>
          </div>

          {/* Search bar */}
          <div className='relative max-w-2xl mx-auto md:mb-[30px] lg:mb-[60px]'>
            <FiSearch className='absolute top-1/2 left-4 transform -translate-y-1/2 text-[#666]' />
            <input
              type='text'
              placeholder='Search'
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className='w-full border-2 border-[#262626] rounded-full py-2.5 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[#d4575b] transition'
            />
          </div>

          {/* all FAQS */}
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-[50px]'>
            {/* FAQ grid 1*/}
            <div className=''>
              {oddFaqs.map(({ faq, originalIndex }, index) => (
                <div
                  key={originalIndex}
                  className={`border-b border-gray-800 ${index === oddFaqs.length - 1 ? 'lg:border-b-0' : ''} py-[34px] cursor-pointer`}
                >
                  <div
                    onClick={() => toggleFAQ(originalIndex)}
                    className='flex items-start w-full gap-[30px]'
                  >
                    <div className='flex-1 flex flex-col'>
                      <h3 className='text-sm lg:text-[20px] font-semibold text-[#5D5D5D]'>
                        {formatText(faq.question)}
                      </h3>
                      {/* Answer Animation */}
                      <AnimatePresence>
                        {activeIndex === originalIndex && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                          >
                            <p className='text-sm lg:text-[18px] font-normal text-[#8C8C8C] mt-3 leading-relaxed'>
                              {formatText(faq.answer)}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <div className='flex-shrink-0 bg-black text-white rounded-full w-[40px] h-[40px] lg:w-[52px] lg:h-[52px] flex items-center justify-center'>
                      {activeIndex === originalIndex ? (
                        <FiMinus className='text-[20px] lg:text-[28px]' />
                      ) : (
                        <FiPlus className='text-[20px] lg:text-[28px]' />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ grid 2 */}
            <div className=''>
              {evenFaqs.map(({ faq, originalIndex }, index) => (
                <div
                  key={originalIndex}
                  className={`${index !== evenFaqs.length - 1 ? 'border-b border-gray-800' : ''} py-[34px] cursor-pointer`}
                >
                  <div
                    onClick={() => toggleFAQ(originalIndex)}
                    className='flex items-start w-full gap-[40px]'
                  >
                    <div className='flex-1 flex flex-col'>
                      <h3 className='text-sm lg:text-[20px] font-semibold text-[#5D5D5D]'>
                        {formatText(faq.question)}
                      </h3>
                      {/* Answer Animation */}
                      <AnimatePresence>
                        {activeIndex === originalIndex && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                          >
                            <p className='text-sm lg:text-[18px] font-normal text-[#8C8C8C] mt-3 leading-relaxed'>
                              {formatText(faq.answer)}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <div className='flex-shrink-0 bg-black text-white rounded-full w-[40px] h-[40px] lg:w-[52px] lg:h-[52px] flex items-center justify-center'>
                      {activeIndex === originalIndex ? (
                        <FiMinus className='text-[20px] lg:text-[28px]' />
                      ) : (
                        <FiPlus className='text-[20px] lg:text-[28px]' />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

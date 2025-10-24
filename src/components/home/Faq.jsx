'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMinus, FiPlus, FiSearch } from 'react-icons/fi';

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

  return (
    <section className='w-full py-16 bg-white px-4 sm:px-6 lg:px-20'>
      <div className='max-w-3xl mx-auto'>
        {/* Heading */}
        <div className='text-center mb-10'>
          <h2 className='text-3xl md:text-4xl font-semibold'>
            <span className='text-[#d4575b]'>Frequently</span> Asked Questions
          </h2>
          <p className='text-gray-400 mt-3 text-sm max-w-3xl mx-auto'>
            Got questions? We've got answers. Check out our frequently asked
            questions section to find valuable insights into our processes,
            pricing, and more. Transparency is at the core of our client
            interactions.
          </p>
        </div>

        {/* Search bar */}
        <div className='relative max-w-md mx-auto mb-12'>
          <FiSearch className='absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-900' />
          <input
            type='text'
            placeholder='Search'
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className='w-full border border-black rounded-full py-2.5 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[#d4575b] transition'
          />
        </div>

        {/* FAQ grid */}
        <div className='grid md:grid-cols-2 gap-x-10 gap-y-6'>
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className='border-b border-gray-800 pb-4 cursor-pointer'
            >
              <div
                onClick={() => toggleFAQ(index)}
                className='flex justify-between items-center'
              >
                <h3 className='text-sm w-full sm:w-[350px] font-medium text-gray-600 pr-3'>
                  {faq.question}
                </h3>
                <div className='flex-shrink-0 bg-black text-white rounded-full p-1 flex items-center justify-center'>
                  {activeIndex === index ? (
                    <FiMinus className='text-lg' />
                  ) : (
                    <FiPlus className='text-lg' />
                  )}
                </div>
              </div>

              {/* Answer Animation */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <p className='text-gray-400 text-sm mt-3 leading-relaxed'>
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

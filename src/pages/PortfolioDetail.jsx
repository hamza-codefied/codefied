import { useParams, useNavigate } from 'react-router-dom';
import { getProjectBySlug, getSimilarProjects } from '@/data/projectData';
import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';
import { GoArrowUpRight } from 'react-icons/go';
import { HiOutlineCog6Tooth } from 'react-icons/hi2';
import { HiOutlineBolt } from 'react-icons/hi2';
import { HiOutlineStar } from 'react-icons/hi2';
import shadeImage from '@/images/blogdetailshade.png';
import TestimonialsSection from '@/components/global/TestimoniolSection';
import ClientSection2 from '@/components/home/ClientSection2';

const PortfolioDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug);
  const similarProjects = project ? getSimilarProjects(project.id, 3) : [];

  if (!project) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold mb-4'>Project Not Found</h1>
          <button
            onClick={() => navigate('/portfolio')}
            className='text-[#d4575b] hover:text-[#c04a4e] font-medium'
          >
            ← Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen'>
      {/* Hero Section with Background Image */}
      <section
        className='relative w-full flex items-center justify-center py-12 md:py-16 lg:py-20 2xl:py-24'
        style={{
          backgroundImage: `url(${shadeImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='container m-auto px-4 sm:px-6 md:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center'
          >
            {/* Project Title */}
            <h1 className='text-3xl sm:text-4xl text-start md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6'>
              {project.title.split(' ').map((word, index, words) => {
                // Apply gradient to second word (index 1) and last word
                const isSecondWord = index === 1;
                const isLastWord = index === words.length - 1;
                const hasGradient = isSecondWord || isLastWord;

                if (hasGradient) {
                  return (
                    <span
                      key={index}
                      style={{
                        background:
                          'linear-gradient(to right, #1a1a1a 0%, #d4575b 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      {word}
                      {index < words.length - 1 ? ' ' : ''}
                    </span>
                  );
                } else {
                  return (
                    <span key={index} style={{ color: '#000000' }}>
                      {word}
                      {index < words.length - 1 ? ' ' : ''}
                    </span>
                  );
                }
              })}
            </h1>

            {/* Subtitle */}
            <p className='text-start text-base sm:text-lg md:text-xl lg:text-4xl text-gray-700'>
              {project.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className='container m-auto px-4 sm:px-6 md:px-8 py-8 md:py-12'>
        {/* Back Button */}
        <button
          onClick={() => navigate('/portfolio')}
          className='flex items-center gap-2 text-[#d4575b] hover:text-[#c04a4e] font-medium mb-8 transition-colors'
        >
          <FiArrowLeft />
          <span>Back to Portfolio</span>
        </button>

        {/* About Project Section */}
        {project.aboutSectionImages && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='mb-12 md:mb-16'
          >
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-8 md:mb-12'>
              {/* Left Side - Text Content with Project Image */}
              <div className='space-y-6'>
                <h2 className='text-3xl sm:text-5xl font-semibold text-black'>
                  About Project
                </h2>
                <p className='text-base sm:text-lg lg:text-2xl text-gray-700 leading-relaxed'>
                  {project.aboutProject}
                </p>
              </div>

              {/* Right Side - Top Image: Project Image */}
              <div>
                <div className='relative'>
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className='w-full h-auto object-cover rounded-lg'
                  />
                </div>
              </div>
            </div>

            {/* Bottom Grid - Remaining Images */}
            <div className='space-y-4 md:space-y-6'>
              {/* First Row: 2 images - 1/3 and 2/3 width */}
              <div className='grid grid-cols-3 gap-4 md:gap-6'>
                {/* First image - 1/3 width - blog10 */}
                <div className='col-span-1'>
                  <div className='overflow-hidden rounded-2xl'>
                    <img
                      src={project.aboutSectionImages.phone1}
                      alt='Project Image'
                      className='w-full h-[350px] object-cover'
                    />
                  </div>
                </div>

                {/* Second image - 2/3 width - blog11 */}
                <div className='col-span-2'>
                  <div className='overflow-hidden rounded-2xl'>
                    <img
                      src={project.aboutSectionImages.laptopDark}
                      alt='Project Image'
                      className='w-full h-[350px] object-cover'
                    />
                  </div>
                </div>
              </div>

              {/* Second Row: 3 images - 50%, 25%, 25% */}
              <div className='grid grid-cols-4 gap-4 md:gap-6'>
                {/* First image - 50% width - blog13 */}
                <div className='col-span-2'>
                  <div className='overflow-hidden rounded-2xl'>
                    <img
                      src={project.aboutSectionImages.laptopColored}
                      alt='Project Image'
                      className='w-full h-[350px] object-cover'
                    />
                  </div>
                </div>

                {/* Second image - 25% width - blog14 */}
                <div className='col-span-1'>
                  <div className='overflow-hidden rounded-2xl'>
                    <img
                      src={project.aboutSectionImages.logo}
                      alt='Project Image'
                      className='w-full h-[350px] object-cover'
                    />
                  </div>
                </div>

                {/* Third image - 25% width - blog12 */}
                <div className='col-span-1'>
                  <div className='overflow-hidden rounded-2xl'>
                    <img
                      src={project.aboutSectionImages.phone2}
                      alt='Project Image'
                      className='w-full h-[350px] object-cover'
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* The Problem Section */}
      </div>

      {/* The Problem Section - Full Width */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='w-full py-12 md:py-16 mb-12 md:mb-16'
        style={{
          backgroundImage: `url(${shadeImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='container m-auto px-4 sm:px-6 md:px-8'>
          <div className='text-center'>
            <h2 className='text-3xl sm:text-5xl font-semibold text-black mb-6 md:mb-8'>
              The Problem
            </h2>
            <p className='text-base sm:text-lg lg:text-xl text-gray-700'>
              {project.theProblem}
            </p>
          </div>
        </div>
      </motion.section>

      {/* The Codefied Solution Section */}
      {project.codefiedSolution && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='w-full py-12 md:py-16 mb-12 md:mb-16 bg-white'
        >
          <div className='container m-auto px-4 sm:px-6 md:px-8'>
            {/* Title */}
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 md:mb-6'>
              The Codefied Solution
            </h2>

            {/* Intro Paragraph */}
            <p className='text-base sm:text-lg text-gray-700 mb-8 md:mb-12'>
              {project.codefiedSolution.intro}
            </p>

            {/* Content Grid */}
            <div className='grid grid-cols-1 lg:grid-cols-2 justify-between'>
              {/* Left Side - Laptop Image */}

              <div className='overflow-hidden'>
                <img
                  src={project.codefiedSolution.laptopImage}
                  alt='Solution Preview'
                  className='w-full h-[475px]'
                />
              </div>

              {/* Right Side - Solutions */}
              <div className='space-y-4 flex flex-col justify-center h-full'>
                {project.codefiedSolution.solutions.map((solution, index) => {
                  // Icon mapping
                  const getIcon = () => {
                    switch (solution.icon) {
                      case 'gear':
                        return (
                          <HiOutlineCog6Tooth className='w-8 h-8 text-[#d4575b]' />
                        );
                      case 'lightning':
                        return (
                          <HiOutlineBolt className='w-8 h-8 text-[#d4575b]' />
                        );
                      case 'star':
                        return (
                          <HiOutlineStar className='w-8 h-8 text-[#d4575b]' />
                        );
                      default:
                        return null;
                    }
                  };

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className='flex gap-4'
                    >
                      {/* Icon */}
                      <div className='flex-shrink-0'>{getIcon()}</div>

                      {/* Content */}
                      <div className='flex-1'>
                        <h3 className='text-xl sm:text-2xl font-semibold text-black mb-2 md:mb-3'>
                          {solution.title}
                        </h3>
                        <p className='text-sm sm:text-base text-gray-700 leading-relaxed'>
                          {solution.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.section>
      )}

      <div className='py-10'>
        <h2 className='text-3xl sm:text-4xl font-semibold text-black mb-6 md:mb-8 text-center'>
          Technology Used
        </h2>
        <ClientSection2 />
      </div>

      <div className='py-10'>
        <TestimonialsSection />
      </div>
    </div>
  );
};

export default PortfolioDetail;

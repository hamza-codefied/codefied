import { useParams, useNavigate } from 'react-router-dom';
import { getBlogBySlug, getSimilarBlogs } from '@/data/blogData';
import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';
import shadeImage from '@/images/blogdetailshade.png';
import TestimonialsSection from '@/components/global/TestimoniolSection';
import { formatText } from '@/utils/textFormatter';

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const blog = getBlogBySlug(slug);
  const similarBlogs = blog ? getSimilarBlogs(blog.id, 3) : [];

  if (!blog) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold mb-4'>Blog Not Found</h1>
          <button
            onClick={() => navigate('/blogs')}
            className='text-[#d4575b] hover:text-[#c04a4e] font-medium'
          >
            ← Back to Blogs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen'>
      {/* Hero Section with Background Image */}
      <section
        className='relative w-full flex items-center justify-center py-8 2xl:py-20'
        style={{
          backgroundImage: `url(${shadeImage})`,
          backgroundSize: '',
          backgroundPosition: '',
          backgroundRepeat: '',
        }}
      >
        {/* Centered Black Div */}
        <div className='container m-auto xl:px-0'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='bg-black rounded-2xl p-5 md:rounded-3xl overflow-hidden'
          >
            {/* Blog Image - Full Width */}
            <div className='w-full overflow-hidden rounded-lg'>
              <img
                src={blog.heroImage}
                alt={blog.title}
                className='w-full h-64 object-cover'
              />
            </div>

            {/* Content Section */}
            <div className='pt-5 text-white'>
              {/* Blog Label */}
              <div className='mb-4'>
                <span className='text-sm md:text-base font-medium text-[#d4575b]'>
                  Blog
                </span>
              </div>

              {/* Blog Title */}
              <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold mb-5'>
                {formatText(blog.title)}
              </h1>

              {/* Description */}
              <p className='text-sm sm:text-base text-gray-600 mb-5 leading-relaxed'>
                {formatText(blog.intro)}
              </p>

              {/* Author and Date */}
              <div className='flex items-center gap-2 text-xs sm:text-sm md:text-base text-gray-600'>
                <span>{blog.author}</span>
                <span style={{ fontFamily: 'Arial' }}>|</span>

                <span>{blog.date}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className='container m-auto xl:px-0 py-8 md:py-12'>
        {/* Back Button */}
        <button
          onClick={() => navigate('/blogs')}
          className='flex items-center gap-2 text-[#d4575b] hover:text-[#c04a4e] font-medium mb-8 transition-colors'
        >
          <FiArrowLeft />
          <span>Back to Blogs</span>
        </button>

        {/* Article Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-3xl sm:text-4xl font-semibold text-black mb-6 md:mb-8'
        >
          {formatText(blog.title)}
        </motion.h1>

        {/* Introduction */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='text-base sm:text-lg text-gray-700 mb-8 md:mb-12 leading-relaxed'
        >
          {formatText(blog.content.introduction)}
        </motion.p>

        {/* Content Sections */}
        <div className='space-y-8 md:space-y-12 mb-12 md:mb-16'>
          {blog.content.sections.map((section, index) => (
            <motion.div
              key={section.number}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className=''
            >
              <div className='flex gap-2 mb-4'>
                <div
                  className='text-2xl font-bold text-black flex-shrink-0'
                  style={{ fontFamily: 'Arial, sans-serif' }}
                >
                  {section.number}.
                </div>
                <h2 className='text-xl sm:text-2xl font-bold text-black'>
                  {section.title}
                </h2>
              </div>
              <p className='text-base sm:text-lg text-gray-700'>
                {section.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tags Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className='mb-12 md:mb-16'
        >
          <h3 className='text-xl sm:text-2xl font-bold text-black mb-4 md:mb-6'>
            Tags
          </h3>
          <div className='flex flex-wrap gap-3 md:gap-4'>
            {blog.tags.map((tag, index) => (
              <span
                key={index}
                className='px-4 py-1 border border-[#d4575b] text-gray-700 rounded-3xl text-sm md:text-base font-medium hover:bg-gray-200 transition-colors cursor-pointer'
              >
                {formatText(tag)}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Similar Blogs Section - Full Width */}
      {similarBlogs.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className='w-full py-12 md:py-16'
          style={{
            backgroundImage: `url(${shadeImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className='container m-auto xl:px-0'>
            <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6 md:mb-8'>
              Similar Blogs
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
              {similarBlogs.map(similarBlog => (
                <motion.div
                  key={similarBlog.id}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  onClick={() => navigate(`/blogs/${similarBlog.slug}`)}
                  className='bg-transparent rounded-xl overflow-hidden cursor-pointer  transition-all duration-300'
                >
                  <div className='h-64 overflow-hidden'>
                    <img
                      src={similarBlog.image}
                      alt={similarBlog.title}
                      className='w-full h-full'
                    />
                  </div>
                  <div className='pt-3'>
                    <h4 className='text-lg md:text-xl font-semibold text-black mb-2 line-clamp-2'>
                      {formatText(similarBlog.title)}
                    </h4>
                    <p className='text-sm md:text-base text-gray-600 mb-3 line-clamp-2'>
                      {formatText(similarBlog.description)}
                    </p>
                    <p className='text-sm text-gray-400'>
                      {blog.author}{' '}
                      <span style={{ fontFamily: 'Arial' }}>|</span> {blog.date}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      <TestimonialsSection />
    </div>
  );
};

export default BlogDetail;

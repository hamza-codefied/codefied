import { Linkedin, Instagram, Twitter } from 'lucide-react';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaLinkedin, FaTwitter } from 'react-icons/fa6';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '@/images/logo.png';

export const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Helper function to handle navigation with scroll to section
  const handleSectionClick = (path, sectionId) => {
    if (location.pathname !== path) {
      // Navigate with hash - ScrollToTop will handle the scrolling
      navigate(`${path}#${sectionId}`);
    } else {
      // Already on the page, update hash and scroll immediately
      window.history.pushState(null, '', `#${sectionId}`);

      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(() => {
        setTimeout(() => {
          const element =
            document.getElementById(sectionId) ||
            document.querySelector(`#${sectionId}`);
          if (element) {
            const yOffset = -100; // Adjust for header height
            const y =
              element.getBoundingClientRect().top +
              window.pageYOffset +
              yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 50);
      });
    }
  };

  return (
    <footer className='bg-white overflow-x-hidden w-full'>
      <div
        className='container mx-auto xl-custom:px-0 flex flex-col justify-between'
        style={{
          paddingTop: 'clamp(30px, 4vw, 40px)',
          paddingBottom: 'clamp(20px, 3vw, 30px)',
        }}
      >
        {/* Top Section */}
        <div
          className='flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0'
          // style={{ marginBottom: 'clamp(20px, 3vw, 30px)' }}
        >
          {/* Logo - Large C. */}
          <Link to='/' className='flex items-center'>
            <span
              className='font-bold text-black'
              style={{
                fontSize: 'clamp(48px, 8vw, 72px)',
                lineHeight: 1,
              }}
            >
              C.
            </span>
          </Link>

          {/* Social Media */}
          <div className='flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4'>
            <span
              className='text-[#000] font-medium'
              style={{ fontSize: 'clamp(12px, 1.8vw, 16px)' }}
            >
              Follow Us On Social Media
            </span>
            <div className='flex space-x-3'>
              <a
                href='https://www.linkedin.com/company/codefied-co'
                target='_blank'
                className='p-3 bg-[#d4575b] text-white rounded-full hover:bg-[#b84549] transition-all duration-200 flex items-center justify-center'
                style={{
                  width: 'clamp(40px, 5vw, 48px)',
                  height: 'clamp(40px, 5vw, 48px)',
                }}
              >
                <FaLinkedin size={20} className='text-white' />
              </a>
              <a
                href='https://www.instagram.com/codefied/'
                target='_blank'
                className='p-3 bg-[#d4575b] text-white rounded-full hover:bg-[#b84549] transition-all duration-200 flex items-center justify-center'
                style={{
                  width: 'clamp(40px, 5vw, 48px)',
                  height: 'clamp(40px, 5vw, 48px)',
                }}
              >
                <FaInstagramSquare size={20} className='text-white' />
              </a>
              {/* <a
                href='#'
                className='p-3 bg-[#d4575b] text-white rounded-full hover:bg-[#b84549] transition-all duration-200 flex items-center justify-center'
                style={{
                  width: 'clamp(40px, 5vw, 48px)',
                  height: 'clamp(40px, 5vw, 48px)',
                }}
              >
                <FaTwitter size={20} className='text-white' />
              </a> */}
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div
          className='flex flex-wrap justify-between mt-2 md:mt-0 border-t border-gray-200'
          style={{
            paddingTop: 'clamp(20px, 3vw, 30px)',
            marginBottom: 'clamp(20px, 3vw, 30px)',
            gap: 'clamp(16px, 3vw, 40px)',
          }}
        >
          {/* Home */}
          <div>
            <h3
              className='font-semibold text-[#d4575b] mb-4'
              style={{
                fontSize: 'clamp(14px, 2vw, 18px)',
                fontWeight: 600,
                marginBottom: 'clamp(12px, 2vw, 24px)',
              }}
            >
              Home
            </h3>
            <ul
              className='space-y-2'
              style={{ fontSize: 'clamp(14px, 2vw, 18px)', fontWeight: 400 }}
            >
              <li>
                <button
                  onClick={() => handleSectionClick('/', 'developer-it')}
                  className='relative hover:text-[#d4575b] transition-colors cursor-pointer text-left group'
                >
                  <span className='relative'>
                    Developer
                    <span style={{ fontFamily: 'Arial, sans-serif' }}>/</span>IT
                    <span className='absolute bottom-0 left-0 w-0 h-[2px] bg-[#d4575b] transition-all duration-300 group-hover:w-full'></span>
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionClick('/', 'products')}
                  className='relative hover:text-[#d4575b] transition-colors cursor-pointer text-left group'
                >
                  <span className='relative'>
                    Products
                    <span className='absolute bottom-0 left-0 w-0 h-[2px] bg-[#d4575b] transition-all duration-300 group-hover:w-full'></span>
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionClick('/', 'projects')}
                  className='relative hover:text-[#d4575b] transition-colors cursor-pointer text-left group'
                >
                  <span className='relative'>
                    Projects
                    <span className='absolute bottom-0 left-0 w-0 h-[2px] bg-[#d4575b] transition-all duration-300 group-hover:w-full'></span>
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionClick('/', 'blogs')}
                  className='relative hover:text-[#d4575b] transition-colors cursor-pointer text-left group'
                >
                  <span className='relative'>
                    Blogs
                    <span className='absolute bottom-0 left-0 w-0 h-[2px] bg-[#d4575b] transition-all duration-300 group-hover:w-full'></span>
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionClick('/', 'faqs')}
                  className='relative hover:text-[#d4575b] transition-colors cursor-pointer text-left group'
                >
                  <span className='relative'>
                    FAQ
                    <span style={{ fontFamily: 'Arial, sans-serif' }}>'</span>s
                    <span className='absolute bottom-0 left-0 w-0 h-[2px] bg-[#d4575b] transition-all duration-300 group-hover:w-full'></span>
                  </span>
                </button>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3
              className='font-semibold text-[#d4575b] mb-4'
              style={{
                fontSize: 'clamp(14px, 2vw, 18px)',
                fontWeight: 600,
                marginBottom: 'clamp(12px, 2vw, 24px)',
              }}
            >
              About Us
            </h3>
            <ul
              className='space-y-2'
              style={{ fontSize: 'clamp(14px, 2vw, 18px)', fontWeight: 400 }}
            >
              <li>
                <button
                  onClick={() => handleSectionClick('/about', 'vision-mission')}
                  className='relative hover:text-[#d4575b] transition-colors cursor-pointer text-left group'
                >
                  <span className='relative'>
                    Our Vision{' '}
                    <span style={{ fontFamily: 'Arial, sans-serif' }}>&</span>{' '}
                    Mission
                    <span className='absolute bottom-0 left-0 w-0 h-[2px] bg-[#d4575b] transition-all duration-300 group-hover:w-full'></span>
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionClick('/about', 'our-journey')}
                  className='relative hover:text-[#d4575b] transition-colors cursor-pointer text-left group'
                >
                  <span className='relative'>
                    Our Journey
                    <span className='absolute bottom-0 left-0 w-0 h-[2px] bg-[#d4575b] transition-all duration-300 group-hover:w-full'></span>
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionClick('/about', 'why-choose-us')}
                  className='relative hover:text-[#d4575b] transition-colors cursor-pointer text-left group'
                >
                  <span className='relative'>
                    Why Choose Us
                    <span className='absolute bottom-0 left-0 w-0 h-[2px] bg-[#d4575b] transition-all duration-300 group-hover:w-full'></span>
                  </span>
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3
              className='font-semibold text-[#d4575b] mb-4'
              style={{
                fontSize: 'clamp(14px, 2vw, 18px)',
                fontWeight: 600,
                marginBottom: 'clamp(12px, 2vw, 24px)',
              }}
            >
              Services
            </h3>
            <ul
              className='space-y-2'
              style={{ fontSize: 'clamp(14px, 2vw, 18px)', fontWeight: 400 }}
            >
              <li>
                <Link
                  to='/services/360-web-solution'
                  className='relative hover:text-[#d4575b] transition-colors group inline-block'
                >
                  <span className='relative'>
                    360 Web Solution
                    <span className='absolute bottom-0 left-0 w-0 h-[2px] bg-[#d4575b] transition-all duration-300 group-hover:w-full'></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to='/services/web-development'
                  className='relative hover:text-[#d4575b] transition-colors group inline-block'
                >
                  <span className='relative'>
                    Developer
                    <span style={{ fontFamily: 'Arial, sans-serif' }}>/</span>IT
                    <span className='absolute bottom-0 left-0 w-0 h-[2px] bg-[#d4575b] transition-all duration-300 group-hover:w-full'></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to='/services/back-office'
                  className='relative hover:text-[#d4575b] transition-colors group inline-block'
                >
                  <span className='relative'>
                    Back Office
                    <span className='absolute bottom-0 left-0 w-0 h-[2px] bg-[#d4575b] transition-all duration-300 group-hover:w-full'></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to='/services/community-management'
                  className='relative hover:text-[#d4575b] transition-colors group inline-block'
                >
                  <span className='relative'>
                    Community Management
                    <span className='absolute bottom-0 left-0 w-0 h-[2px] bg-[#d4575b] transition-all duration-300 group-hover:w-full'></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to='/services/strategic-partnership'
                  className='relative hover:text-[#d4575b] transition-colors group inline-block'
                >
                  <span className='relative'>
                    Strategic Partnership
                    <span className='absolute bottom-0 left-0 w-0 h-[2px] bg-[#d4575b] transition-all duration-300 group-hover:w-full'></span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Careers */}
          <div>
            <h3
              className='font-semibold text-[#d4575b] mb-4'
              style={{
                fontSize: 'clamp(14px, 2vw, 18px)',
                fontWeight: 600,
                marginBottom: 'clamp(12px, 2vw, 24px)',
              }}
            >
              Careers
            </h3>
            <ul
              className='space-y-2'
              style={{ fontSize: 'clamp(14px, 2vw, 18px)', fontWeight: 400 }}
            >
              <li>
                <button
                  onClick={() => handleSectionClick('/career', 'search-jobs')}
                  className='relative hover:text-[#d4575b] transition-colors cursor-pointer text-left group'
                >
                  <span className='relative'>
                    Search Jobs
                    <span className='absolute bottom-0 left-0 w-0 h-[2px] bg-[#d4575b] transition-all duration-300 group-hover:w-full'></span>
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    handleSectionClick('/career', 'available-jobs')
                  }
                  className='relative hover:text-[#d4575b] transition-colors cursor-pointer text-left group'
                >
                  <span className='relative'>
                    Available Jobs
                    <span className='absolute bottom-0 left-0 w-0 h-[2px] bg-[#d4575b] transition-all duration-300 group-hover:w-full'></span>
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionClick('/career', 'success-count')}
                  className='relative hover:text-[#d4575b] transition-colors cursor-pointer text-left group'
                >
                  <span className='relative'>
                    Success Count
                    <span className='absolute bottom-0 left-0 w-0 h-[2px] bg-[#d4575b] transition-all duration-300 group-hover:w-full'></span>
                  </span>
                </button>
              </li>
            </ul>
          </div>

          {/* Blogs */}
          <div>
            <h3
              className='font-semibold text-[#d4575b] mb-4'
              style={{
                fontSize: 'clamp(14px, 2vw, 18px)',
                fontWeight: 600,
                marginBottom: 'clamp(12px, 2vw, 24px)',
              }}
            >
              Blogs
            </h3>
            <ul
              className='space-y-2'
              style={{ fontSize: 'clamp(14px, 2vw, 18px)', fontWeight: 400 }}
            >
              <li>
                <Link
                  to='/blogs'
                  className='relative hover:text-[#d4575b] transition-colors group inline-block'
                >
                  <span className='relative'>
                    All Blogs
                    <span className='absolute bottom-0 left-0 w-0 h-[2px] bg-[#d4575b] transition-all duration-300 group-hover:w-full'></span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3
              className='font-semibold text-[#d4575b] mb-4'
              style={{
                fontSize: 'clamp(14px, 2vw, 18px)',
                fontWeight: 600,
                marginBottom: 'clamp(12px, 2vw, 24px)',
              }}
            >
              Contact Us
            </h3>
            <ul
              className='space-y-2'
              style={{ fontSize: 'clamp(14px, 2vw, 18px)', fontWeight: 400 }}
            >
              <li>
                <button
                  onClick={() => handleSectionClick('/contact', 'contact-form')}
                  className='relative hover:text-[#d4575b] transition-colors cursor-pointer text-left group'
                >
                  <span className='relative'>
                    Contact Form
                    <span className='absolute bottom-0 left-0 w-0 h-[2px] bg-[#d4575b] transition-all duration-300 group-hover:w-full'></span>
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className='border-t border-gray-200 flex  items-center justify-center text-gray-600'
          style={{
            paddingTop: 'clamp(16px, 2.5vw, 24px)',
            fontSize: 'clamp(11px, 1.5vw, 14px)',
          }}
        >
          <div>
            <p>@2026 Codefied. All Rights Reserved.</p>
          </div>

          

          {/* <div className='flex flex-wrap items-center justify-center gap-3 md:gap-4'>
            <a href='#' className='hover:text-[#d4575b] transition-colors'>
              Privacy Policy
            </a>
            <a href='#' className='hover:text-[#d4575b] transition-colors'>
              Terms <span style={{ fontFamily: 'Arial, sans-serif' }}>&</span>{' '}
              Conditions
            </a>
            <a href='#' className='hover:text-[#d4575b] transition-colors'>
              Cookie Policy
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

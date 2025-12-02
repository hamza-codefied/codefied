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
    <footer className='bg-white text-gray-700 container mx-auto px-4 sm:px-6 md:px-8 overflow-x-hidden max-w-full'>
      <div className='w-full max-w-full py-10'>
        {/* Top Section */}
        <div className='flex flex-col md:flex-row md:items-start md:justify-between pb-8 gap-2'>
          {/* Logo */}
          <Link to='/'>
            <img src={logo} className='w-16 ' alt='Logo' />
          </Link>

          {/* Social Media */}
          <div className='flex items-center space-x-3 text-sm text-gray-700'>
            <span className='text-base'>Follow Us On Social Media</span>
            <div className='flex space-x-3'>
              <a
                href='#'
                className='p-4 bg-black text-white rounded-full hover:bg-gray-700 transition'
              >
                <FaLinkedin size={24} className='text-[#d4575b]' />
              </a>
              <a
                href='#'
                className='p-4 bg-black text-white rounded-full hover:bg-gray-700 transition'
              >
                <FaInstagramSquare size={24} className='text-[#d4575b]' />
              </a>
              <a
                href='#'
                className='p-4 bg-black text-white rounded-full hover:bg-gray-700 transition'
              >
                <FaTwitter size={24} className='text-[#d4575b]' />
              </a>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 border-t border-gray-200 pt-8'>
          {/* Home */}
          <div>
            <h3 className='font-semibold text-[#d4575b] mb-6'>Home</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <button
                  onClick={() => handleSectionClick('/', 'developer-it')}
                  className='hover:text-[#d4575b] transition cursor-pointer text-left'
                >
                  Developer
                  <span style={{ fontFamily: 'Arial, sans-serif' }}>/</span>IT
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionClick('/', 'products')}
                  className='hover:text-[#d4575b] transition cursor-pointer text-left'
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionClick('/', 'projects')}
                  className='hover:text-[#d4575b] transition cursor-pointer text-left'
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionClick('/', 'blogs')}
                  className='hover:text-[#d4575b] transition cursor-pointer text-left'
                >
                  Blogs
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionClick('/', 'faqs')}
                  className='hover:text-[#d4575b] transition cursor-pointer text-left'
                >
                  FAQ<span style={{ fontFamily: 'Arial, sans-serif' }}>'</span>s
                </button>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className='font-semibold text-[#d4575b] mb-6'>About Us</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <button
                  onClick={() => handleSectionClick('/about', 'vision-mission')}
                  className='hover:text-[#d4575b] transition cursor-pointer text-left'
                >
                  Our Vision{' '}
                  <span style={{ fontFamily: 'Arial, sans-serif' }}>&</span>{' '}
                  Mission
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionClick('/about', 'our-journey')}
                  className='hover:text-[#d4575b] transition cursor-pointer text-left'
                >
                  Our Journey
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionClick('/about', 'why-choose-us')}
                  className='hover:text-[#d4575b] transition cursor-pointer text-left'
                >
                  Why Choose Us
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className='font-semibold text-[#d4575b] mb-6'>Services</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link
                  to='/services/business-solutions'
                  className='hover:text-[#d4575b] transition'
                >
                  Business Solutions
                </Link>
              </li>
              <li>
                <Link
                  to='/services/web-development'
                  className='hover:text-[#d4575b] transition'
                >
                  Developer
                  <span style={{ fontFamily: 'Arial, sans-serif' }}>/</span>IT
                </Link>
              </li>
              <li>
                <Link
                  to='/services/back-office'
                  className='hover:text-[#d4575b] transition'
                >
                  Back Office
                </Link>
              </li>
              <li>
                <Link
                  to='/services/community-management'
                  className='hover:text-[#d4575b] transition'
                >
                  Community Management
                </Link>
              </li>
              <li>
                <Link
                  to='/services/strategic-partnership'
                  className='hover:text-[#d4575b] transition'
                >
                  Strategic Partnership
                </Link>
              </li>
            </ul>
          </div>

          {/* Careers */}
          <div>
            <h3 className='font-semibold text-[#d4575b] mb-6'>Careers</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <button
                  onClick={() => handleSectionClick('/career', 'search-jobs')}
                  className='hover:text-[#d4575b] transition cursor-pointer text-left'
                >
                  Search Jobs
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    handleSectionClick('/career', 'available-jobs')
                  }
                  className='hover:text-[#d4575b] transition cursor-pointer text-left'
                >
                  Available Jobs
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionClick('/career', 'success-count')}
                  className='hover:text-[#d4575b] transition cursor-pointer text-left'
                >
                  Success Count
                </button>
              </li>
            </ul>
          </div>

          {/* Blogs */}
          <div>
            <h3 className='font-semibold text-[#d4575b] mb-6'>Blogs</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link to='/blogs' className='hover:text-[#d4575b] transition'>
                  All Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className='font-semibold text-[#d4575b] mb-6'>Contact Us</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <button
                  onClick={() => handleSectionClick('/contact', 'contact-form')}
                  className='hover:text-[#d4575b] transition cursor-pointer text-left'
                >
                  Contact Form
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-gray-200 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600'>
          <div>
            <p>@2023 Codefied. All Rights Reserved.</p>
          </div>

          <div>
            <span>Version 1.0</span>
          </div>

          <div className='flex flex-wrap items-center justify-center mt-3 md:mt-0 space-x-3'>
            <a href='#' className='hover:text-[#E74C3C]'>
              Privacy Policy
            </a>
            <a href='#' className='hover:text-[#E74C3C]'>
              Terms <span style={{ fontFamily: 'Arial, sans-serif' }}>&</span>{' '}
              Conditions
            </a>
            <a href='#' className='hover:text-[#E74C3C]'>
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

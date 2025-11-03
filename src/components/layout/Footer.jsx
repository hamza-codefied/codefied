import { Linkedin, Instagram, Twitter } from 'lucide-react';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaLinkedin, FaTwitter } from 'react-icons/fa6';
import logo from '@/images/logo.png';

export const Footer = () => {
  return (
    <footer className='bg-white text-gray-700'>
      <div className='w-full px-4 sm:px-6 lg:px-8 py-10'>
        {/* Top Section */}
        <div className='flex flex-col md:flex-row md:items-start md:justify-between mb-2 gap-2'>
          {/* Logo */}
          <img src={logo} className='w-12 h-10' alt='Logo' />

          {/* Social Media */}
          <div className='flex items-center space-x-3 text-sm text-gray-700'>
            <span className='text-xs'>Follow Us On Social Media</span>
            <div className='flex space-x-3'>
              <a
                href='#'
                className='p-2 bg-black text-white rounded-full hover:bg-gray-700 transition'
              >
                <FaLinkedin size={18} className='text-[#d4575b]' />
              </a>
              <a
                href='#'
                className='p-2 bg-black text-white rounded-full hover:bg-gray-700 transition'
              >
                <FaInstagramSquare size={18} className='text-[#d4575b]' />
              </a>
              <a
                href='#'
                className='p-2 bg-black text-white rounded-full hover:bg-gray-700 transition'
              >
                <FaTwitter size={18} className='text-[#d4575b]' />
              </a>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 border-t border-gray-200 pt-8'>
          {/* Home */}
          <div>
            <h3 className='font-semibold text-[#d4575b] mb-3'>Home</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <a href='#'>Benefits</a>
              </li>
              <li>
                <a href='#'>Our Testimonials</a>
              </li>
              <li>
                <a href='#'>Partners</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className='font-semibold text-[#d4575b] mb-3'>Services</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <a href='#'>Web Design</a>
              </li>
              <li>
                <a href='#'>Website Development</a>
              </li>
              <li>
                <a href='#'>App Development</a>
              </li>
              <li>
                <a href='#'>Digital Marketing</a>
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className='font-semibold text-[#d4575b] mb-3'>Projects</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <a href='#'>ABC Tech Solutions</a>
              </li>
              <li>
                <a href='#'>GreenEarth Eco Store</a>
              </li>
              <li>
                <a href='#'>HealthTech Innovations</a>
              </li>
              <li>
                <a href='#'>GlobalTech Solutions</a>
              </li>
              <li>
                <a href='#'>TechGuru Inc.</a>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className='font-semibold text-[#d4575b] mb-3'>About Us</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <a href='#'>Our Team</a>
              </li>
              <li>
                <a href='#'>Achievements</a>
              </li>
              <li>
                <a href='#'>Awards</a>
              </li>
            </ul>
          </div>

          {/* Careers */}
          <div>
            <h3 className='font-semibold text-[#d4575b] mb-3'>Careers</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <a href='#'>Job Openings</a>
              </li>
              <li>
                <a href='#'>Benefits & Perks</a>
              </li>
              <li>
                <a href='#'>Employee Referral</a>
              </li>
            </ul>
          </div>

          {/* Blogs */}
          <div>
            <h3 className='font-semibold text-[#d4575b] mb-3'>Blogs</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <a href='#'>Our Blogs</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-gray-200 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600'>
          <p>@2023 Digitax. All Rights Reserved.</p>
          <div className='flex flex-wrap items-center justify-center mt-3 md:mt-0 space-x-3'>
            <span>Version 1.0</span>
            <a href='#' className='hover:text-[#E74C3C]'>
              Privacy Policy
            </a>
            <a href='#' className='hover:text-[#E74C3C]'>
              Terms & Conditions
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

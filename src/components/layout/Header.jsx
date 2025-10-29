import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@components/ui/Button';
import logo from '@/images/logo.png';
import { GoGlobe } from 'react-icons/go';
import { FaArrowDownLong } from 'react-icons/fa6';
import { MegaMenu } from './MegaMenu';
import { ProductMegaMenu } from './ProductMegaMenu';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isProductMegaMenuOpen, setIsProductMegaMenuOpen] = useState(false);
  const location = useLocation();

  const serviceDropdown = [
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'UI/UX Design', href: '/services/ui-ux' },
    { name: 'Mobile App Development', href: '/services/mobile' },
    { name: 'Cloud Solutions', href: '/services/cloud' },
  ];

  const navigation = [
    { name: 'Home', href: '/' },
    {
      name: 'Services',
      megaMenu: true, // services mega menu
      dropdown: serviceDropdown,
    },
    {
      name: 'Products',
      megaMenu: 'product', // products mega menu
      dropdown: [
        { name: 'SaaS Platform', href: '/products/saas' },
        { name: 'Mobile App', href: '/products/app' },
        { name: 'API Suite', href: '/products/api' },
      ],
    },
    { name: 'About', href: '/about' },
    { name: 'Career', href: '/career' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const isActive = path => location.pathname === path;

  return (
    <header className='bg-white shadow-sm border-b relative z-50'>
      <div className='w-full mx-auto px-4 sm:px-6 lg:px-32'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <Link to='/' className='flex items-center'>
              <img src={logo} alt='Codefied Logo' className='h-10' />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden lg:flex space-x-6 py-2 relative'>
            {navigation.map(item => (
              <div
                key={item.name}
                className='relative'
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {/* === Services Mega Menu === */}
                {item.megaMenu === true ? (
                  <div className='relative'>
                    <button
                      type='button'
                      onClick={() => {
                        setIsMegaMenuOpen(prev => !prev);
                        setIsProductMegaMenuOpen(false);
                      }}
                      className={`px-3 mt-[-5px] py-2 rounded-md text-sm font-medium flex items-center gap-1 transition-colors ${
                        isMegaMenuOpen
                          ? 'text-white bg-[#d4575b] bg-opacity-90'
                          : 'text-black hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className={`h-4 w-4 transform transition-transform ${
                          isMegaMenuOpen ? 'rotate-180' : ''
                        }`}
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M19 9l-7 7-7-7'
                        />
                      </svg>
                    </button>
                    <MegaMenu
                      isOpen={isMegaMenuOpen}
                      onClose={() => setIsMegaMenuOpen(false)}
                    />
                  </div>
                ) : item.megaMenu === 'product' ? (
                  /* === Products Mega Menu === */
                  <div className='relative'>
                    <button
                      type='button'
                      onClick={() => {
                        setIsProductMegaMenuOpen(prev => !prev);
                        setIsMegaMenuOpen(false);
                      }}
                      className={`px-3 mt-[-5px] py-2 rounded-md text-sm font-medium flex items-center gap-1 transition-colors ${
                        isProductMegaMenuOpen
                          ? 'text-white bg-[#d4575b] bg-opacity-90'
                          : 'text-black hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className={`h-4 w-4 transform transition-transform ${
                          isProductMegaMenuOpen ? 'rotate-180' : ''
                        }`}
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M19 9l-7 7-7-7'
                        />
                      </svg>
                    </button>
                    <ProductMegaMenu
                      isOpen={isProductMegaMenuOpen}
                      onClose={() => setIsProductMegaMenuOpen(false)}
                    />
                  </div>
                ) : !item.dropdown ? (
                  /* === Normal Link === */
                  <Link
                    to={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium mt-[30px] transition-colors ${
                      isActive(item.href)
                        ? 'text-white bg-[#d4575b] bg-opacity-90'
                        : 'text-black hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  /* === Small Dropdown (like About, Career, etc) === */
                  <>
                    <button
                      type='button'
                      onMouseEnter={() => setOpenDropdown(item.name)}
                      className={`px-3 py-2 mt-[-5px] rounded-md text-sm font-medium flex items-center gap-1 transition-colors ${
                        openDropdown === item.name
                          ? 'text-white bg-[#d4575b] bg-opacity-90'
                          : 'text-black hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-4 w-4'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M19 9l-7 7-7-7'
                        />
                      </svg>
                    </button>

                    {openDropdown === item.name && (
                      <div className='absolute top-full left-0 mt-[2px] w-44 bg-white border rounded-lg shadow-lg py-2'>
                        {item.dropdown.map(sub => (
                          <Link
                            key={sub.name}
                            to={sub.href}
                            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#d4575b]'
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className='hidden lg:flex items-center space-x-2'>
            <GoGlobe className='text-2xl' />
            <FaArrowDownLong className='text-2xl' />
          </div>

          {/* Mobile Menu Button */}
          <div className='lg:hidden'>
            <Button
              variant='ghost'
              size='sm'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='p-2'
            >
              <svg
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='lg:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t'>
              {navigation.map(item =>
                item.megaMenu ? (
                  <div key={item.name} className='pl-1'>
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === item.name ? null : item.name
                        )
                      }
                      className='w-full text-left px-3 py-2 rounded-md text-base font-medium text-black hover:text-[#d4575b] hover:bg-gray-50 flex justify-between items-center'
                    >
                      {item.name}
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className={`h-4 w-4 transform transition-transform ${
                          openDropdown === item.name ? 'rotate-180' : ''
                        }`}
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M19 9l-7 7-7-7'
                        />
                      </svg>
                    </button>
                    {openDropdown === item.name && (
                      <div className='ml-4 border-l border-gray-200'>
                        {item.dropdown.map(sub => (
                          <Link
                            key={sub.name}
                            to={sub.href}
                            className='block px-3 py-2 text-gray-600 hover:text-[#d4575b] hover:bg-gray-50'
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : !item.dropdown ? (
                  <Link
                    key={item.name}
                    to={item.href || '#'}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-[#d4575b]'
                        : 'text-black hover:text-[#d4575b] hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <div key={item.name} className='pl-1'>
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === item.name ? null : item.name
                        )
                      }
                      className='w-full text-left px-3 py-2 rounded-md text-base font-medium text-black hover:text-[#d4575b] hover:bg-gray-50 flex justify-between items-center'
                    >
                      {item.name}
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className={`h-4 w-4 transform transition-transform ${
                          openDropdown === item.name ? 'rotate-180' : ''
                        }`}
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M19 9l-7 7-7-7'
                        />
                      </svg>
                    </button>
                    {openDropdown === item.name && (
                      <div className='ml-4 border-l border-gray-200'>
                        {item.dropdown.map(sub => (
                          <Link
                            key={sub.name}
                            to={sub.href}
                            className='block px-3 py-2 text-gray-600 hover:text-[#d4575b] hover:bg-gray-50'
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

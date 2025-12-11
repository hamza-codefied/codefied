import { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@components/ui/Button';
import logo from '@/images/logo.png';
import { GoGlobe } from 'react-icons/go';
import { FaArrowDownLong } from 'react-icons/fa6';
import { MegaMenu } from './MegaMenu';
import { ProductMegaMenu } from './ProductMegaMenu';
import products from '@/data/productData';
import { formatText } from '@/utils/textFormatter';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isProductMegaMenuOpen, setIsProductMegaMenuOpen] = useState(false);
  const [hoveredNavItem, setHoveredNavItem] = useState(null);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const location = useLocation();
  const megaMenuTimeoutRef = useRef(null);
  const productMegaMenuTimeoutRef = useRef(null);
  const locationDropdownRef = useRef(null);

  useEffect(() => {
    if (typeof document === "undefined") return;

    // Disable body scroll when either mega menu or mobile menu is open
    if (isMegaMenuOpen || isProductMegaMenuOpen || isMenuOpen) {
      // Store current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable body scroll when menus are closed
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';

      // Restore scroll position
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    return () => {
      // Cleanup: restore scroll on unmount
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';

      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    };
  }, [isMegaMenuOpen, isProductMegaMenuOpen, isMenuOpen]);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (megaMenuTimeoutRef.current) {
        clearTimeout(megaMenuTimeoutRef.current);
      }
      if (productMegaMenuTimeoutRef.current) {
        clearTimeout(productMegaMenuTimeoutRef.current);
      }
    };
  }, []);

  // Close location dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        locationDropdownRef.current && 
        !locationDropdownRef.current.contains(event.target) &&
        !event.target.closest('[data-location-dropdown]')
      ) {
        setIsLocationDropdownOpen(false);
      }
    };

    if (isLocationDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLocationDropdownOpen]);

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

  // Get button position for portal positioning
  const [buttonRect, setButtonRect] = useState(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (isLocationDropdownOpen && buttonRef.current) {
      const updatePosition = () => {
        const rect = buttonRef.current.getBoundingClientRect();
        setButtonRect({
          top: rect.bottom + 8,
          right: window.innerWidth - rect.right,
        });
      };
      updatePosition();
      window.addEventListener('scroll', updatePosition);
      window.addEventListener('resize', updatePosition);
      return () => {
        window.removeEventListener('scroll', updatePosition);
        window.removeEventListener('resize', updatePosition);
      };
    }
  }, [isLocationDropdownOpen]);

  return (
    <>
    <header className={`bg-white shadow-sm border-b relative z-50 h-[80px] max-w-full ${
      isMegaMenuOpen || isProductMegaMenuOpen ? 'overflow-hidden' : 'overflow-x-hidden'
    }`}>
      <div className='container h-full m-auto px-4 sm:px-6 md:px-8 w-full'>
        <div className='w-full flex justify-center h-full max-w-full'>
          <div className='flex justify-between items-center w-full max-w-full'>
            {/* Logo */}
            <div className='flex-shrink-0'>
              <Link to='/' className='flex items-center'>
                <img src={logo} alt='Codefied Logo' className='h-8 sm:h-9 md:h-10' />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className='hidden lg:flex space-x-6 py-2 relative items-center'>
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
                        onMouseEnter={() => {
                          if (megaMenuTimeoutRef.current) {
                            clearTimeout(megaMenuTimeoutRef.current);
                            megaMenuTimeoutRef.current = null;
                          }
                          setHoveredNavItem(item.name);
                          setIsMegaMenuOpen(true);
                          setIsProductMegaMenuOpen(false);
                        }}
                        onMouseLeave={() => {
                          megaMenuTimeoutRef.current = setTimeout(() => {
                            setHoveredNavItem(null);
                            setIsMegaMenuOpen(false);
                          }, 300);
                        }}
                        className={`px-3 py-2 text-[18px] font-medium flex items-center gap-1 transition-all duration-300 ${hoveredNavItem === item.name
                          ? 'text-[#d4575b]'
                          : 'text-black hover:text-[#d4575b]'
                          }`}
                      >
                        {item.name}
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className={`h-4 w-4 transform transition-transform duration-300 ${hoveredNavItem === item.name ? 'rotate-180' : ''
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
                      {/* Invisible bridge to prevent flicker when moving mouse to overlay */}
                      {isMegaMenuOpen && (
                        <div 
                          className='absolute left-[-20px] right-[-20px] top-full h-6 bg-transparent z-50'
                          onMouseEnter={() => {
                            if (megaMenuTimeoutRef.current) {
                              clearTimeout(megaMenuTimeoutRef.current);
                              megaMenuTimeoutRef.current = null;
                            }
                          }}
                        />
                      )}
                      <MegaMenu
                        isOpen={isMegaMenuOpen}
                        onClose={() => {
                          if (megaMenuTimeoutRef.current) {
                            clearTimeout(megaMenuTimeoutRef.current);
                            megaMenuTimeoutRef.current = null;
                          }
                          setHoveredNavItem(null);
                          setIsMegaMenuOpen(false);
                        }}
                        onMouseEnter={() => {
                          if (megaMenuTimeoutRef.current) {
                            clearTimeout(megaMenuTimeoutRef.current);
                            megaMenuTimeoutRef.current = null;
                          }
                          setHoveredNavItem(item.name);
                          setIsMegaMenuOpen(true);
                        }}
                        onMouseLeave={() => {
                          megaMenuTimeoutRef.current = setTimeout(() => {
                            setHoveredNavItem(null);
                            setIsMegaMenuOpen(false);
                          }, 300);
                        }}
                      />
                    </div>
                  ) : item.megaMenu === 'product' ? (
                    /* === Products Mega Menu === */
                    <div className='relative'>
                      <button
                        type='button'
                        onMouseEnter={() => {
                          if (productMegaMenuTimeoutRef.current) {
                            clearTimeout(productMegaMenuTimeoutRef.current);
                            productMegaMenuTimeoutRef.current = null;
                          }
                          setHoveredNavItem(item.name);
                          setIsProductMegaMenuOpen(true);
                          setIsMegaMenuOpen(false);
                        }}
                        onMouseLeave={() => {
                          productMegaMenuTimeoutRef.current = setTimeout(() => {
                            setHoveredNavItem(null);
                            setIsProductMegaMenuOpen(false);
                          }, 300);
                        }}
                        className={`px-3 py-2 text-[18px] font-medium flex items-center gap-1 transition-all duration-300 ${hoveredNavItem === item.name
                          ? 'text-[#d4575b]'
                          : 'text-black hover:text-[#d4575b]'
                          }`}
                      >
                        {item.name}
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className={`h-4 w-4 transform transition-transform duration-300 ${hoveredNavItem === item.name ? 'rotate-180' : ''
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
                      {/* Invisible bridge to prevent flicker when moving mouse to overlay */}
                      {isProductMegaMenuOpen && (
                        <div 
                          className='absolute left-[-20px] right-[-20px] top-full h-6 bg-transparent z-50'
                          onMouseEnter={() => {
                            if (productMegaMenuTimeoutRef.current) {
                              clearTimeout(productMegaMenuTimeoutRef.current);
                              productMegaMenuTimeoutRef.current = null;
                            }
                          }}
                        />
                      )}
                      <ProductMegaMenu
                        isOpen={isProductMegaMenuOpen}
                        onClose={() => {
                          if (productMegaMenuTimeoutRef.current) {
                            clearTimeout(productMegaMenuTimeoutRef.current);
                            productMegaMenuTimeoutRef.current = null;
                          }
                          setHoveredNavItem(null);
                          setIsProductMegaMenuOpen(false);
                        }}
                        onMouseEnter={() => {
                          if (productMegaMenuTimeoutRef.current) {
                            clearTimeout(productMegaMenuTimeoutRef.current);
                            productMegaMenuTimeoutRef.current = null;
                          }
                          setHoveredNavItem(item.name);
                          setIsProductMegaMenuOpen(true);
                        }}
                        onMouseLeave={() => {
                          productMegaMenuTimeoutRef.current = setTimeout(() => {
                            setHoveredNavItem(null);
                            setIsProductMegaMenuOpen(false);
                          }, 300);
                        }}
                      />
                    </div>
                  ) : !item.dropdown ? (
                    /* === Normal Link === */
                    <Link
                      to={item.href}
                      onMouseEnter={() => {
                        // Clear any pending mega menu timeouts when hovering over normal links
                        if (megaMenuTimeoutRef.current) {
                          clearTimeout(megaMenuTimeoutRef.current);
                          megaMenuTimeoutRef.current = null;
                        }
                        if (productMegaMenuTimeoutRef.current) {
                          clearTimeout(productMegaMenuTimeoutRef.current);
                          productMegaMenuTimeoutRef.current = null;
                        }
                        setIsMegaMenuOpen(false);
                        setIsProductMegaMenuOpen(false);
                        setHoveredNavItem(item.name);
                      }}
                      onMouseLeave={() => setHoveredNavItem(null)}
                      className={`px-3 py-2 text-[18px] font-medium mt-[30px] transition-all duration-300 ${hoveredNavItem === item.name || (isActive(item.href) && !isMegaMenuOpen && !isProductMegaMenuOpen && !hoveredNavItem)
                        ? 'text-[#d4575b]'
                        : 'text-black hover:text-[#d4575b]'
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
                        className={`px-3 py-2 mt-[-5px] text-[18px] font-medium flex items-center gap-1 transition-all duration-300 ${openDropdown === item.name
                          ? 'text-[#d4575b]'
                          : 'text-black hover:text-[#d4575b]'
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
            <div className='hidden lg:flex items-center space-x-2 relative' ref={locationDropdownRef}>
              <button
                ref={buttonRef}
                onClick={() => setIsLocationDropdownOpen(!isLocationDropdownOpen)}
                className='flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer'
                aria-label='Select location'
              >
                <GoGlobe size={24} />
                <FaArrowDownLong className='text-2xl' />
              </button>
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
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className='lg:hidden fixed inset-0 top-[70px] sm:top-[80px] bg-gradient-to-b from-[#fef9f9] via-[#fef5f5] to-[#fef2f2] z-40 overflow-y-auto'
                onClick={(e) => {
                  if (e.target === e.currentTarget) {
                    setIsMenuOpen(false);
                  }
                }}
              >
                {/* Close Button
              <div className='sticky top-0 bg-white/80 backdrop-blur-sm border-b border-gray-200 z-10 flex justify-end p-4'>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className='p-2 rounded-lg bg-white shadow-sm hover:bg-gray-50 transition-colors'
                  aria-label='Close menu'
                >
                  <FaTimes className='h-5 w-5 text-gray-700' />
                </button>
              </div> */}

                {/* Navigation Items */}
                <div className='px-4 sm:px-6 py-6 space-y-2'>
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {/* Services Mega Menu */}
                      {item.megaMenu === true ? (
                        <div className='mb-2'>
                          <button
                            onClick={() =>
                              setOpenDropdown(
                                openDropdown === item.name ? null : item.name
                              )
                            }
                            className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 flex justify-between items-center ${openDropdown === item.name
                              ? 'text-[#d4575b] bg-white shadow-md'
                              : 'text-gray-900 hover:text-[#d4575b] hover:bg-white/50'
                              }`}
                          >
                            <span>{item.name}</span>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className={`h-5 w-5 transform transition-transform duration-200 ${openDropdown === item.name ? 'rotate-180' : ''
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
                          <AnimatePresence>
                            {openDropdown === item.name && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className='mt-2 ml-4 space-y-1 border-l-2 border-[#d4575b]/20 pl-4'
                              >
                                {[
                                  { title: 'Business Solutions', slug: 'business-solutions' },
                                  { title: 'Developer/IT', slug: 'developer-it' },
                                  { title: 'Back Office', slug: 'back-office' },
                                  { title: 'Community Management', slug: 'community-management' },
                                  { title: 'Strategic Partnership', slug: 'strategic-partnership' },
                                ].map((category) => (
                                  <Link
                                    key={category.slug}
                                    to={`/services/${category.slug}`}
                                    className='block px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:text-[#d4575b] hover:bg-white/70 transition-colors'
                                    onClick={() => {
                                      setIsMenuOpen(false);
                                      setOpenDropdown(null);
                                    }}
                                  >
                                    {formatText(category.title)}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : item.megaMenu === 'product' ? (
                        /* Products Mega Menu */
                        <div className='mb-2'>
                          <button
                            onClick={() =>
                              setOpenDropdown(
                                openDropdown === item.name ? null : item.name
                              )
                            }
                            className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 flex justify-between items-center ${openDropdown === item.name
                              ? 'text-[#d4575b] bg-white shadow-md'
                              : 'text-gray-900 hover:text-[#d4575b] hover:bg-white/50'
                              }`}
                          >
                            <span>{item.name}</span>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className={`h-5 w-5 transform transition-transform duration-200 ${openDropdown === item.name ? 'rotate-180' : ''
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
                          <AnimatePresence>
                            {openDropdown === item.name && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className='mt-2 ml-4 space-y-1 border-l-2 border-[#d4575b]/20 pl-4'
                              >
                                {products.map((product) => (
                                  <Link
                                    key={product.slug}
                                    to={`/products/${product.slug}`}
                                    className='block px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:text-[#d4575b] hover:bg-white/70 transition-colors'
                                    onClick={() => {
                                      setIsMenuOpen(false);
                                      setOpenDropdown(null);
                                    }}
                                  >
                                    {formatText(product.title)}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : !item.dropdown ? (
                        /* Regular Links */
                        <Link
                          to={item.href || '#'}
                          className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 ${isActive(item.href)
                            ? 'text-[#d4575b] bg-white shadow-md'
                            : 'text-gray-900 hover:text-[#d4575b] hover:bg-white/50'
                            }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ) : (
                        /* Links with Small Dropdown */
                        <div className='mb-2'>
                          <button
                            onClick={() =>
                              setOpenDropdown(
                                openDropdown === item.name ? null : item.name
                              )
                            }
                            className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 flex justify-between items-center ${openDropdown === item.name
                              ? 'text-[#d4575b] bg-white shadow-md'
                              : 'text-gray-900 hover:text-[#d4575b] hover:bg-white/50'
                              }`}
                          >
                            <span>{item.name}</span>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className={`h-5 w-5 transform transition-transform duration-200 ${openDropdown === item.name ? 'rotate-180' : ''
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
                          <AnimatePresence>
                            {openDropdown === item.name && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className='mt-2 ml-4 space-y-1 border-l-2 border-[#d4575b]/20 pl-4'
                              >
                                {item.dropdown.map((sub) => (
                                  <Link
                                    key={sub.name}
                                    to={sub.href}
                                    className='block px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:text-[#d4575b] hover:bg-white/70 transition-colors'
                                    onClick={() => {
                                      setIsMenuOpen(false);
                                      setOpenDropdown(null);
                                    }}
                                  >
                                    {sub.name}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

    </header>

    {/* Location Dropdown Portal - Rendered outside header for proper z-index */}
    {typeof document !== 'undefined' && isLocationDropdownOpen && buttonRect && createPortal(
      <AnimatePresence>
        <motion.div
          data-location-dropdown
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className='fixed bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden min-w-[180px]'
          style={{ 
            top: `${buttonRect.top}px`,
            right: `${buttonRect.right}px`,
            zIndex: 9999
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => {
              setIsLocationDropdownOpen(false);
              // Handle Karachi selection
            }}
            className='w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors text-black font-medium'
          >
            Karachi
          </button>
          <div className='border-t border-gray-200'></div>
          <button
            onClick={() => {
              setIsLocationDropdownOpen(false);
              // Handle Houston selection
            }}
            className='w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors text-black font-medium'
          >
            Houston
          </button>
        </motion.div>
      </AnimatePresence>,
      document.body
    )}
  </>
  );
};

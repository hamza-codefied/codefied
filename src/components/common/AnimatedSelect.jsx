import React, { useState, useRef, useEffect } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';

const AnimatedSelect = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const dropdownRef = useRef(null);

  const options = [
    { value: 'search', label: 'Search Engine' },
    { value: 'social', label: 'Social Media' },
    { value: 'other', label: 'Other' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = e => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className='relative w-full' ref={dropdownRef}>
      {/* Trigger */}
      <button
        type='button'
        onClick={() => setOpen(prev => !prev)}
        className={`w-full flex justify-between items-center rounded-xl border border-gray-200  p-3 px-4 text-[#828282] font-normal shadow-sm transition-all duration-200 ${
          open
            ? 'border-[#d4575b] ring-2 ring-[#d4575b]/40'
            : 'hover:border-[#d4575b]/50'
        }`}
      >
        <span>
          {selected
            ? options.find(opt => opt.value === selected)?.label
            : 'How did you find us?'}
        </span>
        {/* <svg
          xmlns='http://www.w3.org/2000/svg'
          className={`h-5 w-5 text-[#d4575b] transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth='2'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M19 9l-7 7-7-7'
          />
        </svg> */}
        <IoMdArrowDropdown
          className={`h-6 w-6 text-black transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute left-0 top-full z-20 mt-2 w-full origin-top rounded-xl bg-white shadow-lg ring-1 ring-gray-200 overflow-hidden transition-all duration-200 ease-out ${
          open
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
        }`}
      >
        {options.map(opt => (
          <div
            key={opt.value}
            onClick={() => {
              setSelected(opt.value);
              setOpen(false);
            }}
            className={`px-4 py-3 cursor-pointer transition-colors duration-150 ${
              selected === opt.value
                ? 'bg-[#d4575b]/10 text-[#d4575b]'
                : 'hover:bg-[#d4575b]/10 hover:text-[#d4575b]'
            }`}
          >
            {opt.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedSelect;

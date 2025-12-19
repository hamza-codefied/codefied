import { useState, useRef, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { MdOutlineBarChart } from 'react-icons/md';
import { FaBriefcase } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { BsBarChart } from 'react-icons/bs';

const CareerSearchFilter = ({ filters, setFilters }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const locationRef = useRef(null);
  const jobLevelRef = useRef(null);
  const departmentRef = useRef(null);

  const locations = ['All', 'Onsite', 'Remote', 'Hybrid'];

  const jobLevels = ['All', 'Senior', 'Mid Level', 'Entry Level', 'Executive'];

  const departments = [
    'All',
    'Production',
    'Engineering',
    'Design',
    'Operations',
    'Marketing',
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = event => {
      if (
        locationRef.current &&
        !locationRef.current.contains(event.target) &&
        jobLevelRef.current &&
        !jobLevelRef.current.contains(event.target) &&
        departmentRef.current &&
        !departmentRef.current.contains(event.target)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleFilterSelect = (type, value) => {
    setFilters(prev => ({
      ...prev,
      [type]: value,
    }));
    setOpenDropdown(null);
  };

  const handleSearch = () => {
    // Search is handled automatically via state updates
  };

  const handleSearchChange = e => {
    setFilters(prev => ({
      ...prev,
      searchQuery: e.target.value,
    }));
  };

  return (
    <div id='search-jobs' className='container m-auto xl:px-0'>
      <div className='bg-[#2a2a2a] rounded-lg lg:rounded-full p-3 flex flex-col lg:flex-row gap-3 md:gap-4 items-stretch lg:items-center'>
        {/* Search Input with Button Inside */}
        <div className='flex-1 relative'>
          <FiSearch className='absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-[#fff] w-4 h-4 sm:w-5 sm:h-5 z-10' />
          <input
            type='text'
            placeholder='Search for jobs'
            value={filters.searchQuery}
            onChange={handleSearchChange}
            onKeyPress={e => {
              if (e.key === 'Enter') {
                handleSearch();
              }
            }}
            className='w-full text-white bg-transparent placeholder-[#fff] rounded-full pl-10 sm:pl-12 pr-24 sm:pr-28 py-2.5 sm:py-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#d4575b] focus:ring-opacity-50 border border-[#414141]'
          />
          {/* Search Button Inside Input */}
          <button
            onClick={handleSearch}
            className='absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 bg-[#d4575b] hover:bg-[#c04a4e] text-white rounded-full px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-base transition-colors duration-200 whitespace-nowrap'
          >
            Search
          </button>
        </div>

        {/* Filters */}
        <div className='flex flex-col sm:flex-row gap-3 sm:gap-2 lg:gap-3'>
          {/* Location Filter */}
          <div className='relative' ref={locationRef}>
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === 'location' ? null : 'location')
              }
              className='w-full sm:w-auto border border-[#414141] text-white rounded-full px-4 sm:px-5 py-2.5 sm:py-3 flex items-center gap-2 sm:gap-3 text-sm sm:text-base transition-colors duration-200 min-w-[140px] sm:min-w-[160px] justify-between'
            >
              <div className='flex items-center gap-2 sm:gap-3'>
                <HiOutlineLocationMarker className='text-[#d4575b] w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0' />
                <span className='text-left text-[16px] text-[#fff] font-medium'>
                  {filters.location}
                </span>
              </div>
              <IoIosArrowDown
                className={`text-white w-4 h-4 transition-transform duration-200 flex-shrink-0 ${
                  openDropdown === 'location' ? 'rotate-180' : ''
                }`}
              />
            </button>

            {openDropdown === 'location' && (
              <div className='absolute top-full left-0 right-0 mt-2 bg-[#3a3a3a] rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto'>
                {locations.map(location => (
                  <button
                    key={location}
                    onClick={() => handleFilterSelect('location', location)}
                    className='w-full text-left px-4 sm:px-5 py-2.5 sm:py-3 text-white hover:bg-[#4a4a4a] text-sm sm:text-base transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl'
                  >
                    {location}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Job Level Filter */}
          <div className='relative' ref={jobLevelRef}>
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === 'jobLevel' ? null : 'jobLevel')
              }
              className='w-full sm:w-auto border border-[#414141] text-white rounded-full px-4 sm:px-5 py-2.5 sm:py-3 flex items-center gap-2 sm:gap-3 text-sm sm:text-base transition-colors duration-200 min-w-[140px] sm:min-w-[160px] justify-between'
            >
              <div className='flex items-center gap-2 sm:gap-3'>
                <BsBarChart className='text-[#d4575b] w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0' />
                <span className='text-left text-[16px] text-[#fff] font-medium truncate'>
                  {filters.jobLevel}
                </span>
              </div>
              <IoIosArrowDown
                className={`text-white w-4 h-4 transition-transform duration-200 flex-shrink-0 ${
                  openDropdown === 'jobLevel' ? 'rotate-180' : ''
                }`}
              />
            </button>

            {openDropdown === 'jobLevel' && (
              <div className='absolute top-full left-0 right-0 mt-2 bg-[#3a3a3a] rounded-xl shadow-lg z-50 max-h-60 overflow-y-auto'>
                {jobLevels.map(level => (
                  <button
                    key={level}
                    onClick={() => handleFilterSelect('jobLevel', level)}
                    className='w-full text-left px-4 sm:px-5 py-2.5 sm:py-3 text-white hover:bg-[#4a4a4a] text-sm sm:text-base transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl'
                  >
                    {level}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Department Filter */}
          <div className='relative' ref={departmentRef}>
            <button
              onClick={() =>
                setOpenDropdown(
                  openDropdown === 'department' ? null : 'department'
                )
              }
              className='w-full sm:w-auto border border-[#414141] text-white rounded-full px-4 sm:px-5 py-2.5 sm:py-3 flex items-center gap-2 sm:gap-3 text-sm sm:text-base transition-colors duration-200 min-w-[140px] sm:min-w-[160px] justify-between'
            >
              <div className='flex items-center gap-2 sm:gap-3'>
                {/* <FaBriefcase className='text-[#d4575b] w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0' /> */}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <path
                    d='M11.007 21H9.605C6.02 21 4.228 21 3.114 19.865C2 18.73 2 16.904 2 13.25C2 9.597 2 7.77 3.114 6.635C4.228 5.5 6.02 5.5 9.605 5.5H13.408C16.993 5.5 18.786 5.5 19.9 6.635C20.757 7.508 20.954 8.791 21 11'
                    stroke='#D4575B'
                    stroke-width='1.5'
                    stroke-linecap='round'
                  />
                  <path
                    d='M20.0175 20.023L22.0005 22M21.0535 17.526C21.0614 17.0579 20.976 16.5929 20.8023 16.1581C20.6286 15.7233 20.3701 15.3275 20.0419 14.9937C19.7136 14.6599 19.3222 14.3947 18.8904 14.2138C18.4587 14.0328 17.9952 13.9396 17.527 13.9396C17.0588 13.9396 16.5953 14.0328 16.1636 14.2138C15.7318 14.3947 15.3404 14.6599 15.0121 14.9937C14.6839 15.3275 14.4254 15.7233 14.2517 16.1581C14.078 16.5929 13.9926 17.0579 14.0005 17.526C14.0161 18.451 14.3945 19.3328 15.0541 19.9814C15.7138 20.6301 16.6019 20.9936 17.527 20.9936C18.4521 20.9936 19.3402 20.6301 19.9999 19.9814C20.6595 19.3328 21.0379 18.451 21.0535 17.526Z'
                    stroke='#D4575B'
                    stroke-width='1.5'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M16 5.5L15.9 5.19C15.405 3.65 15.158 2.88 14.569 2.44C13.979 2 13.197 2 11.63 2H11.367C9.802 2 9.019 2 8.43 2.44C7.84 2.88 7.593 3.65 7.098 5.19L7 5.5'
                    stroke='#D4575B'
                    stroke-width='1.5'
                  />
                </svg>
                <span className='text-left text-[16px] text-[#fff] font-medium truncate'>
                  {filters.department}
                </span>
              </div>
              <IoIosArrowDown
                className={`text-white w-4 h-4 transition-transform duration-200 flex-shrink-0 ${
                  openDropdown === 'department' ? 'rotate-180' : ''
                }`}
              />
            </button>

            {openDropdown === 'department' && (
              <div className='absolute top-full left-0 right-0 mt-2 bg-[#3a3a3a] rounded-xl shadow-lg z-50 max-h-60 overflow-y-auto'>
                {departments.map(dept => (
                  <button
                    key={dept}
                    onClick={() => handleFilterSelect('department', dept)}
                    className='w-full text-left px-4 sm:px-5 py-2.5 sm:py-3 text-white hover:bg-[#4a4a4a] text-sm sm:text-base transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl'
                  >
                    {dept}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerSearchFilter;

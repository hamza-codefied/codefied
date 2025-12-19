import { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BsBarChart } from 'react-icons/bs';
import { FaBriefcase } from 'react-icons/fa';

const AvailableJobs = ({ filters }) => {
  const navigate = useNavigate();
  const [isFiltering, setIsFiltering] = useState(false);

  // Add animation styles
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .job-item-enter {
        animation: fadeInUp 0.5s ease-out forwards;
      }
    `;
    if (!document.head.querySelector('style[data-job-animation]')) {
      style.setAttribute('data-job-animation', 'true');
      document.head.appendChild(style);
    }
    return () => {
      const existingStyle = document.head.querySelector('style[data-job-animation]');
      if (existingStyle) {
        document.head.removeChild(existingStyle);
      }
    };
  }, []);

  // Detect filter changes for animation
  useEffect(() => {
    setIsFiltering(true);
    const timer = setTimeout(() => setIsFiltering(false), 500);
    return () => clearTimeout(timer);
  }, [filters]);

  const allJobs = [
    {
      id: 1,
      companyInitial: 'C.',
      title: 'Backend Engineer',
      location: 'Onsite',
      jobLevel: 'Senior',
      department: 'Production',
    },
    {
      id: 2,
      companyInitial: 'C.',
      title: 'Frontend Developer',
      location: 'Remote',
      jobLevel: 'Mid Level',
      department: 'Engineering',
    },
    {
      id: 3,
      companyInitial: 'C.',
      title: (
        <>
          UI <span style={{ fontFamily: 'Arial' }}>/</span> UX Designer
        </>
      ),

      location: 'Onsite',
      jobLevel: 'Mid Level',
      department: 'Design',
    },
    {
      id: 4,
      companyInitial: 'C.',
      title: 'Product Manager',
      location: 'Hybrid',
      jobLevel: 'Senior',
      department: 'Operations',
    },
    {
      id: 5,
      companyInitial: 'C.',
      title: 'DevOps Engineer',
      location: 'Remote',
      jobLevel: 'Senior',
      department: 'Engineering',
    },
    {
      id: 6,
      companyInitial: 'C.',
      title: 'Marketing Manager',
      location: 'Onsite',
      jobLevel: 'Mid Level',
      department: 'Marketing',
    },
  ];

  const handleApply = jobId => {
    navigate(`/career/apply/${jobId}`);
  };

  // Filter jobs based on search query and filters
  const filteredJobs = useMemo(() => {
    return allJobs.filter(job => {
      // Search filter - check if search query matches job title
      let jobTitleText = '';
      if (typeof job.title === 'string') {
        jobTitleText = job.title;
      } else if (job.title?.props?.children) {
        // Handle React element titles (like UI/UX Designer)
        const children = Array.isArray(job.title.props.children)
          ? job.title.props.children
          : [job.title.props.children];
        jobTitleText = children
          .map(child => (typeof child === 'string' ? child : ''))
          .join('');
      }

      const searchMatch =
        !filters.searchQuery ||
        jobTitleText.toLowerCase().includes(filters.searchQuery.toLowerCase());

      // Location filter
      const locationMatch =
        filters.location === 'Location' ||
        filters.location === 'All' ||
        job.location === filters.location;

      // Job Level filter
      const jobLevelMatch =
        filters.jobLevel === 'Job Level' ||
        filters.jobLevel === 'All' ||
        job.jobLevel === filters.jobLevel;

      // Department filter
      const departmentMatch =
        filters.department === 'Department' ||
        filters.department === 'All' ||
        job.department === filters.department;

      return searchMatch && locationMatch && jobLevelMatch && departmentMatch;
    });
  }, [filters, allJobs]);

  return (
    <div id='available-jobs' className='container m-auto xl:px-0 py-8 md:py-12'>
      <h2 className='text-2xl sm:text-3xl md:text-[34px] font-medium text-black mb-6 md:mb-8 text-center md:text-start'>
        Available Jobs
      </h2>

      {filteredJobs.length === 0 ? (
        <div className='text-center py-12'>
          <p className='text-gray-500 text-lg'>
            No jobs found matching your criteria.
          </p>
          <p className='text-gray-400 text-sm mt-2'>
            Try adjusting your search or filters.
          </p>
        </div>
      ) : (
        <div className='space-y-4'>
          {filteredJobs.map((job, index) => (
            <div
              key={`${job.id}-${filters.location}-${filters.jobLevel}-${filters.department}-${filters.searchQuery}`}
              className={`w-full xl:h-[131px] border rounded-xl p-2 cursor-pointer transition-all duration-300 border-gray-200 bg-[#fafafa] hover:border-[#d4575b] hover:bg-red-100 job-item-enter`}
              style={{
                animationDelay: `${index * 0.1}s`,
                opacity: isFiltering ? 0 : 1,
              }}
            >
              <div className='h-full flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6'>
                {/* Company Icon */}
                <div className='bg-black rounded-[22px] w-12 h-12 sm:w-14 sm:h-14 md:w-[111px] md:h-[104px] flex items-center justify-center flex-shrink-0'>
                  <span className='text-white text-lg sm:text-5xl md:text-[60px] font-semibold'>
                    {job.companyInitial}
                  </span>
                </div>

                {/* Job Title */}
                <div className='flex flex-wrap items-center justify-between px-6 w-full gap-4'>
                  <h3 className='text-lg sm:text-xl md:text-2xl text-black font-regular mb-3 mt-0 sm:mt-5 sm:mb-4 w-[250px]'>
                    {job.title}
                  </h3>

                  {/* Location */}
                  <div className='flex flex-col gap-2'>
                    <div className='flex items-center gap-2'>
                      <HiOutlineLocationMarker className='text-[#d4575b] w-5 h-5 flex-shrink-0' />
                      <span className='text-[#828282] text-xs sm:text-sm mt-1'>
                        Location
                      </span>
                    </div>
                    <span className='text-black text-sm sm:text-[24px] font-normal'>
                      {job.location}
                    </span>
                  </div>

                  {/* Job Level */}
                  <div className='flex flex-col gap-2'>
                    <div className='flex items-center gap-2'>
                      <BsBarChart className='text-[#d4575b] w-5 h-5 flex-shrink-0' />
                      <span className='text-[#828282] text-xs sm:text-sm mt-1'>
                        Job Level
                      </span>
                    </div>
                    <span className='text-black text-sm sm:text-[24px] font-normal'>
                      {job.jobLevel}
                    </span>
                  </div>

                  {/* Department */}
                  <div className='flex flex-col gap-2'>
                    <div className='flex items-center gap-2'>
                      <FaBriefcase className='text-[#d4575b] w-5 h-5 flex-shrink-0' />
                      <span className='text-[#828282] text-xs sm:text-sm mt-1'>
                        Department
                      </span>
                    </div>
                    <span className='text-black text-sm sm:text-[24px] font-normal'>
                      {job.department}
                    </span>
                  </div>

                  {/* Apply Button */}
                  <button
                    onClick={e => {
                      e.stopPropagation();
                      handleApply(job.id);
                    }}
                    className='bg-[#d4575b] hover:bg-[#c04a4e] text-white font-normal w-[147px] h-[51px] text-sm sm:text-base transition-colors duration-200 rounded-[50px] p-[10px]'
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AvailableJobs;

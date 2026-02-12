import { useState, useMemo, useEffect } from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BsBarChart } from 'react-icons/bs';
import { FaBriefcase } from 'react-icons/fa';

const AvailableJobs = ({ filters }) => {
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

  const jobLevels = {
    "Senior": "Senior",
    "Mid Level": "Mid Level",
    "Entry Level" : "Entry Level",
    "Executive":"Executive"
  }

  const departments = {
    "Production": "Production",
    "Engineering": "Engineering",
    "Design": "Design",
    "Operations": "Operations",
    "Marketing": "Marketing",
  }
  const allJobs = [
    {
      id: 1,
      companyInitial: 'C.',
      title: 'Product Manager',
      location: 'Onsite',
      jobLevel: jobLevels["Mid Level"],
      department: departments["Production"],
      applyUrl: 'https://jobs.accelerec.com/jobs?job_id=4ba82ec9-9501-4ac5-8e50-a48cccd2876a',
    },
    {
      id: 2,
      companyInitial: 'C.',
      title: 'Backend Engineer',
      location: 'Onsite',
      jobLevel: jobLevels["Mid Level"],
      department: departments["Engineering"],
      applyUrl: 'https://jobs.accelerec.com/jobs?job_id=00318840-43f1-4277-aeac-48635fbad6bf',
    },
    {
      id: 3,
      companyInitial: 'C.',
      title: (
        <>
          AI <span style={{ fontFamily: 'Arial' }}>/</span> ML Engineer
        </>
      ),
      location: 'Onsite',
      jobLevel: jobLevels["Mid Level"],
      department: departments["Design"],
      applyUrl: 'https://jobs.accelerec.com/jobs?job_id=5921cb8c-48a8-449b-bf0b-0ba0c5a85fd3',
    },
    {
      id: 4,
      companyInitial: 'C.',
      title: 'Swift Manager',
      location: 'Onsite',
      jobLevel: 'Senior',
      department: departments["Operations"],
      applyUrl: 'https://jobs.accelerec.com/jobs?job_id=fb10279f-159f-464a-9cc7-0de2391d81d6',
    },
    {
      id: 5,
      companyInitial: 'C.',
      title: 'DevOps Engineer',
      location: 'Onsite',
      jobLevel: jobLevels["Mid Level"],
      department: departments["Engineering"],
      applyUrl: 'https://jobs.accelerec.com/jobs?job_id=f8d8fd33-77b4-458c-80f9-5a78e0177692',
    },
    {
      id: 6,
      companyInitial: 'C.',
      title: 'Quality Assurance Engineer',
      location: 'Onsite',
      jobLevel: 'Entry Level',
      department: departments["Marketing"],
      applyUrl: 'https://jobs.accelerec.com/jobs?job_id=c2c365d8-c769-4412-885d-471a73353e54',
    },
    {
      id: 7,
      companyInitial: 'C.',
      title: 'Flutter Engineer',
      location: 'Onsite',
      jobLevel: jobLevels["Mid Level"],
      department: departments["Marketing"],
      applyUrl: 'https://jobs.accelerec.com/jobs?job_id=1a60ce8e-2347-4eba-8d4b-16ab8e424cff',
    },
    {
      id: 8,
      companyInitial: 'C.',
      title: (
        <>
          AR <span style={{ fontFamily: 'Arial' }}>/</span> VR Developer
        </>
      ),
      location: 'Onsite',
      jobLevel: jobLevels["Mid Level"],
      department: departments["Engineering"],
      applyUrl: 'https://jobs.accelerec.com/jobs?job_id=7227d56d-47b3-416d-8aa6-dd2c991e4041',
    },
    {
      id: 9,
      companyInitial: 'C.',
      title: 'Game Developer',
      location: 'Onsite',
      jobLevel: jobLevels["Mid Level"],
      department: departments["Engineering"],
      applyUrl: 'https://jobs.accelerec.com/jobs?job_id=3a1cacaf-b604-4ac5-acc6-cf10a15b6bf6',
    },
    {
      id: 10,
      companyInitial: 'C.',
      title: 'Project Coordinator',
      location: 'Onsite',
      jobLevel: jobLevels["Mid Level"],
      department: departments["Operations"],
      applyUrl: 'https://jobs.accelerec.com/jobs?job_id=9394036e-8e76-4c5b-8ad8-430d62a6a6ea',
    },
    {
      id: 11,
      companyInitial: 'C.',
      title: 'Intern Project Manager',
      location: 'Onsite',
      jobLevel: jobLevels["Entry Level"],
      department: departments["Engineering"],
      applyUrl: 'https://jobs.accelerec.com/jobs?job_id=61cf3917-cd30-4076-84fe-89459a6968e9',
    },
    {
      id: 12,
      companyInitial: 'C.',
      title: '2D Artist',
      location: 'Onsite',
      jobLevel: jobLevels["Entry Level"],
      department: departments["Design"],
      applyUrl: 'https://jobs.accelerec.com/jobs?job_id=736bf22c-ca31-48bc-9391-86e9b9083e58',
    },
    {
      id: 13,
      companyInitial: 'C.',
      title: 'MERN Stack Developer',
      location: 'Onsite',
      jobLevel: jobLevels["Mid Level"],
      department: departments["Engineering"],
      applyUrl: 'https://jobs.accelerec.com/jobs?job_id=8a7dc246-e9d8-452b-b645-dbd24379497f',
    },
    {
      id: 14,
      companyInitial: 'C.',
      title: '3D Computer Graphics Artist',
      location: 'Onsite',
      jobLevel: jobLevels["Mid Level"],
      department: departments["Design"],
      applyUrl: 'https://jobs.accelerec.com/jobs?job_id=b5eb625e-421c-4b6b-8371-cefa08025ac1',
    },
    {
      id: 15,
      companyInitial: 'C.',
      title: 'Data Analyst',
      location: 'Onsite',
      jobLevel: jobLevels["Mid Level"],
      department: departments["Operations"],
      applyUrl: 'https://jobs.accelerec.com/jobs?job_id=2a72390e-a62b-4b17-8b74-b22f46b1cab8',
    },
  ];

  const handleApply = (job) => {
    if (job.applyUrl) {
      window.open(job.applyUrl, '_blank', 'noopener,noreferrer');
    }
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
    <div id='available-jobs' className='container m-auto xl-custom:px-0 py-8 md:py-12'>
      <h2 className='text-2xl sm:text-3xl lg:text-[34px] font-medium text-black mb-6 md:mb-8 text-center md:text-start'>
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
                <div className='bg-black rounded-[22px] w-12 h-12 sm:w-14 sm:h-14 md:w-[80px] md:h-[80px] lg:w-[111px] lg:h-[104px] flex items-center justify-center flex-shrink-0'>
                  <span className='text-white text-lg sm:text-5xl lg:text-[60px] font-semibold'>
                    {job.companyInitial}
                  </span>
                </div>

                {/* Job Title */}
                <div className='flex flex-wrap items-center justify-between px-6 w-full gap-4'>
                  <h3 className='text-lg sm:text-xl lg:text-2xl text-black font-regular mb-3 mt-0 sm:mt-5 sm:mb-4 w-[250px]'>
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
                    <span className='text-black text-sm lg:text-[24px] font-normal'>
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
                    <span className='text-black text-sm lg:text-[24px] font-normal'>
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
                    <span className='text-black text-sm lg:text-[24px] font-normal'>
                      {job.department}
                    </span>
                  </div>

                  {/* Apply Button */}
                  <button
                    onClick={e => {
                      e.stopPropagation();
                      handleApply(job);
                    }}
                    className='bg-[#d4575b] hover:bg-[#c04a4e] text-white font-normal w-[100px] h-[40px] lg:w-[147px] lg:h-[51px] text-sm sm:text-base transition-colors duration-200 rounded-[50px] p-[8px] md:p-[10px]'
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

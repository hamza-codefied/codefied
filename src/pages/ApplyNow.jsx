import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiUpload, FiX } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BsBarChart } from 'react-icons/bs';
import { FaBriefcase } from 'react-icons/fa';
import { Select, notification } from 'antd';
import '@/styles/antd-custom.css';

const ApplyNow = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    coverLetter: '',
    resume: null,
    portfolio: '',
    linkedin: '',
    github: '',
    experience: '',
    education: '',
    skills: '',
    availability: '',
    salary: '',
    noticePeriod: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mock job data - in real app, fetch from API
  const jobData = {
    id: jobId,
    title: 'Backend Software Engineer',
    location: 'Onsite',
    jobLevel: 'Senior',
    department: 'Production',
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleFileChange = e => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        // 5MB limit
        setErrors(prev => ({
          ...prev,
          resume: 'File size should be less than 5MB',
        }));
        return;
      }
      setFormData(prev => ({
        ...prev,
        resume: file,
      }));
      if (errors.resume) {
        setErrors(prev => ({
          ...prev,
          resume: '',
        }));
      }
    }
  };

  const removeResume = () => {
    setFormData(prev => ({
      ...prev,
      resume: null,
    }));
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      location: '',
      coverLetter: '',
      resume: null,
      portfolio: '',
      linkedin: '',
      github: '',
      experience: '',
      education: '',
      skills: '',
      availability: '',
      salary: '',
      noticePeriod: '',
    });
    setErrors({});
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    if (!formData.coverLetter.trim()) {
      newErrors.coverLetter = 'Cover letter is required';
    }
    if (!formData.resume) {
      newErrors.resume = 'Resume is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Show success notification
      notification.success({
        message: 'Application Submitted Successfully!',
        description: 'Your application has been received. We will review it and get back to you soon.',
        placement: 'bottomRight',
        duration: 4,
        style: {
          backgroundColor: '#fff',
          borderLeft: '4px solid #d4575b',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        },
        className: 'custom-notification',
      });

      // Navigate after a short delay
      setTimeout(() => {
        navigate('/career');
        // Scroll to top of career page
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      }, 1500);
    }, 2000);
  };

  return (
    <div className='min-h-screen bg-gray-50 py-8 md:py-12'>
      <div className='container m-auto px-4 sm:px-6 md:px-8'>
        {/* Header */}
        <div className='mb-8'>
          <button
            onClick={() => {
              navigate('/career');
              // Scroll to top of career page
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }, 100);
            }}
            className='text-[#d4575b] hover:text-[#c04a4e] font-medium mb-4 flex items-center gap-2 transition-colors'
          >
            ← Back to Jobs
          </button>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4'>
            Apply for the Position
          </h1>

          {/* Job Details Card */}
          <div className='bg-gradient-to-br from-[#d4575b] via-[#c04a4e] to-[#b83d41] rounded-xl p-6 sm:p-10 shadow-lg relative overflow-hidden'>
            {/* Decorative Elements */}
            <div className='absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16'></div>
            <div className='absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12'></div>
            
            <div className='relative z-10'>
              <h2 className='text-2xl sm:text-3xl font-bold text-white mb-6'>
                {jobData.title}
              </h2>
              <div className='flex flex-wrap gap-4 sm:gap-6'>
                <div className='flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2.5 border border-white/30'>
                  <div className='bg-white/30 p-2 rounded-lg'>
                    <HiOutlineLocationMarker className='text-white w-5 h-5' />
                  </div>
                  <div className='flex flex-col'>
                    <span className='text-white/80 text-xs font-medium uppercase tracking-wide'>
                      Location
                    </span>
                    <span className='text-white text-sm sm:text-base font-semibold'>
                      {jobData.location}
                    </span>
                  </div>
                </div>
                <div className='flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2.5 border border-white/30'>
                  <div className='bg-white/30 p-2 rounded-lg'>
                    <BsBarChart className='text-white w-5 h-5' />
                  </div>
                  <div className='flex flex-col'>
                    <span className='text-white/80 text-xs font-medium uppercase tracking-wide'>
                      Job Level
                    </span>
                    <span className='text-white text-sm sm:text-base font-semibold'>
                      {jobData.jobLevel}
                    </span>
                  </div>
                </div>
                <div className='flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2.5 border border-white/30'>
                  <div className='bg-white/30 p-2 rounded-lg'>
                    <FaBriefcase className='text-white w-5 h-5' />
                  </div>
                  <div className='flex flex-col'>
                    <span className='text-white/80 text-xs font-medium uppercase tracking-wide'>
                      Department
                    </span>
                    <span className='text-white text-sm sm:text-base font-semibold'>
                      {jobData.department}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Application Form */}
        <form
          onSubmit={handleSubmit}
          className='bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 md:p-10'
        >
          <div className='space-y-6 md:space-y-8'>
            {/* Personal Information */}
            <div>
              <h3 className='text-xl sm:text-2xl font-semibold text-black mb-4 sm:mb-6'>
                Personal Information
              </h3>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    First Name <span className='text-[#d4575b]'></span>
                  </label>
                  <input
                    type='text'
                    name='firstName'
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4575b] focus:ring-opacity-50 transition-all ${
                      errors.firstName
                        ? 'border-red-500'
                        : 'border-gray-300 focus:border-[#d4575b]'
                    }`}
                    placeholder='John'
                  />
                  {errors.firstName && (
                    <p className='text-red-500 text-sm mt-1'>
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Last Name <span className='text-[#d4575b]'></span>
                  </label>
                  <input
                    type='text'
                    name='lastName'
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4575b] focus:ring-opacity-50 transition-all ${
                      errors.lastName
                        ? 'border-red-500'
                        : 'border-gray-300 focus:border-[#d4575b]'
                    }`}
                    placeholder='Doe'
                  />
                  {errors.lastName && (
                    <p className='text-red-500 text-sm mt-1'>
                      {errors.lastName}
                    </p>
                  )}
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Email <span className='text-[#d4575b]'></span>
                  </label>
                  <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4575b] focus:ring-opacity-50 transition-all ${
                      errors.email
                        ? 'border-red-500'
                        : 'border-gray-300 focus:border-[#d4575b]'
                    }`}
                    placeholder='Email'
                  />
                  {errors.email && (
                    <p className='text-red-500 text-sm mt-1'>{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Phone <span className='text-[#d4575b]'></span>
                  </label>
                  <input
                    type='tel'
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4575b] focus:ring-opacity-50 transition-all ${
                      errors.phone
                        ? 'border-red-500'
                        : 'border-gray-300 focus:border-[#d4575b]'
                    }`}
                    placeholder='Phone Number'
                  />
                  {errors.phone && (
                    <p className='text-red-500 text-sm mt-1'>{errors.phone}</p>
                  )}
                </div>

                <div className='sm:col-span-2'>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Location
                  </label>
                  <input
                    type='text'
                    name='location'
                    value={formData.location}
                    onChange={handleChange}
                    className='w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4575b] focus:ring-opacity-50 focus:border-[#d4575b] transition-all'
                    placeholder='City, Country'
                  />
                </div>
              </div>
            </div>

            {/* Resume Upload */}
            <div>
              <h3 className='text-xl sm:text-2xl font-semibold text-black mb-4 sm:mb-6'>
                Resume <span style={{ fontFamily: 'Arial' }}>/</span> CV
              </h3>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Upload Resume <span className='text-[#d4575b]'></span>
                  <span className='text-gray-500 text-xs ml-2'>
                    PDF, DOC, DOCX
                  </span>
                </label>
                {!formData.resume ? (
                  <label className='flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#d4575b] hover:bg-red-50/30 transition-colors'>
                    <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                      <FiUpload className='w-8 h-8 text-gray-400 mb-2' />
                      <p className='mb-2 text-sm text-gray-500'>
                        <span className='font-semibold text-[#d4575b]'>
                          Click to upload
                        </span>{' '}
                        or drag and drop
                      </p>
                    </div>
                    <input
                      type='file'
                      accept='.pdf,.doc,.docx'
                      onChange={handleFileChange}
                      className='hidden'
                    />
                  </label>
                ) : (
                  <div className='flex items-center justify-between p-4 bg-gray-50 border border-gray-300 rounded-lg'>
                    <div className='flex items-center gap-3'>
                      <div className='w-10 h-10 bg-[#d4575b] rounded-lg flex items-center justify-center'>
                        <span className='text-white font-semibold text-sm'>
                          PDF
                        </span>
                      </div>
                      <div>
                        <p className='text-sm font-medium text-gray-900'>
                          {formData.resume.name}
                        </p>
                        <p className='text-xs text-gray-500'>
                          {(formData.resume.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    <button
                      type='button'
                      onClick={removeResume}
                      className='text-gray-400 hover:text-red-500 transition-colors'
                    >
                      <FiX className='w-5 h-5' />
                    </button>
                  </div>
                )}
                {errors.resume && (
                  <p className='text-red-500 text-sm mt-1'>{errors.resume}</p>
                )}
              </div>
            </div>

            {/* Professional Links */}
            <div>
              <h3 className='text-xl sm:text-2xl font-semibold text-black mb-4 sm:mb-6'>
                Professional Links
              </h3>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    LinkedIn Profile
                  </label>
                  <input
                    type='url'
                    name='linkedin'
                    value={formData.linkedin}
                    onChange={handleChange}
                    className='w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4575b] focus:ring-opacity-50 focus:border-[#d4575b] transition-all'
                    placeholder='Enter your LinkedIn profile URL'
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    GitHub Profile
                  </label>
                  <input
                    type='url'
                    name='github'
                    value={formData.github}
                    onChange={handleChange}
                    className='w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4575b] focus:ring-opacity-50 focus:border-[#d4575b] transition-all'
                    placeholder='Enter your GitHub profile URL'
                  />
                </div>

                <div className='sm:col-span-2'>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Portfolio Website
                  </label>
                  <input
                    type='url'
                    name='portfolio'
                    value={formData.portfolio}
                    onChange={handleChange}
                    className='w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4575b] focus:ring-opacity-50 focus:border-[#d4575b] transition-all'
                    placeholder='Enter your portfolio website URL'
                  />
                </div>
              </div>
            </div>

            {/* Experience & Education */}
            <div>
              <h3 className='text-xl sm:text-2xl font-semibold text-black mb-4 sm:mb-6'>
                Experience And Qualifications
              </h3>
              <div className='space-y-4 sm:space-y-6'>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Years of Experience
                  </label>
                  <Select
                    name='experience'
                    value={formData.experience || undefined}
                    onChange={value =>
                      handleChange({ target: { name: 'experience', value } })
                    }
                    placeholder='Select experience'
                    className='w-full'
                    style={{
                      width: '100%',
                    }}
                    size='large'
                    options={[
                      { value: '0-1', label: '0-1 years' },
                      { value: '1-3', label: '1-3 years' },
                      { value: '3-5', label: '3-5 years' },
                      { value: '5-7', label: '5-7 years' },
                      { value: '7+', label: '7+ years' },
                    ]}
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Education
                  </label>
                  <input
                    type='text'
                    name='education'
                    value={formData.education}
                    onChange={handleChange}
                    className='w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4575b] focus:ring-opacity-50 focus:border-[#d4575b] transition-all'
                    placeholder='e.g., Bachelor of Science in Computer Science'
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Skills
                  </label>
                  <textarea
                    name='skills'
                    value={formData.skills}
                    onChange={handleChange}
                    rows={3}
                    className='w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4575b] focus:ring-opacity-50 focus:border-[#d4575b] transition-all resize-none'
                    placeholder='List your key skills e.g React, Node.js, Python, etc.'
                  />
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div>
              <h3 className='text-xl sm:text-2xl font-semibold text-black mb-4 sm:mb-6'>
                Additional Information
              </h3>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Expected Salary
                  </label>
                  <input
                    type='text'
                    name='salary'
                    value={formData.salary}
                    onChange={handleChange}
                    className='w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4575b] focus:ring-opacity-50 focus:border-[#d4575b] transition-all'
                    placeholder='Enter your expected salary'
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Notice Period
                  </label>
                  <Select
                    name='noticePeriod'
                    value={formData.noticePeriod || undefined}
                    onChange={value =>
                      handleChange({ target: { name: 'noticePeriod', value } })
                    }
                    placeholder='Select notice period'
                    className='w-full'
                    style={{
                      width: '100%',
                    }}
                    size='large'
                    options={[
                      { value: 'immediate', label: 'Immediate' },
                      { value: '1 week', label: '1 week' },
                      { value: '2 weeks', label: '2 weeks' },
                      { value: '1 month', label: '1 month' },
                      { value: '2 months', label: '2 months' },
                      { value: '3+ months', label: '3+ months' },
                    ]}
                  />
                </div>

                <div className='sm:col-span-2'>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Availability
                  </label>
                  <Select
                    name='availability'
                    value={formData.availability || undefined}
                    onChange={value =>
                      handleChange({ target: { name: 'availability', value } })
                    }
                    placeholder='Select availability'
                    className='w-full'
                    style={{
                      width: '100%',
                    }}
                    size='large'
                    options={[
                      { value: 'full-time', label: 'Full-time' },
                      { value: 'part-time', label: 'Part-time' },
                      { value: 'contract', label: 'Contract' },
                      { value: 'freelance', label: 'Freelance' },
                    ]}
                  />
                </div>
              </div>
            </div>

            {/* Cover Letter */}
            <div>
              <h3 className='text-xl sm:text-2xl font-semibold text-black mb-4 sm:mb-6'>
                Cover Letter
              </h3>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Why are you interested in this position?{' '}
                  <span className='text-[#d4575b]'></span>
                </label>
                <textarea
                  name='coverLetter'
                  value={formData.coverLetter}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-2.5 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4575b] focus:ring-opacity-50 transition-all resize-none ${
                    errors.coverLetter
                      ? 'border-red-500'
                      : 'border-gray-300 focus:border-[#d4575b]'
                  }`}
                  placeholder='Tell us why you are the perfect fit for this role...'
                />
                {errors.coverLetter && (
                  <p className='text-red-500 text-sm mt-1'>
                    {errors.coverLetter}
                  </p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className='flex flex-col sm:flex-row gap-4 pt-4'>
              <button
                type='submit'
                disabled={isSubmitting}
                className='flex-1 bg-[#d4575b] hover:bg-[#c04a4e] text-white font-semibold py-3 sm:py-4 px-8 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-base sm:text-lg'
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
              <button
                type='button'
                onClick={handleReset}
                className='px-6 sm:px-8 py-3 sm:py-4 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200'
              >
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyNow;

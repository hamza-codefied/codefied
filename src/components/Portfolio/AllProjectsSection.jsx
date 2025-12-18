'use client';
import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { GoArrowUpRight } from 'react-icons/go';
import { getAllProjects } from '@/data/projectData';
import { formatText } from '@/utils/textFormatter';

const categories = [
  { id: 'saas', label: 'SaaS' },
  { id: 'webdev', label: 'Web Dev' },
  { id: 'appdev', label: 'App Dev' },
  { id: 'arvr', label: 'AR / VR' },
  { id: 'uiux', label: 'UI / UX' },
  { id: 'gamedev', label: 'Game Dev' },
];

export default function AllProjectsSection() {
  const [activeTab, setActiveTab] = useState('saas');
  const navigate = useNavigate();

  // Get projects by category
  const projectData = useMemo(() => {
    const allProjects = getAllProjects();
    const categorized = {
      saas: allProjects.filter(project => project.category === 'saas'),
      webdev: allProjects.filter(project => project.category === 'webdev'),
      appdev: allProjects.filter(project => project.category === 'appdev'),
      arvr: allProjects.filter(project => project.category === 'arvr'),
      uiux: allProjects.filter(project => project.category === 'uiux'),
      gamedev: allProjects.filter(project => project.category === 'gamedev'),
    };
    return categorized;
  }, []);

  return (
    <div className='container m-auto xl:px-0'>
      <section className='text-white'>
        <div className='text-center my-14'>
          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className='flex flex-col md:flex-row justify-between w-fit px-[8px] py-[6px] border-2 mx-auto md:mx-0 xl:h-[59px] xl:rounded-[48px]'
          >
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-[22px] py-[12px] rounded-[40px] font-medium text-[18px] transition-all duration-300 ${
                  activeTab === cat.id
                    ? 'bg-black text-white shadow-lg scale-105'
                    : 'bg-white hover:bg-gray-100 text-black'
                }`}
              >
                {formatText(cat.label)}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Cards */}
        <AnimatePresence mode='wait'>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
            className='grid lg:grid-cols-2 2xl:grid-cols-3 gap-20'
          >
            {projectData[activeTab]?.map(project => (
              <motion.div
                key={project.id}
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 200 }}
                onClick={() => navigate(`/portfolio/${project.slug}`)}
                className='cursor-pointer'
              >
                <div className='h-[394px] w-full'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='h-full w-full object-cover rounded-[20px]'
                  />
                </div>
                <div className='flex items-center justify-between'>
                  <div className='py-5 text-black'>
                    <h3 className='text-sm sm:text-md lg:text-[24px] font-medium mt-[37px]'>
                      {project.title}
                    </h3>
                    <p className='text-xs md:text-sm lg:text-[20px] font-normal bg-[#262626] w-fit px-[14px] py-[10px] rounded-[8px] text-[#ffffff] mt-[12px]'>
                      {project.website}
                    </p>
                  </div>
                  <div className='bg-black rounded-full p-[17.778px]'>
                    <GoArrowUpRight className='text-[#d4575b] text-5xl' />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  );
}

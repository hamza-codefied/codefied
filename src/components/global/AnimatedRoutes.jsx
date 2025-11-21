import { useLocation, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Home } from '@pages/Home';
import { About } from '@pages/About';
import { Contact } from '@pages/Contact';
import { Blogs } from '@pages/Blogs';
import { Portfolio } from '@pages/Portfolio';
import { Career } from '@pages/Career';
import { NotFound } from '@pages/NotFound';
import ServiceDetail from '../../pages/ServiceDetail';
import ProductDetails from '../../pages/ProductDetails';
import ApplyNow from '../../pages/ApplyNow';
import BlogDetail from '../../pages/BlogDetail';
import PortfolioDetail from '../../pages/PortfolioDetail';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait' initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ 
          opacity: 0, 
          y: 30,
          scale: 0.98,
          filter: 'blur(4px)'
        }}
        animate={{ 
          opacity: 1, 
          y: 0,
          scale: 1,
          filter: 'blur(0px)'
        }}
        exit={{ 
          opacity: 0, 
          y: -30,
          scale: 0.98,
          filter: 'blur(4px)'
        }}
        transition={{
          duration: 0.5,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        style={{ 
          width: '100%', 
          minHeight: '100%',
          willChange: 'transform, opacity, filter'
        }}
      >
        <Routes location={location}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/career' element={<Career />} />
          <Route path='/career/apply/:jobId' element={<ApplyNow />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/services/:serviceId' element={<ServiceDetail />} />
          <Route path='/products/:slug' element={<ProductDetails />} />
          <Route path='/blogs/:slug' element={<BlogDetail />} />
          <Route path='/portfolio/:slug' element={<PortfolioDetail />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;


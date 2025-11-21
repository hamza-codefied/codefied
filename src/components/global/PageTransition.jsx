import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const PageTransition = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait' initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{ width: '100%', minHeight: '100%' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;


import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SEOProvider } from '@contexts/SEOContext';
import { Layout } from '@layouts/Layout';
import { PWAInstallPrompt } from '@components/pwa/PWAInstallPrompt';
import { PWAUpdatePrompt } from '@components/pwa/PWAUpdatePrompt';
import { PerformanceMonitor } from '@components/performance/PerformanceMonitor';
import { preloadCriticalResources } from '@utils/performance';

// Import pages directly for now to debug the issue
import { Home } from '@pages/Home';
import { About } from '@pages/About';
import { Contact } from '@pages/Contact';
import { Blogs } from '@pages/Blogs';
import { Portfolio } from '@pages/Portfolio';
import { NotFound } from '@pages/NotFound';
import ServiceDetail from './pages/ServiceDetail';

function App() {
  // Preload critical resources
  useEffect(() => {
    preloadCriticalResources();
  }, []);

  return (
    <SEOProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/services/:serviceId' element={<ServiceDetail />} />
            <Route path='*' element={<NotFound />} />
          </Routes>

          {/* PWA Components */}
          <PWAInstallPrompt />
          <PWAUpdatePrompt />

          {/* Performance Monitoring (Development Only) */}
          <PerformanceMonitor
            enabled={process.env.NODE_ENV === 'development'}
          />
        </Layout>
      </Router>
    </SEOProvider>
  );
}

export default App;

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SEOProvider } from '@contexts/SEOContext';
import { Layout } from '@layouts/Layout';
import { PWAInstallPrompt } from '@components/pwa/PWAInstallPrompt';
import { PWAUpdatePrompt } from '@components/pwa/PWAUpdatePrompt';
import { PerformanceMonitor } from '@components/performance/PerformanceMonitor';
import { preloadCriticalResources } from '@utils/performance';
import AnimatedRoutes from './components/global/AnimatedRoutes';
import Clarity from '@microsoft/clarity';

// Import pages directly for now to debug the issue
import ScrollToTop from './components/global/ScrollToTop';
const projectId = "vd8x37h31f"

Clarity.init(projectId);
function App() {
  // Preload critical resources
  useEffect(() => {
    preloadCriticalResources();
  }, []);

  return (
    <SEOProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <AnimatedRoutes />

          {/* PWA Components */}
          <PWAInstallPrompt />
          <PWAUpdatePrompt />

          {/* Performance Monitoring (Development Only) */}
          <PerformanceMonitor
            enabled={process.env.NODE_ENV === 'test'}
          />
        </Layout>
      </Router>
    </SEOProvider>
  );
}

export default App;

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Don't scroll to top if there's a hash (section link)
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  // Handle hash scrolling after navigation
  useEffect(() => {
    if (hash) {
      // Wait for page transition animation (0.5s) + buffer time
      const scrollToSection = () => {
        const element = document.querySelector(hash) || document.getElementById(hash.replace('#', ''));
        if (element) {
          const yOffset = -100; // Adjust for header height
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
          return true;
        }
        return false;
      };

      // Try multiple times with increasing delays to ensure element is rendered
      const tryScroll = (attempt = 0) => {
        if (scrollToSection()) {
          return; // Successfully scrolled
        }
        
        if (attempt < 10) {
          // Try again after a short delay (up to 10 attempts)
          setTimeout(() => tryScroll(attempt + 1), 100 + (attempt * 50));
        }
      };

      // Start trying after page transition animation completes (500ms) + buffer
      const timer = setTimeout(() => {
        tryScroll();
      }, 600);

      return () => clearTimeout(timer);
    }
  }, [hash, pathname]);

  return null;
}

import React from 'react';

/**
 * Reusable Container Component
 * @param {string} size - Container size: 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', 'custom', or 'default'
 * @param {string} className - Additional CSS classes
 * @param {string} padding - Padding classes (default: 'px-8')
 * @param {React.ReactNode} children - Child components
 */
const Container = ({ 
  size = 'default', 
  className = '', 
  padding = 'px-8',
  children 
}) => {
  const sizeClasses = {
    sm: 'max-w-container-sm',
    md: 'max-w-container-md',
    lg: 'max-w-container-lg',
    xl: 'max-w-container-xl',
    '2xl': 'max-w-container-2xl',
    '3xl': 'max-w-container-3xl',
    '4xl': 'max-w-container-4xl',
    custom: 'max-w-container-custom',
    default: 'container', // Uses Tailwind's default container
  };

  const containerClass = sizeClasses[size] || sizeClasses.default;

  return (
    <div className={`${containerClass} m-auto ${padding} ${className}`}>
      {children}
    </div>
  );
};

export default Container;


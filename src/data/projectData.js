import portfolio1 from '@/images/portfolio1.png';
import blog1 from '@/images/blog1.png';
import blog2 from '@/images/blog2.png';
import blog3 from '@/images/blog3.png';
import blog4 from '@/images/blog4.png';
import blog5 from '@/images/blog5.png';
import blog6 from '@/images/blog6.png';
import blog7 from '@/images/blog7.png';
import blog8 from '@/images/blog8.png';
import blog9 from '@/images/blog9.png';
import blog10 from '@/images/blog10.png';
import blog11 from '@/images/blog11.png';
import blog12 from '@/images/blog12.png';
import blog13 from '@/images/blog13.png';
import blog14 from '@/images/blog14.png';
import blog15 from '@/images/blog15.png';
import codefiedSolutionImage from '@/images/codefiedsolution.png';

export const projectData = [
  {
    id: 1,
    slug: 'ultimate-savings-web-app',
    title: 'Ultimate Savings Web App',
    subtitle: 'A Full Stack Project Including App And Website',
    category: 'webdev',
    image: portfolio1,
    heroImage: portfolio1,
    logo: portfolio1, // You can add a separate logo image if available
    website: 'www.grocerycomparison.com',
    description:
      'Ultimate Savings is a comprehensive full-stack application designed to help users find the cheapest grocery cart. The platform includes both a web application and a mobile app, providing seamless price comparison across multiple retailers.',
    aboutProject:
      'Ultimate Savings Web App is a revolutionary platform that empowers consumers to make smarter shopping decisions. By aggregating prices from multiple grocery stores and retailers, the application helps users find the best deals and save money on their grocery purchases. The platform features real-time price updates, store location services, and personalized shopping recommendations based on user preferences and shopping history.',
    aboutSectionImages: {
      phone1: blog10, // First row - First image (1/3 width)
      laptopDark: blog11, // First row - Second image (2/3 width)
      laptopColored: blog13, // Second row - First image (50% width)
      logo: blog14, // Second row - Second image (25% width)
      phone2: blog12, // Second row - Third image (25% width)
    },
    theProblem:
      'Consumers often struggle to find the best prices for their grocery items across different stores. With prices varying significantly between retailers, shoppers waste time and money by not knowing where to find the best deals. The Ultimate Savings Web App solves this problem by providing instant price comparisons, helping users save both time and money on their grocery shopping.',
    codefiedSolution: {
      intro: 'Ultimate Savings Web App is a revolutionary platform that empowers consumers to make smarter shopping decisions. By aggregating prices from multiple grocery stores and retailers, the application helps users find the best deals and save money on their grocery purchases.',
      laptopImage: codefiedSolutionImage,
      solutions: [
        {
          icon: 'gear',
          title: 'Automated Workflows',
          description:
            'Codefied eliminated manual inefficiencies by integrating multiple legacy systems through custom API solutions. This automation significantly reduced processing time, enhanced data accuracy, and provided seamless information flow across departments, improving overall user experience.',
        },
        {
          icon: 'lightning',
          title: 'Scalability & Stability',
          description:
            'To support growing operational demands, a microservices-based architecture was deployed, ensuring high availability and fault tolerance. By implementing DevOps best practices, including CI/CD pipelines, Infrastructure as Code (IaC), and automated monitoring, Codefied enhanced the platform\'s stability, efficiency, and scalability.',
        },
        {
          icon: 'star',
          title: 'Feature Enhancements',
          description:
            'Codefied worked closely with the client to introduce new, intelligent features that increased platform flexibility and responsiveness. Customizable dashboards, advanced analytics, and real-time reporting empowered teams to make data-driven decisions, improving operational efficiency.',
        },
      ],
    },
    showcaseImages: [
      {
        type: 'laptop',
        image: portfolio1,
        description: 'Website homepage with search functionality',
      },
      {
        type: 'mobile',
        image: blog1,
        description: 'Mobile app product browsing interface',
      },
      {
        type: 'laptop',
        image: blog2,
        description: 'Price comparison dashboard',
      },
      {
        type: 'mobile',
        image: blog3,
        description: 'Shopping cart and checkout',
      },
      { type: 'logo', image: portfolio1, description: 'Ultimate Savings logo' },
      {
        type: 'mobile',
        image: blog4,
        description: 'Store locator and navigation',
      },
    ],
    similarProjects: [2, 3, 4],
  },
  {
    id: 2,
    slug: 'enterprise-saas-platform',
    title: 'Enterprise SaaS Platform',
    subtitle: 'Scalable Cloud-Based Solution for Businesses',
    category: 'saas',
    image: blog2,
    heroImage: blog2,
    logo: blog2,
    website: 'www.enterprisesaas.com',
    description:
      'A comprehensive enterprise SaaS platform designed to streamline business operations, manage workflows, and enhance productivity through cloud-based solutions.',
    aboutProject:
      'This Enterprise SaaS Platform provides businesses with a complete suite of tools for managing their operations, from project management and team collaboration to customer relationship management and analytics. Built with scalability in mind, the platform serves businesses of all sizes, from startups to Fortune 500 companies.',
    aboutSectionImages: {
      phone1: blog10, // First row - First image (1/3 width)
      laptopDark: blog11, // First row - Second image (2/3 width)
      laptopColored: blog13, // Second row - First image (50% width)
      logo: blog14, // Second row - Second image (25% width)
      phone2: blog12, // Second row - Third image (25% width)
    },
    theProblem:
      "Many businesses struggle with fragmented software solutions that don't integrate well, leading to inefficiencies and increased operational costs. This platform consolidates essential business tools into a single, unified solution, reducing complexity and improving productivity.",
    codefiedSolution: {
      intro: 'This Enterprise SaaS Platform provides businesses with a complete suite of tools for managing their operations, from project management and team collaboration to customer relationship management and analytics. Built with scalability in mind, the platform serves businesses of all sizes.',
      laptopImage: codefiedSolutionImage,
      solutions: [
        {
          icon: 'gear',
          title: 'Automated Workflows',
          description:
            'Codefied eliminated manual inefficiencies by integrating multiple legacy systems through custom API solutions. This automation significantly reduced processing time, enhanced data accuracy, and provided seamless information flow across departments, improving overall user experience.',
        },
        {
          icon: 'lightning',
          title: 'Scalability & Stability',
          description:
            'To support growing operational demands, a microservices-based architecture was deployed, ensuring high availability and fault tolerance. By implementing DevOps best practices, including CI/CD pipelines, Infrastructure as Code (IaC), and automated monitoring, Codefied enhanced the platform\'s stability, efficiency, and scalability.',
        },
        {
          icon: 'star',
          title: 'Feature Enhancements',
          description:
            'Codefied worked closely with the client to introduce new, intelligent features that increased platform flexibility and responsiveness. Customizable dashboards, advanced analytics, and real-time reporting empowered teams to make data-driven decisions, improving operational efficiency.',
        },
      ],
    },
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'Docker',
      'Kubernetes',
    ],
    features: [
      'Unified dashboard for all business operations',
      'Advanced analytics and reporting',
      'Team collaboration tools',
      'Customer relationship management',
      'Workflow automation',
      'API integrations with popular business tools',
    ],
    showcaseImages: [
      { type: 'laptop', image: blog2, description: 'Main dashboard interface' },
      {
        type: 'mobile',
        image: blog3,
        description: 'Mobile app for on-the-go access',
      },
      {
        type: 'laptop',
        image: blog4,
        description: 'Analytics and reporting dashboard',
      },
    ],
    similarProjects: [1, 3, 5],
  },
  {
    id: 3,
    slug: 'e-commerce-mobile-app',
    title: 'E-Commerce Mobile App',
    subtitle: 'Modern Shopping Experience on Mobile',
    category: 'appdev',
    image: blog3,
    heroImage: blog3,
    logo: blog3,
    website: 'www.ecommerceapp.com',
    description:
      'A feature-rich mobile e-commerce application providing seamless shopping experiences with advanced features like AR try-on, personalized recommendations, and secure payment processing.',
    aboutProject:
      'This E-Commerce Mobile App revolutionizes the online shopping experience by combining cutting-edge technology with user-friendly design. The app features augmented reality try-on capabilities, AI-powered product recommendations, and a streamlined checkout process that makes shopping convenient and enjoyable.',
    aboutSectionImages: {
      phone1: blog10, // First row - First image (1/3 width)
      laptopDark: blog11, // First row - Second image (2/3 width)
      laptopColored: blog13, // Second row - First image (50% width)
      logo: blog14, // Second row - Second image (25% width)
      phone2: blog12, // Second row - Third image (25% width)
    },
    theProblem:
      "Traditional e-commerce apps often provide generic experiences that don't cater to individual user preferences. This app addresses this by offering personalized shopping experiences, virtual try-on features, and intelligent product recommendations that help users make better purchasing decisions.",
    codefiedSolution: {
      intro: 'This E-Commerce Mobile App revolutionizes the online shopping experience by combining cutting-edge technology with user-friendly design. The app features augmented reality try-on capabilities, AI-powered product recommendations, and a streamlined checkout process.',
      laptopImage: codefiedSolutionImage,
      solutions: [
        {
          icon: 'gear',
          title: 'Automated Workflows',
          description:
            'Codefied eliminated manual inefficiencies by integrating multiple legacy systems through custom API solutions. This automation significantly reduced processing time, enhanced data accuracy, and provided seamless information flow across departments, improving overall user experience.',
        },
        {
          icon: 'lightning',
          title: 'Scalability & Stability',
          description:
            'To support growing operational demands, a microservices-based architecture was deployed, ensuring high availability and fault tolerance. By implementing DevOps best practices, including CI/CD pipelines, Infrastructure as Code (IaC), and automated monitoring, Codefied enhanced the platform\'s stability, efficiency, and scalability.',
        },
        {
          icon: 'star',
          title: 'Feature Enhancements',
          description:
            'Codefied worked closely with the client to introduce new, intelligent features that increased platform flexibility and responsiveness. Customizable dashboards, advanced analytics, and real-time reporting empowered teams to make data-driven decisions, improving operational efficiency.',
        },
      ],
    },
    technologies: [
      'React Native',
      'Node.js',
      'MongoDB',
      'Stripe API',
      'AR Kit',
      'Firebase',
    ],
    features: [
      'AR-powered virtual try-on',
      'AI-driven product recommendations',
      'Secure payment processing',
      'Real-time order tracking',
      'Social sharing and reviews',
      'Wishlist and favorites',
    ],
    showcaseImages: [
      {
        type: 'mobile',
        image: blog3,
        description: 'Product browsing interface',
      },
      { type: 'mobile', image: blog4, description: 'AR try-on feature' },
      { type: 'mobile', image: blog5, description: 'Checkout and payment' },
    ],
    similarProjects: [1, 2, 4],
  },
  {
    id: 4,
    slug: 'healthcare-management-system',
    title: 'Healthcare Management System',
    subtitle: 'Digital Transformation for Healthcare Providers',
    category: 'webdev',
    image: blog4,
    heroImage: blog4,
    logo: blog4,
    website: 'www.healthcarems.com',
    description:
      'A comprehensive healthcare management system designed to streamline patient care, manage medical records, and improve communication between healthcare providers and patients.',
    aboutProject:
      'This Healthcare Management System digitizes and streamlines healthcare operations, from patient registration and appointment scheduling to medical record management and billing. The system improves efficiency, reduces errors, and enhances patient care through better data management and communication tools.',
    aboutSectionImages: {
      phone1: blog10, // First row - First image (1/3 width)
      laptopDark: blog11, // First row - Second image (2/3 width)
      laptopColored: blog13, // Second row - First image (50% width)
      logo: blog14, // Second row - Second image (25% width)
      phone2: blog12, // Second row - Third image (25% width)
    },
    theProblem:
      'Healthcare providers often struggle with paper-based systems and fragmented digital solutions that make it difficult to manage patient information efficiently. This system provides a unified platform that improves patient care coordination and operational efficiency.',
    codefiedSolution: {
      intro: 'This Healthcare Management System digitizes and streamlines healthcare operations, from patient registration and appointment scheduling to medical record management and billing. The system improves efficiency, reduces errors, and enhances patient care.',
      laptopImage: codefiedSolutionImage,
      solutions: [
        {
          icon: 'gear',
          title: 'Automated Workflows',
          description:
            'Codefied eliminated manual inefficiencies by integrating multiple legacy systems through custom API solutions. This automation significantly reduced processing time, enhanced data accuracy, and provided seamless information flow across departments, improving overall user experience.',
        },
        {
          icon: 'lightning',
          title: 'Scalability & Stability',
          description:
            'To support growing operational demands, a microservices-based architecture was deployed, ensuring high availability and fault tolerance. By implementing DevOps best practices, including CI/CD pipelines, Infrastructure as Code (IaC), and automated monitoring, Codefied enhanced the platform\'s stability, efficiency, and scalability.',
        },
        {
          icon: 'star',
          title: 'Feature Enhancements',
          description:
            'Codefied worked closely with the client to introduce new, intelligent features that increased platform flexibility and responsiveness. Customizable dashboards, advanced analytics, and real-time reporting empowered teams to make data-driven decisions, improving operational efficiency.',
        },
      ],
    },
    technologies: [
      'React',
      'Node.js',
      'PostgreSQL',
      'HIPAA Compliance',
      'HL7 Integration',
      'AWS',
    ],
    features: [
      'Electronic health records (EHR)',
      'Appointment scheduling system',
      'Patient portal access',
      'Billing and insurance management',
      'Telemedicine capabilities',
      'Secure messaging and notifications',
    ],
    showcaseImages: [
      {
        type: 'laptop',
        image: blog4,
        description: 'Patient management dashboard',
      },
      { type: 'mobile', image: blog5, description: 'Mobile app for patients' },
      {
        type: 'laptop',
        image: blog6,
        description: 'Medical records interface',
      },
    ],
    similarProjects: [1, 3, 5],
  },
  {
    id: 5,
    slug: 'fitness-tracking-platform',
    title: 'Fitness Tracking Platform',
    subtitle: 'Comprehensive Health and Wellness Solution',
    category: 'appdev',
    image: blog5,
    heroImage: blog5,
    logo: blog5,
    website: 'www.fitnessplatform.com',
    description:
      'An all-in-one fitness tracking platform that helps users monitor their health, track workouts, and achieve their fitness goals through data-driven insights and personalized coaching.',
    aboutProject:
      'This Fitness Tracking Platform combines wearable device integration, workout tracking, nutrition monitoring, and social features to create a comprehensive health and wellness solution. The platform provides users with detailed insights into their fitness progress and offers personalized recommendations to help them achieve their goals.',
    aboutSectionImages: {
      phone1: blog10, // First row - First image (1/3 width)
      laptopDark: blog11, // First row - Second image (2/3 width)
      laptopColored: blog13, // Second row - First image (50% width)
      logo: blog14, // Second row - Second image (25% width)
      phone2: blog12, // Second row - Third image (25% width)
    },
    theProblem:
      "Fitness enthusiasts often use multiple apps and devices that don't communicate with each other, making it difficult to get a complete picture of their health and fitness progress. This platform consolidates all fitness data into a single, unified solution.",
    codefiedSolution: {
      intro: 'This Fitness Tracking Platform combines wearable device integration, workout tracking, nutrition monitoring, and social features to create a comprehensive health and wellness solution. The platform provides users with detailed insights into their fitness progress.',
      laptopImage: codefiedSolutionImage,
      solutions: [
        {
          icon: 'gear',
          title: 'Automated Workflows',
          description:
            'Codefied eliminated manual inefficiencies by integrating multiple legacy systems through custom API solutions. This automation significantly reduced processing time, enhanced data accuracy, and provided seamless information flow across departments, improving overall user experience.',
        },
        {
          icon: 'lightning',
          title: 'Scalability & Stability',
          description:
            'To support growing operational demands, a microservices-based architecture was deployed, ensuring high availability and fault tolerance. By implementing DevOps best practices, including CI/CD pipelines, Infrastructure as Code (IaC), and automated monitoring, Codefied enhanced the platform\'s stability, efficiency, and scalability.',
        },
        {
          icon: 'star',
          title: 'Feature Enhancements',
          description:
            'Codefied worked closely with the client to introduce new, intelligent features that increased platform flexibility and responsiveness. Customizable dashboards, advanced analytics, and real-time reporting empowered teams to make data-driven decisions, improving operational efficiency.',
        },
      ],
    },
    technologies: [
      'React Native',
      'Node.js',
      'MongoDB',
      'Wearable APIs',
      'Machine Learning',
      'Firebase',
    ],
    features: [
      'Workout tracking and logging',
      'Nutrition and calorie tracking',
      'Wearable device integration',
      'Social features and challenges',
      'Personalized coaching recommendations',
      'Progress analytics and insights',
    ],
    showcaseImages: [
      {
        type: 'mobile',
        image: blog5,
        description: 'Workout tracking interface',
      },
      {
        type: 'mobile',
        image: blog6,
        description: 'Nutrition tracking dashboard',
      },
      { type: 'mobile', image: blog7, description: 'Progress analytics' },
    ],
    similarProjects: [2, 3, 6],
  },
  {
    id: 6,
    slug: 'educational-learning-platform',
    title: 'Educational Learning Platform',
    subtitle: 'Interactive Online Education Solution',
    category: 'webdev',
    image: blog6,
    heroImage: blog6,
    logo: blog6,
    website: 'www.educationplatform.com',
    description:
      'An interactive online learning platform that provides students and educators with tools for creating, sharing, and accessing educational content across various subjects and learning styles.',
    aboutProject:
      'This Educational Learning Platform democratizes access to quality education by providing a comprehensive online learning environment. The platform features interactive courses, video lessons, quizzes, assignments, and collaborative tools that enhance the learning experience for students of all ages.',
    aboutSectionImages: {
      phone1: blog10, // First row - First image (1/3 width)
      laptopDark: blog11, // First row - Second image (2/3 width)
      laptopColored: blog13, // Second row - First image (50% width)
      logo: blog14, // Second row - Second image (25% width)
      phone2: blog12, // Second row - Third image (25% width)
    },
    theProblem:
      'Traditional education systems often lack flexibility and personalized learning experiences. This platform addresses these limitations by offering adaptive learning paths, interactive content, and tools that cater to different learning styles and paces.',
    codefiedSolution: {
      intro: 'This Educational Learning Platform democratizes access to quality education by providing a comprehensive online learning environment. The platform features interactive courses, video lessons, quizzes, assignments, and collaborative tools.',
      laptopImage: codefiedSolutionImage,
      solutions: [
        {
          icon: 'gear',
          title: 'Automated Workflows',
          description:
            'Codefied eliminated manual inefficiencies by integrating multiple legacy systems through custom API solutions. This automation significantly reduced processing time, enhanced data accuracy, and provided seamless information flow across departments, improving overall user experience.',
        },
        {
          icon: 'lightning',
          title: 'Scalability & Stability',
          description:
            'To support growing operational demands, a microservices-based architecture was deployed, ensuring high availability and fault tolerance. By implementing DevOps best practices, including CI/CD pipelines, Infrastructure as Code (IaC), and automated monitoring, Codefied enhanced the platform\'s stability, efficiency, and scalability.',
        },
        {
          icon: 'star',
          title: 'Feature Enhancements',
          description:
            'Codefied worked closely with the client to introduce new, intelligent features that increased platform flexibility and responsiveness. Customizable dashboards, advanced analytics, and real-time reporting empowered teams to make data-driven decisions, improving operational efficiency.',
        },
      ],
    },
    technologies: [
      'React',
      'Node.js',
      'MongoDB',
      'Video Streaming',
      'WebRTC',
      'AWS',
    ],
    features: [
      'Interactive video lessons',
      'Adaptive learning paths',
      'Collaborative learning tools',
      'Progress tracking and analytics',
      'Live virtual classrooms',
      'Certificate generation',
    ],
    showcaseImages: [
      {
        type: 'laptop',
        image: blog6,
        description: 'Course browsing interface',
      },
      { type: 'mobile', image: blog7, description: 'Mobile learning app' },
      { type: 'laptop', image: blog8, description: 'Virtual classroom' },
    ],
    similarProjects: [1, 4, 5],
  },
  {
    id: 7,
    slug: 'real-estate-management-system',
    title: 'Real Estate Management System',
    subtitle: 'Complete Property Management Solution',
    category: 'webdev',
    image: blog7,
    heroImage: blog7,
    logo: blog7,
    website: 'www.realestatems.com',
    description:
      'A comprehensive real estate management system that helps property managers, agents, and owners manage properties, tenants, leases, and transactions efficiently.',
    aboutProject:
      'This Real Estate Management System streamlines property management operations by providing tools for listing management, tenant communication, lease tracking, maintenance requests, and financial reporting. The system improves efficiency and reduces administrative overhead for real estate professionals.',
    aboutSectionImages: {
      phone1: blog10, // First row - First image (1/3 width)
      laptopDark: blog11, // First row - Second image (2/3 width)
      laptopColored: blog13, // Second row - First image (50% width)
      logo: blog14, // Second row - Second image (25% width)
      phone2: blog12, // Second row - Third image (25% width)
    },
    theProblem:
      'Real estate professionals often juggle multiple tools and systems to manage properties, leading to inefficiencies and potential errors. This unified platform consolidates all property management functions into a single, easy-to-use solution.',
    codefiedSolution: {
      intro: 'This Real Estate Management System streamlines property management operations by providing tools for listing management, tenant communication, lease tracking, maintenance requests, and financial reporting. The system improves efficiency and reduces administrative overhead.',
      laptopImage: codefiedSolutionImage,
      solutions: [
        {
          icon: 'gear',
          title: 'Automated Workflows',
          description:
            'Codefied eliminated manual inefficiencies by integrating multiple legacy systems through custom API solutions. This automation significantly reduced processing time, enhanced data accuracy, and provided seamless information flow across departments, improving overall user experience.',
        },
        {
          icon: 'lightning',
          title: 'Scalability & Stability',
          description:
            'To support growing operational demands, a microservices-based architecture was deployed, ensuring high availability and fault tolerance. By implementing DevOps best practices, including CI/CD pipelines, Infrastructure as Code (IaC), and automated monitoring, Codefied enhanced the platform\'s stability, efficiency, and scalability.',
        },
        {
          icon: 'star',
          title: 'Feature Enhancements',
          description:
            'Codefied worked closely with the client to introduce new, intelligent features that increased platform flexibility and responsiveness. Customizable dashboards, advanced analytics, and real-time reporting empowered teams to make data-driven decisions, improving operational efficiency.',
        },
      ],
    },
    technologies: [
      'React',
      'Node.js',
      'PostgreSQL',
      'Stripe API',
      'Google Maps API',
      'AWS',
    ],
    features: [
      'Property listing management',
      'Tenant and lease tracking',
      'Maintenance request system',
      'Financial reporting and accounting',
      'Document management',
      'Mobile app for on-the-go access',
    ],
    showcaseImages: [
      {
        type: 'laptop',
        image: blog7,
        description: 'Property management dashboard',
      },
      {
        type: 'mobile',
        image: blog8,
        description: 'Mobile property viewing app',
      },
      {
        type: 'laptop',
        image: blog9,
        description: 'Financial reporting interface',
      },
    ],
    similarProjects: [2, 4, 6],
  },
  {
    id: 8,
    slug: 'food-delivery-platform',
    title: 'Food Delivery Platform',
    subtitle: 'On-Demand Food Ordering and Delivery',
    category: 'appdev',
    image: blog8,
    heroImage: blog8,
    logo: blog8,
    website: 'www.fooddeliveryapp.com',
    description:
      'A comprehensive food delivery platform connecting restaurants, delivery drivers, and customers through a seamless mobile and web application.',
    aboutProject:
      'This Food Delivery Platform revolutionizes the food ordering experience by providing real-time order tracking, multiple payment options, and a user-friendly interface. The platform serves restaurants, delivery drivers, and customers, creating a complete ecosystem for food delivery services.',
    aboutSectionImages: {
      phone1: blog10, // First row - First image (1/3 width)
      laptopDark: blog11, // First row - Second image (2/3 width)
      laptopColored: blog13, // Second row - First image (50% width)
      logo: blog14, // Second row - Second image (25% width)
      phone2: blog12, // Second row - Third image (25% width)
    },
    theProblem:
      'Food delivery services often suffer from poor user experiences, unreliable tracking, and limited restaurant options. This platform addresses these issues by providing a comprehensive solution with real-time tracking, diverse restaurant partnerships, and excellent user experience.',
    codefiedSolution: {
      intro: 'This Food Delivery Platform revolutionizes the food ordering experience by providing real-time order tracking, multiple payment options, and a user-friendly interface. The platform serves restaurants, delivery drivers, and customers, creating a complete ecosystem.',
      laptopImage: codefiedSolutionImage,
      solutions: [
        {
          icon: 'gear',
          title: 'Automated Workflows',
          description:
            'Codefied eliminated manual inefficiencies by integrating multiple legacy systems through custom API solutions. This automation significantly reduced processing time, enhanced data accuracy, and provided seamless information flow across departments, improving overall user experience.',
        },
        {
          icon: 'lightning',
          title: 'Scalability & Stability',
          description:
            'To support growing operational demands, a microservices-based architecture was deployed, ensuring high availability and fault tolerance. By implementing DevOps best practices, including CI/CD pipelines, Infrastructure as Code (IaC), and automated monitoring, Codefied enhanced the platform\'s stability, efficiency, and scalability.',
        },
        {
          icon: 'star',
          title: 'Feature Enhancements',
          description:
            'Codefied worked closely with the client to introduce new, intelligent features that increased platform flexibility and responsiveness. Customizable dashboards, advanced analytics, and real-time reporting empowered teams to make data-driven decisions, improving operational efficiency.',
        },
      ],
    },
    technologies: [
      'React Native',
      'Node.js',
      'MongoDB',
      'Google Maps API',
      'Stripe API',
      'Firebase',
    ],
    features: [
      'Real-time order tracking',
      'Multiple payment options',
      'Restaurant and menu browsing',
      'Driver management system',
      'Rating and review system',
      'Loyalty and rewards program',
    ],
    showcaseImages: [
      {
        type: 'mobile',
        image: blog8,
        description: 'Restaurant browsing interface',
      },
      { type: 'mobile', image: blog9, description: 'Order tracking screen' },
      { type: 'mobile', image: blog1, description: 'Checkout and payment' },
    ],
    similarProjects: [3, 5, 6],
  },
  {
    id: 9,
    slug: 'financial-analytics-dashboard',
    title: 'Financial Analytics Dashboard',
    subtitle: 'Advanced Financial Data Visualization',
    category: 'saas',
    image: blog9,
    heroImage: blog9,
    logo: blog9,
    website: 'www.financialanalytics.com',
    description:
      'A powerful financial analytics dashboard that provides businesses with real-time insights into their financial performance, trends, and forecasts.',
    aboutProject:
      'This Financial Analytics Dashboard transforms complex financial data into actionable insights through intuitive visualizations and comprehensive reporting. The platform helps businesses make informed financial decisions by providing real-time analytics, trend analysis, and predictive forecasting.',
    aboutSectionImages: {
      phone1: blog10, // First row - First image (1/3 width)
      laptopDark: blog11, // First row - Second image (2/3 width)
      laptopColored: blog13, // Second row - First image (50% width)
      logo: blog14, // Second row - Second image (25% width)
      phone2: blog12, // Second row - Third image (25% width)
    },
    theProblem:
      'Businesses often struggle to understand their financial data due to complex spreadsheets and fragmented reporting tools. This dashboard simplifies financial analysis by providing clear visualizations and comprehensive insights in one unified platform.',
    codefiedSolution: {
      intro: 'This Financial Analytics Dashboard transforms complex financial data into actionable insights through intuitive visualizations and comprehensive reporting. The platform helps businesses make informed financial decisions by providing real-time analytics, trend analysis, and predictive forecasting.',
      laptopImage: codefiedSolutionImage,
      solutions: [
        {
          icon: 'gear',
          title: 'Automated Workflows',
          description:
            'Codefied eliminated manual inefficiencies by integrating multiple legacy systems through custom API solutions. This automation significantly reduced processing time, enhanced data accuracy, and provided seamless information flow across departments, improving overall user experience.',
        },
        {
          icon: 'lightning',
          title: 'Scalability & Stability',
          description:
            'To support growing operational demands, a microservices-based architecture was deployed, ensuring high availability and fault tolerance. By implementing DevOps best practices, including CI/CD pipelines, Infrastructure as Code (IaC), and automated monitoring, Codefied enhanced the platform\'s stability, efficiency, and scalability.',
        },
        {
          icon: 'star',
          title: 'Feature Enhancements',
          description:
            'Codefied worked closely with the client to introduce new, intelligent features that increased platform flexibility and responsiveness. Customizable dashboards, advanced analytics, and real-time reporting empowered teams to make data-driven decisions, improving operational efficiency.',
        },
      ],
    },
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'D3.js',
      'AWS',
    ],
    features: [
      'Real-time financial dashboards',
      'Customizable reports and visualizations',
      'Predictive analytics and forecasting',
      'Multi-currency support',
      'Data export and sharing',
      'Automated financial alerts',
    ],
    showcaseImages: [
      { type: 'laptop', image: blog9, description: 'Main analytics dashboard' },
      {
        type: 'laptop',
        image: blog1,
        description: 'Financial reports interface',
      },
      { type: 'mobile', image: blog2, description: 'Mobile analytics app' },
    ],
    similarProjects: [2, 4, 7],
  },
];

// Helper function to get project by slug
export const getProjectBySlug = slug => {
  return projectData.find(project => project.slug === slug);
};

// Helper function to get project by id
export const getProjectById = id => {
  return projectData.find(project => project.id === id);
};

// Helper function to get similar projects
export const getSimilarProjects = (currentProjectId, limit = 3) => {
  const currentProject = getProjectById(currentProjectId);
  if (!currentProject) return [];

  return projectData
    .filter(
      project =>
        project.id !== currentProjectId &&
        project.category === currentProject.category
    )
    .slice(0, limit);
};

// Helper function to get all projects
export const getAllProjects = () => {
  return projectData;
};

// Helper function to get projects by category
export const getProjectsByCategory = category => {
  return projectData.filter(project => project.category === category);
};

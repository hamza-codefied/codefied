import product1 from '@/images/product1.jpg';
import product2 from '@/images/product2.jpg';
import product3 from '@/images/product3.jpg';
import productA from '@/images/productA.png';
import productB from '@/images/productB.png';
import productC from '@/images/productC.png';
import productD from '@/images/productD.png';

const products = [
  {
    id: 1,
    slug: 'build-my-plan',
    title: 'Build My Plan',
    subtitle: 'Design Floor Plans Faster',
    thumnailImage: product1,
    short:
      'Create, edit, and download multi-floor plans with smart tools and stunning visuals — no CAD skills needed.',
    description:
      'Build My Plan helps contractors, architects and homeowners rapidly create accurate multi-floor plans. Includes snapping guides, furniture library, export to PNG, PDF, DWG and collaborative sharing.',
    features: [
      {
        image: productA,
        title: 'Multi-floor Editing',
        description:
          'Easily design multiple levels with automatic floor alignment and layer management.',
        button: { label: 'Try it now', href: '/signup' },
      },
      {
        image: productB,
        title: 'Smart Snapping & Guides',
        description:
          'Draw precisely with intelligent snapping, alignment guides, and grid tools.',
        button: { label: 'Learn more', href: '/features/snapping' },
      },
      {
        image: productC,
        title: 'Export in Any Format',
        description:
          'Download your plan as PNG, PDF, or DWG with full resolution and layers.',
        button: { label: 'See export options', href: '/docs/export' },
      },
      {
        image: productD,
        title: 'Furniture Library',
        description:
          'Access 2000+ prebuilt furniture, doors, and material assets for realistic layouts.',
        button: { label: 'Browse library', href: '/library' },
      },
    ],
  },
  {
    id: 2,
    slug: 'visual-dashboard',
    title: 'Visual Dashboard',
    subtitle: 'Analytics & Insights',
    thumnailImage: product2,
    short:
      'Beautiful dashboards with prebuilt widgets and custom reporting to track KPIs and visualize product data.',
    description:
      'Visual Dashboard provides real-time charts, shareable reports and adaptive widgets so your team can monitor metrics and KPIs effortlessly.',
    features: [
      {
        image: productA,
        title: 'Real-time Charts',
        description:
          'Monitor your business metrics instantly with live data updates.',
        button: { label: 'View charts', href: '/demo' },
      },
      {
        image: productB,
        title: 'Custom Dashboards',
        description:
          'Create dashboards that fit your team’s exact reporting needs.',
        button: { label: 'Customize yours', href: '/contact' },
      },
      {
        image: productC,
        title: 'Shareable Reports',
        description: 'Generate and export PDF/CSV reports for quick sharing.',
        button: { label: 'Export report', href: '/docs/reports' },
      },
      {
        image: productD,
        title: 'Access Control',
        description:
          'Set granular permissions and role-based dashboard visibility.',
        button: { label: 'Set roles', href: '/admin' },
      },
    ],
  },
  {
    id: 3,
    slug: 'mobile-studio',
    title: 'Mobile Studio',
    subtitle: 'Design on the go',
    thumnailImage: product3,
    short:
      'A mobile-first editor for creating and previewing designs directly from your phone or tablet.',
    description:
      'Mobile Studio brings the core functionality of our editor into a responsive mobile app — sketch, annotate and share while you’re on-site.',
    features: [
      {
        image: productA,
        title: 'Touch-first Interface',
        description:
          'Intuitive gestures for drawing, panning, and scaling on mobile devices.',
        button: { label: 'Try demo', href: '/apps' },
      },
      {
        image: productB,
        title: 'Offline Editing',
        description:
          'Continue working seamlessly even without an internet connection.',
        button: { label: 'Learn more', href: '/offline' },
      },
      {
        image: productC,
        title: 'Quick Share Links',
        description:
          'Generate shareable links to instantly send your work to clients.',
        button: { label: 'Share now', href: '/share' },
      },
      {
        image: productD,
        title: 'Camera & AR Integration',
        description:
          'Visualize your plans in augmented reality using device camera.',
        button: { label: 'See AR view', href: '/ar' },
      },
    ],
  },
];

export function getProductBySlug(slug) {
  return products.find(p => p.slug === slug);
}

export default products;

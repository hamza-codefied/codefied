export const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Codefied
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A professional React application template built with modern tools and best practices.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              Codefied was created to provide developers with a solid foundation for building 
              modern React applications. We believe in clean code, professional structure, 
              and developer experience that scales.
            </p>
            <p className="text-gray-600">
              Our template includes everything you need to get started quickly while maintaining 
              the flexibility to customize and extend as your project grows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Technology Stack</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• React 18 with modern hooks</li>
                <li>• Vite for fast development</li>
                <li>• Tailwind CSS for styling</li>
                <li>• React Router for navigation</li>
                <li>• Professional folder structure</li>
                <li>• Path aliases for clean imports</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Responsive design system</li>
                <li>• Reusable UI components</li>
                <li>• Modern development setup</li>
                <li>• ESLint configuration</li>
                <li>• PostCSS integration</li>
                <li>• Professional documentation</li>
              </ul>
            </div>
          </div>

          <div className="bg-primary-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready to Start Building?
            </h3>
            <p className="text-gray-600 mb-6">
              Get started with Codefied and build your next amazing project with confidence.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

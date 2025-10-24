import { Link } from 'react-router-dom'
import { Button } from '@components/ui/Button'

export const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary-600">404</h1>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for. 
            It might have been moved, deleted, or doesn't exist.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link to="/">
            <Button size="lg" className="w-full">
              Go Home
            </Button>
          </Link>
          <Button variant="ghost" onClick={() => window.history.back()}>
            Go Back
          </Button>
        </div>
      </div>
    </div>
  )
}

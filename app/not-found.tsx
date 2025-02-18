import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="text-center space-y-6">
        <h1 className="text-9xl font-bold leading-tight tracking-tighter md:text-5x ">404</h1>
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold ">Oops! Page not found</h2>
          <p className="">The page you're looking for doesn't seem to exist</p>
        </div>
        <Link 
          href="/" 
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
} 
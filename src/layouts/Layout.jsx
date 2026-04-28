import { Header } from '@components/layout/Header'
import { Footer } from '@components/layout/Footer'

export const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col max-w-full">
      <div className="w-full bg-yellow-300 text-black text-sm sm:text-base font-semibold px-4 min-h-10 flex items-center justify-center">
        <div className="flex items-center justify-center gap-2 leading-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-triangle-alert-icon lucide-triangle-alert"
            aria-hidden="true"
          >
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
            <path d="M12 9v4" />
            <path d="M12 17h.01" />
          </svg>
          <span>Website is under development.</span>
        </div>
      </div>
      <Header />
      <main className="flex-1 max-w-full">
        {children}
      </main>
      <Footer />
    </div>
  )
}

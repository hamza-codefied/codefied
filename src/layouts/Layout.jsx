import { Header } from '@components/layout/Header'
import { Footer } from '@components/layout/Footer'

export const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col max-w-full">
      <div className="w-full bg-yellow-300 text-black text-center text-sm sm:text-base font-semibold py-2 px-4">
        Website is under development.
      </div>
      <Header />
      <main className="flex-1 max-w-full">
        {children}
      </main>
      <Footer />
    </div>
  )
}

import { Header } from '@components/layout/Header'
import { Footer } from '@components/layout/Footer'

export const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden max-w-full">
      <Header />
      <main className="flex-1 overflow-x-hidden max-w-full">
        {children}
      </main>
      <Footer />
    </div>
  )
}

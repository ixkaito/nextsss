import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

type Props = {
  children?: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex shrink-0 grow flex-col p-4 sm:p-6 md:p-8">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout

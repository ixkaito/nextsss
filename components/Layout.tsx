import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

type Props = {
  children?: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex-shrink-0 flex flex-col p-4 sm:p-6 md:p-8">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout

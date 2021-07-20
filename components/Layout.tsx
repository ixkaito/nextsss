import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

type Props = {
  children?: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen grid items-start">
      <Header />
      <main className="p-4 sm:p-6 md:p-8">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout

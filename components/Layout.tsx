import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

type Props = {
  children?: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-col grow shrink-0 p-4 sm:p-6 md:p-8">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout

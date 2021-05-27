import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

type Props = {
  children?: ReactNode
}

const Page: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="p-8">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Page

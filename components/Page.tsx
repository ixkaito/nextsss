import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

type Props = {
  children?: ReactNode
}

export default function Page({ children }: Props) {
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

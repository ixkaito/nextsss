import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

type Props = {
  children?: ReactNode
}

export default function Page({ children }: Props): JSX.Element {
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

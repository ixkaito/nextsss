import Header from './Header'
import Footer from './Footer'

export default function Page({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

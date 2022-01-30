import { NextSeo } from 'next-seo'
import Layout from '../components/Layout'
import Image from '../components/Image'
import styles from '../styles/Home.module.scss'
import logo from '../public/logo@2x.png'

const Home: React.FC = () => {
  return (
    <Layout>
      <NextSeo
        title="NextSSS"
        description="Next.js Static Site Starter"
        openGraph={{
          type: 'website',
        }}
      />
      <div
        className={`flex-grow flex-shrink-0 grid place-content-center place-items-center ${styles.hero}`}
      >
        <figure className="max-w-3xl">
          <Image src={logo} alt="NextSSS Logo" />
        </figure>
        <h1 className="mt-10 font-extrabold text-center">Hello, World!</h1>
      </div>
    </Layout>
  )
}

export default Home

import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.scss'
import building from '../public/building.jpg'

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
      <h1 className={`text-center uppercase ${styles.title}`}>Hello, World!</h1>
      <figure className="mt-8">
        <Image src={building} alt="Building" />
      </figure>
    </Layout>
  )
}

export default Home

import { NextSeo } from 'next-seo'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.scss'

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
    </Layout>
  )
}

export default Home

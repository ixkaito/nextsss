import { NextSeo } from 'next-seo'
import Page from '../components/Page'
import styles from '../styles/Home.module.scss'

const Home: React.FC = () => {
  return (
    <Page>
      <NextSeo
        title="NextSSS"
        description="Next.js Static Site Starter"
        openGraph={{
          type: 'website',
        }}
      />
      <h1 className={`text-center uppercase ${styles.title}`}>Hello, World!</h1>
    </Page>
  )
}

export default Home

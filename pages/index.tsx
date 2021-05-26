import { NextSeo } from 'next-seo'
import Page from '../components/Page'
import styles from '../styles/Home.module.scss'

export default function Home(): JSX.Element {
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

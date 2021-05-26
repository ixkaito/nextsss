import Head from 'next/head'
import Page from '../components/Page'
import styles from '../styles/Home.module.scss'

export default function Home(): JSX.Element {
  return (
    <Page>
      <Head>
        <title>Home</title>
      </Head>
      <h1 className={`text-center uppercase ${styles.title}`}>Hello, World!</h1>
    </Page>
  )
}

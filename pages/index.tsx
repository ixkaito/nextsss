import Head from 'next/head'
import Page from '../components/Page'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <Page>
      <Head>
        <title>Home</title>
      </Head>
      <h1 className={styles.title}>Home</h1>
    </Page>
  )
}

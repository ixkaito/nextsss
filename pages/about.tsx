import Head from 'next/head'
import Page from '../components/Page'
import styles from '../styles/About.module.scss'

export default function About() {
  return (
    <Page>
      <Head>
        <title>About</title>
      </Head>
      <h1 className={styles.title}>About</h1>
    </Page>
  )
}

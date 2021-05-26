import Head from 'next/head'
import Page from '../components/Page'
import styles from '../styles/About.module.scss'

export default function About(): JSX.Element {
  return (
    <Page>
      <Head>
        <title>About</title>
      </Head>
      <div className="max-w-xl mx-auto">
        <h1 className={styles.title}>About</h1>
        <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipiscing elit risus lobortis, diam elementum metus suscipit inceptos vehicula convallis ridiculus luctus, est volutpat eleifend posuere aliquet accumsan a fusce. Ligula leo hendrerit non himenaeos mattis cum blandit senectus tempor velit, interdum pharetra eget elit pellentesque scelerisque class augue netus, rhoncus rutrum malesuada luctus adipiscing proin ullamcorper parturient inceptos. Class ut pretium mattis blandit velit augue conubia montes sagittis fringilla, ad placerat turpis platea fermentum tempor orci inceptos aenean, habitasse nascetur condimentum amet pharetra parturient ac dolor aliquet.</p>
      </div>
    </Page>
  )
}

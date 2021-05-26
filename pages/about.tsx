import { NextSeo } from 'next-seo'
import Page from '../components/Page'
import styles from '../styles/About.module.scss'

export default function About(): JSX.Element {
  return (
    <Page>
      <NextSeo
        title="About"
      />
      <div className="max-w-xl mx-auto">
        <h1 className={styles.title}>About NextSSS</h1>
        <p className="mt-4">NextSSS is a Next.js static site starter including full setup for TypeScript, Tailwind CSS, Google Analytics, Next SEO, etc.</p>
      </div>
    </Page>
  )
}

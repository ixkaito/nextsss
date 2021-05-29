import { NextSeo } from 'next-seo'
import Layout from '../components/Layout'
import styles from '../styles/About.module.scss'

const About: React.FC = () => {
  return (
    <Layout>
      <NextSeo
        title="About"
      />
      <div className="max-w-xl mx-auto">
        <h1 className={styles.title}>About NextSSS</h1>
        <p className="mt-4">NextSSS is a Next.js static site starter including full setup for TypeScript, Tailwind CSS, Google Analytics, Next SEO, etc.</p>
      </div>
    </Layout>
  )
}

export default About

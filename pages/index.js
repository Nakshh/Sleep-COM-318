import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container" style={{
      backgroundColor: '#1e1e1e',
      color: '#f1f1f1',
    }}>
      <Head>
        <title>Sleep Tracker for College Students</title>
        <link rel="icon" href="/favicon.ico" />
        <style>
          {`
            a {
              color: #8bc34a;
            }
            code {
              background-color: #333;
              color: #ccc;
            }
          `}
        </style>
      </Head>

      <main>
        <Header title="Improve Your Sleep, Boost Your Success" />
        <p className="description" style={{
          fontSize: '1.2rem',
          lineHeight: '1.5',
        }}>
          As a college student, getting enough quality sleep can be a challenge. But did you know that poor sleep habits can negatively impact your academic performance, mental health, and overall well-being?
        </p>
        <p className="description" style={{
          fontSize: '1.2rem',
          lineHeight: '1.5',
        }}>
          Our app helps you track your sleep patterns, identify areas for improvement, and develop healthier sleep habits. Get started by editing <code>pages/index.js</code> to customize the experience for your needs.
        </p>
      </main>

      <Footer />
    </div>
  )
}
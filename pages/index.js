import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <style>
    .dark-theme {
  background-color: #1e1e1e;
  color: #f1f1f1;
}

.dark-theme a {
  color: #8bc34a;
}

.dark-theme code {
  background-color: #333;
  color: #ccc;
}
    </style>
    <div className="container dark-theme">
      <Head>
        <title>Sleep Tracker for College Students</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Improve Your Sleep, Boost Your Success" />
        <p className="description">
          As a college student, getting enough quality sleep can be a challenge. But did you know that poor sleep habits can negatively impact your academic performance, mental health, and overall well-being? 
        </p>
        <p className="description">
          Our app helps you track your sleep patterns, identify areas for improvement, and develop healthier sleep habits. Get started by editing <code>pages/index.js</code> to customize the experience for your needs.
        </p>
      </main>

      <Footer />
    </div>
  )
}

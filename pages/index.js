import Head from 'next/head';

import HomePage from '../components/Home';

export default function Home() {
  return (
    <div >
      <Head>
        <title>Crystal | Making Accessible Learning</title>
        <meta name="description" content="Crystal website" />
        <link rel="icon" href="/images/favicon.icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </Head>
      {/* <Nav /> */}
      <HomePage />
      {/* <Footer /> */}
    </div>
  )
}

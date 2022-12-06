import Head from 'next/head';
import Layout from '../components/layout';
import '../styles/globals.css';
import '../styles/tailGlobal.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>MDX Blog</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      <Layout>
        <main className="container mx-auto px-4">
          <Component {...pageProps} />
        </main>
      </Layout>
    </>
  )
}

export default MyApp

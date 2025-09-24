import '@/styles/globals.css';
import Navigation from '@/components/Navigation';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Girja Sankar Tiwari - Senior Frontend Developer | Fintech Specialist</title>
        <meta name="description" content="Senior Frontend Developer with 4+ years of experience building enterprise-scale fintech solutions. Specialized in React, Next.js, Angular, and TypeScript. Currently at Wealthy, previously at Open Financial." />
        <meta name="keywords" content="Frontend Developer, React Developer, Next.js Expert, Angular Developer, Fintech Developer, TypeScript, JavaScript, Web Development" />
        <meta property="og:title" content="Girja Sankar Tiwari - Senior Frontend Developer" />
        <meta property="og:description" content="Building high-performance web applications that handle billions in transactions and serve millions of users." />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navigation />
        <Component {...pageProps} />
      </main>
    </>
  );
}
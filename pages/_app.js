import '@/styles/globals.css';
import Navigation from '@/components/Navigation';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Girja Sankar Tiwari - Senior Frontend Developer | Fintech Specialist</title>
        <meta name="description" content="Senior Frontend Developer with 4+ years of experience building enterprise-scale fintech solutions. Specialized in React, Next.js, Angular, and TypeScript. Currently at Wealthy, previously at Open Financial." />
        <meta name="keywords" content="Frontend Developer, React Developer, Next.js Expert, Angular Developer, Fintech Developer, TypeScript, JavaScript, Web Development, Girja Sankar Tiwari" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.girja.co.in" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Girja Sankar Tiwari - Senior Frontend Developer" />
        <meta property="og:description" content="Building high-performance web applications that handle billions in transactions and serve millions of users." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.girja.co.in" />
        <meta property="og:image" content="https://www.girja.co.in/og-image.jpg" />
        <meta property="og:site_name" content="Girja Sankar Tiwari Portfolio" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="author" content="Girja Sankar Tiwari" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Favicon with multiple formats for better browser support */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico?v=2" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg?v=2" />
        <link rel="shortcut icon" href="/favicon.ico?v=2" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg?v=2" />
        
        {/* Structured Data - Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Girja Sankar Tiwari",
              "jobTitle": "Senior Frontend Developer | Frontend Developer | React Developer | Next.js Developer | Angular Developer | TypeScript Developer | JavaScript Developer | Fintech Specialist | Full Stack Developer | Software Engineer",
              "description": "Senior Frontend Developer with 4+ years of experience building enterprise-scale fintech solutions",
              "url": "https://www.girja.co.in",
              "email": "tiwarigirjashankar36@gmail.com",
              "telephone": "+919897747567",
              "sameAs": [
                "https://www.linkedin.com/in/girja-sankar-tiwari",
                "https://github.com/GIRJASANKAR"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Wealthy"
              },
              "alumniOf": [
                {
                  "@type": "Organization",
                  "name": "Open Financial"
                }
              ],
              "knowsAbout": [
                "React.js",
                "Next.js",
                "Angular",
                "TypeScript",
                "JavaScript",
                "Fintech",
                "Frontend Development",
                "Web Development",
                "Redux",
                "Node.js",
                "REST APIs",
                "GraphQL"
              ]
            })
          }}
        />
      </Head>
      <main>
        <Navigation />
        <Component {...pageProps} />
      </main>
    </>
  );
}
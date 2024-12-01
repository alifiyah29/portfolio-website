// import type { AppProps } from 'next/app';
// import '../styles/globals.css';

// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }

// export default MyApp;

import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Alifiyah Shahid Portfolio</title>
        <meta name="description" content="Portfolio of Alifiyah Shahid, showcasing projects, skills, and achievements in software development." />
        <link rel="icon" href="/portfolio.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

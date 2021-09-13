import 'destyle.css';
import '../styles/globals.scss';
import { LayoutMain } from '../components/layouts/layoutMain';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Work+Sans:wght@300&display=swap"
        />
      </Head>
      <LayoutMain>
        <Component {...pageProps} />
      </LayoutMain>
    </>
  );
};

export default MyApp;

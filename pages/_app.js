import 'sanitize.css';
import '../styles/globals.scss';
import LayoutMain from '../components/layouts/layoutMain';

function MyApp({ Component, pageProps }) {
  return (
    <LayoutMain>
      <Component {...pageProps} />
    </LayoutMain>
  );
}

export default MyApp;

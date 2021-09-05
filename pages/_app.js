import 'destyle.css';
import '../styles/globals.scss';
import { LayoutMain } from '../components/layouts/layoutMain';

const MyApp = ({ Component, pageProps }) => {
  return (
    <LayoutMain>
      <Component {...pageProps} />
    </LayoutMain>
  );
};

export default MyApp;

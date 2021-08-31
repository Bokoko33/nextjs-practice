import Header from '../common/header';
import Footer from '../common/footer';
import styles from '../../styles/layouts/layoutMain.module.scss';

export default function layoutMain({ children }) {
  return (
    <>
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  );
}

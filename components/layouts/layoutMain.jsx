import Header from '../common/header';
import Footer from '../common/footer';

export default function layoutMain({ children }) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}

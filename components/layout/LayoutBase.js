import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';
import Meta from 'components/layout/Meta';

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Header />
      <div className="page-wrapper">{children}</div>
      <Footer />
    </>
  );
}

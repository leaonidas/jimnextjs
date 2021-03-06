import Footer from 'components/layout/footer';
import Header from 'components/layout/header';
import Meta from 'components/layout/meta';

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

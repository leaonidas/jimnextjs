import BaseMeta from 'components/layout/BaseMeta';
import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';

export default function Layout({ children }) {
  return (
    <>
      <BaseMeta />
      <Header />
      <div className="page-wrapper">{children}</div>
      <Footer />
    </>
  );
}

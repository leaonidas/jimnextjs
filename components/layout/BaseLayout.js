import BaseMeta from 'components/layout/BaseMeta';
import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';
import { PageTransition } from 'next-page-transitions';

export default function Layout({ children }) {
  return (
    <>
      <BaseMeta />
      <Header />
      <PageTransition timeout={300} classNames="page-transition">
        <div>{children}</div>
      </PageTransition>
      <Footer />

      <style jsx global>{`
        .page-transition-enter {
          opacity: 0;
        }
        .page-transition-enter-active {
          opacity: 1;
          transition: opacity 150ms ease-in-out;
        }
        .page-transition-exit {
          opacity: 1;
        }
        .page-transition-exit-active {
          opacity: 0;
          transition: opacity 150ms ease-in-out;
        }
      `}</style>
    </>
  );
}

import '../styles/all.scss';

import { PageTransition } from 'next-page-transitions';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <PageTransition timeout={300} classNames="page-transition">
        <Component {...pageProps} />
      </PageTransition>

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

export default MyApp;

import '../styles/all.scss';

import BaseLayout from 'components/layout/BaseLayout';

function MyApp({ Component, pageProps }) {
  return (
    <BaseLayout>
      <Component {...pageProps} />
    </BaseLayout>
  );
}

export default MyApp;

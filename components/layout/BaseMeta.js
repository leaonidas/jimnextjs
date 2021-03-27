const { globals } = require('globals.ts');
import Head from 'next/head';

export default function Meta(props) {
  const { title, description, link, image } = props;

  return (
    <Head>
      <title>{title ? title : 'JIM Building'}</title>
      <meta
        name="description"
        content={description ? description : 'Empresa de Construção'}
      />
      {link && <link rel="canonical" href={link} />}
      {description && <meta name="description" content={description} />}

      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={title} />
      <meta property="og:site_name" content={globals.siteName} />
      {link && <meta property="og:url" content={`${link}`} />}
      {image && <meta property="og:image" content={`${image}`} />}
      {description && (
        <meta
          name="og:description"
          property="og:description"
          content={description}
        />
      )}

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:site" content={globals.twitterHandle} />
      <meta name="twitter:creator" content={globals.twitterHandle} />
      {image && <meta name="twitter:image" content={image} />}
    </Head>
  );
}

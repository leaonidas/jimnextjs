import Layout from 'components/layout/layout';
import Meta from 'components/layout/Meta';
import Image from 'next/image';

import Container from './container';
import { Markdown } from './Markdown';

export default function DetailPost({ post }) {
  const { title, location, year } = post;

  return (
    <Layout>
      <Meta
        title={post.title}
        desc={post.description}
        link={post.canonicalUrl}
        image={post.bannerPhot}
      />
      <Container className="container--big">
        {post.bannerPhoto && (
          <Image
            className="detail-post-image"
            src={post.bannerPhoto}
            alt={post.title}
            width="1440"
            height="580"
          />
        )}
      </Container>

      <div className="detail-post">
        <Container>
          <div className="detail-post-title">
            {title && <h1>{title}</h1>}
            {location && <p>{location}</p>}
            {year && <p>{year}</p>}
          </div>

          <div className="detail-post-content">
            <Markdown source={post.content} />
          </div>
        </Container>
      </div>
    </Layout>
  );
}

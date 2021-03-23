import BaseLayout from 'components/layout/BaseLayout';
import Meta from 'components/layout/Meta';
import Image from 'next/image';

import Container from './Container';
import { Markdown } from './Markdown';

export default function DetailPost({ post }) {
  const { title, location, year } = post;

  return (
    <BaseLayout>
      <Meta
        title={post.title}
        desc={post.description}
        link={post.canonicalUrl}
        image={post.bannerPhot}
      />

      <section>
        <Container>
          <div className="section__header">
            {title && <h1>{title}</h1>}
            {location && <p>{location}</p>}
            {year && <p>{year}</p>}
          </div>
        </Container>
        <Container className="container--big">
          {post.bannerImage && (
            <Image
              className="detail-post-image"
              src={post.bannerImage}
              alt={post.bannerImageAlt}
              width="1440"
              height="580"
            />
          )}
        </Container>
      </section>

      <div className="detail-post">
        <Container>
          <div className="detail-post-content">
            <Markdown source={post.content} />
          </div>
        </Container>
      </div>
    </BaseLayout>
  );
}

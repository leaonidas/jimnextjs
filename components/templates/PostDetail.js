import BaseLayout from 'components/layout/BaseLayout';
import BaseMeta from 'components/layout/BaseMeta';
import Container from 'components/layout/Container';
import Image from 'next/image';

import { Markdown } from '../global/Markdown';

export default function PostDetail({ post }) {
  const { title, location, year } = post;

  return (
    <BaseLayout>
      <BaseMeta
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

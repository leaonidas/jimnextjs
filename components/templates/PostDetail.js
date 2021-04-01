import Container from 'components/global/Container';
import { Markdown } from 'components/global/Markdown';
import BaseMeta from 'components/layout/BaseMeta';
import Image from 'next/image';

export default function PostDetail({ post }) {
  const { title, location, year } = post;

  return (
    <>
      <BaseMeta
        title={post.title}
        desc={post.description}
        link={post.canonicalUrl}
        image={post.bannerPhot}
      />

      <section>
        <Container>
          <div className="section-main">
            {title && <h1>{title}</h1>}
            {location && <p>{location}</p>}
            {year && <p>{year}</p>}
          </div>
        </Container>
        <Container className="container--big">
          {post.bannerImage && (
            <Image
              className="post-detail-image"
              src={post.bannerImage}
              alt={post.bannerImageAlt}
              width="1440"
              height="580"
            />
          )}
        </Container>
      </section>

      <div className="post-detail">
        <Container>
          <div className="post-detail-content">
            <Markdown source={post.content} />
          </div>
        </Container>
      </div>
    </>
  );
}

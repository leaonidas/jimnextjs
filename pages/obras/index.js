import Container from 'components/global/Container';
import MasonryGrid from 'components/global/MasonryGrid';
import ObraThumbnail from 'components/global/ObraThumbnail';
import LayoutBase from 'components/layout/LayoutBase';
const { loadObrasPosts } = require('loader.ts');

export default function Obras(props) {
  return (
    <LayoutBase>
      <Container>
        <section>
          <div className="section__header">
            <h1>Obras</h1>
            <p>Explore o nosso portefólio.</p>
          </div>

          <MasonryGrid>
            {props.posts.map((post, i) => {
              return (
                <div key={i}>
                  <ObraThumbnail
                    title={post.title}
                    location={post.location}
                    year={post.year}
                    slug={post.path}
                    imagePath={post.thumbnailImage}
                    imageAlt={post.thumbnailAlt}
                  />
                </div>
              );
            })}
          </MasonryGrid>
        </section>
      </Container>
    </LayoutBase>
  );
}

export const getStaticProps = async () => {
  const posts = await loadObrasPosts();

  const props = {
    posts
  };

  return { props };
};
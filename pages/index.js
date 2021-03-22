import Container from 'components/global/container';
import Slideshow from 'components/global/slideshow';
import Layout from 'components/layout/layout';

export default function Home() {
  return (
    <Layout>
      <section className="home-slideshow">
        <Container className="container--big">
          <Slideshow>
            <div className="slideshow__slide">
              <img src="/images/slideshow/first.jpg" alt="Construction sight" />
            </div>
            <div className="slideshow__slide">
              <img
                src="/images/slideshow/second.jpg"
                alt="Construction sight"
              />
            </div>
            <div className="slideshow__slide">
              <img src="/images/slideshow/third.jpg" alt="Construction sight" />
            </div>
          </Slideshow>
        </Container>
      </section>
    </Layout>
  );
}

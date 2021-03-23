import Container from 'components/global/Container';
import Slideshow from 'components/global/Slideshow';
import BaseLayout from 'components/layout/BaseLayout';

export default function Home() {
  return (
    <BaseLayout>
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
    </BaseLayout>
  );
}

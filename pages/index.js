import Container from 'components/global/container';
import Slideshow from 'components/global/slideshow';
import Layout from 'components/layout/layout';

export default function Home() {
  return (
    <Layout>
      <section className="home-slideshow">
        <Container>
          <Slideshow />
        </Container>
      </section>
    </Layout>
  );
}

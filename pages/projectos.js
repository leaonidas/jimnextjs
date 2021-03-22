import Container from 'components/global/container';
import MasonryGrid from 'components/global/masonry-grid';
import ObraThumbnail from 'components/global/obra-thumbnail';
import Layout from 'components/layout/layout';

export default function Projectos() {
  return (
    <Layout>
      <Container>
        <section>
          <div className="section__header">
            <h1>Projectos</h1>
            <p>Explore o nosso portefólio.</p>
          </div>

          <MasonryGrid>
            <div>
              <ObraThumbnail
                title="Obra 0"
                location="Guimarães"
                year="2018"
                slug="/obra-0"
                imagePath="/images/obras/placeholders/imagem-0.jpg"
                imageAlt="Obra 0"
              />
            </div>
            <div>
              <ObraThumbnail
                title="Obra 1"
                location="Guimarães"
                year="2018"
                slug="/obra-1"
                imagePath="/images/obras/placeholders/imagem-1.jpg"
                imageAlt="Obra 1"
              />
            </div>
            <div>
              <ObraThumbnail
                title="Obra 2"
                location="Guimarães"
                year="2018"
                slug="/obra-2"
                imagePath="/images/obras/placeholders/imagem-2.jpg"
                imageAlt="Obra 2"
              />
            </div>
            <div>
              <ObraThumbnail
                title="Obra 3"
                location="Guimarães"
                year="2018"
                slug="/obra-3"
                imagePath="/images/obras/placeholders/imagem-3.jpg"
                imageAlt="Obra 3"
              />
            </div>
            <div>
              <ObraThumbnail
                title="Obra 4"
                location="Guimarães"
                year="2018"
                slug="/obra-4"
                imagePath="/images/obras/placeholders/imagem-4.jpg"
                imageAlt="Obra 4"
              />
            </div>
            <div>
              <ObraThumbnail
                title="Obra 5"
                location="Guimarães"
                year="2018"
                slug="/obra-5"
                imagePath="/images/obras/placeholders/imagem-5.jpg"
                imageAlt="Obra 5"
              />
            </div>
            <div>
              <ObraThumbnail
                title="Obra 6"
                location="Guimarães"
                year="2018"
                slug="/obra-6"
                imagePath="/images/obras/placeholders/imagem-6.jpg"
                imageAlt="Obra 6"
              />
            </div>
            <div>
              <ObraThumbnail
                title="Obra 7"
                location="Guimarães"
                year="2018"
                slug="/obra-7"
                imagePath="/images/obras/placeholders/imagem-7.jpg"
                imageAlt="Obra 7"
              />
            </div>
          </MasonryGrid>
        </section>
      </Container>
    </Layout>
  );
}

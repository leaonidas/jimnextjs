import Container from 'components/global/Container';
import Slideshow from 'components/global/Slideshow';
import BaseLayout from 'components/layout/BaseLayout';
import { BiWallet } from 'react-icons/bi';

export default function Home() {
  return (
    <BaseLayout>
      <section className="home-slideshow">
        <Container>
          <div className="section-main">
            <h1>Engenharia e Construção</h1>
            <p>Mais de 20 anos de experiência ao seu dispor.</p>
          </div>
        </Container>
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

      <section className="home-values">
        <Container>
          <h2>Engenharia e Construção</h2>

          <div className="section-cols">
            <div className="section-cols__item">
              <div className="icon">
                <BiWallet />
              </div>
              <h3>Confiança</h3>
              <p>
                A integridade e a comunicação aberta é o que nos move e nos
                permite atingir os melhores resultados
              </p>
            </div>
            <div className="section-cols__item">
              <div className="icon">
                <BiWallet />
              </div>
              <h3>Confiança</h3>
              <p>
                A integridade e a comunicação aberta é o que nos move e nos
                permite atingir os melhores resultados
              </p>
            </div>
            <div className="section-cols__item">
              <div className="icon">
                <BiWallet />
              </div>
              <h3>Confiança</h3>
              <p>
                A integridade e a comunicação aberta é o que nos move e nos
                permite atingir os melhores resultados
              </p>
            </div>
          </div>
        </Container>
      </section>
    </BaseLayout>
  );
}

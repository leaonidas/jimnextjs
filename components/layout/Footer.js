import Button from 'components/global/Button';
import Container from 'components/global/Container';
import PreFooter from 'components/global/PreFooter';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Footer() {
  const router = useRouter();
  const isObrasPage = router.pathname === '/obras';

  return (
    <footer className="footer">
      <PreFooter>
        <h3>Sobre nós</h3>
        <p>
          A JIM Building é uma empresa de construção baseada em Guimarães. Com
          mais de 20 anos de experiência em construção e consultoria financeira.
        </p>
        <Button variant="secondary">
          {!isObrasPage ? (
            <Link href="/obras">Conheça as nossas obras</Link>
          ) : (
            <Link href="/empresa">Conheça a JIM Building</Link>
          )}
        </Button>
      </PreFooter>

      <Container>
        <div className="footer-top">
          <div className="footer-contactos">
            <div className="footer-contactos__item">
              <strong>Jorge Leão</strong>
              <div>
                <a href="tel:917396460">917396460</a>
              </div>
              <div>
                <a href="mailto:jorge.leao@jimbuilding.pt">
                  jorge.leao@jimbuilding.pt
                </a>
              </div>
            </div>
            <div className="footer-contactos__item">
              <strong>João Leão</strong>
              <div>
                <a href="tel:911757851">911757851</a>
              </div>
              <div>
                <a href="mailto:joao.leao@jimbuilding.pt">
                  joao.leao@jimbuilding.pt
                </a>
              </div>
            </div>
          </div>

          <div className="footer-escritorio">
            <strong>Guimarães</strong>
            <p>
              Rua João Oliveira Salgado, <br />
              nº 375
            </p>
          </div>
        </div>

        <div className="footer-logos">
          <div className="footer-logos__item">
            <a
              href="http://www.impic.pt/impic/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/logos/logo-impic-white.png" alt="Impic Logo" />
            </a>
          </div>
          <div className="footer-logos__item">
            <img src="/images/logos/logo-ruis-white.png" alt="RUIS Logo" />
          </div>
          <div className="footer-logos__item">
            <a href="https://www.aiccopn.pt/" target="_blank" rel="noreferrer">
              <img
                src="/images/logos/logo-aiccopn-white.png"
                alt="AICCOPN Logo"
              />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            Copyright <strong> &copy; JIM BUILDING - Engenharia, Lda.</strong>{' '}
            2021
          </p>

          <div className="footer-bottom__icons">
            <a
              href="https://www.facebook.com/JIM-Building-Engenharia-620231095066877"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/facebook.svg" alt="FB Logo" />
            </a>
            <a
              href="https://www.instagram.com/jimbuilding/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/instagram.svg" alt="IG logo" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

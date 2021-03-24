import Container from 'components/global/Container';

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-contactos">
          <h2>Contactos</h2>
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
          <h2>Sede</h2>
          <strong>Guimarães</strong>
          <p>
            Rua João Oliveira Salgado, <br />
            nº 375
          </p>
        </div>

        <div className="footer-logos">
          <div className="footer-logos__item aiccopn">
            <a href="https://www.aiccopn.pt/" target="_blank" rel="noreferrer">
              <img src="/images/logos/logo-aiccopn.jpg" alt="AICCOPN Logo" />
            </a>
          </div>
          <div className="footer-logos__group">
            <div className="footer-logos__item impic">
              <a
                href="http://www.impic.pt/impic/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/logos/logo-impic.jpg" alt="Impic Logo" />
              </a>
            </div>

            <div className="footer-logos__item ruis">
              <img src="/images/logos/logo-ruis.jpg" alt="RUIS Logo" />
            </div>
          </div>
        </div>
      </Container>

      <div className="subfooter">
        <Container>
          <p>
            Copyright &copy; <br />
            JIM BUILDING - ENGENHARIA, LDA. 2021
          </p>
          <div className="subfooter-icons">
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
        </Container>
      </div>
    </footer>
  );
}

import Container from 'components/global/container';

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-contactos">
          <p>
            João Leão | <a href="tel:9123123123">912312312</a>
          </p>
          <p>
            Jorge Leão | <a href="tel:9123123123">912312312</a>
          </p>
        </div>

        <div className="footer-logos">
          <div className="footer-logos__item impic">
            <a
              href="http://www.impic.pt/impic/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/images/logos/Símbolo_Impic_JIMBUILDING-removebg.png"
                alt="Impic Logo"
              />
            </a>
          </div>

          <div className="footer-logos__item ruis">
            <img
              src="/images/logos/Logotipo_versao_cor-removebg.png"
              alt="RUIS Logo"
            />
          </div>

          <div className="footer-logos__item aiccopn">
            <a href="https://www.aiccopn.pt/" target="_blank" rel="noreferrer">
              <img
                src="/images/logos/Logo_Associado_AICCOPN-removebg.png"
                alt="AICCOPN Logo"
              />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

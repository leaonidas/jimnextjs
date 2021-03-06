import Container from '../global/container';

export default function Footer() {
  return (
    <footer>
      <Container>
        <div className="impic">
          <a href="http://www.impic.pt/impic/">
            <img
              src="/images/logos/Símbolo_Impic_JIMBUILDING-removebg.png"
              alt="Impic"
            />
          </a>
        </div>

        <div className="ruis">
          <img
            src="/images/logos/Logotipo_versao_cor-removebg.png"
            alt="RUIS"
          />
        </div>

        <div className="aiccopn">
          <a href="https://www.aiccopn.pt/">
            <img
              src="/images/logos/Logo_Associado_AICCOPN-removebg.png"
              alt="AICCOPN"
            />
          </a>
        </div>

        <p>
          João Leão | <a href="tel:9123123123">912312312</a>
        </p>
        <p>
          Jorge Leão | <a href="tel:9123123123">912312312</a>
        </p>
      </Container>
    </footer>
  );
}

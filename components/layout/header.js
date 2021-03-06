import Container from '../global/container';

export default function Header() {
  return (
    <header>
      <Container>
        <nav>
          <ul>
            <li>
              <a href="/empresa">Empresa</a>
            </li>
            <li>
              <a href="/servicos">Serviços</a>
            </li>
            <li>
              <a href="/obras">Obras</a>
            </li>
            <li>
              <a href="/projectos">Projectos</a>
            </li>
            <li>
              <a href="/contactos">Contactos</a>
            </li>
          </ul>
        </nav>

        <div className="logo">
          <a href="/">
            <img
              src="/images/logos/Base_JIMBuilding_mini.png"
              alt="JIM Building logo"
            />
          </a>
        </div>
      </Container>
    </header>
  );
}

import Container from 'components/global/container';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <Container>
        <div className="logo">
          <Link href="/">
            <a>
              <img
                src="/images/logos/jimbuilding-logo.svg"
                alt="JIM Building logo"
              />
            </a>
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/empresa">Empresa</Link>
            </li>
            <li>
              <Link href="/servicos">Serviços</Link>
            </li>
            <li>
              <Link href="/obras">Obras</Link>
            </li>
            <li>
              <Link href="/projectos">Projectos</Link>
            </li>
            <li>
              <Link href="/contactos">Contactos</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}

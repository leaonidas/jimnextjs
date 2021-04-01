import Container from 'components/global/Container';
import { useDisableBodyScroll } from 'hooks/disable-scroll';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export default function Header() {
  const router = useRouter();

  const [navMenu, setNavMenu] = useState();
  const toggleSidebar = () => setNavMenu(!navMenu);
  useDisableBodyScroll(navMenu);

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const handleRouteChange = _url => {
      setNavMenu(false);
    };

    router.events.on('routeChangeStart', handleRouteChange);
    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);

  return (
    <header className="header">
      <Container>
        <div className="logo">
          <Link href="/">
            <a>
              <Image
                src="/images/logos/jimbuilding-logo.svg"
                alt="JIM Building logo"
                width="160"
                height="56"
              />
            </a>
          </Link>
        </div>

        <button
          className={`nav-burger hide-md ${navMenu ? 'nav-burger--open' : ''}`}
          onClick={toggleSidebar}
        >
          <div id="burger-top"></div>
          <div id="burger-bottom"></div>
        </button>

        <nav className={`nav-menu ${navMenu ? 'nav-menu--open' : ''}`}>
          <ul>
            <li className={router.pathname === '/empresa' ? 'active' : ''}>
              <Link href="/empresa">Empresa</Link>
            </li>
            <li className={router.pathname === '/servicos' ? 'active' : ''}>
              <Link href="/servicos">Serviços</Link>
            </li>
            <li className={router.pathname === '/obras' ? 'active' : ''}>
              <Link href="/obras">Obras</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}

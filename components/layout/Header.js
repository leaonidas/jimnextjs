import Container from 'components/global/Container';
import { useDisableBodyScroll } from 'hooks/disable-scroll';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

export default function Header() {
  const router = useRouter();

  const [navMenu, setNavMenu] = useState();
  const toggleSidebar = () => setNavMenu(!navMenu);
  useDisableBodyScroll(navMenu);

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
          <svg width="64" height="64" alt="Burger menu">
            <path
              id="burger-circle"
              fill="none"
              strokeWidth="4"
              strokeMiterlimit="10"
              d="M16,32h32c0,0,11.723-0.306,10.75-11 c-0.25-2.75-1.644-4.971-2.869-7.151C50.728,7.08,42.767,2.569,33.733,2.054C33.159,2.033,32.599,2,32,2C15.432,2,2,15.432,2,32 c0,16.566,13.432,30,30,30c16.566,0,30-13.434,30-30C62,15.5,48.5,2,32,2S1.875,15.5,1.875,32"
            />
          </svg>
          <div id="burger-bottom"></div>
        </button>

        <nav className={`nav-menu ${navMenu ? 'nav-menu--open' : ''}`}>
          <ul>
            <li className={router.pathname === 'empresa' ? 'active' : ''}>
              <Link href="/empresa">Empresa</Link>
            </li>
            <li className={router.pathname === 'servicos' ? 'active' : ''}>
              <Link href="/servicos">Serviços</Link>
            </li>
            <li className={router.pathname === 'obras' ? 'active' : ''}>
              <Link href="/obras">Obras</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}

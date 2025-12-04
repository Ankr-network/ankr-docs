import { Navbar as NextraNavbar } from 'nextra-theme-docs';

import AnkrLogo from "public/logo/ankr-docs-with-logo.svg";
import { Web3APIButtonLazy } from 'components/Web3APIButton';

import classes from './Navbar.module.css';

export function Navbar() {
  return (
    <NextraNavbar
      className={classes.root}
      logo={<AnkrLogo />}
      projectLink="https://github.com/Ankr-network/"
    >
      <Web3APIButtonLazy className="order-1" visibility="desktop" />
    </NextraNavbar>
  );
}

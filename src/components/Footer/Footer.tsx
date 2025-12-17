import { Footer as NextraFooter } from 'nextra-theme-docs';

import NextraLogo from 'public/logo/nextra-footer.svg';

import { FooterMenu } from './FooterMenu';

export function Footer() {
  return (
    <NextraFooter className="flex w-full flex-col items-center sm:items-start">
      <FooterMenu />
      <div>
        <a
          className="flex items-center gap-1 text-current"
          target="_blank"
          rel="noopener noreferrer"
          title="nextra.site homepage"
          href="https://nextra.site"
        >
          <span>Powered by</span>
          <NextraLogo />
        </a>
      </div>
      <p className="mt-6 text-xs">
        © {new Date().getFullYear()} Ankr All rights reserved | info@ankr.com
      </p>
    </NextraFooter>
  );
}

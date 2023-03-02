import type { DocsThemeConfig} from 'nextra-theme-docs';
import { useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import AnkrLogo from "./public/logo/ankr-docs-with-logo.svg";
import NextraFooter from "./public/logo/nextra-footer.svg";

const config: DocsThemeConfig = {
  project: {
    link: 'https://github.com/Ankr-network/'
  },
  docsRepositoryBase: 'https://github.com/Ankr-network/ankr-docs/blob/main',
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Ankr'
      }
    }
  },
  logo: <AnkrLogo />,
    head() {
        const config = useConfig();
        const description =
            config.frontMatter.description ? config.frontMatter.description : "Ankr is the leading Web3 infrastructure company.";
        const image =
            config.frontMatter.image ||
            "https://pbs.twimg.com/media/FZvncdhWAAA-hxK.jpg";
        return (
            <>
                {/* General */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="Content-Language" content="en" />

                {/* SEO */}
                <meta name="robots" content="follow, index" />
                <meta name="description" content={description} />
                <meta name="og:description" content={description} />
                <meta name="og:title" content={`${config.title} — Ankr`} />
                <meta name="apple-mobile-web-app-title" content={`${config.title} — Ankr`} />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="theme-color" content="#ffffff" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site:domain" content="ankr.com" />
                <meta name="twitter:url" content="https://ankr.com" />
                <meta name="twitter:image" content={image} />
                <meta name="og:image" content={image} />

                {/* Favicons */}
                <link rel="manifest" href="/docs/favicon/site.webmanifest" />
                <link rel="icon" type="image/svg+xml" href="/docs/favicon/favicon.ico" />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/docs/favicon/favicon-16x16.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/docs/favicon/favicon-32x32.png"
                />
                <link
                    rel="apple-icon"
                    sizes="180x180"
                    href="/docs/favicon/apple-icon-180x180.png"
                />
                <link
                    rel="mask-icon"
                    href="/docs/favicon/safari-pinned-tab.svg"
                    color="#000000"
                />
            </>
        );
    },
  editLink: {
    text: 'Edit this page on GitHub →'
  },
  feedback: {
    content: 'Give us feedback →',
    labels: 'feedback'
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <div>
            <a
                className="flex items-center gap-1 text-current"
                target="_blank"
                rel="noopener noreferrer"
                title="nextra.site homepage"
                href="https://nextra.site"
            >
            <span>Powered by</span>
                <NextraFooter />
          </a>
        </div>
        <p className="mt-6 text-xs">
          © {new Date().getFullYear()} Ankr All rights reserved | info@ankr.com
        </p>
      </div>
    )
  }
}

export default config

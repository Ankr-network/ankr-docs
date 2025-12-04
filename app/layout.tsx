import type { Metadata } from 'next';
import { Layout } from 'nextra-theme-docs';
import { Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import 'nextra-theme-docs/style.css';

import { Navbar } from 'components/Navbar';
import 'styles/global.css';
import { Footer } from 'components/Footer';

const title = 'Welcome to Ankr Docs';

// static metadata
export const metadata: Metadata = {
  alternates: {
    canonical: process.env.NEXT_PUBLIC_APP_URL + '/',
  },
  appleWebApp: {
    title,
  },
  description: 'Ankr is the leading Web3 infrastructure company.',
  icons: {
    apple: [
      {
        sizes: '180x180',
        url: '/docs/favicon/apple-icon-180x180.png',
      },
    ],
    icon: [
      {
        type: 'image/x-icon',
        url: '/docs/favicon/favicon.ico',
      },
      {
        sizes: '16x16',
        type: 'image/png',
        url: '/docs/favicon/favicon-16x16.png',
      },
      {
        sizes: '32x32',
        type: 'image/png',
        url: '/docs/favicon/favicon-32x32.png',
      },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/docs/favicon/safari-pinned-tab.svg',
        color: '#000000',
      },
    ],
  },
  manifest: '/docs/favicon/site.webmanifest',
  metadataBase: process.env.NEXT_PUBLIC_APP_URL,
  openGraph: {
    images: ['docs/og/image.png'],
  },
  robots: 'index,follow',
  title: {
    default: title,
    template: '%s — Ankr',
  },
  twitter: {
    images: ['docs/og/image.png'],
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html dir="ltr" lang="en" suppressHydrationWarning>
      <Head>
        <meta name="msapplication-TileColor" content="#ffffff" />
      </Head>
      <body>
        <Layout
          docsRepositoryBase="https://github.com/Ankr-network/ankr-docs/blob/main"
          footer={<Footer />}
          navbar={<Navbar />}
          sidebar={{
            defaultMenuCollapseLevel: 1,
          }}
          pageMap={await getPageMap()}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}

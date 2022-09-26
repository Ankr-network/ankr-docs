// Imported React packages/modules
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";

// Constants to use in Params
const logo = ({ height }) => (
<svg fill="none" height="32" viewBox="0 0 104 32" width="104" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M15.344 2.441l9.008 4.776c1.382.83 2.676 1.797 2.736 4.647v2.286h-3.541v-3.126L13.58 5.671 3.54 11.024v3.127H0v-2.287c.054-2.835 1.338-3.808 2.711-4.632l9.102-4.796a3.77 3.77 0 0 1 3.53.005zm.005 23.419l8.193-4.588v-3.418h3.54v2.282c-.054 2.85-1.352 3.822-2.735 4.647l-9.003 4.776a3.77 3.77 0 0 1-3.531.005L2.71 24.768C1.338 23.943.06 22.966 0 20.136v-2.282h3.546v3.418l8.267 4.593v-3.71c-2.884-.676-4.776-3.017-4.776-6.158 0-3.802 2.628-6.355 6.544-6.355 3.916 0 6.543 2.553 6.543 6.355 0 3.136-1.896 5.482-4.775 6.159zM13.58 12.768c-2.1 0-3.255 1.145-3.255 3.23 0 2.024 1.215 3.23 3.255 3.23s3.254-1.21 3.254-3.23c0-2.085-1.155-3.23-3.254-3.23zm75.435-4.46h-4.934l-6.34 6.5V5.102h-4.07v19.65h4.07v-4.918l2.093-2.144 5.522 7.062h4.568L82.374 15.1zm6.524 1.94c.77-.77 2.84-2.37 6.746-2.37h.751l.014 3.64-7.511.03v13.205h-4.134V8.293h4.134zM64.526 7.875c-3.121 0-5.082 2.02-5.225 2.178V8.294h-4.133V24.754H59.3V11.183h3.072c.158 0 .311.004.46.01 1.031.034 1.817.202 2.4.508.192.109.37.232.533.366.874.78 1.106 2.108 1.106 4.089v8.603h4.07v-9.833c-.006-4.074-1.872-7.052-6.416-7.052zm-18.203.968a6.04 6.04 0 0 1 1.807 1.703V8.29h4.134v16.46H48.13v-2.42c-.474.913-1.338 1.723-2.558 2.261a7.18 7.18 0 0 1-1.081.38l-.06.016a9.041 9.041 0 0 1-2.177.266 8.932 8.932 0 0 1-3.378-.662c-3.2-1.303-5.452-4.41-5.452-8.034 0-4.8 3.955-8.697 8.83-8.697 1.466 0 2.85.355 4.069.983zm-8.657 7.718c0 3.131 2.084 5.304 5.304 5.304 2.805 0 5.304-1.99 5.304-5.304 0-3.383-2.415-5.304-5.304-5.304-3.28 0-5.304 1.98-5.304 5.304z" fill="currentColor" fill-rule="evenodd"></path></svg>
);

// Params
export default {
//General params
  project: {
    link: "https://github.com/Ankr-network/",
  },
  titleSuffix: " – Ankr",
  toc: {
    float: true,
  },
  sidebar: { defaultMenuCollapsed: true },
// Feedback and Edit on GH links
  feedback: {
  labels: "feedback",
  content: "Give us feedback →",
  },
  docsRepositoryBase: "https://github.com/Ankr-network/ankr-docs/blob/main",
  editLink: {
    text: "Edit this page on GitHub →",
  },
// Logo
  logo: logo,
// Head content and settings
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
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="apple-icon"
          sizes="180x180"
          href="/favicon/apple-icon-180x180.png"
        />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
      </>
    );
  },
//Footer content and settings
  footer: {
    text: <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:space-x-16 lg:space-x-28">
      <div className="flex flex-col">
        © {new Date().getFullYear()} Ankr All rights reserved
      </div>
    </div>
  },
};
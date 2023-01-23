// Imported React packages/modules
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";

// Constants to use in Params
const logo = ({ height }) => (
<svg width="184" height="32" viewBox="0 0 465 71" fill="none" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M258.64 14.4394H260.64V23.6394L241.64 23.7094V57.0794H231.18V15.5194H241.64V20.4394C243.54 18.4394 248.78 14.4394 258.64 14.4394ZM225.11 15.5194H212.64L196.64 31.9394V7.41938H186.36V57.0794H196.64V44.6494L201.89 39.2294L215.89 57.0794H227.43L208.35 32.6794L225.11 15.5194ZM121.83 15.5194H132.27V57.1194H121.83V50.9694C120.386 53.5539 118.104 55.5682 115.36 56.6794C114.646 56.9876 113.915 57.2547 113.17 57.4794L112.63 57.6394H112.48C107.825 58.7892 102.925 58.4392 98.48 56.6394C93.7253 54.7239 89.7887 51.2082 87.35 46.6994C84.9194 42.186 84.1413 36.9654 85.15 31.9394C86.1719 26.915 88.9166 22.4053 92.91 19.1894C96.8985 15.9834 101.883 14.2745 107 14.3594C110.581 14.3471 114.114 15.1941 117.3 16.8294C119.107 17.9276 120.664 19.3924 121.87 21.1294L121.83 15.5194ZM122.19 36.3894C122.19 27.8394 116.09 23.0094 108.79 23.0094C100.5 23.0094 95.39 28.0094 95.39 36.4094C95.39 44.3294 100.65 49.8194 108.79 49.8194C115.87 49.7794 122.18 44.7494 122.19 36.3894ZM163.25 14.3894C158.28 14.4288 153.523 16.414 150 19.9194V15.5194H139.64V57.0794H150V22.7794H159C161.068 22.7438 163.118 23.1708 165 24.0294C165.479 24.2906 165.932 24.5988 166.35 24.9494C168.56 26.9494 169.14 30.2794 169.14 35.2894V57.0394H179.43V32.2394C179.45 21.9494 174.73 14.4194 163.25 14.4194V14.3894ZM369.68 36.3694C369.68 49.6594 359.89 58.3694 346.92 58.3694C333.95 58.3694 324.16 49.6694 324.16 36.3694C324.16 23.0694 333.92 14.3694 346.92 14.3694C359.92 14.3694 369.68 23.0794 369.68 36.3694ZM360.49 36.3694C360.49 27.7694 355.04 22.7094 346.92 22.6194C338.81 22.7094 333.36 27.7694 333.36 36.3694C333.36 44.9694 338.68 50.0294 346.94 50.0994C355.22 50.0294 360.51 44.9594 360.51 36.3594L360.49 36.3694ZM396.83 22.6194C403.34 22.6994 407.72 25.9694 409.19 31.6994H418.75C416.81 21.0794 408.22 14.3794 396.83 14.3794C383.83 14.3794 374.07 23.0794 374.07 36.3794C374.07 49.6794 383.86 58.3794 396.83 58.3794C407.61 58.3794 415.88 52.3794 418.38 42.7294H408.68C406.87 47.4194 402.79 50.0694 396.83 50.1294C388.56 50.0194 383.3 44.9694 383.3 36.3694C383.3 27.7694 388.74 22.6994 396.85 22.6094L396.83 22.6194ZM446.83 32.8594C439.58 30.6894 433.83 29.3694 433.83 26.5694C433.83 24.7494 436.32 22.3594 443.27 22.3594C451.33 22.3594 454.99 27.1894 455.03 31.2994H464.03C464.03 21.4594 455.9 14.3994 443.12 14.3994C430.51 14.3994 425.18 20.3994 424.81 25.7294C424.41 31.3094 426.86 35.5294 439.15 38.8894C452.23 42.4694 454.68 43.8094 454.68 46.0294C454.68 47.9594 452.18 50.5594 444.14 50.3794C436.63 50.2094 433.09 45.5694 432.83 42.7094H423.6C423.6 50.2194 431.37 58.3094 444.25 58.3094C456.11 58.3094 464.25 53.5194 464.25 45.7094C464.14 40.1094 460.48 36.9394 446.82 32.8494L446.83 32.8594ZM308.91 3.42938H319.32V57.1194H308.87V51.0294C307.426 53.6139 305.144 55.6282 302.4 56.7394C301.686 57.0476 300.954 57.3147 300.21 57.5394L299.67 57.6994H299.52C294.864 58.8492 289.965 58.4992 285.52 56.6994C280.765 54.7839 276.828 51.2682 274.39 46.7594C271.966 42.2545 271.188 37.0458 272.19 32.0294C273.212 27.005 275.956 22.4953 279.95 19.2794C283.944 16.0689 288.936 14.3599 294.06 14.4494C297.634 14.4403 301.159 15.2872 304.34 16.9194C306.149 18.0145 307.707 19.4799 308.91 21.2194V3.42938ZM309.31 36.3694C309.31 27.8094 303.21 22.9694 295.91 22.9694C287.62 22.9694 282.51 27.9694 282.51 36.3694C282.51 44.2794 287.77 49.7694 295.89 49.7794C302.97 49.7694 309.32 44.7394 309.31 36.3694ZM61.63 13.1794L38.85 1.10938C37.4745 0.380872 35.9415 0 34.385 0C32.8284 0 31.2955 0.380872 29.92 1.10938L6.92 13.2394C3.45 15.3294 0.2 17.7894 0.0699997 24.9494V30.7394H9V22.8294L34.39 9.28938L59.59 22.8294V30.7394H68.59V24.9294C68.35 17.7294 65.08 15.2794 61.59 13.1794H61.63ZM59.58 48.7194L38.82 60.3294V50.9594C46.1 49.2494 50.9 43.3194 50.9 35.3894C50.9 25.7694 44.25 19.3094 34.35 19.3094C24.45 19.3094 17.8 25.7694 17.8 35.3894C17.8 43.3294 22.58 49.2494 29.88 50.9594V60.3394L9 48.7194V40.0794H0V45.8494C0.15 53.0094 3.38 55.4794 6.85 57.5694L29.85 69.6894C31.2247 70.4204 32.758 70.8027 34.315 70.8027C35.872 70.8027 37.4052 70.4204 38.78 69.6894L61.54 57.6094C65.04 55.5294 68.32 53.0694 68.46 45.8594V40.0894H59.46V48.7294L59.58 48.7194ZM26.12 35.3894C26.12 30.1194 29.04 27.2194 34.35 27.2194C39.66 27.2194 42.58 30.1194 42.58 35.3894C42.58 40.4894 39.51 43.5494 34.35 43.5494C29.19 43.5494 26.12 40.5094 26.12 35.3894Z" fill="currentColor" fill-rule="evenodd"/>
</svg>
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
        <meta name="robots" content="nofollow" />
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
//Footer content and settings
  footer: {
    text: <div>
        © {new Date().getFullYear()}  Ankr All rights reserved 
      </div>
  },
};
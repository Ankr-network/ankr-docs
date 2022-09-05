// Imported React packages/modules
import { useRouter } from "next/router";

// Constants to use in Params
const logo = ({ height }) => (
<svg fill="none" height="32" viewBox="0 0 104 32" width="104" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M15.344 2.441l9.008 4.776c1.382.83 2.676 1.797 2.736 4.647v2.286h-3.541v-3.126L13.58 5.671 3.54 11.024v3.127H0v-2.287c.054-2.835 1.338-3.808 2.711-4.632l9.102-4.796a3.77 3.77 0 0 1 3.53.005zm.005 23.419l8.193-4.588v-3.418h3.54v2.282c-.054 2.85-1.352 3.822-2.735 4.647l-9.003 4.776a3.77 3.77 0 0 1-3.531.005L2.71 24.768C1.338 23.943.06 22.966 0 20.136v-2.282h3.546v3.418l8.267 4.593v-3.71c-2.884-.676-4.776-3.017-4.776-6.158 0-3.802 2.628-6.355 6.544-6.355 3.916 0 6.543 2.553 6.543 6.355 0 3.136-1.896 5.482-4.775 6.159zM13.58 12.768c-2.1 0-3.255 1.145-3.255 3.23 0 2.024 1.215 3.23 3.255 3.23s3.254-1.21 3.254-3.23c0-2.085-1.155-3.23-3.254-3.23zm75.435-4.46h-4.934l-6.34 6.5V5.102h-4.07v19.65h4.07v-4.918l2.093-2.144 5.522 7.062h4.568L82.374 15.1zm6.524 1.94c.77-.77 2.84-2.37 6.746-2.37h.751l.014 3.64-7.511.03v13.205h-4.134V8.293h4.134zM64.526 7.875c-3.121 0-5.082 2.02-5.225 2.178V8.294h-4.133V24.754H59.3V11.183h3.072c.158 0 .311.004.46.01 1.031.034 1.817.202 2.4.508.192.109.37.232.533.366.874.78 1.106 2.108 1.106 4.089v8.603h4.07v-9.833c-.006-4.074-1.872-7.052-6.416-7.052zm-18.203.968a6.04 6.04 0 0 1 1.807 1.703V8.29h4.134v16.46H48.13v-2.42c-.474.913-1.338 1.723-2.558 2.261a7.18 7.18 0 0 1-1.081.38l-.06.016a9.041 9.041 0 0 1-2.177.266 8.932 8.932 0 0 1-3.378-.662c-3.2-1.303-5.452-4.41-5.452-8.034 0-4.8 3.955-8.697 8.83-8.697 1.466 0 2.85.355 4.069.983zm-8.657 7.718c0 3.131 2.084 5.304 5.304 5.304 2.805 0 5.304-1.99 5.304-5.304 0-3.383-2.415-5.304-5.304-5.304-3.28 0-5.304 1.98-5.304 5.304z" fill="currentColor" fill-rule="evenodd"></path></svg>
);

// Params
export default {
//General params
  projectLink: "https://github.com/Ankr-network/",
  docsRepositoryBase: "https://github.com/Ankr-network/ankr-docs/tree/main/pages",
  github: "https://github.com/Ankr-network/ankr-docs/",
  titleSuffix: " – Ankr",
  search: true,
  unstable_flexsearch: true,
  floatTOC: true,
  defaultMenuCollapsed: true,
// Feedback and Edit on GH links (footerEditLink is NOT a footer link, the name is misleading)
  feedbackLink: "Give us feedback →",
  feedbackLabels: "feedback",
  footerEditLink: "Edit this page on GitHub →",
// Logo
  logo: logo,
// Head content and settings
  head: ({ title, meta }) => {
    const { route } = useRouter();

    const ogImage =
      meta?.image || meta?.description || '';

    return (
      <>
        {/* Meta-information */}
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content={
            meta?.description ||
            "Ankr is a leading Web3 Infrastructure Company."
          }
        />
        <meta
          name="og:description"
          content={
            meta?.description ||
            "Ankr is a leading Web3 Infrastructure Company."
          }
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImage} />
        <meta
          name="og:title"
          content={
            title ? title + " – Ankr" : "Ankr: Web3 Infrastructure Company."
          }
        />
        <meta name="og:image" content={ogImage} />
        <meta name="apple-mobile-web-app-title" content="Ankr" />

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
  footerText: (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:space-x-16 lg:space-x-28">
      <div className="flex flex-col">
        © {new Date().getFullYear()} Ankr All rights reserved
      </div>
      <div className="flex flex-col">
        <div className="text-current font-bold pb-3">Products</div>
        <a
          href="https://www.ankr.com/rpc"
          target="_blank"
          rel="noopener"
          className="no-underline text-current font-semibold"
        >
          RPC Service
        </a>
        <a
          href="https://www.ankr.com/advanced-api/"
          target="_blank"
          rel="noopener"
          className="no-underline text-current font-semibold"
        >
          Advanced APIs/SDKs
        </a>
        <a
          href="https://www.ankr.com/gaming/"
          target="_blank"
          rel="noopener"
          className="no-underline text-current font-semibold"
        >
          Gaming SDKs
        </a>
        <a
          href="https://www.ankr.com/app-chains/"
          target="_blank"
          rel="noopener"
          className="no-underline text-current font-semibold"
        >
          App Chains
        </a>
        <a
          href="https://www.ankr.com/about-staking/"
          target="_blank"
          rel="noopener"
          className="no-underline text-current font-semibold"
        >
          Liquid Staking
        </a>
        <a
          href="https://ankrscan.io/"
          target="_blank"
          rel="noopener"
          className="no-underline text-current font-semibold"
        >
          Ankr Scan
        </a>
        <a
          href="https://www.ankr.com/enterprise/"
          target="_blank"
          rel="noopener"
          className="no-underline text-current font-semibold"
        >
          Enterprise Solutions
        </a>
      </div>
      <div className="flex flex-col">
        <div className="text-current font-bold pb-3">Company</div>
        <a
          href="https://www.ankr.com/about/our-purpose/"
          target="_blank"
          rel="noopener"
          className="no-underline text-current font-semibold"
        >
          About Us
        </a>
        <a
          href="https://medium.com/ankr-network"
          target="_blank"
          rel="noopener"
          className="no-underline text-current font-semibold"
        >
          Blog
        </a>
        <a
          href="https://boards.greenhouse.io/ankrnetwork"
          target="_blank"
          rel="noopener"
          className="no-underline text-current font-semibold"
        >
          Careers
        </a>
        <a
          href="https://www.ankr.com/assets/"
          target="_blank"
          rel="noopener"
          className="no-underline text-current font-semibold"
        >
          Brand Assets
        </a>
      </div>
      <div className="flex flex-col">
        <div className="text-current font-bold pb-3">Socials</div>
        <a
          href="https://twitter.com/ankr"
          target="_blank"
          rel="noopener"
          className="no-underline text-current font-semibold"
        >
          Twitter
        </a>
        <a
          href="https://t.me/ankrnetwork"
          target="_blank"
          rel="noopener"
          className="no-underline text-current font-semibold"
        >
          Telegram
        </a>
        <a
          href="https://discord.gg/ankr/"
          target="_blank"
          rel="noopener"
          className="no-underline text-current font-semibold"
        >
          Discord
        </a>
        <a
          href="https://medium.com/ankr-network"
          target="_blank"
          rel="noopener"
          className="no-underline text-current font-semibold"
        >
          Medium
        </a>
        <a
          href="https://www.reddit.com/r/Ankrofficial/"
          target="_blank"
          rel="noopener"
          className="no-underline text-current font-semibold"
        >
          Reddit
        </a>
        <a
          href="https://www.instagram.com/ankr/"
          target="_blank"
          rel="noopener"
          className="no-underline text-current font-semibold"
        >
          Instagram
        </a>
      </div>
    </div>
  ),
};
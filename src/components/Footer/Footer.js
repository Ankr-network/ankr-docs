import React from "react";
import Link from "@docusaurus/Link";
import styles from "./Footer.module.css";
const AnkrLogo = require("../../../static/img/ankr-logo.svg").default;

const PARTNERS = [
  {
    link: "https://coinmarketcap.com/currencies/ankr/",
    title: "Coin Market Cap",
    Icon: require("./assets/market.svg").default,
  },
  {
    link: "https://coingecko.com/en/coins/ankr-network",
    title: "Coin gecko",
    Icon: require("./assets/gecko.svg").default,
  },
  {
    link: "https://blockfolio.com/coin/ANKR",
    title: "BlockFolio",
    Icon: require("./assets/blockfolio.svg").default,
  },
  {
    link: "https://crypto.com/price/ankr",
    title: "crypto.com",
    Icon: require("./assets/crypto.svg").default,
  },
];

const LINKS = [
  {
    name: "Products",
    list: [
      {
        name: "Node Service",
        link: "https://www.ankr.com/build/nodes/",
      },
      {
        name: "Ankr Earn",
        link: "https://www.ankr.com/earn/",
      },
      {
        name: "Ankr Protocol",
        link: "https://www.ankr.com/ankr-protocol/",
      },
    ],
  },
  {
    name: "About us",
    list: [
      {
        name: "Our Vision",
        link: "https://www.ankr.com/docs/learn/reference/ankr-vision",
      },
      {
        name: "Our Story",
        link: "https://www.ankr.com/about/our-purpose/",
      },
      {
        name: "Careers",
        link: "https://www.ankr.com/about/team/",
      },
      {
        name: "Team",
        link: "https://www.ankr.com/about/team/",
      },
      {
        name: "Community",
        link: "https://medium.com/ankr-network",
      },
    ],
  },
  {
    name: "Socials",
    list: [
      {
        name: "Twitter",
        link: "https://twitter.com/ankr",
      },
      {
        name: "Telegram",
        link: "https://t.me/ankrnetwork",
      },
      {
        name: "Discord",
        link: "https://discord.gg/uYaNu23Ww7",
      },
      {
        name: "Medium",
        link: "https://medium.com/ankr-network",
      },
      {
        name: "Reddit",
        link: "https://www.reddit.com/r/Ankrofficial/",
      },
    ],
  },
];

export default function Footer() {
  return (
    <div className={styles.wrapper}>
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.partners}>
          <div className={styles.title}>{"Find on"}</div>
          <div className={styles.partner}>
            {PARTNERS.map((item) => (
              <Link key={item.link} to={item.link} alt={item.title}>
                <item.Icon />
              </Link>
            ))}
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: "<div id='crypto-widget-CoinList' data-transparent='true' data-coins='ankr'></div>"
            }}
            className={styles.cryptoWidget}
          />
        </div>
        {LINKS.map((link) => (
          <div className={styles.link} key={`${link.name}`}>
            <div className={styles.title}>{link.name}</div>
            <div className={styles.list}>
              {link.list.map((item) => (
                <Link key={`${item.name}-${item.link}`} to={item.link}>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.service}>
        <div className={styles.column}>
          <span className={styles.copy}>
            <AnkrLogo />
            {"© 2021 Ankr All rights reserved | info@ankr.com"}
          </span>
        </div>
        <div>
          <Link to="https://www.ankr.com/terms/">{"Teams of service"}</Link>
          <Link to="https://www.ankr.com/privacy-policy/">
            {"Privacy Policy"}
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}

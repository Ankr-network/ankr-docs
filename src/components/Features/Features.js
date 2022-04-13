import React from "react";
import Link from "@docusaurus/Link";
import styles from "./Features.module.css";
import ArrowIcon from '../../../static/img/feature/arrow.svg';

const FeatureList = [
  {
    title: "Connect ＆ Build",
    icon: require("../../../static/img/feature/build-icon.png").default,
    list: [

      'Access Premium APIs and RPC endpoints with WebSockets',
      'Seamless interaction with 40+ supported blockchains',
      'Build a fast and secure blockchain with BSC Application Sidechain (BAS)',
      'Suitable for web3 developers and enthusiasts of all skill levels',
    ],
    link: 'https://www.ankr.com/docs/build-blockchain/overview',

  },
  {
    title: "Stake ＆ Earn",
    icon: require("../../../static/img/feature/earn-icon.png").default,
    list: [
      'Easily stake 5+ tokens on a secure, decentralized network',
      'Earn rewards on tokens without needing technical knowledge',
      'Connect staking rewards to DeFi to trade/interact with dApps',
      'Make use of our multi-chain toolkit bridging DeFi with PoS',
    ],


    link: 'https://www.ankr.com/docs/earn/overview',

  },
  {
    title: "Tokens ＆ Governance",
    icon: require("../../../static/img/feature/token-icon.png").default,
    list: [
      'Get the latest updates on $ANKR tokenomics',
      'Utilize $ANKR token utility across our product suite',
      'Participate in on-chain governance by holding $ANKR',
      'Pay for services on the Ankr platform with $ANKR',
    ],
    link: 'https://www.ankr.com/docs/learn/tokens-governance/ankr-tokens',
  },
  {
    title: "Tutorials",
    icon: require("../../../static/img/feature/tutorials-icon.png").default,
    list: [
      'Read practical tutorials to build projects',
      'Build DeFi and Web3 projects, step by step',
      'Share your knowledge and submit your own tutorials',
      'Discover opportunities for grants, partnerships, and more',
    ],
    link: 'https://www.ankr.com/docs/learn/tutorials/create-voting-system/movie-voting-web3',
  }
];

function Feature({ icon, title, list, description, link }) {
  return (
    <div className={styles.item}>
      <h3 className={styles.title}>
        <img src={icon} alt={title} />
        {title}
      </h3>
      {list && <div className={styles.list}>
        {list.map((listItem, index) => <div key={`list-${index}`} className={styles.listItem}>
          {listItem}
        </div>)}
      </div>}
      {description && <p className={styles.description}>{description}</p>}
      <a className={styles.learnMore} href={link}>Learn more <ArrowIcon /></a>
    </div>
  );
}

export default function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
        </div>
      </div>
    </section>
  );
}

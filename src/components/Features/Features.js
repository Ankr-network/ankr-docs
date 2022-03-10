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
      'Expansive library of docs, tutorials, and learning resources',
      'Suitable for web3 developers and enthusiasts of all skill levels',
    ],
    link: 'https://www.ankr.com/docs/Build/Concepts/build-concepts',

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

    link: 'https://www.ankr.com/docs/Earn/Concepts/earn-overview',

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
    link: 'https://www.ankr.com/docs/category/%EF%B8%8F-governance',
  },
  {
    title: "Ankr Community",
    icon: require("../../../static/img/feature/community-icon.png").default,
    list: [
      'Connect with a global community of Ankr enthusiasts',
      'Get the latest updates on all things Ankr',
      'Support the growth and development of web3 infrastructure',
      'Discover opportunities for grants, partnerships, and more', 
    ],
    link: 'https://www.ankr.com/docs/Community/channels',
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
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

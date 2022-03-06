import React from "react";
import Link from "@docusaurus/Link";
import styles from "./Features.module.css";
import ArrowIcon from '../../../static/img/feature/arrow.svg';

const FeatureList = [
  {
    title: "Connect and Build",
    icon: require("../../../static/img/feature/build-icon.png").default,
    list: [
      'For Developers, Product Owners and Providers',
      'Easy access to our Multi-Chain RPC & Ankr Protocol',
      '40+ Nodes',
      'Docs, Guides and Tutorials'
    ],
    link: 'https://www.ankr.com/docs/docs/Build/Concepts/build-concepts',
  },
  {
    title: "Stake and Earn",
    icon: require("../../../static/img/feature/earn-icon.png").default,
    list: [
      'For Individuals, Integrators and Institutions',
      'Multi-Chain staking solutions that bridge PoS to DeFi',
      'Decentralized & Secure',
      'Docs, Guides and Tutorials'
    ],
    link: 'https://www.ankr.com/docs/docs/Earn/Concepts/earn-overview',
  },
  {
    title: "Tokens and Governance",
    icon: require("../../../static/img/feature/token-icon.png").default,
    list: [
      'For Ankr Community Token Holders',
      'ANKR Token utility across the Ankr Product Suite',
      'ANKR Tokens and Governance',
      'Tokenomics'
    ],   
    link: 'https://www.ankr.com/docs/docs/category/%EF%B8%8F-governance',
  },
  {
    title: "Community",
    icon: require("../../../static/img/feature/community-icon.png").default,
    list: [
      'For Everyone',
      'Connect with the Ankr Community',
      'Find out how to contribute to the Ankr Project',
      'Find out more about Ankr Grants'
    ],
    link: 'https://www.ankr.com/docs/docs/Community/channels',
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

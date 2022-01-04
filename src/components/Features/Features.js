import React from "react";
import Link from "@docusaurus/Link";
import styles from "./Features.module.css";
import ArrowIcon from '../../../static/img/feature/arrow.svg';

const FeatureList = [
  {
    title: "Connect and Build",
    Svg: require("../../../static/img/feature/build.svg").default,
    list: [
      'For Developers, Product Owners and Providers',
      'Easy access tp our Multi-Chain RPC & Ankr Protocol',
      '40+ Nodes',
      'Docs, Guides and Tutorials'
    ],
    link: '',
  },
  {
    title: "Stake and Earn",
    Svg: require("../../../static/img/feature/earn.svg").default,
    list: [
      'For Everyone - whether you are new to crypto and risk averse or looking for innovative products',
      'Simplified staking and reward earning for new and seasoned perticipants',
      'Decentralized & Secure',
      'Docs, Guides and Tutorials'
    ],
    link: '',
  },
  {
    title: "Tokens and Governance",
    Svg: require("../../../static/img/feature/token.svg").default,
    description: "ANKR tokens are for the Ankr community to participate and pay for Ankr services as well as have a say in the governance of the Ankr Network.",
    link: '',
  },
  {
    title: "Community",
    Svg: require("../../../static/img/feature/community.svg").default,
    description: "ANKR tokens are for the Ankr community to participate and pay for Ankr services as well as have a say in the governance of the Ankr Network.",
    link: '',
  }
];

function Feature({ Svg, title, list, description, link }) {
  return (
    <div className={styles.item}>
      <h3 className={styles.title}>
        <Svg alt={title} />
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

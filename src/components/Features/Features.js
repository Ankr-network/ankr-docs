import React from "react";
import Link from "@docusaurus/Link";
import styles from "./Features.module.css";

const FeatureList = [
  {
    title: "Build",
    Svg: require("../../../static/img/build.svg").default,
    Icon: require("../../../static/img/arrow.svg").default,
    description:
      "Join the Web 3.0 movement and connect your application to any chain in seconds",
  },
  {
    title: "Earn",
    Svg: require("../../../static/img/earn.svg").default,
    Icon: require("../../../static/img/arrow.svg").default,
    description: "Earn with Ankr StakeFi solutions",
  },
  {
    title: "Enterprise",
    Svg: require("../../../static/img/enterprise.svg").default,
    Icon: require("../../../static/img/arrow.svg").default,
    description: "Ankr for Enterprise provides turnkey infastructure solutions",
  },
];

const community = {
  icon: require("../../../static/img/community.svg").default,
  title: "Ankr Community",
  description:
    "ANKR tokens are for the Ankr community to participate and pay for Ankr services as well as have a say in the governance of the Ankr Network.",
  button: "Open Community",
};

function Feature({ Svg, Icon, title, description }) {
  return (
    <div className={styles.item}>
      <h3 className={styles.title}>
        {title}
        <Icon className={styles.icon} />
      </h3>
      <p className={styles.description}>{description}</p>
      <Svg className={styles.image} alt={title} />
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
      <div className={styles.community}>
        <community.icon />
        <h2 className={styles.communityTitle}>{community.title}</h2>
        <p className={styles.communityDesc}>{community.description}</p>
        <Link to="" className={styles.button}>
          Open Community
        </Link>
      </div>
    </section>
  );
}

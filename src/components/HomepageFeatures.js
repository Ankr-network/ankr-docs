import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Build',
    Svg: require('../../static/img/Build.svg').default,
    description: (
      <>
        Join the Web 3.0 movement and connect your application to any chain in seconds.
      </>
    ),
  },
  {
    title: 'Earn',
    Svg: require('../../static/img/Frame 1488.svg').default,
    description: (
      <>
        Earn with Ankr StakeFi solutions.
      </>
    ),
  },
  {
    title: 'Enterprise',
    Svg: require('../../static/img/Enterprise.svg').default,
    description: (
      <>
        Ankr for Enterprise provides turnkey infrastructure solutions.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

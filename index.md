import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import Features from "../components/Features/Features";
import Social from "../components/Social/Social";
import Footer from "../components/Footer/Footer";
const Holder = require("../../static/img/hero.svg").default;

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.top}>
      <div className={styles.root}>
        <div className={styles.container}>
          <h1 className={styles.title}>{siteConfig.title}</h1>
          <p className={styles.subTitle}>{siteConfig.tagline}</p>{" "}
          <div className={styles.buttons}>
            

            <Link className={styles.button} to="https://www.ankr.com/docs/Tutorials/submit-tutorial">
              Contribute to Ankr Docs
            </Link>
          </div>
        </div>
        <Holder />
      </div>
    </header>
  );
}

export default function Home() { 
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description="Ankr Docs">
      <HomepageHeader />
      <main>
        <Features />
        <Social />
        <Footer />
      </main>
    </Layout>
  );
}

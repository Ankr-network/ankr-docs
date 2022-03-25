import React from "react";
import Link from "@docusaurus/Link";
import styles from "./Social.module.css";

export const socialList = [
  {
    name: "Twitter",
    url: "https://twitter.com/ankr",
    content: "General Announcements",
    Icon: require("../../../static/img/twitter.svg").default,
  },
  {
    name: "Telegram",
    url: "https://t.me/ankrnetwork",
    content: "Live Chat",
    Icon: require("../../../static/img/telegram.svg").default,
  },
  {
    name: "Discord",
    url: "https://discord.com/invite/uYaNu23Ww7",
    content: "Technical Support",
    Icon: require("../../../static/img/discord.svg").default,
  },
  {
    name: "Medium",
    url: "https://medium.com/ankr-network",
    content: "Blogs and Tutorials",
    Icon: require("../../../static/img/medium.svg").default,
  },
  {
    name: "Reddit",
    url: "https://www.reddit.com/r/Ankrofficial/",
    content: "Community Forum",
    Icon: require("../../../static/img/reddit.svg").default,
  },
];

export default function Social() {
  return (
    <section className={styles.container}>
     <div className={styles.wrapper}>
      <div className={styles.title}>Join a passionate, global community in our socials</div>
      <div className={styles.social}>
        <div className={styles.socialWrapper}>
        {socialList.map((item) => (
          <Link
            to={item.url}
            target="_blank"
            className={styles.item}
            key={item.url}
          >
            <div className={styles.name}>{item.name}</div>
            <div className={styles.text}>{item.content}</div>
            <div className={styles.icon}>
              <item.Icon className={styles.icon} />
            </div>
          </Link>
        ))}
        </div>
      </div>
     </div>
    </section>
  );
}

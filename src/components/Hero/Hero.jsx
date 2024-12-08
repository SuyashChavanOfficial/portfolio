import React from "react";
import { getImageURL } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Suyash</h1>
        <p className={styles.description}>
          I am full stack developer with 1 year of experience in React. Reach
          out if you like to learn more.
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact me
        </a>
      </div>
      <img
        src={getImageURL("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

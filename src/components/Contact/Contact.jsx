import React from "react";

import styles from "./Contact.module.css";
import {getImageURL} from "../../utils";
export const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.text }>
        <h2 className={styles.title}>Contact</h2>
        <p>Feel Free to Contact!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageURL("contact/emailIcon.png")} alt="Email Icon" />
          <a href="mailto:suyashchavanofficial@gmail.com">suyashchavanofficial</a>
        </li>
        <li className={styles.link}>
          <img src={getImageURL("contact/githubIcon.png")} alt="GitHub Icon" />
          <a href="">SuyashChavanOfficial</a>
        </li>
        <li className={styles.link}>
          <img src={getImageURL("contact/linkedinIcon.png")} alt="LinkedIn Icon" />
          <a href="">Suyash Chavan</a>
        </li>
      </ul>
    </footer>
  );
};

import React from "react";
import { getImageURL } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageURL("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageURL("about/cursorIcon.png")} alt="" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I am a frontend developer with experience in building web
                applications using React and Redux. I am passionate about
                creating responsive and user-friendly web applications.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageURL("about/serverIcon.png")} alt="Server Icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I am a backend developer with experience in building RESTful
                APIs using Node.js, Express, and MongoDB. I am passionate about
                building scalable and secure web applications.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageURL("about/uiIcon.png")} alt="UI Icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I am a UI designer with experience in creating wireframes,
                mockups, and prototypes using Figma. I am passionate about
                creating clean and modern user interfaces.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

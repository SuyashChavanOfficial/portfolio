import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageURL } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        {/* SKILLS */}
        <div className={styles.skills}>
          {skills.map((skill, skillId) => (
            <div key={skillId} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageURL(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>

        {/* EXPERIENCE */}
        <ul className={styles.history}>
          {history.map((historyItem, historyId) => (
            <li key={historyId} className={styles.historyItem}>
              <img
                src={getImageURL(historyItem.imageSrc)}
                alt={`${historyItem.organisation} Logo`}
              />
              <div className={styles.historyItemDetails}>
                <h3>
                  {`${historyItem.role}, ${historyItem.organisation}`}
                </h3>
                <p>
                  {`${historyItem.startDate} - ${historyItem.endDate}`}
                </p>
                <ul>
                  {historyItem.experiences.map((experience, expId) => (
                    <li key={expId}>{experience}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
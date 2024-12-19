import React from "react";

import { getImageURL } from "../../utils";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({
  project: { title, imageSrc, description, source, demo, skills },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageURL(imageSrc)}
        alt="`Image of ${title}`"
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, skillId) => {
          return (
            <li className={styles.skill} key={skillId}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link}>
          Demo
        </a>
        <a href={source} className={styles.link}>
          Source
        </a>
      </div>
    </div>
  );
};

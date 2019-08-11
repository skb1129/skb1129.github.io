import React from "react";

import "./styles.scss";

const styles = {
  wrapper: "skills__wrapper",
  listItem: "skills__list-item",
};

const Skills: React.FC = () => {
  return (
    <ul className={styles.wrapper}>
      <li className={styles.listItem}>React</li>
      <li className={styles.listItem}>React Native</li>
      <li className={styles.listItem}>JavaScript</li>
      <li className={styles.listItem}>HTML5</li>
      <li className={styles.listItem}>CSS3</li>
      <li className={styles.listItem}>Python3</li>
      <li className={styles.listItem}>NodeJS</li>
      <li className={styles.listItem}>Express</li>
      <li className={styles.listItem}>Flask</li>
      <li className={styles.listItem}>Angular</li>
      <li className={styles.listItem}>SQL</li>
      <li className={styles.listItem}>Java</li>
    </ul>
  );
};

export default Skills;

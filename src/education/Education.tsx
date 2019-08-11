import React from "react";

import "./styles.scss";

const styles = {
  wrapper: "education__wrapper",
  itemsWrapper: "education__items-wrapper",
  title: "education__title",
  subtitle: "education__subtitle",
  body: "education__body",
};

const Education: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.itemsWrapper}>
        <div>
          <h2 className={styles.title}>Chitkara University</h2>
          <h3 className={styles.subtitle}>Bachelor of Engineering</h3>
          <p className={styles.body}>Computer Science and Engineering</p>
          <p className={styles.body}>CGPA: 9.15/10</p>
        </div>
        <div>
          <h2 className={styles.title}>Udacity</h2>
          <h3 className={styles.subtitle}>Nanodegrees</h3>
          <p className={styles.body}>Intro to Programming Nanodegree</p>
          <p className={styles.body}>Front-End Nanodegree</p>
          <p className={styles.body}>Full-Stack Nanodegree</p>
        </div>
        <div>
          <h2 className={styles.title}>Govt. Model Sr. Sec. School</h2>
          <h3 className={styles.subtitle}>Non-Medical Batch</h3>
          <p className={styles.body}>Score: 81.8%</p>
        </div>
      </div>
    </div>
  );
};

export default Education;

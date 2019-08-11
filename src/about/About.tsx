import React from "react";

import "./styles.scss";

const styles = {
  wrapper: "about__wrapper",
  text: "about__text",
};

const About: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>
        Working as a UX developer. A year of experience in mobile app development using React Native. Proficient in
        JavaScript and ReactJS web development. Familiar with AngularJS, Python, C++ and SQL/NoSQL databases. Good at
        handling servers and setting up development platforms.
      </p>
    </div>
  );
};

export default About;

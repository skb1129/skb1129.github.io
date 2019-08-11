import React from "react";
import PROFILE from "./profile.jpg";

import "./styles.scss";

const styles = {
  wrapper: "about__wrapper",
  image: "about__image",
  text: "about__text",
};

const About: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <img src={PROFILE} className={styles.image} alt="Profile" />
      <p className={styles.text}>
        Working as a UX developer. A year of experience in mobile app development using React Native. Proficient in
        JavaScript and ReactJS web development. Familiar with AngularJS, Python, C++ and SQL/NoSQL databases. Good at
        handling servers and setting up development platforms.
      </p>
    </div>
  );
};

export default About;

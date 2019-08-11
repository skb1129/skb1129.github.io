import React from "react";

import "./styles.scss";

const styles = {
  wrapper: "interests__wrapper",
  text: "interests__text",
};

const About: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>
        Apart from being a programmer, I enjoy most of my time being outdoors. I am a real foodie, I would rather prefer
        quality food over any other plan. I love to go new places with friends, meet new people and just enjoy the
        company. I am also a rider, I had a Royal Enfield Thunderbird on which I have been to Ladakh. The experience
        travelling on a motorbike is one of a kind.
      </p>
      <p className={styles.text}>
        When forced indoors, I follow a number of sci-fi, thriller, comedy and action genre movies and television shows
        and I spend a large amount of my free time exploring the internet for new technologies and advancement happening
        in the universe.
      </p>
    </div>
  );
};

export default About;

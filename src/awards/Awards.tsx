import React from "react";

import "./styles.scss";

const styles = {
  wrapper: "awards__wrapper",
  listItem: "awards__list-item",
};

const Awards: React.FC = () => {
  return (
    <ul className={styles.wrapper}>
      <li className={styles.listItem}>
        2<sup>nd</sup> Place - IEEE Code - X: Code-a-thon(By IEEE Club at Chitkara University) 2017
      </li>
      <li className={styles.listItem}>
        2<sup>nd</sup> Place - IGNITE(Inter School Science and Math Challenge by The Times Group and VIT University)
        2014
      </li>
      <li className={styles.listItem}>94 Percentile - National Programming Aptitude Test August,13 2017</li>
    </ul>
  );
};

export default Awards;

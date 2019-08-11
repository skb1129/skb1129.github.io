import React from "react";

import "./styles.scss";

const styles = {
  wrapper: "navbar__wrapper",
  title: "navbar__title"
};

const Navbar: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Surya Kant Bansal</h1>
    </div>
  );
};

export default Navbar;

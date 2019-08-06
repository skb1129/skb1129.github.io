import React from "react";

import "./styles.scss";

const styles = {
  wrapper: "navbar__wrapper",
};

const Navbar: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Surya Kant Bansal</h1>
    </div>
  );
};

export default Navbar;

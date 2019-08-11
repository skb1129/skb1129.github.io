import React from "react";

import "./styles.scss";

const styles = {
  wrapper: "blog__wrapper",
};

const Blog: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <p>BLOG</p>
    </div>
  )
};

export default Blog;

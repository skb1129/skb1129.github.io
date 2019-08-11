import React from "react";

import BlogCard from "./BlogCard";
import data from "../mock-blog-data.json";

import "./styles.scss";

const styles = {
  wrapper: "blog__wrapper",
};

const Blog: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      {Object.values(data).map(blog => (
        <BlogCard key={blog.id} {...blog} />
      ))}
    </div>
  );
};

export default Blog;

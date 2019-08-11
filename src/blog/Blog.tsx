import React from "react";

import BlogCard from "./BlogCard";

import "./styles.scss";

const data = [
  {
    id: "1",
    title: "Blog 1",
    image: "https://placedog.net/300/150",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: "2",
    title: "Blog 2",
    image: "https://placedog.net/301/150",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: "3",
    title: "Blog 3",
    image: "https://placedog.net/302/150",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const styles = {
  wrapper: "blog__wrapper",
};

const Blog: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      {data.map(blog => <BlogCard key={blog.id} {...blog} />)}
    </div>
  );
};

export default Blog;

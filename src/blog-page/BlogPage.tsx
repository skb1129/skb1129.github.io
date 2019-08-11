import React from "react";
import { RouteComponentProps } from "react-router";

import data from "../mock-data";

import "./styles.scss";

const styles = {
  wrapper: "blog-page__wrapper",
  title: "blog-page__title",
  image: "blog-page__image",
  text: "blog-page__text",
};

type RouteParams = {
  id: string;
};
const BlogPage: React.FC<RouteComponentProps<RouteParams>> = ({ match }) => {
  const { title, cover_image, description } = data[match.params.id];
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <img className={styles.image} src={cover_image} alt={title} />
      <p className={styles.text}>{description}</p>
    </div>
  );
};

export default BlogPage;

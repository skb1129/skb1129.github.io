import React from "react";

import "./styles.scss";
import { Link } from "react-router-dom";

const styles = {
  wrapper: "blog-card__wrapper",
  image: "blog-card__image",
  content: "blog-card__content",
  buttonWrapper: "blog-card__button-wrapper",
  button: "blog-card__button",
};

type Props = {
  id: string;
  title: string;
  image: string;
  short_description: string;
};
const BlogCard: React.FC<Props> = ({ id, title, image, short_description }) => {
  return (
    <div className={styles.wrapper}>
      <img src={image} className={styles.image} alt={title} />
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{short_description}</p>
      </div>
      <Link to={`/blog/${id}`}>
        <div className={styles.buttonWrapper}>
          <p className={styles.button}>Continue Reading</p>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;

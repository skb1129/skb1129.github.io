import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "../navbar/Navbar";
import About from "../about/About";
import Education from "../education/Education";
import Skills from "../skills/Skills";
import Interests from "../interests/Interests";
import Awards from "../awards/Awards";
import Blog from "../blog/Blog";
import BlogPage from "../blog-page/BlogPage";

import "./styles.scss";

const styles = {
  wrapper: "app__wrapper",
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main className={styles.wrapper}>
        <Route path="/" exact component={About} />
        <Route path="/about" component={About} />
        <Route path="/education" component={Education} />
        <Route path="/skills" component={Skills} />
        <Route path="/interests" component={Interests} />
        <Route path="/awards" component={Awards} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/blog/:id" component={BlogPage} />
      </main>
    </BrowserRouter>
  );
};

export default App;

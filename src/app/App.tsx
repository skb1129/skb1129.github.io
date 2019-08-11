import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "../navbar/Navbar";
import About from "../about/About";
import Education from "../education/Education";

import "./styles.scss";

const styles = {
  wrapper: "app__wrapper",
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className={styles.wrapper}>
        <Route path="/" exact component={About} />
        <Route path="/about" component={About} />
        <Route path="/education" component={Education} />
      </div>
    </BrowserRouter>
  );
};

export default App;

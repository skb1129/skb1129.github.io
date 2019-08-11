import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./navbar/Navbar";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Intro from "./components/Intro";
import Project from "./components/Projects";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Intro />
        <Project id="projects" name="projects" />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

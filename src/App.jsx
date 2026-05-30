import PortfolioBackground from "./PortfolioBackground";
import Home from './pages/home'
import About from './pages/about'
import Projects from './pages/projects'
import Contact from './pages/contact'
import{ motion }from 'framer-motion'
import React from "react";
function App() {
  return (
    <div>
      <PortfolioBackground />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          color: "white",
          padding: "0px",
        }}
      >
      </div>
      <div>
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
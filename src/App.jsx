import PortfolioBackground from "./PortfolioBackground";
import Home from './pages/home'
import About from './pages/about'
import Projects from './pages/projects'
import Contact from './pages/contact'
import Certification from './pages/certification'
import Footer from './components/footer'
import{ motion }from 'framer-motion'
import React from "react";
function App() {
  return (
    <div className = "w-full overflow-hidden">
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
        <Certification />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
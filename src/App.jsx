import PortfolioBackground from "./PortfolioBackground";
import Home from './pages/home'
import About from './pages/about'
import Projects from './pages/projects'
import Contact from './pages/contact'
import Footer from './components/footer'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <PortfolioBackground />

      <div className="relative z-10 text-white">
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
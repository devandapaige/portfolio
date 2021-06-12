import './App.css';
import Header from "./components/Header"
import About from "./components/About"
import ProjectsSection from "./components/ProjectsSection"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <Header />
      <About />
      <ProjectsSection />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

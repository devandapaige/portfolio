import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import ProjectsSection from "./components/ProjectsSection";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import SocialIcons from "./components/SocialIcons";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <About />
        <ProjectsSection />
        <Skills />
        <Contact />
      </main>
      <footer>
        <SocialIcons />
        <Footer />
      </footer>
    </div>
  );
}

export default App;

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Bio from "./components/Bio";
import Skills from "./components/Skills";
import ProjectExperience from "./components/ProjectExperience";
import EducationSection from "./components/EducationSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
<div>
        <Hero />
        <Navbar />
        <Bio />
        <Skills />
        <ProjectExperience />
        <Projects />
        <EducationSection />
        <ContactForm />
        <Footer />
      </div>
    </div>
  )
}
export default App;

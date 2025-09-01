import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectSection";

const HomePage = () => {
  return (
    <main className="bg-dark text-light">
      <HeroSection className="animate-fadeInUp" />
      <AboutSection className="animate-fadeInUp" />
      <ProjectsSection className="animate-fadeInUp" />
      <ContactSection className="animate-fadeInUp" />
    </main>
  );
};

export default HomePage;

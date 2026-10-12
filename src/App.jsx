import Volunteering from "./components/Volunteering";
import AboutMe from "./components/AboutMe";
import Certificates from "./components/Certificates";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import Stars from "./components/Stars";
const App = () => {
  return (
    <div className="overflow-x-hidden text-light bg-primary antialiased selection:bg-secondary selection:text-light min-h-screen">
    {/* background layer: pure black with a subtle radial vignette */}
    <div className="fixed top-0 z-0 min-h-full w-full bg-black bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,255,255,0.02),rgba(0,0,0,0))]"></div>
    {/* stars canvas sits above background */}
    <Stars />
  <div className="container relative z-20 mx-auto px-4">
        <Navbar/>
        <section id="hero">
          <Hero />
        </section>
        <section id="aboutme">
          <AboutMe />
        </section>
        <section id="education">
          <Education/>
        </section>

        <section id="experience">
          <Experience/>
        </section>
        <section id="projects">
          <Projects/>
        </section>
        <section id="skills">
          <Certificates/>
        </section>
        <section id="volunteering">
          <Volunteering/>
        </section>
        <Footer/>
      </div>
    <Analytics />
  </div>
  );
};

export default App;

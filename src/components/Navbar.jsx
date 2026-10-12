import logo from "../assets/Logo.png";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav id="top" className="mb-12 flex items-center justify-between py-4 glass px-4 rounded-lg mt-6">
      <div className="flex items-center gap-4">
        <img
          className="w-14 h-auto"
          src={logo}
          alt="logo"
        />
        <span className="font-semibold text-white">Ghofrane Mahfoudhi</span>
      </div>

      <div className="hidden md:flex items-center gap-6 text-sm">
        <a href="#hero" className="link-accent">Home</a>
        <a href="#aboutme" className="link-accent">About</a>
        <a href="#education" className="link-accent">Education</a>
        <a href="#experience" className="link-accent">Experience</a>
        <a href="#projects" className="link-accent">Projects</a>
        <a href="#skills" className="link-accent">Skills</a>
        <a href="#certifications" className="link-accent">Certifications</a>
        <a href="#volunteering" className="link-accent">Volunteering</a>
      </div>

      <div className="flex items-center gap-4 text-xl">
        <a href="https://www.linkedin.com/in/ghofrane-mahfoudhi/?isSelfProfile=true" target="_blank" rel="noopener noreferrer" className="link-accent" aria-label="LinkedIn"><FaLinkedin /></a>
        <a href="https://github.com/GhofraneMahfoudhi" target="_blank" rel="noopener noreferrer" className="link-accent" aria-label="GitHub"><FaGithub /></a>
        <a href="mailto:ghofrane.mahfoudhi@supcom.tn" className="link-accent" aria-label="Email"><FaEnvelope /></a>
      </div>
    </nav>
  );
};


export default Navbar;

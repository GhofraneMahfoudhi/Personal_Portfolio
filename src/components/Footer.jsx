import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
  <footer className="py-6 text-center bg-black">
      <div className="container mx-auto px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Texte copyright */}
          <p className="text-white/70">
            © 2026 Ghofrane Mahfoudhi. All rights reserved.
          </p>

          {/* Icônes réseaux sociaux */}
          <div className="flex space-x-6 text-2xl text-white">
            <a 
              href="https://www.linkedin.com/in/ghofrane-mahfoudhi/?isSelfProfile=true"
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-secondary transition-colors"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://github.com/GhofraneMahfoudhi" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-secondary transition-colors"
            >
              <FaGithub />
            </a>
            <a 
              href="mailto:ghofrane.mahfoudhi@supcom.tn" 
              className="hover:text-secondary transition-colors"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

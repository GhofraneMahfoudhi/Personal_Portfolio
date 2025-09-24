import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const Experience = () => {
  return (
  <div className="border-b border-neutral-800 pb-4"> 
      <SectionTitle id="experience">Professional Experience</SectionTitle>

      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            
            {/* Année */}
            <motion.div 
              whileInView={{opacity: 1, x: 0}}
              initial={{opacity: 0, x: -100}}
              transition={{duration: 1}}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-white/70">{experience.year}</p>
            </motion.div>

            {/* Rôle + Entreprise + Description */}
            <motion.div 
              whileInView={{opacity: 1, x: 0}}
              initial={{opacity: 0, x: 100}}
              transition={{duration: 1}}
              className="w-full max-w-xl lg:w-3/4">
              <div className="p-4 rounded-lg bg-neutral-900/30 hover:bg-neutral-900/50 violet-shadow-hover">
              <h6 className="mb-2 font-semibold text-white">
                {experience.role} -{" "}
                <span className="text-sm text-secondary">{experience.company}</span>
              </h6>
              
              <div className="mb-4 text-white/70">
                <div dangerouslySetInnerHTML={{ __html: experience.description }} />
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap">
                {experience.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="mr-2 mt-1 rounded bg-black ring-1 ring-secondary/10 px-2 py-1 text-sm font-medium text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

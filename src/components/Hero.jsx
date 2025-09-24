import { HERO_CONTENT } from "../constants";
import profile from "../assets/profile.jpg";
import cvPdf from "../CV/Ghofrane_Mahfoudhi_CV_AI_Intern.pdf";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="border-b border-transparent pb-12 lg:mb-20 bg-transparent text-white">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-0">
        <motion.div className="w-full lg:w-1/2" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex flex-col items-center lg:items-start lg:pl-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full text-sm bg-[#1f0522] text-secondary font-medium">Engineering Student</span>
              <span className="px-3 py-1 rounded-full text-sm bg-[#07121a] text-accent font-medium whitespace-nowrap">AI • Generative Models • Agentic Systems</span>
            </div>

            <h1 className="pb-4 text-4xl font-extrabold tracking-tight lg:text-5xl text-white">
              Ghofrane Mahfoudhi
            </h1>

            <p className="text-xl font-semibold text-white/90 mb-4">ICT Engineering Student — SUP&apos;COM</p>

            <p className="my-4 max-w-xl py-2 text-lg leading-relaxed text-white/75">
              {HERO_CONTENT}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a href="#projects" className="btn-cta" aria-label="Voir mes projets">See Projects</a>
              <a href="mailto:farah.elloumi@supcom.tn" className="inline-flex items-center rounded-md px-4 py-2 border border-white/10 text-white/90 hover:border-secondary transition-colors">Contact Me</a>
              <a href={cvPdf} download className="ml-2 text-sm text-white/70 hover:text-white">Download CV (PDF)</a>
            </div>
          </div>
        </motion.div>

        <motion.div className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:pr-8" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <motion.div whileHover={{ scale: 1.03 }} animate={{ y: [0, -6, 0] }} transition={{ duration: 6, repeat: Infinity }} className="relative">
            <div className="rounded-full p-0.5 bg-gradient-to-tr from-secondary to-secondary/90">
              <img
                className="w-60 h-60 lg:w-80 lg:h-80 rounded-full object-cover bg-neutral-900 border-2 border-white/6"
                src={profile}
                alt="Ghofrane Mahfoudhi"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

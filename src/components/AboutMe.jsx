import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
const AboutMe = () => {
  return (
    <div className="border-b border-neutral-900 pb-12 lg:mb-20 bg-primary text-light">
  <SectionTitle id="aboutme">About Me</SectionTitle>

      {/* Texte de présentation */}
      <p className="my-2 max-w-3xl mx-auto py-6 text-left text-light text-xl font-light tracking-tight mb-12">
        {ABOUT_TEXT}
      </p>

      {/* Grid des cartes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {[
          {
            icon: "🧑‍💻",
            title: "Passion for AI Innovation",
            text: "Driven by a strong passion for Artificial Intelligence, I am fascinated by its potential to transform data into intelligent solutions. I am particularly skilled in both generative AI (LLMs, agents) and deep learning, which I have successfully applied in real-world projects such as AI-powered rescue systems and intelligent assistants. I am eager to contribute to the development of cutting-edge intelligent systems that solve complex challenges",
          },
          {
            icon: "👥",
            title: "Interpersonal and Collaborative Skills",
            text: "I thrive in team environments and integrate seamlessly into groups, bringing positive energy and a collaborative spirit to every project. My experience in group projects—from academic challenges to community initiatives like the PACTE Project—has strengthened my ability to communicate clearly, adapt quickly, and contribute effectively toward shared goals.",
          },
          {
            icon: "🌿",
            title: "Commitment to Growth and Balance",
            text: "I am deeply passionate about continuous learning and tackling new challenges, both technical and human-centered. At the same time, I believe in maintaining a healthy balance by staying active, engaged in extracurricular activities, and pursuing personal interests that fuel creativity and well-being.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="p-6 border border-neutral-700 rounded-xl bg-primary text-left shadow-lg shadow-glow neon-hover focus:outline-none focus:ring-4 focus:ring-secondary/20"
            whileHover={{ scale: 1.03 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            tabIndex={0}
          >
            <div className="text-4xl text-secondary mb-4">{item.icon}</div>
            <h3 className="text-secondary text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-light text-sm">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;

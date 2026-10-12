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
            text: "My passion for Artificial Intelligence lies in understanding how intelligent systems learn, reason and generate solutions. From Deep Learning to Generative AI, LLMs and Agentic AI, I am fascinated by the rapid evolution of these technologies and their growing capabilities. I am particularly interested in developing intelligent systems that combine learning, reasoning and autonomous decision-making to tackle increasingly complex challenges.",
          },
          {
            icon: "👥",
            title: "Interpersonal and Collaborative Skills",
            text: "I value collaboration, clear communication and mutual respect, and I adapt easily to diverse teams and working environments. I approach challenges with a proactive mindset, a strong sense of responsibility and a willingness to learn from others. I am comfortable taking initiative, exchanging ideas and working collaboratively toward shared goals, while remaining adaptable and committed to delivering quality results.",
          },
          {
            icon: "🌿",
            title: "Commitment to Growth and Balance",
            text: "I believe that growth comes from continuous learning, stepping beyond familiar boundaries and embracing new experiences. I strive to develop both personally and professionally by remaining curious, challenging myself and learning from the people around me. Beyond my academic and professional pursuits, I value staying active, exploring new interests and maintaining a healthy balance that supports creativity, well-being and long-term growth.",
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

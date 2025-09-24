import { events } from "../constants";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const Volunteering = () => {
  return (
  <div className="border-b pb-16 lg:mb-20">
      <div className="mb-10">
        <SectionTitle id="volunteering">Volunteering</SectionTitle>
      </div>

      {/* Liste des événements */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event, index) => (
          <motion.div
            key={index}
            className="relative group overflow-hidden rounded-2xl shadow-lg ring-1 ring-secondary/10 neon-hover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* If first event, link image to FB page */}
            {index === 0 ? (
              <a href="https://www.facebook.com/profile.php?id=61558451337269" target="_blank" rel="noreferrer">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-64 object-cover transition duration-300 ease-in-out group-hover:blur-md"
                />
              </a>
            ) : (
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-64 object-cover transition duration-300 ease-in-out group-hover:blur-md"
              />
            )}

            <div className="absolute inset-0 flex flex-col justify-center px-4 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300">
              <h3 className="text-lg font-bold text-white">{event.title}</h3>
              <p className="text-sm text-white/80">{event.date}</p>
              <div className="text-sm text-white/70 mt-2 max-h-40 overflow-auto">
                <p>{event.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Volunteering;

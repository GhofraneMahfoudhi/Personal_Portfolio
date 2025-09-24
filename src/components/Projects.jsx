import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { useState, useRef } from "react";

const Projects = () => {
  const [activeMedia, setActiveMedia] = useState(null);

  const modalRef = useRef(null);

  const handleFullscreen = () => {
    const el = modalRef.current;
    if (!el) return;
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else {
      if (el.requestFullscreen) {
        el.requestFullscreen().catch(() => {});
      }
    }
  };

  return (
  <div className="border-b pb-4 w-full max-w-7xl mx-auto px-4">
      <SectionTitle id="projects">Latest Projects</SectionTitle>

  {/* Liste des projets */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 w-full">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="bg-neutral-900 p-6 rounded-xl ring-1 ring-secondary/10 text-left shadow-md shadow-secondary/10 neon-hover focus:outline-none focus:ring-4 focus:ring-secondary/20"
            whileHover={{ scale: 1.04, translateY: -6 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            tabIndex={0}
          >
            <div className="mb-4 rounded-lg overflow-hidden w-full h-80 sm:h-96 bg-black relative">
              {/* Show image in grid always; if video exists show play overlay */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => {
                  if (project.video) setActiveMedia({ type: "video", src: project.video, title: project.title });
                  else setActiveMedia({ type: "image", src: project.image, title: project.title });
                }}
              />

              {project.video && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="pointer-events-auto bg-black/40 rounded-full p-3">
                    <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}
            </div>

            <p className="text-sm text-white/70">{project.date}</p>
            <h3 className="text-lg font-semibold text-white">{project.title}</h3>
            <p className="text-sm text-white/70 mt-2">{project.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Simple modal / lightbox for expanded media */}
      {activeMedia && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveMedia(null)}
        >
          <div className="w-full h-full" onClick={(e) => e.stopPropagation()}>
            <div ref={modalRef} className="max-w-none w-full h-full flex items-center justify-center">
              <div className="bg-neutral-900 rounded-lg overflow-hidden w-full h-full">
                <div className="relative">
                  {activeMedia.type === "video" ? (
                    <video
                      src={activeMedia.src}
                      controls
                      autoPlay
                      muted={false}
                      className="w-full h-[80vh] sm:h-[90vh] bg-black object-contain"
                    />
                  ) : (
                    <img src={activeMedia.src} alt={activeMedia.title} className="w-full h-[80vh] sm:h-[90vh] object-contain bg-black" />
                  )}

                  <div className="absolute top-3 right-3 flex gap-2">
                    <button
                      className="px-3 py-1 rounded bg-secondary text-black"
                      onClick={handleFullscreen}
                      aria-label="Toggle fullscreen"
                    >
                      Fullscreen
                    </button>
                    <button
                      className="px-3 py-1 rounded bg-white/10 text-white"
                      onClick={() => setActiveMedia(null)}
                      aria-label="Close"
                    >
                      Close
                    </button>
                  </div>
                </div>

                <div className="p-4 text-left">
                  <h3 className="text-lg font-semibold text-white">{activeMedia.title}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;

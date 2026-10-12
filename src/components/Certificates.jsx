import { SKILLS, CERTIFICATES } from "../constants";
import SectionTitle from "./SectionTitle";
import { FaBrain, FaCode, FaCloud, FaDatabase, FaChartLine, FaGlobe, FaServer, FaTools } from "react-icons/fa";

const CATEGORY_ICONS = {
  "Artificial Intelligence & Machine Learning": FaBrain,
  "Programming Languages": FaCode,
  "Web Development": FaGlobe,
  "Backend & APIs": FaServer,
  "Databases & Vector Stores": FaDatabase,
  Cloud: FaCloud,
  "Data & Visualization": FaChartLine,
  Tools: FaTools,
};

const Skills = () => {
  return (
    <div className="border-b border-neutral-900 pb-10 lg:mb-12">
      <SectionTitle id="skills">Technical <span className="text-secondary">Skills</span></SectionTitle>

      <div className="max-w-3xl mx-auto text-center text-muted/80 mb-6">
        <p>Organized skill groups with key tools and frameworks.</p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((group, idx) => (
            <div key={idx} className="p-6 rounded-lg bg-neutral-900/40 ring-1 ring-secondary/10 neon-hover">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-md bg-neutral-800 flex items-center justify-center text-xl text-secondary">
                  {(() => { const Icon = CATEGORY_ICONS[group.title] || FaTools; return <Icon aria-hidden="true" />; })()}
                </div>
                <h4 className="text-lg font-semibold text-white">{group.title}</h4>
              </div>

              <ul className="space-y-2">
                {group.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-white/90">
                    <span className="w-2 h-2 shrink-0 rounded-full bg-secondary" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 border-t border-neutral-800 pt-2">
          <SectionTitle id="certifications">Certifications</SectionTitle>
          <div className="mb-6 flex items-center justify-between gap-4">
            <p className="text-sm uppercase tracking-[0.2em] text-accent">Verified learning</p>
            <span className="text-sm text-white/50">2 featured credentials</span>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {CERTIFICATES.filter((certificate) => certificate.title.includes("Machine Learning") || certificate.title.startsWith("CCNA")).map((certificate) => (
              <a key={certificate.title} href={certificate.credlyLink} target="_blank" rel="noreferrer" className="group overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/40 transition hover:-translate-y-1 hover:border-secondary/60">
                <img src={certificate.image} alt={`${certificate.title} certificate`} className="h-52 w-full object-cover object-top transition duration-300 group-hover:scale-[1.02]" />
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-semibold text-white group-hover:text-secondary">{certificate.title}</h4>
                      <p className="mt-2 text-sm text-white/60">{certificate.issuer} · {certificate.date}</p>
                    </div>
                    <span className="text-secondary">↗</span>
                  </div>
                  <p className="mt-3 text-sm text-white/70">{certificate.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

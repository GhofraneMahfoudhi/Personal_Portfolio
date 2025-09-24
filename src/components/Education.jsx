import SectionTitle from "./SectionTitle";
import { EDUCATION } from "../constants";

const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-12 lg:mb-20">
      <SectionTitle id="education">Education</SectionTitle>

          <div className="max-w-4xl mx-auto space-y-6">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="p-6 bg-primary/20 border border-neutral-800 rounded-lg neon-hover">
                <div className="flex flex-col">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{edu.institution}</h3>
                    <div className="text-sm text-muted/80">{edu.degree} • <span className="opacity-80">{edu.period}</span></div>
                  </div>

                  <p className="mt-4 text-sm text-muted/70">{edu.description}</p>

                  {/* subjects below description */}
                  <div className="text-sm text-muted/70 mt-3">{edu.subjects.join(' • ')}</div>
                </div>
              </div>
            ))}
          </div>
    </div>
  );
};

export default Education;

import { SKILLS } from "../constants";
import SectionTitle from "./SectionTitle";

const ICON_MAP = {
  Python: "🐍",
  "C++": "💻",
  MATLAB: "📊",
  Java: "☕",
  PHP: "🐘",
  SQL: "🗄️",
  HTML: "🟧",
  CSS: "🎨",
  JavaScript: "✨",
  "Spring Boot": "🌱",
  Angular: "🅰️",
  Bootstrap: "🔷",
  TensorFlow: "🤖",
  PyTorch: "🔥",
  Pandas: "🐼",
  NumPy: "🔢",
  MySQL: "🐬",
  PostgreSQL: "🐘",
  AWS: "☁️",
  Git: "🔧",
  "VS Code": "🧾",
  Figma: "🎛️",
  Postman: "📮",
  IntelliJ: "🧠",
  Linux: "🐧",
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
                <div className="w-12 h-12 rounded-md bg-neutral-800 flex items-center justify-center text-xl text-white/90">
                  {/* use first letter as icon fallback */}
                  <span className="font-bold">{group.title.split(' ')[0][0]}</span>
                </div>
                <h4 className="text-lg font-semibold text-white">{group.title}</h4>
              </div>

              <ul className="space-y-2">
                {group.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-white/90">
                    <span className="w-6 text-center text-lg">{ICON_MAP[item] || '•'}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

import { FaChartLine, FaDatabase, FaBrain, FaCloud } from "react-icons/fa";
import Reveal from "./Reveal";
import { skills } from "@/lib/data";

const icons = {
  chart: FaChartLine,
  database: FaDatabase,
  brain: FaBrain,
  cloud: FaCloud,
};

const allTags = Array.from(new Set(skills.flatMap((s) => s.tags)));

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <span className="block text-center text-xs font-semibold tracking-[0.2em] uppercase text-[var(--accent)] mb-3">
            Compétences
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-[#171522]">
            Ce que je fais
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, i) => {
            const Icon = icons[skill.icon as keyof typeof icons];
            return (
              <Reveal key={skill.title} delay={i * 0.08}>
                <div className="card rounded-2xl p-6 h-full hover:-translate-y-1.5 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center mb-5">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-semibold text-[#171522] mb-2">{skill.title}</h3>
                  <p className="text-sm text-[#171522]/55 leading-relaxed mb-4">{skill.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {skill.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2.5 py-1 rounded-full bg-[#171522]/[0.04] text-[#171522]/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      <div className="relative overflow-hidden py-4 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-4 w-max marquee-track">
          {[...allTags, ...allTags].map((tag, i) => (
            <span
              key={tag + i}
              className="text-sm px-5 py-2 rounded-full card text-[#171522]/50 whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

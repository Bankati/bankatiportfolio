import { FaChartLine, FaDatabase, FaBrain, FaCloud, FaCode } from "react-icons/fa";
import Chapter from "./Chapter";
import Reveal from "./Reveal";
import { skills, projects, certifications } from "@/lib/data";
import { techIcons } from "@/lib/techIcons";

const icons = {
  chart: FaChartLine,
  database: FaDatabase,
  brain: FaBrain,
  cloud: FaCloud,
  code: FaCode,
};

/** Nombre de projets et de certifications qui mettent en œuvre explicitement cette technologie. */
function proofs(tag: string) {
  const t = tag.toLowerCase();
  const inProjects = projects.filter((p) => p.tech.some((x) => x.toLowerCase().includes(t)));
  const inCerts = certifications.filter(
    (c) =>
      c.title.toLowerCase().includes(t) || c.topics?.some((topic) => topic.toLowerCase() === t)
  );
  return { projects: inProjects.length, certs: inCerts.length };
}

export default function Skills() {
  return (
    <Chapter
      id="skills"
      number="03"
      kicker="Les technologies"
      title="Ce que je maîtrise, et où je l'ai prouvé"
      intro="Le chiffre à côté d'une technologie indique combien de projets ou de certifications de ce portfolio la mettent en œuvre. Sans chiffre, elle fait partie de mon socle d'apprentissage."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, i) => {
          const Icon = icons[skill.icon as keyof typeof icons];
          return (
            <Reveal key={skill.title} delay={i * 0.08}>
              <div className="card rounded-2xl p-6 h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-semibold text-[#171522]">{skill.title}</h3>
                </div>
                <p className="text-sm text-[#171522]/55 leading-relaxed mb-5">{skill.desc}</p>
                <ul className="flex flex-wrap gap-2">
                  {skill.tags.map((tag) => {
                    const p = proofs(tag);
                    const total = p.projects + p.certs;
                    const TagIcon = techIcons[tag];
                    const detail = [
                      p.projects > 0 && `${p.projects} projet${p.projects > 1 ? "s" : ""}`,
                      p.certs > 0 && `${p.certs} certification${p.certs > 1 ? "s" : ""}`,
                    ]
                      .filter(Boolean)
                      .join(" · ");
                    return (
                      <li
                        key={tag}
                        title={detail || undefined}
                        className={`text-xs pl-2.5 py-1 rounded-full flex items-center gap-1.5 ${
                          total > 0
                            ? "bg-[var(--accent)]/10 text-[#171522] font-medium pr-1"
                            : "bg-[#171522]/[0.04] text-[#171522]/55 pr-3"
                        }`}
                      >
                        {TagIcon && <TagIcon size={12} className="shrink-0 opacity-80" />}
                        {tag}
                        {total > 0 && (
                          <span className="min-w-5 h-5 px-1.5 rounded-full bg-[var(--accent)] text-white text-[10px] flex items-center justify-center">
                            {total}
                          </span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Chapter>
  );
}

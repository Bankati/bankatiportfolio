"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub, FaPlus, FaFilePdf, FaExternalLinkAlt, FaLayerGroup } from "react-icons/fa";
import Chapter from "./Chapter";
import { projects, domains, type DomainId } from "@/lib/data";
import { techIcons } from "@/lib/techIcons";

function primaryLink(link: string) {
  if (link.endsWith(".pdf")) return { label: "Lire le rapport (PDF)", Icon: FaFilePdf };
  if (link.includes("github.com")) return { label: "Voir le code", Icon: FaGithub };
  return { label: "Voir le projet", Icon: FaExternalLinkAlt };
}

export default function Projects() {
  const [openTitle, setOpenTitle] = useState<string | null>(null);
  const [filter, setFilter] = useState<"all" | DomainId>("all");

  // Un domaine n'apparaît dans les filtres que s'il contient au moins un projet.
  const usedDomains = domains.filter((d) => projects.some((p) => p.domain === d.id));
  const visible = filter === "all" ? projects : projects.filter((p) => p.domain === filter);

  return (
    <Chapter
      id="projects"
      number="02"
      kicker="Ce que j'ai construit"
      title="Projets, du problème au résultat"
      intro="Chaque projet suit la même logique : le contexte, les technologies utilisées, puis le résultat obtenu avec un lien vers la preuve (code, rapport ou démonstration)."
      tone="dark"
    >
      {usedDomains.length > 1 && (
        <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Domaines de projets">
          {[{ id: "all" as const, label: "Tous" }, ...usedDomains].map((d) => (
            <button
              key={d.id}
              role="tab"
              aria-selected={filter === d.id}
              onClick={() => setFilter(d.id)}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === d.id ? "text-white" : "text-white/55 hover:text-white"
              }`}
            >
              {filter === d.id && (
                <motion.span
                  layoutId="project-filter"
                  className="absolute inset-0 rounded-full bg-[var(--accent)]"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{d.label}</span>
            </button>
          ))}
        </div>
      )}

      <motion.div layout className="grid sm:grid-cols-2 gap-6 items-start">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => {
            const isOpen = openTitle === project.title;
            const { label, Icon } = primaryLink(project.link);
            const domainLabel = domains.find((d) => d.id === project.domain)?.label;
            return (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl overflow-hidden bg-[#1a1730] border border-white/10"
              >
                <button
                  onClick={() => setOpenTitle(isOpen ? null : project.title)}
                  aria-expanded={isOpen}
                  className="group relative w-full h-64 block text-left"
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover opacity-80 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-60"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/25 to-[#1a1730] flex items-center justify-center">
                      <FaLayerGroup className="text-white/15" size={64} />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1730] via-[#1a1730]/10 to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <div className="flex flex-wrap gap-2">
                      <span className="text-[11px] font-semibold tracking-wide uppercase px-3 py-1 rounded-full bg-white/10 text-white backdrop-blur-sm">
                        {project.category}
                      </span>
                      {usedDomains.length > 1 && (
                        <span className="text-[11px] font-medium px-3 py-1 rounded-full bg-[var(--accent)]/80 text-white">
                          {domainLabel}
                        </span>
                      )}
                    </div>
                    <div className="flex items-end justify-between gap-4">
                      <h3 className="text-white font-semibold text-lg leading-snug">
                        {project.title}
                      </h3>
                      <span
                        className={`shrink-0 w-9 h-9 rounded-full bg-[var(--accent)] text-white flex items-center justify-center transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      >
                        <FaPlus size={12} />
                      </span>
                    </div>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-5 space-y-4 text-sm">
                        <div>
                          <h4 className="text-[var(--accent)] font-medium mb-1">Contexte</h4>
                          <p className="text-white/60 leading-relaxed">{project.context}</p>
                        </div>
                        {(project.language || project.database || project.hosting) && (
                          <dl className="grid grid-cols-3 gap-3 rounded-xl bg-white/[0.04] p-3">
                            {project.language && (
                              <div>
                                <dt className="text-[10px] uppercase tracking-wide text-white/35">
                                  Langage
                                </dt>
                                <dd className="text-white/75 text-xs font-medium mt-0.5">
                                  {project.language}
                                </dd>
                              </div>
                            )}
                            {project.database && (
                              <div>
                                <dt className="text-[10px] uppercase tracking-wide text-white/35">
                                  Base de données
                                </dt>
                                <dd className="text-white/75 text-xs font-medium mt-0.5">
                                  {project.database}
                                </dd>
                              </div>
                            )}
                            {project.hosting && (
                              <div>
                                <dt className="text-[10px] uppercase tracking-wide text-white/35">
                                  Hébergement
                                </dt>
                                <dd className="text-white/75 text-xs font-medium mt-0.5">
                                  {project.hosting}
                                </dd>
                              </div>
                            )}
                          </dl>
                        )}
                        <div>
                          <h4 className="text-[var(--accent)] font-medium mb-1.5">
                            {project.language || project.database
                              ? "Autres technologies"
                              : "Technologies"}
                          </h4>
                          <ul className="flex flex-wrap gap-2">
                            {project.tech.map((t) => {
                              const TechIcon = techIcons[t];
                              return (
                                <li
                                  key={t}
                                  className="text-xs pl-2.5 pr-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 flex items-center gap-1.5"
                                >
                                  {TechIcon && <TechIcon size={12} className="shrink-0 opacity-80" />}
                                  {t}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-[var(--accent)] font-medium mb-1">Résultat</h4>
                          <p className="text-white/60 leading-relaxed">{project.result}</p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full bg-[var(--accent)] text-white hover:bg-[var(--accent-dark)] transition-colors"
                          >
                            <Icon /> {label}
                          </a>
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
                            >
                              <FaExternalLinkAlt size={12} /> Démonstration
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </Chapter>
  );
}

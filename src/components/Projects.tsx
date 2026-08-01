"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub, FaPlus } from "react-icons/fa";
import Reveal from "./Reveal";
import { projects } from "@/lib/data";

export default function Projects() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <span className="block text-center text-xs font-semibold tracking-[0.2em] uppercase text-[var(--accent)] mb-3">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-[#171522]">
            Mes projets
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={project.title} delay={i * 0.08}>
                <div className="rounded-2xl overflow-hidden bg-[#171522]">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="group relative w-full h-64 block text-left"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover opacity-80 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#171522] via-[#171522]/10 to-transparent" />
                    <div className="absolute inset-0 p-6 flex flex-col justify-between">
                      <span className="self-start text-[11px] font-semibold tracking-wide uppercase px-3 py-1 rounded-full bg-white/10 text-white backdrop-blur-sm">
                        {project.category}
                      </span>
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
                        <div className="p-6 pt-5 space-y-4 text-sm bg-[#1e1b2e]">
                          <div>
                            <h4 className="text-[var(--accent)] font-medium mb-1">Contexte</h4>
                            <p className="text-white/60 leading-relaxed">{project.context}</p>
                          </div>
                          <div>
                            <h4 className="text-[var(--accent)] font-medium mb-1.5">
                              Technologies
                            </h4>
                            <ul className="flex flex-wrap gap-2">
                              {project.tech.map((t) => (
                                <li
                                  key={t}
                                  className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60"
                                >
                                  {t}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-[var(--accent)] font-medium mb-1">Résultats</h4>
                            <p className="text-white/60 leading-relaxed">{project.result}</p>
                          </div>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full bg-[var(--accent)] text-white hover:bg-[var(--accent-dark)] transition-colors w-fit"
                          >
                            <FaGithub /> Voir le projet
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

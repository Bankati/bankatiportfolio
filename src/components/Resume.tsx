"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaTrophy } from "react-icons/fa";
import Reveal from "./Reveal";
import { academics, professional, certifications, competitions } from "@/lib/data";

const tabs = ["Formation & Expérience", "Certifications", "Compétitions"] as const;

export default function Resume() {
  const [tab, setTab] = useState<(typeof tabs)[number]>(tabs[0]);

  return (
    <section id="resume" className="relative py-24 px-6 bg-[#171522]/[0.03]">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <span className="block text-center text-xs font-semibold tracking-[0.2em] uppercase text-[var(--accent)] mb-3">
            7 années de progression
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-[#171522]">
            Mon CV
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-14">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                  tab === t ? "text-white" : "text-[#171522]/60 hover:text-[#171522]"
                }`}
              >
                {tab === t && (
                  <motion.span
                    layoutId="resume-tab"
                    className="absolute inset-0 rounded-full bg-[var(--accent)]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{t}</span>
              </button>
            ))}
          </div>
        </Reveal>

        {tab === "Formation & Expérience" && (
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Reveal>
                <h3 className="text-lg font-semibold text-[#171522] mb-6">Formation</h3>
              </Reveal>
              <div className="space-y-5">
                {academics.map((item, i) => (
                  <Reveal key={item.title} delay={i * 0.08}>
                    <div className="card rounded-2xl p-5 flex gap-4">
                      <div className="relative w-14 h-14 shrink-0 rounded-xl overflow-hidden">
                        <Image src={item.image} alt={item.title} fill className="object-cover" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#171522]">{item.title}</h4>
                        <p className="text-sm text-[#171522]/55 mt-1 leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div>
              <Reveal>
                <h3 className="text-lg font-semibold text-[#171522] mb-6">
                  Expérience professionnelle
                </h3>
              </Reveal>
              <div className="space-y-5">
                {professional.map((item, i) => (
                  <Reveal key={item.title} delay={i * 0.08}>
                    <div className="card rounded-2xl p-5 flex gap-4">
                      <div className="relative w-14 h-14 shrink-0 rounded-xl overflow-hidden">
                        <Image src={item.image} alt={item.title} fill className="object-cover" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#171522]">{item.title}</h4>
                        <h5 className="text-[var(--accent)] text-xs font-medium mb-2">
                          {item.subtitle}
                        </h5>
                        <ul className="space-y-1">
                          {item.items.map((line) => (
                            <li
                              key={line}
                              className="text-sm text-[#171522]/55 pl-3 relative leading-relaxed"
                            >
                              <span className="absolute left-0 text-[var(--accent)]">▸</span>
                              {line}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "Certifications" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, i) => (
              <Reveal key={cert.title} delay={i * 0.08}>
                <div className="card rounded-2xl p-6 text-center h-full flex flex-col items-center hover:-translate-y-1.5 transition-transform duration-300">
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden mb-4">
                    <Image src={cert.image} alt={cert.title} fill className="object-cover" />
                  </div>
                  <h4 className="font-semibold text-[#171522] mb-2">{cert.title}</h4>
                  <p className="text-sm text-[#171522]/55 mb-5 leading-relaxed">{cert.text}</p>
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto text-sm font-medium px-5 py-2 rounded-full border border-[var(--accent)]/40 text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] transition-colors"
                  >
                    Voir le certificat
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        {tab === "Compétitions" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {competitions.map((comp, i) => (
              <Reveal key={comp.title} delay={i * 0.08}>
                <div className="card rounded-2xl p-6 text-center h-full flex flex-col items-center gap-3 hover:-translate-y-1.5 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-[var(--accent)] flex items-center justify-center text-white">
                    <FaTrophy size={18} />
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-[#171522]/[0.05] text-[#171522]/50">
                    {comp.year}
                  </span>
                  <h4 className="font-semibold text-[#171522]">{comp.title}</h4>
                  <p className="text-sm text-[#171522]/55">{comp.result}</p>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

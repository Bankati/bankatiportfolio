"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import Chapter from "./Chapter";
import Reveal from "./Reveal";
import { professional } from "@/lib/data";

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <Chapter
      id="experience"
      number="04"
      kicker="En situation réelle"
      title="Expériences professionnelles"
      intro="Les missions où les compétences sortent du cadre des projets : données réelles, contraintes réelles, utilisateurs réels."
      tone="tinted"
    >
      <div ref={ref} className="relative max-w-3xl">
        <div aria-hidden className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-[#171522]/10" />
        <motion.div
          aria-hidden
          style={{ scaleY }}
          className="absolute left-[19px] top-2 bottom-2 w-0.5 origin-top bg-[var(--accent)]"
        />

        <div className="space-y-8">
          {professional.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="relative pl-14">
                <span
                  aria-hidden
                  className="absolute left-0 top-5 w-10 h-10 rounded-full bg-white border-4 border-[var(--accent)]/30 flex items-center justify-center"
                >
                  <span className="w-3 h-3 rounded-full bg-[var(--accent)]" />
                </span>
                <div className="card rounded-2xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-14 h-14 shrink-0 rounded-xl overflow-hidden">
                      <Image src={item.image} alt={item.title} fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#171522]">{item.title}</h3>
                      <p className="text-[var(--accent)] text-xs font-medium">{item.subtitle}</p>
                      {item.period && (
                        <p className="text-xs text-[#171522]/45 mt-0.5">{item.period}</p>
                      )}
                    </div>
                  </div>
                  <ul className="space-y-1.5">
                    {item.items.map((line) => (
                      <li
                        key={line}
                        className="text-sm text-[#171522]/60 pl-4 relative leading-relaxed"
                      >
                        <span className="absolute left-0 text-[var(--accent)]">▸</span>
                        {line}
                      </li>
                    ))}
                  </ul>
                  {item.stack && (
                    <ul className="flex flex-wrap gap-1.5 mt-4">
                      {item.stack.map((s) => (
                        <li
                          key={s}
                          className="text-[11px] px-2.5 py-1 rounded-full bg-[#171522]/[0.05] text-[#171522]/60"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Chapter>
  );
}

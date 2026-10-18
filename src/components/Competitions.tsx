"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { FaTrophy } from "react-icons/fa";
import Chapter from "./Chapter";
import Reveal from "./Reveal";
import Lightbox from "./Lightbox";
import { competitions } from "@/lib/data";

const medal: Record<number, string> = {
  1: "from-amber-300 to-amber-500",
  2: "from-slate-200 to-slate-400",
  3: "from-orange-300 to-orange-600",
};

function rankLabel(rank: number) {
  return rank === 1 ? "1er" : `${rank}e`;
}

export default function Competitions() {
  const [photo, setPhoto] = useState<{ src: string; caption: string } | null>(null);
  const sorted = [...competitions].sort((a, b) => a.rank - b.rank);

  return (
    <Chapter
      id="competitions"
      number="05"
      kicker="Mis à l'épreuve"
      title="Compétitions et hackathons"
      intro="Travailler en équipe, sous contrainte de temps, devant un jury : c'est là que les compétences techniques rencontrent la gestion de projet."
      tone="dark"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sorted.map((comp, i) => (
          <Reveal
            key={comp.title}
            delay={i * 0.08}
            className={i === 0 ? "lg:col-span-2" : ""}
          >
            <div
              className={`h-full rounded-2xl border p-6 flex flex-col gap-4 ${
                i === 0
                  ? "bg-gradient-to-br from-[var(--accent)]/25 to-[#1a1730] border-[var(--accent)]/40"
                  : "bg-[#1a1730] border-white/10"
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-14 h-14 shrink-0 rounded-full bg-gradient-to-br ${
                    medal[comp.rank] ?? "from-white/20 to-white/10"
                  } flex flex-col items-center justify-center text-[#171522] font-bold leading-none`}
                >
                  <FaTrophy size={13} className="mb-0.5 opacity-70" />
                  <span className="text-sm">{rankLabel(comp.rank)}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg leading-snug">{comp.title}</h3>
                  <p className="text-sm text-white/55">{comp.result}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {comp.year && (
                  <span className="text-xs px-3 py-1 rounded-full bg-white/[0.07] text-white/60">
                    {comp.year}
                  </span>
                )}
                {comp.role && (
                  <span className="text-xs px-3 py-1 rounded-full bg-[var(--accent)] text-white font-medium">
                    {comp.role}
                  </span>
                )}
              </div>

              {comp.photos && comp.photos.length > 0 && (
                <div className="grid grid-cols-3 gap-2 mt-auto">
                  {comp.photos.map((p) => (
                    <button
                      key={p.src}
                      onClick={() => setPhoto(p)}
                      aria-label={`Agrandir : ${p.caption}`}
                      className="relative aspect-square rounded-lg overflow-hidden group"
                    >
                      <Image
                        src={p.src}
                        alt={p.caption}
                        fill
                        sizes="160px"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {photo && (
          <Lightbox
            src={photo.src}
            alt={photo.caption}
            caption={photo.caption}
            onClose={() => setPhoto(null)}
          />
        )}
      </AnimatePresence>
    </Chapter>
  );
}

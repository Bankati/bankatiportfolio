"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { FaExpand, FaFilePdf, FaShieldAlt, FaDatabase } from "react-icons/fa";
import Chapter from "./Chapter";
import Reveal from "./Reveal";
import Lightbox from "./Lightbox";
import { certifications } from "@/lib/data";

export default function Certifications() {
  const [open, setOpen] = useState<{ src: string; title: string } | null>(null);

  return (
    <Chapter
      id="certifications"
      number="06"
      kicker="Les preuves"
      title="Certifications"
      intro="Chaque certification renvoie au document officiel : ouvre le certificat pour le vérifier."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, i) => (
          <Reveal key={cert.title} delay={i * 0.08}>
            <article className="card rounded-2xl overflow-hidden h-full flex flex-col hover:-translate-y-1.5 transition-transform duration-300">
              {cert.image ? (
                <button
                  onClick={() => setOpen({ src: cert.image!, title: cert.title })}
                  aria-label={`Agrandir le certificat ${cert.title}`}
                  className="group relative aspect-[4/3] bg-[#171522]/[0.04] block"
                >
                  <Image
                    src={cert.image}
                    alt={`Certificat ${cert.title}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top"
                  />
                  <span className="absolute inset-0 bg-[#171522]/0 group-hover:bg-[#171522]/40 transition-colors flex items-center justify-center">
                    <FaExpand className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </button>
              ) : (
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ouvrir le certificat ${cert.title} en PDF`}
                  className="group relative aspect-[4/3] bg-gradient-to-br from-[var(--accent)]/10 to-[#171522]/[0.06] flex flex-col items-center justify-center gap-2 text-[var(--accent)]"
                >
                  <FaDatabase size={28} />
                  <span className="text-xs font-medium text-[#171522]/45 px-4 text-center">
                    Aperçu non fourni — ouvrir le PDF
                  </span>
                </a>
              )}

              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-3">
                  {cert.issuer && (
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)]">
                      {cert.issuer}
                    </span>
                  )}
                  {cert.date && (
                    <span className="text-[11px] px-2.5 py-1 rounded-full bg-[#171522]/[0.05] text-[#171522]/55">
                      {cert.date}
                    </span>
                  )}
                  {cert.duration && (
                    <span className="text-[11px] px-2.5 py-1 rounded-full bg-[#171522]/[0.05] text-[#171522]/55">
                      {cert.duration}
                    </span>
                  )}
                </div>
                <h3 className="font-semibold text-[#171522]">{cert.title}</h3>
                {cert.course && (
                  <p className="text-xs font-medium text-[var(--accent)] mt-1 leading-snug">
                    {cert.course}
                  </p>
                )}
                <p className="text-sm text-[#171522]/55 mt-3 leading-relaxed">{cert.text}</p>
                {cert.instructors && (
                  <p className="text-xs text-[#171522]/45 mt-2">Formateur : {cert.instructors}</p>
                )}
                {cert.topics && cert.topics.length > 0 && (
                  <ul className="flex flex-wrap gap-1.5 mt-3">
                    {cert.topics.map((t) => (
                      <li
                        key={t}
                        className="text-[11px] px-2.5 py-1 rounded-full bg-[#171522]/[0.05] text-[#171522]/60"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mb-5" />
                <div className="mt-auto flex flex-wrap gap-2">
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-[var(--accent)]/40 text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] transition-colors"
                  >
                    <FaFilePdf /> Certificat
                  </a>
                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-[#171522] text-white hover:bg-[#171522]/80 transition-colors"
                    >
                      <FaShieldAlt /> Vérifier
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {open && (
          <Lightbox
            src={open.src}
            alt={`Certificat ${open.title}`}
            caption={open.title}
            onClose={() => setOpen(null)}
          />
        )}
      </AnimatePresence>
    </Chapter>
  );
}

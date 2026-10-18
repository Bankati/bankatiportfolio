import Image from "next/image";
import Chapter from "./Chapter";
import Reveal from "./Reveal";
import { academics } from "@/lib/data";

export default function About() {
  return (
    <Chapter
      id="about"
      number="01"
      kicker="Qui je suis"
      title="Un parcours qui part de la donnée"
      intro={`Formé en système d'information à Lomé Business School, je construis des analyses, des tableaux de bord et des solutions web. Ce portfolio suit le fil de mon parcours : ce que j'ai appris, ce que j'ai construit, et les preuves qui vont avec.`}
    >
      <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-0 items-stretch">
        {academics.map((item, i) => (
          <div key={item.title} className="contents">
            <Reveal delay={i * 0.1}>
              <div className="card rounded-2xl p-6 flex gap-4 h-full">
                <div className="relative w-16 h-16 shrink-0 rounded-xl overflow-hidden">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold tracking-wide uppercase text-[var(--accent)]">
                    Étape {i + 1}
                  </span>
                  <h3 className="font-semibold text-[#171522] mt-0.5">{item.title}</h3>
                  <p className="text-sm text-[#171522]/55 mt-1.5 leading-relaxed">{item.text}</p>
                </div>
              </div>
            </Reveal>
            {i < academics.length - 1 && (
              <div
                aria-hidden
                className="hidden md:flex items-center px-3 text-[var(--accent)] text-xl"
              >
                →
              </div>
            )}
          </div>
        ))}
      </div>
    </Chapter>
  );
}

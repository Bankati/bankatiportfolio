import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Tone = "light" | "tinted" | "dark";

const toneClasses: Record<Tone, string> = {
  light: "",
  tinted: "bg-[#171522]/[0.03]",
  dark: "bg-[#0f0d1a] text-white",
};

export default function Chapter({
  id,
  number,
  kicker,
  title,
  intro,
  tone = "light",
  children,
}: {
  id: string;
  number: string;
  kicker: string;
  title: string;
  intro?: string;
  tone?: Tone;
  children: ReactNode;
}) {
  const dark = tone === "dark";

  return (
    <section id={id} className={`relative py-24 sm:py-28 px-6 overflow-hidden ${toneClasses[tone]}`}>
      {dark && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="blob absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-[var(--accent)]/20" />
        </div>
      )}
      <div className="relative max-w-6xl mx-auto">
        <Reveal>
          <div className="flex items-end gap-5 sm:gap-8 mb-5">
            <span
              aria-hidden
              className={`text-7xl sm:text-8xl font-bold leading-[0.8] tabular-nums select-none ${
                dark ? "text-white/[0.08]" : "text-[#171522]/[0.07]"
              }`}
            >
              {number}
            </span>
            <div className="pb-1">
              <span className="block text-xs font-semibold tracking-[0.2em] uppercase text-[var(--accent)] mb-2">
                {kicker}
              </span>
              <h2
                className={`text-3xl sm:text-4xl font-bold ${
                  dark ? "text-white" : "text-[#171522]"
                }`}
              >
                {title}
              </h2>
            </div>
          </div>
          {intro && (
            <p
              className={`max-w-2xl leading-relaxed mb-14 ${
                dark ? "text-white/60" : "text-[#171522]/60"
              }`}
            >
              {intro}
            </p>
          )}
          {!intro && <div className="mb-14" />}
        </Reveal>
        {children}
      </div>
    </section>
  );
}

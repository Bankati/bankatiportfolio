"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { profile, stats } from "@/lib/data";
import AnimatedCounter from "./AnimatedCounter";

const socials = [
  { icon: FaFacebookF, href: "#" },
  { icon: FaInstagram, href: "#" },
  { icon: FaLinkedinIn, href: profile.linkedin },
  { icon: FaGithub, href: profile.github },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-40 pb-24 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="blob absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-[var(--accent)]/10" />
        <div className="blob blob-delay absolute bottom-0 left-0 w-[320px] h-[320px] rounded-full bg-orange-300/20" />
      </div>

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[var(--accent)] mb-4"
          >
            Bienvenue dans mon univers
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-[#171522]"
          >
            Salut, je suis{" "}
            <span className="gradient-text">{profile.firstName}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-2xl sm:text-3xl font-semibold text-[#171522]/80 mt-2"
          >
            {profile.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[#171522]/60 italic mt-6 max-w-md leading-relaxed"
          >
            &ldquo;{profile.quote}&rdquo;
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-full bg-[var(--accent)] text-white font-semibold px-7 py-3 hover:bg-[var(--accent-dark)] transition-colors"
            >
              Me contacter
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-full border border-[#171522]/15 text-[#171522] font-semibold px-7 py-3 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            >
              Voir mes projets
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex items-center gap-4 mt-10"
          >
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white card flex items-center justify-center text-[#171522]/60 hover:text-[var(--accent)] transition-colors"
              >
                <s.icon size={14} />
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="grid grid-cols-4 gap-4 mt-12 max-w-md"
          >
            {stats.map((stat, i) => (
              <div key={i}>
                <h3 className="text-2xl font-bold text-[#171522]">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </h3>
                <p className="text-xs text-[#171522]/50 mt-1 leading-tight">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2.5rem] bg-[var(--accent)]" />
          <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] card">
            <Image
              src={profile.photo}
              alt={profile.name}
              fill
              priority
              className="object-cover"
            />
          </div>

          <motion.div
            className="float-badge absolute -left-6 top-8 card bg-white rounded-2xl px-4 py-3 flex items-center gap-2"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-semibold text-[#171522]">Disponible</span>
          </motion.div>

          <motion.div
            className="float-badge absolute -right-4 bottom-10 card bg-white rounded-2xl px-4 py-3"
            style={{ animationDelay: "-2s" }}
          >
            <p className="text-xl font-bold text-[var(--accent)] leading-none">
              <AnimatedCounter value={stats[0].value} suffix={stats[0].suffix} />
            </p>
            <p className="text-[10px] text-[#171522]/50 mt-1">Projets data</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

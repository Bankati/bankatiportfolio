"use client";

import { useState, type FormEvent } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";
import Reveal from "./Reveal";
import { profile } from "@/lib/data";

const contactItems = [
  { icon: FaEnvelope, label: profile.email, href: `mailto:${profile.email}` },
  { icon: FaLinkedin, label: "LinkedIn", href: profile.linkedin },
  { icon: FaGithub, label: "GitHub", href: profile.github },
  { icon: FaPhone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const body = `${message}\n\n— ${name} (${email})`;
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject || "Contact depuis le portfolio"
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  }

  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <span className="block text-center text-xs font-semibold tracking-[0.2em] uppercase text-[var(--accent)] mb-3">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-[#171522]">
            Entrons en contact
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8">
          <Reveal>
            <div className="card rounded-3xl p-8 h-full flex flex-col">
              <p className="text-[#171522]/60 leading-relaxed mb-8">
                N&apos;hésitez pas à me contacter pour discuter de vos projets ou opportunités. Je
                suis toujours ouvert aux collaborations et aux défis passionnants dans le domaine
                de l&apos;analyse de données.
              </p>
              <div className="flex flex-col gap-3 mt-auto">
                {contactItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-xl px-4 py-3 bg-[#171522]/[0.03] hover:bg-[var(--accent)]/10 transition-colors group"
                  >
                    <span className="w-10 h-10 shrink-0 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center">
                      <item.icon size={15} />
                    </span>
                    <span className="font-medium text-[#171522]/80 group-hover:text-[#171522] text-sm">
                      {item.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="card rounded-3xl p-8 h-full flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Votre nom"
                  className="rounded-xl bg-[#171522]/[0.03] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[var(--accent)]/40"
                />
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre email"
                  className="rounded-xl bg-[#171522]/[0.03] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[var(--accent)]/40"
                />
              </div>
              <input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Sujet"
                className="rounded-xl bg-[#171522]/[0.03] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[var(--accent)]/40"
              />
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Votre message"
                rows={5}
                className="rounded-xl bg-[#171522]/[0.03] px-4 py-3 text-sm outline-none resize-none focus:ring-2 focus:ring-[var(--accent)]/40"
              />
              <button
                type="submit"
                className="mt-auto rounded-full bg-[var(--accent)] text-white font-semibold py-3 hover:bg-[var(--accent-dark)] transition-colors"
              >
                Envoyer le message
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

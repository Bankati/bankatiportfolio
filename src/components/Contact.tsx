"use client";

import { useState, type FormEvent } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaCheck, FaExclamationTriangle } from "react-icons/fa";
import Chapter from "./Chapter";
import Reveal from "./Reveal";
import { profile } from "@/lib/data";

const contactItems = [
  { icon: FaEnvelope, label: profile.email, href: `mailto:${profile.email}` },
  { icon: FaLinkedin, label: "LinkedIn", href: profile.linkedin },
  { icon: FaGithub, label: "GitHub", href: profile.github },
  { icon: FaPhone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
];

/**
 * Clé publique Web3Forms (web3forms.com) — gratuite, liée à l'adresse de réception,
 * sans backend à héberger. À générer une fois sur web3forms.com (30 secondes, aucune
 * carte bancaire) puis à coller ici. Tant qu'elle est vide, le formulaire retombe sur
 * un mailto pré-rempli (moins fiable : ça suppose un client mail installé) plutôt que
 * de ne rien faire.
 */
const WEB3FORMS_ACCESS_KEY = "";

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!WEB3FORMS_ACCESS_KEY) {
      const body = `${message}\n\n— ${name} (${email})`;
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
        subject || "Contact depuis le portfolio"
      )}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name,
          email,
          subject: subject || "Contact depuis le portfolio",
          message,
          from_name: `Portfolio — ${profile.name}`,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <Chapter
      id="contact"
      number="07"
      kicker="Et maintenant"
      title="Travaillons ensemble"
      intro="Une mission, un projet, une opportunité ou simplement une question sur l'un de mes travaux : écrivez-moi."
      tone="dark"
    >
      <div>
        <div className="grid lg:grid-cols-2 gap-8">
          <Reveal>
            <div className="card rounded-3xl p-8 h-full flex flex-col">
              <p className="text-[#171522]/60 leading-relaxed mb-8">
                N&apos;hésitez pas à me contacter pour discuter de vos projets ou opportunités. Je
                suis ouvert aux collaborations autour de la data, du développement et du cloud.
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

              {status === "success" && (
                <p className="flex items-center gap-2 text-sm text-emerald-600 bg-emerald-50 rounded-xl px-4 py-3">
                  <FaCheck className="shrink-0" /> Message envoyé — je vous réponds rapidement.
                </p>
              )}
              {status === "error" && (
                <p className="flex items-center gap-2 text-sm text-red-600 bg-red-50 rounded-xl px-4 py-3">
                  <FaExclamationTriangle className="shrink-0" /> L&apos;envoi a échoué. Écrivez-moi
                  directement à{" "}
                  <a href={`mailto:${profile.email}`} className="underline font-medium">
                    {profile.email}
                  </a>
                  .
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-auto rounded-full bg-[var(--accent)] text-white font-semibold py-3 hover:bg-[var(--accent-dark)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? "Envoi en cours…" : "Envoyer le message"}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </Chapter>
  );
}

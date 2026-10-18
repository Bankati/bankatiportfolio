import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";
import Chapter from "./Chapter";
import Reveal from "./Reveal";
import { profile } from "@/lib/data";

const contactItems = [
  { icon: FaEnvelope, label: profile.email, href: `mailto:${profile.email}` },
  { icon: FaLinkedin, label: "LinkedIn", href: profile.linkedin },
  { icon: FaGithub, label: "GitHub", href: profile.github },
  { icon: FaPhone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
];

export default function Contact() {
  return (
    <Chapter
      id="contact"
      number="07"
      kicker="Et maintenant"
      title="Travaillons ensemble"
      intro="Une mission, un projet, une opportunité ou simplement une question sur l'un de mes travaux : écrivez-moi."
      tone="dark"
    >
      <Reveal>
        <div className="card rounded-3xl p-8 sm:p-10 max-w-2xl mx-auto">
          <p className="text-[#171522]/60 leading-relaxed mb-8 text-center">
            N&apos;hésitez pas à me contacter pour discuter de vos projets ou opportunités. Je suis
            ouvert aux collaborations autour de la data, du développement et du cloud.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
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
                <span className="font-medium text-[#171522]/80 group-hover:text-[#171522] text-sm truncate">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </Chapter>
  );
}

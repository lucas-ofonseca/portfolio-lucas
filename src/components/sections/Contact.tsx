"use client";

import { useState } from "react";
import { personal } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";

type ContactLink = {
  channel: string;
  value: string;
  href: string;
  external: boolean;
};

const contactLinks: ContactLink[] = [
  { channel: "e-mail",   value: personal.email,           href: `mailto:${personal.email}`,            external: false },
  { channel: "linkedin", value: personal.linkedinDisplay, href: personal.linkedin,                      external: true  },
  { channel: "github",   value: personal.githubDisplay,   href: personal.github,                        external: true  },
  { channel: "whatsapp", value: personal.whatsappDisplay, href: `https://wa.me/${personal.whatsapp}`,   external: true  },
];

const CURRENT_YEAR = new Date().getFullYear();

function ContactItem({ item, isLast }: { item: ContactLink; isLast: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={item.href}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noopener noreferrer" : undefined}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1.5rem 2rem",
        borderBottom: isLast ? "none" : "1px solid var(--border)",
        background: hovered ? "var(--surface2)" : "transparent",
        transition: "background 0.2s",
        cursor: "pointer",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
        <span style={{ fontSize: "0.6rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--muted)" }}>
          // {item.channel}
        </span>
        <span style={{ fontSize: "0.8rem", color: "var(--text)", letterSpacing: "0.02em" }}>
          {item.value}
        </span>
      </div>
      <span
        style={{
          fontSize: "1rem",
          color: hovered ? "var(--accent)" : "var(--dim)",
          transform: hovered ? "translate(2px,-2px)" : "translate(0,0)",
          transition: "color 0.2s, transform 0.2s",
        }}
      >
        ↗
      </span>
    </a>
  );
}

function FooterNavItem({ href }: { href: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      style={{
        fontSize: "0.6rem",
        letterSpacing: "0.1em",
        color: hovered ? "var(--text)" : "var(--muted)",
        textTransform: "uppercase",
        transition: "color 0.2s",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      _{href.replace("#", "")}
    </a>
  );
}

export default function Contact() {
  return (
    <section id="contato" style={{ position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "5rem 3rem 0" }}>
        <SectionHeader
          eyebrow="// vamos conversar"
          title="Contato"
          aside={
            <span style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--accent2)" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--accent2)", display: "inline-block", animation: "pulse 2s ease-in-out infinite" }} />
              disponível para oportunidades
            </span>
          }
        />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "var(--border)", border: "1px solid var(--border)", borderRadius: "4px", overflow: "hidden" }}>
          <div style={{ background: "var(--surface)", padding: "3rem", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "2.5rem" }}>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(1.6rem,2.8vw,2.4rem)",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              Tem um projeto<br />ou uma{" "}
              <span style={{ color: "var(--accent)" }}>oportunidade</span>
              <br />em mente?
            </h3>

            <p style={{ fontSize: "0.75rem", color: "var(--muted)", lineHeight: 1.9, maxWidth: "36ch" }}>
              Estou em busca de oportunidades como{" "}
              <span style={{ color: "var(--text)", fontWeight: 500 }}>desenvolvedor júnior</span>{" "}
              — remoto ou presencial em BH. Pode me chamar pelo canal que preferir, respondo rápido.
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.6rem", color: "var(--dim)", letterSpacing: "0.1em" }}>
              <span style={{ width: "20px", height: "1px", background: "var(--dim)", display: "block" }} />
              {personal.coordinates} · {personal.location}
            </div>
          </div>

          <div style={{ background: "var(--surface)", display: "flex", flexDirection: "column" }}>
            {contactLinks.map((item, i) => (
              <ContactItem key={item.channel} item={item} isLast={i === contactLinks.length - 1} />
            ))}
          </div>
        </div>

        <footer style={{ marginTop: "4rem", padding: "2rem 0", borderTop: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontSize: "0.6rem", color: "var(--dim)", letterSpacing: "0.1em" }}>
            <span style={{ color: "var(--muted)" }}>{personal.name} © {CURRENT_YEAR}</span>
            {" "}· Desenvolvido com Next.js
          </div>
          <nav style={{ display: "flex", gap: "2rem" }}>
            {["#home", "#projetos", "#skills", "#contato"].map((href) => (
              <FooterNavItem key={href} href={href} />
            ))}
          </nav>
        </footer>
      </div>
    </section>
  );
}
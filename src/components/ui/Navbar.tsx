"use client";

import { useState } from "react";
import { personal } from "@/lib/data";

type NavLink = { href: string; label: string };

const navLinks: NavLink[] = [
  { href: "#home",     label: "_sobre" },
  { href: "#projetos", label: "_projetos" },
  { href: "#skills",   label: "_skills" },
  { href: "#contato",  label: "_contato" },
];

function NavItem({ href, label }: NavLink) {
  const [hovered, setHovered] = useState(false);

  return (
    <li>
      <a
        href={href}
        style={{
          fontSize: "0.7rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: hovered ? "var(--text)" : "var(--muted)",
          transition: "color 0.2s",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {label}
      </a>
    </li>
  );
}

export default function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1.25rem 3rem",
        borderBottom: "1px solid var(--border)",
        background: "rgba(10,10,10,0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <a
        href="#home"
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: "1rem",
          letterSpacing: "0.08em",
          color: "var(--text)",
        }}
      >
        &lt;LF<span style={{ color: "var(--accent)" }}>/</span>&gt;
      </a>

      <ul style={{ display: "flex", gap: "2rem", listStyle: "none" }}>
        {navLinks.map((link) => (
          <NavItem key={link.href} {...link} />
        ))}
      </ul>

      {personal.available && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "0.65rem",
            color: "var(--accent2)",
            letterSpacing: "0.1em",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "var(--accent2)",
              display: "inline-block",
              animation: "pulse 2s ease-in-out infinite",
            }}
          />
          open to work
        </div>
      )}
    </nav>
  );
}
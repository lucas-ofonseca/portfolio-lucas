"use client";

import { useState } from "react";
import { skillCategories, type SkillCategory } from "@/lib/data";
import Tag from "@/components/ui/Tag";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Skills() {
  const top3 = skillCategories.slice(0, 3);
  const bottom2 = skillCategories.slice(3);

  return (
    <section id="skills" style={{ position: "relative", zIndex: 1, background: "var(--surface2)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "5rem 3rem" }}>
        <SectionHeader
          eyebrow="// stack técnica"
          title="Skills"
          aside={`${skillCategories.length} categorias`}
        />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1px", background: "var(--border)", border: "1px solid var(--border)", borderRadius: "4px 4px 0 0", overflow: "hidden" }}>
          {top3.map((cat) => (
            <SkillCard key={cat.label} cat={cat} />
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "1px", background: "var(--border)", border: "1px solid var(--border)", borderTop: "none", borderRadius: "0 0 4px 4px", overflow: "hidden" }}>
          {bottom2.map((cat) => (
            <SkillCard key={cat.label} cat={cat} />
          ))}
        </div>

        <div style={{ marginTop: "2rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <span style={{ display: "block", width: "24px", height: "1px", background: "var(--dim)", flexShrink: 0 }} />
          <span style={{ fontSize: "0.6rem", color: "var(--muted)", letterSpacing: "0.08em", lineHeight: 1.6 }}>
            Tags em <span style={{ color: "var(--text)" }}>destaque</span> são as tecnologias com uso frequente e projetos reais.
            Demais são conhecimentos em desenvolvimento ativo.
          </span>
        </div>
      </div>
    </section>
  );
}

function SkillCard({ cat }: { cat: SkillCategory }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        background: hovered ? "var(--surface2)" : "var(--surface)",
        padding: "1.75rem 2rem",
        transition: "background 0.2s",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
        <span style={{ fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--accent)" }}>
          // {cat.label}
        </span>
        <span style={{ fontSize: "0.55rem", color: "var(--dim)", letterSpacing: "0.1em" }}>
          {String(cat.skills.length).padStart(2, "0")} techs
        </span>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
        {cat.skills.map((skill) => (
          <Tag key={skill.name} highlight={skill.highlight}>{skill.name}</Tag>
        ))}
      </div>
    </div>
  );
}
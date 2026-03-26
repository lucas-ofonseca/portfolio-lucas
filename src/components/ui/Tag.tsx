"use client";

import { useState } from "react";

type TagProps = {
  children: React.ReactNode;
  highlight?: boolean;
};

export default function Tag({ children, highlight = false }: TagProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      style={{
        fontSize: "0.65rem",
        letterSpacing: "0.04em",
        padding: "0.3rem 0.65rem",
        borderRadius: "2px",
        background: "var(--bg)",
        border: `1px solid ${hovered ? "var(--accent)" : highlight ? "var(--dim)" : "var(--border2)"}`,
        color: hovered ? "var(--accent)" : highlight ? "var(--text)" : "var(--muted)",
        transition: "border-color 0.2s, color 0.2s",
        cursor: "default",
        display: "inline-block",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </span>
  );
}
import type { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  aside?: ReactNode;
};

export default function SectionHeader({ eyebrow, title, aside }: SectionHeaderProps) {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        marginBottom: "3.5rem",
        paddingBottom: "1.5rem",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            marginBottom: "0.75rem",
          }}
        >
          <span
            style={{
              display: "block",
              width: "32px",
              height: "1px",
              background: "var(--accent)",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--accent)",
            }}
          >
            {eyebrow}
          </span>
        </div>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            lineHeight: 1,
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </h2>
      </div>
      {aside && (
        <div style={{ fontSize: "0.6rem", letterSpacing: "0.14em", color: "var(--muted)", paddingBottom: "0.2rem" }}>
          {aside}
        </div>
      )}
    </header>
  );
}
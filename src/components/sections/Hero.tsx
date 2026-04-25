import type { ReactNode } from "react";
import { personal, experience, heroStackTags } from "@/lib/data";
import Tag from "@/components/ui/Tag";

const [firstName, ...rest] = personal.name.split(" ");
const lastName = rest.join(" ");

function AnimatedBlock({ children, style }: { children: ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{ opacity: 0, ...style }}>
      {children}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "var(--grid-cols)",
        zIndex: 1,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "linear-gradient(to right, var(--border) 1px, transparent 1px)",
          backgroundSize: "25% 100%",
          backgroundPosition: "12.5% 0",
          opacity: 0.4,
          pointerEvents: "none",
        }}
      />

      {/* left col */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "var(--hero-padding)",
          borderRight: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            marginBottom: "2rem",
            animation: "fadeUp 0.6s ease forwards 0.1s",
            opacity: 0,
          }}
        >
          <span style={{ width: "32px", height: "1px", background: "var(--accent)", display: "block" }} />
          <span style={{ fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--accent)" }}>
            {personal.role}
          </span>
        </div>

        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(3rem, 6vw, 5.5rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
            marginBottom: "1.5rem",
            animation: "fadeUp 0.7s ease forwards 0.2s",
            opacity: 0,
          }}
        >
          {firstName}
          <br />
          <span style={{ color: "var(--accent)" }}>{lastName}</span>
        </h1>

        <p
          style={{
            fontSize: "0.85rem",
            lineHeight: 1.8,
            color: "var(--muted)",
            maxWidth: "38ch",
            marginBottom: "2.5rem",
            animation: "fadeUp 0.7s ease forwards 0.35s",
            opacity: 0,
          }}
        >
          {personal.description}
        </p>

        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            flexWrap: "wrap",
            animation: "fadeUp 0.7s ease forwards 0.5s",
            opacity: 0,
          }}
        >
          <a
            href="#projetos"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "0.7rem 1.4rem",
              borderRadius: "2px",
              background: "var(--accent)",
              color: "#0a0a0a",
              fontWeight: 500,
              transition: "all 0.2s",
              display: "inline-block",
            }}
          >
            Ver projetos
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "0.7rem 1.4rem",
              borderRadius: "2px",
              background: "transparent",
              color: "var(--text)",
              border: "1px solid var(--border2)",
              transition: "all 0.2s",
              display: "inline-block",
            }}
          >
            GitHub
          </a>
        </div>
      </div>

      {/* right col */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "var(--section-padding)",
          gap: "1.5rem",
          zIndex: 1,
        }}
      >
        {experience.map((item, i) => (
          <div
            key={item.label}
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "4px",
              padding: "1.25rem 1.5rem",
              animation: `fadeLeft 0.6s ease forwards ${0.3 + i * 0.15}s`,
              opacity: 0,
            }}
          >
            <div style={{ fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "0.5rem" }}>
              // {item.label}
            </div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.95rem", color: "var(--text)", marginBottom: "0.25rem" }}>
              {item.title}
            </div>
            <div style={{ fontSize: "0.7rem", color: "var(--muted)", lineHeight: 1.6 }}>
              {item.highlight && (
                <span style={{ color: item.label === "localização" ? "var(--accent)" : "var(--accent2)" }}>
                  {item.highlight}{" "}
                </span>
              )}
              {item.description}
            </div>
          </div>
        ))}

        <div
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "4px",
            padding: "1.25rem 1.5rem",
            animation: "fadeLeft 0.6s ease forwards 0.75s",
            opacity: 0,
          }}
        >
          <div style={{ fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "0.75rem" }}>
            // stack principal
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
            {heroStackTags.map((tag) => (
              <Tag key={tag.name} highlight={tag.highlight}>{tag.name}</Tag>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(to right, transparent, var(--border2), transparent)",
        }}
      />

      <div
        className="desktop-only"
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "3rem",
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          fontSize: "0.6rem",
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "var(--dim)",
          animation: "fadeUp 0.7s ease forwards 1s",
          opacity: 0,
        }}
      >
        <span style={{ width: "24px", height: "1px", background: "var(--dim)", display: "block" }} />
        scroll para explorar
      </div>

      <div
        className="desktop-only"
        style={{
          position: "absolute",
          bottom: "2rem",
          right: "3rem",
          fontSize: "0.6rem",
          letterSpacing: "0.12em",
          color: "var(--dim)",
          animation: "fadeUp 0.7s ease forwards 1.1s",
          opacity: 0,
        }}
      >
        {personal.coordinates}
      </div>
    </section>
  );
}
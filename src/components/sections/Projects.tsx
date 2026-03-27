import { projects, type Project } from "@/lib/data";
import Tag from "@/components/ui/Tag";
import SectionHeader from "@/components/ui/SectionHeader";

type Stat = { label: string; val: string; color: string };
type SimRow = {
  dest: string;
  date: string;
  vagas: string;
  status: string;
  sc: { bg: string; color: string; border: string };
};

const BROWSER_DOTS = ["dot-r", "dot-y", "dot-g"] as const;

const SIM_STATS: Stat[] = [
  { label: "Viagens ativas", val: "12", color: "var(--accent)" },
  { label: "Participantes", val: "48", color: "var(--text)" },
  { label: "Concluídas", val: "31", color: "var(--accent2)" },
];

const SIM_ROWS: SimRow[] = [
  { dest: "São Paulo → Rio", date: "12/04", vagas: "4/8", status: "ativo", sc: { bg: "rgba(126,184,164,0.12)", color: "var(--accent2)", border: "rgba(126,184,164,0.2)" } },
  { dest: "BH → Brasília", date: "18/04", vagas: "2/6", status: "em breve", sc: { bg: "rgba(200,169,110,0.12)", color: "var(--accent)", border: "rgba(200,169,110,0.2)" } },
  { dest: "Curitiba → Floripa", date: "02/04", vagas: "6/6", status: "concluído", sc: { bg: "rgba(58,56,48,0.4)", color: "var(--muted)", border: "var(--border2)" } },
];

function ProjectPreview({ project }: { project: Project }) {
  return (
    <div
      style={{
        background: "var(--surface2)",
        borderRight: "1px solid var(--border)",
        padding: "2rem",
        minHeight: "460px",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      {/* browser frame */}
      <div style={{ flex: 1, background: "#0d0d0d", border: "1px solid var(--border2)", borderRadius: "6px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
        {/* browser bar */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", padding: "0.55rem 0.8rem", background: "var(--surface)", borderBottom: "1px solid var(--border)", flexShrink: 0 }}>
          {BROWSER_DOTS.map((id) => (
            <div key={id} style={{ width: "7px", height: "7px", borderRadius: "50%", background: "var(--dim)" }} />
          ))}
          <div style={{ flex: 1, marginLeft: "0.35rem", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "3px", padding: "0.2rem 0.55rem", fontSize: "0.58rem", color: "var(--muted)", letterSpacing: "0.04em" }}>
            {project.demoUrl?.replace("https://", "")}
          </div>
        </div>

        {/* simulated UI */}
        <div style={{ flex: 1, padding: "1rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          {/* topbar */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.45rem 0.7rem", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "3px" }}>
            <span style={{ fontFamily: "var(--font-display)", fontSize: "0.6rem", fontWeight: 700, color: "var(--accent)", letterSpacing: "0.06em" }}>
              SGV · Sistema de Viagens
            </span>
            <div style={{ display: "flex", gap: "0.8rem" }}>
              {["Dashboard", "Viagens", "Histórico"].map((label) => (
                <span key={label} style={{ fontSize: "0.5rem", color: "var(--muted)" }}>{label}</span>
              ))}
            </div>
          </div>

          {/* stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "0.4rem" }}>
            {SIM_STATS.map((s) => (
              <div key={s.label} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "3px", padding: "0.5rem 0.6rem" }}>
                <div style={{ fontSize: "0.48rem", color: "var(--muted)", marginBottom: "0.2rem", letterSpacing: "0.08em" }}>{s.label}</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "0.85rem", fontWeight: 700, color: s.color }}>{s.val}</div>
              </div>
            ))}
          </div>

          {/* table rows */}
          {SIM_ROWS.map((row) => (
            <div
              key={row.dest}
              style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "0.3rem", padding: "0.45rem 0.5rem", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "3px", alignItems: "center" }}
            >
              <span style={{ fontSize: "0.5rem", color: "var(--text)" }}>{row.dest}</span>
              <span style={{ fontSize: "0.5rem", color: "var(--muted)" }}>{row.date}</span>
              <span style={{ fontSize: "0.5rem", color: "var(--text)" }}>{row.vagas}</span>
              <span style={{ fontSize: "0.44rem", padding: "0.15rem 0.4rem", borderRadius: "2px", letterSpacing: "0.06em", background: row.sc.bg, color: row.sc.color, border: `1px solid ${row.sc.border}` }}>
                {row.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* preview footer */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--muted)" }}>PRJ_{project.index}</span>
        {project.live && (
          <span style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.6rem", color: "var(--accent2)", letterSpacing: "0.1em" }}>
            <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "var(--accent2)", display: "inline-block", animation: "pulse 2s ease-in-out infinite" }} />
            em construção
          </span>
        )}
      </div>
    </div>
  );
}

function ProjectInfo({ project }: { project: Project }) {
  return (
    <div style={{ padding: "2.5rem", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "2rem" }}>
      <div>
        <div style={{ fontSize: "0.6rem", letterSpacing: "0.16em", color: "var(--muted)", marginBottom: "1rem" }}>
          // {project.index} — full stack
        </div>
        <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.4rem,2.5vw,2rem)", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "0.5rem" }}>
          {project.name}<br />
          <span style={{ color: "var(--accent)" }}>{project.nameHighlight}</span>
        </h3>
        <p style={{ fontSize: "0.65rem", color: "var(--muted)", letterSpacing: "0.1em", marginBottom: "1.5rem" }}>
          {project.type}
        </p>
        <p style={{ fontSize: "0.75rem", lineHeight: 1.9, color: "var(--muted)", marginBottom: "2rem" }}>
          {project.description}
        </p>

        <div>
          <div style={{ fontSize: "0.6rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--dim)", marginBottom: "0.75rem" }}>
            // arquitetura
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            {project.architecture.map((arch) => (
              <div key={arch.layer} style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.65rem" }}>
                <span style={{ color: "var(--muted)", minWidth: "72px", letterSpacing: "0.06em" }}>{arch.layer}</span>
                <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap" }}>
                  {arch.tags.map((t, ti) => (
                    <Tag key={t} highlight={ti === 0}>{t}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div style={{ height: "1px", background: "var(--border)", marginBottom: "1.5rem" }} />
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.65rem 1.25rem", borderRadius: "2px", background: "var(--accent)", color: "#0a0a0a", fontWeight: 500, transition: "all 0.2s", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
            >
              Ver demo ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projetos" style={{ position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "5rem 3rem" }}>
        <SectionHeader
          eyebrow="// trabalhos selecionados"
          title="Projetos"
          aside={`${String(projects.length).padStart(2, "0")} destacado${projects.length > 1 ? "s" : ""}`}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--border)", border: "1px solid var(--border)", borderRadius: "4px", overflow: "hidden" }}>
          {projects.map((project) => (
            <article
              key={project.slug}
              style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", background: "var(--surface)" }}
            >
              <ProjectPreview project={project} />
              <ProjectInfo project={project} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
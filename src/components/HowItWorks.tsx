export default function HowItWorks() {
  return (
    <section id="how-it-works" className="flex flex-col items-center gap-12 p-5 md:p-12 lg:p-20 w-full">
      {/* Badge + Title */}
      <div className="flex items-center rounded-full bg-[var(--l-bg-subtle)] border border-[var(--l-border)] px-3.5 py-1.5">
        <span className="font-sans text-[11px] font-semibold tracking-[1.5px] text-[var(--l-text-muted)]">
          HOW IT WORKS
        </span>
      </div>
      <h2 className="font-serif text-2xl md:text-3xl lg:text-[42px] text-[var(--l-text-primary)] text-center">
        Three parts, one contract
      </h2>

      {/* Cards */}
      <div className="flex flex-col md:flex-row gap-5 w-full">
        {/* Card 1 - Sandboxed Runtime */}
        <div className="flex-1 flex flex-col rounded-2xl border border-[var(--l-border)] overflow-hidden bg-[var(--l-bg)]">
          <div
            className="flex flex-col justify-center gap-1 p-5 h-[200px]"
            style={{
              background: "linear-gradient(to top, #FFFFFF, #F3E8FF)",
            }}
          >
            <span className="font-sans text-[9px] font-semibold tracking-wider text-[var(--l-accent)]">
              Virtual Filesystem
            </span>
            <span className="font-mono text-[11px] text-[var(--l-accent)]">├── /workspace &nbsp;✓</span>
            <span className="font-mono text-[11px] text-[var(--l-accent)]">├── /tmp &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✓</span>
            <span className="font-mono text-[11px] text-[var(--l-red)]">├── /home &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✗</span>
            <span className="font-mono text-[11px] text-[var(--l-red)]">└── /secrets &nbsp;&nbsp;&nbsp;✗</span>
          </div>
          <div className="flex flex-col gap-3 p-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-xl bg-[var(--l-accent-light)] flex items-center justify-center">
                <span className="font-sans text-[10px] font-bold text-[var(--l-accent)]">1</span>
              </div>
              <span className="font-sans text-xs font-semibold tracking-[0.5px] text-[var(--l-text-muted)]">
                Sandboxed Runtime
              </span>
            </div>
            <h3 className="font-serif text-[22px] text-[var(--l-text-primary)]">
              Isolated execution
              <br />
              environment
            </h3>
            <p className="font-sans text-[13px] text-[var(--l-text-tertiary)] leading-[1.5]">
              Agent code runs in a minimal, isolated environment with a virtual filesystem and controlled time.
            </p>
          </div>
        </div>

        {/* Card 2 - Host-Controlled Tools */}
        <div className="flex-1 flex flex-col rounded-2xl border border-[var(--l-border)] overflow-hidden bg-[var(--l-bg)]">
          <div
            className="flex items-center justify-center gap-4 p-5 h-[200px]"
            style={{
              background: "linear-gradient(to top, #FFFFFF, #ECFDF5)",
            }}
          >
            {/* Sandbox box */}
            <div className="flex flex-col gap-1.5 rounded-lg bg-white border border-[var(--l-border)] px-4 py-3">
              <span className="font-sans text-[9px] font-semibold text-[var(--l-text-muted)]">Sandbox</span>
              <div className="rounded bg-[var(--l-green-light)] px-2 py-1">
                <span className="font-sans text-[9px] font-medium text-[var(--l-green)]">fs.read()</span>
              </div>
            </div>
            <span className="font-sans text-lg text-[var(--l-text-muted)]">&rarr;</span>
            {/* Host box */}
            <div className="flex flex-col gap-1.5 rounded-lg bg-white border-[1.5px] border-[var(--l-green)] px-4 py-3">
              <span className="font-sans text-[9px] font-semibold text-[var(--l-green)]">Host</span>
              <div className="rounded bg-[var(--l-green-light)] px-2 py-1">
                <span className="font-sans text-[9px] font-medium text-[var(--l-green)]">policy ✓</span>
              </div>
              <div className="rounded bg-[var(--l-bg-subtle)] px-2 py-1">
                <span className="font-sans text-[9px] font-medium text-[var(--l-text-muted)]">creds</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 p-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-xl bg-[var(--l-green-light)] flex items-center justify-center">
                <span className="font-sans text-[10px] font-bold text-[var(--l-green)]">2</span>
              </div>
              <span className="font-sans text-xs font-semibold tracking-[0.5px] text-[var(--l-text-muted)]">
                Host-Controlled Tools
              </span>
            </div>
            <h3 className="font-serif text-[22px] text-[var(--l-text-primary)]">
              Sandbox requests,
              <br />
              host decides
            </h3>
            <p className="font-sans text-[13px] text-[var(--l-text-tertiary)] leading-[1.5]">
              Side effects happen through host operations you define. Credentials and policy stay outside.
            </p>
          </div>
        </div>

        {/* Card 3 - Replayable Execution */}
        <div className="flex-1 flex flex-col rounded-2xl border border-[var(--l-border)] overflow-hidden bg-[var(--l-bg)]">
          <div
            className="flex flex-col justify-center gap-2 p-5 h-[200px]"
            style={{
              background: "linear-gradient(to top, #FFFFFF, #EFF6FF)",
            }}
          >
            <span className="font-sans text-[9px] font-semibold tracking-wider text-[var(--l-blue)]">
              Execution Timeline
            </span>
            <div className="flex items-center gap-1.5">
              <span className="font-sans text-[9px] bg-white border border-[var(--l-border)] rounded px-2 py-1 text-[var(--l-text-muted)]">init</span>
              <span className="font-sans text-[10px] text-[var(--l-text-muted)]">&rarr;</span>
              <span className="font-sans text-[9px] bg-white border border-[var(--l-border)] rounded px-2 py-1 text-[var(--l-text-muted)]">fs.read</span>
              <span className="font-sans text-[10px] text-[var(--l-text-muted)]">&rarr;</span>
              <span className="font-sans text-[9px] bg-white border border-[var(--l-border)] rounded px-2 py-1 text-[var(--l-text-muted)]">llm.call</span>
              <span className="font-sans text-[10px] text-[var(--l-text-muted)]">&rarr;</span>
              <span className="font-sans text-[9px] bg-[var(--l-blue)] rounded px-2 py-1 text-white">done</span>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <span className="font-sans text-[9px] bg-[var(--l-blue)] text-white rounded px-2.5 py-1">
                ↻ replay
              </span>
              <span className="font-sans text-[9px] font-medium text-[var(--l-green)]">
                Same output hash ✓
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3 p-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-xl bg-[var(--l-blue-light)] flex items-center justify-center">
                <span className="font-sans text-[10px] font-bold text-[var(--l-blue)]">3</span>
              </div>
              <span className="font-sans text-xs font-semibold tracking-[0.5px] text-[var(--l-text-muted)]">
                Replayable Execution
              </span>
            </div>
            <h3 className="font-serif text-[22px] text-[var(--l-text-primary)]">
              Deterministic replay
              <br />
              for every run
            </h3>
            <p className="font-sans text-[13px] text-[var(--l-text-tertiary)] leading-[1.5]">
              Every run produces a compact record. Reproduce what happened exactly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

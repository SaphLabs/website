export default function ProductRoadmap() {
  return (
    <section className="flex flex-col items-center gap-12 p-20 w-full">
      <h2 className="font-serif text-[42px] text-[var(--l-text-primary)] text-center">
        Runtime now, control later
      </h2>
      <p className="font-sans text-[15px] text-[var(--l-text-tertiary)] text-center">
        Start with the runtime. Add enforcement when your automation gets serious.
      </p>

      {/* Layers */}
      <div className="flex flex-col w-[700px]">
        {/* Layer 1 - Runtime */}
        <div className="flex items-center justify-between rounded-t-2xl bg-[var(--l-accent-light)] border-[1.5px] border-[var(--l-accent)] px-9 py-7">
          <div className="flex flex-col gap-1">
            <span className="font-serif text-[22px] text-[var(--l-accent)]">Saph Runtime</span>
            <span className="font-sans text-[13px] text-[var(--l-text-tertiary)]">
              Sandbox + Replay
            </span>
          </div>
          <div className="flex items-center rounded-lg bg-[var(--l-accent)] px-5 py-2">
            <span className="font-sans text-[13px] font-medium text-white">
              Start here →
            </span>
          </div>
        </div>

        {/* Layer 2 - Control */}
        <div className="flex items-center justify-between rounded-b-2xl bg-white border border-[var(--l-border)] px-9 py-7">
          <div className="flex flex-col gap-1">
            <span className="font-serif text-[22px] text-[var(--l-text-secondary)]">Saph Control</span>
            <span className="font-sans text-[13px] text-[var(--l-text-muted)]">
              Authorization + Approvals
            </span>
          </div>
          <div className="flex items-center rounded-lg border border-[var(--l-border)] px-5 py-2">
            <span className="font-sans text-[13px] text-[var(--l-text-muted)]">
              Add when high-stakes
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

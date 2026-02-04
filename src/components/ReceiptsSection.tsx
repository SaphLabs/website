export default function ReceiptsSection() {
  return (
    <section className="flex items-center gap-16 p-20 w-full">
      {/* Left - Text */}
      <div className="flex flex-col gap-6 flex-1">
        <div className="flex items-center rounded-full bg-[var(--l-blue-light)] px-3.5 py-1.5 w-fit">
          <span className="font-sans text-[11px] font-semibold tracking-wider text-[var(--l-blue)]">
            AUDIT ARTIFACTS
          </span>
        </div>
        <h2 className="font-serif text-[38px] text-[var(--l-text-primary)] leading-tight">
          Every run produces
          <br />
          an audit artifact
        </h2>
        <p className="font-sans text-[15px] text-[var(--l-text-tertiary)] leading-[1.6]">
          Structured records of inputs, tool calls, outputs, and replay bundles. Export incident reports for audits or customers.
        </p>
      </div>

      {/* Right - JSON Card */}
      <div className="flex flex-col gap-1.5 rounded-2xl bg-[var(--l-bg-subtle)] border border-[var(--l-border)] p-7 w-[460px] shrink-0">
        <span className="font-sans text-[10px] font-semibold tracking-wider text-[var(--l-blue)]">
          Execution Receipt
        </span>
        <span className="font-mono text-[11px] text-[var(--l-text-muted)]">{"{"}</span>
        <span className="font-mono text-[11px] text-[var(--l-text-secondary)]">
          &nbsp;&nbsp;&quot;receipt_id&quot;: &quot;rx_a3f7c2e91d&quot;,
        </span>
        <span className="font-mono text-[11px] text-[var(--l-text-secondary)]">
          &nbsp;&nbsp;&quot;inputs&quot;: {"{"} &quot;prompt&quot;: &quot;...&quot;, &quot;files&quot;: 3 {"}"},
        </span>
        <span className="font-mono text-[11px] text-[var(--l-text-secondary)]">
          &nbsp;&nbsp;&quot;capabilities&quot;: [&quot;fs.read&quot;, &quot;fs.write&quot;],
        </span>
        <span className="font-mono text-[11px] text-[var(--l-text-secondary)]">
          &nbsp;&nbsp;&quot;tool_calls&quot;: 4,
        </span>
        <span className="font-mono text-[11px] text-[var(--l-text-secondary)]">
          &nbsp;&nbsp;&quot;outputs&quot;: {"{"} &quot;files&quot;: 2, &quot;stdout&quot;: &quot;...&quot; {"}"},
        </span>
        <span className="font-mono text-[11px] text-[var(--l-accent)]">
          &nbsp;&nbsp;&quot;replay_link&quot;: &quot;saph://replay/rx_a3f7&quot;
        </span>
        <span className="font-mono text-[11px] text-[var(--l-text-muted)]">{"}"}</span>
      </div>
    </section>
  );
}

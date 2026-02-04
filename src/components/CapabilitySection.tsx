import { Check } from "lucide-react";

export default function CapabilitySection() {
  return (
    <section id="features" className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 p-5 md:p-12 lg:p-20 w-full">
      {/* Left - Illustration */}
      <div
        className="flex flex-col gap-2.5 rounded-2xl border border-[var(--l-border)] p-8 w-full lg:w-[520px] lg:shrink-0 h-[420px]"
        style={{
          background: "radial-gradient(circle, #F3E8FF, #FAFAFA)",
        }}
      >
        <span className="font-sans text-[10px] font-semibold tracking-wider text-[var(--l-accent)]">
          Tool Permissions
        </span>

        {/* Permission rows */}
        <div className="flex items-center justify-between rounded-[10px] bg-white border border-[var(--l-border)] px-4 py-3 w-full">
          <span className="font-sans text-[13px] font-medium text-[var(--l-text-primary)]">Read files</span>
          <span className="font-sans text-[10px] font-semibold text-[var(--l-green)] bg-[var(--l-green-light)] rounded-md px-2.5 py-1">
            Allowed
          </span>
        </div>

        <div className="flex items-center justify-between rounded-[10px] bg-white border border-[var(--l-border)] px-4 py-3 w-full">
          <div className="flex items-center gap-2">
            <span className="font-sans text-[13px] font-medium text-[var(--l-text-primary)]">Write files</span>
            <span className="font-sans text-[9px] font-semibold text-[var(--l-amber)] bg-[var(--l-amber-light)] rounded px-2 py-0.5">
              Scoped
            </span>
          </div>
          <span className="font-sans text-[10px] font-semibold text-[var(--l-green)] bg-[var(--l-green-light)] rounded-md px-2.5 py-1">
            Allowed
          </span>
        </div>

        <div className="flex items-center justify-between rounded-[10px] bg-white border border-[var(--l-border)] px-4 py-3 w-full">
          <span className="font-sans text-[13px] font-medium text-[var(--l-text-primary)]">Network</span>
          <span className="font-sans text-[10px] font-semibold text-[var(--l-red)] bg-[var(--l-red-light)] rounded-md px-2.5 py-1">
            Blocked
          </span>
        </div>

        <div className="flex items-center justify-between rounded-[10px] bg-white border border-[var(--l-border)] px-4 py-3 w-full">
          <span className="font-sans text-[13px] font-medium text-[var(--l-text-primary)]">Payments</span>
          <span className="font-sans text-[10px] font-semibold text-[var(--l-red)] bg-[var(--l-red-light)] rounded-md px-2.5 py-1">
            Blocked
          </span>
        </div>

        {/* Blocked call */}
        <div className="flex items-center justify-center rounded-[10px] border border-[var(--l-red)] px-3.5 py-2.5 w-full">
          <span className="font-sans text-[11px] font-medium text-[var(--l-red)]">
            ⚠ tool_call(&apos;network.fetch&apos;) → rejected
          </span>
        </div>
      </div>

      {/* Right - Text */}
      <div className="flex flex-col gap-6 flex-1">
        <div className="flex items-center rounded-full bg-[var(--l-accent-light)] px-3.5 py-1.5 w-fit">
          <span className="font-sans text-[11px] font-semibold tracking-wider text-[var(--l-accent)]">
            SECURITY MODEL
          </span>
        </div>
        <h2 className="font-serif text-2xl md:text-3xl lg:text-[38px] text-[var(--l-text-primary)] leading-tight">
          Nothing is allowed
          <br />
          unless you grant it
        </h2>
        <p className="font-sans text-[15px] text-[var(--l-text-tertiary)] leading-[1.6]">
          Tool access is explicit and validated at runtime. Define what your agent can touch, scope parameters, and block everything else by default.
        </p>

        {/* Bullets */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2.5">
            <Check size={16} color="var(--l-green)" />
            <span className="font-sans text-sm text-[var(--l-text-secondary)]">
              Explicit tool allowlists with parameter validation
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <Check size={16} color="var(--l-green)" />
            <span className="font-sans text-sm text-[var(--l-text-secondary)]">
              Scoped permissions for sensitive operations
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <Check size={16} color="var(--l-green)" />
            <span className="font-sans text-sm text-[var(--l-text-secondary)]">
              Blocked calls with detailed rejection logs
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

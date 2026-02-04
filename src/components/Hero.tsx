export default function Hero() {
  return (
    <section className="flex flex-col items-center gap-10 px-5 md:px-12 lg:px-[120px] pt-12 md:pt-20 pb-12 w-full">
      {/* Badge */}
      <div className="flex items-center gap-2 rounded-full bg-[var(--l-accent-light)] px-4 py-2">
        <span className="font-sans text-xs font-medium text-[var(--l-accent)]">
          Open source SDK &middot; Works with any LLM
        </span>
      </div>

      {/* Headline */}
      <div className="flex flex-col items-center gap-6">
        <h1 className="font-serif text-3xl md:text-4xl lg:text-[56px] text-[var(--l-text-primary)] text-center leading-tight max-w-[900px]">
          Purpose-built runtime for
          <br />
          AI agent execution
        </h1>
        <p className="font-sans text-sm md:text-base lg:text-[17px] text-[var(--l-text-tertiary)] text-center leading-[1.6] max-w-[720px]">
          Run agent code and tools inside an isolated environment with deterministic
          replay. Move from &ldquo;it worked on my machine&rdquo; to &ldquo;we can prove what happened.&rdquo;
        </p>
      </div>

      {/* CTAs */}
      <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
        <a
          href="#how-it-works"
          className="w-full md:w-auto text-center font-sans text-[15px] font-medium text-[var(--l-text-primary)] rounded-lg px-8 py-3.5 border border-[var(--l-border)] hover:bg-[var(--l-bg-subtle)] transition-colors"
        >
          See How It Works
        </a>
        <a
          href="/contact"
          className="w-full md:w-auto text-center font-sans text-[15px] font-medium text-white bg-[var(--l-accent)] rounded-lg px-8 py-3.5 hover:opacity-90 transition-opacity"
        >
          Book a Demo
        </a>
      </div>

      {/* Hero Diagram */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-[880px] py-6 gap-2 md:gap-0">
        {/* Box 1 - Agent Brain */}
        <div className="flex flex-col items-center justify-center gap-2 rounded-xl bg-[var(--l-bg-subtle)] border border-[var(--l-border)] px-7 py-6 w-full md:w-[230px]">
          <span className="font-sans text-[11px] font-medium tracking-wider text-[var(--l-text-muted)]">
            Agent Brain
          </span>
          <span className="font-serif text-[17px] text-[var(--l-text-primary)]">
            LLM / Reasoning
          </span>
        </div>

        {/* Arrow 1 - horizontal on desktop, vertical on mobile */}
        <div className="hidden md:flex items-center justify-center w-[50px]">
          <span className="font-sans text-[var(--l-text-muted)] text-lg">&rarr;</span>
        </div>
        <div className="flex md:hidden items-center justify-center h-[30px]">
          <span className="font-sans text-[var(--l-text-muted)] text-lg">&darr;</span>
        </div>

        {/* Box 2 - Saph Runtime */}
        <div className="flex flex-col items-center justify-center gap-3.5 rounded-xl bg-[var(--l-accent-light)] border-[1.5px] border-[var(--l-accent)] px-7 py-6 w-full md:w-[260px]">
          <span className="font-sans text-[11px] font-medium tracking-wider text-[var(--l-accent)]">
            Hardened Runtime
          </span>
          <span className="font-serif text-xl text-[var(--l-accent)]">
            Saph Runtime
          </span>
          <div className="flex gap-1.5">
            <span className="font-sans text-[10px] font-medium text-[var(--l-accent)] bg-white rounded-md px-2.5 py-1">
              Capabilities
            </span>
            <span className="font-sans text-[10px] font-medium text-[var(--l-accent)] bg-white rounded-md px-2.5 py-1">
              Limits
            </span>
            <span className="font-sans text-[10px] font-medium text-[var(--l-accent)] bg-white rounded-md px-2.5 py-1">
              Replay
            </span>
          </div>
        </div>

        {/* Arrow 2 - horizontal on desktop, vertical on mobile */}
        <div className="hidden md:flex items-center justify-center w-[50px]">
          <span className="font-sans text-[var(--l-text-muted)] text-lg">&rarr;</span>
        </div>
        <div className="flex md:hidden items-center justify-center h-[30px]">
          <span className="font-sans text-[var(--l-text-muted)] text-lg">&darr;</span>
        </div>

        {/* Box 3 - External World */}
        <div className="flex flex-col items-center justify-center gap-2 rounded-xl bg-[var(--l-bg-subtle)] border border-[var(--l-border)] px-7 py-6 w-full md:w-[230px]">
          <span className="font-sans text-[11px] font-medium tracking-wider text-[var(--l-text-muted)]">
            External World
          </span>
          <span className="font-serif text-[17px] text-[var(--l-text-primary)]">
            Tools + Systems
          </span>
        </div>
      </div>
    </section>
  );
}

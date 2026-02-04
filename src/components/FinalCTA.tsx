export default function FinalCTA() {
  return (
    <section
      className="flex flex-col items-center gap-8 px-[120px] py-[100px] w-full"
      style={{
        background: "linear-gradient(to top, #FFFFFF, #F3E8FF)",
      }}
    >
      <h2 className="font-serif text-5xl text-[var(--l-text-primary)] text-center max-w-[700px] leading-tight">
        Ship agents that can
        <br />
        execute safely
      </h2>
      <p className="font-sans text-base text-[var(--l-text-tertiary)] text-center">
        Try the sandbox or talk to us about your use case.
      </p>
      <div className="flex items-center gap-4">
        <a
          href="#"
          className="font-sans text-[15px] font-medium text-white bg-[var(--l-accent)] rounded-lg px-8 py-3.5 hover:opacity-90 transition-opacity"
        >
          Book a Demo
        </a>
        <a
          href="#"
          className="font-sans text-[15px] font-medium text-[var(--l-text-primary)] bg-white rounded-lg px-8 py-3.5 border border-[var(--l-border)] hover:bg-[var(--l-bg-subtle)] transition-colors"
        >
          Try the Sandbox
        </a>
      </div>
    </section>
  );
}

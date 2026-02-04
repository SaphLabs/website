export default function Footer() {
  return (
    <footer className="flex items-start justify-between px-20 py-12 w-full">
      {/* Brand */}
      <div className="flex flex-col gap-3 w-[300px]">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-[var(--l-accent)] flex items-center justify-center">
            <span className="font-serif text-[13px] text-white">S</span>
          </div>
          <span className="font-serif text-base text-[var(--l-text-primary)]">Saph</span>
        </div>
        <p className="font-sans text-xs text-[var(--l-text-muted)]">
          The safest runtime for AI agents.
        </p>
      </div>

      {/* Nav columns */}
      <div className="flex gap-16">
        <div className="flex flex-col gap-3">
          <span className="font-sans text-xs font-semibold text-[var(--l-text-primary)]">Product</span>
          <a href="#" className="font-sans text-xs text-[var(--l-text-muted)] hover:text-[var(--l-text-secondary)] transition-colors">Sandbox</a>
          <a href="#" className="font-sans text-xs text-[var(--l-text-muted)] hover:text-[var(--l-text-secondary)] transition-colors">Replay</a>
          <a href="#" className="font-sans text-xs text-[var(--l-text-muted)] hover:text-[var(--l-text-secondary)] transition-colors">Control</a>
          <a href="#" className="font-sans text-xs text-[var(--l-text-muted)] hover:text-[var(--l-text-secondary)] transition-colors">Pricing</a>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-sans text-xs font-semibold text-[var(--l-text-primary)]">Developers</span>
          <a href="#" className="font-sans text-xs text-[var(--l-text-muted)] hover:text-[var(--l-text-secondary)] transition-colors">Documentation</a>
          <a href="#" className="font-sans text-xs text-[var(--l-text-muted)] hover:text-[var(--l-text-secondary)] transition-colors">SDK</a>
          <a href="#" className="font-sans text-xs text-[var(--l-text-muted)] hover:text-[var(--l-text-secondary)] transition-colors">Examples</a>
          <a href="#" className="font-sans text-xs text-[var(--l-text-muted)] hover:text-[var(--l-text-secondary)] transition-colors">Changelog</a>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-sans text-xs font-semibold text-[var(--l-text-primary)]">Company</span>
          <a href="#" className="font-sans text-xs text-[var(--l-text-muted)] hover:text-[var(--l-text-secondary)] transition-colors">About</a>
          <a href="#" className="font-sans text-xs text-[var(--l-text-muted)] hover:text-[var(--l-text-secondary)] transition-colors">Security</a>
          <a href="#" className="font-sans text-xs text-[var(--l-text-muted)] hover:text-[var(--l-text-secondary)] transition-colors">Privacy</a>
          <a href="#" className="font-sans text-xs text-[var(--l-text-muted)] hover:text-[var(--l-text-secondary)] transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}

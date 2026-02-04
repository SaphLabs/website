export default function Header() {
  return (
    <header className="flex items-center justify-between px-20 py-5 w-full">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-[var(--l-accent)] flex items-center justify-center">
          <span className="font-serif text-white text-lg">S</span>
        </div>
        <span className="font-serif text-[var(--l-text-primary)] text-[22px]">
          Saph
        </span>
      </div>

      {/* Nav */}
      <nav className="flex items-center gap-9">
        <a href="#use-cases" className="font-sans text-sm text-[var(--l-text-secondary)] hover:text-[var(--l-text-primary)] transition-colors">
          Use Cases
        </a>
        <a href="#how-it-works" className="font-sans text-sm text-[var(--l-text-secondary)] hover:text-[var(--l-text-primary)] transition-colors">
          How It Works
        </a>
        <a href="#features" className="font-sans text-sm text-[var(--l-text-secondary)] hover:text-[var(--l-text-primary)] transition-colors">
          Features
        </a>
        <a href="#docs" className="font-sans text-sm text-[var(--l-text-secondary)] hover:text-[var(--l-text-primary)] transition-colors">
          Docs
        </a>
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <a href="#" className="font-sans text-sm text-[var(--l-text-secondary)] hover:text-[var(--l-text-primary)] transition-colors">
          Log in
        </a>
        <a
          href="#"
          className="font-sans text-sm font-medium text-white bg-[var(--l-accent)] rounded-lg px-6 py-2.5 hover:opacity-90 transition-opacity"
        >
          Book a Demo
        </a>
      </div>
    </header>
  );
}

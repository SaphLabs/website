"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="relative flex items-center justify-between px-5 md:px-10 lg:px-20 py-5 w-full">
      {/* Logo */}
      <a href="/" className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-[var(--l-accent)] flex items-center justify-center">
          <span className="font-serif text-white text-lg">S</span>
        </div>
        <span className="font-serif text-[var(--l-text-primary)] text-[22px]">
          Saph
        </span>
      </a>

      {/* Nav - hidden on mobile */}
      <nav className="hidden md:flex items-center gap-9">
        <a href="/#use-cases" className="font-sans text-sm text-[var(--l-text-secondary)] hover:text-[var(--l-text-primary)] transition-colors">
          Use Cases
        </a>
        <a href="/#how-it-works" className="font-sans text-sm text-[var(--l-text-secondary)] hover:text-[var(--l-text-primary)] transition-colors">
          How It Works
        </a>
        <a href="/#features" className="font-sans text-sm text-[var(--l-text-secondary)] hover:text-[var(--l-text-primary)] transition-colors">
          Features
        </a>
        <a href="/#docs" className="font-sans text-sm text-[var(--l-text-secondary)] hover:text-[var(--l-text-primary)] transition-colors">
          Docs
        </a>
      </nav>

      {/* Actions - hidden on mobile */}
      <div className="hidden md:flex items-center gap-4">
        <a href="#" className="font-sans text-sm text-[var(--l-text-secondary)] hover:text-[var(--l-text-primary)] transition-colors">
          Log in
        </a>
        <a
          href="/contact"
          className="font-sans text-sm font-medium text-white bg-[var(--l-accent)] rounded-lg px-6 py-2.5 hover:opacity-90 transition-opacity"
        >
          Book a Demo
        </a>
      </div>

      {/* Hamburger - visible on mobile */}
      <button
        className="md:hidden flex items-center justify-center"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 z-50 flex flex-col gap-4 bg-white border-b border-[var(--l-border)] px-5 py-6 md:hidden">
          <a href="/#use-cases" className="font-sans text-sm text-[var(--l-text-secondary)]" onClick={() => setMobileOpen(false)}>
            Use Cases
          </a>
          <a href="/#how-it-works" className="font-sans text-sm text-[var(--l-text-secondary)]" onClick={() => setMobileOpen(false)}>
            How It Works
          </a>
          <a href="/#features" className="font-sans text-sm text-[var(--l-text-secondary)]" onClick={() => setMobileOpen(false)}>
            Features
          </a>
          <a href="/#docs" className="font-sans text-sm text-[var(--l-text-secondary)]" onClick={() => setMobileOpen(false)}>
            Docs
          </a>
          <hr className="border-[var(--l-border)]" />
          <a href="#" className="font-sans text-sm text-[var(--l-text-secondary)]">
            Log in
          </a>
          <a
            href="/contact"
            className="font-sans text-sm font-medium text-white bg-[var(--l-accent)] rounded-lg px-6 py-2.5 text-center hover:opacity-90 transition-opacity"
          >
            Book a Demo
          </a>
        </div>
      )}
    </header>
  );
}

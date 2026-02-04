"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    useCase: "",
    message: "",
  });

  function validate() {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Enter a valid email";
    }
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  }

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-6 py-20 px-5 text-center">
        <div className="w-16 h-16 rounded-full bg-[var(--l-accent-light)] flex items-center justify-center">
          <span className="material-symbols-outlined text-[var(--l-accent)] text-3xl">
            check_circle
          </span>
        </div>
        <h2 className="font-serif text-2xl md:text-3xl text-[var(--l-text-primary)]">
          Thanks for reaching out!
        </h2>
        <p className="font-sans text-base text-[var(--l-text-tertiary)] max-w-[480px]">
          We&apos;ve received your message and will get back to you within one
          business day.
        </p>
        <a
          href="/"
          className="font-sans text-sm font-medium text-[var(--l-accent)] hover:underline"
        >
          &larr; Back to homepage
        </a>
      </div>
    );
  }

  const inputClass =
    "w-full font-sans text-sm text-[var(--l-text-primary)] bg-white border border-[var(--l-border)] rounded-xl px-4 py-3 outline-none focus:border-[var(--l-accent)] focus:ring-1 focus:ring-[var(--l-accent)] transition-colors placeholder:text-[var(--l-text-muted)]";
  const labelClass =
    "font-sans text-sm font-medium text-[var(--l-text-secondary)]";
  const errorClass = "font-sans text-xs text-red-500 mt-1";

  return (
    <div className="w-full max-w-[560px] mx-auto px-5 py-12 md:py-20">
      <div className="flex flex-col gap-3 mb-10 text-center">
        <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl text-[var(--l-text-primary)]">
          Get in touch
        </h1>
        <p className="font-sans text-sm md:text-base text-[var(--l-text-tertiary)]">
          Tell us about your use case and we&apos;ll set up a demo.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
        {/* Name */}
        <div className="flex flex-col gap-1.5">
          <label className={labelClass}>
            Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            className={inputClass}
            placeholder="Jane Smith"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
          />
          {errors.name && <p className={errorClass}>{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label className={labelClass}>
            Email <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            className={inputClass}
            placeholder="jane@company.com"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
          />
          {errors.email && <p className={errorClass}>{errors.email}</p>}
        </div>

        {/* Company */}
        <div className="flex flex-col gap-1.5">
          <label className={labelClass}>Company</label>
          <input
            type="text"
            className={inputClass}
            placeholder="Acme Inc."
            value={form.company}
            onChange={(e) => update("company", e.target.value)}
          />
        </div>

        {/* Role */}
        <div className="flex flex-col gap-1.5">
          <label className={labelClass}>Role</label>
          <input
            type="text"
            className={inputClass}
            placeholder="Engineering Lead"
            value={form.role}
            onChange={(e) => update("role", e.target.value)}
          />
        </div>

        {/* Use Case */}
        <div className="flex flex-col gap-1.5">
          <label className={labelClass}>Use Case</label>
          <select
            className={inputClass}
            value={form.useCase}
            onChange={(e) => update("useCase", e.target.value)}
          >
            <option value="">Select a use case</option>
            <option value="agent-debugging">Agent Debugging</option>
            <option value="safe-tool-use">Safe Tool Use</option>
            <option value="parallel-evals">Parallel Evals</option>
            <option value="enterprise-isolation">Enterprise Isolation</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1.5">
          <label className={labelClass}>
            Message <span className="text-red-400">*</span>
          </label>
          <textarea
            className={`${inputClass} min-h-[120px] resize-y`}
            placeholder="Tell us about your project..."
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
          />
          {errors.message && <p className={errorClass}>{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full font-sans text-[15px] font-medium text-white bg-[var(--l-accent)] rounded-xl px-8 py-3.5 hover:opacity-90 transition-opacity mt-2"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

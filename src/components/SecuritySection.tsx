import { Shield, Lock, History } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface SecurityCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

function SecurityCard({ icon: Icon, title, description }: SecurityCardProps) {
  return (
    <div className="flex-1 flex flex-col items-center gap-3.5 rounded-2xl bg-white border border-[var(--l-border)] p-7">
      <Icon size={28} color="var(--l-accent)" />
      <h3 className="font-serif text-xl text-[var(--l-text-primary)] text-center">{title}</h3>
      <p className="font-sans text-[13px] text-[var(--l-text-tertiary)] leading-[1.5] text-center">
        {description}
      </p>
    </div>
  );
}

export default function SecuritySection() {
  return (
    <section className="flex flex-col items-center gap-12 bg-[var(--l-bg-subtle)] px-[120px] py-20 w-full">
      <h2 className="font-serif text-[42px] text-[var(--l-text-primary)] text-center max-w-[700px]">
        Security that doesn&apos;t rely
        on &ldquo;please behave&rdquo;
      </h2>
      <p className="font-sans text-[15px] text-[var(--l-text-tertiary)] text-center leading-[1.6] max-w-[640px]">
        Most agent security today is prompts and policies. Saph assumes the agent
        will eventually do something weird and designs around that.
      </p>

      <div className="flex gap-5 w-full">
        <SecurityCard
          icon={Shield}
          title="Isolation"
          description="Limits blast radius. Every agent runs in its own sandbox."
        />
        <SecurityCard
          icon={Lock}
          title="Capabilities"
          description="Prevents ambient authority. Nothing runs unless explicitly granted."
        />
        <SecurityCard
          icon={History}
          title="Replay"
          description="Makes incidents understandable. Replay any execution exactly."
        />
      </div>
    </section>
  );
}

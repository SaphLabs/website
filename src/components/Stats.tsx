import { LucideIcon, Zap, RefreshCw, GitBranch } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  number: string;
  label: string;
  description: string;
}

function StatCard({ icon: Icon, iconBg, iconColor, number, label, description }: StatCardProps) {
  return (
    <div className="flex flex-col gap-2 flex-1 rounded-xl border border-[var(--l-border)] p-7 pt-8">
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center"
        style={{ backgroundColor: iconBg }}
      >
        <Icon size={16} color={iconColor} />
      </div>
      <span className="font-serif text-4xl text-[var(--l-text-primary)]">{number}</span>
      <span className="font-sans text-[13px] font-medium text-[var(--l-text-secondary)]">
        {label}
      </span>
      <p className="font-sans text-xs text-[var(--l-text-tertiary)] leading-[1.5]">
        {description}
      </p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="flex gap-6 px-20 py-[60px] w-full">
      <StatCard
        icon={Zap}
        iconBg="var(--l-accent-light)"
        iconColor="var(--l-accent)"
        number="Sub-ms"
        label="Sandbox isolation"
        description="Spin up isolated environments in microseconds for every agent run."
      />
      <StatCard
        icon={RefreshCw}
        iconBg="var(--l-green-light)"
        iconColor="var(--l-green)"
        number="100%"
        label="Deterministic replay"
        description="Every execution is reproducible. Same inputs, same outputs, always."
      />
      <StatCard
        icon={GitBranch}
        iconBg="var(--l-blue-light)"
        iconColor="var(--l-blue)"
        number="10,000+"
        label="Parallel branches"
        description="Run thousands of workflow variations cheaply for evals and search."
      />
    </section>
  );
}

import { Bug, Shield, GitBranch, Building } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface UseCaseCardProps {
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
}

function UseCaseCard({ icon: Icon, iconBg, iconColor, title, description }: UseCaseCardProps) {
  return (
    <div className="flex-1 flex flex-col gap-4 rounded-2xl border border-[var(--l-border)] p-7">
      <div
        className="w-10 h-10 rounded-[10px] flex items-center justify-center"
        style={{ backgroundColor: iconBg }}
      >
        <Icon size={20} color={iconColor} />
      </div>
      <h3 className="font-serif text-[19px] text-[var(--l-text-primary)]">{title}</h3>
      <p className="font-sans text-[13px] text-[var(--l-text-tertiary)] leading-[1.5]">
        {description}
      </p>
    </div>
  );
}

export default function UseCases() {
  return (
    <section id="use-cases" className="flex flex-col items-center gap-12 p-20 w-full">
      <div className="flex items-center rounded-full bg-[var(--l-bg-subtle)] border border-[var(--l-border)] px-3.5 py-1.5">
        <span className="font-sans text-[11px] font-semibold tracking-[1.5px] text-[var(--l-text-muted)]">
          USE CASES
        </span>
      </div>
      <h2 className="font-serif text-[42px] text-[var(--l-text-primary)] text-center">
        What you can do with it
      </h2>

      <div className="flex gap-5 w-full">
        <UseCaseCard
          icon={Bug}
          iconBg="var(--l-accent-light)"
          iconColor="var(--l-accent)"
          title="Agent Debugging"
          description="Reproduce failures exactly. Diff runs. Debug without guesswork."
        />
        <UseCaseCard
          icon={Shield}
          iconBg="var(--l-green-light)"
          iconColor="var(--l-green)"
          title="Safe Tool Use"
          description="Let agents use shell utilities and file workflows without ambient access."
        />
        <UseCaseCard
          icon={GitBranch}
          iconBg="var(--l-blue-light)"
          iconColor="var(--l-blue)"
          title="Parallel Evals"
          description="Run many variations of a workflow cheaply for evals, search, or testing."
        />
        <UseCaseCard
          icon={Building}
          iconBg="var(--l-amber-light)"
          iconColor="var(--l-amber)"
          title="Enterprise Isolation"
          description="A safer way to run agent workloads without heavy per-run infrastructure."
        />
      </div>
    </section>
  );
}

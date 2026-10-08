import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type InsuranceItem = { title: string; description: string; icon: LucideIcon };

export function ProductSection({ eyebrow, title, copy, children, tone = "default", id }: { eyebrow: string; title: string; copy?: string; children?: ReactNode; tone?: "default" | "muted" | "dark"; id?: string }) {
  const dark = tone === "dark";
  return <section id={id} className={cn("scroll-mt-24 py-16 lg:py-20", dark ? "bg-surface-deep text-primary-foreground" : tone === "muted" ? "bg-secondary" : "bg-background")}>
    <div className="mx-auto max-w-7xl px-5 lg:px-8">
      <div className="max-w-3xl">
        <p className={cn("mb-3 text-xs font-bold uppercase", dark ? "text-cyan" : "text-ink-soft")}>{eyebrow}</p>
        <h2 className={cn("text-3xl font-semibold leading-tight sm:text-4xl", !dark && "text-ink")}>{title}</h2>
        {copy && <p className={cn("mt-5 text-base leading-7", dark ? "text-cyan-soft" : "text-ink-soft")}>{copy}</p>}
      </div>
      {children && <div className="mt-10">{children}</div>}
    </div>
  </section>;
}

export function CoverageGrid({ items, columns = 3 }: { items: InsuranceItem[]; columns?: 2 | 3 }) {
  return <div className={cn("grid gap-4 sm:grid-cols-2", columns === 3 && "lg:grid-cols-3")}>
    {items.map(({ title, description, icon: Icon }) => <article key={title} className="rounded-lg border border-border bg-card p-6">
      <Icon aria-hidden="true" className="mb-5 size-6 text-primary" strokeWidth={1.6} />
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-ink-soft">{description}</p>
    </article>)}
  </div>;
}
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type InsuranceItem = { title: string; description: string; icon: LucideIcon };

export function ProductSection({
  eyebrow,
  title,
  copy,
  children,
  tone = "default",
  id,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  children?: ReactNode;
  tone?: "default" | "muted" | "dark";
  id?: string;
}) {
  const dark = tone === "dark";
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 border-b border-border py-10 sm:py-12 lg:py-16 overflow-hidden w-full",
        dark ? "bg-accent text-ink" : tone === "muted" ? "bg-secondary" : "bg-background",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-w-0 w-full">
        <div className="max-w-3xl min-w-0">
          <p
            className={cn(
              "mb-2 sm:mb-3 text-xs font-bold uppercase tracking-wider",
              dark ? "text-primary" : "text-ink-soft",
            )}
          >
            {eyebrow}
          </p>
          <h2
            className={cn(
              "text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight break-words",
              !dark && "text-ink",
            )}
          >
            {title}
          </h2>
          {copy && (
            <p className={cn("mt-3 sm:mt-5 text-sm sm:text-base leading-relaxed sm:leading-7 break-words", dark ? "text-ink-soft" : "text-ink-soft")}>
              {copy}
            </p>
          )}
        </div>
        {children && <div className="mt-8 sm:mt-10 min-w-0 w-full">{children}</div>}
      </div>
    </section>
  );
}

export function CoverageGrid({ items, columns = 3 }: { items: InsuranceItem[]; columns?: 2 | 3 }) {
  return (
    <div className={cn("grid gap-4 sm:gap-6 sm:grid-cols-2 min-w-0 w-full", columns === 3 && "lg:grid-cols-3")}>
      {items.map(({ title, description, icon: Icon }) => (
        <article key={title} className="border-t border-border py-4 sm:py-5 pr-0 sm:pr-4 min-w-0">
          <Icon aria-hidden="true" className="mb-2.5 sm:mb-3 size-5 text-primary shrink-0" strokeWidth={1.6} />
          <h3 className="text-sm sm:text-base font-semibold text-ink leading-snug break-words">{title}</h3>
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed sm:leading-6 text-ink-soft break-words">{description}</p>
        </article>
      ))}
    </div>
  );
}

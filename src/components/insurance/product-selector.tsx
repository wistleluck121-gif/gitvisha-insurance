import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Bot,
  Building2,
  CarFront,
  ChevronRight,
  HeartPulse,
  ShieldCheck,
  Ship,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { productCategories } from "@/lib/insurance/catalogue";

const categoryIcons: Record<string, typeof CarFront> = {
  motor: CarFront,
  health: HeartPulse,
  business: Building2,
  marine: Ship,
};

type ProductVisual = {
  tag: string;
  gradient: string;
  borderGlow: string;
  iconBg: string;
};

const productVisuals: Record<string, ProductVisual> = {
  "car-insurance": {
    tag: "0-Dep · Bumper-to-Bumper",
    gradient: "from-cyan-500/12 via-primary/5 to-transparent",
    borderGlow: "hover:border-cyan-400/50 hover:shadow-[0_10px_30px_rgba(6,182,212,0.14)]",
    iconBg: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-400/30",
  },
  "bike-insurance": {
    tag: "Instant Renewal · NCB",
    gradient: "from-blue-500/12 via-primary/5 to-transparent",
    borderGlow: "hover:border-blue-400/50 hover:shadow-[0_10px_30px_rgba(59,130,246,0.14)]",
    iconBg: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-400/30",
  },
  "commercial-vehicle-insurance": {
    tag: "Fleet & Transit Cargo",
    gradient: "from-indigo-500/12 via-primary/5 to-transparent",
    borderGlow: "hover:border-indigo-400/50 hover:shadow-[0_10px_30px_rgba(99,102,241,0.14)]",
    iconBg: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-400/30",
  },
  "health-insurance": {
    tag: "10,000+ Cashless · No Room Cap",
    gradient: "from-emerald-500/12 via-teal-500/5 to-transparent",
    borderGlow: "hover:border-emerald-400/50 hover:shadow-[0_10px_30px_rgba(16,185,129,0.14)]",
    iconBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-400/30",
  },
  "group-health-insurance": {
    tag: "Day 1 PED Waiver · GMC Corporate",
    gradient: "from-teal-500/12 via-primary/5 to-transparent",
    borderGlow: "hover:border-teal-400/50 hover:shadow-[0_10px_30px_rgba(20,184,166,0.14)]",
    iconBg: "bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-400/30",
  },
  "personal-accident-insurance": {
    tag: "24x7 Worldwide · Income Shield",
    gradient: "from-sky-500/12 via-primary/5 to-transparent",
    borderGlow: "hover:border-sky-400/50 hover:shadow-[0_10px_30px_rgba(14,165,233,0.14)]",
    iconBg: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-400/30",
  },
  "property-fire-insurance": {
    tag: "SFSP & Reinstatement Value",
    gradient: "from-amber-500/12 via-orange-500/5 to-transparent",
    borderGlow: "hover:border-amber-400/50 hover:shadow-[0_10px_30px_rgba(245,158,11,0.14)]",
    iconBg: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-400/30",
  },
  "engineering-insurance": {
    tag: "CAR / EAR & Machinery MBD",
    gradient: "from-blue-500/12 via-indigo-500/5 to-transparent",
    borderGlow: "hover:border-blue-400/50 hover:shadow-[0_10px_30px_rgba(59,130,246,0.14)]",
    iconBg: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-400/30",
  },
  "solar-pumping-insurance": {
    tag: "PV Arrays & Pumping Inverters",
    gradient: "from-amber-500/12 via-yellow-500/5 to-transparent",
    borderGlow: "hover:border-amber-400/50 hover:shadow-[0_10px_30px_rgba(245,158,11,0.14)]",
    iconBg: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-400/30",
  },
  "road-insurance": {
    tag: "Civil Infrastructure & Corridors",
    gradient: "from-slate-500/12 via-cyan-500/5 to-transparent",
    borderGlow: "hover:border-cyan-400/50 hover:shadow-[0_10px_30px_rgba(6,182,212,0.14)]",
    iconBg: "bg-slate-500/10 text-slate-700 dark:text-slate-300 border-slate-400/30",
  },
  "liability-insurance": {
    tag: "D&O · CGL · Legal Defense",
    gradient: "from-purple-500/12 via-primary/5 to-transparent",
    borderGlow: "hover:border-purple-400/50 hover:shadow-[0_10px_30px_rgba(168,85,247,0.14)]",
    iconBg: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-400/30",
  },
  "corporate-specialty-risks": {
    tag: "Bespoke Contracts · Multi-Crore",
    gradient: "from-cyan-500/12 via-blue-500/5 to-transparent",
    borderGlow: "hover:border-cyan-400/50 hover:shadow-[0_10px_30px_rgba(6,182,212,0.14)]",
    iconBg: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-400/30",
  },
  "marine-insurance": {
    tag: "ICC-A All Risks · EXIM Freight",
    gradient: "from-teal-500/12 via-cyan-500/5 to-transparent",
    borderGlow: "hover:border-teal-400/50 hover:shadow-[0_10px_30px_rgba(20,184,166,0.14)]",
    iconBg: "bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-400/30",
  },
  "business-interruption-insurance": {
    tag: "FLOP Revenue & Fixed Overhead",
    gradient: "from-sky-500/12 via-primary/5 to-transparent",
    borderGlow: "hover:border-sky-400/50 hover:shadow-[0_10px_30px_rgba(14,165,233,0.14)]",
    iconBg: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-400/30",
  },
};

export function ProductSelector({ onEnquire }: { onEnquire: (requirement: string) => void }) {
  return (
    <div className="mt-5 sm:mt-8 lg:mt-10">
      <Tabs defaultValue="motor" className="w-full">
        {/* Futuristic Segmented Navigation Control */}
        <div className="flex w-full items-center justify-start overflow-x-auto pb-2 scrollbar-none">
          <TabsList
            aria-label="Insurance categories"
            className="inline-flex h-auto gap-1.5 rounded-2xl border border-border/80 bg-secondary/70 p-1.5 shadow-2xs backdrop-blur-md"
          >
            {productCategories.map((category) => {
              const Icon = categoryIcons[category.id] ?? ShieldCheck;
              return (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="group relative flex min-h-10 items-center justify-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold text-ink-soft transition-all duration-200 hover:text-ink data-[state=active]:border-border/80 data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-sm sm:min-h-11 sm:px-4 sm:text-sm"
                >
                  <Icon className="size-4 shrink-0 text-primary transition-transform duration-200 group-hover:scale-110" />
                  <span>{category.name}</span>
                  <span className="hidden rounded-full bg-secondary px-1.5 py-0.5 text-[10px] font-semibold text-ink-soft group-data-[state=active]:bg-primary/10 group-data-[state=active]:text-primary sm:inline-block">
                    {category.products.length}
                  </span>
                </TabsTrigger>
              );
            })}
          </TabsList>
        </div>

        {/* Tab Contents */}
        {productCategories.map((category) => {
          const isWideAssistant = category.id === "business" || category.id === "marine";

          return (
            <TabsContent
              key={category.id}
              value={category.id}
              className="mt-4 sm:mt-6 focus-visible:outline-none animate-in fade-in-50 duration-200"
            >
              <div className="grid gap-3.5 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {/* Product Cards */}
                {category.products.map(({ name, detail, icon: Icon, slug }) => {
                  const visual = productVisuals[slug] ?? {
                    tag: "Tailored Advisory Cover",
                    gradient: "from-primary/10 via-cyan-500/5 to-transparent",
                    borderGlow: "hover:border-primary/50 hover:shadow-[0_10px_30px_rgba(14,165,233,0.14)]",
                    iconBg: "bg-primary/10 text-primary border-primary/30",
                  };

                  return (
                    <article
                      key={name}
                      className={`group relative flex min-w-0 flex-col justify-between overflow-hidden rounded-2xl border border-border/75 bg-gradient-to-b from-card via-card/95 to-secondary/35 p-4.5 sm:p-5 shadow-xs transition-all duration-300 hover:-translate-y-1.5 ${visual.borderGlow}`}
                    >
                      {/* Top Glowing Laser Edge Highlight */}
                      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                      {/* Ambient Radial Spotlight */}
                      <div
                        className={`pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-gradient-to-br ${visual.gradient} blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                      />

                      <div className="relative z-10">
                        {/* 3D-styled Frosted Icon & Benefit Badge */}
                        <div className="mb-3.5 flex items-start justify-between gap-2">
                          <div
                            className={`relative flex size-11 sm:size-12 items-center justify-center rounded-xl border ${visual.iconBg} shadow-2xs backdrop-blur-xs transition-transform duration-300 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.25)]`}
                          >
                            <Icon className="size-5 sm:size-6" strokeWidth={1.75} />
                          </div>
                          <span className="inline-block rounded-md border border-border/70 bg-secondary/80 px-2 py-0.5 text-[9.5px] font-bold text-ink-soft sm:text-[10px]">
                            {visual.tag}
                          </span>
                        </div>

                        {/* Title & Detail */}
                        <h3 className="text-sm font-bold text-ink transition-colors group-hover:text-primary sm:text-base">
                          {name}
                        </h3>
                        <p className="mt-1.5 text-xs leading-relaxed text-ink-soft">
                          {detail}
                        </p>
                      </div>

                      {/* Interactive Bottom Bar */}
                      <div className="relative z-10 mt-4 flex items-center justify-between border-t border-border/50 pt-3">
                        <span className="flex items-center gap-1.5 text-xs font-bold text-primary transition-all group-hover:gap-2">
                          Explore cover
                          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                        </span>
                        <span className="flex size-6 items-center justify-center rounded-full bg-primary/10 text-primary opacity-0 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100">
                          <ChevronRight className="size-3.5" />
                        </span>
                      </div>

                      {/* Clickable Overlay Link */}
                      {slug === "car-insurance" ? (
                        <Link
                          to="/car-insurance"
                          className="absolute inset-0 z-20"
                          aria-label={`Explore ${name}`}
                        >
                          <span className="sr-only">Explore {name}</span>
                        </Link>
                      ) : slug === "health-insurance" ? (
                        <Link
                          to="/health-insurance"
                          className="absolute inset-0 z-20"
                          aria-label={`Explore ${name}`}
                        >
                          <span className="sr-only">Explore {name}</span>
                        </Link>
                      ) : (
                        <Link
                          to="/products/$productSlug"
                          params={{ productSlug: slug }}
                          className="absolute inset-0 z-20"
                          aria-label={`Explore ${name}`}
                        >
                          <span className="sr-only">Explore {name}</span>
                        </Link>
                      )}
                    </article>
                  );
                })}

                {/* AI-Style Insurance Assistance Card */}
                <article
                  className={`group relative flex min-w-0 flex-col justify-between overflow-hidden rounded-2xl border border-cyan-500/35 bg-gradient-to-br from-card via-cyan-950/[0.04] to-primary/[0.08] p-4.5 sm:p-5 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/60 hover:shadow-[0_12px_36px_rgba(6,182,212,0.18)] ${
                    isWideAssistant ? "lg:col-span-2" : "col-span-1"
                  }`}
                >
                  {/* Glowing Corner Aura */}
                  <div className="pointer-events-none absolute -bottom-8 -right-8 size-36 rounded-full bg-cyan-500/15 blur-2xl transition-all duration-500 group-hover:bg-cyan-500/25" />
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />

                  <div className="relative z-10">
                    {/* Header with AI Pill */}
                    <div className="mb-3 flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-0.5 text-[10.5px] font-bold text-cyan-700 shadow-2xs backdrop-blur-xs dark:text-cyan-300">
                        <Sparkles className="size-3 animate-pulse text-cyan-600 dark:text-cyan-400" />
                        AI Risk Advisory
                      </span>
                      <span className="flex size-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)]" />
                    </div>

                    <div className="mb-2 flex items-center gap-3">
                      <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/35 bg-gradient-to-br from-primary/15 via-cyan-500/15 to-teal-500/15 text-primary shadow-2xs">
                        <Bot className="size-5.5 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-sm font-bold text-ink sm:text-base">
                          Not sure where to start?
                        </h3>
                        <p className="text-[11px] font-medium text-cyan-600 dark:text-cyan-400">
                          Tailored Risk Engineering
                        </p>
                      </div>
                    </div>

                    <p className="text-xs leading-relaxed text-ink-soft">
                      {isWideAssistant
                        ? "Every enterprise faces unique operational and physical risks. Our IRDAI-certified brokers analyze your assets, audit wording traps, and benchmark terms across India's top 15+ insurers."
                        : "Tell us what matters most. Our certified risk advisors benchmark terms across 15+ insurers with zero obligation."}
                    </p>
                  </div>

                  {/* Prominent Action CTA */}
                  <div className="relative z-20 mt-4 border-t border-border/50 pt-3">
                    <Button
                      asChild
                      className="h-10 w-full cursor-pointer rounded-xl bg-gradient-to-r from-primary via-blue-600 to-cyan-600 text-xs font-semibold text-white shadow-md shadow-primary/20 transition-all hover:from-primary/95 hover:to-cyan-500 group-hover:shadow-cyan-500/25"
                    >
                      <a href="#contact" onClick={() => onEnquire(category.name)}>
                        Talk to Gitvisha
                        <ArrowRight className="ml-1.5 size-3.5 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                  </div>
                </article>
              </div>
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
}

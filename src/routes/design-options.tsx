import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CircleCheck, ClipboardCheck, FileSearch, Mail, Phone, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { productCategories } from "@/lib/insurance/catalogue";
import logoAsset from "@/assets/gitvisha-logo.webp.asset.json";
import logisticsAsset from "@/assets/logistics.webp.asset.json";
import logisticsSmall from "@/assets/logistics-small.webp.asset.json";

const OPTIONS = [
  { id: "corporate", label: "1 · Premium Corporate" },
  { id: "vibrant", label: "2 · Modern & Vibrant" },
  { id: "minimal", label: "3 · Minimal & Compact" },
] as const;
type OptionId = (typeof OPTIONS)[number]["id"];

export const Route = createFileRoute("/design-options")({
  validateSearch: (search: Record<string, unknown>) => ({ option: typeof search.option === "string" ? search.option : "corporate" }),
  head: () => ({
    meta: [
      { title: "Homepage Design Options — Gitvisha Preview" },
      { name: "description", content: "Internal preview comparing three Gitvisha homepage design directions." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Gitvisha Homepage Design Options" },
      { property: "og:description", content: "Compare three homepage design directions for Gitvisha Insurance." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: DesignOptionsPage,
});

const products = productCategories.flatMap((c) => c.products).slice(0, 8);
const steps = [
  { title: "Intimate", detail: "Notify us about the incident and immediate circumstances.", icon: Phone },
  { title: "Document", detail: "We help organise the relevant information and documents.", icon: ClipboardCheck },
  { title: "Assess", detail: "Coordinate with the involved parties through the assessment.", icon: FileSearch },
  { title: "Resolve", detail: "Support clear communication through the claim's conclusion.", icon: CircleCheck },
];

function ProductLink({ route, className, children }: { route?: "/car-insurance"; className?: string; children: React.ReactNode }) {
  return route ? <Link to={route} className={className}>{children}</Link> : <Link to="/" hash="contact" className={className}>{children}</Link>;
}

function Logo({ size }: { size: string }) {
  return <img src={logoAsset.url} alt="Gitvisha — Infinite Trust, Secure Peace" width={280} height={280} className={`aspect-square shrink-0 rounded-full object-contain ${size}`} />;
}

function DesignOptionsPage() {
  const { option } = Route.useSearch();
  const active: OptionId = OPTIONS.some((o) => o.id === option) ? (option as OptionId) : "corporate";
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="sticky top-0 z-50 border-b border-border bg-card">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p className="text-xs font-semibold text-ink-soft">Design preview · not the live homepage · <Link to="/" className="text-primary underline">Current homepage</Link></p>
          <div role="tablist" aria-label="Design options" className="grid grid-cols-3 gap-1 rounded-lg bg-secondary p-1">
            {OPTIONS.map((o) => (
              <Link key={o.id} to="/design-options" search={{ option: o.id }} role="tab" aria-selected={active === o.id}
                className={`rounded-md px-2 py-2 text-center text-[11px] font-semibold leading-tight sm:px-3 sm:text-xs ${active === o.id ? "bg-primary text-primary-foreground" : "text-ink-soft hover:text-primary"}`}>{o.label}</Link>
            ))}
          </div>
        </div>
      </div>
      {active === "corporate" && <Corporate />}
      {active === "vibrant" && <Vibrant />}
      {active === "minimal" && <Minimal />}
    </div>
  );
}

/* ---------- 1. Premium Corporate ---------- */
function Corporate() {
  return (
    <main>
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
          <div className="flex items-center gap-3"><Logo size="size-14" /><span className="hidden font-display text-lg font-semibold text-ink sm:block">Gitvisha Insurance</span></div>
          <Button asChild><Link to="/" hash="contact">Get a Quote <ArrowRight /></Link></Button>
        </div>
      </header>
      <section className="bg-surface-dark text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1.3fr_1fr] lg:items-end lg:px-8 lg:py-24">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-cyan-soft">Insurance broking & risk advisory</p>
            <h1 className="font-display text-4xl font-semibold leading-[1.1] sm:text-6xl">Protecting what matters.<br />Securing what's ahead.</h1>
          </div>
          <div className="border-l border-line-dark pl-6">
            <p className="text-base leading-7 text-cyan-soft">Thoughtful advice to help businesses and individuals understand exposure, choose suitable protection, and navigate claims with confidence.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="secondary"><Link to="/" hash="contact">Speak to an advisor</Link></Button>
              <Button asChild size="lg" variant="link" className="text-primary-foreground"><Link to="/car-insurance">Car insurance <ArrowRight /></Link></Button>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Insurance solutions</p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold text-ink">Protection structured around real-world risk.</h2>
        <div className="mt-10 grid border-t border-ink/20 sm:grid-cols-2 lg:grid-cols-4">
          {products.map(({ name, detail, route }, i) => (
            <ProductLink key={name} route={route} className="group border-b border-border py-6 pr-6 hover:bg-secondary sm:px-5">
              <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-lg font-semibold text-ink group-hover:text-primary">{name}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{detail}</p>
            </ProductLink>
          ))}
        </div>
      </section>
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-ink">Claims assistance, step by step.</h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-4">
            {steps.map((s, i) => <li key={s.title} className="border-t-2 border-primary pt-5"><span className="font-display text-4xl font-semibold text-primary/30">0{i + 1}</span><h3 className="mt-2 text-lg font-semibold text-ink">{s.title}</h3><p className="mt-2 text-sm leading-6 text-ink-soft">{s.detail}</p></li>)}
          </ol>
        </div>
      </section>
      <section className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-16 md:flex-row md:items-center md:justify-between lg:px-8">
        <div><h2 className="font-display text-3xl font-semibold text-ink">Let's understand your insurance needs.</h2><p className="mt-2 text-sm text-ink-soft">info@gitvisha.com · +91 XXXXX XXXXX · Delhi NCR</p></div>
        <Button asChild size="lg"><Link to="/" hash="contact">Start a conversation <ArrowRight /></Link></Button>
      </section>
    </main>
  );
}

/* ---------- 2. Modern & Vibrant ---------- */
function Vibrant() {
  return (
    <main className="bg-vibrant-soft">
      <header className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 lg:px-8">
        <Logo size="size-14" />
        <Button asChild className="rounded-full bg-vibrant shadow-depth"><Link to="/" hash="contact">Get a Quote <ArrowRight /></Link></Button>
      </header>
      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1 text-xs font-semibold text-primary shadow-depth"><ShieldCheck className="size-3.5" />Infinite Trust. Secure Peace.</span>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.1] text-ink sm:text-5xl">Insurance that keeps <span className="bg-vibrant bg-clip-text text-transparent">your future moving.</span></h1>
          <p className="mt-5 max-w-lg text-base leading-7 text-ink-soft">Broking and risk advisory for businesses and individuals — clear options, and support when you need to claim.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full bg-vibrant shadow-depth"><Link to="/" hash="contact">Get a Quote <ArrowRight /></Link></Button>
            <Button asChild size="lg" variant="outline" className="rounded-full"><Link to="/car-insurance">Car insurance</Link></Button>
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl shadow-depth">
          <img src={logisticsAsset.url} srcSet={`${logisticsSmall.url} 480w, ${logisticsAsset.url} 800w`} sizes="(max-width: 1023px) 100vw, 600px" alt="Cargo containers at a freight terminal" width={800} height={533} fetchPriority="high" className="aspect-[4/3] size-full object-cover" />
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-16 lg:px-8">
        <h2 className="font-display text-3xl font-bold text-ink">What would you like to protect?</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map(({ name, detail, icon: Icon, route }) => (
            <ProductLink key={name} route={route} className="group rounded-2xl bg-card p-5 shadow-depth transition-transform hover:-translate-y-1 motion-reduce:hover:translate-y-0">
              <span className="grid size-11 place-items-center rounded-xl bg-vibrant text-primary-foreground"><Icon className="size-5" /></span>
              <h3 className="mt-4 font-semibold text-ink">{name}</h3>
              <p className="mt-1 text-sm leading-6 text-ink-soft">{detail}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary">{route ? "Explore cover" : "Enquire"} <ArrowRight className="size-3.5" /></span>
            </ProductLink>
          ))}
        </div>
      </section>
      <section className="px-5 pb-16 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl bg-vibrant p-8 text-primary-foreground shadow-depth sm:p-12">
          <h2 className="font-display text-3xl font-bold">Claims support in four steps</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ title, detail, icon: Icon }) => <div key={title} className="rounded-2xl bg-card/15 p-5"><Icon className="size-6" /><h3 className="mt-3 font-semibold">{title}</h3><p className="mt-1 text-sm leading-6 opacity-90">{detail}</p></div>)}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-5 pb-20 text-center">
        <h2 className="font-display text-3xl font-bold text-ink">Ready to talk cover?</h2>
        <p className="mt-3 text-ink-soft">Share your requirement and our team can follow up.</p>
        <Button asChild size="lg" className="mt-6 rounded-full bg-vibrant shadow-depth"><Link to="/" hash="contact">Make an enquiry <ArrowRight /></Link></Button>
      </section>
    </main>
  );
}

/* ---------- 3. Minimal & Compact ---------- */
function Minimal() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6">
      <header className="flex items-center justify-between py-4">
        <div className="flex items-center gap-2"><Logo size="size-10" /><span className="text-sm font-semibold text-ink">Gitvisha</span></div>
        <Link to="/" hash="contact" className="text-sm font-semibold text-primary">Get a quote →</Link>
      </header>
      <section className="py-10 sm:py-14">
        <h1 className="text-3xl font-semibold leading-tight text-ink sm:text-4xl">Insurance, made clear.</h1>
        <p className="mt-3 text-base leading-7 text-ink-soft">Broking, risk advice and claims support for businesses and individuals.</p>
        <Button asChild className="mt-6 w-full sm:w-auto"><Link to="/" hash="contact">Get a Quote</Link></Button>
      </section>
      <section className="border-t border-border py-8">
        <h2 className="text-xs font-bold uppercase text-muted-foreground">Solutions</h2>
        <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {products.map(({ name, icon: Icon, route }) => (
            <li key={name}><ProductLink route={route} className="flex h-full items-center gap-2 rounded-md border border-border px-3 py-3 text-sm font-medium text-ink hover:border-primary"><Icon className="size-4 shrink-0 text-primary" /><span className="min-w-0">{name}</span></ProductLink></li>
          ))}
        </ul>
      </section>
      <section className="border-t border-border py-8">
        <h2 className="text-xs font-bold uppercase text-muted-foreground">Claims support</h2>
        <ol className="mt-4 space-y-3">
          {steps.map((s, i) => <li key={s.title} className="flex gap-3 text-sm"><span className="font-mono text-primary">{i + 1}.</span><span><strong className="text-ink">{s.title}</strong> <span className="text-ink-soft">— {s.detail}</span></span></li>)}
        </ol>
      </section>
      <section className="mb-10 rounded-lg bg-secondary p-5">
        <h2 className="font-semibold text-ink">Need advice?</h2>
        <div className="mt-3 flex flex-col gap-2 text-sm text-ink-soft sm:flex-row sm:gap-6">
          <a href="mailto:info@gitvisha.com" className="flex items-center gap-2 hover:text-primary"><Mail className="size-4 text-primary" />info@gitvisha.com</a>
          <span className="flex items-center gap-2"><Phone className="size-4 text-primary" />+91 XXXXX XXXXX</span>
        </div>
        <Button asChild variant="outline" className="mt-4 w-full sm:w-auto"><Link to="/" hash="contact">Send an enquiry</Link></Button>
      </section>
    </main>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { strengths } from "@/lib/insurance/shared";
import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  Building2,
  Check,
  ChevronRight,
  CircleCheck,
  ClipboardCheck,
  FileSearch,
  Flame,
  HeartPulse,
  Hotel,
  Landmark,
  Mail,
  PackageCheck,
  Phone,
  Scale,
  ShieldCheck,
  Ship,
  Store,
  Truck,
  Warehouse,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gitvisha — Insurance Broking & Risk Advisory" },
      { name: "description", content: "Gitvisha provides thoughtful insurance broking, risk advisory, policy support, and claims assistance for businesses and individuals." },
      { property: "og:title", content: "Gitvisha — Infinite Trust. Secure Peace" },
      { property: "og:description", content: "Insurance and risk advisory shaped around what matters to you." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

type IconItem = { title: string; description: string; icon: LucideIcon };

const solutions: IconItem[] = [
  { title: "Property & Fire Insurance", description: "Protection for buildings, stock, equipment, and operating assets.", icon: Flame },
  { title: "Engineering Insurance", description: "Coverage for projects, machinery, installation, and operational risks.", icon: Wrench },
  { title: "Marine Insurance", description: "Transit and cargo protection across supply chain movements.", icon: Ship },
  { title: "Liability Insurance", description: "Considered cover for legal liabilities and third-party exposures.", icon: Scale },
  { title: "Motor Insurance", description: "Protection for commercial fleets and individual vehicles.", icon: Truck },
  { title: "Group Health & Personal Accident", description: "Employee-focused health and accident protection solutions.", icon: HeartPulse },
  { title: "Business Interruption", description: "Support against insured disruptions affecting business continuity.", icon: Zap },
  { title: "Specialty & Corporate Risks", description: "Structured solutions for complex and evolving exposures.", icon: ShieldCheck },
];

const industries = [
  { title: "Manufacturing", icon: Building2 }, { title: "Infrastructure & Construction", icon: Landmark },
  { title: "Logistics & Warehousing", icon: Warehouse }, { title: "Retail & Commercial", icon: Store },
  { title: "Hospitality", icon: Hotel }, { title: "SMEs & Corporate", icon: PackageCheck },
];

const claimSteps = [
  { number: "01", title: "Intimate", detail: "Notify us about the incident and immediate circumstances.", icon: Phone },
  { number: "02", title: "Document", detail: "We help organise the relevant information and documents.", icon: ClipboardCheck },
  { number: "03", title: "Assess", detail: "Coordinate with the involved parties through the assessment.", icon: FileSearch },
  { number: "04", title: "Resolve", detail: "Support clear communication through the claim's conclusion.", icon: CircleCheck },
];

function SectionIntro({ eyebrow, title, copy, light = false }: { eyebrow: string; title: string; copy?: string; light?: boolean }) {
  return (
    <div className="max-w-2xl">
      <p className={`mb-4 text-xs font-bold uppercase tracking-[0.22em] ${light ? "text-cyan" : "text-primary"}`}>{eyebrow}</p>
      <h2 className={`text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl ${light ? "text-primary-foreground" : "text-ink"}`}>{title}</h2>
      {copy && <p className={`mt-5 max-w-xl text-base leading-7 ${light ? "text-cyan-soft/80" : "text-ink-soft"}`}>{copy}</p>}
    </div>
  );
}

function HomePage() {
  const [submitted, setSubmitted] = useState(false);

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) { form.reportValidity(); return; }
    setSubmitted(true);
    form.reset();
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <div>
        <section id="home" className="hero-grid relative overflow-hidden bg-surface-deep text-primary-foreground">
          <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
            <div className="relative z-10 max-w-3xl">
              <p className="mb-7 text-xs font-bold uppercase tracking-[0.28em] text-cyan">Insurance <span className="mx-2 text-magenta">•</span> Risk <span className="mx-2 text-magenta">•</span> Claims</p>
              <h1 className="max-w-3xl text-5xl font-semibold leading-[1.04] sm:text-6xl lg:text-7xl">Protecting What Matters. <span className="text-cyan">Securing What's Ahead.</span></h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-cyan-soft/80 sm:text-lg">Thoughtful insurance broking and risk advisory to help businesses and individuals understand exposure, choose suitable protection, and navigate claims with confidence.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-12 px-6"><a href="#contact">Get a Quote <ArrowRight /></a></Button>
                <Button asChild variant="outline" size="lg" className="h-12 border-line-dark bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"><a href="#solutions">Explore Solutions <ChevronRight /></a></Button>
              </div>
              <div className="mt-14 flex items-center gap-4 border-t border-line-dark pt-6 text-sm text-cyan-soft/70">
                <ShieldCheck className="size-5 shrink-0 text-cyan" />
                <span>Clarity in cover. Consistency in support.</span>
              </div>
            </div>

            <div className="relative mx-auto hidden aspect-square w-full max-w-[470px] place-items-center lg:grid" aria-hidden="true">
              <div className="visual-glow absolute size-[78%] rotate-45 rounded-[2rem] border border-cyan/30" />
              <div className="absolute size-[58%] rotate-45 rounded-xl border border-primary/70 bg-surface-dark" />
              <div className="absolute size-[36%] rotate-45 rounded-md bg-primary/15 ring-1 ring-cyan/40" />
              <ShieldCheck className="relative z-10 size-28 text-cyan" strokeWidth={1} />
              <div className="absolute left-4 top-16 h-px w-28 bg-magenta" />
              <div className="absolute bottom-16 right-2 h-px w-36 bg-cyan" />
              <div className="absolute right-7 top-8 size-3 bg-magenta" />
            </div>
          </div>
        </section>

        <section id="solutions" className="scroll-mt-20 bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionIntro eyebrow="Insurance solutions" title="Protection structured around real-world risk." copy="From core business assets to complex corporate exposures, we help identify and evaluate suitable coverage options." />
            <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {solutions.map(({ title, description, icon: Icon }, index) => (
                <article key={title} className="group relative min-h-64 bg-card p-7 transition-colors hover:bg-secondary">
                  <div className="flex items-start justify-between">
                    <span className="grid size-11 place-items-center rounded-md bg-secondary text-primary"><Icon className="size-5" strokeWidth={1.7} /></span>
                    <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
                  </div>
                  <h3 className="mt-8 text-lg font-semibold text-ink">{title === "Motor Insurance" ? <Link to="/car-insurance" className="after:absolute after:inset-0 focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-ring">{title}<ArrowRight className="ml-2 inline size-4" /></Link> : title}</h3>
                  <p className="mt-3 text-sm leading-6 text-ink-soft">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-20 section-rule bg-card py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
            <SectionIntro eyebrow="About Gitvisha" title="Advice grounded in understanding, not assumptions." copy="Gitvisha is an insurance broking and risk advisory firm focused on helping clients make informed protection decisions. We begin by understanding your operations, assets, people, and priorities—then work to identify relevant insurance solutions and provide support across the policy lifecycle." />
            <div className="relative border-l-2 border-primary pl-8 sm:pl-12">
              <p className="font-display text-2xl font-medium leading-10 text-ink sm:text-3xl">“Insurance should create clarity and confidence—not complexity.”</p>
              <p className="mt-6 text-sm leading-7 text-ink-soft">Our role is to help make risk easier to understand, coverage easier to evaluate, and the claims process easier to navigate.</p>
            </div>
          </div>
        </section>

        <section className="bg-surface-deep py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionIntro eyebrow="Why Gitvisha" title="A steady partner across the insurance journey." light />
            <div className="mt-12 grid gap-px border-y border-line-dark bg-line-dark md:grid-cols-5">
              {strengths.map((item, index) => (
                <div key={item} className="bg-surface-deep px-5 py-8">
                  <span className="text-xs font-bold text-magenta">0{index + 1}</span>
                  <Check className="mt-7 size-5 text-cyan" />
                  <h3 className="mt-4 text-base font-semibold leading-6 text-primary-foreground">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="industries" className="scroll-mt-20 bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <SectionIntro eyebrow="Industries" title="Industry context shapes better risk conversations." copy="Every sector faces a different blend of operational, asset, liability, and people risks." />
              <div className="grid gap-4 sm:grid-cols-2">
                {industries.map(({ title, icon: Icon }) => (
                  <div key={title} className="flex min-w-0 items-center gap-4 border-b border-border py-5">
                    <Icon className="size-6 shrink-0 text-primary" strokeWidth={1.6} />
                    <span className="min-w-0 text-sm font-semibold text-ink">{title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="claims" className="scroll-mt-20 bg-secondary py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <SectionIntro eyebrow="Claims assistance" title="Clear support when it matters most." copy="We help you understand requirements, organise information, and coordinate throughout the claims process." />
              <Button asChild size="lg" className="w-fit"><a href="#contact">Need help with a claim? <ArrowRight /></a></Button>
            </div>
            <div className="mt-14 grid gap-5 lg:grid-cols-4">
              {claimSteps.map(({ number, title, detail, icon: Icon }, index) => (
                <article key={title} className="relative bg-card p-7 shadow-sm">
                  <div className="flex items-center justify-between"><Icon className="size-6 text-primary" /><span className="font-mono text-xs text-muted-foreground">{number}</span></div>
                  <h3 className="mt-8 text-xl font-semibold text-ink">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-ink-soft">{detail}</p>
                  {index < claimSteps.length - 1 && <ChevronRight className="absolute -right-4 top-1/2 z-10 hidden size-7 rounded-full bg-primary p-1 text-primary-foreground lg:block" />}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 bg-card py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.78fr_1.22fr] lg:px-8">
            <div>
              <SectionIntro eyebrow="Start a conversation" title="Let’s understand your insurance needs." copy="Share a few details and our team can follow up to discuss the next step. This form does not submit to a server yet." />
              <div className="mt-10 space-y-5 text-sm text-ink-soft">
                <a href="mailto:info@gitvisha.com" className="flex items-center gap-3 hover:text-primary"><Mail className="size-5 text-primary" /> info@gitvisha.com</a>
                <a href="tel:+91XXXXXXXXXX" className="flex items-center gap-3 hover:text-primary"><Phone className="size-5 text-primary" /> +91 XXXXX XXXXX</a>
                <p className="flex items-center gap-3"><Building2 className="size-5 text-primary" /> Delhi NCR, India</p>
              </div>
            </div>

            <form onSubmit={submitForm} className="grid gap-5 rounded-lg border border-border bg-background p-6 shadow-sm sm:grid-cols-2 sm:p-8" noValidate>
              <Field label="Name" id="name"><Input id="name" name="name" required minLength={2} placeholder="Your full name" className="h-11 bg-card" /></Field>
              <Field label="Company Name" id="company"><Input id="company" name="company" required minLength={2} placeholder="Company or organisation" className="h-11 bg-card" /></Field>
              <Field label="Phone" id="phone"><Input id="phone" name="phone" type="tel" required pattern="[0-9+() -]{8,}" placeholder="Your phone number" className="h-11 bg-card" /></Field>
              <Field label="Email" id="email"><Input id="email" name="email" type="email" required placeholder="you@company.com" className="h-11 bg-card" /></Field>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="requirement">Insurance Requirement</Label>
                <select id="requirement" name="requirement" required defaultValue="" className="h-11 w-full rounded-md border border-input bg-card px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                  <option value="" disabled>Select a requirement</option>
                  {solutions.map((item) => <option key={item.title}>{item.title}</option>)}
                  <option>Claims Assistance</option><option>Other / Not Sure</option>
                </select>
              </div>
              <Field label="Message" id="message" wide><Textarea id="message" name="message" required minLength={10} placeholder="Tell us briefly about your requirement" className="min-h-28 bg-card" /></Field>
              <div className="flex flex-col items-start gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-sm text-xs leading-5 text-muted-foreground">By submitting, you are requesting a follow-up. No information is sent or stored in this website preview.</p>
                <Button type="submit" size="lg" className="shrink-0">Send Enquiry <ArrowRight /></Button>
              </div>
              {submitted && <div role="status" className="flex items-start gap-3 rounded-md border border-primary/30 bg-secondary p-4 text-sm text-ink sm:col-span-2"><CircleCheck className="mt-0.5 size-5 shrink-0 text-primary" /><span><strong>Thank you.</strong> Your form is complete. Because this is a website preview, it has not been sent; please email info@gitvisha.com.</span></div>}
            </form>
          </div>
        </section>
      </div>

      <SiteFooter />
    </div>
  );
}

function Field({ label, id, wide, children }: { label: string; id: string; wide?: boolean; children: React.ReactNode }) {
  return <div className={`space-y-2 ${wide ? "sm:col-span-2" : ""}`}><Label htmlFor={id}>{label}</Label>{children}</div>;
}
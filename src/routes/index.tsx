
import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { ProductSelector } from "@/components/insurance/product-selector";
import constructionAsset from "@/assets/construction.webp.asset.json";
import logisticsAsset from "@/assets/logistics.webp.asset.json";
import industryAsset from "@/assets/industry.webp.asset.json";
import industrySmall from "@/assets/industry-small.webp.asset.json";
import constructionSmall from "@/assets/construction-small.webp.asset.json";
import logisticsSmall from "@/assets/logistics-small.webp.asset.json";
import { strengths } from "@/lib/insurance/shared";
import sbiLogo from "@/assets/sbi.webp";
import iciciLogo from "@/assets/icici.webp";
import hdfcLogo from "@/assets/hdfc.webp";
import tataLogo from "@/assets/TATA.webp";
import kotakLogo from "@/assets/kotak.webp";
import starHealthLogo from "@/assets/starhealth.webp";
import iffcoTokioLogo from "@/assets/iffcotokio.webp";
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
import sbi from "@/assets/sbi.webp";
import icici from "@/assets/icici.webp";
import hdfc from "@/assets/hdfc.webp";
import tata from "@/assets/TATA.webp";
import kotak from "@/assets/kotak.webp";
import starHealth from "@/assets/starhealth.webp";
import iffcoTokio from "@/assets/iffcotokio.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gitvisha — Insurance Broking & Risk Advisory" },
      {
        name: "description",
        content:
          "Gitvisha provides thoughtful insurance broking, risk advisory, policy support, and claims assistance for businesses and individuals.",
      },
      {
        property: "og:title",
        content: "Gitvisha — Infinite Trust. Secure Peace",
      },
      {
        property: "og:description",
        content:
          "Insurance and risk advisory shaped around what matters to you.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

type IconItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const solutions: IconItem[] = [
  {
    title: "Property & Fire Insurance",
    description:
      "Protection for buildings, stock, equipment, and operating assets.",
    icon: Flame,
  },
  {
    title: "Engineering Insurance",
    description:
      "Coverage for projects, machinery, installation, and operational risks.",
    icon: Wrench,
  },
  {
    title: "Marine Insurance",
    description:
      "Transit and cargo protection across supply chain movements.",
    icon: Ship,
  },
  {
    title: "Liability Insurance",
    description:
      "Considered cover for legal liabilities and third-party exposures.",
    icon: Scale,
  },
  {
    title: "Motor Insurance",
    description:
      "Protection for commercial fleets and individual vehicles.",
    icon: Truck,
  },
  {
    title: "Group Health & Personal Accident",
    description:
      "Employee-focused health and accident protection solutions.",
    icon: HeartPulse,
  },
  {
    title: "Business Interruption",
    description:
      "Support against insured disruptions affecting business continuity.",
    icon: Zap,
  },
  {
    title: "Specialty & Corporate Risks",
    description:
      "Structured solutions for complex and evolving exposures.",
    icon: ShieldCheck,
  },
];

const industries = [
  { title: "Manufacturing", icon: Building2 },
  { title: "Infrastructure & Construction", icon: Landmark },
  { title: "Logistics & Warehousing", icon: Warehouse },
  { title: "Retail & Commercial", icon: Store },
  { title: "Hospitality", icon: Hotel },
  { title: "SMEs & Corporate", icon: PackageCheck },
];

const claimSteps = [
  {
    number: "01",
    title: "Intimate",
    detail: "Notify us about the incident and immediate circumstances.",
    icon: Phone,
  },
  {
    number: "02",
    title: "Document",
    detail: "We help organise the relevant information and documents.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Assess",
    detail: "Coordinate with the involved parties through the assessment.",
    icon: FileSearch,
  },
  {
    number: "04",
    title: "Resolve",
    detail:
      "Support clear communication through the claim's conclusion.",
    icon: CircleCheck,
  },
];

function SectionIntro({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="mb-4 text-xs font-bold uppercase text-primary">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold leading-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {copy && (
        <p className="mt-5 max-w-xl text-base leading-7 text-ink-soft">
          {copy}
        </p>
      )}
    </div>
  );
}

/* Animated Gitvisha ring visual for the hero section */
function RiskIntelligenceVisual() {
  return (
    <div
      className="risk-visual mx-auto w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[360px]"
      role="img"
      aria-label="Gitvisha risk intelligence: structured coverage and claims support"
    >
      <div className="risk-orbit risk-orbit-outer" aria-hidden="true" />
      <div className="risk-orbit risk-orbit-middle" aria-hidden="true" />
      <div className="risk-orbit risk-orbit-inner" aria-hidden="true" />

      <span className="risk-spark risk-spark-one" aria-hidden="true" />
      <span className="risk-spark risk-spark-two" aria-hidden="true" />

      <div className="risk-core" aria-hidden="true">
        <img
          src="/gitvisha-logo.webp"
          alt=""
          className="risk-logo"
          width={112}
          height={112}
          loading="eager"
          decoding="async"
        />
      </div>

      <div className="risk-label risk-label-top">
        <ShieldCheck className="size-5 shrink-0 text-primary" />
        <span>
          <strong>Coverage</strong>
          <small>structured</small>
        </span>
      </div>

      <div className="risk-label risk-label-bottom">
        <CircleCheck className="size-5 shrink-0 text-primary" />
        <span>
          <strong>Claims</strong>
          <small>supported</small>
        </span>
      </div>

      <div className="risk-caption">RISK INTELLIGENCE</div>
    </div>
  );
}

const insurerLogos = [
  { name: "SBI General Insurance", src: sbiLogo },
  { name: "ICICI Lombard", src: iciciLogo },
  { name: "HDFC ERGO", src: hdfcLogo },
  { name: "TATA AIG", src: tataLogo },
  { name: "Zurich Kotak", src: kotakLogo },
  { name: "Star Health Insurance", src: starHealthLogo },
  { name: "IFFCO-Tokio General Insurance", src: iffcoTokioLogo },
];

function HomePage() {
  const [submitted, setSubmitted] = useState(false);
  const [requirement, setRequirement] = useState("");

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setSubmitted(true);
    form.reset();
    setRequirement("");
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <div>
        <section
          id="home"
          className="scroll-mt-20 border-b border-border bg-secondary"
        >
          <div className="relative isolate overflow-hidden border-b border-border bg-background">
           
            <div className="absolute inset-0 -z-10 bg-background/95" />

            <div className="mx-auto grid max-w-7xl items-center gap-4 px-5 py-5 sm:py-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:px-8 lg:py-3">
              <div className="relative z-10">
                <p className="mb-3 text-xs font-bold uppercase tracking-wide text-primary">
                  Insurance · Risk · Claims
                </p>

                <h1 className="text-lg font-semibold text-ink">
                  Gitvisha Insurance
                </h1>

                <p className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-[1.15] text-ink sm:text-5xl">
                  Protecting What Matters.
                  <br />
                  <span className="home-pink-accent">
                    Securing What&apos;s Ahead.
                  </span>
                </p>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-ink-soft sm:text-base">
                  Thoughtful insurance broking and risk advisory to help
                  businesses and individuals understand exposure, choose
                  suitable protection, and navigate claims with confidence.
                </p>
              </div>

              <RiskIntelligenceVisual />
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-5 pb-8 pt-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-lg font-semibold text-ink">
                What would you like to protect?
              </h2>
              <a
                href="#solutions"
                className="flex items-center gap-2 text-xs font-semibold text-primary"
              >
                Explore all solutions <ArrowRight className="size-4" />
              </a>
            </div>
            <ProductSelector onEnquire={setRequirement} />

          </div>
        </section>

        <section
          aria-label="Insurance companies"
          className="insurer-marquee-section"
        >
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <p className="mb-6 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Insurance companies
            </p>

            <div className="insurer-marquee">
              <div className="insurer-marquee-track">
                {[0, 1].map((copy) => (
                  <div
                    className="insurer-marquee-group"
                    key={copy}
                    aria-hidden={copy === 1}
                  >
                    {insurerLogos.map((logo) => (
                      <div className="insurer-logo-item" key={logo.name}>
                        <img
                          src={logo.src}
                          alt={copy === 0 ? logo.name : ""}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="solutions"
          className="scroll-mt-20 bg-background py-14 lg:py-20"
        >
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionIntro
              eyebrow="Insurance solutions"
              title="Protection structured around real-world risk."
              copy="From core business assets to complex corporate exposures, we help identify and evaluate suitable coverage options."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4">
              {solutions.map(({ title, description, icon: Icon }, index) => (
                <article
                  key={title}
                  className="group relative rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary sm:p-6"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-primary">
                      <Icon className="size-5" strokeWidth={1.7} />
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-ink">
                    {title === "Motor Insurance" ? (
                      <Link
                        to="/car-insurance"
                        className="after:absolute after:inset-0 focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-ring"
                      >
                        {title}
                        <ArrowRight className="ml-2 inline size-4" />
                      </Link>
                    ) : (
                      <a
                        href="#contact"
                        onClick={() => setRequirement(title)}
                        className="after:absolute after:inset-0 focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-ring"
                      >
                        {title}
                      </a>
                    )}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-ink-soft">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="about"
          className="scroll-mt-20 section-rule bg-card py-14 lg:py-20"  
        >
          <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
            <SectionIntro
              eyebrow="About Gitvisha"
              title="Advice grounded in understanding, not assumptions."
              copy="Gitvisha is an insurance broking and risk advisory firm focused on helping clients make informed protection decisions. We begin by understanding your operations, assets, people, and priorities—then work to identify relevant insurance solutions and provide support across the policy lifecycle."
            />
            <div className="relative border-l-2 border-primary pl-8 sm:pl-12">
              <p className="font-display text-2xl font-medium leading-10 text-ink sm:text-3xl">
                “Insurance should create clarity and confidence—not
                complexity.”
              </p>
              <p className="mt-6 text-sm leading-7 text-ink-soft">
                Our role is to help make risk easier to understand, coverage
                easier to evaluate, and the claims process easier to navigate.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-accent py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionIntro
              eyebrow="Why Gitvisha"
              title="A steady partner across the insurance journey."
            />
            <div className="mt-12 grid gap-px border-y border-border bg-border md:grid-cols-5">
              {strengths.map((item, index) => (
                <div key={item} className="bg-accent px-5 py-5">
                  <span className="text-xs font-bold text-primary">
                    0{index + 1}
                  </span>
                  <Check className="mt-4 size-4 text-primary" />
                  <h3 className="mt-4 text-base font-semibold leading-6 text-ink">
                    {item}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="industries"
          className="scroll-mt-20 bg-background py-14 lg:py-20"
        >
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <SectionIntro
                eyebrow="Industries"
                title="Industry context shapes better risk conversations."
                copy="Every sector faces a different blend of operational, asset, liability, and people risks."
              />
              <div className="grid gap-4 sm:grid-cols-2">
                {industries.map(({ title, icon: Icon }) => (
                  <div
                    key={title}
                    className="flex min-w-0 items-center gap-4 border-b border-border py-5"
                  >
                    <Icon
                      className="size-6 shrink-0 text-primary"
                      strokeWidth={1.6}
                    />
                    <span className="min-w-0 text-sm font-semibold text-ink">
                      {title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-9 grid gap-5 sm:grid-cols-3">
              {[
                {
                  asset: industryAsset,
                  small: industrySmall,
                  title: "Manufacturing",
                  alt: "Precision electronics work in a manufacturing setting",
                },
                {
                  asset: constructionAsset,
                  small: constructionSmall,
                  title: "Infrastructure & Construction",
                  alt: "Construction professionals working on an infrastructure site",
                },
                {
                  asset: logisticsAsset,
                  small: logisticsSmall,
                  title: "Logistics & Warehousing",
                  alt: "Cargo containers at a freight terminal",
                },
              ].map(({ asset, small, title, alt }) => (
                <figure key={title}>
                  <div className="aspect-[3/2] overflow-hidden rounded-md">
                    <img
                      src={asset.url}
                      srcSet={`${small.url} 480w, ${asset.url} 800w`}
                      sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 1279px) 31vw, 390px"
                      alt={alt}
                      width={800}
                      height={533}
                      loading="lazy"
                      decoding="async"
                      className="size-full object-cover"
                    />
                  </div>
                  <figcaption className="border-b border-border py-3 text-sm font-semibold text-ink">
                    {title}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section
          id="claims"
          className="scroll-mt-20 bg-secondary py-14 lg:py-20"
        >
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <SectionIntro
                eyebrow="Claims assistance"
                title="Clear support when it matters most."
                copy="We help you understand requirements, organise information, and coordinate throughout the claims process."
              />
              <Button asChild size="lg" className="w-fit">
                <a href="#contact">
                  Need help with a claim? <ArrowRight />
                </a>
              </Button>
            </div>
            <div className="mt-14 grid gap-5 lg:grid-cols-4">
              {claimSteps.map(
                ({ number, title, detail, icon: Icon }, index) => (
                  <article key={title} className="relative border-t border-border py-5">
                    <div className="flex items-center justify-between">
                      <Icon className="size-6 text-primary" />
                      <span className="font-mono text-xs text-muted-foreground">
                        {number}
                      </span>
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-ink">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-ink-soft">
                      {detail}
                    </p>
                    {index < claimSteps.length - 1 && (
                      <ChevronRight className="absolute -right-4 top-1/2 z-10 hidden size-7 rounded-full bg-primary p-1 text-primary-foreground lg:block" />
                    )}
                  </article>
                ),
              )}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="scroll-mt-20 bg-card py-14 lg:py-20"
        >
          <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.78fr_1.22fr] lg:px-8">
            <div>
              <SectionIntro
                eyebrow="Start a conversation"
                title="Let’s understand your insurance needs."
                copy="Share a few details and our team can follow up to discuss the next step. This form does not submit to a server yet."
              />
              <div className="mt-10 space-y-5 text-sm text-ink-soft">
                <a
                  href="mailto:info@gitvisha.com"
                  className="flex items-center gap-3 hover:text-primary"
                >
                  <Mail className="size-5 text-primary" />
                  info@gitvisha.com
                </a>
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="flex items-center gap-3 hover:text-primary"
                >
                  <Phone className="size-5 text-primary" />
                  +91 XXXXX XXXXX
                </a>
                <p className="flex items-center gap-3">
                  <Building2 className="size-5 text-primary" />
                  Delhi NCR, India
                </p>
              </div>
            </div>

            <form
              onSubmit={submitForm}
              className="grid gap-5 rounded-lg border border-border bg-background p-6 shadow-sm sm:grid-cols-2 sm:p-8"
              noValidate
            >
              <Field label="Name" id="name">
                <Input
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  placeholder="Your full name"
                  className="h-11 bg-card"
                />
              </Field>
              <Field label="Company Name" id="company">
                <Input
                  id="company"
                  name="company"
                  required
                  minLength={2}
                  placeholder="Company or organisation"
                  className="h-11 bg-card"
                />
              </Field>
              <Field label="Phone" id="phone">
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  pattern="[0-9+() -]{8,}"
                  placeholder="Your phone number"
                  className="h-11 bg-card"
                />
              </Field>
              <Field label="Email" id="email">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="h-11 bg-card"
                />
              </Field>

              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="requirement">Insurance Requirement</Label>
                <select
                  id="requirement"
                  name="requirement"
                  required
                  value={requirement}
                  onChange={(event) => setRequirement(event.target.value)}
                  className="h-11 w-full rounded-md border border-input bg-card px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="" disabled>
                    Select a requirement
                  </option>
                  {solutions.map((item) => (
                    <option key={item.title}>{item.title}</option>
                  ))}
                  <option>Claims Assistance</option>
                  <option>Other / Not Sure</option>
                </select>
              </div>

              <Field label="Message" id="message" wide>
                <Textarea
                  id="message"
                  name="message"
                  required
                  minLength={10}
                  placeholder="Tell us briefly about your requirement"
                  className="min-h-28 bg-card"
                />
              </Field>

              <div className="flex flex-col items-start gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-sm text-xs leading-5 text-muted-foreground">
                  By submitting, you are requesting a follow-up. No information
                  is sent or stored in this website preview.
                </p>
                <Button type="submit" size="lg" className="shrink-0">
                  Send Enquiry <ArrowRight />
                </Button>
              </div>

              {submitted && (
                <div
                  role="status"
                  className="flex items-start gap-3 rounded-md border border-primary/30 bg-secondary p-4 text-sm text-ink sm:col-span-2"
                >
                  <CircleCheck className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span>
                    <strong>Thank you.</strong> Your form is complete. Because
                    this is a website preview, it has not been sent; please
                    email info@gitvisha.com.
                  </span>
                </div>
              )}
            </form>
          </div>
        </section>
      </div>

      <SiteFooter />
    </div>
  );
}

function Field({
  label,
  id,
  wide,
  children,
}: {
  label: string;
  id: string;
  wide?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={`space-y-2 ${wide ? "sm:col-span-2" : ""}`}>
      <Label htmlFor={id}>{label}</Label>
      {children}
    </div>
  );
}

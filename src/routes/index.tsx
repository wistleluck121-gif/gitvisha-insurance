import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { ProductSelector } from "@/components/insurance/product-selector";
import engineeringImg from "@/assets/products/engineering.jpg";
import propertyFireImg from "@/assets/products/property-fire.jpg";
import marineImg from "@/assets/products/marine.jpg";
import solarPumpingImg from "@/assets/products/solar-pumping.jpg";
import commercialPropertyImg from "@/assets/products/commercial-property.jpg";
import groupHealthImg from "@/assets/products/group-health.jpg";
import motorFleetImg from "@/assets/products/motor-fleet.jpg";
import workmenSafetyImg from "@/assets/products/workmen-safety.jpg";
import electronicEquipmentImg from "@/assets/products/electronic-equipment.jpg";
import corporateLiabilityImg from "@/assets/products/corporate-liability.jpg";
import roadConstructionImg from "@/assets/products/road-construction.jpg";
import clientsFirstImg from "@/assets/products/clients-first.jpg";
import corporateTeamImg from "@/assets/products/corporate-team.jpg";
import { strengths } from "@/lib/insurance/shared";
import sbiLogo from "@/assets/sbi.webp";
import iciciLogo from "@/assets/icici.webp";
import hdfcLogo from "@/assets/hdfc.webp";
import tataLogo from "@/assets/TATA.webp";
import kotakLogo from "@/assets/kotak.webp";
import starHealthLogo from "@/assets/starhealth.webp";
import iffcoTokioLogo from "@/assets/iffcotokio.webp";
import newIndiaLogo from "@/assets/newindia.png";
import unitedIndiaLogo from "@/assets/unitedindia.jpg";
import orientalLogo from "@/assets/oriental.png";
import nationalLogo from "@/assets/national.png";
import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  Building2,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleCheck,
  Clock,
  ClipboardCheck,
  Download,
  FileSearch,
  Flame,
  HeartPulse,
  Landmark,
  Mail,
  Phone,
  PhoneCall,
  Scale,
  Server,
  ShieldCheck,
  Ship,
  Sparkles,
  Store,
  Sun,
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
        content: "Insurance and risk advisory shaped around what matters to you.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

type SolutionItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  img: string;
  alt: string;
  slug?: string;
  isDedicated?: boolean;
  to?: "/car-insurance" | "/health-insurance";
  highlight: string;
  isFeatured?: boolean;
};

const solutions: SolutionItem[] = [
  {
    title: "Property & Fire Insurance",
    description: "Protection for factory buildings, warehouse stock, machinery, and commercial real estate.",
    icon: Flame,
    img: propertyFireImg,
    alt: "Industrial property, commercial warehouse and fire asset protection",
    slug: "property-fire-insurance",
    highlight: "SFSP & Reinstatement Value",
  },
  {
    title: "Solar & Renewable Energy",
    description:
      "All-risk engineering cover for solar parks, rooftop PV, solar irrigation pumps, and generation loss.",
    icon: Sun,
    img: solarPumpingImg,
    alt: "Solar photovoltaic panels, solar power plant arrays and renewable energy infrastructure",
    slug: "solar-pumping-insurance",
    highlight: "Featured · PV & Solar Parks",
    isFeatured: true,
  },
  {
    title: "Engineering & Projects",
    description:
      "Coverage for contractors all risks (CAR), erection (EAR), civil projects, and machinery breakdown.",
    icon: Wrench,
    img: engineeringImg,
    alt: "Engineering infrastructure, civil construction equipment and heavy plant machinery",
    slug: "engineering-insurance",
    highlight: "CAR / EAR & Machinery",
  },
  {
    title: "Marine & Transit Insurance",
    description:
      "Inland transit and sea cargo protection across domestic trade corridors and global supply chains.",
    icon: Ship,
    img: marineImg,
    alt: "Container ship cargo, freight logistics and multi-modal transit protection",
    slug: "marine-insurance",
    highlight: "ICC-A & Transit All Risks",
  },
  {
    title: "Corporate Liability & Legal",
    description:
      "Considered protection for commercial public liability, product liability, and directors & officers (D&O).",
    icon: Scale,
    img: corporateLiabilityImg,
    alt: "Corporate courtroom legal indemnity, corporate liability and third-party protection",
    slug: "liability-insurance",
    highlight: "Commercial & Third-Party",
  },
  {
    title: "Car & Fleet Insurance",
    description:
      "Comprehensive, own-damage, zero-depreciation, and fleet protection with network cashlessness.",
    icon: Truck,
    img: motorFleetImg,
    alt: "Commercial logistics fleet, company vehicles and private car protection",
    isDedicated: true,
    to: "/car-insurance",
    highlight: "Zero-Dep & Engine Protect",
  },
  {
    title: "Health & Group Mediclaim",
    description:
      "Individual, family floater, and corporate group health (GMC) with cashless access across 10,000+ hospitals.",
    icon: HeartPulse,
    img: groupHealthImg,
    alt: "Healthcare professionals, employee workforce wellness and family medical coverage",
    isDedicated: true,
    to: "/health-insurance",
    highlight: "No Room-Rent Cap & 80D",
  },
  {
    title: "Corporate, Cyber & Specialty",
    description:
      "Bespoke risk management solutions for electronic equipment, cyber liability, and specialty risks.",
    icon: ShieldCheck,
    img: electronicEquipmentImg,
    alt: "IT data center servers, electronic equipment and cyber risk infrastructure",
    slug: "corporate-specialty-risks",
    highlight: "Tailored Master Contracts",
  },
];

const industries = [
  { title: "Manufacturing", slug: "manufacturing", icon: Building2 },
  { title: "Infrastructure & Construction", slug: "infrastructure-construction", icon: Landmark },
  { title: "Renewable Energy & Solar", slug: "renewable-energy-solar", icon: Sun },
  { title: "Logistics & Warehousing", slug: "logistics-warehousing", icon: Warehouse },
  { title: "IT, Tech & Corporate", slug: "it-tech-corporate", icon: Server },
  { title: "Healthcare & Pharmaceuticals", slug: "healthcare-pharmaceuticals", icon: HeartPulse },
  { title: "Retail, Hospitality & Commercial", slug: "retail-hospitality", icon: Store },
];

const claimSteps = [
  {
    number: "01",
    title: "Intimate & Verify",
    detail:
      "Immediate loss notification to the insurer. We review your policy schedule, active endorsements, and eligibility.",
    highlight: "Timeline Compliance",
    icon: PhoneCall,
  },
  {
    number: "02",
    title: "Preserve & Document",
    detail:
      "Guided checklists for photographic evidence, FIR/survey documents, invoices, and loss estimates.",
    highlight: "Documentation Advocacy",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Surveyor Liaison",
    detail:
      "Coordination with IRDAI-licensed independent surveyors for site inspection and fair damage valuation.",
    highlight: "Fair Assessment",
    icon: FileSearch,
  },
  {
    number: "04",
    title: "Settlement & Release",
    detail:
      "Active escalation with insurer claims management desks through approval, DV generation, and disbursement.",
    highlight: "Timely Settlement",
    icon: ShieldCheck,
  },
];

function SectionIntro({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="mb-2 text-xs font-bold uppercase tracking-wider text-primary sm:mb-4">{eyebrow}</p>
      <h2 className="text-2xl font-semibold leading-tight text-ink sm:text-3xl lg:text-4xl">{title}</h2>
      {copy && <p className="mt-3 text-xs leading-relaxed text-ink-soft sm:mt-5 sm:text-sm sm:leading-7">{copy}</p>}
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

const marqueeRow1 = [
  { name: "SBI General Insurance", src: sbiLogo },
  { name: "ICICI Lombard", src: iciciLogo },
  { name: "HDFC ERGO", src: hdfcLogo },
  { name: "TATA AIG", src: tataLogo },
  { name: "Zurich Kotak", src: kotakLogo },
  { name: "Star Health Insurance", src: starHealthLogo },
  { name: "IFFCO-Tokio General Insurance", src: iffcoTokioLogo },
];

const marqueeRow2 = [
  { name: "The New India Assurance", src: newIndiaLogo },
  { name: "United India Insurance", src: unitedIndiaLogo, isWide: true },
  { name: "The Oriental Insurance Company", src: orientalLogo },
  { name: "National Insurance", src: nationalLogo },
  { name: "The New India Assurance", src: newIndiaLogo },
  { name: "United India Insurance", src: unitedIndiaLogo, isWide: true },
  { name: "The Oriental Insurance Company", src: orientalLogo },
  { name: "National Insurance", src: nationalLogo },
];

function HomePage() {
  const [submitted, setSubmitted] = useState(false);
  const [requirement, setRequirement] = useState("");
  const [mailtoHref, setMailtoHref] = useState("");
  const [showAllSolutions, setShowAllSolutions] = useState(false);

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const d = new FormData(form);
    const name = d.get("name") || "";
    const phone = d.get("phone") || "";
    const email = d.get("email") || "";
    const company = d.get("company") || "Not specified";
    const req = d.get("requirement") || requirement || "General Enquiry";
    const timeline = d.get("timeline") || "Immediate";
    const message = d.get("message") || "";

    const mailtoBody = encodeURIComponent(
      `CONSULTATION & RISK ENQUIRY — GITVISHA\n` +
        `-----------------------------------------\n` +
        `Name: ${name}\n` +
        `Phone: ${phone}\n` +
        `Email: ${email}\n` +
        `Company / Asset: ${company}\n` +
        `Insurance Category: ${req}\n` +
        `Timeline / Priority: ${timeline}\n\n` +
        `Requirement Details:\n${message}\n` +
        `-----------------------------------------\n` +
        `Submitted via gitvisha.com Consultation Desk`,
    );

    const generatedMailto = `mailto:info@gitvisha.com?subject=${encodeURIComponent("Insurance Enquiry — " + req + " (" + name + ")")}&body=${mailtoBody}`;
    setMailtoHref(generatedMailto);
    setSubmitted(true);
    window.location.href = generatedMailto;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <div>
        <section id="home" className="scroll-mt-20 border-b border-border bg-secondary">
          {/* First Screen / Hero Section Above The Fold */}
          <div className="relative isolate overflow-hidden border-b border-border bg-background pt-5 pb-7 sm:py-9 lg:py-12">
            {/* Ambient Background Depth & Subtle Grid */}
            <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden" aria-hidden="true">
              {/* Radial gradient wash */}
              <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1100px] h-[450px] bg-[radial-gradient(ellipse_50%_50%_at_50%_0%,rgba(14,165,233,0.13),transparent_70%)] opacity-85" />
              {/* Luminous aura behind 3D logo */}
              <div className="absolute top-1/2 -translate-y-1/2 right-4 lg:right-16 w-[440px] h-[440px] rounded-full bg-gradient-to-tr from-primary/14 via-cyan-500/10 to-pink-500/10 blur-3xl opacity-80" />
              {/* Soft primary light bloom on left */}
              <div className="absolute -bottom-24 left-8 w-[380px] h-[380px] rounded-full bg-primary/7 blur-3xl opacity-60" />
              {/* Fine architectural grid overlay with smooth radial edge fade */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800c_1px,transparent_1px),linear-gradient(to_bottom,#8080800c_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_60%,transparent_100%)]" />
            </div>

            <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1.18fr_0.82fr] lg:gap-12 lg:px-8">
              {/* Left Column: Messaging, CTAs, and Trust Metrics */}
              <div className="relative z-10 flex flex-col items-start text-left">
                {/* Live Status Eyebrow Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary shadow-2xs backdrop-blur-xs transition-all hover:border-primary/40">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                    <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-ink sm:text-xs">
                    Independent Broking &amp; Risk Advisory
                  </span>
                  <span className="text-ink-soft">·</span>
                  <span className="text-[11px] font-medium text-ink-soft">
                    IRDAI-Regulated Insurers
                  </span>
                </div>

                {/* Primary Headline */}
                <h1 className="mt-3.5 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.12]">
                  Protecting What Matters.
                  <br />
                  <span className="home-pink-accent font-display">Securing What&apos;s Ahead.</span>
                </h1>

                {/* Refined Value Proposition */}
                <p className="mt-3.5 max-w-2xl text-xs leading-relaxed text-ink-soft sm:mt-5 sm:text-sm md:text-base sm:leading-7">
                  Thoughtful corporate and personal insurance broking tailored around real-world exposures. We benchmark policies across India&apos;s top 15+ insurers, eliminate underinsurance traps, and deliver relentless claims advocacy when it matters most.
                </p>

                {/* High-Impact CTAs */}
                <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-7">
                  <Button asChild size="lg" className="h-11 sm:h-12 px-6 shadow-md shadow-primary/20 font-semibold text-xs sm:text-sm transition-all hover:shadow-lg hover:shadow-primary/30">
                    <a href="#contact" onClick={() => setRequirement("General Insurance Consultation")}>
                      Get an Advisory Quote <ArrowRight className="ml-1.5 size-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>

                  <Button asChild variant="outline" size="lg" className="h-11 sm:h-12 px-5 sm:px-6 font-semibold text-xs sm:text-sm border-border bg-card/80 hover:bg-secondary">
                    <Link to="/claims">
                      <ShieldCheck className="mr-1.5 size-4 text-primary" />
                      Claims Assistance Desk
                    </Link>
                  </Button>
                </div>

                {/* Trust Proof Points / Live Highlights Strip */}
                <div className="mt-7 pt-5 border-t border-border/80 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 w-full">
                  <div className="flex items-center gap-2.5">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <ShieldCheck className="size-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-ink">15+ Partners</p>
                      <p className="text-[10px] text-ink-soft">PSU &amp; Private Insurers</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <HeartPulse className="size-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-ink">10,000+ Cashless</p>
                      <p className="text-[10px] text-ink-soft">Hospitals &amp; Garages</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                      <Scale className="size-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-ink">100% Unbiased</p>
                      <p className="text-[10px] text-ink-soft">Client-First Advocacy</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400">
                      <Clock className="size-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-ink">&lt; 2 Hr Callback</p>
                      <p className="text-[10px] text-ink-soft">Dedicated Advisory SLA</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Preserved 3D Logo in a Premium Presentation Framework */}
              <div className="relative mx-auto flex w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] items-center justify-center">
                {/* Floating Micro-Badge Top Right */}
                <div className="hidden lg:flex absolute -top-1 -right-3 z-20 items-center gap-2.5 rounded-xl border border-border/80 bg-card/95 px-3 py-2 shadow-lg backdrop-blur-md transition-all hover:scale-105">
                  <div className="flex size-7 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                    <ShieldCheck className="size-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-[11px] font-bold text-ink">Zero Room-Rent Cap</p>
                    <p className="text-[9.5px] text-ink-soft">100% Cashless Approvals</p>
                  </div>
                </div>

                {/* Floating Micro-Badge Bottom Left */}
                <div className="hidden lg:flex absolute -bottom-1 -left-3 z-20 items-center gap-2.5 rounded-xl border border-border/80 bg-card/95 px-3 py-2 shadow-lg backdrop-blur-md transition-all hover:scale-105">
                  <div className="flex size-7 items-center justify-center rounded-lg bg-primary/15 text-primary">
                    <Sparkles className="size-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-[11px] font-bold text-ink">Multi-Crore Capacity</p>
                    <p className="text-[9.5px] text-ink-soft">Industrial &amp; Corporate Risks</p>
                  </div>
                </div>

                {/* The Original 3D Logo Visual Component - Exactly Intact */}
                <RiskIntelligenceVisual />
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-4 pb-8 pt-6 sm:px-6 sm:pb-12 sm:pt-8 lg:px-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between border-b border-border/60 pb-4">
              <div>
                <div className="inline-flex items-center gap-2 mb-1.5">
                  <span className="flex size-2 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                    Coverage Discovery Engine
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-ink">
                  What would you like to protect?
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-ink-soft">
                  Select an asset class to explore engineered corporate, motor, health, and transit protection.
                </p>
              </div>

              <a
                href="#solutions"
                className="group inline-flex items-center gap-2 self-start sm:self-auto rounded-full border border-border/80 bg-card px-4 py-2 text-xs font-bold text-primary shadow-2xs backdrop-blur-xs transition-all hover:border-primary/40 hover:bg-secondary hover:shadow-xs"
              >
                <span>Explore all solutions</span>
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <ProductSelector onEnquire={setRequirement} />
          </div>
        </section>

        <section aria-label="Insurance companies" className="insurer-marquee-section">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <p className="mb-8 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Insurance Companies &amp; Underwriting Partners
            </p>

            <div className="insurer-marquee-container">
              {/* Row 1: Forward scroll */}
              <div className="insurer-marquee">
                <div className="insurer-marquee-track">
                  {[0, 1].map((copy) => (
                    <div className="insurer-marquee-group" key={copy} aria-hidden={copy === 1}>
                      {marqueeRow1.map((logo) => (
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

              {/* Row 2: Reverse scroll */}
              <div className="insurer-marquee">
                <div className="insurer-marquee-track-reverse">
                  {[0, 1].map((copy) => (
                    <div className="insurer-marquee-group" key={copy} aria-hidden={copy === 1}>
                      {marqueeRow2.map((logo, index) => (
                        <div
                          className={`insurer-logo-item ${logo.isWide ? "insurer-logo-item-wide" : ""}`}
                          key={`${logo.name}-${index}`}
                        >
                          <img
                            src={logo.src}
                            alt={copy === 0 ? logo.name : ""}
                            loading="lazy"
                            decoding="async"
                            className={logo.isWide ? "insurer-logo-large" : ""}
                          />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DEDICATED SOLAR & RENEWABLE ENERGY INSURANCE SECTION */}
        <section
          id="renewable-energy"
          className="scroll-mt-20 border-b border-border bg-gradient-to-br from-amber-500/5 via-background to-emerald-500/5 py-12 sm:py-16 lg:py-20"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                  <Sun className="size-4 text-amber-600 dark:text-amber-400" />
                  <span>Featured Solution · Clean Tech &amp; Renewable Energy</span>
                </div>

                <h2 className="mt-3.5 text-2xl font-bold leading-tight text-ink sm:text-3xl md:text-4xl lg:text-[2.5rem]">
                  Solar &amp; Renewable Energy Insurance
                  <span className="block text-primary font-display mt-1">
                    Powering Green Infrastructure with Guaranteed Security
                  </span>
                </h2>

                <p className="mt-3.5 text-xs leading-relaxed text-ink-soft sm:text-sm md:text-base sm:leading-7">
                  Renewable energy installations face harsh environmental exposures—cyclonic storms, hail damage, lightning strikes, inverter burnout, and prolonged loss of generation revenue. Gitvisha structures specialized all-risk policies tailored for utility-scale solar parks, commercial rooftop installations, solar agricultural pumping schemes, and wind turbine assets.
                </p>

                {/* Key Capability Highlights */}
                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3.5">
                  <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-3 shadow-2xs">
                    <Sun className="mt-0.5 size-4.5 shrink-0 text-amber-600 dark:text-amber-400" />
                    <div>
                      <h4 className="text-xs font-bold text-ink sm:text-sm">Solar Arrays &amp; Inverters</h4>
                      <p className="mt-0.5 text-[11px] leading-relaxed text-ink-soft">
                        Complete physical damage cover for mono/bifacial PV modules, string inverters &amp; HT switchyards.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-3 shadow-2xs">
                    <Zap className="mt-0.5 size-4.5 shrink-0 text-primary" />
                    <div>
                      <h4 className="text-xs font-bold text-ink sm:text-sm">Generation Loss (ALOP)</h4>
                      <p className="mt-0.5 text-[11px] leading-relaxed text-ink-soft">
                        Revenue interruption indemnity safeguarding tariff cash flows and debt service during outages.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-3 shadow-2xs">
                    <ShieldCheck className="mt-0.5 size-4.5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                    <div>
                      <h4 className="text-xs font-bold text-ink sm:text-sm">Extreme Weather Perils</h4>
                      <p className="mt-0.5 text-[11px] leading-relaxed text-ink-soft">
                        Tailored safeguards against gale wind shears, heavy hail, lightning surge, and flash floods.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-3 shadow-2xs">
                    <CheckCircle2 className="mt-0.5 size-4.5 shrink-0 text-primary" />
                    <div>
                      <h4 className="text-xs font-bold text-ink sm:text-sm">Multi-Crore Capacity</h4>
                      <p className="mt-0.5 text-[11px] leading-relaxed text-ink-soft">
                        Underwritten with India's premier public and private general insurance consortia.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Button asChild size="default" className="sm:size-lg shadow-sm">
                    <Link to="/products/$productSlug" params={{ productSlug: "solar-pumping-insurance" }}>
                      Explore Renewable Energy Cover <ArrowRight className="ml-1.5 size-4" />
                    </Link>
                  </Button>

                  <Button asChild variant="outline" size="default" className="sm:size-lg">
                    <a
                      href="/brochures/gitvisha-solar-pumping-brochure.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Download className="size-4" />
                      Download Solar Brochure (PDF)
                    </a>
                  </Button>

                  <Button asChild variant="ghost" size="default" className="text-xs font-semibold text-primary">
                    <Link to="/industries/$industrySlug" params={{ industrySlug: "renewable-energy-solar" }}>
                      Sector Risk Profile <ChevronRight className="ml-1 size-3.5" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Visual Card with Image & Overlays */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
                  <div className="aspect-[4/3] w-full overflow-hidden bg-secondary">
                    <img
                      src={solarPumpingImg}
                      alt="Solar power plant panels, agricultural solar pumping and renewable energy infrastructure"
                      width={1000}
                      height={750}
                      loading="lazy"
                      decoding="async"
                      className="size-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                    <span className="rounded-md bg-background/90 px-2.5 py-1 text-[11px] font-bold text-ink backdrop-blur-xs shadow-xs">
                      Clean Energy Protection
                    </span>
                    <span className="rounded-full bg-emerald-500/90 px-2.5 py-0.5 text-[10px] font-bold text-white shadow-xs">
                      IRDAI-Regulated Insurers
                    </span>
                  </div>

                  {/* Bottom Caption / Floating details */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                    <p className="text-sm font-bold sm:text-base">
                      Utility-Scale PV · Commercial Rooftops · Solar Pumping Assets
                    </p>
                    <p className="mt-1 text-xs text-white/80 leading-relaxed">
                      All-risk machinery breakdown, electrical surge, and natural peril insurance with fast-track claims support.
                    </p>
                  </div>
                </div>

                {/* Decorative floating stats card */}
                <div className="hidden sm:flex absolute -bottom-4 -left-4 items-center gap-3 rounded-xl border border-border bg-card/95 p-3.5 shadow-xl backdrop-blur-md">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-amber-500/15 text-amber-600 dark:text-amber-400">
                    <Sun className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-ink">Zero Generation Loss Ambiguity</p>
                    <p className="text-[10px] text-ink-soft">Direct Surveyor Liaison &amp; ALOP Protection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INSURANCE SOLUTIONS SECTION - LINKED TO RESPECTIVE PRODUCT PAGES */}
        <section id="solutions" className="scroll-mt-20 bg-background py-10 sm:py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end sm:gap-6">
              <SectionIntro
                eyebrow="Insurance solutions"
                title="Protection structured around real-world risk."
                copy="From core business assets to complex corporate exposures, explore our dedicated coverage solutions designed to solve real claim vulnerabilities."
              />
              <a
                href="#contact"
                onClick={() => setRequirement("Portfolio Risk Review")}
                className="hidden text-xs font-semibold text-primary hover:underline sm:inline-flex sm:items-center sm:gap-1.5"
              >
                Need custom risk advice? <ArrowRight size={14} />
              </a>
            </div>

            <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4">
              {solutions.map((item, index) => {
                const Icon = item.icon;
                const isHiddenOnMobile = index >= 4 && !showAllSolutions;
                const cardContent = (
                  <article
                    className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-xl border bg-card shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                      item.isFeatured
                        ? "border-amber-500/50 hover:border-amber-500"
                        : "border-border hover:border-primary"
                    }`}
                  >
                    <div>
                      {/* Visual Image Header */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-secondary">
                        <img
                          src={item.img}
                          alt={item.alt}
                          width={600}
                          height={375}
                          loading="lazy"
                          decoding="async"
                          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                        {/* Overlay Badges */}
                        <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                          <span
                            className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[10.5px] font-bold shadow-xs backdrop-blur-xs ${
                              item.isFeatured
                                ? "bg-amber-500 text-white"
                                : "bg-card/90 text-primary"
                            }`}
                          >
                            <Icon className="size-3" />
                            {item.highlight}
                          </span>
                        </div>

                        <span className="absolute top-2.5 right-2.5 rounded-md bg-black/60 px-1.5 py-0.5 font-mono text-[10px] font-bold text-white/90 backdrop-blur-xs">
                          0{index + 1}
                        </span>
                      </div>

                      <div className="p-4 sm:p-5">
                        <h3 className="text-sm sm:text-base font-semibold text-ink transition-colors group-hover:text-primary">
                          {item.title}
                        </h3>
                        <p className="mt-1.5 text-xs leading-relaxed text-ink-soft">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-border px-4 py-3 sm:px-5 text-xs font-semibold text-primary">
                      <span>Explore coverage</span>
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </article>
                );

                const linkWrapperClass = `rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  isHiddenOnMobile ? "hidden sm:block" : "block"
                }`;

                return item.isDedicated && item.to ? (
                  <Link
                    key={item.title}
                    to={item.to}
                    className={linkWrapperClass}
                  >
                    {cardContent}
                  </Link>
                ) : item.slug ? (
                  <Link
                    key={item.title}
                    to="/products/$productSlug"
                    params={{ productSlug: item.slug }}
                    className={linkWrapperClass}
                  >
                    {cardContent}
                  </Link>
                ) : null;
              })}
            </div>

            {/* Mobile Expand / Collapse Toggle */}
            <div className="mt-5 text-center sm:hidden">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setShowAllSolutions((prev) => !prev)}
                className="w-full text-xs font-semibold"
              >
                {showAllSolutions ? "Show Fewer Solutions" : "View All 8 Solutions"}
              </Button>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-20 section-rule bg-card py-10 sm:py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:gap-12 sm:px-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
            <div className="space-y-6">
              <SectionIntro
                eyebrow="About Gitvisha"
                title="Advice grounded in understanding, not assumptions."
                copy="Gitvisha is an insurance broking and risk advisory firm focused on helping clients make informed protection decisions. We begin by understanding your operations, assets, people, and priorities—then work to identify relevant insurance solutions and provide support across the policy lifecycle."
              />
              <div className="relative border-l-2 border-primary pl-5 sm:pl-8">
                <p className="font-display text-lg font-medium leading-7 text-ink sm:text-xl sm:leading-8 lg:text-2xl">
                  &ldquo;Insurance should create clarity and confidence&mdash;not complexity.&rdquo;
                </p>
                <p className="mt-2.5 text-xs leading-relaxed text-ink-soft sm:text-sm sm:leading-6">
                  Our role is to help make risk easier to understand, coverage easier to evaluate, and
                  the claims process easier to navigate.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-1 sm:grid-cols-3">
                <div className="rounded-lg border border-border bg-background p-3 text-center">
                  <p className="text-lg sm:text-xl font-extrabold text-primary">100%</p>
                  <p className="text-[11px] font-medium text-ink-soft">Client-First Advocacy</p>
                </div>
                <div className="rounded-lg border border-border bg-background p-3 text-center">
                  <p className="text-lg sm:text-xl font-extrabold text-primary">Multi-Sector</p>
                  <p className="text-[11px] font-medium text-ink-soft">Domain Advisory</p>
                </div>
                <div className="col-span-2 sm:col-span-1 rounded-lg border border-border bg-background p-3 text-center">
                  <p className="text-lg sm:text-xl font-extrabold text-primary">IRDAI</p>
                  <p className="text-[11px] font-medium text-ink-soft">Regulated Partners</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-border shadow-md">
                <div className="aspect-[4/3] w-full overflow-hidden bg-secondary">
                  <img
                    src={corporateTeamImg}
                    alt="Gitvisha insurance broking and corporate risk advisory team consultation"
                    width={800}
                    height={600}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs sm:text-sm font-bold">Independent Broking &amp; Risk Advisory</p>
                  <p className="text-[11px] text-white/80">Tailored risk transfer strategies for growing enterprises</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-accent py-10 sm:py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
            <SectionIntro
              eyebrow="Why Gitvisha"
              title="A steady partner across the insurance journey."
            />
            <div className="mt-6 grid grid-cols-2 gap-2 sm:mt-10 sm:grid-cols-2 md:grid-cols-5 md:gap-px md:border-y md:border-border md:bg-border">
              {strengths.map((item, index) => (
                <div
                  key={item}
                  className="rounded-lg border border-border bg-card p-3 shadow-2xs sm:rounded-none sm:border-0 sm:bg-accent sm:p-5 sm:shadow-none"
                >
                  <span className="text-xs font-bold text-primary">0{index + 1}</span>
                  <Check className="mt-2.5 size-4 text-primary sm:mt-4" />
                  <h3 className="mt-2 text-xs font-semibold leading-snug text-ink sm:text-sm md:text-base sm:leading-6">
                    {item}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="industries" className="scroll-mt-20 bg-background py-10 sm:py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
              <div>
                <SectionIntro
                  eyebrow="Industries"
                  title="Industry context shapes better risk conversations."
                  copy="Every sector faces a different blend of operational, asset, liability, and people risks."
                />
                <div className="mt-4 sm:mt-6">
                  <Link
                    to="/industries"
                    className="inline-flex items-center gap-2 rounded-lg bg-secondary px-3.5 py-2 text-xs font-bold text-primary transition-colors hover:bg-border sm:px-4 sm:py-2.5"
                  >
                    Explore all sector risk profiles <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
              <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
                {industries.map(({ title, slug, icon: Icon }) => (
                  <Link
                    key={title}
                    to="/industries/$industrySlug"
                    params={{ industrySlug: slug }}
                    className="group flex min-w-0 items-center justify-between border-b border-border py-2.5 transition-colors hover:border-primary sm:py-4"
                  >
                    <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
                      <Icon className="size-4 shrink-0 text-primary sm:size-5" strokeWidth={1.75} />
                      <span className="min-w-0 text-xs font-semibold text-ink transition-colors group-hover:text-primary sm:text-sm">
                        {title}
                      </span>
                    </div>
                    <ArrowRight className="size-3.5 shrink-0 text-ink-soft transition-transform group-hover:translate-x-1 group-hover:text-primary sm:size-4" />
                  </Link>
                ))}
              </div>
            </div>
            <div className="mt-6 grid gap-3.5 sm:mt-9 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
              {[
                {
                  img: solarPumpingImg,
                  title: "Renewable Energy & Solar",
                  slug: "renewable-energy-solar",
                  alt: "Solar photovoltaic panels, solar power plant arrays and renewable energy infrastructure",
                  detail: "PV arrays, wind parks & ALOP generation loss cover",
                },
                {
                  img: commercialPropertyImg,
                  title: "Manufacturing & Industrial Plants",
                  slug: "manufacturing",
                  alt: "Industrial manufacturing plants and heavy machinery equipment",
                  detail: "Boilers, CNC lines, machinery breakdown & fire perils",
                },
                {
                  img: roadConstructionImg,
                  title: "Infrastructure & Heavy Construction",
                  slug: "infrastructure-construction",
                  alt: "Highway roads, bridges and infrastructure construction project works",
                  detail: "CAR / EAR contracts, CPM plant & delay in startup",
                },
                {
                  img: marineImg,
                  title: "Logistics & Supply Chains",
                  slug: "logistics-warehousing",
                  alt: "Container ship cargo, freight logistics and multi-modal transit protection",
                  detail: "Marine cargo, open policies, warehouse transit & storage",
                },
                {
                  img: electronicEquipmentImg,
                  title: "IT, Tech & Corporate",
                  slug: "it-tech-corporate",
                  alt: "IT data center servers, electronic equipment and cyber risk infrastructure",
                  detail: "Server farms, cloud equipment & cyber breach liability",
                },
                {
                  img: workmenSafetyImg,
                  title: "Workforce & Industrial Safety",
                  slug: "manufacturing",
                  alt: "Industrial safety inspection and workforce protective measures",
                  detail: "Employee compensation, group mediclaim & workplace liability",
                },
              ].map(({ img, title, slug, alt, detail }) => (
                <Link
                  key={title}
                  to="/industries/$industrySlug"
                  params={{ industrySlug: slug }}
                  className="group block overflow-hidden rounded-xl border border-border bg-card shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-md"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-secondary">
                    <img
                      src={img}
                      alt={alt}
                      width={800}
                      height={500}
                      loading="lazy"
                      decoding="async"
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    <span className="absolute bottom-2.5 left-2.5 rounded-md bg-black/60 px-2 py-0.5 text-[10.5px] font-medium text-white/95 backdrop-blur-xs">
                      {detail}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3.5 sm:p-4 text-xs font-semibold text-ink transition-colors group-hover:text-primary sm:text-sm">
                    <span>{title}</span>
                    <ArrowRight className="size-3.5 text-ink-soft transition-transform group-hover:translate-x-1 group-hover:text-primary sm:size-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* IMPROVED CLAIMS ASSISTANCE SECTION */}
        <section id="claims" className="scroll-mt-20 bg-secondary/80 py-10 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end md:gap-8">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-primary sm:text-xs">
                  <ShieldCheck className="size-3.5" /> Claims Assistance &amp; Advocacy
                </span>
                <h2 className="mt-2.5 text-2xl font-semibold leading-tight text-ink sm:mt-3 sm:text-3xl lg:text-4xl">
                  Rapid, dedicated support{" "}
                  <span className="home-pink-accent">when an incident occurs.</span>
                </h2>
                <p className="mt-2.5 text-xs leading-relaxed text-ink-soft sm:mt-4 sm:text-sm sm:leading-7 sm:text-base">
                  Insurance delivers on its promise during a claim. Gitvisha provides proactive
                  claims advocacy—from immediate loss intimation and documentation verification to
                  IRDAI surveyor liaison and settlement resolution.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                <Button asChild size="default" className="w-full sm:w-fit sm:size-lg">
                  <a href="#contact" onClick={() => setRequirement("Claims Assistance & Advocacy")}>
                    Report a Claim <ArrowRight className="ml-1 size-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="default" className="w-full sm:w-fit sm:size-lg">
                  <Link to="/claims">
                    Claims Checklist &amp; Guide <ChevronRight className="ml-1 size-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Claims process steps */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {claimSteps.map(({ number, title, detail, highlight, icon: Icon }, index) => (
                <article
                  key={title}
                  className="relative flex flex-col justify-between rounded-xl border border-border bg-card p-4 shadow-xs transition-all hover:border-primary/60 hover:shadow-md sm:p-6 sm:shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary sm:size-11">
                        <Icon className="size-4.5 sm:size-5" />
                      </span>
                      <span className="font-mono text-xs font-bold text-muted-foreground sm:text-sm">
                        {number}
                      </span>
                    </div>
                    <span className="mt-3 inline-block rounded-md bg-secondary px-2 sm:px-2.5 py-0.5 text-[10.5px] sm:text-[11px] font-semibold text-primary">
                      {highlight}
                    </span>
                    <h3 className="mt-2 text-base font-semibold text-ink sm:mt-2.5 sm:text-lg">{title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-ink-soft sm:mt-2">{detail}</p>
                  </div>

                  <div className="mt-3.5 border-t border-border pt-2.5 sm:mt-5 sm:pt-3">
                    <span className="text-[10px] font-medium text-muted-foreground sm:text-[11px]">
                      Stage 0{index + 1} of 04
                    </span>
                  </div>
                </article>
              ))}
            </div>

            {/* Emergency Claims Callout Banner */}
            <div className="mt-6 rounded-xl border border-primary/20 bg-card p-4 shadow-xs sm:mt-10 sm:p-8 sm:shadow-sm">
              <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-center">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="relative aspect-[4/3] w-full sm:w-48 shrink-0 overflow-hidden rounded-xl border border-border shadow-xs">
                    <img
                      src={clientsFirstImg}
                      alt="Dedicated claims assistance and surveyor liaison advocate supporting client"
                      width={400}
                      height={300}
                      loading="lazy"
                      decoding="async"
                      className="size-full object-cover"
                    />
                    <span className="absolute bottom-1.5 left-1.5 rounded-md bg-black/70 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur-xs">
                      Claims Advocacy
                    </span>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-ink">
                      Experiencing an active emergency or hospital admission?
                    </h4>
                    <p className="mt-1.5 text-xs leading-relaxed text-ink-soft">
                      For cashless hospitalization intimation or urgent motor accidental towing,
                      notify us immediately. Our claims desk assists with TPA pre-authorization and
                      network garage liaison.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-4 text-xs font-semibold text-ink">
                      <span className="flex items-center gap-1.5 text-primary">
                        <CheckCircle2 className="size-4" /> 24x7 Emergency Intimation
                      </span>
                      <span className="flex items-center gap-1.5 text-primary">
                        <CheckCircle2 className="size-4" /> Cashless Network Hospital Assistance
                      </span>
                      <span className="flex items-center gap-1.5 text-primary">
                        <CheckCircle2 className="size-4" /> Surveyor Documentation Advocacy
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2.5 rounded-lg bg-secondary/80 p-4 sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                      Emergency Claims Desk
                    </span>
                    <a
                      href="mailto:claims@gitvisha.com"
                      className="block text-sm font-semibold text-primary hover:underline"
                    >
                      claims@gitvisha.com
                    </a>
                  </div>
                  <Button asChild variant="outline" size="sm" className="w-fit">
                    <Link to="/claims">
                      Open Claims Guide <ArrowRight className="ml-1 size-3.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IMPROVED CONSULTATION & ENQUIRY FORM SECTION */}
        <section id="contact" className="scroll-mt-20 bg-card py-10 sm:py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:gap-12 sm:px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div>
              <SectionIntro
                eyebrow="Consultation & Risk Review"
                title="Let's understand your real-world risk."
                copy="Share your insurance requirements or existing policy details. Our certified risk advisors evaluate exposures, benchmark insurer terms, and structure coverage tailored to your priorities."
              />

              {/* Advisory Commitments */}
              <div className="mt-5 space-y-2.5 sm:mt-8 sm:space-y-4">
                <div className="flex items-start gap-3 rounded-lg border border-border bg-background p-3.5 shadow-2xs sm:gap-3.5 sm:p-4">
                  <ShieldCheck className="mt-0.5 size-4.5 shrink-0 text-primary sm:size-5" />
                  <div>
                    <h4 className="text-xs font-semibold text-ink sm:text-sm">
                      Independent Advisory Advantage
                    </h4>
                    <p className="mt-0.5 text-xs leading-relaxed text-ink-soft">
                      Unbiased policy structuring and rates benchmarked across India's leading
                      private and public general insurers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg border border-border bg-background p-3.5 shadow-2xs sm:gap-3.5 sm:p-4">
                  <Clock className="mt-0.5 size-4.5 shrink-0 text-primary sm:size-5" />
                  <div>
                    <h4 className="text-xs font-semibold text-ink sm:text-sm">Rapid Response SLA</h4>
                    <p className="mt-0.5 text-xs leading-relaxed text-ink-soft">
                      Direct callback and preliminary risk consultation within 2 business hours.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg border border-border bg-background p-3.5 shadow-2xs sm:gap-3.5 sm:p-4">
                  <CheckCircle2 className="mt-0.5 size-4.5 shrink-0 text-primary sm:size-5" />
                  <div>
                    <h4 className="text-xs font-semibold text-ink sm:text-sm">Confidential &amp; Zero Spam</h4>
                    <p className="mt-0.5 text-xs leading-relaxed text-ink-soft">
                      Your asset and operational data is strictly used for underwriting evaluation
                      and never shared with third-party aggregators.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Channels */}
              <div className="mt-5 rounded-xl border border-border bg-secondary/50 p-4 text-xs sm:mt-8 sm:p-5 sm:text-sm text-ink-soft">
                <span className="text-[11px] font-bold uppercase tracking-wider text-ink sm:text-xs">
                  Direct Communication Channels
                </span>
                <div className="mt-3 space-y-2.5 sm:mt-3.5 sm:space-y-3">
                  <a
                    href="mailto:info@gitvisha.com"
                    className="flex items-center gap-2.5 transition-colors hover:text-primary sm:gap-3"
                  >
                    <Mail className="size-4 shrink-0 text-primary" />
                    <span>
                      Advisory Desk: <strong>info@gitvisha.com</strong>
                    </span>
                  </a>
                  <a
                    href="mailto:claims@gitvisha.com"
                    className="flex items-center gap-2.5 transition-colors hover:text-primary sm:gap-3"
                  >
                    <ShieldCheck className="size-4 shrink-0 text-primary" />
                    <span>
                      Claims Escalations: <strong>claims@gitvisha.com</strong>
                    </span>
                  </a>
                  <p className="flex items-center gap-2.5 sm:gap-3">
                    <Building2 className="size-4 shrink-0 text-primary" />
                    <span>Delhi NCR, India · Mon–Sat (9:30 AM – 6:30 PM IST)</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Upgraded Form Card */}
            <form
              onSubmit={submitForm}
              className="grid gap-4 rounded-xl border border-border bg-background p-4 shadow-sm sm:grid-cols-2 sm:gap-5 sm:p-8"
              noValidate
            >
              <div className="sm:col-span-2">
                <div className="flex items-center justify-between border-b border-border pb-3 sm:pb-4">
                  <div>
                    <h3 className="text-base font-semibold text-ink sm:text-lg">Request a Consultation</h3>
                    <p className="mt-0.5 text-xs text-ink-soft">Fields marked * are required.</p>
                  </div>
                  <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary sm:size-9">
                    <Mail className="size-4 sm:size-5" />
                  </span>
                </div>
              </div>

              <Field label="Full Name *" id="name">
                <Input
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  placeholder="e.g. Rajesh Sharma"
                  className="h-10 sm:h-11 bg-card text-base sm:text-sm"
                />
              </Field>

              <Field label="Phone Number *" id="phone">
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  pattern="[0-9+() -]{8,}"
                  placeholder="+91 98765 43210"
                  className="h-10 sm:h-11 bg-card text-base sm:text-sm"
                />
              </Field>

              <Field label="Work / Personal Email *" id="email">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="h-10 sm:h-11 bg-card text-base sm:text-sm"
                />
              </Field>

              <Field label="Company / Entity / Vehicle" id="company">
                <Input
                  id="company"
                  name="company"
                  placeholder="e.g. Acme Corp or Vehicle Reg"
                  className="h-10 sm:h-11 bg-card text-base sm:text-sm"
                />
              </Field>

              <div className="space-y-1.5 sm:col-span-2 sm:space-y-2">
                <Label htmlFor="requirement" className="text-xs font-medium sm:text-sm">Insurance Requirement *</Label>
                <select
                  id="requirement"
                  name="requirement"
                  required
                  value={requirement}
                  onChange={(event) => setRequirement(event.target.value)}
                  className="h-10 sm:h-11 w-full rounded-md border border-input bg-card px-3 text-base sm:text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="" disabled>
                    Select an insurance solution *
                  </option>
                  <optgroup label="Motor &amp; Vehicles">
                    <option value="Car Insurance">Car Insurance (Comprehensive / Zero-Dep)</option>
                    <option value="Bike Insurance">Bike Insurance (Two-Wheeler)</option>
                    <option value="Commercial Vehicle Insurance">
                      Commercial Vehicle &amp; Fleet Protection
                    </option>
                    <option value="Motor Insurance">Motor Insurance (General Enquiry)</option>
                  </optgroup>
                  <optgroup label="Health &amp; People">
                    <option value="Health Insurance">
                      Individual &amp; Family Health Insurance
                    </option>
                    <option value="Group Health Insurance">
                      Corporate Group Health Mediclaim (GMC)
                    </option>
                    <option value="Personal Accident Insurance">Personal Accident Insurance</option>
                    <option value="Health & People">Health &amp; People (General Enquiry)</option>
                  </optgroup>
                  <optgroup label="Property &amp; Business Assets">
                    <option value="Property & Fire Insurance">
                      Property &amp; Fire Insurance (SFSP)
                    </option>
                    <option value="Business Interruption">Business Interruption Insurance</option>
                    <option value="Stock Declaration Insurance">Stock Declaration Policy</option>
                    <option value="Business Insurance">Business Insurance (General Enquiry)</option>
                  </optgroup>
                  <optgroup label="Engineering &amp; Infrastructure">
                    <option value="Engineering Insurance">
                      Engineering Insurance (CAR / EAR / CPM)
                    </option>
                    <option value="Solar Pumping Insurance">
                      Solar Pumping &amp; Renewable Energy
                    </option>
                    <option value="Road Insurance">Road &amp; Highway Infrastructure</option>
                  </optgroup>
                  <optgroup label="Marine, Liability &amp; Specialty">
                    <option value="Marine Insurance">Marine Cargo &amp; Transit Insurance</option>
                    <option value="Marine & Transit">Marine &amp; Transit (General Enquiry)</option>
                    <option value="Liability Insurance">
                      Liability Insurance (CGL / D&amp;O / Cyber)
                    </option>
                    <option value="Specialty & Corporate Risks">
                      Specialty &amp; Corporate Risks
                    </option>
                  </optgroup>
                  <optgroup label="Claims &amp; Risk Audit">
                    <option value="Claims Assistance & Advocacy">
                      Claims Assistance &amp; Advocacy
                    </option>
                    <option value="Portfolio Risk Review">
                      Portfolio Risk Review &amp; Rate Audit
                    </option>
                    <option value="Other / Not Sure">Other / Custom Requirement</option>
                  </optgroup>
                </select>
              </div>

              <div className="space-y-1.5 sm:col-span-2 sm:space-y-2">
                <Label htmlFor="timeline" className="text-xs font-medium sm:text-sm">Policy Timeline / Priority</Label>
                <select
                  id="timeline"
                  name="timeline"
                  className="h-10 sm:h-11 w-full rounded-md border border-input bg-card px-3 text-base sm:text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  defaultValue="New Policy Enquiry"
                >
                  <option value="New Policy Enquiry">New Policy Setup (Immediate)</option>
                  <option value="Renewal within 30 Days">
                    Policy Expiring / Renewal within 30 Days
                  </option>
                  <option value="NCB Transfer & Renewal Benchmark">
                    NCB Transfer &amp; Rate Benchmark
                  </option>
                  <option value="Active Policy Audit">
                    Active Policy Audit &amp; Gap Analysis
                  </option>
                  <option value="Active Claim Assistance">Urgent Claim Assistance</option>
                </select>
              </div>

              <Field label="Requirement Details / Specific Risks *" id="message" wide>
                <Textarea
                  id="message"
                  name="message"
                  required
                  minLength={10}
                  placeholder="Tell us briefly about your requirement (e.g., sum insured, asset location, existing policy expiry, zero-dep add-on, or claims query)..."
                  className="min-h-24 sm:min-h-28 bg-card text-base sm:text-sm"
                />
              </Field>

              <div className="flex flex-col items-start gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <p className="max-w-sm text-xs leading-5 text-muted-foreground">
                  Submitting prepares an email draft with your details ready to send to
                  info@gitvisha.com.
                </p>
                <Button type="submit" size="default" className="w-full sm:w-auto sm:size-lg shrink-0">
                  Prepare Enquiry <ArrowRight className="ml-1 size-4" />
                </Button>
              </div>

              {submitted && (
                <div
                  role="status"
                  className="flex flex-col gap-3 rounded-xl border border-primary/40 bg-secondary p-5 text-ink sm:col-span-2"
                >
                  <div className="flex items-start gap-3">
                    <CircleCheck className="mt-0.5 size-5 shrink-0 text-primary" />
                    <div>
                      <h4 className="font-semibold text-ink">
                        Consultation Enquiry Draft Prepared!
                      </h4>
                      <p className="mt-1 text-xs leading-relaxed text-ink-soft">
                        Your default email client should open with your consultation details ready
                        to send. If it did not launch automatically, click the direct button below:
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-3">
                    <Button asChild size="sm">
                      <a href={mailtoHref}>
                        Send Email Directly <ArrowRight className="ml-1 size-3.5" />
                      </a>
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setSubmitted(false);
                        setRequirement("");
                      }}
                    >
                      Submit Another Enquiry
                    </Button>
                  </div>
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

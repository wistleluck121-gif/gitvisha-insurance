import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronRight,
  CircleHelp,
  ClipboardCheck,
  Download,
  FileCheck2,
  HeartPulse,
  Hospital,
  Pill,
  Plane,
  ShieldCheck,
  ShieldPlus,
  ShieldX,
  Sparkles,
  Stethoscope,
  Users,
  Wallet,
  Zap,
} from "lucide-react";
import testConsultImg from "@/assets/products/test-consult.jpg";
import starHealthLogo from "@/assets/starhealth.webp";
import hdfcLogo from "@/assets/hdfc.webp";
import iciciLogo from "@/assets/icici.webp";
import sbiLogo from "@/assets/sbi.webp";
import tataLogo from "@/assets/TATA.webp";
import iffcotokioLogo from "@/assets/iffcotokio.webp";
import kotakLogo from "@/assets/kotak.webp";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CoverageGrid,
  ProductSection,
  type InsuranceItem,
} from "@/components/insurance/product-sections";
import { HealthQuoteForm } from "@/components/insurance/health-quote-form";
import { strengths } from "@/lib/insurance/shared";

export const Route = createFileRoute("/health-insurance")({
  head: () => ({
    meta: [
      { title: "Health Insurance — Comprehensive Family & Individual Coverage | Gitvisha" },
      {
        name: "description",
        content:
          "Protect your family against medical inflation with Gitvisha Health Insurance. Cashless hospitalization across 10,000+ hospitals, zero room rent capping, restoration benefits, and Section 80D tax deductions.",
      },
      {
        property: "og:title",
        content: "Health Insurance — Thoughtful Medical Protection | Gitvisha",
      },
      {
        property: "og:description",
        content:
          "Independent health insurance advisory for individuals, families, and seniors. Compare plans with no sub-limits and seamless cashless claims support.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/health-insurance" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/health-insurance" }],
  }),
  component: HealthInsurancePage,
});

/* Benefits Grid Items */
const healthBenefits: InsuranceItem[] = [
  {
    title: "Shield Against 14% Medical Inflation",
    description:
      "Medical treatment costs in India escalate faster than everyday inflation. A robust health policy prevents healthcare bills from depleting lifetime savings.",
    icon: Activity,
  },
  {
    title: "Instant Cashless Hospitalization",
    description:
      "Access emergency and planned medical treatment across 10,000+ accredited network hospitals with direct insurer pre-authorization and zero cash advance.",
    icon: Hospital,
  },
  {
    title: "Tax Savings Under Section 80D",
    description:
      "Save up to ₹75,000 to ₹1,00,000 annually on income tax by claiming premiums paid for self, spouse, children, and senior citizen parents.",
    icon: Wallet,
  },
];

/* Plan Types */
const healthPlans: {
  title: string;
  badge: string;
  sumInsured: string;
  description: string;
  forWhom: string;
  icon: typeof ShieldCheck;
  features: string[];
}[] = [
  {
    title: "Family Floater Health Insurance",
    badge: "Most Popular",
    sumInsured: "₹15 Lakhs – ₹50 Lakhs",
    description:
      "A single comprehensive policy with a shared sum insured covering self, spouse, and dependent children under one consolidated premium.",
    forWhom: "Nuclear & growing families seeking unified medical security",
    icon: Users,
    features: [
      "Shared high sum insured across all family members",
      "Unlimited automatic restoration if sum insured exhausts",
      "Maternity and newborn cover options with early vaccination",
      "Single renewal date and simplified family claim management",
    ],
  },
  {
    title: "Individual Health Insurance",
    badge: "Essential Base",
    sumInsured: "₹10 Lakhs – ₹25 Lakhs",
    description:
      "Dedicated, unshared sum insured reserved exclusively for one person, locking in lowest entry-age premiums and building substantial No Claim Bonus.",
    forWhom: "Young professionals, self-employed, and independent adults",
    icon: ShieldCheck,
    features: [
      "100% dedicated sum insured not depleted by other family members",
      "Continuous No Claim Bonus (NCB) doubling cover over claim-free years",
      "Zero room-rent capping & comprehensive daycare surgery cover",
      "Independent tax deduction under Section 80D",
    ],
  },
  {
    title: "Senior Citizen Health Cover (60+ Yrs)",
    badge: "Specialized Care",
    sumInsured: "₹10 Lakhs – ₹25 Lakhs",
    description:
      "Specially designed for parents aged 60 and above, addressing chronic illnesses, pre-existing ailments, and modern geriatric therapies.",
    forWhom: "Elderly parents needing dedicated medical attention and low waiting periods",
    icon: HeartPulse,
    features: [
      "Lower waiting period for pre-existing diseases (1-2 years)",
      "Co-pay optimization to maintain accessible annual premiums",
      "Home healthcare, dialysis, chemotherapy, and AYUSH coverage",
      "Tax deduction up to ₹50,000 under Section 80D for senior parents",
    ],
  },
  {
    title: "Super Top-Up & Critical Illness Shield",
    badge: "High-Value Buffer",
    sumInsured: "₹25 Lakhs – ₹1 Crore",
    description:
      "High-deductible coverage providing ₹25L to ₹1 Crore catastrophic protection at a fraction of regular base premium, plus lump-sum payout upon critical diagnosis.",
    forWhom:
      "Anyone looking for ₹1 Crore high-sum security atop an existing employer or retail policy",
    icon: Zap,
    features: [
      "Triggers automatically once cumulative claims cross threshold deductible",
      "Lump-sum compensation on diagnosis of 36+ listed critical illnesses",
      "Ultra-cost-effective enhancement to multiply catastrophic health protection with high-deductible security",
      "No sub-limits on organ donor expenses or ICU stays",
    ],
  },
  {
    title: "Group Health Mediclaim (GMC / Corporate)",
    badge: "Enterprise & SME",
    sumInsured: "₹3 Lakhs – ₹10 Lakhs",
    description:
      "Employer-sponsored health plans with customized benefit schedules, immediate Day 1 pre-existing condition cover, and dedicated claims support.",
    forWhom: "Startups, corporate employers, and SME organizations",
    icon: ShieldPlus,
    features: [
      "Day 1 waiver on pre-existing diseases and specific 2-year waiting periods",
      "Maternity benefits with infant care from first day of birth",
      "Digital cashless e-cards and seamless HR employee census integration",
      "Custom room rent, OPD allowances, and corporate buffer options",
    ],
  },
];

/* Coverage Inclusions */
const coverageItems: InsuranceItem[] = [
  {
    title: "In-Patient Hospitalization",
    description:
      "Complete coverage for room rent, ICU charges, nursing expenses, surgeon fees, operation theatre costs, and medicines for stays exceeding 24 hours.",
    icon: Hospital,
  },
  {
    title: "Pre & Post-Hospitalization",
    description:
      "Reimbursement of diagnostic medical tests, doctor consultations, and medications up to 60 days before hospital admission and 180 days post-discharge.",
    icon: Pill,
  },
  {
    title: "500+ Daycare Treatments",
    description:
      "Coverage for advanced surgeries and treatments requiring less than 24 hours of hospitalization due to medical technology, such as cataract, dialysis, and chemotherapy.",
    icon: Stethoscope,
  },
  {
    title: "Road & Air Ambulance Cover",
    description:
      "Emergency road ambulance transport expenses to the nearest hospital; select policies include air ambulance evacuation for critical life-threatening conditions.",
    icon: Plane,
  },
  {
    title: "AYUSH In-Patient Care",
    description:
      "Hospitalization expenses incurred for recognized Ayurvedic, Yoga, Naturopathy, Unani, Siddha, and Homeopathic treatments in accredited government hospitals.",
    icon: Sparkles,
  },
  {
    title: "Modern & Robotic Procedures",
    description:
      "Coverage for state-of-the-art modern medical treatments including robotic surgeries, balloon sinuplasty, oral chemotherapy, and stem cell therapy per IRDAI guidelines.",
    icon: Activity,
  },
];

/* Crucial Add-on Riders */
const addons: InsuranceItem[] = [
  {
    title: "Automatic Unlimited Restoration",
    description:
      "Recharges 100% of your sum insured automatically if exhausted during the policy year, ensuring coverage remains active for subsequent hospitalizations.",
    icon: ShieldPlus,
  },
  {
    title: "No Claim Bonus (NCB) Super Booster",
    description:
      "Boosts your sum insured by 20% to 50% for every claim-free year, up to a maximum of 100%–200% additional cover without any increase in base premium.",
    icon: BadgeCheck,
  },
  {
    title: "Non-Medical Consumables Cover",
    description:
      "Covers 60+ hospital non-medical items (gloves, PPE kits, surgical tapes, syringes, masks) that typically create 10% to 15% out-of-pocket bills.",
    icon: ShieldCheck,
  },
  {
    title: "Maternity & Newborn Shield",
    description:
      "Covers normal and caesarean delivery expenses, pre/post-natal doctor consultations, and newborn baby coverage including vaccinations from Day 1.",
    icon: Users,
  },
  {
    title: "Out-Patient Department (OPD) & Dental",
    description:
      "Reimburses out-patient doctor consultations, prescribed clinic diagnostics, routine health tests, and emergency dental consultations.",
    icon: Stethoscope,
  },
  {
    title: "Worldwide Emergency Hospitalization",
    description:
      "Extends emergency medical hospitalization coverage while traveling internationally outside India, backed by global assistance networks.",
    icon: Plane,
  },
];

/* Exclusions and Fine Print */
const exclusions = [
  [
    "Initial 30-Day Waiting Period",
    "Illnesses or planned medical treatments are not covered during the first 30 days of a fresh policy. Accidental hospitalization is covered from Day 1 without waiting.",
  ],
  [
    "Pre-Existing Diseases (PED) Waiting Period",
    "Pre-existing ailments (diabetes, hypertension, thyroid, cardiac conditions) require a waiting period of 12 to 36 months, depending on insurer terms, before claims are admissible.",
  ],
  [
    "Specific Illness 2-Year Waiting Clause",
    "Standard elective treatments—such as cataract, hernia, kidney stones, piles, joint replacement, and ENT surgeries—have a mandatory 2-year waiting period under retail policies.",
  ],
  [
    "Permanent Non-Admissible Exclusions",
    "Cosmetic surgeries, aesthetic procedures, weight loss/obesity treatments, self-inflicted injuries, substance abuse, and unproven experimental therapies are excluded.",
  ],
];

/* Claim Steps */
const claimSteps = [
  {
    step: "01",
    title: "Intimate & Hospital Admission",
    detail:
      "Present your Gitvisha Cashless Card / Policy ID and photo ID at the hospital's Insurance/TPA desk upon planned or emergency admission.",
    icon: Hospital,
  },
  {
    step: "02",
    title: "Pre-Authorization Clearance",
    detail:
      "The hospital submits medical records to the insurer/TPA. Gitvisha's desk coordinates to secure initial cashless approval within 30 to 60 minutes.",
    icon: ClipboardCheck,
  },
  {
    step: "03",
    title: "Treatment & Hospital Stay",
    detail:
      "Receive necessary medical care. Our advisors verify room-rent category alignment to avoid proportional deduction penalties upon billing.",
    icon: Stethoscope,
  },
  {
    step: "04",
    title: "Cashless Bill Settlement",
    detail:
      "Upon discharge, the insurer settles admissible bills directly with the hospital. You only pay for personal non-medical items (unless consumables rider is attached).",
    icon: FileCheck2,
  },
];

/* FAQs */
const faqs = [
  [
    "Why do I need an individual or family health policy if my employer already covers me?",
    "Corporate health coverage has three significant vulnerabilities: 1) It terminates immediately if you change jobs, are laid off, or retire; 2) Corporate sum insured is often low (₹3L–₹5L) with room rent caps; 3) You cannot build an accumulated No Claim Bonus (NCB). Having a personal base policy or super top-up guarantees uninterrupted lifelong protection regardless of employment status.",
  ],
  [
    "What is the difference between Cashless Hospitalization and Reimbursement claims?",
    "In a Cashless claim at a network hospital, the insurer or Third Party Administrator (TPA) settles the medical expenses directly with the hospital. You do not have to pay admissible hospital charges from pocket. In a Reimbursement claim (at non-network hospitals), you settle the hospital bill upon discharge and submit original bills, discharge summary, and receipts to the insurer for reimbursement.",
  ],
  [
    "What is Room Rent Capping, and why is it considered the most dangerous clause?",
    "Many basic policies cap room rent at 1% of the sum insured per day (e.g., ₹5,000/day on a ₹5 Lakh policy). If you stay in a single room costing ₹8,000/day, insurers do not just deduct the room rent difference—they apply a 'proportional deduction' across almost the entire bill, including doctor fees, surgeon charges, operation theatre, and ICU costs. This often leaves the insured paying 30% to 50% out-of-pocket. Gitvisha strongly advises choosing policies with No Room Rent Capping or Single Private Room eligibility.",
  ],
  [
    "Can I port my existing health insurance policy to another insurer without losing waiting periods?",
    "Yes. Under IRDAI portability regulations, you can switch from your current insurer to a new insurer without losing the waiting period credits you have already completed for pre-existing diseases and specific illnesses. Portability applications must be submitted at least 45 days prior to your policy renewal date.",
  ],
  [
    "How does the Tax Deduction under Section 80D work in practice?",
    "Premiums paid towards health insurance qualify for deduction under Section 80D of the Income Tax Act: 1) Up to ₹25,000 for self, spouse, and children (or ₹50,000 if self is a senior citizen); 2) An additional ₹25,000 for parents (<60 years) or ₹50,000 if parents are senior citizens (60+). In total, families can claim up to ₹75,000 to ₹1,00,000 annually. A preventive health check-up deduction of up to ₹5,000 is also included within these limits.",
  ],
  [
    "What happens if I have pre-existing medical conditions like Diabetes or Hypertension?",
    "Having a pre-existing disease does not mean you cannot get insured. Insurers accept proposals subject to underwriting, tele-medical verification, and a waiting period (typically 2 to 3 years, reducible with riders). Full, honest disclosure during proposal is essential: under Section 45 of IRDAI rules, non-disclosure can lead to claim repudiation and policy cancellation.",
  ],
  [
    "What is an Automatic Restoration Benefit?",
    "If your entire sum insured is exhausted during hospitalization in a policy year, an Automatic Restoration / Recharge rider instantly refills 100% of the sum insured for subsequent unrelated hospitalizations in the same policy year. This ensures that if another family member falls ill later in the year, full coverage remains available.",
  ],
  [
    "How does Gitvisha assist during a health insurance claim?",
    "Gitvisha provides dedicated claims advocacy: we assist with hospital network identification, expedite TPA cashless approvals, coordinate discharge documentation, review hospital bills to challenge unfair deductions, and guide reimbursement claims from submission to bank settlement.",
  ],
];

/* Partner Insurers — Exact Priority Sequence */
const partnerInsurers = [
  {
    order: "01",
    num: 1,
    name: "ICICI Lombard General Insurance",
    shortName: "ICICI Lombard",
    src: iciciLogo,
    badge: "Cashless Network",
  },
  {
    order: "02",
    num: 2,
    name: "HDFC ERGO General Insurance",
    shortName: "HDFC ERGO",
    src: hdfcLogo,
    badge: "Instant Pre-Auth",
  },
  {
    order: "03",
    num: 3,
    name: "TATA AIG General Insurance",
    shortName: "TATA AIG",
    src: tataLogo,
    badge: "Restoration Benefit",
  },
  {
    order: "04",
    num: 4,
    name: "SBI General Insurance",
    shortName: "SBI General",
    src: sbiLogo,
    badge: "Pan-India Network",
  },
  {
    order: "05",
    num: 5,
    name: "Star Health & Allied Insurance",
    shortName: "Star Health",
    src: starHealthLogo,
    badge: "Specialized Mediclaim",
  },
  {
    order: "06",
    num: 6,
    name: "IFFCO Tokio General Insurance",
    shortName: "IFFCO Tokio",
    src: iffcotokioLogo,
    badge: "Quick Settlement",
  },
  {
    order: "07",
    num: 7,
    name: "Kotak Zurich Insurance",
    shortName: "Kotak Zurich",
    src: kotakLogo,
    badge: "Comprehensive Cover",
  },
];

function HealthInsurancePage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden w-full">
      <SiteHeader product />

      {/* 1. Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-secondary/60 w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10 sm:pb-12 pt-4 sm:pt-6 lg:pb-16 min-w-0 w-full">
          <nav
            aria-label="Breadcrumb"
            className="mb-4 sm:mb-6 flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs font-medium text-ink-soft min-w-0"
          >
            <Link to="/" className="hover:text-primary hover:underline">
              Home
            </Link>
            <ChevronRight className="size-3 text-ink-soft/70 shrink-0" />
            <Link to="/" hash="solutions" className="hover:text-primary hover:underline">
              Insurance Solutions
            </Link>
            <ChevronRight className="size-3 text-ink-soft/70 shrink-0" />
            <span aria-current="page" className="font-semibold text-primary truncate">
              Health Insurance
            </span>
          </nav>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center min-w-0 w-full">
            <div className="min-w-0">
              <p className="mb-3 inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-primary/20 bg-primary/10 px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-wide text-primary">
                <HeartPulse className="size-3.5 shrink-0" />
                <span>Gitvisha · Health &amp; Wellness Advisory</span>
              </p>
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-ink leading-tight sm:leading-none break-words">
                Health Insurance
                <span className="text-primary">.</span>
              </h1>
              <p className="mt-2.5 sm:mt-3 text-base sm:text-xl lg:text-2xl font-medium leading-snug sm:leading-relaxed text-primary break-words">
                Protection structured around medical inflation, with zero sub-limit surprises.
              </p>
              <p className="mt-3 sm:mt-4 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed sm:leading-7 text-ink-soft break-words">
                Medical expenses in India escalate at over 14% annually. Gitvisha helps you select
                transparent health insurance for individuals, families, and senior parents—featuring
                zero room-rent caps, 10,000+ cashless network hospitals, 100% restoration, and
                dedicated claim advocacy.
              </p>

              <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-4 min-w-0">
                <Button asChild size="lg" className="min-h-12 w-full sm:w-auto shadow-sm">
                  <a href="#quote" className="flex items-center justify-center gap-2 font-semibold">
                    Get a Health Quote <ArrowRight className="size-4 shrink-0" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="min-h-12 w-full sm:w-auto border-border"
                >
                  <a href="#rates" className="flex items-center justify-center gap-2 font-medium">
                    View Rate Benchmarks
                  </a>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="lg"
                  className="min-h-12 w-full sm:w-auto text-ink-soft hover:text-primary"
                >
                  <a
                    href="/brochures/gitvisha-health-motor-brochure.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 font-medium"
                  >
                    <Download className="size-4 shrink-0" />
                    Download Brochure
                  </a>
                </Button>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2 text-xs font-medium text-ink-soft">
                <span className="inline-flex items-center gap-1.5">
                  <Check className="size-3.5 text-primary shrink-0" />
                  Zero Room-Rent Capping
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Check className="size-3.5 text-primary shrink-0" />
                  Daycare &amp; AYUSH Included
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Check className="size-3.5 text-primary shrink-0" />
                  Sec 80D Tax Benefits
                </span>
              </div>
            </div>

            {/* Hero Visual Card / Highlights */}
            <div className="rounded-2xl border border-border bg-card p-4 sm:p-6 shadow-md lg:p-7 min-w-0 max-w-full overflow-hidden">
              <div className="flex items-center justify-between border-b border-border pb-4 gap-2">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Hospital className="size-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-ink leading-tight truncate">Cashless Hospital Network</p>
                    <p className="text-[11px] text-ink-soft truncate">
                      IRDAI-Accredited Healthcare Providers
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-bold text-emerald-600 shrink-0">
                  Active 24x7
                </span>
              </div>

              <div className="mt-4 sm:mt-5 grid grid-cols-2 gap-2.5 sm:gap-4 min-w-0">
                <div className="rounded-lg border border-border/70 bg-secondary/40 p-2.5 sm:p-3.5 min-w-0">
                  <p className="text-lg sm:text-2xl font-extrabold text-primary truncate">10,000+</p>
                  <p className="text-[11px] sm:text-xs font-medium text-ink truncate">Network Hospitals</p>
                  <p className="mt-0.5 text-[9px] sm:text-[10px] text-muted-foreground leading-tight truncate">
                    Pan-India Cashless Access
                  </p>
                </div>
                <div className="rounded-lg border border-border/70 bg-secondary/40 p-2.5 sm:p-3.5 min-w-0">
                  <p className="text-lg sm:text-2xl font-extrabold text-primary truncate">₹1 Crore</p>
                  <p className="text-[11px] sm:text-xs font-medium text-ink truncate">High Sum Insured</p>
                  <p className="mt-0.5 text-[9px] sm:text-[10px] text-muted-foreground leading-tight truncate">Super Top-Up Available</p>
                </div>
                <div className="rounded-lg border border-border/70 bg-secondary/40 p-2.5 sm:p-3.5 min-w-0">
                  <p className="text-lg sm:text-2xl font-extrabold text-primary truncate">₹1,00,000</p>
                  <p className="text-[11px] sm:text-xs font-medium text-ink truncate">Tax Deduction</p>
                  <p className="mt-0.5 text-[9px] sm:text-[10px] text-muted-foreground leading-tight truncate">Section 80D Eligible</p>
                </div>
                <div className="rounded-lg border border-border/70 bg-secondary/40 p-2.5 sm:p-3.5 min-w-0">
                  <p className="text-lg sm:text-2xl font-extrabold text-primary truncate">30 Mins</p>
                  <p className="text-[11px] sm:text-xs font-medium text-ink truncate">Pre-Auth Speed</p>
                  <p className="mt-0.5 text-[9px] sm:text-[10px] text-muted-foreground leading-tight truncate">
                    Cashless Desk Clearance
                  </p>
                </div>
              </div>

              <div className="mt-4 sm:mt-5 rounded-lg border border-primary/20 bg-primary/5 p-3 sm:p-3.5 text-xs text-ink-soft leading-relaxed break-words">
                <span className="font-semibold text-primary">Advisory Principle:</span> We
                prioritize policies that eliminate room rent restrictions, co-payments, and
                disease-specific sub-limits so claims are paid in full.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Quote & Advisory Section */}
      <section id="quote" className="scroll-mt-20 bg-accent py-10 sm:py-14 text-ink lg:py-16 overflow-hidden w-full">
        <div id="rates" className="scroll-mt-24" />
        <div className="mx-auto grid max-w-7xl gap-8 lg:gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start lg:px-8 min-w-0 w-full">
          <div className="space-y-5 sm:space-y-6 min-w-0 w-full">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-primary">
                Unbiased Health Advisory
              </p>
              <h2 className="text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl break-words">
                The right health cover begins with an honest comparison.
              </h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed sm:leading-7 text-ink-soft break-words">
                Most health insurance buyers focus solely on the premium amount, only to discover at
                the hospital billing desk that room rent caps, co-payments, and consumables
                exclusions slashed their claim settlement by 40%.
              </p>
            </div>

            <div className="space-y-3.5 border-t border-border pt-5 min-w-0">
              <p className="text-xs font-bold uppercase tracking-wider text-ink">
                What Gitvisha Benchmarks for You:
              </p>
              {[
                "Zero Room Rent Capping: No proportional deductions on surgeon fees or ICU stays",
                "Automatic 100% Restoration of Sum Insured upon exhaustion in a policy year",
                "Consumables Cover: Reimbursing gloves, PPE kits, and surgical disposables in full",
                "Waiting Period Comparison: 1 to 2-year waiting options for pre-existing diseases",
                "Cashless Hospital Density: Verifying network hospitals in your immediate city and neighbourhood",
                "Portability Review: Transition from corporate or legacy policies without losing accrued waiting credits",
              ].map((text) => (
                <div key={text} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm leading-relaxed sm:leading-6 text-ink-soft min-w-0">
                  <Check className="mt-1 size-4 shrink-0 text-primary" />
                  <span className="break-words min-w-0">{text}</span>
                </div>
              ))}
            </div>

            <div className="rounded-lg border border-border bg-card p-4 sm:p-5 min-w-0 max-w-full overflow-hidden">
              <p className="text-sm font-bold text-ink">Need immediate consultation?</p>
              <p className="mt-1 text-xs text-ink-soft leading-relaxed break-words">
                Speak directly with our senior health insurance advisors for policy reviews or claim
                advice.
              </p>
              <a
                href="mailto:info@gitvisha.com?subject=Health%20Insurance%20Advisory%20Direct"
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline break-all"
              >
                info@gitvisha.com <ArrowRight className="size-3.5 shrink-0" />
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="min-w-0 w-full">
            <HealthQuoteForm />
          </div>
        </div>
      </section>

      {/* 3. The Essentials: What is Health Insurance? */}
      <ProductSection
        eyebrow="The Essentials"
        title="What is Health Insurance?"
        copy="Health insurance is an indemnity contract between you and an IRDAI-licensed insurer. In exchange for an annual premium, the insurer pays or reimburses hospitalization and eligible medical expenses incurred due to sickness, surgery, or accidental injury. Understanding the fine print ensures that your protection performs when you need it most."
      >
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center min-w-0 w-full">
          <figure className="relative overflow-hidden rounded-xl border border-border shadow-sm min-w-0 w-full">
            <img
              src={testConsultImg}
              alt="Physician and patient reviewing medical treatment and health insurance plan"
              width={1200}
              height={700}
              loading="lazy"
              decoding="async"
              className="aspect-[16/10] w-full max-w-full object-cover"
            />
            <figcaption className="bg-card/90 px-3 sm:px-4 py-2 sm:py-2.5 text-xs text-ink-soft backdrop-blur-xs break-words">
              Gitvisha Health Advisory · Objective comparison across India's premier health insurers
            </figcaption>
          </figure>

          <div className="space-y-3.5 sm:space-y-4 min-w-0 w-full">
            <div className="rounded-xl border border-border bg-card p-4 sm:p-5 shadow-xs min-w-0">
              <div className="flex items-start gap-3 min-w-0">
                <CircleHelp className="mt-0.5 size-5 shrink-0 text-primary" />
                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-ink">Look Beyond the Premium</h3>
                  <p className="mt-1 text-xs leading-relaxed sm:leading-6 text-ink-soft break-words">
                    The cheapest policy is often the most expensive at claim time. Sub-limits,
                    co-payments, room-rent proportional cuts, and exclusion lists determine what you
                    actually pay out of pocket.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 sm:p-5 min-w-0">
              <div className="flex items-start gap-3 min-w-0">
                <AlertTriangle className="mt-0.5 size-5 shrink-0 text-amber-600" />
                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-ink">The Room Rent Trap Warning</h3>
                  <p className="mt-1 text-xs leading-relaxed sm:leading-6 text-ink-soft break-words">
                    If a policy caps room rent at 1% of sum insured (e.g. ₹5,000/day on ₹5L cover)
                    and you occupy a single private room costing ₹8,000/day, insurers proportionally
                    slash <strong>37.5% across the entire hospital bill</strong>—including doctor
                    visits, surgeon fees, and ICU. Gitvisha helps you select policies with zero
                    room-rent capping.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-4 sm:p-5 shadow-xs min-w-0">
              <div className="flex items-start gap-3 min-w-0">
                <Sparkles className="mt-0.5 size-5 shrink-0 text-primary" />
                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-ink">
                    Section 45 IRDAI Disclosure Protection
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed sm:leading-6 text-ink-soft break-words">
                    Transparent disclosure of medical history during proposal ensures that under
                    Section 45 moratorium rules, your policy cannot be questioned after 3
                    consecutive years of continuous coverage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ProductSection>

      {/* 4. Why It Matters Benefits */}
      <ProductSection
        eyebrow="Why It Matters"
        title="Protection for Life's Most Critical Moments"
        copy="A well-structured health insurance policy is not just a tax-saving instrument; it is the cornerstone of household financial stability."
        tone="muted"
      >
        <CoverageGrid items={healthBenefits} />
      </ProductSection>

      {/* 5. Plans for Every Life Stage */}
      <section
        id="plans"
        className="scroll-mt-20 border-b border-border bg-background py-10 sm:py-14 lg:py-20 overflow-hidden w-full"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-w-0 w-full">
          <div className="max-w-3xl min-w-0">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-primary">
              Plans for Every Life Stage
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-4xl break-words">
              Tailored Coverage Built Around Your Family Structure
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-ink-soft break-words">
              Different stages of life present different health risks. Explore specialized plan
              structures configured for optimal benefits and cost efficiency.
            </p>
          </div>

          <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 min-w-0 w-full">
            {healthPlans.map((plan) => {
              const Icon = plan.icon;
              return (
                <article
                  key={plan.title}
                  className="flex flex-col justify-between rounded-xl border border-border bg-card p-4 sm:p-6 shadow-xs transition-all hover:border-primary/60 hover:shadow-md min-w-0"
                >
                  <div className="min-w-0">
                    <div className="flex items-center justify-between gap-2 min-w-0">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="size-5" />
                      </span>
                      <span className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-semibold text-primary shrink-0">
                        {plan.badge}
                      </span>
                    </div>

                    <h3 className="mt-4 sm:mt-5 text-base sm:text-lg font-bold text-ink leading-snug break-words">{plan.title}</h3>
                    <div className="mt-1 flex flex-wrap items-baseline gap-1 text-xs text-primary min-w-0">
                      <span className="font-semibold">Recommended Cover:</span>
                      <span>{plan.sumInsured}</span>
                    </div>

                    <p className="mt-3 text-xs leading-relaxed text-ink-soft break-words">{plan.description}</p>

                    <div className="mt-4 rounded-md border border-border/60 bg-secondary/30 p-2.5 text-[11px] text-ink-soft break-words">
                      <strong className="text-ink">Best for:</strong> {plan.forWhom}
                    </div>

                    <ul className="mt-4 sm:mt-5 space-y-2 border-t border-border pt-4 min-w-0">
                      {plan.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2 text-xs text-ink-soft leading-snug min-w-0">
                          <Check className="mt-0.5 size-3.5 shrink-0 text-primary" />
                          <span className="break-words min-w-0">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button asChild variant="outline" size="sm" className="mt-6 w-full text-xs min-h-10">
                    <a
                      href="#quote"
                      className="flex items-center justify-center gap-1.5 font-semibold"
                    >
                      Compare {plan.title.split(" ")[0]} Plans <ArrowRight className="size-3.5 shrink-0" />
                    </a>
                  </Button>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. What Is Covered (Inclusions Grid) */}
      <ProductSection
        eyebrow="What Is Covered"
        title="Comprehensive In-Patient &amp; Daycare Benefits"
        copy="Standard comprehensive health insurance includes wide-ranging medical expenses, subject to the policy terms and chosen sum insured."
        tone="muted"
      >
        <CoverageGrid items={coverageItems} />
      </ProductSection>

      {/* 7. Crucial Add-On Riders */}
      <ProductSection
        eyebrow="Policy Add-Ons &amp; Riders"
        title="Fine-Tune Your Health Cover for Zero Out-of-Pocket Expenses"
        copy="Add-on covers bridge standard policy gaps. Attaching the right riders ensures you never pay for consumables, lose accumulated bonuses, or run out of sum insured."
      >
        <CoverageGrid items={addons} />
      </ProductSection>

      {/* 8. What is NOT Covered (Exclusions & Waiting Periods) */}
      <ProductSection
        eyebrow="What Is Not Covered"
        title="Understanding the Waiting Periods &amp; Boundaries"
        tone="muted"
      >
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 min-w-0 w-full">
          {exclusions.map(([title, copy]) => (
            <article
              key={title}
              className="flex items-start gap-3 sm:gap-4 rounded-lg border border-border bg-card p-4 sm:p-5 shadow-xs min-w-0"
            >
              <ShieldX aria-hidden="true" className="mt-1 size-5 shrink-0 text-destructive" />
              <div className="min-w-0">
                <h3 className="text-sm font-bold text-ink break-words">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed sm:leading-6 text-ink-soft break-words">{copy}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-5 sm:mt-6 text-xs leading-relaxed sm:leading-6 text-ink-soft break-words">
          *Note: Waiting periods and exclusions vary by insurer, entry age, and selected plan.
          Certain riders allow you to reduce the pre-existing disease waiting period from 3 years to
          1 year. Always review policy terms prior to purchase.
        </p>
      </ProductSection>

      {/* 9. Section 80D Tax Benefits Breakdown */}
      <section className="border-b border-border bg-background py-10 sm:py-14 lg:py-18 overflow-hidden w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-w-0 w-full">
          <div className="max-w-3xl min-w-0">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-primary">
              Tax Optimization
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-4xl break-words">
              Maximize Annual Tax Deductions Under Section 80D
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-ink-soft break-words">
              Health insurance premiums paid for yourself, spouse, dependent children, and parents
              qualify for substantial deductions from your taxable income.
            </p>
          </div>

          <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 min-w-0 w-full">
            <div className="rounded-xl border border-border bg-card p-4 sm:p-6 shadow-xs min-w-0">
              <div className="flex items-center justify-between gap-1 min-w-0">
                <span className="text-xs font-bold text-primary uppercase truncate">Scenario A</span>
                <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold text-primary shrink-0">
                  Up to ₹50,000
                </span>
              </div>
              <h3 className="mt-3 sm:mt-4 text-sm sm:text-base font-bold text-ink break-words">
                Self, Family &amp; Parents (&lt; 60 Yrs)
              </h3>
              <ul className="mt-4 space-y-2 text-xs text-ink-soft min-w-0">
                <li className="flex flex-wrap items-center justify-between gap-1 border-b border-border pb-1.5 min-w-0">
                  <span className="break-words">Self, Spouse &amp; Children:</span>
                  <span className="font-semibold text-ink">₹25,000</span>
                </li>
                <li className="flex flex-wrap items-center justify-between gap-1 border-b border-border pb-1.5 min-w-0">
                  <span className="break-words">Parents (&lt; 60 Years):</span>
                  <span className="font-semibold text-ink">₹25,000</span>
                </li>
                <li className="flex flex-wrap items-center justify-between gap-1 pt-1 min-w-0">
                  <span className="font-bold text-ink">Total 80D Deduction:</span>
                  <span className="font-bold text-primary">₹50,000 / yr</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-primary/40 bg-card p-4 sm:p-6 shadow-sm ring-1 ring-primary/20 min-w-0">
              <div className="flex items-center justify-between gap-1 min-w-0">
                <span className="text-xs font-bold text-primary uppercase truncate">
                  Scenario B (Popular)
                </span>
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-bold text-primary shrink-0">
                  Up to ₹75,000
                </span>
              </div>
              <h3 className="mt-3 sm:mt-4 text-sm sm:text-base font-bold text-ink break-words">
                Self (&lt; 60) + Senior Parents (60+)
              </h3>
              <ul className="mt-4 space-y-2 text-xs text-ink-soft min-w-0">
                <li className="flex flex-wrap items-center justify-between gap-1 border-b border-border pb-1.5 min-w-0">
                  <span className="break-words">Self, Spouse &amp; Children:</span>
                  <span className="font-semibold text-ink">₹25,000</span>
                </li>
                <li className="flex flex-wrap items-center justify-between gap-1 border-b border-border pb-1.5 min-w-0">
                  <span className="break-words">Senior Citizen Parents:</span>
                  <span className="font-semibold text-ink">₹50,000</span>
                </li>
                <li className="flex flex-wrap items-center justify-between gap-1 pt-1 min-w-0">
                  <span className="font-bold text-ink">Total 80D Deduction:</span>
                  <span className="font-bold text-primary">₹75,000 / yr</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-card p-4 sm:p-6 shadow-xs sm:col-span-2 lg:col-span-1 min-w-0">
              <div className="flex items-center justify-between gap-1 min-w-0">
                <span className="text-xs font-bold text-primary uppercase truncate">
                  Scenario C (Senior Self)
                </span>
                <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold text-primary shrink-0">
                  Up to ₹1,00,000
                </span>
              </div>
              <h3 className="mt-3 sm:mt-4 text-sm sm:text-base font-bold text-ink break-words">
                Senior Self (60+) + Senior Parents
              </h3>
              <ul className="mt-4 space-y-2 text-xs text-ink-soft min-w-0">
                <li className="flex flex-wrap items-center justify-between gap-1 border-b border-border pb-1.5 min-w-0">
                  <span className="break-words">Senior Self &amp; Spouse:</span>
                  <span className="font-semibold text-ink">₹50,000</span>
                </li>
                <li className="flex flex-wrap items-center justify-between gap-1 border-b border-border pb-1.5 min-w-0">
                  <span className="break-words">Senior Citizen Parents:</span>
                  <span className="font-semibold text-ink">₹50,000</span>
                </li>
                <li className="flex flex-wrap items-center justify-between gap-1 pt-1 min-w-0">
                  <span className="font-bold text-ink">Total 80D Deduction:</span>
                  <span className="font-bold text-primary">₹1,00,000 / yr</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-5 sm:mt-6 flex items-start sm:items-center gap-2.5 rounded-lg border border-border bg-secondary/30 p-3 sm:p-3.5 text-xs text-ink-soft leading-relaxed min-w-0">
            <Sparkles className="size-4 shrink-0 text-primary mt-0.5 sm:mt-0" />
            <span className="break-words min-w-0">
              <strong>Preventive Health Check-Up Bonus:</strong> An additional deduction of up to{" "}
              <strong>₹5,000</strong> is permissible for annual health check-ups within the overall
              limits above.
            </span>
          </div>
        </div>
      </section>

      {/* 10. The Cashless Claim Journey */}
      <ProductSection
        eyebrow="Claims Guidance"
        title="The Cashless Claim Journey Made Effortless"
        copy="A medical emergency is stressful enough. Gitvisha coordinates the communication with TPAs and hospital billing departments so your claim is processed transparently."
        tone="muted"
      >
        <ol className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 min-w-0 w-full">
          {claimSteps.map(({ step, title, detail, icon: Icon }) => (
            <li key={title} className="rounded-xl border border-border bg-card p-4 sm:p-6 shadow-xs min-w-0">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-primary">{step}</span>
                <Icon className="size-5 text-primary" />
              </div>
              <h3 className="mt-3 sm:mt-4 text-sm sm:text-base font-bold text-ink leading-snug break-words">{title}</h3>
              <p className="mt-2 text-xs leading-relaxed sm:leading-6 text-ink-soft break-words">{detail}</p>
            </li>
          ))}
        </ol>

        <div className="mt-6 sm:mt-8 rounded-xl border border-primary/20 bg-primary/5 p-4 sm:p-6 min-w-0 w-full">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between min-w-0">
            <div className="min-w-0">
              <h4 className="text-sm font-bold text-ink">Admitted to a Non-Network Hospital?</h4>
              <p className="mt-1 text-xs text-ink-soft leading-relaxed break-words">
                Don't worry. Reimbursement claims are fully supported: collect original discharge
                summaries, hospital itemized bills, payment receipts, and prescription slips.
                Gitvisha assists with dossier compilation and insurer follow-ups.
              </p>
            </div>
            <Button asChild variant="outline" size="sm" className="w-full sm:w-auto shrink-0 text-xs min-h-10">
              <a href="#quote">Contact Claims Desk</a>
            </Button>
          </div>
        </div>
      </ProductSection>

      {/* 11. Partner Health Insurers */}
      <section className="border-b border-border bg-background py-10 sm:py-14 lg:py-18 overflow-hidden w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-w-0 w-full">
          <div className="text-center max-w-2xl mx-auto min-w-0">
            <p className="text-xs font-bold uppercase tracking-wider text-primary">
              Partner Health Insurers
            </p>
            <h2 className="mt-2 text-xl font-bold tracking-tight text-ink sm:text-2xl md:text-3xl break-words">
              Access India's Highest Claim Settlement Insurers
            </h2>
            <p className="mt-2 text-xs leading-relaxed sm:leading-6 text-ink-soft sm:text-sm break-words">
              We benchmark policy benefits, claim settlement ratios (CSR), and hospital network
              density across India's top general and standalone health insurance companies.
            </p>
          </div>

          <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-2.5 min-[480px]:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 items-stretch min-w-0 w-full">
            {partnerInsurers.map((insurer) => (
              <div
                key={insurer.name}
                className="group relative flex flex-col justify-between rounded-xl border border-border bg-card p-2.5 sm:p-3.5 transition-all hover:border-primary/60 hover:shadow-md min-w-0"
              >
                <div className="flex items-center justify-between border-b border-border/60 pb-1.5 sm:pb-2">
                  <span className="font-mono text-[11px] font-bold text-primary">
                    {insurer.order}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    #{insurer.num}
                  </span>
                </div>
                <div className="flex h-12 sm:h-16 items-center justify-center py-1 sm:py-2 min-w-0">
                  <img
                    src={insurer.src}
                    alt={insurer.name}
                    className="max-h-8 sm:max-h-10 max-w-full object-contain transition-all group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="border-t border-border/60 pt-1.5 sm:pt-2 text-center min-w-0">
                  <p className="text-xs font-bold text-ink transition-colors group-hover:text-primary truncate">
                    {insurer.shortName}
                  </p>
                  <p className="mt-0.5 text-[10px] text-ink-soft truncate">{insurer.badge}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Why Choose Gitvisha */}
      <ProductSection
        eyebrow="Why Gitvisha"
        title="Objective Advice. Relentless Claim Advocacy."
        tone="muted"
      >
        <div className="grid gap-3 sm:gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:[&>*:last-child]:col-span-2 md:[&>*:last-child]:col-span-1 min-w-0 w-full">
          {strengths.map((strength, index) => (
            <div className="rounded-xl border border-border bg-card p-4 sm:p-5 shadow-xs min-w-0" key={strength}>
              <span className="font-mono text-xs text-primary font-bold">0{index + 1}</span>
              <Check aria-hidden="true" className="mt-2.5 sm:mt-3 size-5 text-primary" />
              <h3 className="mt-2.5 sm:mt-3 text-xs sm:text-sm font-semibold leading-snug sm:leading-5 text-ink break-words">{strength}</h3>
            </div>
          ))}
        </div>
        <div className="mt-6 sm:mt-8 rounded-xl border border-border bg-card p-4 sm:p-6 shadow-xs min-w-0 w-full">
          <h4 className="text-sm font-bold text-ink">The Gitvisha Portability &amp; Review Promise</h4>
          <p className="mt-2 text-xs leading-relaxed sm:leading-6 text-ink-soft break-words">
            Already have an active policy? Health insurance rules allow you to port your plan to a
            superior insurer without losing your accrued waiting period credits or accumulated No
            Claim Bonus. Gitvisha provides a complimentary policy review to identify whether you are
            paying for restrictive clauses or missing vital coverage riders.
          </p>
        </div>
      </ProductSection>

      {/* 13. FAQs */}
      <ProductSection eyebrow="Frequently Asked Questions" title="Clarity Before You Choose">
        <Accordion type="single" collapsible className="max-w-4xl min-w-0 w-full">
          {faqs.map(([question, answer], index) => (
            <AccordionItem key={question} value={`faq-${index}`} className="min-w-0 w-full">
              <AccordionTrigger className="min-h-12 sm:min-h-14 gap-3 sm:gap-5 py-3 sm:py-4 text-left text-sm sm:text-base font-semibold text-ink">
                <span className="break-words min-w-0 text-left">{question}</span>
              </AccordionTrigger>
              <AccordionContent className="max-w-3xl text-xs sm:text-sm leading-relaxed sm:leading-7 text-ink-soft break-words">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ProductSection>

      {/* 14. Bottom CTA Section */}
      <section className="bg-accent py-10 sm:py-14 text-ink lg:py-18 overflow-hidden w-full">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:gap-8 px-4 sm:px-6 sm:items-start lg:flex-row lg:items-center lg:justify-between lg:px-8 min-w-0 w-full">
          <div className="min-w-0">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-primary">
              Protect What Matters Most
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-ink leading-tight break-words">
              Ready to safeguard your family's health and savings?
            </h2>
            <p className="mt-3 max-w-xl text-sm sm:text-base text-ink-soft leading-relaxed break-words">
              Start with a free coverage assessment. Compare quotes across premier insurers with
              zero commission bias.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 shrink-0 w-full sm:w-auto min-w-0">
            <Button asChild size="lg" className="min-h-12 w-full sm:w-auto shadow-sm">
              <a href="#quote" className="flex items-center justify-center gap-2 font-semibold">
                Get a Health Quote <ArrowRight className="size-4 shrink-0" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="min-h-12 w-full sm:w-auto">
              <a
                href="/brochures/gitvisha-health-motor-brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 font-medium"
              >
                <Download className="size-4 shrink-0" />
                Download Brochure
              </a>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

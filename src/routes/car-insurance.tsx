import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, CarFront, Check, ChevronRight, CircleHelp, ClipboardCheck, CloudRain, FileCheck2, FileSearch, Flame, HeartPulse, KeyRound, LifeBuoy, ListChecks, Settings2, ShieldCheck, ShieldMinus, ShieldX, Siren, Wrench } from "lucide-react";
import carAsset from "@/assets/car.webp.asset.json";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CoverageGrid, ProductSection, type InsuranceItem } from "@/components/insurance/product-sections";
import { VehicleQuoteForm } from "@/components/insurance/vehicle-quote-form";
import { strengths } from "@/lib/insurance/shared";

export const Route = createFileRoute("/car-insurance")({
  head: () => ({
    meta: [
      { title: "Car Insurance — Coverage & Renewal Advice | Gitvisha" },
      { name: "description", content: "Explore comprehensive, third-party and own damage car insurance with Gitvisha. Understand cover, add-ons, exclusions and prepare a car insurance enquiry." },
      { property: "og:title", content: "Car Insurance — Thoughtful Protection | Gitvisha" },
      { property: "og:description", content: "Make informed car insurance decisions with clear guidance on suitable cover, renewals, add-ons and claims support from Gitvisha." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/car-insurance" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/car-insurance" }],
  }),
  component: CarInsurancePage,
});

const benefits: InsuranceItem[] = [
  { title: "Prepare for unexpected costs", description: "Suitable own damage cover can help with eligible repair or replacement costs after an insured event, subject to deductibles and limits.", icon: Wrench },
  { title: "Meet liability obligations", description: "Third-party liability insurance is legally required for a car used on public roads in India. Keep it valid and understand the scope of protection.", icon: ShieldCheck },
  { title: "Choose with clarity", description: "Balance your car’s value, use, budget and exposure—not just the lowest premium—when assessing a policy.", icon: ListChecks },
];
const policyCards: InsuranceItem[] = [
  { title: "Comprehensive", description: "Combines third-party liability and own damage protection for your car. Eligible accidental damage, theft and specified events are covered under the policy terms; add-ons may extend protection.", icon: ShieldCheck },
  { title: "Third-Party Liability", description: "Covers legal liability for third-party injury, death and property damage, subject to applicable terms and limits. It does not cover damage to or theft of your own car.", icon: HeartPulse },
  { title: "Standalone Own Damage", description: "Protects your own car against specified damage and loss. A separate, valid third-party liability policy is necessary; this cover alone does not meet the legal liability requirement.", icon: CarFront },
];
const coverage: InsuranceItem[] = [
  { title: "Accidents & collision", description: "Eligible accidental damage to your car under own damage cover, after applicable deductibles and depreciation.", icon: CarFront },
  { title: "Theft", description: "Theft of the insured car under own damage cover, subject to documentation, policy conditions and the insured declared value (IDV).", icon: KeyRound },
  { title: "Natural events", description: "Specified events such as floods, storms and earthquakes may be covered. Consequential engine damage can require an add-on.", icon: CloudRain },
  { title: "Fire & man-made events", description: "Specified fire, explosion, riot or malicious damage risks may fall within own damage protection, as defined in the policy.", icon: Flame },
  { title: "Third-party liability", description: "Legal liability for injury, death or property damage to others under the liability section, subject to applicable terms and limits.", icon: ShieldCheck },
  { title: "Personal accident protection", description: "Owner-driver personal accident cover is subject to eligibility and applicable requirements. It is not general medical cover for every passenger; occupant cover may need separate selection.", icon: HeartPulse },
];
const addons: InsuranceItem[] = [
  { title: "Zero depreciation", description: "Can reduce depreciation deductions on eligible replaced parts in an own damage claim. Limits, deductibles and exclusions still apply.", icon: ShieldMinus },
  { title: "Roadside assistance", description: "May provide towing or help for specified breakdowns, flat tyres or battery issues, within service areas and usage limits.", icon: LifeBuoy },
  { title: "Engine protection", description: "May extend cover to specified consequential engine damage, such as water ingress, subject to conditions and exclusions.", icon: Settings2 },
  { title: "Consumables cover", description: "May cover specified consumables used in an eligible repair, such as lubricants, nuts or bolts, within the add-on terms.", icon: Wrench },
  { title: "Key protection", description: "May help with eligible replacement keys or locks following loss or theft, subject to limits and documentation.", icon: KeyRound },
  { title: "Return to invoice", description: "May bridge specified gaps between IDV and invoice value for eligible theft or total loss claims. Vehicle-age and other conditions apply.", icon: FileCheck2 },
];
const exclusions = [
  ["Wear, tear & routine upkeep", "Normal ageing, depreciation and routine maintenance are generally not covered."],
  ["Mechanical or electrical breakdown", "An ordinary breakdown is generally excluded unless a specific applicable cover says otherwise."],
  ["Driving outside policy conditions", "Driving without a valid licence, under the influence, or using the car beyond its permitted use can affect a claim."],
  ["Consequential loss & excluded events", "Indirect losses, war or nuclear risks and other specified exclusions are subject to policy wording. Do not assume every loss is insured."],
];
const process = [
  { title: "Share details", detail: "Tell us about your car, existing cover and priorities.", icon: ClipboardCheck },
  { title: "Compare suitable options", detail: "Review relevant cover, IDV, deductibles and add-ons with guidance.", icon: FileSearch },
  { title: "Choose coverage", detail: "Select an option after checking terms, premium and insurer requirements.", icon: BadgeCheck },
  { title: "Policy support", detail: "Get help understanding documents, renewal needs and claims requirements.", icon: LifeBuoy },
];
const faqs = [
  ["Is car insurance mandatory in India?", "Valid third-party liability insurance is legally required for a car used on public roads in India. Own damage cover is separate protection for your car. Check the applicable requirements for owner-driver personal accident cover too."],
  ["How do comprehensive and third-party policies differ?", "Third-party cover addresses covered legal liabilities to others; it does not pay for damage to your own car. Comprehensive cover combines third-party liability with own damage protection, subject to the policy’s terms."],
  ["What is IDV, and why does it matter?", "Insured declared value (IDV) is the agreed insured value of the vehicle for the policy period, calculated under insurer rules. It influences premium and the basis of eligible theft or total loss settlement; it is not a guaranteed payment for every claim."],
  ["What is a No Claim Bonus (NCB)?", "NCB is a discount on the own damage premium for eligible claim-free periods, subject to insurer rules. It does not generally apply to third-party premium. Disclose your claims history accurately and confirm how a claim or renewal gap affects eligibility."],
  ["Can I renew after my policy has expired?", "Ask for renewal guidance as soon as possible. A gap can leave you uninsured, and an inspection or other insurer requirements may apply. New cover is not retrospective, and driving without valid mandatory cover is not permitted."],
  ["Do I need every add-on?", "No. Suitability depends on your car’s age and value, driving patterns, local risks and budget. Add-ons cost extra and have their own conditions. Availability varies by insurer, vehicle and policy."],
  ["What details are useful for an enquiry?", "Your name, contact details, city, car make and model, and preferred policy type are a useful starting point. Registration details and the existing policy expiry date help for a renewal. The insurer may request further documents before quoting or issuing cover."],
  ["How does Gitvisha help with a claim?", "Gitvisha can help you understand the notification and document requirements and coordinate communication with the insurer and relevant parties. The insurer assesses coverage and decides settlement under the policy; neither approval nor a settlement timeline is guaranteed."],
];

function CarInsurancePage() {
  return <div className="min-h-screen bg-background text-foreground">
    <SiteHeader product />
    <section className="border-b border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-5 pb-12 pt-5 lg:px-8 lg:pb-16">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-ink-soft"><Link to="/" className="min-h-11 content-center hover:underline">Home</Link><ChevronRight className="size-3" /><span aria-current="page">Car Insurance</span></nav>
        <p className="mb-4 text-xs font-bold uppercase text-primary">Gitvisha · Motor protection</p>
        <h1 className="text-4xl font-semibold text-ink sm:text-5xl lg:text-6xl">Car Insurance</h1>
        <p className="mt-4 text-2xl font-medium leading-snug text-primary sm:text-3xl">A clearer choice for every journey.</p>
        <div className="mt-6 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between"><p className="max-w-2xl text-base leading-7 text-ink-soft">From everyday drives to unexpected detours, choose protection with a better understanding of your car, your risks and your policy.</p><Button asChild size="lg" className="min-h-12 w-fit shrink-0"><a href="#quote">Get a Quote <ArrowRight /></a></Button></div>
        <p className="mt-5 text-xs leading-5 text-ink-soft">New car · Renewals · Coverage guidance</p>
      </div>
    </section>

    <section id="quote" className="scroll-mt-24 bg-accent py-12 text-ink lg:py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.7fr_1.1fr] lg:items-center lg:gap-14 lg:px-8">
        <div>
          <p className="mb-3 text-xs font-bold uppercase text-primary">Start with what matters</p>
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">The right cover starts with the right conversation.</h2>
          <ul className="mt-6 space-y-3">{["Understand cover, limits and deductibles", "Consider add-ons that fit your needs", "Keep policy and claims requirements clear"].map((text) => <li key={text} className="flex gap-3 text-sm leading-6 text-ink-soft"><Check aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />{text}</li>)}</ul>
          <div className="mt-7 border-t border-border pt-5"><p className="text-sm font-semibold">Prefer a conversation?</p><a href="mailto:info@gitvisha.com" className="mt-1 inline-block text-sm text-ink-soft underline underline-offset-4">info@gitvisha.com</a><p className="mt-1 text-xs text-muted-foreground">Contact address is a placeholder pending confirmation.</p></div>
        </div>
        <VehicleQuoteForm />
      </div>
    </section>

    <ProductSection eyebrow="The essentials" title="What is Car Insurance?" copy="Car insurance is a contract with an insurer that provides specified financial protection in exchange for a premium. Depending on the cover you choose, it can address legal liability to others and eligible damage to or loss of your own car. It does not cover every expense or every situation.">
      <figure className="mb-8 max-w-3xl"><img src={carAsset.url} alt="A car travelling on a road" width={1200} height={800} loading="lazy" decoding="async" className="aspect-[2/1] w-full rounded-md object-cover" /></figure>
      <div className="flex items-start gap-4 border-l-2 border-primary pl-5 text-sm leading-7 text-ink-soft"><CircleHelp aria-hidden="true" className="mt-1 size-5 shrink-0 text-primary" /><p>Look beyond the premium: the policy type, IDV, deductibles, exclusions, add-ons and claims conditions all shape the protection you actually receive.</p></div>
    </ProductSection>
    <ProductSection eyebrow="Why it matters" title="Protection for the road—and what it brings." tone="muted"><CoverageGrid items={benefits} /></ProductSection>
    <ProductSection eyebrow="Types of Car Insurance" title="Different needs. Different kinds of cover." copy="Start by understanding what each policy protects before choosing one."><CoverageGrid items={policyCards} /></ProductSection>
    <ProductSection eyebrow="What is covered?" title="Know what your protection can include." copy="These are common coverage categories, not a promise of cover under every policy. Own damage benefits require comprehensive or standalone own damage cover; liability benefits require liability cover." tone="muted"><CoverageGrid items={coverage} /></ProductSection>
    <ProductSection eyebrow="Add-on covers" title="Fine-tune protection around your car." copy="Add-ons are optional and usually cost extra. Availability, eligibility, limits and benefits depend on the insurer, vehicle and policy wording."><CoverageGrid items={addons} /></ProductSection>
    <ProductSection eyebrow="What is not covered?" title="The boundaries matter, too." tone="muted">
      <div className="grid gap-x-10 gap-y-6 sm:grid-cols-2">{exclusions.map(([title, copy]) => <article key={title} className="flex items-start gap-4 border-b border-border pb-6"><ShieldX aria-hidden="true" className="mt-1 size-5 shrink-0 text-ink-soft" /><div><h3 className="text-base font-semibold text-ink">{title}</h3><p className="mt-2 text-sm leading-6 text-ink-soft">{copy}</p></div></article>)}</div>
      <p className="mt-6 text-sm leading-6 text-ink-soft">This is a general overview, not an exhaustive list. Actual exclusions and claim conditions depend on the policy wording and selected cover. Read them before purchase.</p>
    </ProductSection>
    <ProductSection eyebrow="How the process works" title="A considered path to suitable coverage." tone="muted">
      <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{process.map(({ title, detail, icon: Icon }, index) => <li key={title} className="border-t border-border pt-6"><div className="flex items-center justify-between"><span className="font-mono text-sm text-primary">0{index + 1}</span><Icon aria-hidden="true" className="size-6 text-primary" /></div><h3 className="mt-5 text-lg font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-ink-soft">{detail}</p></li>)}</ol>
      <p className="mt-8 border-t border-border pt-5 text-xs leading-6 text-ink-soft">Policy issuance and commencement of cover depend on insurer acceptance, payment and applicable requirements. Completing this preview enquiry does not start this process or provide insurance.</p>
    </ProductSection>
    <ProductSection eyebrow="Claims assistance" title="Steady guidance when a claim arises." copy="An incident can feel overwhelming. Gitvisha’s role is to help you understand the next steps, organise relevant information and coordinate communication through the claims process.">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]"><div className="space-y-4">{["Notify the insurer promptly and take reasonable steps to prevent further loss.", "Keep photographs, policy details and relevant records; an FIR or other documentation may be required depending on the incident.", "Follow insurer instructions for inspection and repairs, and keep track of requests and claim references."].map((text) => <p key={text} className="flex gap-3 text-sm leading-7 text-ink-soft"><Siren aria-hidden="true" className="mt-1 size-4 shrink-0 text-primary" />{text}</p>)}</div><div className="border-l-2 border-primary pl-6"><p className="text-sm leading-7 text-ink-soft">The insurer determines admissibility and settlement under the policy. Gitvisha does not guarantee approval, a settlement amount or a timeline.</p><Button asChild variant="outline" className="mt-5 min-h-11"><a href="#quote">Discuss a claim <ArrowRight /></a></Button></div></div>
    </ProductSection>
    <ProductSection eyebrow="Why choose Gitvisha?" title="Clarity in cover. Consistency in support." tone="muted">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">{strengths.map((strength, index) => <div className="border-t border-border pt-5" key={strength}><span className="font-mono text-xs text-ink-soft">0{index + 1}</span><Check aria-hidden="true" className="mt-4 size-5 text-primary" /><h3 className="mt-4 text-base font-semibold leading-6 text-ink">{strength}</h3></div>)}</div>
      <p className="mt-8 max-w-3xl text-sm leading-7 text-ink-soft">We begin with your priorities, explain the choices in plain language and support informed decisions across the policy lifecycle—from initial questions to renewal and claims guidance.</p>
    </ProductSection>
    <ProductSection eyebrow="Frequently asked questions" title="A little clarity goes a long way.">
      <Accordion type="single" collapsible className="max-w-4xl">{faqs.map(([question, answer], index) => <AccordionItem key={question} value={`faq-${index}`}><AccordionTrigger className="min-h-14 gap-5 py-5 text-base font-semibold text-ink">{question}</AccordionTrigger><AccordionContent className="max-w-3xl text-sm leading-7 text-ink-soft">{answer}</AccordionContent></AccordionItem>)}</Accordion>
    </ProductSection>
    <section className="bg-accent py-14 text-ink lg:py-16"><div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 sm:items-start lg:flex-row lg:items-center lg:justify-between lg:px-8"><div><p className="mb-3 text-xs font-bold uppercase text-primary">Your next step</p><h2 className="text-3xl font-semibold sm:text-4xl">Make your next journey a considered one.</h2><p className="mt-4 text-base text-ink-soft">Start with your car. We’ll help you understand the cover.</p></div><Button asChild size="lg" className="min-h-12 shrink-0"><a href="#quote">Get a Quote <ArrowRight /></a></Button></div></section>
    <SiteFooter />
  </div>;
}
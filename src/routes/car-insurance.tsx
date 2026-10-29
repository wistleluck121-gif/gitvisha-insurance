import { useState, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowRight,
  CarFront,
  CheckCircle2,
  ChevronDown,
  Download,
  FileText,
  ShieldCheck,
} from "lucide-react";
import carInsuranceImg from "@/assets/car-insurance.webp";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { getProductVulnerabilities } from "@/lib/insurance/product-vulnerabilities";

export const Route = createFileRoute("/car-insurance")({
  head: () => ({
    meta: [
      { title: "Car Insurance — Coverage & Renewal Advice | Gitvisha" },
      {
        name: "description",
        content:
          "Explore comprehensive, third-party and own damage car insurance with Gitvisha. Understand cover, add-ons, exclusions and prepare a car insurance enquiry.",
      },
      { property: "og:title", content: "Car Insurance — Thoughtful Protection | Gitvisha" },
      {
        property: "og:description",
        content:
          "Make informed car insurance decisions with clear guidance on suitable cover, renewals, add-ons and claims support from Gitvisha.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/car-insurance" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/car-insurance" }],
  }),
  component: CarInsurancePage,
});

const coverOptions = [
  {
    title: "Comprehensive Car Protection",
    description:
      "Combines mandatory third-party liability with extensive own-damage coverage against accidents, theft, fire, and natural disasters.",
  },
  {
    title: "Standalone Own-Damage Cover",
    description:
      "Protects your vehicle against accidental physical damage, fire, and theft when you already maintain an active third-party liability policy.",
  },
  {
    title: "Third-Party Liability Protection",
    description:
      "Fulfills mandatory legal liabilities under the Motor Vehicles Act, covering bodily injury, death, and property damage caused to third parties.",
  },
  {
    title: "Zero Depreciation (Bumper-to-Bumper)",
    description:
      "Eliminates standard depreciation deductions on plastic, rubber, fiber, glass, and metal parts during collision repairs.",
  },
  {
    title: "Engine & Gearbox Hydrostatic Lock Protection",
    description:
      "Shields you against steep repair bills for consequential water ingestion, flood submergence, and hydrostatic lock during monsoons.",
  },
  {
    title: "24x7 Roadside Assistance & Consumables",
    description:
      "Towing, flat tyre replacement, battery jumpstarts, emergency fuel, and coverage for oil, nuts, and bolts in repairs.",
  },
];

const whoItSuits = [
  "New car buyers seeking comprehensive bumper-to-bumper protection and invoice value assurance",
  "Existing vehicle owners renewing policies and transferring accumulated No Claim Bonus (NCB)",
  "Luxury sedan, EV, and SUV owners requiring specialized zero-depreciation and original OEM part terms",
  "Daily commuters and highway travelers navigating flood-prone roads, potholes, and heavy traffic hazards",
  "Corporate and commercial fleet operators managing executive passenger sedans and company vehicles",
];

const considerations = [
  "Accurate Insured Declared Value (IDV) calibration reflecting realistic vehicle replacement value",
  "Depreciation deduction schedules on plastic, nylon, rubber, and painted metal components",
  "Engine hydrostatic lock and consequential loss exclusion terms during waterlogged conditions",
  "Compulsory and voluntary deductible slabs determining out-of-pocket claim participation",
  "No Claim Bonus (NCB) slab retention, claims history disclosure, and seamless renewal transfer proof",
];

const faqs: [string, string][] = [
  [
    "Is car insurance mandatory in India?",
    "Valid third-party liability insurance is legally required for every car driven on public roads in India under the Motor Vehicles Act. Comprehensive cover is optional but strongly recommended to protect against expensive accident repairs, theft, fire, and natural disasters.",
  ],
  [
    "How do Comprehensive and Third-Party policies differ?",
    "Third-party cover addresses covered legal liabilities for injury, death, or property damage to others; it does not pay for damage to your own vehicle. Comprehensive insurance combines third-party liability with own-damage protection for your car.",
  ],
  [
    "What is IDV and why is setting it accurately critical?",
    "Insured Declared Value (IDV) is the agreed insured market value of your vehicle for the policy year. Understating IDV lowers premium but leaves you underinsured during total loss or theft. Overstating it increases premium without higher claim settlements.",
  ],
  [
    "What is a No Claim Bonus (NCB) and how do I retain it?",
    "NCB is a progressive discount on your own-damage premium (from 20% up to 50%) earned for consecutive claim-free policy years. It belongs to the vehicle owner, not the car, and can be transferred seamlessly when replacing your vehicle.",
  ],
  [
    "What is the advantage of a Zero Depreciation add-on?",
    "In standard claims, insurers deduct up to 50% depreciation on plastic and rubber parts and up to 30% on metal panels. Zero Depreciation covers 100% replacement cost of eligible parts, saving you significant out-of-pocket expenses.",
  ],
  [
    "Can I renew my car insurance after it has expired?",
    "Yes, but if the policy expired more than 90 days ago, all accumulated NCB discount is forfeited. Additionally, insurers typically require a photo or video inspection before issuing fresh cover. Driving without valid mandatory cover is strictly illegal.",
  ],
  [
    "How does Gitvisha assist during an accident claim?",
    "Gitvisha helps you understand necessary notification deadlines, FIR/survey documents, and coordinates communication with insurers and network garages to ensure smooth, transparent claims resolution without undue friction.",
  ],
];

const exploreProducts = [
  { slug: "bike-insurance", title: "Bike Insurance" },
  { slug: "commercial-vehicle-insurance", title: "Commercial Vehicle Insurance" },
  { slug: "health-insurance", title: "Health Insurance", isDedicated: true },
  { slug: "property-fire-insurance", title: "Fire & Property Insurance" },
  { slug: "engineering-insurance", title: "Engineering Insurance" },
  { slug: "personal-accident-insurance", title: "Personal Accident Insurance" },
];

function CarInsurancePage() {
  const [sent, setSent] = useState(false);
  const [showAllVulnerabilities, setShowAllVulnerabilities] = useState(false);
  const vulnerabilities = getProductVulnerabilities("car-insurance");

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = encodeURIComponent(
      `Name: ${d.get("name")}\nVehicle / Registration: ${d.get("vehicle") || "Not provided"}\nPhone: ${d.get("phone")}\nEmail: ${d.get("email")}\nInsurance: Car Insurance\nMessage: ${d.get("message")}`,
    );
    setSent(true);
    window.location.href = `mailto:info@gitvisha.com?subject=${encodeURIComponent("Insurance enquiry — Car Insurance")}&body=${body}`;
  }

  return (
    <div className="gv-page">
      <SiteHeader product />
      <main>
        <section className="gv-product-hero">
          <div className="gv-container gv-product-hero-grid">
            <div className="gv-product-copy">
              <div className="gv-breadcrumb">
                <Link to="/">Home</Link>
                <span>/</span>
                <span>Insurance solutions</span>
                <span>/</span>
                <strong>Car Insurance</strong>
              </div>
              <span className="gv-kicker">
                <i className="gv-kicker-dot" /> INSURANCE · RISK · ADVISORY
              </span>
              <h1>
                Car Insurance<span className="gv-title-dot">.</span>
              </h1>
              <p className="gv-lead">Protection structured around real-world risk.</p>
              <p className="gv-product-intro">
                Understand cover options for your car, from new-car insurance to renewals and
                selected add-ons.
              </p>

              <div className="gv-hero-actions">
                <a className="gv-btn gv-btn-primary" href="#enquiry">
                  Request a consultation <ArrowRight size={17} />
                </a>

                <a
                  className="gv-btn gv-btn-light"
                  href="/brochures/gitvisha-health-motor-brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  <Download size={17} /> Brochure PDF
                </a>

                <a className="gv-btn gv-btn-light" href="#vulnerabilities">
                  <AlertTriangle size={17} /> Critical Exposures
                </a>

                <a className="gv-text-link" href="#coverage">
                  Explore coverage <ArrowRight size={16} />
                </a>
              </div>

              <div className="gv-trust-line">
                <ShieldCheck size={18} /> Thoughtful advice. Clear options. Support through the
                policy journey.
              </div>
            </div>

            <div className="gv-product-art gv-product-photo-art">
              <div className="gv-photo-frame">
                <img
                  src={carInsuranceImg}
                  alt="Car insurance and automotive risk advisory"
                  loading="eager"
                  decoding="async"
                />
                <span className="gv-photo-label">GITVISHA · RISK ADVISORY</span>
              </div>
              <div className="gv-art-card gv-art-card-top">
                <span className="gv-art-icon">
                  <CarFront size={24} />
                </span>
                <span>
                  <b>Risk, understood.</b>
                  <small>Start with what matters</small>
                </span>
              </div>
              <div className="gv-art-card gv-art-card-bottom">
                <span className="gv-art-check">
                  <CheckCircle2 size={21} />
                </span>
                <span>
                  <b>Cover that fits</b>
                  <small>Subject to policy terms</small>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Critical Vulnerabilities & Real-World Exposures Section */}
        {vulnerabilities.length > 0 && (
          <section className="gv-section bg-secondary/60" id="vulnerabilities">
            <div className="gv-container">
              <div className="gv-section-heading">
                <span className="gv-kicker">CRITICAL VULNERABILITIES & EXPOSURES</span>
                <h2>
                  Real-world risks <span>this policy is engineered to solve.</span>
                </h2>
                <p>
                  Commercial and personal risks rarely follow idealized assumptions. These are the
                  critical financial pitfalls, claim traps, and operational vulnerabilities that
                  proper policy structuring actively mitigates.
                </p>
              </div>

              <div className="grid gap-3.5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {vulnerabilities.map((v, i) => (
                  <article
                    key={v.title}
                    className={`flex-col justify-between rounded-xl border border-border bg-card p-4 sm:p-6 shadow-xs sm:shadow-sm transition-all hover:border-primary/50 hover:shadow-md ${
                      i >= 3 && !showAllVulnerabilities ? "hidden sm:flex" : "flex"
                    }`}
                  >
                    <div>
                      <div className="mb-2.5 flex items-center justify-between sm:mb-3">
                        <span className="flex items-center gap-1.5 rounded-md bg-rose-500/10 px-2 py-0.5 text-[10.5px] sm:px-2.5 sm:py-1 sm:text-[11px] font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                          <AlertTriangle className="size-3 sm:size-3.5" /> High-Impact Vulnerability
                        </span>
                        <span className="text-xs font-bold text-ink-soft/60">0{i + 1}</span>
                      </div>
                      <h3 className="mb-1.5 text-sm sm:text-base font-semibold leading-snug text-ink sm:mb-2">
                        {v.title}
                      </h3>
                      <p className="text-xs leading-relaxed text-ink-soft">{v.trigger}</p>
                    </div>

                    <div className="mt-4 border-t border-border pt-3 sm:mt-5 sm:pt-4">
                      <div className="mb-2 flex items-start gap-1.5 text-xs text-rose-600 dark:text-rose-400">
                        <span className="shrink-0 font-semibold">Impact: </span>
                        <span className="font-normal text-ink-soft">{v.impact}</span>
                      </div>
                      <div className="flex items-start gap-1.5 text-xs text-primary">
                        <ShieldCheck className="mt-0.5 size-3.5 shrink-0" />
                        <span className="shrink-0 font-semibold">Policy Solution: </span>
                        <span className="font-normal text-ink">{v.solution}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {vulnerabilities.length > 3 && (
                <div className="mt-4 text-center sm:hidden">
                  <button
                    type="button"
                    onClick={() => setShowAllVulnerabilities((v) => !v)}
                    className="w-full rounded-lg border border-border bg-card py-2 text-xs font-semibold text-primary transition-colors hover:bg-muted"
                  >
                    {showAllVulnerabilities
                      ? "Show Fewer Vulnerabilities"
                      : `View All ${vulnerabilities.length} Vulnerabilities`}
                  </button>
                </div>
              )}
            </div>
          </section>
        )}

        <section className="gv-section" id="coverage">
          <div className="gv-container">
            <div className="gv-section-heading">
              <span className="gv-kicker">UNDERSTAND YOUR OPTIONS</span>
              <h2>
                Protection begins with <span>the right questions.</span>
              </h2>
              <p>
                These are discussion points, not a promise that every risk is covered. Final cover
                depends on policy wording and insurer acceptance.
              </p>
            </div>
            <div className="gv-info-grid">
              {coverOptions.map((x, i) => (
                <article className="gv-info-card" key={x.title}>
                  <span className="gv-number">0{i + 1}</span>
                  <CheckCircle2 size={22} />
                  <h3>{x.title}</h3>
                  <p>{x.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="gv-section gv-section-tint">
          <div className="gv-container gv-two-col">
            <div>
              <span className="gv-kicker">WHO IT MAY SUIT</span>
              <h2>
                Built around your <span>real-world exposure.</span>
              </h2>
              <p className="gv-body-copy">
                The right structure starts with understanding your assets, operations, people and
                contractual responsibilities.
              </p>
            </div>
            <div className="gv-check-list">
              {whoItSuits.map((x) => (
                <div key={x}>
                  <CheckCircle2 size={20} />
                  <span>{x}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="gv-section">
          <div className="gv-container gv-two-col">
            <div>
              <span className="gv-kicker">BEFORE YOU CHOOSE</span>
              <h2>
                Details that make <span>a difference.</span>
              </h2>
              <p className="gv-body-copy">
                Compare more than price. Review limits, deductibles, exclusions and policy
                conditions.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <a href="#enquiry" className="gv-btn gv-btn-outline">
                  Discuss your requirement <ArrowRight size={17} />
                </a>
                <a
                  href="/brochures/gitvisha-health-motor-brochure.pdf"
                  className="gv-btn gv-btn-light"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  <FileText size={17} /> Download Motor & Health Brochure
                </a>
              </div>
            </div>
            <div className="gv-consideration-list">
              {considerations.map((x, i) => (
                <div key={x}>
                  <span>0{i + 1}</span>
                  <p>{x}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="gv-section gv-faq-section">
          <div className="gv-container gv-faq-layout">
            <div>
              <span className="gv-kicker">GOOD TO KNOW</span>
              <h2>
                Questions, <span>answered.</span>
              </h2>
              <p className="gv-body-copy">
                Need more clarity? Send us your requirement and our team can help explore the next
                step.
              </p>
              <a href="#enquiry" className="gv-text-link">
                Ask our team <ArrowRight size={16} />
              </a>
            </div>
            <div className="gv-faq-list">
              {faqs.map(([q, a]) => (
                <details key={q}>
                  <summary>
                    {q}
                    <ChevronDown size={18} />
                  </summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="gv-enquiry-section" id="enquiry">
          <div className="gv-container gv-enquiry-grid">
            <div>
              <span className="gv-kicker gv-kicker-light">LET’S TALK ABOUT YOUR RISK</span>
              <h2>
                Make your next decision with <span>more clarity.</span>
              </h2>
              <p>
                Tell us about your requirement. Your email application will open with the enquiry
                ready to send.
              </p>
              <div className="gv-enquiry-points">
                <div>
                  <CheckCircle2 size={18} /> A conversation focused on your needs
                </div>
                <div>
                  <CheckCircle2 size={18} /> Options subject to underwriting
                </div>
                <div>
                  <CheckCircle2 size={18} /> Clear next steps, without pressure
                </div>
                <div>
                  <FileText size={18} /> Official brochure available for offline reference
                </div>
              </div>
            </div>
            <form className="gv-enquiry-form" onSubmit={submit}>
              <div className="gv-form-heading">
                <span className="gv-form-icon">
                  <CarFront size={21} />
                </span>
                <div>
                  <h3>Request a consultation</h3>
                  <p>Fields marked * are required.</p>
                </div>
              </div>
              <div className="gv-form-grid">
                <label>
                  Full name *<input name="name" required minLength={2} placeholder="Your name" />
                </label>
                <label>
                  Car Make & Model / Reg
                  <input name="vehicle" placeholder="e.g. Maruti Baleno / DL01AB1234" />
                </label>
                <label>
                  Phone *<input name="phone" required type="tel" minLength={8} placeholder="+91" />
                </label>
                <label>
                  Email *<input name="email" required type="email" placeholder="you@company.com" />
                </label>
                <label className="gv-field-wide">
                  Requirement *
                  <textarea
                    name="message"
                    required
                    minLength={10}
                    rows={3}
                    placeholder="Tell us about your car insurance requirement (new car, policy renewal, NCB transfer, zero-dep add-on, etc.)"
                  />
                </label>
              </div>
              <button className="gv-btn gv-btn-primary gv-submit">
                Prepare enquiry <ArrowRight size={17} />
              </button>
              {sent && (
                <p className="gv-form-status" role="status">
                  Your email app should open with the enquiry prepared. If it does not, email
                  info@gitvisha.com.
                </p>
              )}
              <p className="gv-form-note">
                This demo opens an email draft; it does not store your details on a server.
              </p>
            </form>
          </div>
        </section>

        <section className="gv-section">
          <div className="gv-container">
            <div className="gv-section-heading">
              <span className="gv-kicker">EXPLORE MORE</span>
              <h2>
                Other ways we can <span>help protect what matters.</span>
              </h2>
            </div>
            <div className="gv-product-grid">
              {exploreProducts.map((x) =>
                x.isDedicated ? (
                  <Link key={x.title} to="/health-insurance" className="gv-product-mini">
                    {x.title}
                    <ArrowRight size={16} />
                  </Link>
                ) : (
                  <Link
                    key={x.title}
                    to="/products/$productSlug"
                    params={{ productSlug: x.slug }}
                    className="gv-product-mini"
                  >
                    {x.title}
                    <ArrowRight size={16} />
                  </Link>
                ),
              )}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

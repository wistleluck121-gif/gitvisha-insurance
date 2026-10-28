import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { useState, type FormEvent } from "react";
import {
  Building2,
  Landmark,
  Warehouse,
  Sun,
  Server,
  HeartPulse,
  Store,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ChevronDown,
  Layers,
  Sparkles,
  ShieldAlert,
} from "lucide-react";
import { industriesData, type IndustryData } from "@/lib/insurance/industries";

// Industry images mapped to high-resolution 4:3 assets
import propertyFireImg from "@/assets/products/property-fire.jpg";
import commercialPropertyImg from "@/assets/products/commercial-property.jpg";
import engineeringImg from "@/assets/products/engineering.jpg";
import roadConstructionImg from "@/assets/products/road-construction.jpg";
import solarPumpingImg from "@/assets/products/solar-pumping.jpg";
import marineImg from "@/assets/products/marine.jpg";
import electronicEquipmentImg from "@/assets/products/electronic-equipment.jpg";
import groupHealthImg from "@/assets/products/group-health.jpg";

const industryImages: Record<string, { src: string; alt: string }> = {
  manufacturing: {
    src: propertyFireImg,
    alt: "Industrial manufacturing plant and heavy production machinery",
  },
  "infrastructure-construction": {
    src: roadConstructionImg,
    alt: "Civil infrastructure, road paving, and construction project execution",
  },
  "renewable-energy-solar": {
    src: solarPumpingImg,
    alt: "Agricultural solar pumping arrays and renewable energy infrastructure",
  },
  "logistics-warehousing": {
    src: marineImg,
    alt: "Global supply chain logistics, marine freight, and warehouse storage",
  },
  "it-tech-corporate": {
    src: electronicEquipmentImg,
    alt: "Enterprise data center servers, cloud infrastructure, and software workstations",
  },
  "healthcare-pharmaceuticals": {
    src: groupHealthImg,
    alt: "Healthcare facilities, diagnostic equipment, and medical professionals",
  },
  "retail-hospitality": {
    src: commercialPropertyImg,
    alt: "Commercial shopping complexes, boutique hotels, and dining premises",
  },
};

const industryIcons: Record<string, typeof Building2> = {
  manufacturing: Building2,
  "infrastructure-construction": Landmark,
  "renewable-energy-solar": Sun,
  "logistics-warehousing": Warehouse,
  "it-tech-corporate": Server,
  "healthcare-pharmaceuticals": HeartPulse,
  "retail-hospitality": Store,
};

export const Route = createFileRoute("/industries/$industrySlug")({
  component: IndustryDetailPage,
  head: ({ params }) => {
    const data = industriesData[params.industrySlug ?? ""];
    return {
      meta: [
        {
          title: data
            ? `${data.title} — Industry Risk & Insurance | Gitvisha`
            : "Industry Risk Solutions | Gitvisha",
        },
        {
          name: "description",
          content:
            data?.heroIntro ??
            "Analyze sector-specific operational, asset, liability, and workforce exposures with Gitvisha.",
        },
      ],
    };
  },
});

function IndustryDetailPage() {
  const { industrySlug } = Route.useParams();
  const data: IndustryData | undefined = industriesData[industrySlug];
  const [sent, setSent] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  if (!data) {
    return (
      <div className="gv-page">
        <SiteHeader />
        <main>
          <section className="gv-container gv-not-found py-20 text-center">
            <h1 className="text-3xl font-bold text-ink">Industry Not Found</h1>
            <p className="mt-4 text-ink-soft">
              Explore our core sector risk profiles and tailored insurance structures:
            </p>
            <div className="gv-product-grid mt-8">
              {Object.values(industriesData).map((ind) => (
                <Link
                  key={ind.slug}
                  to="/industries/$industrySlug"
                  params={{ industrySlug: ind.slug }}
                  className="gv-product-mini"
                >
                  {ind.title}
                  <ArrowRight size={16} />
                </Link>
              ))}
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    );
  }

  const IconComponent = industryIcons[data.slug] ?? Building2;
  const heroImage = industryImages[data.slug] ?? {
    src: engineeringImg,
    alt: data.title,
  };

  const categories = [
    "All",
    "Asset & Property",
    "Liability & Legal",
    "Operational & Interruption",
    "People & Workforce",
  ];
  const filteredRisks =
    activeCategory === "All" ? data.risks : data.risks.filter((r) => r.category === activeCategory);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = encodeURIComponent(
      `Name: ${d.get("name")}\nCompany: ${d.get("company")}\nPhone: ${d.get("phone")}\nEmail: ${d.get("email")}\nIndustry: ${data?.title}\nRequirement: ${d.get("message")}`,
    );
    setSent(true);
    window.location.href = `mailto:info@gitvisha.com?subject=${encodeURIComponent(
      "Industry Risk Advisory Enquiry — " + data?.title,
    )}&body=${body}`;
  }

  return (
    <div className="gv-page">
      <SiteHeader />
      <main>
        {/* Industry Hero Section */}
        <section className="gv-product-hero">
          <div className="gv-container gv-product-hero-grid">
            <div className="gv-product-copy">
              <div className="gv-breadcrumb">
                <Link to="/">Home</Link>
                <span>/</span>
                <Link to="/" hash="industries">
                  Industries
                </Link>
                <span>/</span>
                <strong>{data.shortTitle}</strong>
              </div>
              <span className="gv-kicker">
                <i className="gv-kicker-dot" /> SECTOR RISK INTELLIGENCE · ADVISORY
              </span>
              <h1>
                {data.title}
                <span className="gv-title-dot">.</span>
              </h1>
              <p className="gv-lead">{data.heroHeadline}</p>
              <p className="gv-product-intro">{data.heroIntro}</p>

              <div className="gv-hero-actions">
                <a className="gv-btn gv-btn-primary" href="#risks">
                  Explore Sector Risks <ArrowRight size={17} />
                </a>
                <a className="gv-btn gv-btn-light" href="#solutions">
                  <Layers size={17} /> Insurance Solutions
                </a>
                <a className="gv-text-link" href="#enquiry">
                  Request Risk Audit <ArrowRight size={16} />
                </a>
              </div>

              <div className="gv-trust-line">
                <ShieldCheck size={18} /> Deep sector domain expertise. Bespoke policy structuring.
                Claim advocacy.
              </div>
            </div>

            <div className="gv-product-art gv-product-photo-art">
              <div className="gv-photo-frame">
                <img src={heroImage.src} alt={heroImage.alt} loading="eager" decoding="async" />
                <span className="gv-photo-label">GITVISHA · SECTOR RISK INTELLIGENCE</span>
              </div>
              <div className="gv-art-card gv-art-card-top">
                <span className="gv-art-icon">
                  <IconComponent size={24} />
                </span>
                <span>
                  <b>Sector Exposure</b>
                  <small>{data.shortTitle} Focus</small>
                </span>
              </div>
              <div className="gv-art-card gv-art-card-bottom">
                <span className="gv-art-check">
                  <CheckCircle2 size={21} />
                </span>
                <span>
                  <b>Comprehensive Mitigation</b>
                  <small>Custom Insurer Wording</small>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Types of Risks in this Industry */}
        <section className="gv-section" id="risks">
          <div className="gv-container">
            <div className="gv-section-heading">
              <span className="gv-kicker">TYPES OF RISKS & EXPOSURES</span>
              <h2>
                Critical vulnerabilities in <span>{data.shortTitle}.</span>
              </h2>
              <p>{data.riskOverview}</p>
            </div>

            {/* Risk Category Filters */}
            <div className="mb-5 flex flex-wrap gap-1.5 sm:mb-8 sm:gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`cursor-pointer rounded-full px-3 py-1.5 text-xs font-semibold transition-all sm:px-4 sm:py-2 ${
                    activeCategory === cat
                      ? "bg-primary text-white shadow-sm"
                      : "bg-secondary text-ink-soft hover:bg-border"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Risk Cards Grid */}
            <div className="grid gap-3.5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredRisks.map((risk, idx) => (
                <article
                  key={risk.title}
                  className="flex flex-col justify-between rounded-xl border border-border bg-card p-4 sm:p-6 shadow-xs sm:shadow-sm transition-all hover:border-primary/50 hover:shadow-md"
                >
                  <div>
                    <div className="mb-2.5 flex items-center justify-between sm:mb-3">
                      <span className="rounded-md bg-secondary px-2 py-0.5 text-[10.5px] sm:px-2.5 sm:py-1 sm:text-[11px] font-bold uppercase tracking-wider text-primary">
                        {risk.category}
                      </span>
                      <span className="text-xs font-bold text-ink-soft/60">0{idx + 1}</span>
                    </div>
                    <h3 className="mb-1.5 text-sm sm:text-base font-semibold leading-snug text-ink sm:mb-2">
                      {risk.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-ink-soft">{risk.description}</p>
                  </div>

                  <div className="mt-4 border-t border-border pt-3 sm:mt-5 sm:pt-4">
                    <div className="mb-2 flex items-start gap-1.5 text-xs text-rose-600 dark:text-rose-400">
                      <AlertTriangle className="mt-0.5 size-3.5 shrink-0" />
                      <span className="font-semibold">Impact: </span>
                      <span className="font-normal text-ink-soft">{risk.impact}</span>
                    </div>
                    <div className="flex items-start gap-1.5 text-xs text-primary">
                      <ShieldCheck className="mt-0.5 size-3.5 shrink-0" />
                      <span className="font-semibold">Recommended: </span>
                      <span className="font-normal text-ink">{risk.recommendedCover}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Tailored Insurance Solutions */}
        <section className="gv-section gv-section-tint" id="solutions">
          <div className="gv-container">
            <div className="gv-section-heading">
              <span className="gv-kicker">RECOMMENDED INSURANCE POLICIES</span>
              <h2>
                Customized policies to <span>neutralize your exposures.</span>
              </h2>
              <p>
                Gitvisha works with leading general insurers to benchmark and place bespoke policies
                tailored to your scale and operational reality.
              </p>
            </div>

            <div className="grid gap-3.5 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {data.solutions.map((sol) => (
                <Link
                  key={sol.name}
                  to="/products/$productSlug"
                  params={{ productSlug: sol.productSlug }}
                  className="group flex flex-col justify-between rounded-xl border border-border bg-card p-4 sm:p-6 shadow-xs sm:shadow-sm transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg"
                >
                  <div>
                    <div className="mb-2.5 flex items-center justify-between sm:mb-3">
                      <span className="flex size-9 sm:size-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                        <Sparkles size={18} />
                      </span>
                      <ArrowRight className="size-3.5 text-ink-soft transition-transform group-hover:translate-x-1 group-hover:text-primary sm:size-4" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-ink group-hover:text-primary">
                      {sol.name}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-ink-soft sm:mt-2">{sol.summary}</p>
                  </div>

                  <span className="mt-3.5 flex items-center gap-1.5 text-xs font-semibold text-primary sm:mt-4">
                    View policy details <ArrowRight size={13} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Underwriter's Risk Assessment Checklist */}
        <section className="gv-section">
          <div className="gv-container gv-two-col">
            <div>
              <span className="gv-kicker">UNDERWRITING PARAMETERS</span>
              <h2>
                What insurers inspect in <span>{data.shortTitle}.</span>
              </h2>
              <p className="gv-body-copy">
                Insurers price risks based on loss prevention safeguards, operational maintenance,
                and safety compliance. Here is what we audit before going to market on your behalf.
              </p>
              <div className="mt-6">
                <a href="#enquiry" className="gv-btn gv-btn-outline">
                  Schedule a Pre-Quote Audit <ArrowRight size={17} />
                </a>
              </div>
            </div>
            <div className="gv-consideration-list">
              {data.underwritingChecklist.map((item, i) => (
                <div key={item}>
                  <span>0{i + 1}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Industry FAQs */}
        <section className="gv-section gv-faq-section">
          <div className="gv-container gv-faq-layout">
            <div>
              <span className="gv-kicker">SECTOR EXPERTISE</span>
              <h2>
                Frequently asked <span>risk questions.</span>
              </h2>
              <p className="gv-body-copy">
                Have questions specific to your facility, assets, or contract wording? Our advisory
                team is ready to help.
              </p>
              <a href="#enquiry" className="gv-text-link">
                Speak to our sector specialists <ArrowRight size={16} />
              </a>
            </div>
            <div className="gv-faq-list">
              {data.faqs.map(([q, a]) => (
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

        {/* Section 5: Consultation Form */}
        <section className="gv-enquiry-section" id="enquiry">
          <div className="gv-container gv-enquiry-grid">
            <div>
              <span className="gv-kicker gv-kicker-light">SECTOR RISK CONSULTATION</span>
              <h2>
                Discuss your <span>{data.shortTitle}</span> risk portfolio.
              </h2>
              <p>
                Let our corporate brokers analyze your existing policies, deductibles, and uninsured
                exposures with an objective perspective.
              </p>
              <div className="gv-enquiry-points">
                <div>
                  <CheckCircle2 size={18} /> Thorough policy wording and gap audit
                </div>
                <div>
                  <CheckCircle2 size={18} /> Competitive pricing across Tier-1 general insurers
                </div>
                <div>
                  <CheckCircle2 size={18} /> Rapid claims settlement advocacy
                </div>
                <div>
                  <ShieldAlert size={18} /> Uninsured risk vulnerability identification
                </div>
              </div>
            </div>

            <form className="gv-enquiry-form" onSubmit={submit}>
              <div className="gv-form-heading">
                <span className="gv-form-icon">
                  <IconComponent size={21} />
                </span>
                <div>
                  <h3>Request an Industry Risk Audit</h3>
                  <p>Fields marked * are required.</p>
                </div>
              </div>
              <div className="gv-form-grid">
                <label>
                  Full name *<input name="name" required minLength={2} placeholder="Your name" />
                </label>
                <label>
                  Company *<input name="company" required placeholder="Company name" />
                </label>
                <label>
                  Phone *<input name="phone" required type="tel" minLength={8} placeholder="+91" />
                </label>
                <label>
                  Email *<input name="email" required type="email" placeholder="you@company.com" />
                </label>
                <label className="gv-field-wide">
                  Specific Risks or Facilities *
                  <textarea
                    name="message"
                    required
                    minLength={10}
                    rows={3}
                    placeholder={`Tell us about your ${data.shortTitle.toLowerCase()} plants, locations, or key risk concerns`}
                  />
                </label>
              </div>
              <button className="gv-btn gv-btn-primary gv-submit">
                Prepare Advisory Enquiry <ArrowRight size={17} />
              </button>
              {sent && (
                <p className="gv-form-status" role="status">
                  Your email app should open with the prepared advisory enquiry. If it does not,
                  please write to info@gitvisha.com.
                </p>
              )}
              <p className="gv-form-note">
                Gitvisha maintains strict non-disclosure standards for all client risk data.
              </p>
            </form>
          </div>
        </section>

        {/* Section 6: Explore More Industries */}
        <section className="gv-section">
          <div className="gv-container">
            <div className="gv-section-heading">
              <span className="gv-kicker">CROSS-INDUSTRY COVERAGE</span>
              <h2>
                Explore risk profiles for <span>other key sectors.</span>
              </h2>
            </div>
            <div className="gv-product-grid">
              {Object.values(industriesData)
                .filter((x) => x.slug !== industrySlug)
                .map((ind) => (
                  <Link
                    key={ind.slug}
                    to="/industries/$industrySlug"
                    params={{ industrySlug: ind.slug }}
                    className="gv-product-mini"
                  >
                    {ind.title}
                    <ArrowRight size={16} />
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

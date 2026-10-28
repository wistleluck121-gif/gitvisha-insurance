import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
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
  Layers,
  Sparkles,
} from "lucide-react";
import { industriesData } from "@/lib/insurance/industries";

import propertyFireImg from "@/assets/products/property-fire.jpg";
import commercialPropertyImg from "@/assets/products/commercial-property.jpg";
import roadConstructionImg from "@/assets/products/road-construction.jpg";
import solarPumpingImg from "@/assets/products/solar-pumping.jpg";
import marineImg from "@/assets/products/marine.jpg";
import electronicEquipmentImg from "@/assets/products/electronic-equipment.jpg";
import groupHealthImg from "@/assets/products/group-health.jpg";

const industryImages: Record<string, string> = {
  manufacturing: propertyFireImg,
  "infrastructure-construction": roadConstructionImg,
  "renewable-energy-solar": solarPumpingImg,
  "logistics-warehousing": marineImg,
  "it-tech-corporate": electronicEquipmentImg,
  "healthcare-pharmaceuticals": groupHealthImg,
  "retail-hospitality": commercialPropertyImg,
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

export const Route = createFileRoute("/industries/")({
  component: IndustriesIndexPage,
  head: () => ({
    meta: [
      { title: "Industries & Sector Risk Profiles | Gitvisha" },
      {
        name: "description",
        content:
          "Explore industry-specific risks across manufacturing, construction, logistics, renewable energy, IT, healthcare, and retail with Gitvisha.",
      },
    ],
  }),
});

function IndustriesIndexPage() {
  const industries = Object.values(industriesData);

  return (
    <div className="gv-page">
      <SiteHeader />
      <main>
        {/* Hero Section */}
        <section className="gv-product-hero">
          <div className="gv-container">
            <div className="mx-auto max-w-3xl text-center">
              <div className="gv-breadcrumb justify-center">
                <Link to="/">Home</Link>
                <span>/</span>
                <strong>Industries</strong>
              </div>
              <span className="gv-kicker">
                <i className="gv-kicker-dot" /> SECTOR-SPECIFIC RISK INTELLIGENCE
              </span>
              <h1 className="mt-2 text-2xl font-bold tracking-tight text-ink sm:mt-3 sm:text-4xl lg:text-5xl">
                Industry context shapes <span>better risk conversations.</span>
              </h1>
              <p className="mt-3 text-xs leading-relaxed text-ink-soft sm:mt-4 sm:text-base sm:leading-relaxed lg:text-lg">
                Every sector faces a different blend of operational, asset, liability, and people
                exposures. Select your industry below to review critical vulnerabilities,
                underwriting benchmarks, and tailored insurance structures.
              </p>
            </div>
          </div>
        </section>

        {/* Industry Cards Grid */}
        <section className="gv-section">
          <div className="gv-container">
            <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {industries.map((ind) => {
                const Icon = industryIcons[ind.slug] ?? Building2;
                const img = industryImages[ind.slug] ?? propertyFireImg;

                return (
                  <article
                    key={ind.slug}
                    className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-xs transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg sm:rounded-2xl sm:shadow-sm"
                  >
                    <div className="relative h-36 w-full overflow-hidden bg-secondary sm:h-48">
                      <img
                        src={img}
                        alt={ind.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-2.5 left-3 flex items-center gap-2 text-white sm:bottom-3 sm:left-4">
                        <span className="flex size-7 items-center justify-center rounded-lg bg-primary text-white shadow sm:size-8">
                          <Icon size={16} />
                        </span>
                        <span className="text-[11px] font-bold uppercase tracking-wider sm:text-xs">
                          {ind.shortTitle}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col justify-between p-4 sm:p-6">
                      <div>
                        <h2 className="text-base font-bold text-ink transition-colors group-hover:text-primary sm:text-lg">
                          {ind.title}
                        </h2>
                        <p className="mt-1.5 line-clamp-3 text-xs leading-relaxed text-ink-soft sm:mt-2">
                          {ind.heroIntro}
                        </p>

                        <div className="mt-3 border-t border-border pt-3 sm:mt-4 sm:pt-4">
                          <p className="mb-1.5 text-[10.5px] font-bold uppercase tracking-wider text-primary sm:mb-2 sm:text-[11px]">
                            Key Risks Addressed:
                          </p>
                          <ul className="space-y-1 text-xs text-ink-soft sm:space-y-1.5">
                            {ind.risks.slice(0, 3).map((r) => (
                              <li key={r.title} className="flex items-start gap-1.5">
                                <AlertTriangle className="mt-0.5 size-3 shrink-0 text-amber-500" />
                                <span className="line-clamp-1">{r.title}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-4 border-t border-border pt-3 sm:mt-6 sm:pt-4">
                        <Link
                          to="/industries/$industrySlug"
                          params={{ industrySlug: ind.slug }}
                          className="flex items-center justify-between text-xs font-bold text-primary transition-colors group-hover:text-primary-dark"
                        >
                          <span>Explore Sector Risks & Solutions</span>
                          <ArrowRight
                            size={14}
                            className="transition-transform group-hover:translate-x-1 sm:size-[15px]"
                          />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Global Risk Advisory CTA */}
        <section className="gv-enquiry-section">
          <div className="gv-container text-center">
            <span className="gv-kicker gv-kicker-light">TAILORED RISK PLACEMENT</span>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Operating across multiple sectors or specialized niches?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/80">
              Gitvisha structures enterprise policies that bridge multi-industry exposures—from
              complex manufacturing conglomerates to specialized infrastructure public-private
              partnerships.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link to="/" hash="contact" className="gv-btn gv-btn-primary">
                Contact Advisory Team <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

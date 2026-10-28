import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  Menu,
  ShieldCheck,
  X,
  Building2,
  Landmark,
  Warehouse,
  Sun,
  Server,
  HeartPulse,
  Store,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { productCategories } from "@/lib/insurance/catalogue";
import gitvishaLogo from "@/assets/gitvisha-heder.webp";

function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <Link
      to="/"
      hash="home"
      className="inline-flex shrink-0 items-center"
      aria-label="Gitvisha home"
    >
      <img
        src={gitvishaLogo}
        alt="Gitvisha — Infinite Trust, Secure Peace"
        width={512}
        height={178}
        decoding="async"
        className={`h-auto max-w-full object-contain ${
          light ? "w-[190px] xs:w-[240px] sm:w-[300px]" : "w-[145px] xs:w-[175px] sm:w-[215px]"
        }`}
      />
    </Link>
  );
}

export const industryNavItems = [
  {
    name: "Manufacturing",
    slug: "manufacturing",
    desc: "Machinery breakdown, factory fire & product liability",
    icon: Building2,
  },
  {
    name: "Infrastructure & Roads",
    slug: "infrastructure-construction",
    desc: "Civil CAR/EAR, heavy plant & third-party damage",
    icon: Landmark,
  },
  {
    name: "Renewable & Solar",
    slug: "renewable-energy-solar",
    desc: "Solar pumping, PV hailstorm & remote theft",
    icon: Sun,
  },
  {
    name: "Logistics & Warehousing",
    slug: "logistics-warehousing",
    desc: "Marine cargo, stock declaration & fleet",
    icon: Warehouse,
  },
  {
    name: "IT, Tech & Corporate",
    slug: "it-tech-corporate",
    desc: "Cyber liability, Tech E&O, D&O & hardware",
    icon: Server,
  },
  {
    name: "Healthcare & Pharma",
    slug: "healthcare-pharmaceuticals",
    desc: "Medical malpractice, MRI/CT & hospital package",
    icon: HeartPulse,
  },
  {
    name: "Retail & Hospitality",
    slug: "retail-hospitality",
    desc: "Guest public liability, burglary & kitchen fire",
    icon: Store,
  },
];

export function SiteHeader({ product = false }: { product?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [desktopInsuranceOpen, setDesktopInsuranceOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [desktopIndustriesOpen, setDesktopIndustriesOpen] = useState(false);

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setProductsOpen(false);
    setMobileIndustriesOpen(false);
  };

  const closeDesktopMenu = () => {
    setDesktopInsuranceOpen(false);
    setDesktopIndustriesOpen(false);
    (document.activeElement as HTMLElement | null)?.blur();
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card">
      <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 sm:gap-3">
          {product && (
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="size-9 sm:size-10 shrink-0 lg:hidden"
              aria-label="Back to home"
            >
              <Link to="/">
                <ArrowLeft className="size-4 sm:size-5" />
              </Link>
            </Button>
          )}
          <BrandMark />
        </div>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-5 xl:gap-6 lg:flex" aria-label="Primary navigation">
          <Link
            to="/"
            hash="home"
            className="text-xs font-semibold text-ink-soft transition-colors hover:text-primary"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="text-xs font-semibold text-ink-soft transition-colors hover:text-primary"
          >
            About Us
          </Link>

          {/* Insurance dropdown: opens on hover/click and immediately closes when a product is clicked */}
          <div
            className="relative"
            onMouseEnter={() => setDesktopInsuranceOpen(true)}
            onMouseLeave={() => setDesktopInsuranceOpen(false)}
          >
            <button
              type="button"
              onClick={() => setDesktopInsuranceOpen((v) => !v)}
              className="flex h-11 cursor-pointer items-center gap-1.5 text-xs font-semibold text-ink-soft transition-colors hover:text-primary focus-visible:text-primary"
              aria-haspopup="true"
              aria-expanded={desktopInsuranceOpen}
              aria-controls="desktop-insurance-menu"
            >
              Insurance
              <ChevronDown
                className={`size-3.5 transition-transform duration-200 ${
                  desktopInsuranceOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              id="desktop-insurance-menu"
              className={`absolute left-1/2 top-full z-50 w-[700px] -translate-x-1/2 rounded-xl border border-border bg-card p-5 shadow-xl transition-all duration-200 ${
                desktopInsuranceOpen
                  ? "visible pointer-events-auto translate-y-0 opacity-100"
                  : "invisible pointer-events-none translate-y-2 opacity-0"
              }`}
            >
              <div className="grid grid-cols-4 gap-4">
                {productCategories.map((category) => (
                  <div key={category.id}>
                    <p className="mb-2 text-xs font-bold text-primary">{category.name}</p>

                    <div className="grid gap-1">
                      {category.products.map(({ name, slug, icon: Icon }) =>
                        slug === "car-insurance" ? (
                          <Link
                            key={slug}
                            to="/car-insurance"
                            onClick={closeDesktopMenu}
                            className="flex min-h-10 items-start gap-2 rounded-md px-2 py-2 text-xs leading-5 text-ink-soft transition-colors hover:bg-secondary hover:text-primary"
                          >
                            <Icon className="mt-0.5 size-4 shrink-0 text-primary" />
                            <span>{name}</span>
                          </Link>
                        ) : slug === "health-insurance" ? (
                          <Link
                            key={slug}
                            to="/health-insurance"
                            onClick={closeDesktopMenu}
                            className="flex min-h-10 items-start gap-2 rounded-md px-2 py-2 text-xs leading-5 text-ink-soft transition-colors hover:bg-secondary hover:text-primary"
                          >
                            <Icon className="mt-0.5 size-4 shrink-0 text-primary" />
                            <span>{name}</span>
                          </Link>
                        ) : (
                          <Link
                            key={slug}
                            to="/products/$productSlug"
                            params={{ productSlug: slug }}
                            onClick={closeDesktopMenu}
                            className="flex min-h-10 items-start gap-2 rounded-md px-2 py-2 text-xs leading-5 text-ink-soft transition-colors hover:bg-secondary hover:text-primary"
                          >
                            <Icon className="mt-0.5 size-4 shrink-0 text-primary" />
                            <span>{name}</span>
                          </Link>
                        ),
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-xs text-ink-soft">
                <span>Protection shaped around your priorities.</span>
                <Link
                  to="/"
                  hash="solutions"
                  onClick={closeDesktopMenu}
                  className="flex items-center gap-2 font-semibold text-primary hover:underline"
                >
                  All insurance solutions
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Industries dropdown: opens on hover/click and immediately closes when an industry is clicked */}
          <div
            className="relative"
            onMouseEnter={() => setDesktopIndustriesOpen(true)}
            onMouseLeave={() => setDesktopIndustriesOpen(false)}
          >
            <button
              type="button"
              onClick={() => setDesktopIndustriesOpen((v) => !v)}
              className="flex h-11 cursor-pointer items-center gap-1.5 text-xs font-semibold text-ink-soft transition-colors hover:text-primary focus-visible:text-primary"
              aria-haspopup="true"
              aria-expanded={desktopIndustriesOpen}
              aria-controls="desktop-industries-menu"
            >
              Industries
              <ChevronDown
                className={`size-3.5 transition-transform duration-200 ${
                  desktopIndustriesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              id="desktop-industries-menu"
              className={`absolute left-1/2 top-full z-50 w-[580px] -translate-x-1/2 rounded-xl border border-border bg-card p-5 shadow-xl transition-all duration-200 ${
                desktopIndustriesOpen
                  ? "visible pointer-events-auto translate-y-0 opacity-100"
                  : "invisible pointer-events-none translate-y-2 opacity-0"
              }`}
            >
              <div className="mb-3 flex items-center justify-between border-b border-border pb-3">
                <div>
                  <p className="text-xs font-bold text-primary">Sector Risk Profiles</p>
                  <p className="text-[11px] text-ink-soft">
                    Tailored operational & asset risk analysis across core industries
                  </p>
                </div>
                <Link
                  to="/industries"
                  onClick={closeDesktopMenu}
                  className="flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                >
                  View all sectors <ArrowRight className="size-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {industryNavItems.map(({ name, slug, desc, icon: Icon }) => (
                  <Link
                    key={slug}
                    to="/industries/$industrySlug"
                    params={{ industrySlug: slug }}
                    onClick={closeDesktopMenu}
                    className="group flex items-start gap-2.5 rounded-lg p-2 transition-colors hover:bg-secondary"
                  >
                    <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <Icon className="size-3.5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-ink transition-colors group-hover:text-primary">
                        {name}
                      </p>
                      <p className="line-clamp-1 text-[11px] text-ink-soft">{desc}</p>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-border pt-3 text-xs text-ink-soft">
                <span>Domain-specific policy benchmarking for corporate clients.</span>
                <Link
                  to="/industries"
                  onClick={closeDesktopMenu}
                  className="flex items-center gap-1.5 font-semibold text-primary hover:underline"
                >
                  All 7 industry profiles
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </div>

          <Link
            to="/claims"
            className="text-xs font-semibold text-ink-soft transition-colors hover:text-primary"
          >
            Claims Assistance
          </Link>

          <Link
            to="/careers"
            className="text-xs font-semibold text-ink-soft transition-colors hover:text-primary"
          >
            Careers
          </Link>

          <Link
            to="/"
            hash="contact"
            className="text-xs font-semibold text-ink-soft transition-colors hover:text-primary"
          >
            Contact
          </Link>

          <Button asChild size="lg">
            <Link to="/" hash={product ? "quote" : "contact"}>
              Get a Quote <ArrowRight />
            </Link>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="size-10 shrink-0 lg:hidden"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <nav
          id="mobile-navigation"
          className="max-h-[calc(100dvh-64px)] sm:max-h-[calc(100dvh-80px)] overflow-y-auto border-t border-border bg-background px-4 py-4 sm:px-6 sm:py-5 lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto grid max-w-7xl gap-1">
            <Link
              to="/"
              hash="home"
              onClick={closeMobileMenu}
              className="rounded-md px-3 py-3 text-sm font-semibold text-ink hover:bg-muted"
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={closeMobileMenu}
              className="rounded-md px-3 py-3 text-sm font-semibold text-ink hover:bg-muted"
            >
              About Us
            </Link>

            <div>
              <Button
                variant="ghost"
                className="h-12 w-full justify-between px-3 text-sm font-semibold text-ink"
                onClick={() => setProductsOpen((value) => !value)}
                aria-expanded={productsOpen}
                aria-controls="mobile-products"
              >
                Insurance
                <ChevronDown
                  className={`transition-transform duration-200 ${
                    productsOpen ? "rotate-180" : ""
                  }`}
                />
              </Button>

              {productsOpen && (
                <div
                  id="mobile-products"
                  className="grid gap-3 rounded-lg border-y border-border bg-secondary p-3 text-xs sm:p-4 sm:text-sm"
                >
                  {productCategories.map((category) => (
                    <div key={category.id} className="border-b border-border/50 pb-2.5 last:border-0 last:pb-0">
                      <p className="mb-1.5 text-[11px] font-bold uppercase tracking-wider text-primary">{category.name}</p>

                      <div className="grid gap-0.5">
                        {category.products.map(({ name, slug }) =>
                          slug === "car-insurance" ? (
                            <Link
                              key={slug}
                              to="/car-insurance"
                              onClick={closeMobileMenu}
                              className="flex py-1.5 items-center justify-between gap-2 text-xs text-ink hover:text-primary sm:text-sm"
                            >
                              <span>{name}</span>
                              <ArrowRight className="size-3.5 shrink-0 text-primary" />
                            </Link>
                          ) : slug === "health-insurance" ? (
                            <Link
                              key={slug}
                              to="/health-insurance"
                              onClick={closeMobileMenu}
                              className="flex py-1.5 items-center justify-between gap-2 text-xs text-ink hover:text-primary sm:text-sm"
                            >
                              <span>{name}</span>
                              <ArrowRight className="size-3.5 shrink-0 text-primary" />
                            </Link>
                          ) : (
                            <Link
                              key={slug}
                              to="/products/$productSlug"
                              params={{ productSlug: slug }}
                              onClick={closeMobileMenu}
                              className="flex py-1.5 items-center justify-between gap-2 text-xs text-ink hover:text-primary sm:text-sm"
                            >
                              <span>{name}</span>
                              <ArrowRight className="size-3.5 shrink-0 text-primary" />
                            </Link>
                          ),
                        )}
                      </div>
                    </div>
                  ))}

                  <Link
                    to="/"
                    hash="solutions"
                    onClick={closeMobileMenu}
                    className="pt-1.5 text-xs font-semibold text-primary"
                  >
                    All insurance solutions →
                  </Link>
                </div>
              )}
            </div>

            <div>
              <Button
                variant="ghost"
                className="h-12 w-full justify-between px-3 text-sm font-semibold text-ink"
                onClick={() => setMobileIndustriesOpen((value) => !value)}
                aria-expanded={mobileIndustriesOpen}
                aria-controls="mobile-industries"
              >
                Industries
                <ChevronDown
                  className={`transition-transform duration-200 ${
                    mobileIndustriesOpen ? "rotate-180" : ""
                  }`}
                />
              </Button>

              {mobileIndustriesOpen && (
                <div
                  id="mobile-industries"
                  className="grid gap-1 rounded-lg border-y border-border bg-secondary p-3 text-xs sm:p-4 sm:text-sm"
                >
                  <p className="mb-1.5 text-[11px] font-bold uppercase tracking-wider text-primary">Sector Risk Profiles</p>
                  <div className="grid gap-0.5">
                    {industryNavItems.map(({ name, slug, icon: Icon }) => (
                      <Link
                        key={slug}
                        to="/industries/$industrySlug"
                        params={{ industrySlug: slug }}
                        onClick={closeMobileMenu}
                        className="flex py-1.5 items-center justify-between gap-2 text-xs text-ink hover:text-primary sm:text-sm"
                      >
                        <div className="flex items-center gap-2">
                          <Icon className="size-3.5 text-primary" />
                          <span>{name}</span>
                        </div>
                        <ArrowRight className="size-3.5 shrink-0 text-primary" />
                      </Link>
                    ))}
                  </div>
                  <Link
                    to="/industries"
                    onClick={closeMobileMenu}
                    className="mt-1 flex items-center justify-between border-t border-border pt-2 text-xs font-bold text-primary"
                  >
                    <span>Browse all 7 industry risk profiles</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/claims"
              onClick={closeMobileMenu}
              className="rounded-md px-3 py-3 text-sm font-semibold text-ink hover:bg-muted"
            >
              Claims Assistance
            </Link>

            <Link
              to="/careers"
              onClick={closeMobileMenu}
              className="rounded-md px-3 py-3 text-sm font-semibold text-ink hover:bg-muted"
            >
              Careers
            </Link>

            <Link
              to="/"
              hash="contact"
              onClick={closeMobileMenu}
              className="rounded-md px-3 py-3 text-sm font-semibold text-ink hover:bg-muted"
            >
              Contact
            </Link>

            <Button asChild className="mt-3">
              <Link to="/" hash={product ? "quote" : "contact"} onClick={closeMobileMenu}>
                Get a Quote <ArrowRight />
              </Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary text-ink">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-6 border-b border-border pb-6 sm:gap-10 sm:pb-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <BrandMark light />
            <p className="mt-2.5 max-w-xs text-xs leading-relaxed text-ink-soft sm:mt-3 sm:leading-6">
              Thoughtful insurance broking and risk advisory. Clarity in cover. Consistency in
              support.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="mb-2.5 text-sm font-semibold sm:mb-4">Explore Gitvisha</p>
            <div className="grid gap-2 sm:gap-3">
              <Link to="/about" className="text-xs text-ink-soft hover:text-primary">
                About Us
              </Link>
              <Link to="/careers" className="text-xs text-ink-soft hover:text-primary">
                Careers
              </Link>
              <Link to="/claims" className="text-xs text-ink-soft hover:text-primary">
                Claims Assistance
              </Link>
              <Link to="/industries" className="text-xs text-ink-soft hover:text-primary">
                Industries
              </Link>
              <Link to="/" hash="contact" className="text-xs text-ink-soft hover:text-primary">
                Contact
              </Link>
            </div>
          </nav>

          <nav aria-label="Footer insurance navigation">
            <p className="mb-2.5 text-sm font-semibold sm:mb-4">Insurance</p>
            <div className="grid gap-2.5 sm:gap-3">
              {productCategories.map((category) => (
                <div key={category.id}>
                  <p className="mb-1 text-xs font-semibold text-ink sm:mb-2">{category.name}</p>
                  <div className="grid gap-1.5 sm:gap-2">
                    {category.products.map(({ name, slug }) =>
                      slug === "car-insurance" ? (
                        <Link
                          key={slug}
                          to="/car-insurance"
                          className="text-xs text-ink-soft hover:text-primary"
                        >
                          {name}
                        </Link>
                      ) : slug === "health-insurance" ? (
                        <Link
                          key={slug}
                          to="/health-insurance"
                          className="text-xs text-ink-soft hover:text-primary"
                        >
                          {name}
                        </Link>
                      ) : (
                        <Link
                          key={slug}
                          to="/products/$productSlug"
                          params={{ productSlug: slug }}
                          className="text-xs text-ink-soft hover:text-primary"
                        >
                          {name}
                        </Link>
                      ),
                    )}
                  </div>
                </div>
              ))}
            </div>
          </nav>

          <div>
            <p className="mb-2.5 text-sm font-semibold sm:mb-4">Get in touch</p>
            <a href="mailto:info@gitvisha.com" className="text-xs text-ink-soft hover:text-primary">
              info@gitvisha.com
            </a>
            <p className="mt-2 text-xs text-ink-soft sm:mt-3">+91 XXXXX XXXXX</p>
            <p className="mt-2 text-xs text-ink-soft sm:mt-3">Delhi NCR, India</p>
            <Button asChild variant="outline" size="sm" className="mt-4 sm:mt-5 text-xs">
              <Link to="/" hash="contact">
                Start an enquiry <ArrowRight className="ml-1 size-3.5" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-5 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:pt-7">
          <p>© 2026 Gitvisha. All rights reserved.</p>
          <div className="flex gap-4 sm:gap-5">
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

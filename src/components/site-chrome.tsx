import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ArrowRight, ChevronDown, Menu, ShieldCheck, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { productCategories } from "@/lib/insurance/catalogue";
import logoAsset from "@/assets/gitvisha-logo.webp.asset.json";
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
          className={`h-auto object-contain ${
            light
              ? "w-[260px] sm:w-[300px]"
              : "w-[180px] sm:w-[220px]"
          }`}
        />
    </Link>
  );
}


export function SiteHeader({ product = false }: { product?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setProductsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card">
      <div className="mx-auto grid h-20 max-w-7xl grid-cols-[44px_minmax(0,1fr)_44px] items-center gap-4 px-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:px-8">
        <div className="lg:hidden">
          {product && (
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="min-h-11 min-w-11"
              aria-label="Back to home"
            >
              <Link to="/">
                <ArrowLeft />
              </Link>
            </Button>
          )}
        </div>

        <div className="flex justify-center lg:justify-start">
          <BrandMark />
        </div>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
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

          {/* Insurance dropdown: opens on hover and closes when the pointer leaves */}
          <div className="group relative">
            <button
              type="button"
              className="flex h-11 cursor-pointer items-center gap-1.5 text-xs font-semibold text-ink-soft transition-colors hover:text-primary focus-visible:text-primary"
              aria-haspopup="true"
              aria-controls="desktop-insurance-menu"
            >
              Insurance
              <ChevronDown className="size-3.5 transition-transform duration-200 group-hover:rotate-180" />
            </button>

            <div
              id="desktop-insurance-menu"
              className="invisible pointer-events-none absolute left-1/2 top-full z-50 w-[700px] -translate-x-1/2 translate-y-2 rounded-xl border border-border bg-card p-5 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100"
            >
              <div className="grid grid-cols-4 gap-4">
                {productCategories.map((category) => (
                  <div key={category.id}>
                    <p className="mb-2 text-xs font-bold text-primary">{category.name}</p>

                    <div className="grid gap-1">
                      {category.products.map(({ name, slug, icon: Icon }) => (
                        <Link
                          key={slug}
                          to="/products/$productSlug"
                          params={{ productSlug: slug }}
                           onClick={() => {
    setProductsOpen(false);
    setInsuranceOpen(false);
    (document.activeElement as HTMLElement | null)?.blur();
  }}
  className="flex min-h-10 items-start gap-2 rounded-md px-2 py-2 text-xs leading-5 text-ink-soft transition-colors hover:bg-secondary hover:text-primary"
>
                          <Icon className="mt-0.5 size-4 shrink-0 text-primary" />
                          <span>{name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-xs text-ink-soft">
                <span>Protection shaped around your priorities.</span>
                <Link
                  to="/"
                  hash="solutions"
                  className="flex items-center gap-2 font-semibold text-primary hover:underline"
                >
                  All insurance solutions
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>

          <Link
            to="/"
            hash="industries"
            className="text-xs font-semibold text-ink-soft transition-colors hover:text-primary"
          >
            Industries
          </Link>

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
          className="min-h-11 min-w-11 lg:hidden"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <nav
          id="mobile-navigation"
          className="max-h-[calc(100dvh-80px)] overflow-y-auto border-t border-border bg-background px-5 py-5 lg:hidden"
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
                  className="grid gap-4 rounded-lg border-y border-border bg-secondary p-4"
                >
                  {productCategories.map((category) => (
                    <div key={category.id}>
                      <p className="mb-2 text-xs font-bold text-primary">{category.name}</p>

                      {category.products.map(({ name, slug }) => (
                        <Link
                          key={slug}
                          to="/products/$productSlug"
                          params={{ productSlug: slug }}
                          onClick={closeMobileMenu}
                          className="flex min-h-11 items-center justify-between gap-3 text-sm text-ink hover:text-primary"
                        >
                          {name}
                          <ArrowRight className="size-4 shrink-0 text-primary" />
                        </Link>
                      ))}
                    </div>
                  ))}

                  <Link
                    to="/"
                    hash="solutions"
                    onClick={closeMobileMenu}
                    className="py-3 text-sm font-semibold text-primary"
                  >
                    All insurance solutions
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/"
              hash="industries"
              onClick={closeMobileMenu}
              className="rounded-md px-3 py-3 text-sm font-semibold text-ink hover:bg-muted"
            >
              Industries
            </Link>

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
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 border-b border-border pb-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <BrandMark light />
            <p className="mt-3 max-w-xs text-xs leading-6 text-ink-soft">
              Thoughtful insurance broking and risk advisory. Clarity in cover. Consistency in
              support.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="mb-4 text-sm font-semibold">Explore Gitvisha</p>
            <div className="grid gap-3">
              <Link to="/about" className="text-xs text-ink-soft hover:text-primary">
                About Us
              </Link>
              <Link to="/careers" className="text-xs text-ink-soft hover:text-primary">
                Careers
              </Link>
              <Link to="/claims" className="text-xs text-ink-soft hover:text-primary">
                Claims Assistance
              </Link>
              <Link to="/" hash="industries" className="text-xs text-ink-soft hover:text-primary">
                Industries
              </Link>
              <Link to="/" hash="contact" className="text-xs text-ink-soft hover:text-primary">
                Contact
              </Link>
            </div>
          </nav>

          <nav aria-label="Footer insurance navigation">
            <p className="mb-4 text-sm font-semibold">Insurance</p>
            <div className="grid gap-3">
              {productCategories.map((category) => (
                <div key={category.id}>
                  <p className="mb-2 text-xs font-semibold text-ink">{category.name}</p>
                  <div className="grid gap-2">
                    {category.products.map(({ name, slug }) => (
                      <Link
                        key={slug}
                        to="/products/$productSlug"
                        params={{ productSlug: slug }}
                        className="text-xs text-ink-soft hover:text-primary"
                      >
                        {name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </nav>

          <div>
            <p className="mb-4 text-sm font-semibold">Get in touch</p>
            <a href="mailto:info@gitvisha.com" className="text-xs text-ink-soft hover:text-primary">
              info@gitvisha.com
            </a>
            <p className="mt-3 text-xs text-ink-soft">+91 XXXXX XXXXX</p>
            <p className="mt-3 text-xs text-ink-soft">Delhi NCR, India</p>
            <Button asChild variant="outline" className="mt-5">
              <Link to="/" hash="contact">
                Start an enquiry <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-7 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Gitvisha. All rights reserved.</p>
          <div className="flex gap-5">
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

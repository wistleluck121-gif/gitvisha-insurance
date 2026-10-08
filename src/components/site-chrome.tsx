import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/gitvisha-logo.png.asset.json";

const navItems = [
  ["Home", "#home"], ["About Us", "#about"], ["Insurance Solutions", "#solutions"],
  ["Industries", "#industries"], ["Claims Assistance", "#claims"], ["Contact", "#contact"],
] as const;

function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" hash="home" className="inline-flex shrink-0 items-center" aria-label="Gitvisha home">
      <img
        src={logoAsset.url}
        alt="Gitvisha — Infinite Trust, Secure Peace"
        width={700}
        height={700}
        className={`aspect-square rounded-full object-contain ${light ? "size-28 sm:size-32" : "size-16 sm:size-[72px]"}`}
      />
    </Link>
  );
}


export function SiteHeader({ product = false }: { product?: boolean }) {
 const [menuOpen, setMenuOpen] = useState(false);
 return (
      <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur-lg">
        <div className="mx-auto grid h-20 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:px-8">
          <div className="flex items-center gap-3"><BrandMark />{product && <Button asChild variant="ghost" className="min-h-11 px-3"><Link to="/"><ArrowLeft /> Home</Link></Button>}</div>
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
            {navItems.map(([label, href]) => <Link key={href} to="/" hash={href.slice(1)} className="text-xs font-semibold text-ink-soft transition-colors hover:text-primary">{label}</Link>)}
            <Button asChild size="lg"><a href={product ? "#quote" : "#contact"}>Get a Quote <ArrowRight /></a></Button>
          </nav>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMenuOpen((v) => !v)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && (
          <nav className="border-t border-border bg-background px-5 py-5 lg:hidden" aria-label="Mobile navigation">
            <div className="mx-auto grid max-w-7xl gap-1">
              {navItems.map(([label, href]) => <Link key={href} to="/" hash={href.slice(1)} onClick={() => setMenuOpen(false)} className="rounded-md px-3 py-3 text-sm font-semibold text-ink hover:bg-muted">{label}</Link>)}
              <Button asChild className="mt-3"><a href={product ? "#quote" : "#contact"} onClick={() => setMenuOpen(false)}>Get a Quote <ArrowRight /></a></Button>
            </div>
          </nav>
        )}
      </header>
 );
}

export function SiteFooter() { return (
      <footer className="bg-surface-deep text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
          <div className="grid gap-10 border-b border-line-dark pb-10 md:grid-cols-[1fr_auto]">
            <BrandMark light />
            <nav className="flex flex-wrap gap-x-6 gap-y-3" aria-label="Footer navigation">
              {navItems.slice(1).map(([label, href]) => <Link key={href} to="/" hash={href.slice(1)} className="text-xs text-cyan-soft/70 hover:text-cyan">{label}</Link>)}
            </nav>
          </div>
          <div className="flex flex-col gap-4 pt-7 text-xs text-cyan-soft/55 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Gitvisha. All rights reserved.</p>
            <div className="flex gap-5"><span>Privacy Policy</span><span>Terms of Use</span></div>
          </div>
        </div>
      </footer>
); }

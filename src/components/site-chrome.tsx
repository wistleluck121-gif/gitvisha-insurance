import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ArrowRight, ChevronDown, Menu, ShieldCheck, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { productCategories } from "@/lib/insurance/catalogue";
import logoAsset from "@/assets/gitvisha-logo.webp.asset.json";

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
        width={280}
        height={280}
        decoding="async"
        className={`aspect-square rounded-full object-contain ${light ? "size-24 sm:size-28" : "size-14 sm:size-[72px]"}`}
      />
    </Link>
  );
}


export function SiteHeader({ product = false }: { product?: boolean }) {
 const [menuOpen, setMenuOpen] = useState(false);
 const [productsOpen, setProductsOpen] = useState(false);
 return (
      <header className="sticky top-0 z-50 border-b border-border bg-card">
        <div className="hidden border-b border-border bg-accent lg:block"><div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-2 text-xs text-ink-soft"><span>Infinite Trust. Secure Peace.</span><div className="flex items-center gap-6"><span className="flex items-center gap-2"><ShieldCheck className="size-3.5 text-primary" />Policy & claims support</span><a href="mailto:info@gitvisha.com" className="hover:text-primary">info@gitvisha.com</a></div></div></div>
        <div className="mx-auto grid h-20 max-w-7xl grid-cols-[44px_minmax(0,1fr)_44px] lg:grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:px-8">
          <div className="lg:hidden">{product && <Button asChild variant="ghost" size="icon" className="min-h-11 min-w-11" aria-label="Back to home"><Link to="/"><ArrowLeft /></Link></Button>}</div><div className="flex justify-center lg:justify-start"><BrandMark /></div>
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
            {navItems.filter(([label]) => label !== "Insurance Solutions").map(([label, href], index) => index === 2 ? <div key={href} className="flex items-center gap-6"><DropdownMenu><DropdownMenuTrigger asChild><Button variant="ghost" className="h-11 px-0 text-xs font-semibold text-ink-soft hover:bg-transparent">Insurance <ChevronDown className="size-3.5" /></Button></DropdownMenuTrigger><DropdownMenuContent align="center" sideOffset={18} className="grid w-[700px] grid-cols-4 gap-3 p-5">{productCategories.map((category) => <div key={category.id}><DropdownMenuLabel className="mb-2 text-xs text-primary">{category.name}</DropdownMenuLabel>{category.products.map(({ name, route, icon: Icon }) => <DropdownMenuItem asChild key={name} className="min-h-11 items-start text-xs leading-5"><Link to={route ?? "/"} hash={route ? undefined : "contact"}><Icon className="mt-0.5 shrink-0 text-primary" />{name}</Link></DropdownMenuItem>)}</div>)}<div className="col-span-4 mt-2 flex items-center justify-between border-t border-border pt-4 text-xs text-ink-soft"><span>Protection shaped around your priorities.</span><DropdownMenuItem asChild><Link to="/" hash="solutions" className="font-semibold text-primary">All insurance solutions <ArrowRight /></Link></DropdownMenuItem></div></DropdownMenuContent></DropdownMenu><Link to="/" hash={href.slice(1)} className="text-xs font-semibold text-ink-soft hover:text-primary">{label}</Link></div> : <Link key={href} to="/" hash={href.slice(1)} className="text-xs font-semibold text-ink-soft transition-colors hover:text-primary">{label}</Link>)}
            <Button asChild size="lg"><a href={product ? "#quote" : "#contact"}>Get a Quote <ArrowRight /></a></Button>
          </nav>
          <Button variant="ghost" size="icon" className="min-h-11 min-w-11 lg:hidden" onClick={() => setMenuOpen((v) => !v)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation">
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && (
          <nav id="mobile-navigation" className="max-h-[calc(100dvh-80px)] overflow-y-auto border-t border-border bg-background px-5 py-5 lg:hidden" aria-label="Mobile navigation">
            <div className="mx-auto grid max-w-7xl gap-1">
              {navItems.map(([label, href]) => label === "Insurance Solutions" ? <div key={href}><Button variant="ghost" className="h-12 w-full justify-between px-3 text-sm font-semibold text-ink" onClick={() => setProductsOpen((v) => !v)} aria-expanded={productsOpen} aria-controls="mobile-products">Insurance <ChevronDown /></Button>{productsOpen && <div id="mobile-products" className="grid gap-4 border-y border-border bg-secondary p-4">{productCategories.map((category) => <div key={category.id}><p className="mb-2 text-xs font-semibold text-primary">{category.name}</p>{category.products.map(({ name, route }) => <Link key={name} to={route ?? "/"} hash={route ? undefined : "contact"} onClick={() => setMenuOpen(false)} className="flex min-h-11 items-center justify-between text-sm text-ink">{name}<ArrowRight className="size-4 text-primary" /></Link>)}</div>)}<Link to="/" hash="solutions" onClick={() => setMenuOpen(false)} className="py-3 text-sm font-semibold text-primary">All insurance solutions</Link></div>}</div> : <Link key={href} to="/" hash={href.slice(1)} onClick={() => setMenuOpen(false)} className="rounded-md px-3 py-3 text-sm font-semibold text-ink hover:bg-muted">{label}</Link>)}
              <Button asChild className="mt-3"><a href={product ? "#quote" : "#contact"} onClick={() => setMenuOpen(false)}>Get a Quote <ArrowRight /></a></Button>
            </div>
          </nav>
        )}
      </header>
 );
}

export function SiteFooter() { return (
      <footer className="border-t border-border bg-secondary text-ink">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
          <div className="grid gap-10 border-b border-border pb-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div><BrandMark light /><p className="mt-4 text-sm font-semibold">Infinite Trust. Secure Peace.</p><p className="mt-3 max-w-xs text-xs leading-6 text-ink-soft">Thoughtful insurance broking and risk advisory. Clarity in cover. Consistency in support.</p></div>
            <nav aria-label="Footer navigation"><p className="mb-4 text-sm font-semibold">Explore Gitvisha</p><div className="grid gap-3">{navItems.slice(1).map(([label, href]) => <Link key={href} to="/" hash={href.slice(1)} className="text-xs text-ink-soft hover:text-primary">{label}</Link>)}</div></nav>
            <nav aria-label="Footer insurance navigation"><p className="mb-4 text-sm font-semibold">Insurance</p><div className="grid gap-3"><Link to="/car-insurance" className="text-xs text-ink-soft hover:text-primary">Car Insurance</Link>{["Motor Insurance", "Group Health & Personal Accident", "Property & Fire Insurance", "Marine Insurance"].map((name) => <Link key={name} to="/" hash="contact" className="text-xs text-ink-soft hover:text-primary">{name}</Link>)}</div></nav>
            <div><p className="mb-4 text-sm font-semibold">Get in touch</p><a href="mailto:info@gitvisha.com" className="text-xs text-ink-soft hover:text-primary">info@gitvisha.com</a><p className="mt-3 text-xs text-ink-soft">+91 XXXXX XXXXX</p><p className="mt-3 text-xs text-ink-soft">Delhi NCR, India</p><Button asChild variant="outline" className="mt-5"><Link to="/" hash="contact">Start an enquiry <ArrowRight /></Link></Button></div>
          </div>
          <div className="flex flex-col gap-4 pt-7 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Gitvisha. All rights reserved.</p>
            <div className="flex gap-5"><span>Privacy Policy</span><span>Terms of Use</span></div>
          </div>
        </div>
      </footer>
); }

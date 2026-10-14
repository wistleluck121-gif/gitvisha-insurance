import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, LifeBuoy, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { productCategories } from "@/lib/insurance/catalogue";

export function ProductSelector({ onEnquire }: { onEnquire: (requirement: string) => void }) {
  return <div className="mt-8 lg:mt-10">
    <Tabs defaultValue="motor">
      <TabsList aria-label="Insurance categories" className="grid h-auto w-full grid-cols-2 gap-1 rounded-none border-b border-border bg-transparent p-0 sm:flex sm:justify-start sm:gap-6">
        {productCategories.map((category) => <TabsTrigger key={category.id} value={category.id} className="min-h-12 rounded-none border-b-2 border-transparent px-2 text-sm text-ink-soft data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none sm:px-4">{category.name}</TabsTrigger>)}
      </TabsList>
      {productCategories.map((category) => <TabsContent key={category.id} value={category.id} className="mt-5">
        <div className="grid min-h-44 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {category.products.map(({ name, detail, icon: Icon, route, requirement }) => <article key={name} className="relative flex min-w-0 flex-col rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary">
            <Icon aria-hidden="true" className="mb-4 size-8 text-primary" strokeWidth={1.5} />
            <h3 className="text-base font-semibold text-ink">{name}</h3>
            <p className="mb-4 mt-2 text-xs leading-5 text-ink-soft">{detail}</p>
            <Button asChild variant="link" className="mt-auto h-auto justify-start p-0 text-xs after:absolute after:inset-0">
              {route ? <Link to={route}>Explore cover <ArrowRight /></Link> : <Link to="/" hash="contact" onClick={() => onEnquire(requirement)}>Make an enquiry <ArrowRight /></Link>}
            </Button>
          </article>)}
          <div className="flex flex-col justify-center border-l-2 border-primary px-5 py-4">
            <p className="text-base font-semibold text-ink">Not sure where to start?</p>
            <p className="mt-2 text-xs leading-5 text-ink-soft">Tell us what matters. Start with a conversation, not a policy.</p>
            <Button asChild variant="link" className="mt-4 h-auto justify-start p-0 text-xs"><a href="#contact">Talk to Gitvisha <ArrowRight /></a></Button>
          </div>
        </div>
      </TabsContent>)}
    </Tabs>
    <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-5 text-xs font-medium text-ink-soft">
      {[{ icon: ShieldCheck, text: "Thoughtful risk advisory" }, { icon: Check, text: "Clear policy guidance" }, { icon: LifeBuoy, text: "Dedicated claims assistance" }].map(({ icon: Icon, text }) => <span className="flex items-center gap-2" key={text}><Icon aria-hidden="true" className="size-4 text-primary" />{text}</span>)}
    </div>
  </div>;
}
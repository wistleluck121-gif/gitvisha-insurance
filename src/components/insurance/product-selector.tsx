import { Link } from "@tanstack/react-router";
import { ArrowRight, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { productCategories } from "@/lib/insurance/catalogue";

export function ProductSelector({ onEnquire }: { onEnquire: (requirement: string) => void }) {
  return (
    <div className="mt-4 sm:mt-8 lg:mt-10">
      <Tabs defaultValue="motor">
        <TabsList
          aria-label="Insurance categories"
          className="grid h-auto w-full grid-cols-2 gap-1 rounded-lg bg-secondary/80 p-1 sm:flex sm:justify-start sm:gap-6 sm:rounded-none sm:border-b sm:border-border sm:bg-transparent sm:p-0"
        >
          {productCategories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="min-h-9 rounded-md px-2.5 py-1.5 text-xs font-semibold text-ink-soft transition-all data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-xs sm:min-h-12 sm:rounded-none sm:border-b-2 sm:border-transparent sm:px-4 sm:text-sm sm:data-[state=active]:border-primary sm:data-[state=active]:bg-transparent sm:data-[state=active]:shadow-none"
            >
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {productCategories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-3.5 sm:mt-5">
            <div className="grid min-h-36 gap-2.5 sm:min-h-44 sm:gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {category.products.map(({ name, detail, icon: Icon, slug }) => {
                const isCommercialVehicle = slug === "commercial-vehicle-insurance";
                return (
                  <article
                    key={name}
                    className={`relative min-w-0 flex-col rounded-lg border border-border bg-card p-3.5 sm:p-5 transition-colors hover:border-primary ${
                      isCommercialVehicle ? "hidden sm:flex" : "flex"
                    }`}
                  >
                    <Icon
                      aria-hidden="true"
                      className="mb-2.5 size-6 text-primary sm:mb-4 sm:size-8"
                      strokeWidth={1.5}
                    />
                    <h3 className="text-sm sm:text-base font-semibold text-ink">{name}</h3>
                    <p className="mb-3 mt-1 text-xs leading-relaxed text-ink-soft sm:mb-4 sm:mt-2">{detail}</p>
                    <Button
                      asChild
                      variant="link"
                      className="mt-auto h-auto justify-start p-0 text-xs after:absolute after:inset-0"
                    >
                      {slug === "car-insurance" ? (
                        <Link to="/car-insurance">
                          Explore cover <ArrowRight className="ml-1 size-3.5" />
                        </Link>
                      ) : slug === "health-insurance" ? (
                        <Link to="/health-insurance">
                          Explore cover <ArrowRight className="ml-1 size-3.5" />
                        </Link>
                      ) : (
                        <Link to="/products/$productSlug" params={{ productSlug: slug }}>
                          Explore cover <ArrowRight className="ml-1 size-3.5" />
                        </Link>
                      )}
                    </Button>
                  </article>
                );
              })}

              {/* On mobile view, replace Commercial Vehicle with Health Insurance in the primary tab */}
              {category.id === "motor" && (
                <article
                  key="mobile-health-insurance"
                  className="flex sm:hidden relative min-w-0 flex-col rounded-lg border border-border bg-card p-3.5 sm:p-5 transition-colors hover:border-primary"
                >
                  <HeartPulse
                    aria-hidden="true"
                    className="mb-2.5 size-6 text-primary sm:mb-4 sm:size-8"
                    strokeWidth={1.5}
                  />
                  <h3 className="text-sm sm:text-base font-semibold text-ink">Health Insurance</h3>
                  <p className="mb-3 mt-1 text-xs leading-relaxed text-ink-soft sm:mb-4 sm:mt-2">
                    Individual, family floater &amp; critical illness
                  </p>
                  <Button
                    asChild
                    variant="link"
                    className="mt-auto h-auto justify-start p-0 text-xs after:absolute after:inset-0"
                  >
                    <Link to="/health-insurance">
                      Explore cover <ArrowRight className="ml-1 size-3.5" />
                    </Link>
                  </Button>
                </article>
              )}

              <div className="flex flex-col justify-center rounded-lg border border-primary/20 bg-primary/5 p-3.5 sm:border-0 sm:border-l-2 sm:border-primary sm:bg-transparent sm:px-5 sm:py-4">
                <p className="text-sm sm:text-base font-semibold text-ink">
                  Not sure where to start?
                </p>
                <p className="mt-1 text-xs leading-relaxed text-ink-soft sm:mt-2">
                  Tell us what matters. Start with a conversation, not a policy.
                </p>
                <Button
                  asChild
                  variant="link"
                  className="mt-2.5 sm:mt-4 h-auto justify-start p-0 text-xs"
                >
                  <a href="#contact" onClick={() => onEnquire(category.name)}>
                    Talk to Gitvisha <ArrowRight className="ml-1 size-3.5" />
                  </a>
                </Button>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

import { useRef, useState, type FormEvent } from "react";
import {
  ArrowRight,
  Check,
  CircleCheck,
  HeartPulse,
  LockKeyhole,
  Mail,
  Pencil,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  healthPolicyTypes,
  sumInsuredTiers,
  membersCoverageOptions,
  healthEnquirySchema,
  type HealthEnquiry,
} from "@/lib/insurance/enquiry";

type FieldName = keyof HealthEnquiry;

export const eldestAgeOptions = [
  "Up to 50 years (Age ≤ 50)",
  "51–55 years",
  "56–60 years",
  "60–70 years (Senior Citizen)",
  "After 70 years (Senior Citizen)",
];

const fieldClass =
  "h-11 rounded-md border-border bg-background text-foreground placeholder:text-muted-foreground focus-visible:ring-ring text-base sm:text-sm min-w-0 max-w-full w-full";

export function HealthQuoteForm() {
  const [selectedPlan, setSelectedPlan] = useState<string>("Family Floater");
  const [selectedSum, setSelectedSum] = useState<string>("₹25 Lakhs");
  const [selectedMembers, setSelectedMembers] = useState<string>("Self + Spouse + 1 Child");
  const [selectedAge, setSelectedAge] = useState<string>("Up to 50 years (Age ≤ 50)");
  const [hasConditions, setHasConditions] = useState<"No" | "Yes">("No");

  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [complete, setComplete] = useState(false);
  const [submittedData, setSubmittedData] = useState<HealthEnquiry | null>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  // Dynamic benchmark rates based on industry standards & user-specified rate tiers:
  function getEstimatedPremium() {
    const isIndividual = selectedMembers === "Self Only" || selectedPlan === "Individual Health";
    const isCouple = selectedMembers === "Self + Spouse";
    const isFamilyWithKids =
      selectedMembers === "Self + Spouse + 1 Child" ||
      selectedMembers === "Self + Spouse + 2 Children" ||
      selectedMembers === "Entire Family + Parents";

    if (isIndividual) {
      if (selectedAge.includes("Up to 50") || selectedAge.includes("50")) {
        return {
          annualRange: "₹10,000 – ₹12,000 / year",
          monthlyRange: "₹830 – ₹1,000 / month",
          label: "Individual Cover (Age ≤ 50)",
          badge: "₹10k–₹12k Benchmark",
        };
      } else if (selectedAge.includes("51–55")) {
        return {
          annualRange: "₹14,000 – ₹18,000 / year",
          monthlyRange: "₹1,160 – ₹1,500 / month",
          label: "Individual Cover (Age 51–55)",
          badge: "Pre-Senior Tier",
        };
      } else if (selectedAge.includes("56–60")) {
        return {
          annualRange: "₹22,000 – ₹28,000 / year",
          monthlyRange: "₹1,830 – ₹2,330 / month",
          label: "Individual Cover (Age 56–60)",
          badge: "Senior Transition",
        };
      } else if (selectedAge.includes("60–70")) {
        return {
          annualRange: "₹40,000 – ₹45,000 / year",
          monthlyRange: "₹3,330 – ₹3,750 / month",
          label: "Senior Individual (Age 60–70)",
          badge: "₹40k–₹45k Benchmark",
        };
      } else {
        return {
          annualRange: "₹50,000 – ₹70,000 / year",
          monthlyRange: "₹4,160 – ₹5,830 / month",
          label: "Senior Individual (Age 70+)",
          badge: "₹50k–₹70k Benchmark",
        };
      }
    }

    if (isCouple) {
      if (selectedAge.includes("Up to 50") || selectedAge.includes("51–55")) {
        return {
          annualRange: "Approx. ₹20,000 / year",
          monthlyRange: "~₹1,660 / month",
          label: "Husband & Wife Floater (Age ≤ 55)",
          badge: "Approx ₹20k Benchmark",
        };
      } else if (selectedAge.includes("56–60")) {
        return {
          annualRange: "₹28,000 – ₹36,000 / year",
          monthlyRange: "₹2,330 – ₹3,000 / month",
          label: "Husband & Wife Floater (Age 56–60)",
          badge: "Pre-Senior Couple",
        };
      } else if (selectedAge.includes("60–70")) {
        return {
          annualRange: "₹65,000 – ₹78,000 / year",
          monthlyRange: "₹5,400 – ₹6,500 / month",
          label: "Senior Couple Floater (Age 60–70)",
          badge: "Senior Couple Tier",
        };
      } else {
        return {
          annualRange: "₹85,000 – ₹1,10,000 / year",
          monthlyRange: "₹7,080 – ₹9,160 / month",
          label: "Senior Couple Floater (Age 70+)",
          badge: "Super Senior Couple",
        };
      }
    }

    if (isFamilyWithKids) {
      if (selectedAge.includes("Up to 50") || selectedAge.includes("51–55")) {
        return {
          annualRange: "₹21,000 – ₹35,000 / year",
          monthlyRange: "₹1,750 – ₹2,900 / month",
          label: "Family Floater (2 Adults + Kids, Age ≤ 55)",
          badge: "₹21k–₹35k Benchmark",
        };
      } else if (selectedAge.includes("56–60")) {
        return {
          annualRange: "₹34,000 – ₹45,000 / year",
          monthlyRange: "₹2,830 – ₹3,750 / month",
          label: "Family Floater (Age 56–60)",
          badge: "Pre-Senior Family",
        };
      } else {
        return {
          annualRange: "₹55,000 – ₹75,000 / year",
          monthlyRange: "₹4,580 – ₹6,250 / month",
          label: "Multi-Generation Family Floater",
          badge: "Comprehensive Family",
        };
      }
    }

    if (selectedAge.includes("60–70")) {
      return {
        annualRange: "₹40,000 – ₹45,000 / year",
        monthlyRange: "₹3,330 – ₹3,750 / month",
        label: "Senior Citizen Cover (Age 60–70)",
        badge: "₹40k–₹45k Benchmark",
      };
    } else {
      return {
        annualRange: "₹50,000 – ₹70,000 / year",
        monthlyRange: "₹4,160 – ₹5,830 / month",
        label: "Senior Citizen Cover (Age 70+)",
        badge: "₹50k–₹70k Benchmark",
      };
    }
  }

  const est = getEstimatedPremium();

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      fullName: String(formData.get("fullName") ?? ""),
      mobile: String(formData.get("mobile") ?? ""),
      email: String(formData.get("email") ?? ""),
      city: String(formData.get("city") ?? ""),
      policyType: selectedPlan,
      sumInsured: selectedSum,
      members: selectedMembers,
      eldestAge: selectedAge,
      hasExistingConditions: hasConditions,
      message: String(formData.get("message") ?? ""),
    };

    const result = healthEnquirySchema.safeParse(payload);
    if (!result.success) {
      const next: Partial<Record<FieldName, string>> = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as FieldName;
        next[field] ??= issue.message;
      }
      setErrors(next);
      const firstName = Object.keys(next)[0];
      const first = firstName ? form.elements.namedItem(firstName) : null;
      if (first instanceof HTMLElement) first.focus();
      return;
    }

    setErrors({});
    setSubmittedData(result.data);
    setComplete(true);
    requestAnimationFrame(() => statusRef.current?.focus());
  }

  function launchEmailConsultation() {
    if (!submittedData) return;
    const body = encodeURIComponent(
      `Name: ${submittedData.fullName}\n` +
        `Mobile: ${submittedData.mobile}\n` +
        `Email: ${submittedData.email}\n` +
        `City: ${submittedData.city}\n` +
        `Plan Type: ${submittedData.policyType}\n` +
        `Sum Insured: ${submittedData.sumInsured}\n` +
        `Insuring: ${submittedData.members}\n` +
        `Eldest Age: ${submittedData.eldestAge}\n` +
        `Indicative Market Benchmark: ${est.annualRange} (${est.monthlyRange})\n` +
        `Pre-existing Conditions: ${submittedData.hasExistingConditions}\n` +
        `Message / Notes: ${submittedData.message || "None"}\n\n` +
        `Please share an objective side-by-side health insurance comparison across ICICI Lombard, HDFC ERGO, TATA AIG, SBI General, Star Health, IFFCO Tokio, and Kotak Zurich with zero room rent capping.`,
    );
    window.location.href = `mailto:info@gitvisha.com?subject=${encodeURIComponent("Health Insurance Enquiry — " + submittedData.fullName)}&body=${body}`;
  }

  return (
    <div className="relative rounded-xl border border-border bg-card p-4 sm:p-6 lg:p-7 shadow-sm transition-all min-w-0 max-w-full overflow-hidden w-full">
      {complete && submittedData ? (
        <div
          ref={statusRef}
          tabIndex={-1}
          className="space-y-5 sm:space-y-6 focus:outline-none min-w-0 w-full"
          aria-live="polite"
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="flex size-11 sm:size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <CircleCheck className="size-6 text-primary" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-wider text-primary">
                Enquiry Formulated
              </p>
              <h3 className="text-lg sm:text-xl font-bold text-ink truncate">Health Profile Prepared</h3>
            </div>
          </div>

          <p className="text-xs sm:text-sm leading-6 text-ink-soft break-words">
            Thank you, <strong className="text-ink">{submittedData.fullName}</strong>. We have
            mapped your coverage criteria for <strong>{submittedData.policyType}</strong> with{" "}
            <strong>{submittedData.sumInsured}</strong> sum insured.
          </p>

          <div className="grid gap-2.5 rounded-lg border border-border bg-secondary/50 p-3.5 sm:p-4 text-xs min-w-0 w-full">
            <div className="flex flex-wrap items-center justify-between gap-1 border-b border-border/60 pb-2">
              <span className="text-ink-soft">Plan Structure:</span>
              <span className="font-semibold text-ink">{submittedData.policyType}</span>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-1 border-b border-border/60 pb-2">
              <span className="text-ink-soft">Sum Insured:</span>
              <span className="font-semibold text-primary">{submittedData.sumInsured}</span>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-1 border-b border-border/60 pb-2">
              <span className="text-ink-soft">Covered Members:</span>
              <span className="font-semibold text-ink">{submittedData.members}</span>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-1 border-b border-border/60 pb-2">
              <span className="text-ink-soft">Eldest Member Age:</span>
              <span className="font-semibold text-ink">{submittedData.eldestAge}</span>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-1 border-b border-border/60 pb-2">
              <span className="text-ink-soft">Indicative Benchmark:</span>
              <span className="font-bold text-primary">{est.annualRange}</span>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-1">
              <span className="text-ink-soft">Pre-existing Conditions:</span>
              <span className="font-semibold text-ink">{submittedData.hasExistingConditions}</span>
            </div>
          </div>

          <div className="space-y-3 pt-2 min-w-0 w-full">
            <Button
              type="button"
              onClick={launchEmailConsultation}
              className="h-auto min-h-12 w-full whitespace-normal break-words flex-wrap sm:flex-nowrap justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-semibold shadow-sm text-center"
              size="lg"
            >
              <Mail className="size-4 shrink-0" />
              <span>Send Enquiry to Gitvisha Advisory Desk</span>
            </Button>

            <Button
              type="button"
              variant="outline"
              onClick={() => setComplete(false)}
              className="min-h-11 w-full whitespace-normal break-words gap-2 text-xs font-medium"
            >
              <Pencil className="size-3.5 shrink-0" />
              Modify Details or Coverage Options
            </Button>
          </div>

          <p className="text-center text-[10px] sm:text-[11px] leading-relaxed text-muted-foreground break-words">
            Gitvisha advisors compare hospital network density, cashless approval metrics, and
            room-rent sub-limits across top insurers with 0% commission bias.
          </p>
        </div>
      ) : (
        <form
          onSubmit={submit}
          noValidate
          aria-label="Health insurance customized quote enquiry"
          className="space-y-5 sm:space-y-6 min-w-0 w-full"
        >
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                <HeartPulse className="size-4" />
              </span>
              <p className="text-xs font-bold uppercase tracking-wider text-primary truncate">
                Instant Advisory &amp; Quote Benchmarking
              </p>
            </div>
            <h3 className="mt-2 text-xl font-bold tracking-tight text-ink sm:text-2xl md:text-3xl break-words">
              Compare Tailored Health Covers
            </h3>
            <p className="mt-1 text-xs text-ink-soft sm:text-sm break-words">
              Zero room-rent capping, 100% restoration, and cashless admission across 10,000+
              accredited hospitals.
            </p>
          </div>

          {/* 1. Policy Type Tabs */}
          <div className="space-y-2 min-w-0 w-full">
            <Label className="text-xs font-semibold text-ink">1. Plan Category</Label>
            <div className="grid grid-cols-1 min-[420px]:grid-cols-2 xl:grid-cols-3 gap-2 min-w-0 w-full">
              {healthPolicyTypes.map((type) => {
                const active = selectedPlan === type;
                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => {
                      setSelectedPlan(type);
                      if (type === "Individual Health") {
                        setSelectedMembers("Self Only");
                      } else if (type === "Family Floater") {
                        setSelectedMembers("Self + Spouse + 1 Child");
                      } else if (type === "Senior Citizen") {
                        setSelectedMembers("Parents / Senior Citizens");
                        setSelectedAge("60–70 years (Senior Citizen)");
                      }
                    }}
                    className={`min-h-11 rounded-lg border px-3 py-2 text-left text-xs font-medium transition-all min-w-0 ${
                      active
                        ? "border-primary bg-primary/5 text-primary shadow-xs ring-1 ring-primary"
                        : "border-border bg-background text-ink-soft hover:border-primary/50 hover:text-ink"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1.5 min-w-0">
                      <span className="leading-snug break-words truncate">{type}</span>
                      {active && <Check className="size-3.5 shrink-0 text-primary" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Insured Members & Eldest Age */}
          <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 min-w-0 w-full">
            <div className="space-y-1.5 min-w-0">
              <Label htmlFor="health-members" className="text-xs font-semibold text-ink">
                2. Who are you insuring?
              </Label>
              <select
                id="health-members"
                value={selectedMembers}
                onChange={(e) => setSelectedMembers(e.target.value)}
                className={fieldClass + " px-3"}
              >
                {membersCoverageOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5 min-w-0">
              <Label htmlFor="health-eldestAge" className="text-xs font-semibold text-ink">
                3. Age of Eldest Member
              </Label>
              <select
                id="health-eldestAge"
                value={selectedAge}
                onChange={(e) => setSelectedAge(e.target.value)}
                className={fieldClass + " px-3"}
              >
                {eldestAgeOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* 3. Sum Insured Choice */}
          <div className="space-y-2 min-w-0 w-full">
            <div className="flex flex-wrap items-center justify-between gap-1">
              <Label className="text-xs font-semibold text-ink">4. Preferred Sum Insured</Label>
              <span className="text-[11px] font-semibold text-primary">Recommended: ₹10L–₹25L</span>
            </div>
            <div className="grid grid-cols-3 min-[540px]:grid-cols-3 xl:grid-cols-6 gap-1.5 sm:gap-2 min-w-0 w-full">
              {sumInsuredTiers.map((tier) => {
                const active = selectedSum === tier;
                return (
                  <button
                    key={tier}
                    type="button"
                    onClick={() => setSelectedSum(tier)}
                    className={`min-h-10 rounded-md border px-1 py-2 text-center text-xs font-semibold transition-all flex items-center justify-center min-w-0 ${
                      active
                        ? "border-primary bg-primary text-primary-foreground shadow-xs"
                        : "border-border bg-background text-ink-soft hover:border-primary/40 hover:text-ink"
                    }`}
                  >
                    <span className="truncate">{tier}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 4. Pre-Existing Conditions Toggle */}
          <div className="rounded-lg border border-border/80 bg-secondary/30 p-3 sm:p-3.5 min-w-0 w-full">
            <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between min-w-0">
              <div className="min-w-0">
                <Label className="text-xs font-semibold text-ink">
                  Any existing medical conditions?
                </Label>
                <p className="text-[11px] text-ink-soft leading-tight mt-0.5 break-words">
                  Hypertension, diabetes, thyroid, asthma, or previous surgeries.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:flex gap-2 shrink-0">
                {(["No", "Yes"] as const).map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setHasConditions(v)}
                    className={`min-h-10 min-w-16 rounded-md border px-3 sm:px-4 py-2 text-xs font-semibold transition-all flex items-center justify-center ${
                      hasConditions === v
                        ? "border-primary bg-primary text-primary-foreground shadow-xs"
                        : "border-border bg-background text-ink-soft hover:border-primary/50"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 5. Contact Details */}
          <div className="grid gap-3 sm:grid-cols-2 min-w-0 w-full">
            <div className="space-y-1 min-w-0">
              <Label htmlFor="health-fullName" className="text-xs font-semibold text-ink">
                Full Name *
              </Label>
              <Input
                id="health-fullName"
                name="fullName"
                placeholder="e.g. Rahul Sharma"
                autoComplete="name"
                className={fieldClass}
                aria-invalid={!!errors.fullName}
              />
              {errors.fullName && <p className="text-[11px] text-destructive">{errors.fullName}</p>}
            </div>

            <div className="space-y-1 min-w-0">
              <Label htmlFor="health-mobile" className="text-xs font-semibold text-ink">
                Mobile Number *
              </Label>
              <Input
                id="health-mobile"
                name="mobile"
                type="tel"
                placeholder="10-digit Indian mobile"
                autoComplete="tel"
                className={fieldClass}
                aria-invalid={!!errors.mobile}
              />
              {errors.mobile && <p className="text-[11px] text-destructive">{errors.mobile}</p>}
            </div>

            <div className="space-y-1 min-w-0">
              <Label htmlFor="health-email" className="text-xs font-semibold text-ink">
                Email Address *
              </Label>
              <Input
                id="health-email"
                name="email"
                type="email"
                placeholder="rahul@example.com"
                autoComplete="email"
                className={fieldClass}
                aria-invalid={!!errors.email}
              />
              {errors.email && <p className="text-[11px] text-destructive">{errors.email}</p>}
            </div>

            <div className="space-y-1 min-w-0">
              <Label htmlFor="health-city" className="text-xs font-semibold text-ink">
                City / Location *
              </Label>
              <Input
                id="health-city"
                name="city"
                placeholder="e.g. Mumbai, Delhi, Bengaluru"
                autoComplete="address-level2"
                className={fieldClass}
                aria-invalid={!!errors.city}
              />
              {errors.city && <p className="text-[11px] text-destructive">{errors.city}</p>}
            </div>
          </div>

          {/* Optional Message */}
          <div className="space-y-1 min-w-0 w-full">
            <Label htmlFor="health-message" className="text-xs font-semibold text-ink">
              Specific Requirements or Current Policy Expiry (Optional)
            </Label>
            <Textarea
              id="health-message"
              name="message"
              placeholder="e.g. Looking for zero co-pay, maternity benefits, or porting existing policy."
              rows={2}
              className="resize-none rounded-md border-border bg-background text-base sm:text-xs text-foreground placeholder:text-muted-foreground focus-visible:ring-ring p-3 min-w-0 max-w-full w-full"
            />
          </div>

          {/* Dynamic Benchmark Indicator Bar with User-Specified Rate Tiers */}
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-3.5 sm:p-4 shadow-xs min-w-0 w-full">
            <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between min-w-0">
              <div className="space-y-1 min-w-0">
                <div className="flex flex-wrap items-center gap-1.5">
                  <Sparkles className="size-4 shrink-0 text-primary" />
                  <span className="text-xs font-bold text-ink truncate">{est.label}</span>
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary shrink-0">
                    {est.badge}
                  </span>
                </div>
                <p className="text-[11px] leading-snug text-ink-soft break-words">
                  Market rate estimate for standard ₹10L–₹25L cover with zero room rent cap
                </p>
              </div>
              <div className="border-t border-primary/15 pt-2 text-left sm:border-t-0 sm:pt-0 sm:text-right shrink-0">
                <span className="text-lg sm:text-xl font-extrabold text-primary leading-none">{est.annualRange}</span>
                <p className="mt-0.5 text-[11px] font-semibold text-ink-soft">({est.monthlyRange}*)</p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            className="h-auto min-h-12 w-full whitespace-normal break-words flex-wrap sm:flex-nowrap justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-semibold shadow-sm transition-all hover:translate-y-[-1px] text-center"
          >
            <span>Request Tailored Health Insurance Comparison</span>
            <ArrowRight className="size-4 shrink-0" />
          </Button>

          {/* Privacy and Trust Guarantees */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-t border-border pt-4 text-[11px] text-muted-foreground text-center sm:text-left min-w-0 w-full">
            <span className="inline-flex items-center justify-center sm:justify-start gap-1">
              <LockKeyhole className="size-3 text-primary shrink-0" />
              100% Privacy Protected · Zero Spam Calls
            </span>
            <span className="inline-flex items-center justify-center sm:justify-start gap-1">
              <ShieldCheck className="size-3 text-primary shrink-0" />
              IRDAI-Regulated Insurers
            </span>
          </div>
        </form>
      )}
    </div>
  );
}

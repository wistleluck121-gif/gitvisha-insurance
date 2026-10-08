import { useRef, useState, type FormEvent } from "react";
import { ArrowRight, CircleCheck, LockKeyhole, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { policyTypes, vehicleEnquirySchema, type VehicleEnquiry } from "@/lib/insurance/enquiry";

type FieldName = keyof VehicleEnquiry;
const fields: { name: FieldName; label: string; placeholder?: string; type?: string; autoComplete?: string; optional?: boolean }[] = [
  { name: "fullName", label: "Full Name", placeholder: "Your full name", autoComplete: "name" },
  { name: "mobile", label: "Mobile Number", placeholder: "10-digit mobile number", type: "tel", autoComplete: "tel" },
  { name: "email", label: "Email", placeholder: "you@example.com", type: "email", autoComplete: "email" },
  { name: "city", label: "City", placeholder: "Your city", autoComplete: "address-level2" },
  { name: "registration", label: "Vehicle Registration", placeholder: "e.g. DL01AB1234", optional: true },
  { name: "makeModel", label: "Car Make / Model", placeholder: "e.g. Maruti Suzuki Baleno" },
];

export function VehicleQuoteForm() {
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [complete, setComplete] = useState(false);
  const statusRef = useRef<HTMLDivElement>(null);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const result = vehicleEnquirySchema.safeParse(Object.fromEntries(new FormData(form)));
    if (!result.success) {
      const next: Partial<Record<FieldName, string>> = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as FieldName;
        next[field] ??= issue.message;
      }
      setErrors(next);
      const first = form.elements.namedItem(Object.keys(next)[0]);
      if (first instanceof HTMLElement) first.focus();
      return;
    }
    setErrors({});
    setComplete(true);
    requestAnimationFrame(() => statusRef.current?.focus());
  }
  const errorProps = (name: FieldName) => ({ "aria-invalid": !!errors[name], "aria-describedby": errors[name] ? `car-${name}-error` : undefined });
  const error = (name: FieldName) => errors[name] && <p id={`car-${name}-error`} className="text-sm text-destructive">{errors[name]}</p>;

  return <form onSubmit={submit} noValidate className="grid gap-5 rounded-lg border border-border bg-card p-6 sm:grid-cols-2 sm:p-8" aria-label="Car insurance enquiry" onChange={() => { if (complete) setComplete(false); }}>
    <div className="sm:col-span-2">
      <h3 className="text-2xl font-semibold text-ink">Your car. Your coverage needs.</h3>
      <p className="mt-2 text-sm leading-6 text-ink-soft">Prepare an enquiry for Gitvisha. Fields marked optional can be left blank.</p>
    </div>
    {fields.map(({ name, label, placeholder, type, autoComplete, optional }) => <div className="space-y-2" key={name}>
      <Label htmlFor={`car-${name}`}>{label}{optional && <span className="font-normal text-muted-foreground"> (optional)</span>}</Label>
      <Input id={`car-${name}`} name={name} type={type ?? "text"} autoComplete={autoComplete} placeholder={placeholder} required={!optional} className="h-11 bg-background" {...errorProps(name)} />
      {error(name)}
    </div>)}
    <div className="space-y-2">
      <Label htmlFor="car-policyType">Policy Type</Label>
      <select id="car-policyType" name="policyType" required defaultValue="" className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" {...errorProps("policyType")}>
        <option value="" disabled>Select a policy type</option>
        {policyTypes.map((type) => <option key={type}>{type}</option>)}
      </select>{error("policyType")}
    </div>
    <div className="space-y-2">
      <Label htmlFor="car-expiry">Existing Policy Expiry <span className="font-normal text-muted-foreground">(optional)</span></Label>
      <Input id="car-expiry" name="expiry" type="date" className="h-11 min-w-0 bg-background" {...errorProps("expiry")} />{error("expiry")}
    </div>
    <div className="space-y-2 sm:col-span-2">
      <Label htmlFor="car-message">Requirement / Message <span className="font-normal text-muted-foreground">(optional)</span></Label>
      <Textarea id="car-message" name="message" placeholder="New car, renewal, a policy question, or specific cover you need…" className="min-h-24 bg-background" />
    </div>
    <div className="flex flex-col gap-4 sm:col-span-2 sm:items-start">
      <p className="flex items-start gap-2 text-xs leading-5 text-ink-soft"><LockKeyhole aria-hidden="true" className="mt-0.5 size-4 shrink-0" />This preview does not send or save your details. No quote or policy is issued here.</p>
      <Button type="submit" size="lg" className="min-h-12 w-full" disabled={complete}>Review Enquiry <ArrowRight /></Button>
    </div>
    {complete && <div ref={statusRef} tabIndex={-1} role="status" className="rounded-md border border-border bg-secondary p-5 text-ink outline-none focus-visible:ring-2 focus-visible:ring-ring sm:col-span-2">
      <div className="flex items-start gap-3"><CircleCheck className="mt-0.5 size-5 shrink-0" /><div><h4 className="font-semibold">Your enquiry is ready to review.</h4><p className="mt-2 text-sm leading-6">Nothing has been sent or saved. To discuss coverage, email <a href="mailto:info@gitvisha.com" className="font-semibold underline underline-offset-4">info@gitvisha.com</a>. Please confirm this contact address before sharing personal details.</p></div></div>
      <Button type="button" variant="ghost" className="mt-3 min-h-11" onClick={() => setComplete(false)}><Pencil />Edit details</Button>
    </div>}
  </form>;
}
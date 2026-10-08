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

const fieldClass = "h-10 rounded-lg border-primary-foreground/15 bg-primary-foreground/5 text-primary-foreground placeholder:text-cyan-soft/50 focus-visible:ring-cyan";

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
      const firstName = Object.keys(next)[0];
      const first = firstName ? form.elements.namedItem(firstName) : null;
      if (first instanceof HTMLElement) first.focus();
      return;
    }
    setErrors({});
    setComplete(true);
    requestAnimationFrame(() => statusRef.current?.focus());
  }
  const errorProps = (name: FieldName) => ({ "aria-invalid": !!errors[name], "aria-describedby": errors[name] ? `car-${name}-error` : undefined });
  const error = (name: FieldName) => errors[name] && <p id={`car-${name}-error`} className="text-xs text-destructive">{errors[name]}</p>;

  return <form onSubmit={submit} noValidate className="rounded-2xl border border-line-dark bg-surface-dark/80 p-6 shadow-lg shadow-cyan/10 sm:p-8" aria-label="Car insurance enquiry" onChange={() => { if (complete) setComplete(false); }}>
    <div className="sm:col-span-2">
      <p className="text-xs font-bold uppercase tracking-wide text-cyan">Car insurance enquiry</p>
      <h3 className="mt-1 text-xl font-semibold text-primary-foreground">Your car. Your coverage needs.</h3>
    </div>
    <div className="mt-6 grid gap-4 sm:grid-cols-2">
      {fields.map(({ name, label, placeholder, type, autoComplete, optional }) => <div className="space-y-1.5" key={name}>
        <Label htmlFor={`car-${name}`} className="text-xs font-medium text-cyan-soft">{label}{optional && <span className="font-normal text-cyan-soft/70"> · optional</span>}</Label>
        <Input id={`car-${name}`} name={name} type={type ?? "text"} autoComplete={autoComplete} placeholder={placeholder} required={!optional} className={fieldClass} {...errorProps(name)} />
        {error(name)}
      </div>)}
      <div className="space-y-1.5">
        <Label htmlFor="car-policyType" className="text-xs font-medium text-cyan-soft">Policy Type</Label>
        <select id="car-policyType" name="policyType" required defaultValue="" className={`${fieldClass} w-full appearance-none px-3`} {...errorProps("policyType")}>
          <option value="" disabled>Select a policy type</option>
          {policyTypes.map((type) => <option key={type}>{type}</option>)}
        </select>{error("policyType")}
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="car-expiry" className="text-xs font-medium text-cyan-soft">Existing Policy Expiry<span className="font-normal text-cyan-soft/70"> · optional</span></Label>
        <Input id="car-expiry" name="expiry" type="date" className={`${fieldClass} min-w-0 [color-scheme:dark]`} {...errorProps("expiry")} />
        {error("expiry")}
      </div>
      <div className="space-y-1.5 sm:col-span-2">
        <Label htmlFor="car-message" className="text-xs font-medium text-cyan-soft">Requirement / Message<span className="font-normal text-cyan-soft/70"> · optional</span></Label>
        <Textarea id="car-message" name="message" placeholder="New car, renewal, a policy question, or specific cover you need…" className="rounded-lg border-primary-foreground/15 bg-primary-foreground/5 text-primary-foreground placeholder:text-cyan-soft/50 focus-visible:ring-cyan" />
      </div>
    </div>
    <div className="mt-6 space-y-3 border-t border-line-dark pt-5">
      <Button type="submit" size="lg" className="min-h-12 w-full rounded-xl" disabled={complete}>Review Enquiry <ArrowRight /></Button>
      <p className="flex items-start gap-2 text-xs leading-5 text-cyan-soft"><LockKeyhole aria-hidden="true" className="mt-0.5 size-4 shrink-0" />This preview does not send or save your details. No quote or policy is issued here.</p>
    </div>
    {complete && <div ref={statusRef} tabIndex={-1} role="status" className="mt-4 rounded-xl border border-line-dark bg-primary-foreground/5 p-5 text-primary-foreground outline-none focus-visible:ring-2 focus-visible:ring-cyan">
      <div className="flex items-start gap-3"><CircleCheck className="mt-0.5 size-5 shrink-0 text-cyan" /><div><h4 className="font-semibold">Your enquiry is ready to review.</h4><p className="mt-2 text-sm leading-6 text-cyan-soft">Nothing has been sent or saved. To discuss coverage, email <a href="mailto:info@gitvisha.com" className="font-semibold text-primary-foreground underline underline-offset-4">info@gitvisha.com</a>. Please confirm this contact address before sharing personal details.</p></div></div>
      <Button type="button" variant="ghost" className="mt-3 min-h-11 text-cyan-soft hover:text-primary-foreground" onClick={() => setComplete(false)}><Pencil />Edit details</Button>
    </div>}
  </form>;
}

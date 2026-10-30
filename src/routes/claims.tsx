import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  Phone,
  ClipboardList,
  FileSearch,
  MessagesSquare,
  CheckCircle2,
  FileText,
  Camera,
  ReceiptText,
  Building2,
  ShieldCheck,
} from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export const Route = createFileRoute("/claims")({
  component: ClaimsPage,
  head: () => ({
    meta: [
      { title: "Claims Assistance | Gitvisha" },
      {
        name: "description",
        content:
          "Guidance on claim intimation, documentation and coordination with relevant parties.",
      },
    ],
  }),
});

const stages = [
  {
    n: "01",
    title: "Intimate the incident",
    icon: Phone,
    copy: "Notify the insurer or designated claims contact promptly, following your policy conditions.",
  },
  {
    n: "02",
    title: "Preserve evidence",
    icon: Camera,
    copy: "Where safe, take photographs and retain relevant invoices, reports and correspondence.",
  },
  {
    n: "03",
    title: "Compile documents",
    icon: ClipboardList,
    copy: "Organise the documents requested for your policy and type of loss.",
  },
  {
    n: "04",
    title: "Coordinate assessment",
    icon: FileSearch,
    copy: "Respond to queries and coordinate information with the insurer, surveyor or appointed parties.",
  },
  {
    n: "05",
    title: "Track and respond",
    icon: MessagesSquare,
    copy: "Keep a record of submissions, outstanding requirements and updates through the claim process.",
  },
];

const docs = [
  {
    icon: FileText,
    title: "Policy & schedule",
    copy: "Policy copy, schedule, endorsements and relevant clauses.",
  },
  {
    icon: Camera,
    title: "Photos & incident details",
    copy: "Damage photos, incident timeline, location and brief description.",
  },
  {
    icon: ReceiptText,
    title: "Invoices & claim estimate",
    copy: "Invoices, repair estimates, claim bill or stock records as relevant.",
  },
  {
    icon: Building2,
    title: "Official & technical records",
    copy: "Reports, logs, panchnama or other records where applicable.",
  },
];

function ClaimsPage() {
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = encodeURIComponent(
      `Name: ${d.get("name")}\nCompany: ${d.get("company")}\nPhone: ${d.get("phone")}\nEmail: ${d.get("email")}\nReference: ${d.get("reference")}\nIncident date: ${d.get("date")}\nClaim type: ${d.get("type")}\nDetails: ${d.get("details")}`,
    );
    setSent(true);
    window.location.href = `mailto:info@gitvisha.com?subject=${encodeURIComponent("Claims assistance request — Gitvisha")}&body=${body}`;
  }

  return (
    <div className="gv-page">
      <SiteHeader />
      <main>
        <section className="gv-product-hero">
          <div className="gv-container gv-product-hero-grid">
            <div className="gv-product-copy">
              <div className="gv-breadcrumb">
                <Link to="/">Home</Link>
                <span>/</span>
                <strong>Claims assistance</strong>
              </div>
              <span className="gv-kicker">
                <i className="gv-kicker-dot" /> CLAIMS · DOCUMENTATION · COORDINATION
              </span>
              <h1>
                When a claim happens,{" "}
                <span className="gv-inline-gradient">clear next steps matter.</span>
              </h1>
              <p className="gv-lead">Practical support through a complicated moment.</p>
              <p className="gv-product-intro">
                We help clients understand information requirements, organise documents and
                coordinate communication with relevant parties. Claim decisions and settlement
                remain with the insurer and depend on policy terms and the facts of the loss.
              </p>
              <div className="gv-hero-actions">
                <a className="gv-btn gv-btn-primary" href="#claim-request">
                  Request claims support <ArrowRight size={17} />
                </a>
                <a className="gv-text-link" href="#claim-process">
                  See the process <ArrowRight size={16} />
                </a>
              </div>
            </div>

            <div className="gv-product-art">
              <div className="gv-art-orbit gv-art-orbit-one" />
              <div className="gv-art-orbit gv-art-orbit-two" />
              <div className="gv-art-shield gv-careers-logo">
                <img
                  src={"/gitvisha-logo.webp"}
                  alt="Gitvisha logo"
                  width={116}
                  height={116}
                  decoding="async"
                />
              </div>
              <div className="gv-art-card gv-art-card-top">
                <span className="gv-art-icon">
                  <FileSearch size={24} />
                </span>
                <span>
                  <b>Documents organised</b>
                  <small>Requirements made clearer</small>
                </span>
              </div>
              <div className="gv-art-card gv-art-card-bottom">
                <span className="gv-art-check">
                  <CheckCircle2 size={21} />
                </span>
                <span>
                  <b>Communication supported</b>
                  <small>One step at a time</small>
                </span>
              </div>
              <p className="gv-art-caption">CLAIMS · COORDINATION · CLARITY</p>
            </div>
          </div>
        </section>

        <section className="gv-section" id="claim-process">
          <div className="gv-container">
            <div className="gv-section-heading">
              <span className="gv-kicker">THE CLAIM JOURNEY</span>
              <h2>
                Five steps to help keep <span>things organised.</span>
              </h2>
              <p>
                Exact steps and timelines vary by insurer, policy wording, claim type and
                circumstances.
              </p>
            </div>
            <div className="gv-claim-steps">
              {stages.map(({ n, title, icon: Icon, copy }) => (
                <article key={n}>
                  <div className="gv-claim-step-top">
                    <span>{n}</span>
                    <Icon size={22} />
                  </div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="gv-section gv-section-tint">
          <div className="gv-container">
            <div className="gv-section-heading">
              <span className="gv-kicker">DOCUMENT CHECKLIST</span>
              <h2>
                Start with the records <span>you already have.</span>
              </h2>
              <p>
                This is a general guide. The insurer or appointed surveyor may request additional
                documents for your specific claim.
              </p>
            </div>
            <div className="gv-doc-grid">
              {docs.map(({ icon: Icon, title, copy }) => (
                <article key={title}>
                  <span className="gv-doc-icon">
                    <Icon size={22} />
                  </span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="gv-section">
          <div className="gv-container gv-claim-note">
            <span className="gv-note-icon">
              <ShieldCheck size={26} />
            </span>
            <div>
              <h3>Important: report promptly and follow policy conditions</h3>
              <p>
                Notify the insurer within the time and manner required by your policy. This page is
                general guidance, not a guarantee of claim acceptance or settlement.
              </p>
            </div>
          </div>
        </section>

        <section className="gv-enquiry-section" id="claim-request">
          <div className="gv-container gv-enquiry-grid">
            <div>
              <span className="gv-kicker gv-kicker-light">CLAIMS SUPPORT REQUEST</span>
              <h2>
                Tell us what happened. <span>We’ll help clarify the next step.</span>
              </h2>
              <p>
                Share the basic details below. Your email application will open with the information
                ready to send.
              </p>
              <div className="gv-enquiry-points">
                <div>
                  <CheckCircle2 size={18} /> Help organising required documents
                </div>
                <div>
                  <CheckCircle2 size={18} /> Support coordinating claim communication
                </div>
                <div>
                  <CheckCircle2 size={18} /> Guidance depends on policy and circumstances
                </div>
              </div>
            </div>

            <form className="gv-enquiry-form" onSubmit={submit}>
              <div className="gv-form-heading">
                <span className="gv-form-icon">
                  <ClipboardList size={21} />
                </span>
                <div>
                  <h3>Claim details</h3>
                  <p>Fields marked * are required.</p>
                </div>
              </div>
              <div className="gv-form-grid">
                <label>
                  Your name *
                  <input name="name" required minLength={2} placeholder="Full name" />
                </label>
                <label>
                  Company
                  <input name="company" placeholder="Company name" />
                </label>
                <label>
                  Phone *
                  <input name="phone" required type="tel" minLength={8} placeholder="+91" />
                </label>
                <label>
                  Email *
                  <input name="email" required type="email" placeholder="you@company.com" />
                </label>
                <label>
                  Policy / claim reference
                  <input name="reference" placeholder="If available" />
                </label>
                <label>
                  Incident date
                  <input name="date" type="date" />
                </label>
                <label className="gv-field-wide">
                  Claim type *
                  <select name="type" required defaultValue="">
                    <option value="" disabled>
                      Select claim type
                    </option>
                    {[
                      "Property / Fire",
                      "Engineering / Machinery",
                      "Marine / Transit",
                      "Motor",
                      "Liability",
                      "Employee / Health",
                      "Other / Not sure",
                    ].map((x) => (
                      <option key={x}>{x}</option>
                    ))}
                  </select>
                </label>
                <label className="gv-field-wide">
                  Brief details *
                  <textarea
                    name="details"
                    required
                    minLength={10}
                    rows={4}
                    placeholder="Incident summary, location and current status"
                  />
                </label>
              </div>
              <button className="gv-btn gv-btn-primary gv-submit">
                Prepare claims email <ArrowRight size={17} />
              </button>
              {sent && (
                <p className="gv-form-status" role="status">
                  Your email app should open with the claim details prepared. If it does not, email
                  info@gitvisha.com.
                </p>
              )}
              <p className="gv-form-note">
                Submitting opens your email client directly; no claim details are stored on a server.
              </p>
            </form>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

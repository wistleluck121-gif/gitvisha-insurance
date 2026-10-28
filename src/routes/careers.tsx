import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  HeartHandshake,
  Lightbulb,
  CheckCircle2,
  Send,
} from "lucide-react";

export const Route = createFileRoute("/careers")({
  component: CareersPage,
  head: () => ({
    meta: [
      { title: "Careers | Gitvisha" },
      {
        name: "description",
        content: "Introduce yourself to the Gitvisha team and share your career interests.",
      },
    ],
  }),
});
const areas = [
  {
    title: "Claims & Client Support",
    copy: "Documentation, follow-ups, coordination and clear client communication.",
  },
  {
    title: "Underwriting & Policy Servicing",
    copy: "Risk information, policy review, records and process discipline.",
  },
  {
    title: "Business Development",
    copy: "Relationship building, understanding client needs and presenting suitable solutions.",
  },
  {
    title: "Operations & Analytics",
    copy: "Structured workflows, reporting, data quality and continuous improvement.",
  },
];
function CareersPage() {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = encodeURIComponent(
      `Name: ${d.get("name")}\nEmail: ${d.get("email")}\nPhone: ${d.get("phone")}\nArea: ${d.get("role")}\nExperience: ${d.get("experience")}\nProfile: ${d.get("profile")}\nMessage: ${d.get("message")}`,
    );
    setSent(true);
    window.location.href = `mailto:info@gitvisha.com?subject=${encodeURIComponent("Career introduction — Gitvisha")}&body=${body}`;
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
                <strong>Careers</strong>
              </div>
              <span className="gv-kicker">
                <i className="gv-kicker-dot" /> CAREERS AT GITVISHA
              </span>
              <h1>
                Build a career around <span className="gv-inline-gradient">work that matters.</span>
              </h1>
              <p className="gv-lead">Thoughtful people. Meaningful work. Room to grow.</p>
              <p className="gv-product-intro">
                Insurance is ultimately about people, businesses and what they work hard to build.
                We value curiosity, dependability, careful thinking and clear communication.
              </p>
              <div className="gv-hero-actions">
                <a className="gv-btn gv-btn-primary" href="#apply">
                  Introduce yourself <ArrowRight size={17} />
                </a>
                <a className="gv-text-link" href="#areas">
                  Explore role areas <ArrowRight size={16} />
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
                  <Lightbulb size={24} />
                </span>
                <span>
                  <b>Curiosity matters</b>
                  <small>Learn and improve</small>
                </span>
              </div>
              <div className="gv-art-card gv-art-card-bottom">
                <span className="gv-art-check">
                  <HeartHandshake size={21} />
                </span>
                <span>
                  <b>People come first</b>
                  <small>Work with purpose</small>
                </span>
              </div>
              <p className="gv-art-caption">PEOPLE · PURPOSE · PROGRESS</p>
            </div>
          </div>
        </section>
        <section className="gv-section">
          <div className="gv-container gv-about-intro">
            <div>
              <span className="gv-kicker">WHY GITVISHA</span>
              <h2>
                Good work starts with <span>good questions.</span>
              </h2>
            </div>
            <div>
              <p className="gv-body-copy">
                Insurance and risk advisory bring together analysis, communication, documentation
                and problem-solving. Claims, operations, underwriting and business development each
                play a role in a considered client experience.
              </p>
              <p className="gv-body-copy">
                We do not list unverified vacancies here. Use the form to share your interests and
                experience; the team can review your message if a suitable opportunity arises.
              </p>
            </div>
          </div>
        </section>
        <section className="gv-section gv-section-tint" id="areas">
          <div className="gv-container">
            <div className="gv-section-heading">
              <span className="gv-kicker">AREAS YOU MAY BE INTERESTED IN</span>
              <h2>
                Where your skills <span>could contribute.</span>
              </h2>
              <p>These are interest areas, not confirmed open vacancies.</p>
            </div>
            <div className="gv-role-grid">
              {areas.map((r, i) => (
                <article key={r.title}>
                  <span className="gv-role-icon">
                    <BriefcaseBusiness size={21} />
                  </span>
                  <span className="gv-number">0{i + 1}</span>
                  <h3>{r.title}</h3>
                  <p>{r.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="gv-enquiry-section" id="apply">
          <div className="gv-container gv-enquiry-grid">
            <div>
              <span className="gv-kicker gv-kicker-light">MAKE AN INTRODUCTION</span>
              <h2>
                Tell us what you <span>would bring to the team.</span>
              </h2>
              <p>
                Share a short introduction. Your email application will open with your details ready
                to send.
              </p>
              <div className="gv-enquiry-points">
                <div>
                  <CheckCircle2 size={18} /> Share your area of interest
                </div>
                <div>
                  <CheckCircle2 size={18} /> Add a profile link if relevant
                </div>
                <div>
                  <CheckCircle2 size={18} /> No unverified vacancy claims
                </div>
              </div>
            </div>
            <form className="gv-enquiry-form" onSubmit={submit}>
              <div className="gv-form-heading">
                <span className="gv-form-icon">
                  <Send size={21} />
                </span>
                <div>
                  <h3>Career introduction</h3>
                  <p>Fields marked * are required.</p>
                </div>
              </div>
              <div className="gv-form-grid">
                <label>
                  Full name *<input name="name" required minLength={2} placeholder="Your name" />
                </label>
                <label>
                  Email address *
                  <input name="email" required type="email" placeholder="you@example.com" />
                </label>
                <label>
                  Phone number
                  <input name="phone" type="tel" placeholder="+91" />
                </label>
                <label>
                  Area of interest *
                  <select name="role" required defaultValue="">
                    <option value="" disabled>
                      Select an area
                    </option>
                    {areas.map((a) => (
                      <option key={a.title}>{a.title}</option>
                    ))}
                    <option>Other / General introduction</option>
                  </select>
                </label>
                <label>
                  Experience
                  <input name="experience" placeholder="e.g. 2 years, fresher" />
                </label>
                <label>
                  LinkedIn / portfolio
                  <input name="profile" type="url" placeholder="https://..." />
                </label>
                <label className="gv-field-wide">
                  Short introduction *
                  <textarea
                    name="message"
                    required
                    minLength={20}
                    rows={4}
                    placeholder="Tell us about your skills and interests"
                  />
                </label>
              </div>
              <button className="gv-btn gv-btn-primary gv-submit">
                Prepare introduction email <ArrowRight size={17} />
              </button>
              {sent && (
                <p className="gv-form-status" role="status">
                  Your email app should open with the introduction prepared. If not, email
                  info@gitvisha.com.
                </p>
              )}
              <p className="gv-form-note">
                This demo opens an email draft and does not store your details on a server.
              </p>
            </form>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

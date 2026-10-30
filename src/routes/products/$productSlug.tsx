import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import carInsuranceImg from "@/assets/car-insurance.webp";
import solarPumpingImg from "@/assets/products/solar-pumping.jpg";
import roadConstructionImg from "@/assets/products/road-construction.jpg";
import propertyFireImg from "@/assets/products/property-fire.jpg";
import commercialPropertyImg from "@/assets/products/commercial-property.jpg";
import engineeringImg from "@/assets/products/engineering.jpg";
import marineImg from "@/assets/products/marine.jpg";
import groupHealthImg from "@/assets/products/group-health.jpg";
import corporateLiabilityImg from "@/assets/products/corporate-liability.jpg";
import liabilityJusticeImg from "@/assets/products/liability-justice.jpg";
import motorFleetImg from "@/assets/products/motor-fleet.jpg";
import workmenSafetyImg from "@/assets/products/workmen-safety.jpg";
import electronicEquipmentImg from "@/assets/products/electronic-equipment.jpg";
import bikeInsuranceImg from "@/assets/products/bike-insurance.jpg";
import personalAccidentImg from "@/assets/products/personal-accident.jpg";
import testConsultImg from "@/assets/products/test-consult.jpg";
import { getProductVulnerabilities } from "@/lib/insurance/product-vulnerabilities";
import { useState, type FormEvent } from "react";
import {
  AlertTriangle,
  CarFront,
  Bike,
  Sun,
  Milestone,
  FileText,
  Download,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Flame,
  Wrench,
  Ship,
  Scale,
  Truck,
  HeartPulse,
  Zap,
  Package,
  BriefcaseBusiness,
  BadgeCheck,
  ClipboardCheck,
  ChevronDown,
} from "lucide-react";

type P = {
  title: string;
  intro: string;
  icon: typeof ShieldCheck;
  who: string[];
  cover: string[];
  check: string[];
  faq: [string, string][];
};

const P: Record<string, P> = {
  "health-insurance": {
    title: "Health Insurance",
    intro:
      "Comprehensive medical protection for individuals, families, and senior citizens against soaring healthcare inflation, with cashless access across 10,000+ hospitals.",
    icon: HeartPulse,
    who: [
      "Individuals seeking independent medical safety nets",
      "Families looking for shared floater cover across spouse and children",
      "Adults arranging senior citizen cover for elderly parents",
      "Professionals supplementing employer group health policies",
    ],
    cover: [
      "In-patient hospitalization including room rent, ICU, and surgery fees",
      "Pre-hospitalization (up to 60 days) and post-hospitalization (up to 180 days)",
      "500+ daycare treatments, road/air ambulance, and modern procedures",
      "Restoration benefits, AYUSH in-patient care, and annual health check-ups",
    ],
    check: [
      "Room rent limits and proportional deduction terms",
      "Pre-existing disease (PED) and specific illness waiting periods",
      "Co-payment clauses, network hospital density, and consumable riders",
    ],
    faq: [
      [
        "Why do I need personal health insurance if I already have corporate cover?",
        "Employer group policies end immediately upon job switch, layoff, or retirement. Corporate sum insured is often low with room rent caps. Personal health insurance ensures lifelong continuity and builds accumulated No Claim Bonus (NCB).",
      ],
      [
        "What is the difference between Cashless and Reimbursement claims?",
        "In a Cashless claim at a network hospital, the insurer/TPA settles admissible medical bills directly with the hospital. In a Reimbursement claim, you settle bills upon discharge and submit original records for reimbursement.",
      ],
      [
        "What tax deductions are available under Section 80D?",
        "You can claim tax deductions up to Rs 25,000 for self, spouse, and children (or Rs 50,000 if senior citizen), plus up to Rs 50,000 for senior citizen parents, totaling up to Rs 1,00,000 per financial year.",
      ],
    ],
  },

  "fire-property": {
    title: "Fire & Property Insurance",
    intro:
      "Explore insurance options for buildings, plant, machinery, stock, furniture and other declared business assets.",
    icon: Flame,
    who: [
      "Factories and manufacturing units",
      "Warehouses and logistics facilities",
      "Offices, retail and commercial premises",
    ],
    cover: [
      "Fire and other insured perils specified in the policy",
      "Buildings, plant, machinery, furniture and stock when declared",
      "Optional extensions subject to insurer terms",
    ],
    check: [
      "Correct asset values and valuation basis",
      "Occupancy, construction and fire-protection details",
      "Deductibles, exclusions and warranties",
    ],
    faq: [
      [
        "What assets can be insured?",
        "Declared buildings, machinery, equipment, furniture and stock may be insured, depending on policy terms.",
      ],
      [
        "Is every type of damage covered?",
        "No. Cover depends on insured perils, exclusions, deductibles and endorsements.",
      ],
    ],
  },
  engineering: {
    title: "Engineering Insurance",
    intro:
      "Options for construction, erection, machinery breakdown and electronic equipment exposures.",
    icon: Wrench,
    who: [
      "Infrastructure and construction projects",
      "Industrial plants and production lines",
      "Businesses using critical equipment",
    ],
    cover: [
      "Contract works and erection risks under relevant policies",
      "Machinery breakdown where insured",
      "Electronic equipment risks subject to wording",
    ],
    check: [
      "Project scope, value and timeline",
      "Equipment schedule, age and maintenance",
      "Testing, deductibles and exclusions",
    ],
    faq: [
      [
        "Which policies may be relevant?",
        "Depending on exposure: CAR, EAR, Machinery Breakdown and Electronic Equipment Insurance.",
      ],
      [
        "Are delays automatically covered?",
        "No. Delay-related cover usually needs specific terms.",
      ],
    ],
  },
  "solar-pumping": {
    title: "Solar Pumping Insurance",
    intro:
      "Comprehensive protection for solar powered water pumping systems, photovoltaic arrays, controllers, and pump motors against accidental damage, weather perils, and mechanical breakdown.",
    icon: Sun,
    who: [
      "Farmers and agricultural enterprises using solar irrigation pumps",
      "Renewable energy developers and EPC installation contractors",
      "Commercial farms, nurseries and rural water management facilities",
    ],
    cover: [
      "Physical loss or damage to solar PV modules and mounting structures",
      "Submersible pump, surface motor, inverter and controller breakdown",
      "Natural perils including storm, tempest, cyclone, flood, and lightning",
      "Burglary, theft and transit damage during installation where endorsed",
    ],
    check: [
      "Declared pump capacity (HP/kW) and PV module rating",
      "Site fencing, lightning protection and secure installation standards",
      "Insurer deductibles, warranty compliance and maintenance protocols",
    ],
    faq: [
      [
        "Are solar panels and the submersible pump both covered?",
        "Yes, subject to schedule declarations, both the PV array and mechanical/electrical pumping units can be covered.",
      ],
      [
        "Does it cover theft of solar panels?",
        "Theft cover may be included subject to site security conditions, fencing warranties, and specific policy terms.",
      ],
    ],
  },
  road: {
    title: "Road Insurance",
    intro:
      "Tailored infrastructure insurance for highway, road construction, bridge and corridor projects covering contract works, third-party liability, and natural catastrophe perils.",
    icon: Milestone,
    who: [
      "Highway, expressways and corridor civil EPC contractors",
      "Infrastructure concessionaires and build-operate-transfer (BOT) operators",
      "State road development corporations and municipal construction firms",
    ],
    cover: [
      "Contract Works (CAR/EAR) against unforeseen accidental damage",
      "Earthwork, sub-base, bituminous paving and bridge structural works",
      "Third-party bodily injury and property damage liabilities",
      "Extended maintenance and defect liability period coverage",
    ],
    check: [
      "Contract stretch length (km), terrain profile and soil conditions",
      "Monsoon, landslide, flood and natural catastrophe exposure limits",
      "Construction plant, machinery (CPM) schedules and sub-contractor terms",
    ],
    faq: [
      [
        "Can road construction projects of any scale be covered?",
        "Yes, from local municipal arterial roads to major multi-lane national highways and expressway packages.",
      ],
      [
        "Does cover extend into the maintenance period?",
        "Yes, maintenance period cover can be included to protect against liabilities arising during defect rectification.",
      ],
    ],
  },
  marine: {
    title: "Marine & Transit Insurance",
    intro: "Transit and cargo options for domestic and international movement of goods.",
    icon: Ship,
    who: [
      "Manufacturers and exporters",
      "Importers and distributors",
      "Logistics businesses and traders",
    ],
    cover: [
      "Insured physical loss or damage in transit",
      "Domestic or international shipments under applicable terms",
      "Single-transit or open-policy options where suitable",
    ],
    check: [
      "Commodity, packing and transport mode",
      "Origin, destination and route",
      "Declared values, limits and exclusions",
    ],
    faq: [
      [
        "Can regular shipments be insured?",
        "An open marine policy may suit frequent shipments, subject to declarations and terms.",
      ],
      [
        "Does it cover every delay?",
        "Transit delay alone is not generally covered unless an applicable extension says otherwise.",
      ],
    ],
  },
  liability: {
    title: "Liability Insurance",
    intro:
      "Options for operational, product, professional service and third-party liability exposures.",
    icon: Scale,
    who: [
      "Businesses with customer or visitor interaction",
      "Manufacturers and product suppliers",
      "Professional service firms",
    ],
    cover: [
      "Third-party injury or property damage where insured",
      "Product liability under suitable wording",
      "Professional indemnity for covered claims",
    ],
    check: [
      "Nature of operations and services",
      "Turnover, locations and claims history",
      "Limits, territorial scope and exclusions",
    ],
    faq: [
      [
        "Which liability policy should I choose?",
        "It depends on whether exposure arises from premises, products, professional services or another activity.",
      ],
      [
        "Does it cover every legal claim?",
        "No. Claims must fall within policy grants and conditions.",
      ],
    ],
  },
  motor: {
    title: "Motor Insurance",
    intro:
      "Options for cars, two-wheelers and commercial vehicles, with support through the policy journey.",
    icon: Truck,
    who: [
      "Private car owners",
      "Two-wheeler owners",
      "Businesses operating commercial vehicles or fleets",
    ],
    cover: [
      "Third-party liability as required by law",
      "Own-damage cover when selected",
      "Optional add-ons subject to vehicle and insurer eligibility",
    ],
    check: [
      "Vehicle registration, make, model and year",
      "Existing policy and claims history",
      "IDV, deductibles and add-ons",
    ],
    faq: [
      [
        "Can I enquire about bike insurance separately?",
        "Yes. Mention your two-wheeler details in the enquiry.",
      ],
      [
        "Third-party vs own-damage?",
        "Third-party addresses specified legal liability; own-damage covers the insured vehicle against covered damage.",
      ],
    ],
  },
  "group-health-accident": {
    title: "Group Health & Personal Accident",
    intro:
      "Group health and personal accident options for organisations supporting employees and their families.",
    icon: HeartPulse,
    who: [
      "Growing SMEs and corporates",
      "Employers reviewing employee benefits",
      "Organisations with distributed teams",
    ],
    cover: [
      "Group medical benefits defined in policy",
      "Personal accident benefits when selected",
      "Eligible employees and dependants under scheme rules",
    ],
    check: [
      "Employee census and dependant structure",
      "Benefits, co-pay and waiting periods",
      "Claims experience, network and conditions",
    ],
    faq: [
      [
        "Can benefits be tailored?",
        "Options depend on insurer rules, scheme design and underwriting.",
      ],
      [
        "Are pre-existing conditions covered?",
        "This depends on policy terms, waiting periods and exclusions.",
      ],
    ],
  },
  "business-interruption": {
    title: "Business Interruption Insurance",
    intro: "Consider cover for financial impacts when insured physical loss disrupts operations.",
    icon: Zap,
    who: [
      "Manufacturing and processing units",
      "Businesses dependent on key premises or equipment",
      "Operations with supply dependencies",
    ],
    cover: [
      "Insured loss of gross profit or revenue as defined",
      "Increased cost of working where covered",
      "Indemnity period and triggers according to wording",
    ],
    check: [
      "Underlying property damage cover",
      "Financial records and gross profit calculation",
      "Indemnity period and exclusions",
    ],
    faq: [
      [
        "Does it cover every shutdown?",
        "No. The interruption must meet policy triggers and conditions.",
      ],
      [
        "Can supplier disruption be covered?",
        "Some policies may offer specified extensions, subject to wording and limits.",
      ],
    ],
  },
  "burglary-money": {
    title: "Burglary & Money Insurance",
    intro:
      "Options for theft-related and money-in-transit exposures at premises or during transit.",
    icon: Package,
    who: [
      "Retail and commercial premises",
      "Offices and cash-handling businesses",
      "Businesses moving cash between locations",
    ],
    cover: [
      "Burglary-related loss as defined in policy",
      "Money in transit or specified locations when insured",
      "Extensions where offered and accepted",
    ],
    check: [
      "Premises security measures",
      "Cash handling procedures and routes",
      "Definitions, limits and exclusions",
    ],
    faq: [
      [
        "Is missing stock automatically covered?",
        "Not necessarily. Cover depends on cause of loss and wording.",
      ],
      [
        "Can money in transit be insured?",
        "A suitable policy may cover defined transit exposures subject to conditions.",
      ],
    ],
  },
  "employee-compensation": {
    title: "Employee Compensation Insurance",
    intro:
      "Options relevant to workplace injury and employer liabilities, subject to applicable law and policy terms.",
    icon: BriefcaseBusiness,
    who: [
      "Factories and industrial units",
      "Construction and contracting businesses",
      "Employers with eligible workforce exposures",
    ],
    cover: [
      "Liabilities covered under applicable provisions",
      "Eligible work-related injury claims",
      "Extensions where available and agreed",
    ],
    check: [
      "Employee categories, wages and headcount",
      "Nature of work and locations",
      "Contract labour and declarations",
    ],
    faq: [
      [
        "Who should consider this?",
        "Employers should assess legal obligations and workforce exposures with a qualified advisor.",
      ],
      [
        "Are all workers automatically included?",
        "Eligibility depends on schedule, applicable law and insurer terms.",
      ],
    ],
  },
  "specialty-corporate": {
    title: "Specialty & Corporate Risks",
    intro:
      "Discuss specialised insurance needs, with cover subject to market availability and underwriting.",
    icon: ShieldCheck,
    who: [
      "Large and multi-location organisations",
      "Businesses with complex contracts",
      "Organisations assessing emerging risks",
    ],
    cover: [
      "Risk review and programme mapping",
      "Specialist products where available",
      "Policy wording and limit comparison support",
    ],
    check: [
      "Risk profile and contract requirements",
      "Existing programme and potential gaps",
      "Insurer appetite and exclusions",
    ],
    faq: [
      [
        "Can you review an existing programme?",
        "Yes, a discussion can consider structure, limits and potential gaps.",
      ],
      [
        "Is every specialist risk insurable?",
        "No. Availability depends on exposure, capacity and underwriting appetite.",
      ],
    ],
  },
  "electronic-equipment": {
    title: "Electronic Equipment Insurance",
    intro:
      "Cover options for specified electronic equipment against insured accidental physical loss or damage.",
    icon: BadgeCheck,
    who: [
      "Offices and IT environments",
      "Hospitals and diagnostic facilities",
      "Businesses using specialised electronic equipment",
    ],
    cover: [
      "Specified equipment against insured physical damage",
      "Data media or increased costs if separately covered",
      "Extensions accepted by insurer",
    ],
    check: [
      "Equipment list, age and replacement values",
      "Use, maintenance and location",
      "Data exclusions and deductibles",
    ],
    faq: [
      [
        "Is software or data automatically covered?",
        "No. Data and software may be excluded or need specific extensions.",
      ],
      [
        "Can multiple devices be scheduled?",
        "Equipment is usually identified through a schedule or agreed description.",
      ],
    ],
  },
  "stock-declaration": {
    title: "Stock Declaration Insurance",
    intro:
      "Declaration-based arrangements for eligible stock exposures where values change during the policy period.",
    icon: ClipboardCheck,
    who: [
      "Seasonal manufacturers",
      "Wholesalers and distributors",
      "Businesses with fluctuating inventory",
    ],
    cover: [
      "Declared stock at specified locations",
      "Eligible insured perils stated in wording",
      "Adjustments based on declarations and conditions",
    ],
    check: [
      "Maximum stock values and location split",
      "Declaration frequency and reporting",
      "Valuation basis and underinsurance conditions",
    ],
    faq: [
      [
        "Why use a declaration-based arrangement?",
        "It may suit businesses where stock values fluctuate, subject to insurer acceptance.",
      ],
      ["Are declarations optional?", "Required declarations and deadlines are policy conditions."],
    ],
  },
};

const slugAliases: Record<string, string> = {
  "car-insurance": "motor",
  "bike-insurance": "motor",
  "commercial-vehicle-insurance": "motor",
  "health-insurance": "health-insurance",
  "group-health-insurance": "group-health-accident",
  "personal-accident-insurance": "group-health-accident",
  "property-fire-insurance": "fire-property",
  "engineering-insurance": "engineering",
  "solar-pumping-insurance": "solar-pumping",
  "road-insurance": "road",
  "liability-insurance": "liability",
  "corporate-specialty-risks": "specialty-corporate",
  "marine-insurance": "marine",
  "business-interruption-insurance": "business-interruption",
  "burglary-money-insurance": "burglary-money",
  "employee-compensation-insurance": "employee-compensation",
  "electronic-equipment-insurance": "electronic-equipment",
  "stock-declaration-insurance": "stock-declaration",
};

const productLabels: Record<string, string> = {
  "car-insurance": "Car Insurance",
  "bike-insurance": "Bike Insurance",
  "commercial-vehicle-insurance": "Commercial Vehicle Insurance",
  "health-insurance": "Health Insurance",
  "group-health-insurance": "Group Health Insurance",
  "personal-accident-insurance": "Personal Accident Insurance",
  "property-fire-insurance": "Fire & Property Insurance",
  "engineering-insurance": "Engineering Insurance",
  "solar-pumping-insurance": "Solar Pumping Insurance",
  "road-insurance": "Road Insurance",
  "liability-insurance": "Liability Insurance",
  "corporate-specialty-risks": "Corporate & Specialty Risks",
  "marine-insurance": "Marine Insurance",
  "business-interruption-insurance": "Business Interruption Insurance",
  "burglary-money-insurance": "Burglary & Money Insurance",
  "employee-compensation-insurance": "Employee Compensation Insurance",
  "electronic-equipment-insurance": "Electronic Equipment Insurance",
  "stock-declaration-insurance": "Stock Declaration Insurance",
};

const productBrochures: Record<string, { title: string; url: string }> = {
  "solar-pumping-insurance": {
    title: "Solar Pumping Brochure",
    url: "/brochures/gitvisha-solar-pumping-brochure.pdf",
  },
  "road-insurance": {
    title: "Road Insurance Brochure",
    url: "/brochures/gitvisha-road-insurance-brochure.pdf",
  },
  "car-insurance": {
    title: "Motor & Health Brochure",
    url: "/brochures/gitvisha-health-motor-brochure.pdf",
  },
  "bike-insurance": {
    title: "Motor & Health Brochure",
    url: "/brochures/gitvisha-health-motor-brochure.pdf",
  },
  "commercial-vehicle-insurance": {
    title: "Motor & Health Brochure",
    url: "/brochures/gitvisha-health-motor-brochure.pdf",
  },
  "personal-accident-insurance": {
    title: "Health & Motor Brochure",
    url: "/brochures/gitvisha-health-motor-brochure.pdf",
  },
};

function getProduct(slug: string) {
  const baseProduct = P[slugAliases[slug] ?? slug];
  return baseProduct
    ? { ...baseProduct, title: productLabels[slug] ?? baseProduct.title }
    : undefined;
}

const links = Object.keys(slugAliases).map((slug) => ({
  slug,
  title: productLabels[slug] ?? P[slugAliases[slug] ?? slug]?.title ?? slug,
}));

const productImages: Record<string, { src: string; alt: string }> = {
  "car-insurance": {
    src: carInsuranceImg,
    alt: "Private car driving along scenic route",
  },
  "bike-insurance": {
    src: bikeInsuranceImg,
    alt: "Two-wheeler motorcycle and scooter protection",
  },
  "commercial-vehicle-insurance": {
    src: motorFleetImg,
    alt: "Commercial transport vehicle and logistics fleet",
  },
  "group-health-insurance": {
    src: groupHealthImg,
    alt: "Corporate team and employee health protection",
  },
  "personal-accident-insurance": {
    src: personalAccidentImg,
    alt: "Personal accident and family health security",
  },
  "property-fire-insurance": {
    src: commercialPropertyImg,
    alt: "Modern commercial property complex and business real estate",
  },
  "engineering-insurance": {
    src: engineeringImg,
    alt: "Civil engineering project and machinery works",
  },
  "solar-pumping-insurance": {
    src: solarPumpingImg,
    alt: "Solar-powered agricultural water pumping system",
  },
  "road-insurance": {
    src: roadConstructionImg,
    alt: "Highway and expressway road infrastructure construction",
  },
  "liability-insurance": {
    src: liabilityJusticeImg,
    alt: "Legal liability, third-party indemnity, and risk protection scales of justice",
  },
  "corporate-specialty-risks": {
    src: corporateLiabilityImg,
    alt: "Specialised corporate risk management and executive advisory",
  },
  "marine-insurance": {
    src: marineImg,
    alt: "Ocean container vessel and cargo transit logistics",
  },
  "business-interruption-insurance": {
    src: propertyFireImg,
    alt: "Commercial plant and business continuity operations",
  },
  "burglary-money-insurance": {
    src: corporateLiabilityImg,
    alt: "Commercial premises and financial asset protection",
  },
  "employee-compensation-insurance": {
    src: workmenSafetyImg,
    alt: "Industrial workplace safety and employee compensation",
  },
  "electronic-equipment-insurance": {
    src: electronicEquipmentImg,
    alt: "Enterprise server room and electronic systems",
  },
  "stock-declaration-insurance": {
    src: marineImg,
    alt: "High-bay warehouse stock and freight inventory",
  },
};

export const Route = createFileRoute("/products/$productSlug")({
  component: ProductPage,
  head: ({ params }) => {
    const product = getProduct(params.productSlug ?? "");
    return {
      meta: [
        { title: `${product?.title ?? "Insurance Solutions"} | Gitvisha` },
        {
          name: "description",
          content: product?.intro ?? "Insurance and risk advisory from Gitvisha.",
        },
      ],
    };
  },
});

function ProductPage() {
  const { productSlug } = Route.useParams();
  const p = getProduct(productSlug);
  const [sent, setSent] = useState(false);
  const [showAllVulnerabilities, setShowAllVulnerabilities] = useState(false);

  if (!p)
    return (
      <div className="gv-page">
        <SiteHeader product />
        <main>
          <section className="gv-container gv-not-found">
            <h1>Explore insurance solutions</h1>
            <div className="gv-product-grid">
              {links.map((x) => (
                <Link
                  key={x.slug}
                  to="/products/$productSlug"
                  params={{ productSlug: x.slug }}
                  className="gv-product-mini"
                >
                  {x.title}
                  <ArrowRight size={16} />
                </Link>
              ))}
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    );

  const product = p;
  const brochure = productBrochures[productSlug];

  const Icon =
    productSlug === "health-insurance"
      ? HeartPulse
      : productSlug === "car-insurance"
        ? CarFront
        : productSlug === "bike-insurance"
          ? Bike
          : productSlug === "solar-pumping-insurance"
            ? Sun
            : productSlug === "road-insurance"
              ? Milestone
              : product.icon;

  const productIntro =
    productSlug === "health-insurance"
      ? "Comprehensive medical protection with zero room-rent capping, cashless hospital networks, and Section 80D tax savings."
      : productSlug === "car-insurance"
        ? "Understand cover options for your car, from new-car insurance to renewals and selected add-ons."
        : productSlug === "bike-insurance"
          ? "Explore two-wheeler insurance options with a clearer view of third-party liability, own-damage cover and available add-ons."
          : productSlug === "commercial-vehicle-insurance"
            ? "Review cover options for commercial vehicles and fleets, based on vehicle use, declared details and insurer terms."
            : product.intro;

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = encodeURIComponent(
      `Name: ${d.get("name")}\nCompany: ${d.get("company")}\nPhone: ${d.get("phone")}\nEmail: ${d.get("email")}\nInsurance: ${product.title}\nMessage: ${d.get("message")}`,
    );
    setSent(true);
    window.location.href = `mailto:info@gitvisha.com?subject=${encodeURIComponent("Insurance enquiry — " + product.title)}&body=${body}`;
  }

  const currentImg = productImages[productSlug] ?? { src: engineeringImg, alt: p.title };
  const vulnerabilities = getProductVulnerabilities(productSlug);

  return (
    <div className="gv-page">
      <SiteHeader product />
      <main>
        <section className="gv-product-hero">
          <div className="gv-container gv-product-hero-grid">
            <div className="gv-product-copy">
              <div className="gv-breadcrumb">
                <Link to="/">Home</Link>
                <span>/</span>
                <span>Insurance solutions</span>
                <span>/</span>
                <strong>{p.title}</strong>
              </div>
              <span className="gv-kicker">
                <i className="gv-kicker-dot" /> INSURANCE · RISK · ADVISORY
              </span>
              <h1>
                {p.title}
                <span className="gv-title-dot">.</span>
              </h1>
              <p className="gv-lead">Protection structured around real-world risk.</p>
              <p className="gv-product-intro">{productIntro}</p>

              <div className="gv-hero-actions">
                {productSlug === "health-insurance" && (
                  <Link className="gv-btn gv-btn-primary" to="/health-insurance">
                    Instant Health Quotes & Benchmarks <ArrowRight size={17} />
                  </Link>
                )}
                <a className="gv-btn gv-btn-primary" href="#enquiry">
                  Request a consultation <ArrowRight size={17} />
                </a>

                {brochure && (
                  <a
                    className="gv-btn gv-btn-light"
                    href={brochure.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    <Download size={17} /> Brochure PDF
                  </a>
                )}

                <a className="gv-btn gv-btn-light" href="#vulnerabilities">
                  <AlertTriangle size={17} /> Critical Exposures
                </a>

                <a className="gv-text-link" href="#coverage">
                  Explore coverage <ArrowRight size={16} />
                </a>
              </div>

              <div className="gv-trust-line">
                <ShieldCheck size={18} /> Thoughtful advice. Clear options. Support through the
                policy journey.
              </div>
            </div>

            <div className="gv-product-art gv-product-photo-art">
              <div className="gv-photo-frame">
                <img src={currentImg.src} alt={currentImg.alt} loading="eager" decoding="async" />
                <span className="gv-photo-label">GITVISHA · RISK ADVISORY</span>
              </div>
              <div className="gv-art-card gv-art-card-top">
                <span className="gv-art-icon">
                  <Icon size={24} />
                </span>
                <span>
                  <b>Risk, understood.</b>
                  <small>Start with what matters</small>
                </span>
              </div>
              <div className="gv-art-card gv-art-card-bottom">
                <span className="gv-art-check">
                  <CheckCircle2 size={21} />
                </span>
                <span>
                  <b>Cover that fits</b>
                  <small>Subject to policy terms</small>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Critical Vulnerabilities & Real-World Exposures Section */}
        {vulnerabilities.length > 0 && (
          <section className="gv-section bg-secondary/60 overflow-hidden w-full" id="vulnerabilities">
            <div className="gv-container min-w-0">
              <div className="gv-section-heading min-w-0">
                <span className="gv-kicker">CRITICAL VULNERABILITIES & EXPOSURES</span>
                <h2>
                  Real-world risks <span>this policy is engineered to solve.</span>
                </h2>
                <p>
                  Commercial and personal risks rarely follow idealized assumptions. These are the
                  critical financial pitfalls, claim traps, and operational vulnerabilities that
                  proper policy structuring actively mitigates.
                </p>
              </div>

              <div className="grid gap-3.5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 min-w-0 w-full">
                {vulnerabilities.map((v, i) => (
                  <article
                    key={v.title}
                    className={`flex-col justify-between rounded-xl border border-border bg-card p-4 sm:p-6 shadow-xs sm:shadow-sm transition-all hover:border-primary/50 hover:shadow-md min-w-0 ${
                      i >= 3 && !showAllVulnerabilities ? "hidden sm:flex" : "flex"
                    }`}
                  >
                    <div className="min-w-0">
                      <div className="mb-2.5 flex items-center justify-between min-w-0 sm:mb-3">
                        <span className="flex items-center gap-1.5 rounded-md bg-rose-500/10 px-2 py-0.5 text-[10.5px] sm:px-2.5 sm:py-1 sm:text-[11px] font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 shrink-0">
                          <AlertTriangle className="size-3 sm:size-3.5" /> High-Impact Vulnerability
                        </span>
                        <span className="text-xs font-bold text-ink-soft/60">0{i + 1}</span>
                      </div>
                      <h3 className="mb-1.5 text-sm sm:text-base font-semibold leading-snug text-ink break-words sm:mb-2">
                        {v.title}
                      </h3>
                      <p className="text-xs leading-relaxed text-ink-soft break-words">{v.trigger}</p>
                    </div>

                    <div className="mt-4 border-t border-border pt-3 min-w-0 sm:mt-5 sm:pt-4">
                      <div className="mb-2 flex items-start gap-1.5 text-xs text-rose-600 dark:text-rose-400 min-w-0">
                        <span className="shrink-0 font-semibold">Impact: </span>
                        <span className="font-normal text-ink-soft break-words">{v.impact}</span>
                      </div>
                      <div className="flex items-start gap-1.5 text-xs text-primary min-w-0">
                        <ShieldCheck className="mt-0.5 size-3.5 shrink-0" />
                        <span className="shrink-0 font-semibold">Policy Solution: </span>
                        <span className="font-normal text-ink break-words">{v.solution}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {vulnerabilities.length > 3 && (
                <div className="mt-4 text-center sm:hidden">
                  <button
                    type="button"
                    onClick={() => setShowAllVulnerabilities((v) => !v)}
                    className="w-full rounded-lg border border-border bg-card py-2 text-xs font-semibold text-primary transition-colors hover:bg-muted"
                  >
                    {showAllVulnerabilities
                      ? "Show Fewer Vulnerabilities"
                      : `View All ${vulnerabilities.length} Vulnerabilities`}
                  </button>
                </div>
              )}
            </div>
          </section>
        )}

        <section className="gv-section overflow-hidden w-full" id="coverage">
          <div className="gv-container min-w-0">
            <div className="gv-section-heading min-w-0">
              <span className="gv-kicker">UNDERSTAND YOUR OPTIONS</span>
              <h2>
                Protection begins with <span>the right questions.</span>
              </h2>
              <p>
                These are discussion points, not a promise that every risk is covered. Final cover
                depends on policy wording and insurer acceptance.
              </p>
            </div>
            <div className="gv-info-grid min-w-0 w-full">
              {p.cover.map((x, i) => (
                <article className="gv-info-card min-w-0" key={x}>
                  <span className="gv-number">0{i + 1}</span>
                  <CheckCircle2 size={22} className="shrink-0" />
                  <h3 className="break-words">{x.split(" ").slice(0, 5).join(" ")}</h3>
                  <p className="break-words">{x}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="gv-section gv-section-tint overflow-hidden w-full">
          <div className="gv-container gv-two-col min-w-0">
            <div className="min-w-0">
              <span className="gv-kicker">WHO IT MAY SUIT</span>
              <h2>
                Built around your <span>real-world exposure.</span>
              </h2>
              <p className="gv-body-copy">
                The right structure starts with understanding your assets, operations, people and
                contractual responsibilities.
              </p>
            </div>
            <div className="gv-check-list min-w-0">
              {p.who.map((x) => (
                <div key={x} className="min-w-0">
                  <CheckCircle2 size={20} className="shrink-0" />
                  <span className="break-words">{x}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="gv-section">
          <div className="gv-container gv-two-col">
            <div>
              <span className="gv-kicker">BEFORE YOU CHOOSE</span>
              <h2>
                Details that make <span>a difference.</span>
              </h2>
              <p className="gv-body-copy">
                Compare more than price. Review limits, deductibles, exclusions and policy
                conditions.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <a href="#enquiry" className="gv-btn gv-btn-outline">
                  Discuss your requirement <ArrowRight size={17} />
                </a>
                {brochure && (
                  <a
                    href={brochure.url}
                    className="gv-btn gv-btn-light"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    <FileText size={17} /> Download {brochure.title}
                  </a>
                )}
              </div>
            </div>
            <div className="gv-consideration-list">
              {p.check.map((x, i) => (
                <div key={x}>
                  <span>0{i + 1}</span>
                  <p>{x}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="gv-section gv-faq-section">
          <div className="gv-container gv-faq-layout">
            <div>
              <span className="gv-kicker">GOOD TO KNOW</span>
              <h2>
                Questions, <span>answered.</span>
              </h2>
              <p className="gv-body-copy">
                Need more clarity? Send us your requirement and our team can help explore the next
                step.
              </p>
              <a href="#enquiry" className="gv-text-link">
                Ask our team <ArrowRight size={16} />
              </a>
            </div>
            <div className="gv-faq-list">
              {p.faq.map(([q, a]) => (
                <details key={q}>
                  <summary>
                    {q}
                    <ChevronDown size={18} />
                  </summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="gv-enquiry-section" id="enquiry">
          <div className="gv-container gv-enquiry-grid">
            <div>
              <span className="gv-kicker gv-kicker-light">LET’S TALK ABOUT YOUR RISK</span>
              <h2>
                Make your next decision with <span>more clarity.</span>
              </h2>
              <p>
                Tell us about your requirement. Your email application will open with the enquiry
                ready to send.
              </p>
              <div className="gv-enquiry-points">
                <div>
                  <CheckCircle2 size={18} /> A conversation focused on your needs
                </div>
                <div>
                  <CheckCircle2 size={18} /> Options subject to underwriting
                </div>
                <div>
                  <CheckCircle2 size={18} /> Clear next steps, without pressure
                </div>
                {brochure && (
                  <div>
                    <FileText size={18} /> Official brochure available for offline reference
                  </div>
                )}
              </div>
            </div>
            <form className="gv-enquiry-form" onSubmit={submit}>
              <div className="gv-form-heading">
                <span className="gv-form-icon">
                  <Icon size={21} />
                </span>
                <div>
                  <h3>Request a consultation</h3>
                  <p>Fields marked * are required.</p>
                </div>
              </div>
              <div className="gv-form-grid">
                <label>
                  Full name *<input name="name" required minLength={2} placeholder="Your name" />
                </label>
                <label>
                  Company
                  <input name="company" placeholder="Company name" />
                </label>
                <label>
                  Phone *<input name="phone" required type="tel" minLength={8} placeholder="+91" />
                </label>
                <label>
                  Email *<input name="email" required type="email" placeholder="you@company.com" />
                </label>
                <label className="gv-field-wide">
                  Requirement *
                  <textarea
                    name="message"
                    required
                    minLength={10}
                    rows={3}
                    placeholder={`Tell us about your ${p.title.toLowerCase()} requirement`}
                  />
                </label>
              </div>
              <button className="gv-btn gv-btn-primary gv-submit">
                Prepare enquiry <ArrowRight size={17} />
              </button>
              {sent && (
                <p className="gv-form-status" role="status">
                  Your email app should open with the enquiry prepared. If it does not, email
                  info@gitvisha.com.
                </p>
              )}
              <p className="gv-form-note">
                Submitting opens your email client directly; no details are stored on a server.
              </p>
            </form>
          </div>
        </section>

        <section className="gv-section">
          <div className="gv-container">
            <div className="gv-section-heading">
              <span className="gv-kicker">EXPLORE MORE</span>
              <h2>
                Other ways we can <span>help protect what matters.</span>
              </h2>
            </div>
            <div className="gv-product-grid">
              {links
                .filter((x) => x.slug !== productSlug)
                .slice(0, 6)
                .map((x) => (
                  <Link
                    key={x.slug}
                    to="/products/$productSlug"
                    params={{ productSlug: x.slug }}
                    className="gv-product-mini"
                  >
                    {x.title}
                    <ArrowRight size={16} />
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

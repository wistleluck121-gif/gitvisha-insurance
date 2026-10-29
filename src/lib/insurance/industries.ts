export type IndustryRisk = {
  category:
    "Asset & Property" | "Liability & Legal" | "Operational & Interruption" | "People & Workforce";
  title: string;
  description: string;
  impact: string;
  recommendedCover: string;
};

export type IndustrySolution = {
  name: string;
  productSlug: string;
  summary: string;
};

export type IndustryData = {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  heroHeadline: string;
  heroIntro: string;
  riskOverview: string;
  risks: IndustryRisk[];
  solutions: IndustrySolution[];
  underwritingChecklist: string[];
  faqs: [string, string][];
};

export const industriesData: Record<string, IndustryData> = {
  manufacturing: {
    slug: "manufacturing",
    title: "Manufacturing & Industrial Plants",
    shortTitle: "Manufacturing",
    icon: "Building2",
    heroHeadline: "Safeguard high-value plant machinery, supply chains, and industrial workforce.",
    heroIntro:
      "Manufacturing facilities operate heavy machinery, combustible materials, and complex assembly lines where a single mechanical failure or fire peril can halt production for months.",
    riskOverview:
      "Modern manufacturers face interconnected risks across physical factory assets, continuous assembly uptime, product quality liabilities, and workforce physical safety.",
    risks: [
      {
        category: "Asset & Property",
        title: "Machinery Breakdown & Mechanical Failure",
        description:
          "High-capacity press lines, CNC centers, boilers, and transformers subject to mechanical stress, internal electrical surge, or operator mishandling.",
        impact: "Millions in equipment replacement costs and weeks of stalled production lines.",
        recommendedCover: "Machinery Breakdown (MBD) & Boiler Pressure Plant Cover",
      },
      {
        category: "Asset & Property",
        title: "Industrial Fire & Chemical Explosions",
        description:
          "Combustible dust, petrochemical solvents, and continuous furnace heat create catastrophic fire risks that can consume entire warehouse and production bays.",
        impact: "Total plant write-off and extensive structural damage.",
        recommendedCover: "Standard Fire & Special Perils / Industrial All Risks (IAR)",
      },
      {
        category: "Operational & Interruption",
        title: "Business Interruption & Extended Downtime",
        description:
          "While physical damage is repaired, fixed operational overheads, debt service payments, and lost gross profits continue mounting without incoming product revenue.",
        impact:
          "Severe balance sheet strain and potential insolvency during long lead-time equipment rebuilds.",
        recommendedCover: "Business Interruption (FLOP / MLOP)",
      },
      {
        category: "People & Workforce",
        title: "Workforce Injury & Hazardous Exposure",
        description:
          "Assembly line machinery, high voltages, heavy lifting, and hot surfaces expose technicians and shop-floor workers to severe occupational injuries.",
        impact:
          "Statutory compensation obligations under the Employee's Compensation Act and legal penalties.",
        recommendedCover: "Employee Compensation / Workmen Safety Insurance",
      },
      {
        category: "Liability & Legal",
        title: "Defective Product Liability & Batch Recalls",
        description:
          "Manufactured components or finished goods failing in consumer or commercial hands, causing bodily injury, property damage, or costly downstream recalls.",
        impact: "Third-party lawsuits, reputational collapse, and massive product recovery costs.",
        recommendedCover: "Product Liability Insurance",
      },
      {
        category: "Operational & Interruption",
        title: "Supply Chain & Transit Damage",
        description:
          "Raw material imports and finished batch freight exposed to transit collisions, container flooding, or rough handling.",
        impact: "Raw material shortages that choke assembly pipelines.",
        recommendedCover: "Marine Cargo Open Policy",
      },
    ],
    solutions: [
      {
        name: "Fire & Property Insurance",
        productSlug: "property-fire-insurance",
        summary:
          "Comprehensive property cover for factory buildings, plants, machinery, and finished stock inventory.",
      },
      {
        name: "Business Interruption Insurance",
        productSlug: "business-interruption-insurance",
        summary:
          "Protects gross profits, fixed payroll costs, and debt obligations during post-fire or breakdown downtime.",
      },
      {
        name: "Employee Compensation Insurance",
        productSlug: "employee-compensation-insurance",
        summary:
          "Mandatory statutory protection against workplace accidental injuries, disability, or occupational diseases.",
      },
      {
        name: "Liability Insurance",
        productSlug: "liability-insurance",
        summary:
          "Covers third-party premises liability, product defect indemnity, and consumer claims defense.",
      },
      {
        name: "Marine Insurance",
        productSlug: "marine-insurance",
        summary:
          "Continuous open cover for raw material sea shipments and inland inter-factory distribution.",
      },
    ],
    underwritingChecklist: [
      "Machinery age, maintenance records, and OEM service contracts",
      "Factory fire-fighting systems (hydrants, sprinklers, heat/smoke detectors, TAC compliance)",
      "Chemical storage handling protocols and explosive hazard zoning",
      "Maximum estimated loss (PML / EML) assessments across contiguous factory blocks",
      "Workforce safety certifications, PPE compliance, and historic claims ratios",
    ],
    faqs: [
      [
        "What is the difference between Fire Insurance and Machinery Breakdown?",
        "Standard Fire insurance covers losses originating from external insured perils (fire, lightning, flood, storm). Machinery Breakdown specifically covers internal causes—such as electrical short-circuiting, centrifugal force tearing, mechanical jamming, or operator error.",
      ],
      [
        "How is Business Interruption calculated for manufacturers?",
        "It is calculated on your insured Gross Profit (Turnover minus variable costs) over an agreed Indemnity Period (e.g., 6 to 18 months), ensuring cash flow remains intact while equipment is repaired or replaced.",
      ],
      [
        "Are contractual supply penalties covered if production stops?",
        "Pure contractual penalty clauses are generally standard exclusions, but business interruption covers the verifiable gross profit loss and additional costs of working (such as leasing alternative machinery) to prevent such penalties.",
      ],
    ],
  },

  "infrastructure-construction": {
    slug: "infrastructure-construction",
    title: "Infrastructure, Road & Civil Construction",
    shortTitle: "Infrastructure & Construction",
    icon: "Landmark",
    heroHeadline:
      "Protect civil engineering works, heavy earthmoving fleets, and contract timelines.",
    heroIntro:
      "Civil infrastructure projects face geological uncertainties, severe weather shocks, complex multi-tier contracting, and high-value plant machinery operating under unforgiving outdoor conditions.",
    riskOverview:
      "From highway paving and bridge construction to high-rise commercial structures, contractors navigate physical asset collapse, heavy plant toppling, third-party property damage, and severe monsoon erosion.",
    risks: [
      {
        category: "Asset & Property",
        title: "Structural Collapse & In-Progress Damage",
        description:
          "Piers, retaining walls, highway sub-bases, or steel superstructures suffering partial or total collapse during engineering phases due to soil subsidence or flash floods.",
        impact: "Massive rework expenses and unrecoverable material losses.",
        recommendedCover: "Contractors All Risks (CAR) / Erection All Risks (EAR)",
      },
      {
        category: "Asset & Property",
        title: "Contractor's Plant & Heavy Machinery Loss",
        description:
          "Bulldozers, excavators, road pavers, cranes, and concrete transit mixers tipping on uneven terrain, engine seizure, or falling into trenches.",
        impact: "Hefty replacement costs and immediate site execution standstills.",
        recommendedCover: "Contractor's Plant & Machinery (CPM) Insurance",
      },
      {
        category: "Liability & Legal",
        title: "Third-Party Property & Bodily Damage",
        description:
          "Vibrations from piling rigs damaging nearby private buildings, overhead crane drops, or excavation damaging buried municipal utility cables.",
        impact: "Severe third-party compensation claims, injunctions, and stop-work orders.",
        recommendedCover: "Third-Party Liability (TPL) Extension on CAR",
      },
      {
        category: "Operational & Interruption",
        title: "Monsoon Washouts & Weather Delays (ALOP)",
        description:
          "Heavy rainfall washing away freshly laid bituminous road layers or unpaved embankments, leading to missed contract completion deadlines.",
        impact:
          "Liquidated damages (LD), loan interest escalation, and lost expected toll or leasing revenue.",
        recommendedCover: "Road Insurance & Advance Loss of Profits (ALOP)",
      },
      {
        category: "People & Workforce",
        title: "High-Elevation Falls & Subcontractor Fatalities",
        description:
          "Scaffolding collapses, trench cave-ins, and moving heavy machinery collisions involving on-site migrant or subcontractor laborers.",
        impact: "Statutory workmen compensation liabilities and project criminal investigations.",
        recommendedCover: "Employee Compensation (Project Site Specific)",
      },
    ],
    solutions: [
      {
        name: "Road Insurance",
        productSlug: "road-insurance",
        summary:
          "Specialized infrastructure protection for road and highway construction, covering washouts, sub-base collapse, and civil works.",
      },
      {
        name: "Engineering Insurance",
        productSlug: "engineering-insurance",
        summary:
          "Contractors All Risks (CAR) and Erection All Risks (EAR) for civil structures, plant installation, and machinery.",
      },
      {
        name: "Liability Insurance",
        productSlug: "liability-insurance",
        summary:
          "Comprehensive third-party property and public liability protection for civil construction works.",
      },
      {
        name: "Employee Compensation Insurance",
        productSlug: "employee-compensation-insurance",
        summary:
          "Mandatory accident and disability cover for site engineers, machine operators, and laborers.",
      },
    ],
    underwritingChecklist: [
      "Soil investigation, hydrology, and geotechnical survey reports",
      "Contract scope, concession agreement clauses, and scheduled completion milestones",
      "Plant & Machinery list with individual serial numbers, capacities, and market valuations",
      "Site layout, flood elevation historical records, and storm-water drainage measures",
      "Surrounding third-party structure surveys before piling/excavation begins",
    ],
    faqs: [
      [
        "Does Contractors All Risks (CAR) cover maintenance periods after construction?",
        "Yes, CAR policies can be structured to include Extended Maintenance or Guarantee periods (typically 12 to 24 months) to cover defects arising from construction during the hand-over phase.",
      ],
      [
        "Are subcontractor laborers covered under the principal contractor's policy?",
        "Yes, provided the declared worker headcount or wage roll properly reflects all on-site laborers or an inclusive project-wide Employee Compensation policy is established.",
      ],
      [
        "What is Advance Loss of Profits (ALOP / DSU)?",
        "Advance Loss of Profits (also called Delay in Start-Up) covers financial loss (such as lost rental income or debt service interest) if the project's commercial launch is delayed due to an insured physical loss.",
      ],
    ],
  },

  "renewable-energy-solar": {
    slug: "renewable-energy-solar",
    title: "Renewable Energy & Agricultural Solar Pumping",
    shortTitle: "Renewable Energy & Solar",
    icon: "Sun",
    heroHeadline:
      "Protect remote solar pump installations, PV arrays, inverters, and green infrastructure.",
    heroIntro:
      "Solar pumping systems and decentralized solar parks operate in exposed outdoor environments prone to severe weather events, grid fluctuations, mechanical pump burnouts, and rural theft.",
    riskOverview:
      "Whether powering agricultural irrigation or utility-scale renewable generation, solar operators face high equipment sensitivity to lightning surges, panel shattering, inverter breakdown, and submersible dry-run wear.",
    risks: [
      {
        category: "Asset & Property",
        title: "Hailstorms, Cyclones & PV Panel Shattering",
        description:
          "Violent storms, heavy hail, and gale-force wind shears cracking or completely ripping crystalline solar modules from mounting structures.",
        impact:
          "Tens of thousands in module replacement costs and prolonged energy generation loss.",
        recommendedCover: "Solar All Risks & Natural Perils Protection",
      },
      {
        category: "Asset & Property",
        title: "Submersible Pump Burnout & Inverter Failure",
        description:
          "High thermal stress, grid harmonic fluctuations, lightning-induced voltage spikes, and sand ingress causing motor winding burnout in deep borewells.",
        impact:
          "Severe agricultural irrigation failure, crop dehydration, and costly deep-well extraction.",
        recommendedCover: "Solar Pumping Insurance (Machinery Breakdown Extension)",
      },
      {
        category: "Asset & Property",
        title: "Remote Theft, Cable Pilferage & Vandalism",
        description:
          "Unattended agricultural fields and solar installations targeted for copper DC cabling, control units, and solar panels.",
        impact: "Immediate system paralysis and recurrent uninsured capital replacement expenses.",
        recommendedCover: "Burglary, Theft & Malicious Damage Cover",
      },
      {
        category: "Operational & Interruption",
        title: "Borewell Dry-Run & Water Table Depletion",
        description:
          "Pumps running dry when underground water levels drop drastically during peak summer months, melting mechanical seals and bearings.",
        impact: "Motor failure and emergency borehole redrilling requirements.",
        recommendedCover: "Solar Pumping Dry-Run & Mechanical Endorsement",
      },
      {
        category: "Liability & Legal",
        title: "Third-Party Electrical Hazard & Environmental Liability",
        description:
          "Short circuits causing brush fires that spread to neighboring agricultural crops or inadvertent electrocution of stray cattle.",
        impact: "Farmer compensation disputes and local community claims.",
        recommendedCover: "Public Liability (Renewable Installations)",
      },
    ],
    solutions: [
      {
        name: "Solar Pumping Insurance",
        productSlug: "solar-pumping-insurance",
        summary:
          "Specialized all-round coverage tailored for solar irrigation pumps, controllers, PV modules, and dry-run mechanical perils.",
      },
      {
        name: "Engineering Insurance",
        productSlug: "engineering-insurance",
        summary: "Covers solar array assembly, inverter commissioning, and mechanical breakdown.",
      },
      {
        name: "Burglary & Money Insurance",
        productSlug: "burglary-money-insurance",
        summary:
          "Protects against theft of panels, copper wiring, and power management units from remote sites.",
      },
      {
        name: "Fire & Property Insurance",
        productSlug: "property-fire-insurance",
        summary:
          "Standard fire and allied perils cover for solar park control rooms, transformers, and battery banks.",
      },
    ],
    underwritingChecklist: [
      "Solar module OEM tier rating, wattage, and structural wind resistance certifications",
      "Submersible pump depth, discharge rating, and manufacturer warranty terms",
      "Lightning protection arresters (LA) and earthing resistance values (Ohms)",
      "Borewell dry-run sensor integration and automatic shut-off controllers",
      "Site perimeter security (fencing, night watch, CCTV) for remote installations",
    ],
    faqs: [
      [
        "Does standard fire insurance cover underground submersible solar pumps?",
        "No. Standard fire insurance stops at the ground level. Specialized Solar Pumping Insurance is required to cover down-hole submersible pumps and motor windings against electrical burnout and sand seizure.",
      ],
      [
        "Are solar panels covered if damaged by monkeys or stray animals?",
        "Under specialized Solar All Risk policies with a Malicious & Animal Damage extension, accidental breakage by wildlife can be covered subject to agreed deductibles.",
      ],
      [
        "How is transit covered when transporting panels from distributor to farm?",
        "Transit is covered under an In-Transit Marine Cargo extension, safeguarding delicate photovoltaic modules against transit vibrations, rollover, and unloading breakage.",
      ],
    ],
  },

  "logistics-warehousing": {
    slug: "logistics-warehousing",
    title: "Logistics, Freight & Supply Chain Warehousing",
    shortTitle: "Logistics & Warehousing",
    icon: "Warehouse",
    heroHeadline:
      "Protect multi-modal cargo transit, warehousing infrastructure, and commercial transport fleets.",
    heroIntro:
      "Supply chain operators manage fast-moving inventories across road, rail, air, and ocean corridors where highway collisions, rough loading, container water damage, and warehouse fires are constant threats.",
    riskOverview:
      "Managing goods owned by third parties amplifies bailee liabilities, while seasonal inventory swings require dynamic stock declaration models to avoid underinsurance penalties.",
    risks: [
      {
        category: "Asset & Property",
        title: "Cargo Damage in Multi-Modal Transit",
        description:
          "Container overturns, cargo shifting in rough seas, truck collisions, derailments, and water ingress through compromised seals.",
        impact: "Severe cargo write-offs and consignment rejection by international consignees.",
        recommendedCover: "Marine Cargo Open Policy (ICC-A / All Risks)",
      },
      {
        category: "Asset & Property",
        title: "Warehouse Catastrophic Fire & Roof Collapse",
        description:
          "High-bay pallet stacking, electrical short circuits, and flammable packaging creating uncontrollable warehouse blazes.",
        impact: "Total destruction of third-party goods and warehouse civil structure.",
        recommendedCover: "Standard Fire & Special Perils with Stock Declaration",
      },
      {
        category: "Operational & Interruption",
        title: "Fluctuating Inventory & Underinsurance Traps",
        description:
          "Warehouse inventories surge 3x during festive peak seasons, leaving fixed-sum policies hopelessly underinsured when disaster strikes.",
        impact: "Application of average clause, slashing claim payouts by 50% or more.",
        recommendedCover: "Stock Declaration Policy (Monthly Declarations)",
      },
      {
        category: "Liability & Legal",
        title: "Carrier & Freight Forwarder Legal Liability",
        description:
          "Cargo owners filing legal recovery suits against 3PL providers and logistics operators for missing boxes, pilferage, or mishandled reefer temperatures.",
        impact: "Crushing litigation and loss of major corporate distribution contracts.",
        recommendedCover: "Freight Forwarder's / Bailee's Liability Insurance",
      },
      {
        category: "People & Workforce",
        title: "Commercial Fleet Highway Collisions & Driver Liability",
        description:
          "Heavy commercial trucks involved in fatal highway crashes, third-party vehicular fatalities, and driver disability.",
        impact:
          "Massive Motor Accident Claims Tribunal (MACT) awards and impounded commercial assets.",
        recommendedCover: "Commercial Vehicle Comprehensive Fleet Insurance",
      },
    ],
    solutions: [
      {
        name: "Marine Insurance",
        productSlug: "marine-insurance",
        summary:
          "Complete ocean, air, and road transit protection against cargo damage, jettison, pilferage, and overturning.",
      },
      {
        name: "Stock Declaration Insurance",
        productSlug: "stock-declaration-insurance",
        summary:
          "Flexible premium structure based on monthly inventory value declarations, preventing underinsurance penalties.",
      },
      {
        name: "Commercial Vehicle Insurance",
        productSlug: "commercial-vehicle-insurance",
        summary:
          "Fleet-wide protection covering own damage, third-party liabilities, driver personal accident, and towing.",
      },
      {
        name: "Burglary & Money Insurance",
        productSlug: "burglary-money-insurance",
        summary:
          "Protects high-value warehouse stock, bonded areas, and freight cash handling against forced entry.",
      },
    ],
    underwritingChecklist: [
      "Transport modes, route security, transit tracking (GPS/IoT seals), and packaging quality",
      "Warehouse structural type, ceiling height, aisle clearances, and automated sprinkler grids",
      "Peak monthly inventory peaks vs. off-season minimums for declaration basis",
      "Driver recruitment criteria, background screening, and commercial fleet safety records",
      "Contractual terms of carriage (Incoterms, bill of lading liability limits)",
    ],
    faqs: [
      [
        "Why is a Stock Declaration Policy better than a standard Fire policy for warehouses?",
        "A standard policy locks in a single insured sum for the whole year. A Stock Declaration policy allows you to pay provisional premium based on your highest capacity, and then declare actual monthly values—refunding unneeded premium at year-end.",
      ],
      [
        "Does Marine Cargo cover goods while temporarily resting in a transit warehouse?",
        "Yes, Institute Cargo Clauses include the 'Warehouse to Warehouse' transit clause, covering incidental storage during the ordinary course of transit up to an agreed period (e.g., 60 days post-discharge).",
      ],
      [
        "What happens if a refrigerated truck fails and cargo spoils?",
        "Standard transit covers collision and overturn. To cover temperature spoilage, a dedicated Deterioration of Goods / Reefer Machinery Breakdown endorsement must be attached.",
      ],
    ],
  },

  "it-tech-corporate": {
    slug: "it-tech-corporate",
    title: "IT Services, Software & Corporate Enterprises",
    shortTitle: "IT, Tech & Corporate",
    icon: "Server",
    heroHeadline:
      "Protect software delivery, sensitive client data, cloud hardware, and executive governance.",
    heroIntro:
      "Technology companies and corporate service firms operate in high-liability environments where a coding defect, cloud outage, or ransomware infection can trigger multi-million dollar client lawsuits.",
    riskOverview:
      "In the digital enterprise, intellectual property, data privacy compliance (DPDP & GDPR), corporate governance, and employee wellness are the frontline vulnerabilities.",
    risks: [
      {
        category: "Liability & Legal",
        title: "Cyber Extortion, Ransomware & Data Breaches",
        description:
          "Malware infiltrating enterprise databases, locking client records, stealing proprietary source code, or exposing personal data.",
        impact:
          "Crippling ransom demands, forensic investigation fees, regulatory penalties, and customer notification costs.",
        recommendedCover: "Cyber Liability Insurance",
      },
      {
        category: "Liability & Legal",
        title: "Technology Errors & Omissions (Tech E&O)",
        description:
          "Software bugs, cloud migration failures, or misconfigured ERP solutions causing catastrophic financial downtime for enterprise clients.",
        impact:
          "Breach of SLA legal actions and client damage claims in foreign jurisdictions (US/EU/APAC).",
        recommendedCover: "Technology Professional Indemnity (Tech E&O)",
      },
      {
        category: "Liability & Legal",
        title: "Directors & Officers (D&O) Governance Liability",
        description:
          "Shareholders, regulators, or creditors alleging misrepresentation, financial mismanagement, or failure to supervise cybersecurity safeguards.",
        impact: "Executive personal asset exposure and exorbitant defense counsel retainers.",
        recommendedCover: "Directors & Officers (D&O) Liability",
      },
      {
        category: "Asset & Property",
        title: "Server Rack Burnout & Critical Hardware Loss",
        description:
          "Precision HVAC failure in server rooms, electrical surges, or clean-agent fire suppression discharge damaging high-value computational infrastructure.",
        impact: "Severe replacement costs and extended cloud service interruption.",
        recommendedCover: "Electronic Equipment Insurance (EEI)",
      },
      {
        category: "People & Workforce",
        title: "Tech Talent Health, Burnout & Medical Emergencies",
        description:
          "High competition for tech talent demanding superior healthcare benefits, cashless hospitalization, and corporate health coverage.",
        impact: "Employee attrition and unmanaged workforce medical emergencies.",
        recommendedCover: "Group Health & Personal Accident Insurance",
      },
    ],
    solutions: [
      {
        name: "Electronic Equipment Insurance",
        productSlug: "electronic-equipment-insurance",
        summary:
          "Specialized cover for high-performance servers, workstations, data center switches, and electronic lab apparatus.",
      },
      {
        name: "Corporate & Specialty Risks",
        productSlug: "corporate-specialty-risks",
        summary:
          "Bespoke protection including Cyber Risk, Tech E&O, and D&O tailored for global client delivery contracts.",
      },
      {
        name: "Liability Insurance",
        productSlug: "liability-insurance",
        summary: "Covers commercial office premises liability and third-party corporate indemnity.",
      },
      {
        name: "Group Health Insurance",
        productSlug: "group-health-insurance",
        summary:
          "Comprehensive health coverage for employees and families with cashless corporate hospitalization networks.",
      },
      {
        name: "Personal Accident Insurance",
        productSlug: "personal-accident-insurance",
        summary:
          "24/7 global accidental death and disability coverage for executives and mobile workforce.",
      },
    ],
    underwritingChecklist: [
      "Client contract jurisdiction requirements (USA/Canada vs. Worldwide)",
      "Cybersecurity protocols: MFA, end-point encryption, SOC2 compliance, regular penetration tests",
      "Data privacy practices handling PII (Personally Identifiable Information) and DPDP readiness",
      "Server room fire suppression (FM200 / Novec) and redundant precision cooling systems",
      "Executive governance structure, shareholder dispersion, and historical dispute records",
    ],
    faqs: [
      [
        "Why is Technology E&O mandatory for software exporters?",
        "Enterprise clients—especially in the US, Europe, and UK—mandate a minimum of $1M to $5M in Tech E&O coverage in their master service agreements (MSAs) before signing software or IT service contracts.",
      ],
      [
        "Does standard commercial insurance cover cyber extortion payments?",
        "No. Cyber extortion and ransomware negotiation, legal forensics, and restoration costs are strictly excluded from property and general liability policies and require a dedicated Cyber Liability policy.",
      ],
      [
        "Can Electronic Equipment Insurance cover laptops used by work-from-home employees?",
        "Yes, policies can be endorsed to cover portable equipment (laptops, mobiles, tablets) anywhere in India or worldwide against accidental damage and theft.",
      ],
    ],
  },

  "healthcare-pharmaceuticals": {
    slug: "healthcare-pharmaceuticals",
    title: "Healthcare, Hospitals & Life Sciences",
    shortTitle: "Healthcare & Pharmaceuticals",
    icon: "HeartPulse",
    heroHeadline:
      "Protect healthcare institutions, diagnostic machinery, clinical staff, and clinical trials.",
    heroIntro:
      "Hospitals, nursing homes, and diagnostic centers care for vulnerable lives while maintaining multi-crore diagnostic machines that are highly vulnerable to electrical, chemical, and operational hazards.",
    riskOverview:
      "Healthcare risk management centers on clinical negligence claims, life-saving bio-medical machinery breakdown, hospital-acquired infection liabilities, and staff infection safety.",
    risks: [
      {
        category: "Liability & Legal",
        title: "Medical Malpractice & Clinical Negligence",
        description:
          "Allegations of misdiagnosis, surgical complications, medication errors, or post-operative infections leveled against surgeons, doctors, or the hospital entity.",
        impact:
          "Severe legal claims at consumer courts (NCDRC), multi-crore settlements, and reputation loss.",
        recommendedCover: "Medical Malpractice / Professional Indemnity for Hospitals & Doctors",
      },
      {
        category: "Asset & Property",
        title: "Diagnostic Equipment Burnout (MRI, CT, Cath-Lab)",
        description:
          "Liquid helium quench in MRI magnets, X-ray tube burnout, power surges, and laser optic damage in expensive diagnostic machinery.",
        impact:
          "Hefty repair bills running into lakhs and stalled diagnostic patient appointments.",
        recommendedCover: "Electronic Equipment Insurance (EEI) with AMC Endorsements",
      },
      {
        category: "Liability & Legal",
        title: "Premises & Patient Fall Liability",
        description:
          "Visitors or elderly patients slipping on freshly sanitized floors, wheelchair ramps, or falling from hospital beds.",
        impact: "Hospital public liability claims and patient compensation mandates.",
        recommendedCover: "Public Liability (Hospital / Clinical Package)",
      },
      {
        category: "Operational & Interruption",
        title: "Contaminated Pharmacy Batches & Cold-Chain Spoilage",
        description:
          "Cold-storage failure spoiling temperature-sensitive vaccines, blood bags, and biological injectables.",
        impact: "Direct inventory write-offs and critical patient treatment disruptions.",
        recommendedCover: "Deterioration of Stock & Commercial Property Insurance",
      },
      {
        category: "People & Workforce",
        title: "Healthcare Worker Exposure & Needle-Stick Injuries",
        description:
          "Doctors, nurses, and lab technicians exposed to infectious pathogens, accidental needle sticks, and occupational disease hazards.",
        impact: "Hospital statutory compensation liabilities and frontline staffing shortages.",
        recommendedCover: "Employee Compensation & Group Health Scheme",
      },
    ],
    solutions: [
      {
        name: "Liability Insurance",
        productSlug: "liability-insurance",
        summary:
          "Specialized Medical Establishment and Professional Indemnity protecting doctors and hospital management against legal claims.",
      },
      {
        name: "Electronic Equipment Insurance",
        productSlug: "electronic-equipment-insurance",
        summary:
          "Comprehensive breakdown and surge protection for MRI, CT scanners, ultrasound, and pathology laboratory analyzers.",
      },
      {
        name: "Fire & Property Insurance",
        productSlug: "property-fire-insurance",
        summary:
          "Covers hospital buildings, ICU units, oxygen pipeline manifolds, and general medical furniture.",
      },
      {
        name: "Group Health Insurance",
        productSlug: "group-health-insurance",
        summary:
          "Customized health insurance for hospital nursing staff, administrative personnel, and their dependents.",
      },
    ],
    underwritingChecklist: [
      "Hospital bed count, specialty departments (cardiology, oncology, neurosurgery, ICU)",
      "Diagnostic equipment inventory, age, OEM warranty, and Annual Maintenance Contracts (AMC/CMC)",
      "Doctor and surgeon credentialing verification and hospital SOPs",
      "Bio-medical waste disposal protocols and statutory pollution control board compliance",
      "Oxygen plant safety certifications, fire escape provisions, and emergency evacuation drills",
    ],
    faqs: [
      [
        "Does a hospital's policy cover visiting consulting doctors?",
        "Hospitals can opt for an 'Unqualified/Qualified Staff' extension or a Comprehensive Medical Establishment policy that covers vicarious liability arising from actions of visiting consultants while on premises.",
      ],
      [
        "How are expensive MRI or CT scanner repairs covered?",
        "Under Electronic Equipment Insurance (EEI), sudden and unforeseen electrical/mechanical breakdown is covered, provided the machine is kept under a valid OEM maintenance contract.",
      ],
      [
        "Can a clinic cover clinical trials and drug tests?",
        "Yes, dedicated Clinical Trial Liability policies are arranged to cover participant compensation and researcher defense costs in compliance with ICMR/CDSCO guidelines.",
      ],
    ],
  },

  "retail-hospitality": {
    slug: "retail-hospitality",
    title: "Retail, Commercial Real Estate & Hospitality",
    shortTitle: "Retail & Hospitality",
    icon: "Store",
    heroHeadline:
      "Protect retail stores, shopping complexes, luxury hotels, and dining establishments.",
    heroIntro:
      "Retailers and hoteliers manage daily footfalls of hundreds of guests, high concentrations of retail stock, commercial kitchens, and continuous customer-facing operations.",
    riskOverview:
      "From dining slip-and-falls and food contamination to commercial kitchen grease fires and burglary of cash tills, customer trust and uninterrupted hospitality are paramount.",
    risks: [
      {
        category: "Liability & Legal",
        title: "Guest Slip, Fall & Premises Injuries",
        description:
          "Guests slipping on wet lobby tiles, escalator malfunctions in malls, or luggage cart collisions causing bodily injury.",
        impact: "Instant public liability lawsuits and public relations crises.",
        recommendedCover: "Public Liability (Non-Industrial / Hospitality)",
      },
      {
        category: "Asset & Property",
        title: "Commercial Kitchen Fire & Smoke Damage",
        description:
          "Deep-fryer grease fires in restaurant kitchens flaring up through exhaust ducts, triggering automatic sprinklers and damaging banquet halls.",
        impact: "Extensive asset damage and immediate shutdown of hotel rooms or restaurants.",
        recommendedCover: "Standard Fire & Perils (Hospitality Package)",
      },
      {
        category: "Operational & Interruption",
        title: "Peak Season Business Interruption",
        description:
          "A property fire or flood occurring right before peak wedding season, holiday tourist rushes, or retail festive sales.",
        impact:
          "Devastating loss of high-margin seasonal revenue while fixed mortgage and payroll obligations persist.",
        recommendedCover: "Business Interruption (FLOP)",
      },
      {
        category: "Asset & Property",
        title: "Till Burglary, Robbery & Shoplifting",
        description:
          "Forced entry into retail stores, smash-and-grab theft of luxury goods, or hold-up of daily cash revenue during bank transit.",
        impact: "Immediate cash flow impairment and lost merchandise.",
        recommendedCover: "Burglary & Money Insurance (In-Transit & In-Safe)",
      },
      {
        category: "Liability & Legal",
        title: "Food Adulteration & Food Poisoning Claims",
        description:
          "Batch contamination in commercial food preparation leading to guest hospitalization and public health authority investigations.",
        impact: "Substantial compensation claims and health department closure notices.",
        recommendedCover: "Food & Beverage Liability Extension",
      },
    ],
    solutions: [
      {
        name: "Fire & Property Insurance",
        productSlug: "property-fire-insurance",
        summary:
          "Protects hotel buildings, guest rooms, retail fit-outs, and commercial inventory against fire and natural perils.",
      },
      {
        name: "Burglary & Money Insurance",
        productSlug: "burglary-money-insurance",
        summary:
          "Protects cash counters, vaults, safe storage, and transit to banks against robbery and theft.",
      },
      {
        name: "Liability Insurance",
        productSlug: "liability-insurance",
        summary:
          "Comprehensive public liability for malls, hotels, and retail stores covering guest injury and food safety.",
      },
      {
        name: "Business Interruption Insurance",
        productSlug: "business-interruption-insurance",
        summary:
          "Protects hotel room revenues, restaurant earnings, and seasonal retail gross profits during post-loss repairs.",
      },
    ],
    underwritingChecklist: [
      "Property construction grade, square footage, guest capacity, and fire-safety certificates (NOC)",
      "Commercial kitchen automatic hood suppression systems (e.g. Ansul systems) and duct cleaning logs",
      "Cash handling routines, vault ratings, armed guard security, and transit protocols",
      "Food safety certifications (FSSAI compliance), HACCP hygiene standards, and water testing reports",
      "Guest baggage handling procedures and safe custody amenities",
    ],
    faqs: [
      [
        "Are valet parking accidents covered under a hotel's insurance?",
        "Yes, by adding the Valet Parking Liability extension to the hotel's Public Liability policy, damage to guest vehicles while under the care, custody, and control of hotel valets is covered.",
      ],
      [
        "Does commercial property insurance cover decorative glass storefronts?",
        "Yes, by including a Plate Glass insurance extension, large showroom glass facades, display cases, and decorative mirrors are insured against accidental breakage.",
      ],
      [
        "How can a boutique retailer protect against employee theft?",
        "A Fidelity Guarantee policy or comprehensive Commercial Crime cover protects business owners against direct financial losses caused by dishonest or fraudulent acts of employees.",
      ],
    ],
  },
};

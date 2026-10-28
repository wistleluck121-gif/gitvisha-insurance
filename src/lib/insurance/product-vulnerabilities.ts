export type ProductVulnerability = {
  title: string;
  trigger: string;
  impact: string;
  solution: string;
};

export const productVulnerabilities: Record<string, ProductVulnerability[]> = {
  "property-fire-insurance": [
    {
      title: "Electrical Short-Circuit & Rapid Flame Spread",
      trigger:
        "High electrical loads, aging transformer panels, or overheated machine bearings igniting nearby packaging or combustible stock.",
      impact:
        "Total plant destruction, structural buckling, and immediate halt of all ongoing operations.",
      solution:
        "Standard Fire & Special Perils (SFSP) with Reinstatement Value and Debris Removal endorsements.",
    },
    {
      title: "The Underinsurance & Average Clause Trap",
      trigger:
        "Insuring factory buildings or machinery at historic balance-sheet book value instead of true current replacement cost.",
      impact:
        "In a ₹10 Cr loss with 40% underinsurance, the insurer legally pays only ₹6 Cr, leaving ₹4 Cr uncovered.",
      solution:
        "Pre-quote valuation benchmarking and Agreed Value / Reinstatement Value clauses with escalation extensions.",
    },
    {
      title: "Monsoon Inundation & Flash Flooding (STFI)",
      trigger:
        "Severe cloudbursts, blocked municipal drains, or river overflows inundating ground-level factory floors and basements.",
      impact:
        "Submerged electrical motors, rusted CNC spindles, and completely ruined raw materials.",
      solution:
        "Storm, Tempest, Flood & Inundation (STFI) cover with low deductible thresholds and rapid survey advocacy.",
    },
  ],

  "engineering-insurance": [
    {
      title: "Heavy Crane & Piling Rig Overturn",
      trigger:
        "Heavy earthmoving equipment, crawler cranes, or piling rigs operating on uncompacted or rain-softened ground.",
      impact:
        "Over ₹50 Lakhs in equipment replacement expenses and critical site access route blockages.",
      solution:
        "Contractor's Plant & Machinery (CPM) cover encompassing overturn, transit, and structural damage.",
    },
    {
      title: "In-Progress Structural Collapse During Pouring",
      trigger:
        "Formwork failure during mass concrete pours or sudden foundation settling in uncompacted excavation zones.",
      impact:
        "Catastrophic material loss, safety injunctions, structural re-engineering, and milestone penalties.",
      solution:
        "Contractors All Risks (CAR) / Erection All Risks (EAR) including testing periods and surrounding property cover.",
    },
    {
      title: "Third-Party Structural Vibration Damage",
      trigger:
        "Deep foundation piling, sheet piling, or heavy compaction vibrations causing cracking in neighboring properties.",
      impact:
        "Third-party civil compensation lawsuits, municipal stop-work orders, and court injunctions.",
      solution:
        "High-limit Third-Party Liability (TPL) extension attached directly to the project's CAR policy.",
    },
  ],

  "solar-pumping-insurance": [
    {
      title: "Submersible Motor Burnout in Deep Borewells",
      trigger:
        "Harmonic grid feedback, high voltage spikes, lightning strikes, or dry-run friction burning motor windings underground.",
      impact:
        "Immediate irrigation failure, crop dehydration, and costly deep-well extraction and motor rewinding bills.",
      solution:
        "Down-hole machinery breakdown coverage extending beneath ground level to submersible motors and pumps.",
    },
    {
      title: "Hailstorm & Extreme Storm PV Module Shattering",
      trigger:
        "Sudden localized hailstones or gale-force wind shears cracking polycrystalline or monocrystalline solar modules.",
      impact:
        "Complete disruption of DC power generation and expensive solar string replacement needs.",
      solution:
        "Comprehensive natural perils cover covering PV glass breakage, tracking frame damage, and inverters.",
    },
    {
      title: "Remote Agricultural Theft & Cable Pilferage",
      trigger:
        "Unattended agricultural fields targeted overnight for high-purity copper DC cables, controllers, and solar panels.",
      impact: "Recurrent capital replacement costs and paralyzed farm irrigation schedules.",
      solution:
        "Burglary, theft, and malicious damage cover tailored for decentralized rural solar installations.",
    },
  ],

  "road-insurance": [
    {
      title: "Monsoon Washout & Sub-Base Scouring",
      trigger:
        "Continuous torrential monsoon downpours washing away newly laid granular sub-base (GSB) or uncured bitumen layers.",
      impact:
        "Massive rework expenditure running into tens of lakhs and unrecoverable aggregate materials washed away.",
      solution:
        "Civil road infrastructure policy covering flood, runoff, storm washout, and embankment collapse.",
    },
    {
      title: "Asphalt Paver & Heavy Roller Accidents",
      trigger:
        "Compaction rollers, asphalt pavers, or bitumen tankers tipping down steep road embankments or catching fire.",
      impact:
        "Equipment write-offs and delayed paving milestones triggering contract breach penalties.",
      solution: "Contractor's plant and equipment own-damage and third-party liability insurance.",
    },
    {
      title: "Advance Delay in Toll / Contract Startup (ALOP)",
      trigger:
        "Major landslide, culvert failure, or bridge approach damage halting the scheduled commercial opening of the expressway.",
      impact:
        "Liquidated damages (LD) from project authorities and mounting debt service bank interest.",
      solution:
        "Advance Loss of Profits (ALOP / Delay in Startup) cover protecting financial continuity.",
    },
  ],

  "liability-insurance": [
    {
      title: "Third-Party Slip, Fall & Premises Injury Claims",
      trigger:
        "Visitors, clients, or delivery agents slipping on wet marble tiles, tripping on stairwells, or injured by falling fixtures.",
      impact:
        "Exorbitant litigation defense costs, court-awarded compensation, and negative press coverage.",
      solution:
        "Commercial Public Liability Insurance covering legal defense costs, settlements, and court awards.",
    },
    {
      title: "Defective Product Liability & Batch Recalls",
      trigger:
        "Manufactured components or consumer goods suffering chemical, mechanical, or packaging defects causing harm.",
      impact:
        "Crushing consumer class actions, mandatory product recall expenses, and international contract cancellations.",
      solution:
        "Product Liability Insurance with worldwide jurisdiction extensions and recall expense riders.",
    },
    {
      title: "Professional Service Negligence & SLA Disputes",
      trigger:
        "Design calculation errors, architectural oversights, or technical advice causing severe financial loss to corporate clients.",
      impact:
        "Contractual breach damages, withheld project retainers, and legal indemnification claims.",
      solution:
        "Professional Indemnity (Errors & Omissions) protecting company balance sheets and professional reputation.",
    },
  ],

  "car-insurance": [
    {
      title: "Depreciation Deductions on Metal, Plastic & Glass Parts",
      trigger:
        "A front-end or side collision requiring replacement of fiber bumpers, headlights, and painted metal panels.",
      impact:
        "Standard policies deduct up to 50% for plastic/nylon and 30% for metal, resulting in huge out-of-pocket bills.",
      solution:
        "Zero Depreciation (Bumper-to-Bumper) add-on ensuring 100% reimbursement for parts and labor.",
    },
    {
      title: "Monsoon Water Ingestion & Engine Hydrostatic Lock",
      trigger:
        "Driving through waterlogged city roads or flash puddles where water enters the air intake and bends engine rods.",
      impact:
        "Engine replacement costs ranging between ₹1 Lakh and ₹6 Lakhs—standardly excluded as 'consequential loss'.",
      solution:
        "Engine & Gearbox Protection Cover providing comprehensive protection against water ingestion and hydrostatic lock.",
    },
    {
      title: "Total Loss / Theft & Return to Invoice (RTI) Gap",
      trigger:
        "Vehicle stolen and unrecovered or damaged beyond 75% repair threshold in a catastrophic highway collision.",
      impact:
        "Standard claims settle at depreciated IDV, leaving an enormous financial gap compared to purchase price.",
      solution:
        "Return to Invoice (RTI) add-on paying full original invoice value including road tax and registration charges.",
    },
  ],

  "bike-insurance": [
    {
      title: "Severe Road Accidents & Personal Disability",
      trigger:
        "Two-wheeler skidding on slick asphalt or collision with heavy transport causing rider fractures or disability.",
      impact:
        "Expensive surgical treatment, hospitalization, and temporary or permanent loss of earning capacity.",
      solution:
        "Compulsory and Enhanced Personal Accident (PA) cover with rider accidental medical expense benefits.",
    },
    {
      title: "Two-Wheeler Vehicle Theft & Non-Recovery",
      trigger:
        "Motorcycles or scooters stolen from public parking lots, residential streets, or commercial markets.",
      impact:
        "Complete loss of daily commuter mobility and sudden capital replacement expenditure.",
      solution:
        "Comprehensive Theft cover with rapid claim processing upon police untraced report submission.",
    },
    {
      title: "Fiber & Plastic Fairing Replacement Costs",
      trigger:
        "Even minor parking falls cracking side cowls, visor glasses, mirrors, and indicator assemblies.",
      impact:
        "High replacement cost for branded OEM fiber fairings subjected to steep standard policy depreciation.",
      solution:
        "Zero-Depreciation coverage for motorcycles and scooters ensuring full parts reimbursement.",
    },
  ],

  "commercial-vehicle-insurance": [
    {
      title: "Unlimited Third-Party MACT Bodily Injury Liabilities",
      trigger:
        "Commercial transport trucks or buses involved in highway collisions resulting in third-party injury or fatality.",
      impact:
        "Motor Accident Claims Tribunal (MACT) court awards without upper statutory limits and vehicle impoundment.",
      solution:
        "Comprehensive commercial motor policy with robust legal defense support and unlimited third-party liability.",
    },
    {
      title: "Fleet Highway Overturns & Heavy Towing Costs",
      trigger:
        "Commercial trailers overturning on remote highways or breakdown in hazardous ghat corridors.",
      impact:
        "Steep commercial crane towing charges, vehicle downtime, and secondary damage during recovery.",
      solution:
        "Enhanced Commercial Fleet Own-Damage cover including heavy-duty towing and crane assistance endorsements.",
    },
    {
      title: "Driver & Helper Accidental Injury Liabilities",
      trigger:
        "Long-haul drivers or helpers injured in nighttime collisions or while securing cargo tie-downs.",
      impact: "Statutory compensation obligations under the Employee's Compensation Act.",
      solution:
        "Workmen Compensation endorsements attached to commercial fleet policies for named and unnamed crew.",
    },
  ],

  "health-insurance": [
    {
      title: "The Room Rent Capping and Proportional Deduction Trap",
      trigger:
        "Selecting a policy with a 1% sum insured room rent cap and being admitted to a single private room during treatment.",
      impact:
        "Insurers proportionally penalize the entire bill—including surgeon charges, ICU, and OT fees—leaving a 30% to 50% out-of-pocket shortfall.",
      solution:
        "Secure plans with No Room Rent Capping or Single Private Room eligibility endorsements.",
    },
    {
      title: "Pre-Existing Disease (PED) Non-Disclosure Repudiation",
      trigger:
        "Failing to disclose historic hypertension, thyroid disorders, or diabetes during policy proposal.",
      impact:
        "Under Section 45 of IRDAI regulations, insurers can legally repudiate genuine hospitalization claims and forfeit premium.",
      solution:
        "Transparent upfront disclosure assisted by Gitvisha medical underwriting review and waiting period credit tracking.",
    },
    {
      title: "Non-Medical Consumables and Hospital Surcharges",
      trigger:
        "Surgeries where disposable items (gloves, PPE kits, surgical tapes, syringes, cotton) are billed as non-admissible items.",
      impact:
        "Standard mediclaim excludes non-medical consumables, causing Rs 25,000 to Rs 1,00,000+ unexpected personal expense.",
      solution:
        "Attach a Consumables Cover rider that pays all IRDAI List-1 non-medical consumables in full.",
    },
  ],

  "group-health-insurance": [
    {
      title: "Medical Inflation & Catastrophic Hospitalization Bills",
      trigger:
        "Employees or dependents facing oncology, cardiac bypass, or extended ICU admissions costing ₹10L–₹25L.",
      impact:
        "Severe employee financial distress, reduced productivity, and unexpected corporate benevolence requests.",
      solution:
        "Comprehensive Group Mediclaim (GMC) with cashless network access across 10,000+ accredited hospitals.",
    },
    {
      title: "The Pre-Existing Disease Waiting Period Barrier",
      trigger:
        "Standard retail policies enforcing 2-to-4 year waiting periods on hypertension, diabetes, and maternity care.",
      impact:
        "Claim rejections for employees with pre-existing conditions when healthcare support is needed most.",
      solution:
        "Corporate GMC policy with day-one waiver for pre-existing diseases, maternal care, and newborn baby cover.",
    },
    {
      title: "Cashless Claim Rejections & Room Rent Sub-Limits",
      trigger:
        "Policies with 1% room rent caps proportionally deducting all associated surgical and doctor fees during billing.",
      impact:
        "Employees stuck paying 30% to 50% of hospital bills out-of-pocket despite having insurance.",
      solution:
        "Bespoke corporate GMC structured without room rent sub-limits and with transparent claim settlement ratios.",
    },
  ],

  "personal-accident-insurance": [
    {
      title: "Permanent Total & Partial Disability Earning Loss",
      trigger:
        "Accidents resulting in loss of limbs, vision, or spinal injuries that prevent the insured from returning to work.",
      impact:
        "Permanent loss of professional salary while household expenses and specialized medical care continue.",
      solution:
        "Capital Sum Insured payout (up to 100%) for permanent total and partial disability.",
    },
    {
      title: "Temporary Total Disablement (TTD) Income Freeze",
      trigger:
        "Severe bone fractures or bed rest requirements keeping self-employed or salaried professionals away from work.",
      impact: "Weeks or months of lost professional billings and depleted emergency savings.",
      solution:
        "Weekly income compensation benefit paying an agreed weekly allowance during medical recuperation.",
    },
    {
      title: "Accidental Medical Expenses in Trauma Emergencies",
      trigger:
        "Emergency ambulance transit, ICU stabilization, and emergency orthopedic surgeries following a traffic crash.",
      impact: "Immediate cash drain before health insurance claims can be verified and settled.",
      solution:
        "Accidental Medical Expenses extension reimbursing out-of-pocket hospital bills directly.",
    },
  ],

  "marine-insurance": [
    {
      title: "Container Overboard Losses & Sea Water Ingress",
      trigger:
        "Severe maritime storm swells, vessel grounding, or container structural breaches during transoceanic shipping.",
      impact:
        "Total consignment write-offs, international letter-of-credit (LC) defaults, and buyer disputes.",
      solution:
        "Marine Cargo All Risks under Institute Cargo Clauses A (ICC-A) covering sea water damage and washing overboard.",
    },
    {
      title: "Highway Freight Collisions & Hijacking",
      trigger:
        "Inter-state transport trailers overturning on highways, bridge collapses, or armed highway robbery.",
      impact:
        "Destroyed commercial stock, supply chain disruption, and retail fulfillment penalties.",
      solution:
        "Inland Transit Clause A (All Risks) including loading, unloading, and theft/pilferage endorsements.",
    },
    {
      title: "General Average Salvage Contribution Liens",
      trigger:
        "Vessel master sacrificing cargo or hiring emergency salvage tugs to save the ship and crew from sinking.",
      impact:
        "Salvage liens placed on your cargo; goods cannot be released at destination until salvage shares are paid.",
      solution:
        "General Average and Salvage Charges covered in full without extra out-of-pocket cash deposits.",
    },
  ],

  "business-interruption-insurance": [
    {
      title: "Ongoing Fixed Overhead Burn With Zero Factory Revenue",
      trigger:
        "A major factory or warehouse fire shutting down operations for 6 to 18 months during structural rebuild.",
      impact:
        "While sales stop instantly, fixed bank EMIs, executive payroll, property leases, and taxes must still be paid.",
      solution:
        "Loss of Profits insurance covering Gross Profit, Standing Charges, and debt servicing during restoration.",
    },
    {
      title: "Permanent Customer Attrition During Lengthy Downtime",
      trigger:
        "Protracted production stoppage forcing long-term enterprise clients to migrate to competing manufacturers.",
      impact:
        "Permanent loss of market position even after the physical plant is completely rebuilt.",
      solution:
        "Increased Cost of Working (ICOW) funds allowing you to outsource production to maintain client deliveries.",
    },
    {
      title: "Supply Chain & Customer Dependency Shocks",
      trigger:
        "A catastrophic fire occurring at the premises of your sole raw material supplier or anchor buyer.",
      impact:
        "Complete operational paralysis for your business despite zero physical damage to your own property.",
      solution:
        "Contingent Business Interruption (CBI) extension extending cover to critical supplier and customer premises.",
    },
  ],

  "burglary-money-insurance": [
    {
      title: "After-Hours Forced Entry & High-Value Inventory Theft",
      trigger:
        "Intruders breaking through showroom roll-up shutters or warehouse skylights to steal electronics, jewelry, or goods.",
      impact:
        "Direct working capital loss, wrecked premises fixtures, and interrupted retail sales.",
      solution:
        "First-loss burglary insurance covering forced entry, violence, and collateral property damage.",
    },
    {
      title: "Armed Robbery of Cash-in-Transit",
      trigger:
        "Couriers or employees transporting daily retail collections from showrooms to bank branches being held up.",
      impact: "Direct liquidity loss and personal trauma for frontline staff members.",
      solution:
        "Cash-in-Transit (CIT) cover protecting funds from the moment they leave your till until deposited at the bank.",
    },
    {
      title: "Internal Employee Embezzlement & Till Theft",
      trigger:
        "Store managers, cashiers, or warehouse stock controllers manipulating ledger records and embezzling funds.",
      impact:
        "Cumulative financial leakages that can drain annual profitability before being detected in audits.",
      solution:
        "Fidelity Guarantee and Commercial Crime insurance protecting against fraudulent and dishonest employee acts.",
    },
  ],

  "employee-compensation-insurance": [
    {
      title: "Severe Workplace Accidents & Labor Court Awards",
      trigger:
        "Technicians or machine operators suffering limb amputation, spinal trauma, or fatal falls on industrial sites.",
      impact:
        "Statutory financial compensation determined by the Labor Commissioner running into tens of lakhs per incident.",
      solution:
        "Employee's Compensation policy covering statutory legal liabilities and defense costs under the EC Act.",
    },
    {
      title: "Scheduled Occupational Disease Claims",
      trigger:
        "Prolonged exposure to chemical vapors, industrial noise, or silica dust resulting in chronic occupational illnesses.",
      impact:
        "Retrospective claims filed by multiple workers and statutory safety non-compliance penalties.",
      solution:
        "Occupational Disease coverage explicitly aligned with Schedule III of the Employee's Compensation Act.",
    },
    {
      title: "Subcontractor Labor Disasters & Principal Employer Liability",
      trigger:
        "Casual or subcontractor laborers brought on-site by staffing agencies suffering severe accidents.",
      impact:
        "The law holds the Principal Employer vicariously liable if the labor contractor has inadequate insurance.",
      solution:
        "Project-wide or annual policy covering direct, casual, and contractor workforce under declared wage rolls.",
    },
  ],

  "electronic-equipment-insurance": [
    {
      title: "High-Voltage Surges & Lightning Electrical Damage",
      trigger:
        "Grid switching transients, lightning surges, or UPS failure frying microprocessors, server motherboards, and switches.",
      impact: "Expensive computational hardware write-offs and critical enterprise system outages.",
      solution:
        "Electronic Equipment Insurance (EEI) covering sudden electrical surge, arcing, and internal short-circuit.",
    },
    {
      title: "Precision Server Room HVAC Failure & Thermal Shutdown",
      trigger:
        "Cooling failure in high-density server racks leading to severe silicon heat degradation or clean-agent gas release.",
      impact: "Permanent corruption of storage arrays and prolonged database downtime.",
      solution:
        "All-risk electronic equipment cover including external data media and increased cost of working extensions.",
    },
    {
      title: "Diagnostic Bio-Medical Machinery Breakdown",
      trigger:
        "Helium quench in MRI scanners, X-ray tube arcing in CT units, or automated pathology analyzer sensor failures.",
      impact:
        "Lakhs in emergency OEM replacement components and stranded hospital patient diagnostic queues.",
      solution:
        "Specialized Medical Equipment EEI policy with OEM AMC/CMC compliance endorsements.",
    },
  ],

  "corporate-specialty-risks": [
    {
      title: "Ransomware Extortion & Global Data Breaches",
      trigger:
        "Cybercriminals breaching enterprise network defenses, encrypting customer databases, and demanding ransom.",
      impact:
        "Multi-crore extortion demands, statutory penalties under DPDP/GDPR, and forensic investigation costs.",
      solution:
        "Comprehensive Cyber Liability covering incident response, ransom negotiation, forensics, and PR defense.",
    },
    {
      title: "Shareholder Lawsuits Against Directors & Officers (D&O)",
      trigger:
        "Investors, regulators, or creditors alleging corporate misrepresentation, breach of fiduciary duty, or ESG non-compliance.",
      impact:
        "Personal financial asset exposure for board members and exorbitant corporate legal defense retainers.",
      solution:
        "Directors & Officers (D&O) Liability providing Side-A, Side-B, and Side-C coverage with non-rescindable terms.",
    },
    {
      title: "Global Master Service Agreement (MSA) Indemnities",
      trigger:
        "Enterprise clients demanding worldwide jurisdiction and strict indemnities before awarding multi-million dollar contracts.",
      impact:
        "Tender disqualification or catastrophic cross-border liability exposure in foreign jurisdictions.",
      solution:
        "Bespoke Tech E&O and Commercial Umbrella policies designed to satisfy US, European, and UK MSA standards.",
    },
  ],

  "stock-declaration-insurance": [
    {
      title: "Festive Inventory Surges & Severe Underinsurance",
      trigger:
        "Warehouses holding 3x regular inventory volumes ahead of festive seasons while maintaining a fixed annual sum insured.",
      impact:
        "A fire during peak season triggers the Average Clause, leaving up to 70% of destroyed stock unpaid.",
      solution:
        "Stock Declaration Policy enabling monthly declarations so inventory peaks are insured at 100% full value.",
    },
    {
      title: "Wasting High Flat Premiums on Empty Off-Season Storage",
      trigger:
        "Paying fixed annual insurance premiums on maximum capacity throughout quiet months when warehouses are largely empty.",
      impact: "Severe working capital drain on unused insurance coverage.",
      solution:
        "Provisional premium structure with annual reconciliation, refunding up to 50% of provisional premium.",
    },
    {
      title: "Inter-Warehouse Transfer & Mismatched Location Limits",
      trigger:
        "Rapidly shifting goods between regional distribution centers leaving individual warehouse limits mismatched.",
      impact:
        "Claim rejection when fire strikes a hub holding stock in excess of that location's specific sub-limit.",
      solution:
        "Floating Stock Declaration policy covering multiple warehouses under a single combined floating sum insured.",
    },
  ],
};

export function getProductVulnerabilities(slug: string): ProductVulnerability[] {
  return productVulnerabilities[slug] ?? productVulnerabilities["property-fire-insurance"] ?? [];
}

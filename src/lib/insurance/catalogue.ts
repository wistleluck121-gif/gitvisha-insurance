import {
  Bike,
  Building2,
  CarFront,
  Flame,
  HeartPulse,
  PackageCheck,
  ShieldCheck,
  Ship,
  Truck,
  Users,
  Wrench,
  Sun,
  Milestone,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ProductChoice = {
  name: string;
  slug: string;
  detail: string;
  requirement: string;
  icon: LucideIcon;
};

export const productCategories: {
  id: string;
  name: string;
  products: ProductChoice[];
}[] = [
  {
    id: "motor",
    name: "Motor Insurance",
    products: [
      {
        name: "Car Insurance",
        slug: "car-insurance",
        detail: "New car, renewal & cover guidance",
        requirement: "Motor Insurance",
        icon: CarFront,
      },
      {
        name: "Bike Insurance",
        slug: "bike-insurance",
        detail: "Two-wheeler cover enquiries",
        requirement: "Motor Insurance",
        icon: Bike,
      },
      {
        name: "Commercial Vehicle Insurance",
        slug: "commercial-vehicle-insurance",
        detail: "Business vehicles & fleet protection",
        requirement: "Motor Insurance",
        icon: Truck,
      },
    ],
  },
  {
    id: "health",
    name: "Health & People",
    products: [
      {
        name: "Health Insurance",
        slug: "health-insurance",
        detail: "Individual, family floater & critical illness",
        requirement: "Health Insurance",
        icon: HeartPulse,
      },
      {
        name: "Group Health Insurance",
        slug: "group-health-insurance",
        detail: "Health cover shaped around your team",
        requirement: "Group Health & Personal Accident",
        icon: Users,
      },
      {
        name: "Personal Accident Insurance",
        slug: "personal-accident-insurance",
        detail: "Understand accident protection options",
        requirement: "Group Health & Personal Accident",
        icon: HeartPulse,
      },
    ],
  },
  {
    id: "business",
    name: "Business Insurance",
    products: [
      {
        name: "Property & Fire Insurance",
        slug: "property-fire-insurance",
        detail: "Buildings, stock & operating assets",
        requirement: "Property & Fire Insurance",
        icon: Flame,
      },
      {
        name: "Engineering Insurance",
        slug: "engineering-insurance",
        detail: "Projects, equipment & machinery",
        requirement: "Engineering Insurance",
        icon: Wrench,
      },
      {
        name: "Solar Pumping Insurance",
        slug: "solar-pumping-insurance",
        detail: "Solar arrays, pumps & controller coverage",
        requirement: "Engineering Insurance",
        icon: Sun,
      },
      {
        name: "Road Insurance",
        slug: "road-insurance",
        detail: "Highways, road contracts & corridor protection",
        requirement: "Engineering Insurance",
        icon: Milestone,
      },
      {
        name: "Liability Insurance",
        slug: "liability-insurance",
        detail: "Legal liabilities & third-party exposures",
        requirement: "Liability Insurance",
        icon: ShieldCheck,
      },
      {
        name: "Corporate & Specialty Risks",
        slug: "corporate-specialty-risks",
        detail: "Complex business protection needs",
        requirement: "Specialty & Corporate Risks",
        icon: Building2,
      },
    ],
  },
  {
    id: "marine",
    name: "Marine & Transit",
    products: [
      {
        name: "Marine Insurance",
        slug: "marine-insurance",
        detail: "Cargo protection across your supply chain",
        requirement: "Marine Insurance",
        icon: Ship,
      },
      {
        name: "Business Interruption Insurance",
        slug: "business-interruption-insurance",
        detail: "Consider cover for insured disruptions",
        requirement: "Business Interruption",
        icon: PackageCheck,
      },
    ],
  },
];

import { Bike, Building2, CarFront, Flame, HeartPulse, PackageCheck, ShieldCheck, Ship, Truck, Users, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ProductChoice = {
  name: string;
  detail: string;
  requirement: string;
  icon: LucideIcon;
  route?: "/car-insurance";
};

export const productCategories: { id: string; name: string; products: ProductChoice[] }[] = [
  { id: "motor", name: "Motor", products: [
    { name: "Car Insurance", detail: "New car, renewal & cover guidance", requirement: "Motor Insurance", icon: CarFront, route: "/car-insurance" },
    { name: "Bike Insurance", detail: "Two-wheeler cover enquiries", requirement: "Motor Insurance", icon: Bike },
    { name: "Commercial Vehicles", detail: "Business vehicles & fleet protection", requirement: "Motor Insurance", icon: Truck },
  ] },
  { id: "health", name: "Health & People", products: [
    { name: "Group Health", detail: "Health cover shaped around your team", requirement: "Group Health & Personal Accident", icon: Users },
    { name: "Personal Accident", detail: "Understand accident protection options", requirement: "Group Health & Personal Accident", icon: HeartPulse },
  ] },
  { id: "business", name: "Business", products: [
    { name: "Property & Fire", detail: "Buildings, stock & operating assets", requirement: "Property & Fire Insurance", icon: Flame },
    { name: "Engineering", detail: "Projects, equipment & machinery", requirement: "Engineering Insurance", icon: Wrench },
    { name: "Liability", detail: "Legal liabilities & third-party exposures", requirement: "Liability Insurance", icon: ShieldCheck },
    { name: "Corporate Risks", detail: "Complex business protection needs", requirement: "Specialty & Corporate Risks", icon: Building2 },
  ] },
  { id: "marine", name: "Marine & Transit", products: [
    { name: "Marine Insurance", detail: "Cargo protection across your supply chain", requirement: "Marine Insurance", icon: Ship },
    { name: "Business Interruption", detail: "Consider cover for insured disruptions", requirement: "Business Interruption", icon: PackageCheck },
  ] },
];
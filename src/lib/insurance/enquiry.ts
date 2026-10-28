import { z } from "zod";

export const policyTypes = ["Comprehensive", "Third Party", "Own Damage"] as const;
export const vehicleEnquirySchema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name."),
  mobile: z
    .string()
    .trim()
    .regex(
      /^(?:\+91[ -]?)?[6-9]\d{9}$/,
      "Enter a valid 10-digit Indian mobile number, optionally with +91.",
    ),
  email: z.string().trim().email("Enter a valid email address."),
  city: z.string().trim().min(2, "Enter your city."),
  registration: z.string().trim(),
  makeModel: z.string().trim().min(2, "Enter the car make and model."),
  policyType: z.enum(policyTypes, { errorMap: () => ({ message: "Choose a policy type." }) }),
  expiry: z.string().refine((v) => !v || /^\d{4}-\d{2}-\d{2}$/.test(v), "Enter a valid date."),
  message: z.string().trim(),
});

export type VehicleEnquiry = z.infer<typeof vehicleEnquirySchema>;

export const healthPolicyTypes = [
  "Individual Health",
  "Family Floater",
  "Senior Citizen",
  "Critical Illness & Top-Up",
  "Group Health (Corporate)",
] as const;

export const sumInsuredTiers = [
  "₹5 Lakhs",
  "₹10 Lakhs",
  "₹15 Lakhs",
  "₹25 Lakhs",
  "₹50 Lakhs",
  "₹1 Crore+",
] as const;

export const membersCoverageOptions = [
  "Self Only",
  "Self + Spouse",
  "Self + Spouse + 1 Child",
  "Self + Spouse + 2 Children",
  "Parents / Senior Citizens",
  "Entire Family + Parents",
] as const;

export const healthEnquirySchema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name."),
  mobile: z
    .string()
    .trim()
    .regex(
      /^(?:\+91[ -]?)?[6-9]\d{9}$/,
      "Enter a valid 10-digit Indian mobile number, optionally with +91.",
    ),
  email: z.string().trim().email("Enter a valid email address."),
  city: z.string().trim().min(2, "Enter your city."),
  policyType: z.enum(healthPolicyTypes, { errorMap: () => ({ message: "Choose a plan type." }) }),
  sumInsured: z.string().trim().min(1, "Select preferred sum insured."),
  members: z.string().trim().min(1, "Select who to insure."),
  eldestAge: z.string().trim().min(1, "Select age range of eldest member."),
  hasExistingConditions: z.enum(["No", "Yes"], {
    errorMap: () => ({ message: "Please specify pre-existing conditions." }),
  }),
  message: z.string().trim().optional(),
});

export type HealthEnquiry = z.infer<typeof healthEnquirySchema>;

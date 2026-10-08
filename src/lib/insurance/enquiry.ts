import { z } from "zod";

export const policyTypes = ["Comprehensive", "Third Party", "Own Damage"] as const;
export const vehicleEnquirySchema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name."),
  mobile: z.string().trim().regex(/^(?:\+91[ -]?)?[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number, optionally with +91."),
  email: z.string().trim().email("Enter a valid email address."),
  city: z.string().trim().min(2, "Enter your city."),
  registration: z.string().trim(),
  makeModel: z.string().trim().min(2, "Enter the car make and model."),
  policyType: z.enum(policyTypes, { errorMap: () => ({ message: "Choose a policy type." }) }),
  expiry: z.string().refine((v) => !v || /^\d{4}-\d{2}-\d{2}$/.test(v), "Enter a valid date."),
  message: z.string().trim(),
});

export type VehicleEnquiry = z.infer<typeof vehicleEnquirySchema>;
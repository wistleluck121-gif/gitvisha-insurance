import { describe, expect, it } from "vitest";
import { vehicleEnquirySchema } from "./enquiry";

const valid = { fullName: "Test Person", mobile: "9876543210", email: "test@example.com", city: "Delhi", registration: "", makeModel: "Maruti Baleno", policyType: "Comprehensive", expiry: "", message: "" };
describe("Vehicle enquiry rules", () => {
  it("accepts empty optional registration and policy expiry", () => {
    expect(vehicleEnquirySchema.safeParse(valid).success).toBe(true);
  });
  it("supports exactly the three requested policy types", () => {
    for (const policyType of ["Comprehensive", "Third Party", "Own Damage"]) expect(vehicleEnquirySchema.safeParse({ ...valid, policyType }).success).toBe(true);
    expect(vehicleEnquirySchema.safeParse({ ...valid, policyType: "Other" }).success).toBe(false);
  });
  it("requires sensible contact and vehicle details", () => {
    for (const name of ["fullName", "mobile", "email", "city", "makeModel", "policyType"]) expect(vehicleEnquirySchema.safeParse({ ...valid, [name]: "" }).success).toBe(false);
  });
  it("rejects invalid mobile numbers and email addresses", () => {
    expect(vehicleEnquirySchema.safeParse({ ...valid, mobile: "1234" }).success).toBe(false);
    expect(vehicleEnquirySchema.safeParse({ ...valid, email: "invalid" }).success).toBe(false);
    expect(vehicleEnquirySchema.safeParse({ ...valid, mobile: "+919876543210" }).success).toBe(true);
  });
});
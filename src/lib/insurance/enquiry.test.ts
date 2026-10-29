import { describe, expect, it } from "vitest";
import { healthEnquirySchema, vehicleEnquirySchema } from "./enquiry";

const valid = {
  fullName: "Test Person",
  mobile: "9876543210",
  email: "test@example.com",
  city: "Delhi",
  registration: "",
  makeModel: "Maruti Baleno",
  policyType: "Comprehensive",
  expiry: "",
  message: "",
};

describe("Vehicle enquiry rules", () => {
  it("accepts empty optional registration and policy expiry", () => {
    expect(vehicleEnquirySchema.safeParse(valid).success).toBe(true);
  });
  it("supports exactly the three requested policy types", () => {
    for (const policyType of ["Comprehensive", "Third Party", "Own Damage"])
      expect(vehicleEnquirySchema.safeParse({ ...valid, policyType }).success).toBe(true);
    expect(vehicleEnquirySchema.safeParse({ ...valid, policyType: "Other" }).success).toBe(false);
  });
  it("requires sensible contact and vehicle details", () => {
    for (const name of ["fullName", "mobile", "email", "city", "makeModel", "policyType"])
      expect(vehicleEnquirySchema.safeParse({ ...valid, [name]: "" }).success).toBe(false);
  });
  it("rejects invalid mobile numbers and email addresses", () => {
    expect(vehicleEnquirySchema.safeParse({ ...valid, mobile: "1234" }).success).toBe(false);
    expect(vehicleEnquirySchema.safeParse({ ...valid, email: "invalid" }).success).toBe(false);
    expect(vehicleEnquirySchema.safeParse({ ...valid, mobile: "+919876543210" }).success).toBe(
      true,
    );
  });
});

const validHealth = {
  fullName: "Ananya Sharma",
  mobile: "9876543210",
  email: "ananya@example.com",
  city: "Bengaluru",
  policyType: "Family Floater",
  sumInsured: "₹25 Lakhs",
  members: "Self + Spouse + 1 Child",
  eldestAge: "36-45",
  hasExistingConditions: "No",
  message: "Looking for zero room-rent cap policy",
};

describe("Health enquiry rules", () => {
  it("validates complete health enquiry correctly", () => {
    expect(healthEnquirySchema.safeParse(validHealth).success).toBe(true);
  });

  it("supports valid health policy types", () => {
    for (const policyType of [
      "Individual Health",
      "Family Floater",
      "Senior Citizen",
      "Critical Illness & Top-Up",
      "Group Health (Corporate)",
    ]) {
      expect(healthEnquirySchema.safeParse({ ...validHealth, policyType }).success).toBe(true);
    }
    expect(
      healthEnquirySchema.safeParse({ ...validHealth, policyType: "Pet Insurance" }).success,
    ).toBe(false);
  });

  it("requires required fields", () => {
    for (const field of [
      "fullName",
      "mobile",
      "email",
      "city",
      "sumInsured",
      "members",
      "eldestAge",
    ]) {
      expect(healthEnquirySchema.safeParse({ ...validHealth, [field]: "" }).success).toBe(false);
    }
  });

  it("supports phone with +91 country code", () => {
    expect(healthEnquirySchema.safeParse({ ...validHealth, mobile: "+919876543210" }).success).toBe(
      true,
    );
    expect(healthEnquirySchema.safeParse({ ...validHealth, mobile: "12345" }).success).toBe(false);
  });
});

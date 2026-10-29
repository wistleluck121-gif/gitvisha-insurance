import { describe, expect, it } from "vitest";
import { industriesData } from "./industries";

describe("Industries Risk Catalogue", () => {
  it("contains all core sectors with valid configurations", () => {
    const industries = Object.values(industriesData);
    expect(industries.length).toBe(7);

    industries.forEach((ind) => {
      expect(ind.slug.length).toBeGreaterThan(0);
      expect(ind.title.length).toBeGreaterThan(0);
      expect(ind.heroHeadline.length).toBeGreaterThan(0);
      expect(ind.risks.length).toBeGreaterThan(3);
      expect(ind.solutions.length).toBeGreaterThan(2);
      expect(ind.underwritingChecklist.length).toBeGreaterThan(2);
      expect(ind.faqs.length).toBeGreaterThan(1);

      // Verify all risks have categories, impacts, and recommendations
      ind.risks.forEach((r) => {
        expect(r.category).toBeDefined();
        expect(r.title.length).toBeGreaterThan(0);
        expect(r.description.length).toBeGreaterThan(0);
        expect(r.impact.length).toBeGreaterThan(0);
        expect(r.recommendedCover.length).toBeGreaterThan(0);
      });
    });
  });
});

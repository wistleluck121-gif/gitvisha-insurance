import { describe, expect, it } from "vitest";
import { productCategories } from "./catalogue";

describe("Product destinations", () => {
  it("keeps car insurance as the only dedicated motor product flow", () => {
    const motor = productCategories.find((category) => category.id === "motor");
    expect(motor?.products.filter((product) => product.route).map((product) => product.route)).toEqual(["/car-insurance"]);
    expect(motor?.products.find((product) => product.name === "Bike Insurance")?.requirement).toBe("Motor Insurance");
    expect(motor?.products.find((product) => product.name === "Commercial Vehicles")?.requirement).toBe("Motor Insurance");
  });
});
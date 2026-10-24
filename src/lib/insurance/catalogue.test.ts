import { describe, expect, it } from "vitest";
import { productCategories } from "./catalogue";

describe("Product destinations", () => {
  it("gives every listed insurance product a dedicated product slug", () => {
    const products = productCategories.flatMap((category) => category.products);
    expect(products.length).toBeGreaterThan(0);
    expect(products.every((product) => product.slug.length > 0)).toBe(true);
    expect(new Set(products.map((product) => product.slug)).size).toBe(products.length);
  });
});

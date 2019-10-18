import dimensions, { IDimensions } from "../../src/constants/dimensions";

describe("dimensions", () => {
  test("dimensions - must be defined", () => {
    expect(dimensions).toBeDefined();
    expect(typeof dimensions === "object").toBeTruthy();
  });
  test("dimensions - must match", () => {
    const { window, isSmallDevice }: IDimensions = dimensions;
    expect(window).toHaveProperty("width");
    expect(window).toHaveProperty("height");
    expect(typeof window.width === "number").toBeTruthy();
    expect(typeof window.height === "number").toBeTruthy();
    expect(typeof isSmallDevice === "boolean").toBeTruthy();
  });
});

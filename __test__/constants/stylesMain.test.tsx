import stylesMain from "../../src/constants/stylesMain";

describe("stylesMain", () => {
  test("stylesMain - must be defined", () => {
    expect(stylesMain).toBeDefined();
    expect(typeof stylesMain === "object").toBeTruthy();
  });
  test("colors, shadows, font - must match", () => {
    const { colors, shadows, font } = stylesMain;
    expect(colors).toBeDefined();
    expect(typeof colors === "object").toBeTruthy();
    expect(shadows).toBeDefined();
    expect(typeof shadows === "object").toBeTruthy();
    expect(font).toBeDefined();
    expect(typeof font === "object").toBeTruthy();
  });
});

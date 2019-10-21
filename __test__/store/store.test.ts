import store from "../../src/store/store";

describe("REDUX - store", () => {
  test("should be defined and function", () => {
    expect(store).toBeDefined();
    expect(typeof store === "function").toBeTruthy;
    expect(store({}).getState).toBeDefined();
    expect(store({}).replaceReducer).toBeDefined();
    expect(store({}).subscribe).toBeDefined();
  });
});

import {
  LOADING_DATA_START,
  LOADING_DATA_STOP
} from "../../../src/store/actions/types";

describe("REDUX - TYPES", () => {
  describe("LOADING_DATA_START", () => {
    test("should be defined and string", () => {
      expect(LOADING_DATA_START).toBeDefined();
      expect(typeof LOADING_DATA_START === "string").toBeTruthy();
    });
  });

  describe("LOADING_DATA_STOP", () => {
    test("should be defined and string", () => {
      expect(LOADING_DATA_STOP).toBeDefined();
      expect(typeof LOADING_DATA_STOP === "string").toBeTruthy();
    });
  });
});

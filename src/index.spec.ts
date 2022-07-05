// @ts-ignore see https://github.com/jest-community/jest-extended#setup
import * as matchers from "jest-extended";
import diamond from ".";
import buildLine from "./buildLine";

expect.extend(matchers);

describe("Diamond", () => {
  test("That's a test!", () => {
    expect(diamond(1)).toEqual(["*"]);
  });

  test("That's a test!", () => {
    expect(diamond(3)).toEqual([" *", "***", " *"]);
  });

  test("That's a test!", () => {
    expect(diamond(5)).toEqual(["  *", " ***", "*****", " ***", "  *"]);
  });

  test("That's a test!", () => {
    expect(diamond(2)).toEqual("invalid_dimension");
  });
});

describe("Build line", () => {
  test("Build line 0, 1", () => {
    expect(buildLine(0, 1)).toEqual("*");
  });

  test("Build line 1, 3", () => {
    expect(buildLine(1, 3)).toEqual("***");
  });

  test("Build line 1, 7", () => {
    expect(buildLine(1, 7)).toEqual("  ***");
  });

  test("Build line 2, 7", () => {
    expect(buildLine(2, 7)).toEqual(" *****");
  });

  test("Build line 4, 7", () => {
    expect(buildLine(4, 7)).toEqual(" *****");
  });
});

/*

   *
  ***
 *****
*******
 *****     4 -> 2
  ***      5 -> 1
   *       6 -> 0

*/

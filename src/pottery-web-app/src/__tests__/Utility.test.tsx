import { dateStringToComponentValue } from "../common/utility";

describe("Utility Functions tests", () => {
  test("dateStringToComponentValue with undefined", () => {
    const dateString = undefined;
    const actual = dateStringToComponentValue(dateString);
    expect(actual).toEqual("");
  });

  test("dateStringToComponentValue with empty string", () => {
    const dateString = "";
    const actual = dateStringToComponentValue(dateString);
    expect(actual).toEqual("");
  });

  test("dateStringToComponentValue with valid date string", () => {
    const dateString = "2022-10-10";
    const actual = dateStringToComponentValue(dateString);
    expect(actual).toEqual("2022-10-10");
  });

  test("dateStringToComponentValue with valid dateTime string", () => {
    const dateString = "2022-10-10T00:00:00";
    const actual = dateStringToComponentValue(dateString);
    expect(actual).toEqual("2022-10-10");
  });

  test("dateStringToComponentValue with invalid string", () => {
    const dateString = "test";
    const actual = dateStringToComponentValue(dateString);
    expect(actual).toEqual(null);
  });
});

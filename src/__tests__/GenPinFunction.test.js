import { GenPinFunction } from "../Common/GenPinFunction";
import { duplicateAndSequenceCheck } from "../Common/GenPinFunction";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";

configure({ adapter: new EnzymeAdapter() });

describe("Test Generate pin Function", () => {

  test("Test GenPinFunction", () => {
    let pinFunRes = GenPinFunction();
    expect(pinFunRes).not.toBe(null);
  });

  test("Test GenPinFunction output type", () => {
    let pinFunRes = GenPinFunction();
    expect(typeof pinFunRes).toBe("object");
  });

  test("Test DUPLICATE to be false", () => {
    let pinFunRes = duplicateAndSequenceCheck(101);
    expect(pinFunRes).toBe(false);
  });

  test("Test DESCENDING to be false", () => {
    let pinFunRes = duplicateAndSequenceCheck(1013);
    expect(pinFunRes).toBe(false);
  });

  test("Test ASCENDING to be false", () => {
    let pinFunRes = duplicateAndSequenceCheck(8635);
    expect(pinFunRes).toBe(false);
  });

  test("Test SEQUENCIAL to be false", () => {
    let pinFunRes = duplicateAndSequenceCheck(4027);
    expect(pinFunRes).toBe(false);
  });

  test("Test DUPLICATE to be true", () => {
    let pinFunRes = duplicateAndSequenceCheck(1133);
    expect(pinFunRes).toBe(true);
  });

  test("Test DESCENDING to be true", () => {
    let pinFunRes = duplicateAndSequenceCheck(3210);
    expect(pinFunRes).toBe(true);
  });

  test("Test ASCENDING to be true", () => {
    let pinFunRes = duplicateAndSequenceCheck(1234);
    expect(pinFunRes).toBe(true);
  });

  test("Test SEQUENCIAL to be true", () => {
    let pinFunRes = duplicateAndSequenceCheck(3456);
    expect(pinFunRes).toBe(true);
  });
  
});

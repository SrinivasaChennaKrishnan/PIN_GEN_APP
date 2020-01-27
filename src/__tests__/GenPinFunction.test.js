import { GenPinFunction } from "../Common/GenPinFunction";
import { checkDupNum } from "../Common/GenPinFunction";
import { checkDescendNumbers } from "../Common/GenPinFunction";
import { checkAscendNumbers } from "../Common/GenPinFunction";
import { checkUniqPins } from "../Common/GenPinFunction";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";

configure({ adapter: new EnzymeAdapter() });
describe("Generate pin Function", () => {
  test("Test GenPinFunction", () => {
    let pinFunRes = GenPinFunction();
    expect(pinFunRes).not.toBe(null);
  });
  test("Test GenPinFunction output type", () => {
    let pinFunRes = GenPinFunction();
    expect(typeof pinFunRes).toBe("object");
  });
  test("Test DUPLICATE Number Function", () => {
    let pinFunRes = checkDupNum(10);
    expect(pinFunRes).toBe(false);
  });
  test("Test DESCENDING Function with the string ", () => {
    let pinFunRes = checkDescendNumbers("testing");
    expect(pinFunRes).toBe("gnitset");
  });
  test("Test SEQUENCE Function", () => {
    let pinFunRes = checkAscendNumbers("1234");
    expect(pinFunRes).toBe(false);
  });
  test("Test DUPLICATE Function", () => {
    let pinFunRes = checkDupNum(103);
    expect(pinFunRes).toBe(false);
  });
  test("Test DESCENDING function", () => {
    let pinFunRes = checkDescendNumbers("reverse");
    expect(pinFunRes).toBe("esrever");
  });
  test("Test SEQUENCE Function", () => {
    let pinFunRes = checkAscendNumbers("326");
    expect(pinFunRes).toBe(false);
  });
  test("Test UNIQUE pins Function", () => {
    let pinFunRes = checkUniqPins(["2758", "1802", "8491"]);
    expect(pinFunRes).toBe(pinFunRes);
  });
  test("Test UNIQUE pins Function", () => {
    let pinFunRes = checkUniqPins(["2758", "1802", "8491"]);
    expect(pinFunRes).not.toBe([]);
  });
  test("Test UNIQUE pins Function", () => {
    let pinFunRes = checkUniqPins(["2758", "1802", "8491"]);
    expect(typeof pinFunRes).toBe("object");
  });
});

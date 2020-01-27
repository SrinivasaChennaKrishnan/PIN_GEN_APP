import React from "react";
import { shallow } from "enzyme";
import { GeneratePinTab } from "../Components/GeneratePinTab";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";
configure({ adapter: new EnzymeAdapter() });
let PropVal = {
  userObject: [],
  generatedPin: []
};
describe("Generate pin Tab Test Cases", () => {
  let wrapper;
  wrapper = shallow(<GeneratePinTab {...PropVal} />);
  test("Test Snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("Test Length", () => {
    expect(wrapper.length).not.toBe(null);
  });
  test("Test Generate Button Text", () => {
    expect(wrapper.find("#generate").text()).toEqual("GENERATE");
  });
  test("Test Save Button Text", () => {
    expect(wrapper.find("#save").text()).toEqual("SAVE");
  });
  test("Test Div count", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });
  test("Test Button count", () => {
    expect(wrapper.find("button").length).toEqual(2);
  });
});

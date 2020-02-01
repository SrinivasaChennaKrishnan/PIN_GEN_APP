import React from "react";
import { shallow } from "enzyme";
import GeneratePinTab from "../Components/GeneratePinTab";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";

configure({ adapter: new EnzymeAdapter() });

let PropVal = {
  userObject: [],
  generatedPin: []
};

describe("Test Generate Pin Tab", () => {
  let wrapper;
  wrapper = shallow(<GeneratePinTab {...PropVal} />);

  test("Check whether the wrapper match with snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Check the wrapper length", () => {
    expect(wrapper.length).not.toBe(null);
  });

  test("Check Generate Button Text", () => {
    expect(wrapper.find("#generate").text()).toEqual("GENERATE");
  });

  test("Check save Button Text", () => {
    expect(wrapper.find("#save").text()).toEqual("SAVE");
  });

  test("Check Buttons count", () => {
    expect(wrapper.find("button").length).toEqual(2);
  });
});

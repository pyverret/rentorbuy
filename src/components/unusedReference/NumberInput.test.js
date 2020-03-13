import React from "react";
import {configure, shallow} from "enzyme";
import NumberInput from "./NumberInput";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Input Number Component", () => {
  const inputGroup = shallow(<NumberInput name="input-field" text="Label Title" />);

  it("Rendered Label", () => {
    expect(inputGroup.find("label").length).toEqual(1);
  });

  it("Rendered Input", () => {
    expect(inputGroup.find("input").length).toEqual(1);
  });

  it("Label Text", () => {
    expect(inputGroup.find("label").text()).toEqual("Label Title");
  });

  it("Label for Target", () => {
    expect(inputGroup.find("label").prop("htmlFor")).toEqual("input-field");
  });

  it("Input Id", () => {
    expect(inputGroup.find("input").prop("id")).toEqual("input-field");
  });

  it("Input Default Value", () => {
    expect(inputGroup.state("value")).toEqual(0);
  });

  it("input Change", () => {
    inputGroup.find("input").simulate("change", { target: { value: 123 } });

    expect(inputGroup.state("value")).toEqual(123);
  });

  it("Input Negative Number Return Zero", () => {
    inputGroup.find("input").simulate("change", { target: { value: -1 } });

    expect(inputGroup.state("value")).toEqual(0);
  });
});
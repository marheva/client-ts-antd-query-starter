import React from "react";
import CatalogLayout from "../index";

describe("should render CatalogLayout component", () => {
  const component = shallow(<CatalogLayout />);
  expect(component).toMatchSnapshot();
  it("should render Layout", () => {
    expect(component.find("CustomComponentStyledLayout").length).toBe(1);
  });
  it("should render Layout Components", () => {
    expect(component.find("CustomComponentStyledLayoutHeader").length).toBe(1);
    expect(component.find("CustomComponentStyledLayoutContent").length).toBe(1);
    expect(component.find("CustomComponentStyledLayoutFooter").length).toBe(1);
  });
});

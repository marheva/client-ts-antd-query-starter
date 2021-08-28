import React from "react";
import Cart from "../Cart";

describe("should render Cart component", () => {
  const component = shallow(<Cart />);
  expect(component).toMatchSnapshot();
  it("should contain Wrapper & AppRoutes component", () => {
    expect(component.find("CustomComponentStyledWrapper").length).toBe(1);
  });
});

import React from "react";
import Footer from "../index";

describe("should render Footer component", () => {
  const component = shallow(<Footer />);
  expect(component).toMatchSnapshot();
  it("should render Footer", () => {
    expect(component.find("CustomComponentStyledContainer").length).toBe(1);
  });
});

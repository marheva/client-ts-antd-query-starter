import React from "react";
import Root from "../Root";

describe("should render Root component", () => {
  const component = shallow(<Root />);
  expect(component).toMatchSnapshot();
  it("should contain BrowserRouter & AppRoutes component", () => {
    expect(component.find("BrowserRouter").length).toBe(1);
    expect(component.find("AppRoutes").length).toBe(1);
  });
});

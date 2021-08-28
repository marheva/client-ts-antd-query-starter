import React from "react";
import Header from "../index";

describe("should render Header component", () => {
  const component = shallow(<Header />);
  expect(component).toMatchSnapshot();
  it("should render Wrapper", () => {
    expect(component.find("ContextConsumer").length).toBe(1);
  });
});

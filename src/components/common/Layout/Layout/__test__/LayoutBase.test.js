import React from "react";
import Layout from "../LayoutBase";

const component = (props) => shallow(<Layout children={props} />);

describe("LayoutBase component", () => {
  it("should render with children props", () => {
    const LayoutComponent = component(<h1>Test Layout children</h1>);
    expect(toJson(LayoutComponent)).toMatchSnapshot();
  });
  it("should render without children props", () => {
    const LayoutComponent = component();
    expect(toJson(LayoutComponent)).toMatchSnapshot();
  });
  it("should render with Layout", () => {
    const LayoutComponent = component();
    expect(LayoutComponent.find("Layout").length).toBe(1);
  });
});

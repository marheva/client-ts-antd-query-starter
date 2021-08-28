import React from "react";
import LayoutHeaderBase from "../LayoutHeaderBase";

const component = (props) => shallow(<LayoutHeaderBase children={props} />);

describe("LayoutHeaderBaseBase component", () => {
  it("should render with children props", () => {
    const LayoutHeaderBaseComponent = component(
      <h1>Test LayoutHeaderBase children</h1>
    );
    expect(toJson(LayoutHeaderBaseComponent)).toMatchSnapshot();
  });
  it("should render without children props", () => {
    const LayoutHeaderBaseComponent = component();
    expect(toJson(LayoutHeaderBaseComponent)).toMatchSnapshot();
  });
  it("should render with Header", () => {
    const LayoutComponent = component();
    expect(LayoutComponent.find("Header").length).toBe(1);
  });
});

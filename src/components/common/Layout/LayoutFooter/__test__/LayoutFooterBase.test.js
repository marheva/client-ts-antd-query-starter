import React from "react";
import LayoutFooter from "../LayoutFooterBase";

const component = (props) => shallow(<LayoutFooter children={props} />);

describe("LayoutFooterBase component", () => {
  it("should render with children props", () => {
    const LayoutFooterComponent = component(
      <h1>Test LayoutFooter children</h1>
    );
    expect(toJson(LayoutFooterComponent)).toMatchSnapshot();
  });
  it("should render without children props", () => {
    const LayoutFooterComponent = component();
    expect(toJson(LayoutFooterComponent)).toMatchSnapshot();
  });
  it("should render with Footer", () => {
    const LayoutComponent = component();
    expect(LayoutComponent.find("Footer").length).toBe(1);
  });
});

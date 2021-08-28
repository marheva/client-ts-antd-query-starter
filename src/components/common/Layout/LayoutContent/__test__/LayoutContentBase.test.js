import React from "react";
import LayoutContent from "../LayoutContentBase";

const component = (props) => shallow(<LayoutContent children={props} />);

describe("LayoutContentBase component", () => {
  it("should render with children props", () => {
    const LayoutContentComponent = component(
      <h1>Test LayoutContent children</h1>
    );
    expect(toJson(LayoutContentComponent)).toMatchSnapshot();
  });
  it("should render without children props", () => {
    const LayoutContentComponent = component();
    expect(toJson(LayoutContentComponent)).toMatchSnapshot();
  });
  it("should render with Content", () => {
    const LayoutComponent = component();
    expect(LayoutComponent.find("Content").length).toBe(1);
  });
});

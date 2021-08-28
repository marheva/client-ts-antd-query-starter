import React from "react";
import LayoutSiderBase from "../LayoutSiderBase";

const component = (props) => shallow(<LayoutSiderBase children={props} />);

describe("LayoutSiderBaseBase component", () => {
  it("should render with children props", () => {
    const LayoutSiderBaseComponent = component(
      <h1>Test LayoutSiderBase children</h1>
    );
    expect(toJson(LayoutSiderBaseComponent)).toMatchSnapshot();
  });
  it("should render without children props", () => {
    const LayoutSiderBaseComponent = component();
    expect(toJson(LayoutSiderBaseComponent)).toMatchSnapshot();
  });
  it("should render with Sider", () => {
    const LayoutComponent = component();
    expect(LayoutComponent.find("Sider").length).toBe(1);
  });
});
